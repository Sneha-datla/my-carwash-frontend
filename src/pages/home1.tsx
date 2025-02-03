import React, { useState } from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from '@/components/Footer';
function home1() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
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
      
      <div className="introBlock ibsSlider">
      <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
       
      
        pagination={{ clickable: true }}

    modules={[ Pagination]} // Include modules here
        
      
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
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">Care your car</strong>
                        <span className="d-block">It’s time to Come Clean your Car</span>
                      </h1>
                      <p>Professional Car Wash Center to help you to get clean vehicle!</p>
                      <Link href="/servicesSingle"className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium" data-hover="Discover More">
                          <span className="d-block btnText">Discover More</span>
                       
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute" style={{ backgroundImage: 'url(/images/img01.jpg)' }}></span>
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
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">Quick And Easy</strong>
                        <span className="d-block">Keep your Car Clean Always</span>
                      </h1>
                      <p>We are dedicated to provide best quality services!</p>
                      <Link href="/servicesSingle" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium" data-hover="Discover More">
                          <span className="d-block btnText">Discover More</span>
                     
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute" style={{ backgroundImage: 'url(/images/img07.jpg)' }}></span>
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
                        <strong className="d-block text-uppercase hTitle mb-3 mb-md-5">Professional Auto Care</strong>
                        <span className="d-block">Save your car’s Original Finish</span>
                      </h1>
                      <p>Making you Nature and Faster Shine Car wash services!</p>
                      <Link href="/servicesSingle" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-6 btnMinMedium" data-hover="Discover More">
                          <span className="d-block btnText">Discover More</span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute" style={{ backgroundImage: 'url(/images/img08.jpg)' }}></span>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    <aside className="bannerAsideBlock text-center fontAlter text-white pt-7 pb-7 pt-lg-12 pb-lg-12">
				<div className="container">
					<div className="babColumnsWrap position-relative text-left mb-md-4 mt-n20 mt-lg-n30">
						<div className="row">
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-item-center mb-5">
										<i className="icomoon-spray"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="services.html">Car wash 100% without detergents</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-item-center mb-5">
										<i className="icomoon-car-wash-3"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="services.html">Rain/Snow protection programs</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-item-center mb-5">
										<i className="icomoon-vacuum-cleaner"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="services.html">Efficient modern wash machines</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-item-center mb-5">
										<i className="icomoon-car"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="services.html">Online Appointment Booking system</a>
									</h2>
								</article>
							</div>
						</div>
					</div>
					<p><strong className="fwMedium">Offering quick and efficient service to keep your car clean <span className="d-block mt-4 mt-lg-0 d-lg-inline"><a href="tel:607329369" className="btnCalto d-inline-block overflow-hidden position-relative align-middle text-white ml-lg-2">Call for booking: <span className="bctLink">650-732-9369</span><span className="bg w-100 h-100 position-absolute"></span></a></span></strong></p>
				</div>
			</aside>
            <article className="aboutBlock pt-13 pb-7 pt-md-15 pb-md-13 pt-lg-22 pb-lg-15 pt-xl-22 pb-xl-23">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6 order-lg-2">
							<div className="imgHolder imgHolderv1 position-relative mx-auto mb-13 mb-sm-15 mb-lg-0 mx-lg-0">
								<img src="images/img02.jpg" className="w-100 img-fluid" alt="image description"/>
								<div className="descrTag descrTagv1 position-absolute d-inline-flex align-items-center bg-white fontAlter">
									<i className="lnr lnr-flag icn mr-2"><span className="sr-only">icon</span></i>
									<strong className="d-block fwMedium">25 years of <br/>quality service</strong>
								</div>
								<span className="bgPattern bgPatternv1 position-absolute">
									<img src="images/bgPattern01.png" className="img-fluid" alt="pattern"/>
								</span>
							</div>
						</div>
						<div className="col-12 col-lg-6 d-flex align-items-lg-center order-lg-1">
							<div className="align pr-lg-10 pr-xl-15">
								<header className="headingHead mb-5">
									<h2>
										<strong className="d-block text-uppercase hTitle fwMedium mb-4">Who We Are</strong>
										<span className="d-block">Professional Auto washing and detailing services</span>
									</h2>
								</header>
								<p>Over the past 6 years we cleaned over 34,000 cars, saved over 8.9 million liters of water from being used in car washing and employed 50 youth. Our legacy is in the youth that gained work and life skills, grew their confidence and have moved on to bigger.</p>
								<span className="d-block">
									<a href="javascript:void(0);" className="btnRefLink fontAlter fwMedium d-inline-flex align-items-center mt-4 transition transitClr"><i className="icomoon-document icn mr-2"><span className="sr-only">file</span></i>Download Carwash_Pricing_List</a>
								</span>
								<a href="about.html" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-7 btnMinMedium" data-hover="About More">
									<span className="d-block btnText">About More</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</article>
            <section className="servicesBlock bg-light2 pt-7 pb-7 py-md-12 pb-xl-12 pt-lgwd-15 pb-lgwd-14 pb-xl-15 pt-xl-22 pb-xl-21">
				<div className="container">
					<header className="headingBtnHead mb-6 mb-md-11 text-center text-sm-left">
						<div className="row align-items-center">
							<div className="col-12 col-sm-7 col-xl-6">
								<h2 className="fwSemi mb-5 mb-sm-0">We’re dedicated to providing best quality service</h2>
							</div>
							<div className="col-12 col-sm-5 col-xl-6 text-sm-right">
								<a href="services.html" className="btn btnThemeAlt position-relative border-0 p-0 btnMinLarge" data-hover="Explore Services">
									<span className="d-block btnText">Explore Services</span>
								</a>
							</div>
						</div>
					</header>
					<div className="row d-block mt-n6">
						<div className="sbSlider mx-auto mx-md-0">
							<div>
								     <Swiper
                                          spaceBetween={30}
                                          slidesPerView={3} // Show 3 slides per view
                                
                                          navigation={false}
                                          pagination={{ clickable: true }}
                                          modules={[Navigation, Pagination]} // Include modules here
                                
                                          >
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img03.jpg" className="img-fluid rounded w-100" alt="Express Exterior" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-2371544"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Express Exterior</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img04.jpg" className="img-fluid rounded w-100" alt="Auto Detailing" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-air-blower"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Auto Detailing</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img05.jpg" className="img-fluid rounded w-100" alt="Full Service Wash" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-car-wash-1"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Full Service Wash</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img04.jpg" className="img-fluid rounded w-100" alt="Auto Detailing" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-air-blower"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Auto Detailing</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img05.jpg" className="img-fluid rounded w-100" alt="Full Service Wash" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-car-wash-1"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Full Service Wash</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                              <div className="esColumn position-relative rounded d-block mb-6 mt-10">
                                                <div className="imgHolder position-relative rounded overflow-hidden">
                                                  <img src="images/img03.jpg" className="img-fluid rounded w-100" alt="Express Exterior" />
                                                </div>
                                                <div className="esCaption position-absolute px-4 px-xl-8 py-14">
                                                  <span className="icnWrap position-absolute rounded-circle d-flex align-items-center justify-content-center shadow">
                                                    <i className="icomoon-2371544"><span className="sr-only">icon</span></i>
                                                  </span>
                                                  <h3 className="h3Small mb-1"><a href="#">Express Exterior</a></h3>
                                                  <div className="onHover descriptWrap">
                                                    <p>Keep your car like Showroom Condition</p>
                                                    <ul className="list-unstyled pl-0 mb-0 mt-5 pcFeaturesList pcfAlt">
                                                      <li>Seats Washing</li>
                                                      <li>Vacuum Cleaning</li>
                                                      <li>Spot-free Thermal dry</li>
                                                      <li>Rain shield</li>
                                                      <li>Triple Foam</li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                          </Swiper>
										</div>
									</div>
								</div>
							</div>
						
			
			</section>
            <aside className="counterAsideBlock position-relative pt-6 pb-1 pt-md-9 pb-md-3 pt-lg-15 pb-lg-10 pt-xl-20 pb-xl-14"  style={{ backgroundImage: "url(/images/bgPattern03.jpg)" }}>
				<div className="container">
					<ul className="list-unstyled cabCounterList d-flex flex-wrap justify-content-around mb-0 mx-auto mx-md-0">
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">25</span>
								<span className="text-white subtitle">Years of <br/>Experience</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">38</span>K</span>
								<span className="text-white subtitle">Total Cars <br/>Washed</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">17</span>
								<span className="text-white subtitle">Awards &amp; <br/>Recongnitions</span>
							</h3>
						</li>
						<li>
							<h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
								<span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">14</span>K</span>
								<span className="text-white subtitle">Trusted <br/>Clients</span>
							</h3>
						</li>
					</ul>
				</div>
			</aside>
            <article className="experienceBlock position-relative py-8 pt-md-10 pb-md-60 pt-lg-14 pb-lg-56 pt-xl-21 pb-xl-23 mb-md-12 mb-xlwd-24">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-9 offset-md-3 col-lg-6 offset-lg-6">
							<div className="extraWrap pl-lg-13">
								<header className="fontAlter mb-6">
									<h2 className="text-white mb-6">25 Years of Experience in Carwash Industry</h2>
									<p>Carwash made its debut in America in 1998, bringing with us a 40 year legacy in the convenience-store and car wash.</p>
								</header>
								<ul className="list-unstyled servicesList">
									<li>Platinum exterior wash</li>
									<li>Door panels / seats wiped</li>
									<li>Hard surfaces cleaned &amp; disinfected</li>
									<li>Rubber mats washed</li>
								</ul>
								<a href="services.html" className="btn btnThemeAlt position-relative border-0 p-0 mt-5 mt-md-8 btn btnMinMedium" data-hover="Explore More">
									<span className="d-block btnText">Explore More</span>
								</a>
							</div>
						</div>
					</div>
					<div className="imgHolderCap position-absolute d-none d-md-block inaccessible">
						<img src="images/img06.png" className="img-fluid" alt="image description"/>
						<div className="imhcPinWrap imhcPinWrap1 position-absolute">
							<a href="javascript:void(0);" className="imhcPinOpener fontAlter text-white font-weight-light d-flex align-items-center justify-content-center rounded-circle position-relative">+</a>
							<div className="imhcCaption bg-white rounded shadow position-absolute text-center px-1 py-3 transition transitOpVis">
								<strong className="d-block h h3 fwMedium mb-0">Complete Car Wash Services </strong>
							</div>
						</div>
						<div className="imhcPinWrap imhcPinWrap2 position-absolute active">
							<a href="javascript:void(0);" className="imhcPinOpener fontAlter text-white font-weight-light d-flex align-items-center justify-content-center rounded-circle position-relative">+</a>
							<div className="imhcCaption bg-white rounded shadow position-absolute text-center px-1 py-3 transition transitOpVis">
								<strong className="d-block h h3 fwMedium mb-0">Complete Car Wash Services </strong>
							</div>
						</div>
						<div className="imhcPinWrap imhcPinWrap3 position-absolute">
							<a href="javascript:void(0);" className="imhcPinOpener fontAlter text-white font-weight-light d-flex align-items-center justify-content-center rounded-circle position-relative">+</a>
							<div className="imhcCaption bg-white rounded shadow position-absolute text-center px-1 py-3 transition transitOpVis">
								<strong className="d-block h h3 fwMedium mb-0">Complete Car Wash Services </strong>
							</div>
						</div>
					</div>
				</div>
				
				<span className="expWatermark position-absolute overflow-hidden w-100 h-100 inaccessible">
					<i className="icomoon-3345656 icn position-absolute"><span className="sr-only">icon</span></i>
				</span>
			</article>
            <section className="plansBlock py-7 py-md-10 pt-xl-18 pb-xl-16">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
							<header className="headingHead fzMedium text-center mb-8 mb-md-12">
								<h2>
									<strong className="d-block text-uppercase hTitle fwMedium mb-4">Pricing Plans</strong>
									<span className="d-block fwSemi">Choose your Package</span>
								</h2>
								<p>Unlimited Washes is for you! Wash whenever you want and enjoy the ease of auto monthly billing and you can cancel any time.</p>
							</header>
						</div>
					</div>
                    <div className="row">
							<div className="col-12 col-md-6 col-xl-3 d-flex">
                            <article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
              <h3 className="fwMedium mb-6">Express Wash</h3>
              <h4 className="font-weight-normal">
                <span className="d-block fwMedium">
                  <sup className="supBefore">$</sup>24
                  <sup className="supAfter">99</sup>
                </span>
                <span className="d-block subtitle pt-3">Duration: 15 min</span>
              </h4>
              <hr className="my-6" />
              <ul className="list-unstyled pcFeaturesList text-left mb-0">
                <li>Soft-cloth Wash</li>
                <li>Spot-free Rinse</li>
                <li>Spot-free Thermal dry</li>
              </ul>
              <a
                href="#"
                className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto"
                data-hover="Select"
              >
                <span className="d-block btnText">Choose Plan</span>
              </a>
            </article>
          </div>
          {/* Repeat the same structure for the other pricing cards */}
          <div className="col-12 col-md-6 col-xl-3 d-flex">
        <article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
          <h3 className="fwMedium mb-6">Supreme Wash</h3>
          <h4 className="font-weight-normal">
            <span className="d-block fwMedium">
              <sup className="supBefore">$</sup>32<sup className="supAfter">99</sup>
            </span>
            <span className="d-block subtitle pt-3">Duration: 30 min</span>
          </h4>
          <hr className="my-6" />
          <ul className="list-unstyled pcFeaturesList text-left mb-0">
            <li>Soft-cloth Wash</li>
            <li>Spot-free Rinse</li>
            <li>Spot-free Thermal dry</li>
            <li>Rain shield</li>
            <li>Triple Foam</li>
          </ul>
          <a
            href="javascript:void(0);"
            className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto"
            data-hover="Select"
          >
            <span className="d-block btnText">Choose Plan</span>
          </a>
        </article>
      </div>
      <div className="col-12 col-md-6 col-xl-3 d-flex">
        <article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6" data-featured-tag="Best Plan">
          <h3 className="fwMedium mb-6">Ultra Fullservice</h3>
          <h4 className="font-weight-normal">
            <span className="d-block fwMedium">
              <sup className="supBefore">$</sup>45<sup className="supAfter">99</sup>
            </span>
            <span className="d-block subtitle pt-3">Duration: 45 min</span>
          </h4>
          <hr className="my-6" />
          <ul className="list-unstyled pcFeaturesList text-left mb-0">
            <li>Soft-cloth Wash</li>
            <li>Spot-free Rinse</li>
            <li>Spot-free Thermal dry</li>
            <li>Rain shield</li>
            <li>Triple Foam</li>
            <li>Tire Dressing</li>
          </ul>
          <a
            href="javascript:void(0);"
            className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto"
            data-hover="Select"
          >
            <span className="d-block btnText">Choose Plan</span>
          </a>
        </article>
      </div>
      <div className="col-12 col-md-6 col-xl-3 d-flex">
        <article className="w-100 mx-auto mb-6 position-relative bg-white shadow rounded text-center priceColumn pt-9 pb-30 px-6">
          <h3 className="fwMedium mb-6">Ultimate Shine</h3>
          <h4 className="font-weight-normal">
            <span className="d-block fwMedium">
              <sup className="supBefore">$</sup>59<sup className="supAfter">99</sup>
            </span>
            <span className="d-block subtitle pt-3">Duration: 70 min</span>
          </h4>
          <hr className="my-6" />
          <ul className="list-unstyled pcFeaturesList text-left mb-0">
            <li>Soft-cloth Wash</li>
            <li>Spot-free Rinse</li>
            <li>Spot-free Thermal dry</li>
            <li>Rain shield</li>
            <li>Triple Foam</li>
            <li>Tire Dressing</li>
            <li>Vacuum &amp; Wipe Console</li>
          </ul>
          <a
            href="javascript:void(0);"
            className="btn btnThemeAlt position-absolute border-0 p-0 mx-auto"
            data-hover="Select"
          >
            <span className="d-block btnText">Choose Plan</span>
          </a>
        </article>
      </div>
                            </div>
                            </div>
                    
                    </section>
                    <aside className="callAsideBlock">
				<div className="container">
					<div className="cabHolder position-relative rounded shadow fontAlter mx-xlwd-n10 px-5 px-sm-10 py-9 py-lg-13 overflow-hidden">
						<div className="row align-items-center">
							<div className="col-12 col-lg-8 position-static">
								<div className="extraWrap pl-sm-15 pl-lg-21">
									<i className="icomoon-information1 icn d-none d-sm-block"><span className="sr-only">icon</span></i>
									<h3 className="text-white mb-4 fwMedium">Do you need help with your vehicle?</h3>
									<p className="mb-lg-0">Send us a message, or phone <a href="tel:1800234567">1-800 234 567</a> between 09:00 and 18:00 Mon -Sat.</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="extraWrap pl-sm-15 pl-lg-0 text-lg-right">
									<a href="javascript:void(0);" className="btn btnThemeWhite position-relative border-0 p-0 btnMinXLarge" data-hover="Request a Call Back">
										<span className="d-block btnText">Request a Call Back</span>
									</a>
								</div>
							</div>
						</div>
						<span className="bgPattern bgPatternv2 inaccessible position-absolute">
							<img src="images/bgPattern04.png" className="img-fluid" alt="image description"/>
						</span>
						<span className="bgPattern bgPatternv3 inaccessible position-absolute">
							<img src="images/bgPattern05.png" className="img-fluid" alt="image description"/>
						</span>
					</div>
				</div>
			</aside>
            <section className="processBlock bg-light2 text-center mt-n21 pt-30 pt-md-35 pt-lg-38 pt-xl-43 pb-8 pb-md-15 pb-xl-22">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
							<header className="headingHead fzMedium mb-12">
								<h2>
									<strong className="d-block text-uppercase hTitle fwMedium mb-4">How It Works</strong>
									<span className="d-block fwSemi">Our Work Process</span>
								</h2>
								<p>Book online. We’ll provide you with a trusted, excellent services most accurate and fair-price service Estimate.</p>
							</header>
						</div>
					</div>
					<div className="row pcColumnsWrap mx-n15 mx-md-n3 mx-xl-n16">
						<div className="col-12 col-md-4 col px-15 px-md-3 px-xl-16">
							<article className="processColumn mb-8 position-relative">
								<span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
								<h3 className="fwMedium h3Medium mb-4">Make an Appointment</h3>
								<p>Book online &amp; leave your car with us. We’ll provide you with a trusted, excellent services.</p>
								<div className="imgHolder d-none d-md-block position-absolute mt-5">
									<img src="images/arrow1.png" alt="image description" className="img-fluid"/>
								</div>
							</article>
						</div>
						<div className="col-12 col-md-4 col px-15 px-md-3 px-xl-16">
							<article className="processColumn mb-8 position-relative">
								<span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
								<h3 className="fwMedium h3Medium mb-4">Get Amzing services</h3>
								<p>Every cleaner is friendly and reliable. They’ve been background checked & rated 5-stars</p>
								<div className="imgHolder d-none d-md-block position-absolute mt-5">
									<img src="images/arrow2.png" alt="image description" className="img-fluid"/>
								</div>
							</article>
						</div>
						<div className="col-12 col-md-4 col px-15 px-md-3 px-xl-16">
							<article className="processColumn mb-8 position-relative">
								<span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
								<h3 className="fwMedium h3Medium mb-4">Pay Online &amp; Get your car</h3>
								<p>Pay online. We’ll provide you with a trusted, excellent services with door delivery option.</p>
							</article>
						</div>
					</div>
					<div className="text-center">
						<a href="bookingSystem.html" className="btn btnTheme position-relative border-0 p-0 btnMinXLarge fwMedium" data-hover="Book Appointment">
							<span className="d-block btnText">Book Appointment</span>
						</a>
					</div>	
				</div>
			</section>
			<section className="photoGalleryBlock position-relative py-7 py-md-9 py-xl-16">
				<div className="container">
					<div className="row align-items-center mb-14 mb-md-18 mb-lg-12 mb-xl-14">
						<div className="col-12 col-md-5 col-lg-4">
							<h2 className="fwSemi mb-sm-5 mb-md-0 text-white">See Gallery to see our best works</h2>
						</div>
						<div className="col-12 col-md-7 col-lg-8">
							<ul id="project-terms" className="filterList owl-filter-bar list-unstyled fwSemi d-flex p-0 m-0 justify-content-md-end flex-wrap">
								<li className="active"><a href="javascript:void(0);">All</a></li>
								<li><a href="javascript:void(0);" data-filter=".washing">Washing</a></li>
								<li><a href="javascript:void(0);" data-filter=".autoDetail">Auto Detail</a></li>
								<li><a href="javascript:void(0);" data-filter=".exterior">Exterior</a></li>
								<li><a href="javascript:void(0);" data-filter=".interior">Interior</a></li>
								<li><a href="javascript:void(0);" data-filter=".repair">Repair</a></li>
							</ul>
						</div>
					</div>
					<div className="galleryPhotoSlider mx-n3 mx-sm-n2">
          <Swiper
      spaceBetween={20} // Spacing between slides
      slidesPerView={2} // Number of slides visible
      
      pagination={{ clickable: true }} // Optional: add pagination dots
     
      className="galleryPhotoSlider"
    >
      <SwiperSlide>
        <div className="px-3 px-sm-2">
          <article className="gPhoColumn position-relative overflow-hidden">
            <img src="images/img14.jpg" className="img-fluid w-100" alt="image description" />
            <h5 className="h5 text-white">
              Complete Detail Wash
              <strong className="pgCategory font-weight-normal text-uppercase d-block">Washing</strong>
            </h5>
            <Link href="/portfoliosingle1" className="d-inline-block pgLink">
              <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo">
                <span className="sr-only">icon</span>
              </i>
            </Link>
          </article>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-3 px-sm-2">
          <article className="gPhoColumn position-relative overflow-hidden">
            <img src="images/img15.jpg" className="img-fluid w-100" alt="image description" />
            <h5 className="h5 text-white">
              Dashboard Cleaning
              <strong className="pgCategory font-weight-normal text-uppercase d-block">Interior</strong>
            </h5>
            <Link href="/portfoliosingle1" className="d-inline-block pgLink">
              <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo">
                <span className="sr-only">icon</span>
              </i>
            </Link>
          </article>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-3 px-sm-2">
							<article className="gPhoColumn position-relative overflow-hidden">
								<img src="images/img17.png" className="img-fluid w-100" alt="image description"/>
								<h5 className="h5 text-white">
									Machine Washing
									<strong className="pgCategory font-weight-normal text-uppercase d-block">Auto Detail</strong>
								</h5>
								<Link href="/portfoliosingle1" className="d-inline-block pgLink"><i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo"><span className="sr-only">icon</span></i></Link>
							</article>
						</div>
            </SwiperSlide>
            <SwiperSlide>
						<div className="px-3 px-sm-2">
							<article className="gPhoColumn position-relative overflow-hidden">
								<img src="images/img16.png" className="img-fluid w-100" alt="image description"/>
								<h5 className="h5 text-white">
									RMW Mini Cooper
									<strong className="pgCategory font-weight-normal text-uppercase d-block">Washing, Interior</strong>
								</h5>
								<Link href="/portfoliosingle1" className="d-inline-block pgLink"><i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center pgLinkGo"><span className="sr-only">icon</span></i></Link>
							</article>
						</div>
            </SwiperSlide>
            <div id="projects-hidden" className="hide"></div>
      {/* Add other SwiperSlide components here, following the same structure */}
    </Swiper>
					
		</div>
				</div>
			</section>
            <article className="testimonialsBlock overlay position-relative pt-10 pb-5 pb-md-7 pt-lg-14 pb-lg-12 pt-xl-21 pb-xl-19">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
							<header className="headingHead fzMedium mb-8 mb-md-12 text-center px-xl-10">
								<h2>
									<strong className="d-block text-uppercase hTitle fwMedium mb-4">Testimonials</strong>
						
                        			<span className="d-block fwSemi">What people think about our services</span>
								</h2>
							</header>
						</div>
					</div>
                     <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                            {/* Swiper Slider */}
                                <div className="quotesSlider">
                                  <Swiper
                                    spaceBetween={30}
                                    navigation={false}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination]}
                                  >
                                    {/* Slide 1 */}
                                    <SwiperSlide>
                                        
                                    <blockquote className="feedbackSlide fontAlter position-relative pl-10 pl-sm-12 pl-md-13 mt-8 mb-8">
                                   
                                          I love the efficiency of my Car Wash on Sunrise Valvernasa
                                          in Mangho Qor nova. A smiling greeting, an excellent
                                          wash, and on my way—clean. The best car wash ever!
                                        
                                        <cite className="">
                                        <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
												<img src="images/img09.png" className="img-fluid  imgFit rounded-circle" alt="Donald Salvor || Customer - Audi"/>
											</span>
                                          <span className="eWrap d-block">
                                            <strong className="d-block fwSemi text-primary text-capitalize mb-1">
                                              Donald Salvor
                                            </strong>
                                            <strong className="d-block subtitle font-weight-normal fontBase">
                                              Customer - Audi
                                            </strong>
                                          </span>
                                        </cite>
                                      </blockquote>
                                    </SwiperSlide>
                                    {/* Slide 2 */}
                                    <SwiperSlide>
                                        
                                    <blockquote className="feedbackSlide fontAlter position-relative pl-10 pl-sm-12 pl-md-13 mt-8 mb-8">
                                   
                                    BNI India is India’s largest and most successful business net working organisation. We offer our members the opportunity to share ideas, contacts, and most importantly!
                                      
                                        <cite className="d-block pl-12 pl-sm-0">
                                        <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                            <img
                                              src="/images/img10.png"
                                              className="rounded-circle"
                                              alt="Peek Thakul"
                                            />
                                          </span>
                                          <span className="eWrap d-block">
                                            <strong className="d-block fwSemi text-primary text-capitalize mb-1">
                                            Dr. Kristina Castle
                                            </strong>
                                            <strong className="d-block subtitle font-weight-normal fontBase">
                                            Medical Scientist
                                            </strong>
                                          </span>
                                        </cite>
                                      </blockquote>
                                    </SwiperSlide>
                                    {/* Slide 3 */}
                                    <SwiperSlide>
                                        
                                    <blockquote className="feedbackSlide fontAlter position-relative pl-10 pl-sm-12 pl-md-13 mt-8 mb-8">
                                            
                                       
                                        BNI India is India’s largest and most successful business net working organisation. We offer our members the opportunity to share ideas, contacts, and most importantly!
                                          
                                            <cite className="d-block pl-12 pl-sm-0">
                                            <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                                                <img
                                                  src="/images/img11.png"
                                                  className="rounded-circle"
                                                  alt="Peek Thakul"
                                                />
                                              </span>
                                              <span className="eWrap d-block">
                                                <strong className="d-block fwSemi text-primary text-capitalize mb-1">
                                                Dr. Kristina Castle
                                                </strong>
                                                <strong className="d-block subtitle font-weight-normal fontBase">
                                                Medical Scientist
                                                </strong>
                                              </span>
                                            </cite>
                                          </blockquote>
                                        </SwiperSlide>
                                  </Swiper>
                                </div>
                              </div>
                   </div>
                   </div>
                   <span className="bgCover imgBg w-100 h-100 position-absolute" style={{ backgroundImage: "url(images/bgPattern07.jpg)" }}></span>

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
                        <aside className="requestCallAside position-relative pt-7 pt-md-9 pt-xl-16">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <header className="header mb-7">
              <h2 className="text-white mb-4 fwSemi">Request a Call back</h2>
              <p>
                We inspire clients to make their most challenging business decisions with confidence. Send us a
                message or Call Us.
              </p>
            </header>
            <ul className="list-unstyled mb-0 rcaTimeList mb-8">
              <li>
                <div className="d-flex align-items-center">
                  <div className="icnWrap flex-shrink-0 mr-4">
                    <i className="icn icomoon-phone-call text-white"></i>
                  </div>
                  <div className="decWrap">
                    <strong className="d-block fwSemi text-white">Call for book:</strong>
                    <strong className="d-block fwSemi text-secondary">8-800-10-500</strong>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <div className="icnWrap flex-shrink-0 mr-4">
                    <i className="icn icomoon-clock text-white"></i>
                  </div>
                  <div className="decWrap">
                    <strong className="d-block fwSemi text-white">Working Hours:</strong>
                    <strong className="d-block fwSemi text-secondary">09:00-18:00 (Mon-Sat)</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <div className="formWrap mb-n24">
              <form className="requstAcallForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="fLabel fontAlter text-primary d-block">Your Service Request:</label>
                    <div className="coolSelectWrapper">
                      <select
                        className="coolSelect form-control"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select Service
                        </option>
                        <option value="Express Exterior">Express Exterior</option>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Auto Detail Wash">Auto Detail Wash</option>
                        <option value="Preventative Services">Preventative Services</option>
                        <option value="Complete Detail Wash">Complete Detail Wash</option>
                        <option value="Full Service Wash">Full Service Wash</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="fLabel fontAlter text-primary d-block">Your Name:</label>
                    <input
                      type="text"
                      className="form-control w-100"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="fLabel fontAlter text-primary d-block">Phone Number:</label>
                    <input
                      type="number"
                      className="form-control w-100"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
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
      </div>
      <span
        className="bgCover bgImg w-100 h-100 position-absolute"
        style={{ backgroundImage: 'url(/images/img13.jpg)' }}
      ></span>
    </aside>
    <section className="cctBlock position-relative pt-34 pb-7 pb-md-12 pt-md-20 pt-lg-30 pb-lg-16 pt-xl-40 pb-xl-16">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-xl-3 pt-lg-9">
            <header className="mb-3 mb-lg-10 mb-xl-0">
              <h2 className="fwSemi h4 mb-4">
                See all Carwash <br /> Locations
              </h2>
              <p>
                The convenience-store and car wash business from across seven
                different locations.
              </p>
            </header>
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <Swiper
             spaceBetween={30}
             navigation={false}
             pagination={{ clickable: true }}
             modules={[Navigation, Pagination]}
              slidesPerView={3}
            
              className="arddColumnSlider"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwSemi fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Beloal
                        Location
                      </strong>
                      <address className="mt-5 mb-4">
                        250 Main Street, Newton Hall, NY 52143
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i
                            className="fas fa-phone-alt icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          (61) 235 9595
                        </li>
                        <li>
                          <i
                            className="far fa-clock icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          Mon-Sat: 8am-6:00pm
                        </li>
                      </ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Sascha
                        Location
                      </strong>
                      <address className="mt-5 mb-4">
                        576 South Street, Police station, NY 13245
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i
                            className="fas fa-phone-alt icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          (61) 235 9595
                        </li>
                        <li>
                          <i
                            className="far fa-clock icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          Mon-Sat: 8am-6:00pm
                        </li>
                      </ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              {/* Slide 3 */}
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Mecican
                        Location
                      </strong>
                      <address className="mt-5 mb-4">
                        65 Town hall Road, Benshall, Westhorn, NY 5623
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i
                            className="fas fa-phone-alt icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          (61) 235 9595
                        </li>
                        <li>
                          <i
                            className="far fa-clock icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          Mon-Sat: 8am-6:00pm
                        </li>
                      </ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              {/* Add more slides here */}
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Sascha
                        Location
                      </strong>
                      <address className="mt-5 mb-4">
                        576 South Street, Police station, NY 13245
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i
                            className="fas fa-phone-alt icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          (61) 235 9595
                        </li>
                        <li>
                          <i
                            className="far fa-clock icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          Mon-Sat: 8am-6:00pm
                        </li>
                      </ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwSemi fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Beloal
                        Location
                      </strong>
                      <address className="mt-5 mb-4">
                        250 Main Street, Newton Hall, NY 52143
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i
                            className="fas fa-phone-alt icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          (61) 235 9595
                        </li>
                        <li>
                          <i
                            className="far fa-clock icn position-absolute"
                            aria-hidden="true"
                          ></i>
                          Mon-Sat: 8am-6:00pm
                        </li>
                      </ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-2">
                  <article className="getDirColumn d-flex w-100">
                    <div className="bg-white w-100 py-8 px-3 px-md-5 gdcHolder">
                      <strong className="ardBadge fwSemi fwMedium fontAlter">
                        <i className="fas fa-map-marker-alt icn mr-2"></i>Medical Center
                      </strong>
                      <address className="mt-5 mb-4">
                      65 Town hall Road, Benshall, Westhorn, NY 5623
                      </address>
                      <ul className="list-unstyled contactInfoList mb-6">
												<li>
													<i className="far fa-envelope icn position-absolute" aria-hidden="true"><span className="sr-only">icon</span></i>
													Health@example.com
												</li>
												<li>
													<i className="fas fa-phone-alt icn position-absolute" aria-hidden="true"><span className="sr-only">icon</span></i>
													Emergency: 108
												</li>
											</ul>
                      <Link href="/contact" className="btn btnLink">
                        View Details{' '}
                        <span className="icn fas fa-chevron-right"></span>
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <span
        className="bgCover imgBg w-100 h-100 position-absolute"
        style={{
          backgroundImage: 'url(/images/bgPattern06.png)',
        }}
      ></span>
    </section>
    <Footer></Footer>
    </div>

  )
}

export default home1
