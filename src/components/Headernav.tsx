import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';


const Headernav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const [username, setUsername] = useState(""); // Store username

  const toggleSearch = () => {
    setIsSearchOpen(prevState => !prevState);
  }; 
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log(userData.user.username);
      setIsLoggedIn(true);
      setUsername(userData.user.username); // Set the username if logged in
    }

    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/carts"); 
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const cartData = await response.json();
        
        
        // If cartData is an object, check where the array is nested
        if (Array.isArray(cartData)) {
          setTotalItems(cartData.length);
        } else if (cartData.data && Array.isArray(cartData.data)) {
          setTotalItems(cartData.data.length);
        } else {
          console.error("Unexpected cart data structure:", cartData);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    
    fetchCartItems();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    setIsLoggedIn(false);
    setUsername(""); // Clear username
  };

  return (
  
    <div>
      
      

      {/* phStickyWrap */}
      <div className="phStickyWrap">
        <div className="headerFixer">
          {/* pageHeader */}
          <header id="pageHeader" className="bg-white">
            <div className="container-fluid clearfix">
              <div className="logo">
                <Link href="/home1">
      
                    <img src="images/logo.svg" className="img-fluid" alt="Mister Carwash" />
                 
                </Link>
              </div>
              <nav id="pageNav" className="navbar navbar-expand-lg navbar-light justify-content-end justify-content-lg-start position-static">
                <div className="collapse navbar-collapse pageMainNavCollapse" id="pageMainNavCollapse">
                  <ul className="navbar-nav mainNavigation fontAlter fwMedium pl-lg-3 pl-xlwd-9 pl-xxl-18">
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle"  id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList" aria-labelledby="homeDropdown">
                          <li><Link href="/home1" className="dropdown-item">Home 1</Link></li>
                          <li><Link href="/home2" className="dropdown-item">Home 2</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle"id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList">
                          <li><Link href="/Error" className="dropdown-item">404 Error</Link></li>
                          <li><Link href="/About"className="dropdown-item">About</Link></li>
                          <li><Link href="/" className="dropdown-item">Booking System</Link></li>
                          <li><Link href="/faq" className="dropdown-item">FAQ</Link></li>
                          <li><Link href="/myaccount" className="dropdown-item">My Account</Link></li>
                          <li><Link href="/pricingpackage" className="dropdown-item">Pricing Package</Link></li>
                          <li><Link href="/team" className="dropdown-item">Team</Link></li>
                          <li><Link href="/teamsingle" className="dropdown-item">Team Single</Link></li>
                          <li><Link href="/testimonals" className="dropdown-item">Testimonials</Link></li>
                          <li><Link href="/elements"className="dropdown-item">Elements</Link></li>
                          <li><Link href="/typography" className="dropdown-item">Typography</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList">
                          <li><Link href="/services" className="dropdown-item">Services</Link></li>
                          <li><Link href="/servicessingle" className="dropdown-item">Services Single</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle"  id="portfolioDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList">
                          <li><Link href="/portfoliogrid"className="dropdown-item">Portfolio Grid</Link></li>
                          <li><Link href="/portfoliogridcaption" className="dropdown-item">Portfolio Grid Caption</Link></li>
                          <li><Link href="/portfolioimagegallery" className="dropdown-item">Portfolio Image Gallery</Link></li>
                          <li className="dropdown-submenu">
                            <a href="javascript:void(0);" className="dropdown-item dropdown-toggle dropIcn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio Single</a>
                            <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                              <ul className="list-unstyled mb-0 hdDropdownList">
                                <li><Link href="/portfoliosingle1" className="dropdown-item">Portfolio Single 1</Link></li>
                                <li><Link href="/portfoliosingle2" className="dropdown-item">Portfolio Single 2</Link></li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle"  id="newsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList">
                          <li><Link href="/newsclassic" className="dropdown-item">News Classic</Link></li>
                          <li><Link href="/blogmasonry" className="dropdown-item">News Masonry</Link></li>
                          <li><Link href="/bloggrid" className="dropdown-item">News Grid</Link></li>
                          <li><Link href="/blogsinglepost" className="dropdown-item">News Single Post</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown ddohOpener">
                      <a className="nav-link dropdown-toggle"id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                      <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                        <ul className="list-unstyled mb-0 hdDropdownList">
                          <li><Link href="/Shop" className="dropdown-item">Shop</Link></li>
                          <li><Link href="/singleproduct" className="dropdown-item">Single Product</Link></li>
                          <li><Link href="/cart"className="dropdown-item">Cart</Link></li>
                          <li><Link href="/checkout" className="dropdown-item">Checkout</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" className="nav-link">Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hdActionsWrap flex-shrink-0 d-flex justify-content-end align-items-center">
                  <a href="tel:6507329369" className="btnHdLink fontAlter fwMedium d-none d-xl-inline">
                    <i className="icomoon-whatsapp icn"><span className="sr-only">icon</span></i>
                    650-732-9369
                  </a>
                  <ul className="list-unstyled d-flex align-items-center userActionsList mb-0 ml-xl-3 ml-xxl-7">

                  <li className="nav-item dropdown">
                {isLoggedIn ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                    
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {username}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
                      <li>
                        <Link href="/profile" className="dropdown-item">Profile</Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link href="/myaccount" className="ncCartBtn">
                  <i className="lnr lnr-user"><span className="sr-only">icon</span></i>
                </Link>                )}
              </li>
                 
                    <li>
                      <Link href="/cart" className="ncCartBtn">
                        <i className="lnr lnr-cart">
                          <span className="sr-only">icon</span>
                        </i>
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                      </Link>
                    </li>
                    <li>
                      <form className="navSearchForm">
                        <a className="navbarSearchOpener" data-toggle="collapse" href="#navbarSearchCollapse" role="button" aria-expanded="false" aria-controls="navbarSearchCollapse">
                          <i className="lnr lnr-magnifier"><span className="sr-only">icon</span></i>
                        </a>
                        <div className="collapse navbarSearchCollapse position-fixed text-white" id="navbarSearchCollapse">
                          <div className="d-flex w-100 h-100 align-items-center">
                            <div className="align w-100 py-4">
                              <div className="container d-block">
                                <div className="row">
                                  <div className="col-12 col-md-10 offset-md-1">
                                    <p>Search your query here&hellip;</p>
                                    <div className="input-group">
                                      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                      <div className="input-group-append">
                                        <button className="btn btnThemeAlt btnNoOver" type="submit">
                                          <i className="lnr lnr-magnifier"><span className="sr-only">search</span></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a className="navbarSearchClose position-fixed" data-toggle="collapse" href="#navbarSearchCollapse" role="button" aria-expanded="false" aria-controls="navbarSearchCollapse">
                            <i className="lnr lnr-cross"><span className="sr-only">icon</span></i>
                          </a>
                        </div>
                      </form>
                    </li>
                  </ul>
                  <button className="navbar-toggler pgNaveOpener border-0 ml-3 position-relative" type="button" data-toggle="collapse" data-target="#pageMainNavCollapse" aria-controls="pageMainNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <Link href="/" className="btn btnThemeAlt border-0 p-0 ml-lg-3 ml-xxl-6 btnHd" data-hover="Book Appointment">
                      <span className="d-block btnText">Book Appointment</span>
                    
                  </Link>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>
   
    </div>
  )
}

export default Headernav
