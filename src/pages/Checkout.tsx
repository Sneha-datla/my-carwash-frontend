import Headernav from '@/components/Headernav'
import Head from 'next/head'; // Correct import for Head
import Link from 'next/link';
import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Footer from '@/components/Footer';

interface Order {
  bookingId: string;
  id: string;
  Product: string;
  Price: string;
  Quantity: number;
}
const initialOptions: {
  clientId: string;
  currency: string;
} = {
  clientId: "AaONffckaFUmIQF7wKxt1OFC29Ll-Nl8z-noaMQPhK_LQ05U8J9J6tm-afUqBIg6IweHWF6xOhZ84jrh",  // Replace with your actual PayPal client ID
  currency: "USD",  // Currency code
};
interface cart {
  
  id: string;
  name: string;
  price: string;
  quantity: number;
}
function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [CartProducts, setCartProducts] = useState<cart []>([]);

  const [bookingId, setBookingId] = useState<string | null>(null);
  const [shippingOption, setShippingOption] = useState<'option1' | 'option2'>('option1'); // Default to free shipping
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [showPayPalButtons, setShowPayPalButtons] = useState<boolean>(false); // State to control PayPal button visibility

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
    if (bookingId) {
      fetchOrders(bookingId);
    } else {
      // Fetch cart products if bookingId is not available
      fetchCartProducts();
    }
  }, [bookingId]);
  
  const fetchOrders = async (bookingId: string) => {
    try {
      console.log(`Fetching orders for bookingId: ${bookingId}`);
      const response = await fetch(`http://localhost:1337/api/orders?bookingId=${bookingId}`);
      
      if (response.status === 200) {
        const ordersData = await response.json();
        console.log("Fetched orders:", ordersData);
        
        if (ordersData && ordersData.data && Array.isArray(ordersData.data)) {
          console.log("Orders Data:", ordersData.data);
          
          const bookingIdNumber = parseInt(bookingId, 10);
          const filteredOrders = ordersData.data.filter((order: any) => {
            return order.Booking === bookingIdNumber;
          });
          
          console.log("Filtered orders by bookingId:", filteredOrders);
          setOrders(filteredOrders); // Update state with the filtered orders
  
          // Calculate subtotal here
          const subtotal = filteredOrders.reduce((total: number, order: Order) => {
            const price = parseFloat(order.Price.replace(/[^\d.-]/g, '')); // Remove any non-numeric characters except for decimal and minus
            console.log( price )
            return total + price * order.Quantity;
          }, 0);
  
          setTotalAmount(subtotal); // Set the calculated subtotal to the state
        } else {
          console.error('No orders found or invalid response structure');
        }
      } else {
        console.error('Failed to fetch orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  
 
  
  const handlePayment = () => {
    if (paymentMethod === '03') {
      // PayPal Payment
      setShowPayPalButtons(true); // Show PayPal Buttons
    } else if (paymentMethod === '02') {
      // Direct Bank Transfer
      alert("Please transfer the amount to our bank account with the order ID as reference.");
      // Additional logic to handle order confirmation can be added here
    } else {
      alert("Please select a payment method.");
    }
  };

  const fetchCartProducts = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/carts'); // Adjust endpoint as needed
  
      if (response.ok) {
        const cartData = await response.json();
        console.log('Fetched cart products:', cartData);
  
        if (cartData && cartData.data && Array.isArray(cartData.data)) {
          setCartProducts(cartData.data); // Set state with cart products
  
          const subtotal = cartData.data.reduce((total: number, product: any) => {
            const price = parseFloat(product.price) || 0; // Ensure a valid number
            return total + price * product.quantity;
          }, 0);
  
          setTotalAmount(subtotal); // Update total amount
        } else {
          console.error('No valid cart products found');
        }
      } else {
        console.error('Failed to fetch cart products:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  };
  
  
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
      <div className="introBlock">

      <article className="ibsColumn text-center d-flex w-100 position-relative text-white fontAlter">
        <div className="alignHolder w-100 d-flex align-items-center">
          <div className="align w-100 py-8 py-md-14 py-lg-20">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-white font-weight-bold mb-4 h2Large">Checkout</h1>
                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                  <li><a href="home1.html">Home</a></li>
			<li><a href="about.html">Pages</a></li>
				<li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
<span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
              <Image src="/images/img23.jpg" alt="Background" layout="fill" objectFit="cover" />
            </span>      </article>
      </div>
      
      <article className="ItemfullBlock py-7 py-md-10 pb-md-9 pt-lg-14 pb-lg-13 pt-xl-22 pb-xl-19">
        <div className="container">
         
          
    <form action="#" className="checkoutForm">
      
    <div className="confirmationBoxWrap mb-7">
      <h3 className="h2vii h4 text-capitalize mb-6 fwmMedium">Your Order</h3>
      <div className="table-responsive tableWrap">
        <table className="table checkoutCountTable fontAlter">
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {orders.length > 0 ? (
  orders.map((order) => (
    <tr key={order.id}>
      <td className="col01">
        <div className="proItemName">{order.Product} X {order.Quantity}</div>
      </td>
      <td className="col02">
        <div className="tdWrap">
          <strong className="fwMedium price d-block">{order.Price}</strong>
        </div>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan={2}>No orders found</td>
  </tr>
)}

{/* Display Cart Products (Unprocessed Items) */}
{CartProducts.length > 0 ? (
  CartProducts.map((product) => (
    <tr key={product.id}>
      <td className="col01">
        <div className="proItemName">{product.name} X {product.quantity}</div>
      </td>
      <td className="col02">
        <div className="tdWrap">
          <strong className="fwMedium price d-block">{product.price}</strong>
        </div>
      </td>
    </tr>
  ))
) : (
 null
)}

            <tr className="subTotalRow">
              <td className="col01">
                <div className="tdWrap">
                  <strong className="fwMedium price d-block">Subtotal</strong>
                </div>
              </td>
              <td className="col02">
                <div className="tdWrap">
                  <strong className="fwMedium price d-block">£{totalAmount.toFixed(2)}</strong>
                </div>
              </td>
            </tr>
            <tr className="shippingRow">
              <td className="col01">
                <div className="tdWrap">
                  <strong className="fwMedium price d-block">Shipping</strong>
                </div>
              </td>
              <td className="col02">
                <div className="tdWrap">
                  <div>
                    <span className="customRadioBtnLabel">
                      <input
                        className="form-check-input fakeInput"
                        type="radio"
                        name="shipping-fee"
                        id="shippingOption1"
                        checked={shippingOption === 'option1'}
                        value="option1"
                        onChange={() => setShippingOption('option1')}
                      />
                      <label className="form-check-label cuFakeLabel" htmlFor="shippingOption1">
                        Free Shipping
                      </label>
                    </span>
                  </div>
                  <div>
                    <span className="customRadioBtnLabel">
                      <input
                        className="form-check-input fakeInput"
                        type="radio"
                        name="shipping-fee"
                        id="shippingOption2"
                        value="option2"
                        checked={shippingOption === 'option2'}
                        onChange={() => setShippingOption('option2')}
                      />
                      <label className="form-check-label cuFakeLabel" htmlFor="shippingOption2">
                        Flat Rate: <span className="price">£10.00</span>
                      </label>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="totalRow">
              <td className="col01">
                <div className="tdWrap fwMedium">
                  <strong className="fwMedium price d-block">Total</strong>
                </div>
              </td>
              <td className="col02">
                <div className="tdWrap">
                  <strong className="fwMedium price d-block">£{totalAmount.toFixed(2)}</strong>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      <div className="pmsWrap">
        <ul className="list-unstyled pmSlctList mb-0">
        <li>
  <span className="customRadioBtnLabel">
    <input
      className="form-check-input fakeInput"
      type="radio"
      name="paymentMethod"
     id="pay-meth-cp"
      value="02"
      checked={paymentMethod === '02'}
      onChange={() => setPaymentMethod('02')}
    />
    <label className="form-check-label cuFakeLabel fwSemi" htmlFor="pay-meth-cp">
      Direct Bank Transfer
    </label>
  
    <strong className="pmNotePop w-100 position-relative">
      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
    </strong>
   
  </span>
</li>

          <li>
            <span className="customRadioBtnLabel">
              <input
                className="form-check-input fakeInput"
                type="radio"
                name="paymentMethod"
                id="pay-meth-pp"
                value="03"
                checked={paymentMethod === '03'}
                onChange={() => setPaymentMethod('03')}
              />
              <label className="form-check-label cuFakeLabel fwSemi" htmlFor="pay-meth-pp">
                Paypal
              </label>
              <img
                src="/images/logPayment.png"
                className="ml-2"
                alt="image description"
              />
              <a href="javascript:void(0);" className="fwSemi fontAlter float-right mt-1 payPalLink">
                What is PayPal?
              </a>
             

              <strong className="pmNotePop w-100 position-relative">
                Make your payment by your PayPal account. You can pay with your credit card if you don’t have a PayPal account.
              </strong>
            </span>
          </li>
        </ul>
       
        <div className="paypal-button-container">
        {showPayPalButtons && (

              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={(data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string; }; }[]; }) => any; }; }) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: totalAmount.toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data: any, actions: { order: { capture: () => Promise<any>; }; }) => {
                    return actions.order.capture().then((details: { payer: { name: { given_name: string; }; }; }) => {
                      alert('Payment Successful: ' + details.payer.name.given_name);
                      // Handle success and redirect to a success page, or show order confirmation
                    });
                  }}
                  onError={(err: any) => {
                    console.error('PayPal payment error:', err);
                    alert('Payment failed. Please try again.');
                  }}
                />
              </PayPalScriptProvider>
        )}
            </div>
            </div>
          </form>
 </div>
 <div className="pay overflow-hidden">
								<button type="button" className="btn btnThemeAlt text-capitalize position-relative border-0 p-0 float-right btnMinLarge" data-hover="Pay"onClick={handlePayment} >
									<span className="d-block btnText">Pay</span>
								</button>
							</div>
          </article>
          <Footer></Footer>
         
        </div>
      
      
    
  )
}

export default Checkout
