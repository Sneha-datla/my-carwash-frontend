import Headernav from '@/components/Headernav'
import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Correct import for Head
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
interface CartItem {
  documentId: number;
  id: number;
  name: string;
  price:number;
  quantity: number;
  image: {
    url: string;
    id:number;
  };
}
function cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [removedItems, setRemovedItems] = useState<number[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        
        const response = await fetch('http://localhost:1337/api/carts?populate=*');
        const data = await response.json();

        // Map the API response to the `CartItem` interface structure
        const formattedCartItems: CartItem[] = data.data.map((item: any) => ({
          id: item.id,
          documentId:item.documentId,
          name: item.name, // Fallback for missing name
          price: item.price , // Fallback for missing price
          quantity: Number(item.quantity ?? 1),
          image: {
            url: item.image[0]?.url , // Handle nested image structure
            id: item.image.id , // Handle case where image or ID may not exist
          },
        }));

        setCartItems(formattedCartItems);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (documentId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.documentId !== documentId));
    setRemovedItems((prevRemoved) => [...prevRemoved, documentId]);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + shippingFee;
  }; 
  const updateCart = async () => {
    try {
      // Remove items
      if (removedItems.length > 0) {
        await Promise.all(
          removedItems.map(async (documentId) => {
            const response = await fetch(`http://localhost:1337/api/carts/${documentId}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
            });
  
            if (!response.ok) {
              throw new Error(`Failed to delete cart item with ID: ${documentId}`);
            }
          })
        );
        // Clear removed items after successful deletion
        setRemovedItems([]);
      }
  
      // Update remaining items
      const updatePromises = cartItems.map(async (item) => {
        const response = await fetch(`http://localhost:1337/api/carts/${item.documentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            },
          }),
        });
  
        if (!response.ok) {
          throw new Error(`Failed to update cart item with ID: ${item.documentId}`);
        }
  
        return response.json();
      });
  
      await Promise.all(updatePromises);
      alert('Cart updated successfully');
      window.location.href="/cart"
    } catch (error) {
      console.error('Error updating cart:', error);
      alert('Error updating cart. Please try again.');
    }
  };
  
  

  if (loading) {
    return <div>Loading...</div>;
  }


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
                       <h1 className="text-white font-weight-bold mb-4 h2Large">Shop</h1>
                       <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                       <li><a href="home1.html">Home</a></li>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li>Cart</li>
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
           <article className="ItemfullBlock pt-7 pb-7 pt-md-10 pb-md-9 pt-lg-14 pb-lg-13 pt-xl-22 pb-xl-19">
           <div className="container">
      <div className="cartTableWrap table-responsive mb-8 mb-md-12 mb-xl-16">
        <table className="table cartTable mb-0 fontAlter">
          <thead>
            <tr>
              <th className="col01">Product</th>
              <th className="col02">Price</th>
              <th className="col03">Quality</th>
              <th className="col04">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr className="product-cart-item" key={item.id}>
                <td className="cart-item-details">
                  <div className="product-meta-data d-flex align-items-center">
                    <Image
                      src={`http://localhost:1337${item.image.url}`} // Adjust this based on your Strapi media structure
                      className="img-fluid mr-3"
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <h6 className="h6 mb-0 fwmMedium">{item.name}</h6>
                  </div>
                </td>
                <td className="product-subtotal">
                  <div className="product-price-amount">
                    <h6 className="h6 fwmMedium mb-0">£{item.price}</h6>
                  </div>
                </td>
                <td className="product-quantity">
                  
                <td className="product-quantity">
                      <div className="quantity position-relative">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity-text mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}

                        
                        >
                          +
                        </button>
                      </div>
                    </td>
                  
                </td>
                <td className="product-total">
                  <div className="product-price-amount">
                    <h6 className="h6 fwmMedium mb-0">
                      £{item.price * item.quantity}
                    </h6>
                    <a
                      href="javascript:void(0);"
                      className="remove-item fas fa-times"
                      onClick={() => removeItem(item.documentId)}

                    ></a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>
                <div className="coupenEnterWrap d-flex justify-content-between align-items-center">
                  <div className="wrap1 d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control coupenFormControl"
                      placeholder="Coupon Code"
                    />
                    <a
                      href="javascript:void(0);"
                      className="btn btnThemeAlt fwMedium ml-3 ml-xl-6 text-capitalize position-relative border-0 p-0 flex-shrink-0"
                      data-hover="Apply Coupon"
                    >
                      <span className="d-block btnText">Apply Coupon</span>
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn btnTheme fwMedium btnMinSm text-capitalize position-relative border-0 p-0"
                    data-hover="Update Cart"    onClick={updateCart} // Call updateCart when clicked


                  >
                    <span className="d-block btnText">Update Cart</span>
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    
        <div className="row">
          <div className="col-12 offset-md-4 col-md-8 offset-lgwd-6 col-lgwd-6">
            <h3 className="h4 mb-5 mb-md-8">Cart Totals</h3>
            <div className="crttTableWrap table-responsive mb-5">
              <table className="table cartTotals border-0 mb-0 fontAlter">
                <tbody>
                  <tr>
                    <td className="col01">Subtotal</td>
                    <td className="col02"><strong className="fwmMedium price d-block">£{calculateSubtotal()}</strong></td>
                  </tr>
                  <tr>
                    <td className="col01">Shipping</td>
                    <td className="col02">
                      <div className="tdWrap">
                        <div className="fakeLabelWrap mb-2">
                          <span className="customRadioBtnLabel">
                            <input className="form-check-input fakeInput" type="radio" name="shipping-fee" id="shippingOption1" checked value="option1"          
                             onChange={() => setShippingFee(0)} // Free shipping option
