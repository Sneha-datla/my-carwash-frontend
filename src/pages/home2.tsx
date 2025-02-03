import React from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from '@/components/Footer';
function home2() {
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
      <div className="introBlockWrap position-relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="introBlock ibsSlider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <article className="ibsColumn d-flex w-100 position-relative text-white fontAlter">
            <div className="alignHolder w-100 d-flex align-items-center">
              <div className="align w-100 pt-8 pb-20 pt-md-12 pb-md-29 px-sm-20 px-xlwd-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-9 col-lg-7">
                      <h1 className="text-white font-weight-bold h1Large mb-4">
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">
                          Quick And Easy
                        </strong>
                        <span className="d-block">
                          In Hurry and Need car wash?
                        </span>
                      </h1>
                      <p>Let’s Start Enjoy the Freedom of Unlimited Carwash!</p>
                      <a
                        href="/servicesSingle"
                        className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium"
                        data-hover="Discover More"
                      >
                        <span className="d-block btnText">Discover More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="bgCover ibsBgWrap w-100 h-100 position-absolute"
              style={{
                backgroundImage: `url(/images/img123.jpg)`,
              }}
            ></span>
          </article>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <article className="ibsColumn d-flex w-100 position-relative text-white fontAlter">
            <div className="alignHolder w-100 d-flex align-items-center">
              <div className="align w-100 pt-8 pb-20 pt-md-12 pb-md-29 px-sm-20 px-xlwd-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-9 col-lg-7">
                      <h1 className="text-white font-weight-bold h1Large mb-4">
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">
                          Care your car
                        </strong>
                        <span className="d-block">We have modern equipment</span>
                      </h1>
                      <p>
                        Making you Nature and Faster Shine Car wash services!
                      </p>
                      <a
                        href="/servicesSingle"
                        className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium"
                        data-hover="Discover More"
                      >
                        <span className="d-block btnText">Discover More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="bgCover ibsBgWrap w-100 h-100 position-absolute"
              style={{
                backgroundImage: `url(/images/img124.jpg)`,
              }}
            ></span>
          </article>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <article className="ibsColumn d-flex w-100 position-relative text-white fontAlter">
            <div className="alignHolder w-100 d-flex align-items-center">
              <div className="align w-100 pt-8 pb-20 pt-md-12 pb-md-29 px-sm-20 px-xlwd-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-9 col-lg-7">
                      <h1 className="text-white font-weight-bold h1Large mb-4">
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">
                          Care your car
                        </strong>
                        <span className="d-block">
                          Quality Interior and Exterior wash
                        </span>
                      </h1>
                      <p>
                        Professional Auto care center to help you to get Clean
                        car!
                      </p>
                      <a
                        href="/servicesSingle"
                        className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium"
                        data-hover="Discover More"
                      >
                        <span className="d-block btnText">Discover More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="bgCover ibsBgWrap w-100 h-100 position-absolute"
              style={{
                backgroundImage: `url(/images/img125.jpg)`,
              }}
            ></span>
          </article>
        </SwiperSlide>
      </Swiper>

      {/* contactWidget */}
      <div className="contactWidget rounded bg-primary position-absolute">
        <ul className="list-unstyled mb-0 rcaTimeList py-7 px-6">
          <li>
            <div className="d-flex align-items-center">
              <div className="icnWrap flex-shrink-0 mr-4">
                <i className="icn icomoon-phone-call text-white"></i>
              </div>
              <div className="decWrap">
                <strong className="d-block fwSemi text-white">
                  Call for book:
                </strong>
                <strong className="d-block fwSemi text-secondary">
                  8-800-10-500
                </strong>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="icnWrap flex-shrink-0 mr-4">
                <i className="icn icomoon-clock text-white"></i>
              </div>
              <div className="decWrap">
                <strong className="d-block fwSemi text-white">
                  Working Hours:
                </strong>
                <strong className="d-block fwSemi text-secondary">
                  09:00-18:00 (Mon-Sat)
                </strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="aboutBlockWrap pt-14 pb-7 pt-sm-42 pt-md-34 pb-md-10 pt-lg-25 pb-lg-18 pt-xl-28 pt-xlwd-34 pb-xl-23">
				<article className="aboutBlock pb-5 pb-lg-15">
					<div className="container">
						<div className="row mb-lgwd-5 mb-xl-22 mx-xl-n5">
							<div className="col-12 col-lg-6 px-xl-5">
								<div className="imgHolder imgHolderv1 imgHolderv2 position-relative mx-auto mb-10 mb-sm-15 mb-lg-0 mx-lg-0">
									<img src="images/img64.png" className="w-100 img-fluid" alt="image description"/>
									<div className="descrTag descrTagv1 position-absolute d-inline-flex align-items-center bg-white fontAlter">
										<i className="lnr lnr-flag icn mr-2"><span className="sr-only">icon</span></i>
										<strong className="d-block fwMedium">25 years of <br/>Experience</strong>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6 px-xl-5 d-flex align-items-lg-center">
								<div className="align pr-lg-10 pr-xl-15">
									<header className="headingHead mb-5">
										<h2>
											<strong className="d-block text-uppercase hTitle fwMedium mb-4">Who We Are</strong>
											<span className="d-block">We help more than 25 years drive customers clean car.</span>
										</h2>
									</header>
									<p>Since opening Mister Car Wash in 1998, owners Petisars and Ken Mathov have been the driving force.</p>
									<p>Mister wash made its debut in America in 1998, bringing with us a 40 year legacy in the convenience-store and car wash business from across seven states. Far from your typical gas-n-go, we built our brand by giving customers a sense of luxury in a place.</p>
									<a href="about.html" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-7 btnMinMediumAlt" data-hover="About More">
										<span className="d-block btnText">About More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</article>
				
				<article className="aboutBlock">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 col-lg-6 order-lg-2 mb-2 mb-sm-10 mb-lg-0">
								<div className="row mx-n2 abtServiceRow">
									<div className="col-12 col-sm-6 px-2">
										<article className="abtServiceColumn position-relative overflow-hidden mb-5 mb-sm-0">
											<div className="imgWrap rounded overflow-hidden">
												<img src="images/img126.jpg" className="img-fluid w-100" alt="image description"/>
											</div>
											<div className="onHover position-absolute">
												<div className="icnWrap d-block">
													<span className="icomoon-car-wash text-white"></span>
												</div>
												<h5 className="h5 text-white mb-0">Car Washing</h5>
												<a href="services.html" className="btn btnThemeWhite btnNoOver">See Details <span className="icn fas fa-chevron-right"></span></a>
											</div>
										</article>
									</div>
									<div className="col-12 col-sm-6 px-2">
										<article className="abtServiceColumn position-relative overflow-hidden mb-5 mb-sm-0">
											<div className="imgWrap rounded overflow-hidden">
												<img src="images/img127.jpg" className="img-fluid w-100" alt="image description"/>
											</div>
											<div className="onHover position-absolute">
												<div className="icnWrap d-block">
													<span className="icomoon-air-blower text-white"></span>
												</div>
												<h5 className="h5 text-white mb-0">Auto Detailing</h5>
												<a href="services.html" className="btn btnThemeWhite btnNoOver">See Details <span className="icn fas fa-chevron-right"></span></a>
											</div>
										</article>
									</div>
									<span className="bgPattern position-absolute">
										<img src="images/bgPattern01.png" className="img-fluid" alt="pattern"/>
									</span>
								</div>
							</div>
							<div className="col-12 col-lg-6 d-flex align-items-lg-center order-lg-1">
								<div className="align pr-lg-10 pr-xl-15">
									<header className="headingHead mb-5">
										<h2>
											<strong className="d-block text-uppercase hTitle fwMedium mb-4">Ultimate Services</strong>
											<span className="d-block">We focus on car washing and detailing</span>
										</h2>
									</header>
									<p>Over the past 6 years we cleaned over 34,000 cars, saved over 8.9 million liters of water from being used in car washing and employed 50 youth. Our legacy is in the youth that gained work and life skills, grew their confidence and have moved on to bigger.</p>
									<span className="d-block">
										<a href="javascript:void(0);" className="btnRefLink fontAlter fwMedium d-inline-flex align-items-center mt-4 transition transitClr"><i className="icomoon-document icn mr-2"><span className="sr-only">file</span></i>Download Carwash_Pricing_List</a>
									</span>
									<span className="d-block">
										<a href="javascript:void(0);" className="btnRefLink fontAlter fwMedium d-inline-flex align-items-center mt-4 transition transitClr"><i className="icomoon-document icn mr-2"><span className="sr-only">file</span></i>Discover Unlimited Wash Club Plans</a>
									</span>
									<a href="services.html" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-7 btnMinMedium" data-hover="Learn More">
										<span className="d-block btnText">Learn More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
            <aside className="counterAsideBlockAlt position-relative pt-6 pb-1 pt-md-9 pb-md-3 pt-lg-15 pb-lg-10 pt-xl-20 pb-xl-14">
				<div className="container">
					<ul className="list-unstyled cabCounterList d-flex flex-wrap justify-content-around mb-0 mx-auto mx-md-0">
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center text-secondary">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">25</span>
								<span className="text-primary subtitle">Years of <br/>Experience</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center text-secondary">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">38</span>K</span>
								<span className="text-primary subtitle">Total Cars <br/>Washed</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center text-secondary">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">17</span>
								<span className="text-primary subtitle">Awards &amp; <br/>Recongnitions</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center text-secondary">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">14</span>K</span>
								<span className="text-primary subtitle">Trusted <br/>Clients</span>
							</h3>
						</li>
					</ul>
				</div>
			</aside>
            <section className="exploreServicesBlock bg-primary py-10 py-md-12 py-lg-16 pt-xl-20">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1">
							<header className="headingHead fzMedium mb-12 mb-md-17 text-center px-lg-5 px-xl-11 px-xlwd-20">
								<h2 className="text-white">
									<strong  className="d-block text-uppercase hTitle mb-5">Explore Services</strong>
									<span className="d-block">We providing carwash & detail services for both Commercial and individuals.</span>
								</h2>
							</header>
						</div>
					</div>
					<div className="serviceListWrap mb-8 mb-md-12">
						<ul className="list-unstyled serviceListView pl-0 mb-0 d-flex align-items-center justify-content-center flex-wrap">
							<li>
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-car-wash"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Express Exterior</a></h6>
								</article>
							</li>
							<li>
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-air-blower"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Auto Detailing</a></h6>
								</article>
							</li>
							<li>
								{/*serviceViewBox */}
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-car-wash-1"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Full Service Car Wash</a></h6>
								</article>
							</li>
							<li>
								{/*serviceViewBox */}
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-car-wash-2"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Complete Detail Wash</a></h6>
								</article>
							</li>
							<li>
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-fuel"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Oil Changing</a></h6>
								</article>
							</li>
							<li>
								<article className="serviceViewBox text-center bg-white">
									<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
										<span className="w-100 d-block p-1">
											<span className="icn icomoon-repair"></span>
										</span>
									</span>
									<h6 className="h6 mb-0"><a href="services.html">Preventative Maintenance</a></h6>
								</article>
							</li>
						</ul>
					</div>
					<div className="btnWrap d-flex flex-column flex-sm-row justify-content-center align-items-center">
						<a href="pricingPackage.html" className="btn btnThemeAlt position-relative border-0 p-0" data-hover="Pricing Plans">
							<span className="d-block btnText">Pricing Plans</span>
						</a>
						<a href="bookingSystem.html" className="btn btnThemeWhite position-relative border-0 p-0 mt-3 mt-sm-0 ml-sm-3" data-hover="Book Appointment">
							<span className="d-block btnText">Book Appointment</span>
						</a>
					</div>
				</div>
			</section>
            <section className="plansBlock pt-7 pb-3 py-md-10 pt-lg-13 pb-lg-13 pt-lgwd-15 pt-xl-18 pb-xl-16">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
							<header className="headingHead fzMedium mb-12 text-center">
								<h2>
									<strong className="d-block text-uppercase hTitle fwMedium mb-4">Pricing Plans</strong>
									<span className="d-block">Choose your Package</span>
								</h2>
								<p>Unlimited Washes is for you! Wash whenever you want and enjoy the ease of auto monthly billing and you can cancel any time.</p>
							</header>
						</div>
					</div>
					<form action="#" className="sycForm mb-8 mb-md-12">
						<div className="d-flex flex-wrap align-items-center justify-content-center">
							<div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
								<input type="radio" id="ssOption1" className="fakeInput" name="select-service" value="option1"/>
								<label htmlFor="ssOption1" className="fake_label mb-0">
									<span className="icnWrap d-flex justify-content-center mb-2">
										<i className="icomoon-icn-syc01"></i>
									</span>
									Mid-Size Car
								</label>
							</div>
							<div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
								<input type="radio" id="ssOption2" className="fakeInput" name="select-service" value="option2" />
								<label htmlFor="ssOption2" className="fake_label mb-0">
									<span className="icnWrap d-flex justify-content-center mb-2">
										<i className="icomoon-icn-syc02"></i>
									</span>
									Small Size Car
								</label>
							</div>
							<div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
								<input type="radio" id="ssOption3" className="fakeInput" name="select-service" value="option3"/>
								<label htmlFor="ssOption3" className="fake_label mb-0">
									<span className="icnWrap d-flex justify-content-center mb-2">
										<i className="icomoon-icn-syc03"></i>
									</span>
									Full-Size Car
								</label>
							</div>
							<div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
								<input type="radio" id="ssOption4" className="fakeInput" name="select-service" value="option4"/>
								<label htmlFor="ssOption4" className="fake_label mb-0">
									<span className="icnWrap d-flex justify-content-center mb-2">
										<i className="icomoon-icn-syc04"></i>
									</span>
									Pickup Truck
								</label>
							</div>
						</div>
					</form>
					<div className="row">
						<div className="col-12 col-md-6 col-xl-3 d-flex">
							<article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
								<h3 className="fwMedium mb-6">Express Wash</h3>
								<h4 className="font-weight-normal">
									<span className="d-block fwMedium"><sup className="supBefore">$</sup>24<sup className="supAfter">99</sup></span>
									<span className="d-block subtitle pt-3">Duration: 15 min</span>
								</h4>
								<hr className="my-6"/>
								<ul className="list-unstyled pcFeaturesList text-left mb-0">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
								</ul>
								<a href="pricingPackage.html" className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto" data-hover="Select">
									<span className="d-block btnText">Choose Plan</span>
								</a>
							</article>
						</div>
						<div className="col-12 col-md-6 col-xl-3 d-flex">
							<article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
								<h3 className="fwMedium mb-6">Supreme Wash</h3>
								<h4 className="font-weight-normal">
									<span className="d-block fwMedium"><sup className="supBefore">$</sup>32<sup className="supAfter">99</sup></span>
									<span className="d-block subtitle pt-3">Duration: 30 min</span>
								</h4>
								<hr className="my-6"/>
								<ul className="list-unstyled pcFeaturesList text-left mb-0">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Triple Foam</li>
								</ul>
								<a href="pricingPackage.html" className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto" data-hover="Select">
									<span className="d-block btnText">Choose Plan</span>
								</a>
							</article>
						</div>
						<div className="col-12 col-md-6 col-xl-3 d-flex">
							<article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6" data-featured-tag="Best Plan">
								<h3 className="fwMedium mb-6">Ultra Fullservice</h3>
								<h4 className="font-weight-normal">
									<span className="d-block fwMedium"><sup className="supBefore">$</sup>45<sup className="supAfter">99</sup></span>
									<span className="d-block subtitle pt-3">Duration: 45 min</span>
								</h4>
								<hr className="my-6"/>
								<ul className="list-unstyled pcFeaturesList text-left mb-0">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Triple Foam</li>
									<li>Tire Dressing</li>
								</ul>
								<a href="pricingPackage.html" className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto" data-hover="Select">
									<span className="d-block btnText">Choose Plan</span>
								</a>
							</article>
						</div>
						<div className="col-12 col-md-6 col-xl-3 d-flex">
							<article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
								<h3 className="fwMedium mb-6">Ultimate Shine</h3>
								<h4 className="font-weight-normal">
									<span className="d-block fwMedium"><sup className="supBefore">$</sup>59<sup className="supAfter">99</sup></span>
									<span className="d-block subtitle pt-3">Duration: 70 min</span>
								</h4>
								<hr className="my-6"/>
								<ul className="list-unstyled pcFeaturesList text-left mb-0">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Triple Foam</li>
									<li>Tire Dressing</li>
									<li>Vacuum &amp; Wipe Console</li>
								</ul>
								<a href="pricingPackage.html" className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto" data-hover="Select">
									<span className="d-block btnText">Choose Plan</span>
								</a>
							</article>
						</div>
					</div>
				</div>
			</section>
            <aside className="joinAsideBlock position-relative bg-primary pt-9 pt-lg-13 py-5 pb-lg-9 overflow-hidden text-center">
				<div className="container">
					<div className="d-flex align-items-center justify-content-center flex-wrap">
						<span className="icn icomoon-discount mr-4 text-secondary mb-4"></span>
						<h4 className="h4 mb-0 mr-5 text-white mb-4">Join our car wash club and <span className="text-secondary font-italic">Get 20% Discount</span></h4>
						<a href="javascript:void(0);" className="btn btnThemeWhite position-relative border-0 p-0 btnMinXLarge mb-4" data-hover="Join Unlimited Wash Club">
							<span className="d-block btnText">Join Unlimited Wash Club</span>
						</a>
					</div>
				</div>
				<span className="bgPattern bgPatternv2 inaccessible position-absolute">
					<img src="images/bgPattern04.png" className="img-fluid" alt="image description"/>
				</span>
			</aside>
            <section className="seeAdvantageSection pt-10 pt-md-15 pt-lg-16 pt-xl-20 pb-lg-4">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
							<header className="headingHead fzMedium mb-12 text-center px-lg-10 px-xlwd-15">
								<h2>
									<strong className="d-block text-uppercase hTitle fwMedium mb-4">See Advantages</strong>
									<span className="d-block">Why you should choose us?</span>
								</h2>
								<p>We have over 20 years of experience providing carwash & detail services for Commercial and individuals without compromise quality.</p>
							</header>
						</div>
					</div>
                    <div className="row mb-5">
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="ftColumnClassic px-3 px-lg-5 pl-xl-7 py-5 mb-6">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-car-wash-4"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">High Quality</a>
										</h5>
									<p>Leave your car with us and less than hours later we’ll have your showroom model kialo vehicles modern goods.</p>
								</div>
                                </article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="ftColumnClassic px-3 px-lg-5 pl-xl-7 py-5 mb-6">
									<span className="icnWrap d-flex justify-content-center align-items-center mb-5 rounded-circle">
										<i className="icomoon-bathing"></i>
									</span>
									<h5 className="h5 mb-3 position-relative">
										<a href="#">Organic Products</a>
									</h5>
									<p>Leave your car with us and less than hours later we’ll have your showroom model kialo vehicles modern goods.</p>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="ftColumnClassic px-3 px-lg-5 pl-xl-7 py-5 mb-6">
									<span className="icnWrap d-flex justify-content-center align-items-center mb-5 rounded-circle">
										<i className="icomoon-mechanic"></i>
									</span>
									<h5 className="h5 mb-3 position-relative">
										<a href="#">Talented Workers</a>
									</h5>
									<p>Leave your car with us and less than hours later we’ll have your showroom model kialo vehicles modern goods.</p>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="ftColumnClassic px-3 px-lg-5 pl-xl-7 py-5 mb-6">
									<span className="icnWrap d-flex justify-content-center align-items-center mb-5 rounded-circle">
										<i className="icomoon-clean"></i>
									</span>
									<h5 className="h5 mb-3 position-relative">
										<a href="#">Eco Hand Wash</a>
									</h5>
									<p>Leave your car with us and less than hours later we’ll have your showroom model kialo vehicles modern goods.</p>
								</article>
							</div>
						</div>
				</div>
			</section>
            <section className="ourGallerySection position-relative py-10 py-md-16 py-lg-22 pb-lg-30">
				<div className="container">
					<div className="row align-items-center align-items-lg-start">
						<div className="col-12 col-lg-4">
							<header className="mb-3 mb-8 mb-lg-0 text-white pr-md-10 pr-lg-0 pr-xl-10 text-center text-sm-left">
								<h2 className="fwSemi h2Medium mb-4 text-white">See Gallery of our Washing best services</h2>
								<p>These are our network location over the world specific foreign charitable organization send Quisque pretium dolor turpis.</p>
							</header>
						</div>
                        <div className="col-12 col-lg-8">
      {/* ourGallerySlider */}
      <div className="ourGallerySlider mx-n2 pt-15 pt-md-20 pt-lg-0">
        <Swiper
          spaceBetween={20} // Spacing between slides
          slidesPerView={2} // Number of slides visible
          
          pagination={{ clickable: true }} // Optional: add pagination dots
         
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="px-2">
              <article className="gPhoColumn position-relative overflow-hidden">
                <img
                  src="images/img25.png"
                  className="img-fluid w-100"
                  alt="Complete Detail Wash"
                />
                <h5 className="h5 text-white">
                  Complete Detail Wash
                  <strong className="pgCategory font-weight-normal text-uppercase d-block">
                    Washing
                  </strong>
                </h5>
                <a
                  href="portfolioSingle1.html"
                  className="d-inline-block pgLink"
                >
                  <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo">
                    <span className="sr-only">icon</span>
                  </i>
                </a>
              </article>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="px-2">
              <article className="gPhoColumn position-relative overflow-hidden">
                <img
                  src="images/img26.png"
                  className="img-fluid w-100"
                  alt="Dashboard Cleaning"
                />
                <h5 className="h5 text-white">
                  Dashboard Cleaning
                  <strong className="pgCategory font-weight-normal text-uppercase d-block">
                    Interior
                  </strong>
                </h5>
                <a
                  href="portfolioSingle1.html"
                  className="d-inline-block pgLink"
                >
                  <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo">
                    <span className="sr-only">icon</span>
                  </i>
                </a>
              </article>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="px-2">
              <article className="gPhoColumn position-relative overflow-hidden">
                <img
                  src="images/img27.png"
                  className="img-fluid w-100"
                  alt="Machine Washing"
                />
                <h5 className="h5 text-white">
                  Machine Washing
                  <strong className="pgCategory font-weight-normal text-uppercase d-block">
                    Auto Detail
                  </strong>
                </h5>
                <a
                  href="portfolioSingle1.html"
                  className="d-inline-block pgLink"
                >
                  <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo">
                    <span className="sr-only">icon</span>
                  </i>
                </a>
              </article>
            </div>
          </SwiperSlide>
          {/* Repeat slides as needed */}
        </Swiper>
      </div>
    </div>
                        </div>
                        </div>
                        </section>
                        <section className="ourBlogSection pt-10 pb-5 pt-md-12 pb-md-8 pt-lg-16 pb-lg-12 pt-xl-20">
				<div className="container">
					<div className="row align-items-center mb-6 mb-md-10 mb-lg-14">
						<div className="col-12 col-sm-6">
							<h2>
								<strong className="d-block text-uppercase hTitle fwMedium mb-3">Read Our Blog</strong>
								<span className="d-block">Featured News and Insights</span>
							</h2>
						</div>
						<div className="col-12 col-sm-6 text-sm-right">
							<a href="blogclassNameic.html" className="btn btnTheme position-relative border-0 p-0 btnMinLarge" data-hover="See All News">
								<span className="d-block btnText">See All News</span>
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-4 col">
							<article className="blockPostColumn position-relative fontAlter mb-6" data-category="Auto Care">
								<div className="imgWrap overflow-hidden mb-5">
									<img src="images/img84.jpg" className="img-fluid w-100" alt="image description"/>
								</div>
								<strong className="d-block fwmMedium title mb-2">
									<i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
									<time dateTime="2011-01-12">May 5, 2020</time>
									- by 
									<a href="javascript:void(0);" className="text-lDark">developer</a>
								</strong>
								<h5 className="h5">Preparing your Car for the Winter Holidays</h5>
								<a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
							</article>
						</div>
						<div className="col-12 col-sm-6 col-lg-4 col">
							<article className="blockPostColumn position-relative fontAlter mb-6" data-category="Carwashing">
								<div className="imgWrap overflow-hidden mb-5">
									<img src="images/img85.jpg" className="img-fluid w-100" alt="image description"/>
								</div>
								<strong className="d-block fwmMedium title mb-2">
									<i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
									<time dateTime="2011-01-12">May 5, 2020</time>
									- by 
									<a href="javascript:void(0);" className="text-lDark">developer</a>
								</strong>
								<h5 className="h5">The Importance of Washing Under Vehicle surface</h5>
								<a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
							</article>
						</div>
						<div className="col-12 col-sm-6 col-lg-4 col">
							<article className="blockPostColumn position-relative fontAlter mb-6" data-category="News & Tips">
								<div className="imgHolder mb-5 position-relative">
									<div className="nrcImageSlider">
										<div>
											<div className="imgWrap overflow-hidden">
												<img src="images/img86.jpg" className="img-fluid w-100" alt="image description"/>
											</div>
										</div>
										
									</div>
								</div>
								<strong className="d-block fwmMedium title mb-2">
									<i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
									<time dateTime="2011-01-12">May 5, 2020</time>
									- by 
									<a href="javascript:void(0);" className="text-lDark">developer</a>
								</strong>
								<h5 className="h5">Tough Stains in Your Car’s Interior (what to do about them)</h5>
								<a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
							</article>
						</div>
					</div>
				</div>
			</section>
              <article className="testimonialsBlock overlay position-relative pt-10 pb-5 pb-md-7 pt-lg-14 pb-lg-12 pt-lgwd-18 pb-lgwd-15 pt-xl-21 pb-xl-19">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                        <header className="headingHead fzMedium mb-8 mb-md-12 text-center px-xl-10">
                          <h2>
                            <strong className="d-block text-uppercase hTitle fwMedium mb-4">
                              Testimonials
                            </strong>
                            <span className="d-block">
                              What people think about our services
                            </span>
                          </h2>
                        </header>
                      </div>
                    </div>
                    {/* Testimonial Slider */}
                    <div className="testimonialSliderVI">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={3} // Show 3 slides per view
            
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]} // Include modules here
            
                      >
                        <SwiperSlide>
                          <div className="col">
                            <article className="clientFeedback rounded bg-white shadowLg px-3 py-5 px-sm-5 p-xl-8">
                              <blockquote className="clientQuoteii mb-0">
                                <q className="d-block mb-8">
                                  I will be pet I will be pet and then I will hiss sit in
                                  box get scared by doggo also cucumerro yet the best thing
                                  in the call universe is a cardboard box.
                                </q>
                                <div className="d-flex align-items-center">
                                  <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                    <img
                                      src="/images/img19.png"
                                      className="rounded-circle"
                                      alt="Donald Salvor"
                                    />
                                  </span>
                                  <cite className="wrap d-block text-left">
                                    <strong className="h5 mb-0 text-capitalize fwSemiBold">
                                      Donald Salvor
                                    </strong>
                                    <strong className="d-block font-weight-normal">
                                      Citizen Of Omina
                                    </strong>
                                  </cite>
                                </div>
                              </blockquote>
                            </article>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col">
                            <article className="clientFeedback rounded bg-white shadowLg px-3 py-5 px-sm-5 p-xl-8">
                              <blockquote className="clientQuoteii mb-0">
                                <q className="d-block mb-8">
                                  BNI India is Worlds’s largest and most successful business
                                  networking great organisation. We offer our members the
                                  opportunity to share ideas.
                                </q>
                                <div className="d-flex align-items-center">
                                  <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                    <img
                                      src="/images/img20.png"
                                      className="rounded-circle"
                                      alt="James Peter"
                                    />
                                  </span>
                                  <cite className="wrap d-block text-left">
                                    <strong className="h5 mb-0 text-capitalize fwSemiBold">
                                      James Peter
                                    </strong>
                                    <strong className="d-block font-weight-normal">
                                      Minister Of Omina
                                    </strong>
                                  </cite>
                                </div>
                              </blockquote>
                            </article>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col">
                            <article className="clientFeedback rounded bg-white shadowLg px-3 py-5 px-sm-5 p-xl-8">
                              <blockquote className="clientQuoteii mb-0">
                                <q className="d-block mb-8">
                                  Tools to network more effectively, including an
                                  orientation CD giving the Formula for Success in BNI, a
                                  badge, a vinyl card holder to the carry.
                                </q>
                                <div className="d-flex align-items-center">
                                  <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                    <img
                                      src="/images/img21.png"
                                      className="rounded-circle"
                                      alt="Peek Thakul"
                                    />
                                  </span>
                                  <cite className="wrap d-block text-left">
                                    <strong className="h5 mb-0 text-capitalize fwSemiBold">
                                      Peek Thakul
                                    </strong>
                                    <strong className="d-block font-weight-normal">
                                      Governor Of Canada
                                    </strong>
                                  </cite>
                                </div>
                              </blockquote>
                            </article>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col">
                            <article className="clientFeedback rounded bg-white shadowLg px-3 py-5 px-sm-5 p-xl-8">
                              <blockquote className="clientQuoteii mb-0">
                                <q className="d-block mb-8">
                                  Build a holistic approach to increase view ability.
                                  Leverage empathy maps while remembering to innovate
                                  MOBILE-FIRST DESIGN.
                                </q>
                                <div className="d-flex align-items-center">
                                  <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                    <img
                                      src="/images/img22.png"
                                      className="rounded-circle"
                                      alt="Tharnis Cavla"
                                    />
                                  </span>
                                  <cite className="wrap d-block text-left">
                                    <strong className="h5 mb-0 text-capitalize fwSemiBold">
                                      Tharnis Cavla
                                    </strong>
                                    <strong className="d-block font-weight-normal">
                                      Global Initiative
                                    </strong>
                                  </cite>
                                </div>
                              </blockquote>
                            </article>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <span
                    className="bgCover imgBg w-100 h-100 position-absolute"
                    style={{ backgroundImage: "url(/images/bgPattern07.jpg)" }}
                  ></span>
                </article>
                <aside className="sponsorsAside position-relative text-center py-6 py-md-10">
                  <div className="container">
                    <div className="logosSlider">
                      {/* Slide */}
                       <Swiper
                                spaceBetween={20}  // Space between images
                                slidesPerView={'auto'}  // Auto width for each slide
                                loop={true}  // Loop the slides
                                autoplay={{ disableOnInteraction: true }} // Auto play
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 3,
                                  },
                                  1024: {
                                    slidesPerView: 5,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoStyles.png" className="img-fluid" alt="stylus"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoDrkht.png" className="img-fluid" alt="drkht"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoBrook.png" className="img-fluid" alt="Brook."/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoAlive.png" className="img-fluid" alt="its alive!"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoNowhere.png" className="img-fluid" alt="nowhere among us"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoStyles.png" className="img-fluid" alt="stylus"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoDrkht.png" className="img-fluid" alt="drkht"/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoBrook.png" className="img-fluid" alt="Brook."/>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="logoWrap text-center">
                                    <img src="images/logoAlive.png" className="img-fluid" alt="its alive!"/>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                      
                    </div>
                  </div>
                </aside>
                <aside className="requestCallAside requestCallAsideVII position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="captionHolder py-8 py-md-15 py-xl-20">
              <header className="header mb-8 mb-md-11 mb-lg-14">
                <h2 className="text-white mb-4">Request a Call back</h2>
                <p>
                  We inspire clients to make their most challenging business decisions with confidence. Send us a message or Call Us.
                </p>
              </header>
              <div className="formWrap">
                <form action="#" className="requstAcallForm">
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label className="fLabel fontAlter text-primary d-block">
                        Your Service Request:
                      </label>
                      <div className="coolSelectWrapper">
                        <select className="coolSelect form-control" id="service">
                          <option value="1" disabled>
                            Select Service
                          </option>
                          <option value="2">Express Exterior</option>
                          <option value="3">Oil Change</option>
                          <option value="4" selected>
                            Auto Detail Wash
                          </option>
                          <option value="5">Preventative Services</option>
                          <option value="6">Complete Detail Wash</option>
                          <option value="7">Full Service Wash</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row mx-n1">
                    <div className="form-group col-12 col-sm-6 px-1">
                      <label className="fLabel fontAlter text-primary d-block">
                        Your Name:
                      </label>
                      <input type="text" className="form-control w-100" />
                    </div>
                    <div className="form-group col-12 col-sm-6 px-1">
                      <label className="fLabel fontAlter text-primary d-block">
                        Phone Number:
                      </label>
                      <input type="number" className="form-control w-100" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 mb-0">
                      <button
                        type="submit"
                        className="btn btnThemeAlt text-capitalize position-relative border-0 p-0 w-100"
                        data-hover="Send Request"
                      >
                        <span className="d-block btnText">Send Request</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-6 position-static">
            <div className="imgWrap position-absolute d-none d-md-block">
              <img src="images/img122.png" className="img-fluid" alt="image description" />
            </div>
          </div>
        </div>
      </div>
      <span
        className="bgCover bgImg w-100 h-100 position-absolute"
        style={{ backgroundImage: "url('images/img13.jpg')" }}
      ></span>
    </aside>
    <section className="onlineShopSection py-8 py-md-15 py-lg-17 py-xl-20">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-12 text-center px-xl-10">
              <h2>
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">
                  Online Shop
                </strong>
                <span className="d-block">Shop Carwash Product</span>
              </h2>
              <p>
                These are our online mister shop products, you can purchase
                these products and services via mobile or tab.
              </p>
            </header>
          </div>
        </div>

        {/* Swiper for product slider */}
        <Swiper
           spaceBetween={30}
           slidesPerView={3} // Show 3 slides per view

           navigation={true}
           pagination={{ clickable: true }}
           modules={[Navigation, Pagination]} // Include modules here
        >
          {/* Product 1 */}
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img46.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Auto Parts</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Car Break System</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$59.49</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* Product 2 */}
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img47.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Auto Parts</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Wheel Disk Plat</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$119.00</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img48.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Wash Products</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Mister wash Liquids 5l</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$119.00</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img49.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Auto Parts</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Bumber of Brandix</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$59.49</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img50.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Car Wash</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Spark Plug Kit-400</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$119.00</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img46.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Auto Parts</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Car Break System</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$59.49</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* Product 2 */}
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img47.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Auto Parts</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Wheel Disk Plat</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$119.00</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 px-xl-3 d-flex">
              <article className="proItemCol w-100 text-center position-relative mb-6">
                <div className="prodImgWrap mb-3 mb-md-5">
                  <a href="singleProduct.html">
                    <img
                      src="images/img48.jpg"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="prodDescWrap">
                  <div className="prodCategory">Wash Products</div>
                  <h6 className="h6 mb-1 productName">
                    <a href="singleProduct.html">Mister wash Liquids 5l</a>
                  </h6>
                  <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="active">
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <div className="prodPrice mb-4">$119.00</div>
                  <a href="cart.html" className="btn btnAddToCart btnNoOver">
                    Add to Cart <span className="icn fas fa-chevron-right"></span>
                  </a>
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* More products can be added here in the same way */}
        </Swiper>
      </div>
    </section>
   <Footer></Footer>
    </div>
  )
}

export default home2
