import Head from 'next/head';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';
import Headernav from '@/components/Headernav';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '@/components/Footer';

interface VehicleType {
  id: number;
  documentId: string;
  name: string;
  icon: string;
  value: string;
 
}
interface WashPackageAttributes {
  title: string;
  price: number;
  duration: number;
  features: string;
}
interface Location {
  id: number;
  name: string;
}
interface Service {
  option_id: string | undefined;
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  link: string;
  option_value: string;
}
interface Package {
  id: number;
  documentId: string;
  name: string;
  price: number;
  duration: string;
 
  services: Service[];

  
}
interface FormErrors {
  phone?: string;
  paymentType?: string;
  termsAccepted?: string;
}
interface BookingData {
  data: {
    name: string;
    Location:string;
    Price:string;
    Duration:string;
    client:string;
    BookingDate:string;
    // Add other properties as needed
  };
  
}
interface OrderData {
  data: {
    Product: string;
    Price:string;
    Quantity:number;
    Booking:number;
    // Add other properties as needed
  };
  }
  interface Package {
    id: number;
    name: string;
    bookingId: number; // Add booking ID to package
  }
const Header = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("option1");
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>(''); // Tracks the selected location
  const [services, setServices] = useState<Service[]>([]); // Set the state type to an array of services
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedPackagesCount, setSelectedPackagesCount] = useState<{ [bookingId: number]: { [packageId: string]: number } }>({}); // To track package selection count

   // Add this to verify the state
  const [showExtraServices, setShowExtraServices] = useState(true);
  const [isCouponVisible, setCouponVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [bookingId, setBookingId] = useState<string>('');
  
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  
  useEffect(() => {
    // Fetch the data from the Strapi API
    fetch('http://localhost:1337/api/vehicle-types')
      .then(response => response.json())
      .then(data => setVehicleTypes(data.data))
      .catch(error => console.error('Error fetching vehicle types:', error));

      fetch('http://localhost:1337/api/locations')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Debugging line
        // Adjust based on actual API response structure
        if (Array.isArray(data)) {
          setLocations(data);
        } else if (data.data) {
          setLocations(data.data); // Assuming the API wraps the array in a `data` object
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching locations:', error));

      fetch('http://localhost:1337/api/services')
      .then(response => response.json())
      .then(data => setServices(data.data));

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:1337/api/packages?populate=*'); // Adjust the URL as per your Strapi setup
          const data = await response.json();
  
          // Parse features field for each package
          const parsedPackages: Package[] = data.data.map((pkg: any) => ({
            ...pkg,
          }));
  
          setPackages(parsedPackages);
        } catch (error) {
          console.error('Error fetching wash packages:', error);
        }
      };
  
      fetchData();
     
  }, []);
  

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedVehicle(event.target.value);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };
  const handleSelectService = (service: Service) => {
    const updatedServices = [...selectedServices, service];
    setSelectedServices(updatedServices);
  
    // Calculate total price and duration
    const newTotalPrice = updatedServices.reduce((acc, curr) => acc + curr.price, 0);
    const newTotalDuration = updatedServices.reduce((acc, curr) => acc + (parseInt(curr.duration) || 0), 0); // Ensure duration is parsed to a number
  
    setTotalPrice(newTotalPrice);
    setTotalDuration(newTotalDuration);
  };
  
  const handleSelectPackage = (pkg: Package, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setSelectedPackage(pkg);
    setShowExtraServices(false);

    setSelectedPackagesCount((prevCount) => {
      const bookingCount = prevCount[pkg.bookingId] || {};
      const currentCount = bookingCount[pkg.id] || 0;
      const updatedCount = currentCount + 1;

      console.log(`Updated Count for Package ${pkg.id} in Booking ${pkg.bookingId}: ${updatedCount}`);

      return {
        ...prevCount,
        [pkg.bookingId]: {
          ...bookingCount,
          [pkg.id]: updatedCount,
        },
      };
    });
  };
  const handleCouponLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCouponVisible(true);
  };
  const toggleFormVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the form from submitting
    setShowForm(prevState => !prevState);
};

  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDateTime(date);
  };
  
  const handleConfirmBooking = async () => { 

    
    const uniqueBookingId = `Booking #${Math.floor(Math.random() * 90000) + 10000}`;  // Generate unique booking ID based on timestamp
    console.log(uniqueBookingId );
    // Extract the first 5 digits from the timestamp (excluding "Booking #")
   
    
      
    const selectedLocationData = locations.find(location => location.id.toString() === selectedLocation);

    if (selectedLocationData) {
      console.log(`Location: ${selectedLocationData.name}`);  // Print the selected location
    } else {
      console.log("No location selected");
    }
    selectedServices.forEach(service => {
      console.log(`Selected Service: ${service.name}`);
      console.log(`Price: $${service.price}`);
      console.log(`Duration: ${service.duration} min`);
    });
    if (selectedPackage) {
      // Log selected package details
      console.log(`Selected Package: ${selectedPackage.name}`);
      console.log(`Price: $${selectedPackage.price}`);
      console.log(`Duration: ${selectedPackage.duration} min`);
    } else {
      console.log("No package selected");
    }

    // Check if there are selected services

    console.log(`Selected Date: ${selectedDateTime}`);
    
    console.log(`First Name:${firstName}`);
    console.log(`Last Name:${ lastName}`);
    console.log(`client Name:${firstName} ${ lastName}`);
    const selectedDateObj = new Date(selectedDateTime || ""); // Ensure selectedDateTime is a valid date

    // Format the date and time
    const formattedDate = selectedDateObj.toLocaleDateString('en-GB'); // Formats as 'DD/MM/YYYY'
    const formattedTime = selectedDateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); // Formats as 'HH:mm'
  
    // Create start time string (e.g., '11-01-2025 09:00')
    const startDateTimeString = `${formattedDate.split('/').reverse().join('-')} ${formattedTime}`;
  
    // Calculate the duration and end time
    const durationMinutes = parseInt(selectedPackage?.duration || totalDuration.toString(), 10);
    const startDateTime = new Date(selectedDateObj.getTime()); // Copy selected date object
    const endDateTime = new Date(startDateTime.getTime() + durationMinutes * 60000); // Add duration in minutes
  
    const endFormattedTime = endDateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const endDateTimeString = `${formattedDate.split('/').reverse().join('-')} ${endFormattedTime}`;
  
    // Final booking time string (e.g., '11-01-2025 09:00 - 11-01-2025 09:05 (5 min)')
    const bookingTimeString = `${startDateTimeString}-${endDateTimeString}(${durationMinutes} min)`;
    console.log(`Booking Time: ${bookingTimeString}`);
    setBookingId(uniqueBookingId);
    let formErrors: any = {}; // Added type for formErrors

    if (!phone) {
      formErrors.phone = "Phone number is required.";
    }

    /*if (!paymentType) {
      formErrors.paymentType = "Please choose a payment method.";
    }*/

    if (!termsAccepted) {
      formErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    if (Object.keys(formErrors).length === 0) {
      // Submit the form
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
    if (selectedServices.length > 0) {
      selectedServices.forEach(service => {
        console.log(`Selected Service: ${service.name}`);
        console.log(`Price: $${service.price}`);
        console.log(`Duration: ${service.duration} min`);
      });
    } else {
      console.log("No extra services selected");
    }
      

    const bookingData: BookingData = {
      data: {
        name: uniqueBookingId,
        Location: selectedLocationData ? selectedLocationData.name : '',
        Price: `$${selectedPackage?.price || totalPrice || 0}`,
    Duration: `${selectedPackage?.duration || totalDuration || 0} min`,
  client:`${firstName} ${lastName}`,
  BookingDate:`${startDateTimeString}-${endDateTimeString}(${durationMinutes} min)`
        // Add other properties if needed
      },
    };
  
    console.log('Booking Data:', bookingData); // Log the data
  
    try {
      // Creating the booking
      const response = await fetch('http://localhost:1337/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.status === 201) { // Correct status for created resources
        const result = await response.json();
        console.log('Booking successful:', result); // Log the full response for debugging
       
        // Capture bookingId from the booking response
        const bookingId = result.data.id; // Assuming result.data contains the booking information

        console.log('Booking details:', bookingId);
        window.location.href = `Checkout?bookingId=${bookingId}`; // Fixed the string interpolation here

        // Proceed to create the order with the bookingId
        if (selectedPackage) {
          // Handle package order
          const orderData = {
            data: {
              Product: selectedPackage.name,
              Price: `$${selectedPackage.price}`,
              Quantity: 1, // Assuming 1 quantity for package
              Booking: bookingId,
            },
          };
  
          console.log('Order Data (Package):', orderData);
  
          const orderResponse = await fetch('http://localhost:1337/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          });
  
          if (orderResponse.status === 201) {
            const orderResult = await orderResponse.json();
            console.log('Order successfully placed (Package):', orderResult);
          } else {
            const orderErrorData = await orderResponse.json();
            console.error('Order failed (Package):', orderErrorData);
          }
        } else if (selectedServices.length > 0) {
          // Handle services order
          selectedServices.forEach(async (service) => {
            const orderData = {
              data: {
                Product: service.name,
                Price: `$${service.price}`,
                Quantity: 1, // Assuming 1 quantity for each service
                Booking: bookingId,
              },
            };
  
            console.log('Order Data (Service):', orderData);
  
            const orderResponse = await fetch('http://localhost:1337/api/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData),
            });
  
            if (orderResponse.status === 201) {
              const orderResult = await orderResponse.json();
              console.log('Order successfully placed (Service):', orderResult);
            } else {
              const orderErrorData = await orderResponse.json();
              console.error('Order failed (Service):', orderErrorData);
            }
          });
        }
      } else {
        const errorData = await response.json();
        console.error('Booking failed:', response.statusText, errorData);
      }
    } catch (error) {
      console.error('Error making booking:', error);
    }
    
  }
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Autoglow - Car Washing Service & Auto Detail HTML Template</title>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/colors.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Head>
      <Headernav />
      <main>
        {/* introBlock */}
        <div className="introBlock">
          <article className="ibsColumn text-center d-flex w-100 position-relative text-white fontAlter">
            <div className="alignHolder w-100 d-flex">
              <div className="align w-100 pt-15 pb-10 py-md-14 py-lg-20">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="text-white font-weight-bold mb-4 h2Large">Booking System</h1>
                      <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-10 mb-md-14 p-0">
                        <li><a href="home1.html">Home</a></li>
                        <li>Booking Appointment</li>
                      </ul>
                    </div>
                  </div>
                  {/* pcColumnsWrap / pcColumnsWrapVII */}
                  <div className="row pcColumnsWrap pcColumnsWrapVII mx-n10 mx-xl-n25">
                    <div className="col-12 col-md-4 col px-10 px-xl-25">
                      <article className="processColumn mb-20 mb-md-0 position-relative">
                        <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
                        <h3 className="fwMedium h3Medium mb-0 text-white">Make an appointment &amp; Bring your car</h3>
                      </article>
                    </div>
                    <div className="col-12 col-md-4 col px-10 px-xl-25">
                      <article className="processColumn mb-20 mb-md-0 position-relative">
                        <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
                        <h3 className="fwMedium h3Medium mb-0 text-white">We give our 5 star rating Services</h3>
                      </article>
                    </div>
                    <div className="col-12 col-md-4 col px-10 px-xl-25">
                      <article className="processColumn mb-20 mb-md-0 position-relative">
                        <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
                        <h3 className="fwMedium h3Medium mb-0 text-white">Pay Online & Get your car</h3>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
              <Image src="/images/img121.jpg" alt="Background" layout="fill" objectFit="cover" />
            </span>
          </article>
        </div>

        {/* bookingSystemWrap */}
        <div className="bookingSystemWrap position-relative pb-10 pb-md-15 pb-lg-22">
      <div className="container">
        <div className="formWrap bg-white rounded shadow position-relative py-7 py-md-10 px-3 px-sm-5 px-md-7 px-lg-10">
          <form action="#" className="bookingForm">
            <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
              <div className="fieldHead mb-5 mb-md-8">
                <h4 className="h4 mb-0">Select Location</h4>
                <p>Select your nearest location here</p>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <div className="coolSelectWrapper">
                    <select
                      className="coolSelect form-control rounded-sm"
                      id="country"
                      value={selectedLocation}
                      onChange={handleChanges}
                    >
                      <option value="" disabled>Select Location</option>
                      {locations.map(location => (
                        <option key={location.id} value={location.id.toString()}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
         
    

                {/* Vehicle Type */}
                <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
                  <div className="fieldHead mb-5 mb-md-8">
                    <h4 className="h4 mb-0">Vehicle Type</h4>
                    <p>Select your vehicle type</p>
                  </div>
                  <div className="d-flex flex-wrap align-items-center">
                    {vehicleTypes.map((vehicle) => (
                      <div key={vehicle.id} className="fakeRadioInput position-relative mb-0 flex-shrink-0">
                        <input
                          type="radio"
                          id={`vehicle-${vehicle.id}`}
                          className="fakeInput"
                          name="select-service"
                          value={vehicle.value}
                          checked={selectedVehicle === vehicle.value}
                          onChange={handleChange}
                        />
                        <label htmlFor={`vehicle-${vehicle.id}`} className="fake_label mb-0">
                          <span className="icnWrap d-flex justify-content-center mb-2">
                            <i className={vehicle.icon}></i>
                          </span>
                          {vehicle.name}
                        </label>
                      </div>
                    ))}
      </div>
    </div>
    <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
      <div className="fieldHead mb-5 mb-md-8">
        <h4 className="h4 mb-0">Wash Package</h4>
        <p>Which is the best wash package for your vehicle?</p>
      </div>
      <div className="row">
        {packages.map((pkg) => (
          <div key={pkg.id} className="col-12 col-md-6 col-xl-3 d-flex">
            <article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
              <h3 className="fwMedium mb-6">{pkg.name}</h3>
              <h4 className="font-weight-normal">
                <span className="d-block fwMedium">
                  <sup className="supBefore">$</sup>{pkg.price}<sup className="supAfter">99</sup>
                </span>
                <span className="d-block subtitle pt-3">Duration: {pkg.duration} min</span>
              </h4>
              <hr className="my-6" />
              <ul className="list-unstyled pcFeaturesList text-left mb-0">
              {pkg.services && pkg.services.map((service) => (
                  <li key={service.id}>{service.name}</li>
                ))}
              </ul>
              <a
                href=""
                className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto"
                data-hover="Select"
                onClick={(e) => handleSelectPackage(pkg, e)} // Pass the event here

              >
                <span className="d-block btnText">Choose Plan</span>
              </a>
            </article>
          </div>
        ))}
      </div>
    </div>
    
    <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
      <div className="fieldHead mb-5 mb-md-8">
        <h4 className="h4 mb-0">Extra Services</h4>
        <p>Choose the extra value added services for your vehicle</p>
      </div>
      <div className="form-row mx-n3">
        {showExtraServices && services.map((service) => (
          <div className="form-group col-12 col-lg-6 px-3 mb-4" >
            <div className="extSerWrap position-relative">
              <input
                type="radio"
                id={service.option_id}
                className="fakeInput"
                name="extra-service"
                value={service.option_value}
                onClick={() => handleSelectService(service)}

              />
              <label htmlFor={service.option_id} className="fakeWrap">
                <span className="fakeRadioSytles"></span>
                <span className="h6 d-block mb-1">
                  {service.name} - ${service.price}
                </span>
                <strong className="d-block time mb-5">
                  <span className="icn far fa-clock mr-1"></span>Duration: {service.duration}
                </strong>
                <div className="select-btn-wrapper">
              <button
                type="button"
                className=" btn-danger "
                onClick={() => handleSelectService(service)}
              >
                Select
              </button>
            </div>
              
                <Link href="" className="btnLnk fontAlter">More Info...</Link>
               
              </label>
             
            </div>
          </div>
          
        ))}
    </div>
    </div>
    <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
        <div className="fieldHead mb-5 mb-md-8">
          <h4 className="h4 mb-0">Appointment Details</h4>
          <p>When would you like us to come?</p>
        </div>
        <div className="form-row mx-n3">
          <div className="form-group col-12 col-sm-6 mb-4 px-3">
            <div className="apdInputWrap position-relative">
            <DatePicker
                selected={selectedDateTime}
                onChange={handleDateTimeChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control"
                placeholderText="Select Date and Time"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fieldWrap mb-4 mb-md-7 mb-md-10">
            <div className="fieldHead mb-5 mb-md-8">
              <h4 className="h4 mb-0">Booking Summary</h4>
              <p>See Duration and Price Estimate here</p>
            </div>
            <div className="form-row mx-n3">
              <div className="form-group col-12 col-md-6 mb-4 px-3">
                <article className="bsColumn bg-primary rounded p-3 p-md-6 d-flex align-items-center justify-content-between text-white fontAlter">
                  <span className="icnWrap flex-shrink-0 mr-3">
                    <span className="lnr lnr-history"></span>
                  </span>
                  <div className="textWrap text-right">
                    <h5 className="h5 mb-1 text-white">
                    {selectedPackage ? `${selectedPackage.duration} min` : `${totalDuration || '0'} min`}
                    
                    
                    </h5>
                    <strong className="text-secondary fwMedium d-block text-uppercase">Duration</strong>
                  </div>
                </article>
              </div>
              <div className="form-group col-12 col-md-6 mb-4 px-3">
                <article className="bsColumn bg-primary rounded p-3 p-md-6 d-flex align-items-center justify-content-between text-white fontAlter">
                  <span className="icnWrap flex-shrink-0 mr-3">
                    <span className="lnr lnr-cart"></span>
                  </span>
                  <div className="textWrap text-right">
                    <h5 className="h5 mb-1 text-white">
                    {selectedPackage ? `${selectedPackage.price} min` : `${totalPrice || '0'} min`}

                    </h5>
                    <strong className="text-secondary fwMedium d-block text-uppercase">Total Price</strong>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center  gap-2 mt-4">
        <button className="btn btn-primary" onClick={toggleFormVisibility}>
          Login
        </button>
        or
        <button className="btn btn-primary" onClick={toggleFormVisibility}>
          Place Order
        </button>
      </div>
      {showForm && (
      <div className="fieldWrap mb-3">
        <div className="fieldHead mb-5 mb-md-8">
          <h4 className="h4 mb-0">Enter Your Details</h4>
          <p>This information will be used to contact you about your service.</p>
        </div>
        <div className="form-row mx-n2">
          <div className="form-group col-12 col-sm-6 mb-4 px-2">
            <input
              type="text"
              className="form-control w-100 rounded-sm"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}

            />
          </div>
          <div className="form-group col-12 col-sm-6 mb-4 px-2">
            <input
              type="text"
              className="form-control w-100 rounded-sm"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}

            />
          </div>
          <div className="form-group col-12 col-sm-6 mb-4 px-2">
            <input
              type="tel"
              className="form-control w-100 rounded-sm"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}

            />
                          {errors.phone && <span className="text-danger">{errors.phone}</span>}

          </div>
          <div className="form-group col-12 col-sm-6 mb-4 px-2">
            <input
              type="email"
              className="form-control w-100 rounded-sm"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4 mb-4 px-2">
            <input
              type="text"
              className="form-control w-100 rounded-sm"
              placeholder="Make"
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4 mb-4 px-2">
            <input
              type="text"
              className="form-control w-100 rounded-sm"
              placeholder="Model"
            />
          </div>
          <div className="form-group col-12 col-md-4 mb-4 px-2">
            <input
              type="text"
              className="form-control w-100 rounded-sm"
              placeholder="Year"
            />
          </div>
          <div className="form-group col-12 mb-4 px-2">
            <textarea
              className="form-control form-textArea w-100 rounded-sm"
              placeholder="Additional Requirements"
            ></textarea>
          </div>
     {/* 
    <div className="form-group col-12 mb-4 px-2">
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType" className="form-control w-100 rounded-sm" onChange={(e) => setPaymentType(e.target.value)}>
          <option value="">Choose payment</option>
          <option value="paypal">PayPal</option>
        </select>
        {errors.paymentType && <span className="text-danger">{errors.paymentType}</span>}

      </div>
      */}
      <div className="form-group col-12 mb-4 px-2">
        <a href="#" id="couponLink" onClick={handleCouponLinkClick}>
          Do you have a coupon?
        </a>
        {isCouponVisible && (
          <div id="couponBox">
            <input
              type="text"
              className="form-control d-inline-block w-auto rounded-sm mr-2"
              placeholder="Coupon Code"

            />
            <button type="button" className="btn btn-primary">Apply</button>
          </div>
        )}
      </div>
      <div className="form-group col-12 mb-4 px-2">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsConditions"
            onChange={(e) => setTermsAccepted(e.target.checked)}

          />
          <label className="form-check-label" htmlFor="termsConditions">
            I accept the terms and conditions
          </label>
        </div>
        {errors.termsAccepted && <span className="text-danger">{errors.termsAccepted}</span>}

      </div>
     

      <div className="fieldWrap">
        <div className="form-row">
          <div className="form-group col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 px-xl-4 text-center mb-0">
            <p>
              Please note that the date and time you requested may not be available. We will contact you within 24 hours to confirm your actual appointment details.
            </p>
            <button
              type="button"
              className="btn btnThemeAlt text-capitalize position-relative border-0 p-0 mt-5 btnMinXLarge cbBtn"
              data-hover="Confirm Booking"
              onClick={handleConfirmBooking}
            >
              <span className="d-block btnText" >Confirm Booking</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
      )}
            </form>
          </div>
        </div>
      </div>
     <Footer></Footer> 
    </main>
 </>
  );
};

export default Header;