/>
                            <label className="form-check-label cuFakeLabel" htmlFor="shippingOption1">Free Shipping</label>
                          </span>
                        </div>
                        <div className="fakeLabelWrap mb-3">
                          <span className="customRadioBtnLabel">
                            <input className="form-check-input fakeInput" type="radio" name="shipping-fee" id="shippingOption2" value="option2"                                
                             onChange={() => setShippingFee(10)} // Flat shipping fee option
                            />
                            <label className="form-check-label cuFakeLabel" htmlFor="shippingOption2">Flat Rate: <span className="price">£10.00</span></label>
                          </span>
                        </div>
                        <strong className="d-block text-secondary mb-3 fwmMedium">Calculate Shipping</strong>
                        <div className="coolSelectWrapper mb-2">
                          <select className="coolSelect form-control" id="select-country">
                            <option value="1" disabled>Select Country</option>
                            <option value="2">United States</option>
                            <option value="3">China</option>
                            <option value="4" selected>Germany</option>
                            <option value="5">United Kingdom (UK)</option>
                            <option value="6">Ireland</option>
                            <option value="7">Scotland</option>
                          </select>
                        </div>
                        <div className="coolSelectWrapper mb-2">
                          <select className="coolSelect form-control" id="select-country01">
                            <option value="1" disabled selected>Select an option...</option>
                            <option value="2">United States</option>
                            <option value="3">China</option>
                            <option value="4">Germany</option>
                            <option value="5">United Kingdom (UK)</option>
                            <option value="6">Ireland</option>
                            <option value="7">Scotland</option>
                          </select>
                        </div>
                        <div className="formCol">
                          <label className="form-group d-block">
                            <input type="text" className="form-control d-block w-100" placeholder="Postcode/ZIP" />
                          </label>
                        </div>
                        <a href="javascript:void(0);" className="btn btnGary text-capitalize position-relative border-0 p-0" data-hover="Update Totals">
                          <span className="d-block btnText">Update Totals</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="trTotal">
                    <td className="col01">Total</td>
                    <td className="col02"><strong className="fwmMedium price d-block">£{calculateTotal()}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link href="/Checkout" className="btn btnThemeAlt fwMedium w-100 d-block text-capitalize position-relative border-0 p-0" data-hover="Proceed to Checkout">
    <span className="d-block btnText">Proceed to Checkout</span>
  
</Link>
          </div>
        </div>
      </div>
    </article>
    </div>
  )
}

export default cart
