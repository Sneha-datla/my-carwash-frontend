import { useEffect, useState } from "react";
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { features } from "process";
interface pkService {
  id: number;
    title: string;
    description: string;
    icon:string;
    image: {
      
   url: string;
       
    };
    features: string;
    services: Service[];

  };
interface Service{
  id: number;
  name:string;
}

function services() {
  const [pkservices, setServices] = useState<pkService[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/all-servies?populate=*"); // Adjust API URL as needed
        const data = await res.json();
        const formattedServices :pkService[]= data.data.map((item: any) => ({
          id: item.id,
          
          title: item.title,
          description: item.description,
          icon: item.icon,
          rating: item.rating,
          services:item.services,
          image: {
            url: item.image[0]?.url || '', // Handle case where image may not exist
            id:item.image[0].id
          },
        }));
        setServices(formattedServices); // Strapi returns data inside `data` object
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);
  return (
    <div>
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
      <Headernav></Headernav>
        <div className="introBlock innerPagesBanner">
                                
                                <article className="ibsColumn text-center d-flex w-100 position-relative text-white fontAlter">
                                    <div className="alignHolder w-100 d-flex align-items-center">
                                        <div className="align w-100 py-8 py-md-14 py-lg-20">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h1 className="text-white font-weight-bold mb-4 h2Large">Services</h1>
                                                        <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                        <li><a href="home1.html">Home</a></li>
											<li>Services</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                  <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                <Image src="/images/img24.jpg" alt="Background" layout="fill" objectFit="cover" />
                              </span> 				</article>
                  
                            </div>
                            <section className="servicesSection pb-6 pb-sm-8 pb-lg-12 pt-10 pt-md-13 pt-lg-17 pt-xl-21">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-7 mb-md-12 text-center">
              <h2>
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">We care your car</strong>
                <span className="d-block">Services We Provide</span>
              </h2>
              <p>
                We have over 20 years of experience providing carwash & detail services for both Commercial and individuals without compromise quality.
              </p>
            </header>
          </div>
        </div>
        <div className="row">
          {pkservices.map((pk) => (
            <div key={pk.id} className="col-12 col-md-6 col-lg-4">
              <div className="esColumn position-relative rounded d-block mb-6 mb-lg-11 mt-10">
                <div className="imgHolder position-relative rounded overflow-hidden">
                  <Image
                    src={`http://localhost:1337${pk.image.url}`}
                    className="img-fluid rounded w-100"
                    alt={pk.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                    <i className={pk.icon}><span className="sr-only">icon</span></i>
                  </span>
                  <h3 className="h3Small mb-1">
                    <Link href={`/servicesSingle`}>{pk.title}</Link>
                  </h3>
                  <div className="onHover descriptWrap">
                    <p>{pk.description}</p>
                    <ul className="list-unstyled pcFeaturesList text-left mb-0">
              {pk.services && pk.services.map((service) => (
                  <li key={service.id}>{service.name}</li>
                ))}
              </ul>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <aside className="callAsideBlock">
        <div className="container">
          <div className="cabHolder position-relative rounded shadow fontAlter mx-xlwd-n10 px-5 px-sm-10 py-9 py-lg-13 overflow-hidden">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8 position-static">
                <div className="extraWrap pl-sm-15 pl-lg-21">
                  <i className="icomoon-information1 icn d-none d-sm-block">
                    <span className="sr-only">icon</span>
                  </i>
                  <h3 className="text-white mb-4">Do you need help with your vehicle?</h3>
                  <p className="mb-lg-0">
                    Send us a message, or phone{' '}
                    <a href="tel:1800234567">1-800 234 567</a> between 09:00 and 18:00 Mon -Sat.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="extraWrap pl-sm-15 pl-lg-0 text-lg-right">
                  <Link href="contact.html" className="btn btnThemeWhite position-relative border-0 p-0 btnMinXLarge" data-hover="Request a Call Back">
                      <span className="d-block btnText">Request a Call Back</span>
                 
                  </Link>
                </div>
              </div>
            </div>
            <span className="bgPattern bgPatternv2 inaccessible position-absolute">
              <Image src="/images/bgPattern04.png" layout="fill" objectFit="cover" alt="image description" />
            </span>
            <span className="bgPattern bgPatternv3 inaccessible position-absolute">
              <Image src="/images/bgPattern05.png" layout="fill" objectFit="cover" alt="image description" />
            </span>
          </div>
        </div>
      </aside>

      {/* Offer You Choice Section */}
      <section className="offerYouChoiceSection bg-light2 mt-n23 pb-7 pt-35 pt-md-40 pt-lg-43 pt-lgwd-50 pb-md-9 pb-lg-16 pb-xl-22">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lgwd-8">
              <div className="row align-items-center mb-md-10 mb-lgwd-0">
                <div className="col-12 col-md-6">
                  <div className="pr-xl-10 pr-xlwd-15">
                    <h2 className="h2">Offers you a variety of choices</h2>
                    <p>
                      Our service offers you a variety of choices to meet your needs and most Accurate and fair-price service Estimate.
                    </p>
                    <Link href="pricingPackage.html" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinLarge" data-hover="Pricing Details">
                        <span className="d-block btnText">Pricing Details</span>
                     
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <Link href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"className="videoBoxWrap position-relative overflow-hidden lightbox d-block w-100 my-8 my-md-0" data-fancybox="true">
                      <Image src="/images/img74.jpg" layout="responsive" width={500} height={300} alt="image description" />
                      <span className="btnPlay position-absolute rounded-circle d-flex align-items-center justify-content-center">
                        <span className="sr-only">play</span>
                      </span>
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lgwd-4">
              <ul className="list-unstyled pl-xl-5 mb-0 servicesList">
                <li>24-hour rain guarantee</li>
                <li>Door panels / seats wiped</li>
                <li>Rubber mats washed</li>
                <li>A thorough cleaning of dash, doors</li>
                <li>Undercarriage rust inhibitor</li>
                <li>Rim cleaner x 2</li>
                <li>Clearcoat Protectant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
      className="processBlock bg-secondary text-center pt-10 py-md-13 py-lg-16"
      style={{ backgroundImage: 'url(/images/bgPattern03.png)' }}
    >
      <div className="container">
        <div className="row pcColumnsWrap pcColumnsWrapVII mx-n10 mx-xl-n25">
          {/* Column 1 */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">Make an appointment &amp; Bring your car</h3>
            </article>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">We give our 5 star rating Services</h3>
            </article>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">Pay Online & Get your car</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="whatAdvantageSection pt-10 pb-5 pt-md-15 pb-md-10 py-lg-18 pt-xl-21 pb-xl-22">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-12 text-center">
              <h2>
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">
                  Why Choose Us
                </strong>
                <span className="d-block">
                  What advantages will you get when washing your car?
                </span>
              </h2>
            </header>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            {/* Column 1 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-car-wash-4"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">High Quality</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
            {/* Column 2 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-bathing"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">Organic Products</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
            {/* Column 3 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-mechanic"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">Talented Workers</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
          </div>

          {/* Image Section (only for large screens) */}
          <div className="col-12 col-md-6 col-lg-4 text-center d-none d-lg-block">
            <div className="imgWrap position-relative" style={{ backgroundImage: 'url(/images/img0075.png)' }}>
              <Image
                src="/images/img075.png"
                alt="image description"
                className="img-fluid"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            {/* Column 4 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-clean"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">Eco Hand Wash</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
            {/* Column 5 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-ventilator"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">Modern Equipments</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
            {/* Column 6 */}
            <article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
              <span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
                <i className="icomoon-steering-wheel"></i>
              </span>
              <div className="dscrWrap">
                <h5 className="h5 mb-2">
                  <a href="javascript:void(0);">Best Result</a>
                </h5>
                <p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>
  )
}

export default services
