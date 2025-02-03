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

function elements() {
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
                                                                  <h1 className="text-white font-weight-bold mb-4 h2Large">Elements</h1>
                                                                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                  <li><a href="#">Home</a></li>
											<li><a href="#">Pages</a></li>
											<li>Elements</li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                          <Image src="/images/img18.jpg" alt="Background" layout="fill" objectFit="cover" />
                                        </span> 				</article>
                            
                                      </div>
   <div className="contntWrap py-6 py-md-10 py-lg-14 py-xl-18 py-xlwd-22">
				<div className="accordionComponent mb-8">
					<div className="container">
						<h2 className="h2 mb-5 mb-md-8 fwMedium">Accordion</h2>
						<div className="row">
							<div className="col-12 col-md-6">
								<div className="accordion faqAccordion mb-8 mb-md-12" id="ctdepartsAccordion">
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr1" data-toggle="collapse" aria-expanded="false" aria-controls="ctr1">How long does a car wash take?</a>
										</div>
										<div className="collapse ctaccSlide" id="ctr1" data-parent="#ctdepartsAccordion">
											<div className="overflow-hidden px-5 pb-1">
												<p>One of the most common additions people make to their cars in order to keep the heat out is a windshield visor. Cars become warm in the summer because direct sunlight enters in through the windows. This is why we park in the shade whenever we can. Since the largest windshield.In fact, wind is becoming cheap enough in many places in the U.S. and around the world to compete effectively with fossil fuels.</p>
											</div>
										</div>
									</div>
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr2" data-toggle="collapse" aria-expanded="true" aria-controls="ctr2">What size vehicles can fit through the car wash tunnel?</a>
										</div>
										<div className="collapse show ctaccSlide" id="ctr2" data-parent="#ctdepartsAccordion">
											<div className="overflow-hidden px-5 pb-1">
												<p>Fast Lane Shinkansen global hand-crafted premium. Washlet bespoke conversation bulletin. Comme des Garçons Asia-Pacific vibrant, boutique perfect wardrobe handsome ginza.</p>
											</div>
										</div>
									</div>
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr3" data-toggle="collapse" aria-expanded="false" aria-controls="ctr3">Do I have to make an appointment for a car wash?</a>
										</div>
										<div className="collapse ctaccSlide" id="ctr3" data-parent="#ctdepartsAccordion">
											<div className="overflow-hidden px-5 pb-1">
												<p>One of the most common additions people make to their cars in order to keep the heat out is a windshield visor. Cars become warm in the summer because direct sunlight enters in through the windows. This is why we park in the shade whenever we can. Since the largest windshield.In fact, wind is becoming cheap enough in many places in the U.S. and around the world to compete effectively with fossil fuels.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="accordion ctAccordion" id="ctdepartsAccordion01">
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr01" data-toggle="collapse" aria-expanded="false" aria-controls="ctr01">How long does a car wash take?</a>
										</div>
										<div className="collapse ctaccSlide" id="ctr01" data-parent="#ctdepartsAccordion01">
											<div className="overflow-hidden px-5 pb-1">
												<p>One of the most common additions people make to their cars in order to keep the heat out is a windshield visor. Cars become warm in the summer because direct sunlight enters in through the windows. This is why we park in the shade whenever we can. Since the largest windshield.In fact, wind is becoming cheap enough in many places in the U.S. and around the world to compete effectively with fossil fuels.</p>
											</div>
										</div>
									</div>
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr02" data-toggle="collapse" aria-expanded="true" aria-controls="ctr02">What size vehicles can fit through the car wash tunnel?</a>
										</div>
										<div className="collapse show ctaccSlide" id="ctr02" data-parent="#ctdepartsAccordion01">
											<div className="overflow-hidden px-5 pb-1">
												<p>Fast Lane Shinkansen global hand-crafted premium. Washlet bespoke conversation bulletin. Comme des Garçons Asia-Pacific vibrant, boutique perfect wardrobe handsome ginza.</p>
											</div>
										</div>
									</div>
									<div className="ctaccRow mb-4">
										<div className="ctaccOpener">
											<a className="fontAlter" href="#ctr03" data-toggle="collapse" aria-expanded="false" aria-controls="ctr03">Do I have to make an appointment for a car wash?</a>
										</div>
										<div className="collapse ctaccSlide" id="ctr03" data-parent="#ctdepartsAccordion01">
											<div className="overflow-hidden px-5 pb-1">
												<p>One of the most common additions people make to their cars in order to keep the heat out is a windshield visor. Cars become warm in the summer because direct sunlight enters in through the windows. This is why we park in the shade whenever we can. Since the largest windshield.In fact, wind is becoming cheap enough in many places in the U.S. and around the world to compete effectively with fossil fuels.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tabsComponent mb-8">
					<div className="container">
						<h2 className="h2 mb-8 mb-md-8 fwMedium">Tabs</h2>
						<div className="row">
							<div className="col-12 col-md-6 mb-3 mb-md-0">
								<ul className="nav nav-tabs dcsTabset fontAlter" id="dcsTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link" id="identified-tab" data-toggle="tab" href="#Identified" role="tab" aria-controls="Identified" aria-selected="true">Identified</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" id="consulting-tab" data-toggle="tab" href="#consulting" role="tab" aria-controls="consulting" aria-selected="false">Consulting</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="products-tab" data-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="false">Produce</a>
									</li>
								</ul>
								<div className="tab-content dcsTabContent mb-7 mb-xl-12" id="dcsTabContent">
									<div className="tab-pane fade" id="Identified" role="tabpanel" aria-labelledby="identified-tab">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against - how dark tinted windows farm routune wise all yield works done ny meter peals can be, so you should check the laws in your area before you proceed.</p>
										</div>
									</div>
									<div className="tab-pane fade show active" id="consulting" role="tabpanel" aria-labelledby="consulting-tab">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against.</p>
										</div>
									</div>
									<div className="tab-pane fade" id="products" role="tabpanel" aria-labelledby="products-tab">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<ul className="nav nav-tabs dcsTabset dcsTabsetVII fontAlter" id="dcsTab01" role="tablist">
									<li className="nav-item">
										<a className="nav-link" id="identified-tab01" data-toggle="tab" href="#Identified01" role="tab" aria-controls="Identified01" aria-selected="true">Identified</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" id="consulting-tab01" data-toggle="tab" href="#consulting01" role="tab" aria-controls="consulting01" aria-selected="false">Consulting</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="products-tab01" data-toggle="tab" href="#products01" role="tab" aria-controls="products01" aria-selected="false">Produce</a>
									</li>
								</ul>
								<div className="tab-content dcsTabContent dcsTabContentVII mb-7 mb-xl-12" id="dcsTabContent01">
									<div className="tab-pane fade" id="Identified01" role="tabpanel" aria-labelledby="identified-tab01">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against - how dark tinted windows farm routune wise all yield works done ny meter peals can be, so you should check the laws in your area before you proceed.</p>
										</div>
									</div>
									<div className="tab-pane fade show active" id="consulting01" role="tabpanel" aria-labelledby="consulting-tab01">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against.</p>
										</div>
									</div>
									<div className="tab-pane fade" id="products01" role="tabpanel" aria-labelledby="products-tab01">
										<div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
											<p>To help customers block out even more of the sun, consider offering window-tinting services. Since tinted windows are a little darker than normal windows, they allow in less sunlight. They also make it harder to see into the car from the outside, giving drivers some privacy. Keep in mind that some areas have laws against.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
    <div className="iconBoxComponent mb-8 mb-md-12">
					<div className="container">
						<h2 className="h2 mb-5 mb-md-8 fwMedium">Icon Boxes</h2>
						<div className="row mb-10 mb-md-15 ">
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn shadow pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-items-center mb-5">
										<i className="icomoon-spray"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="#">Car wash 100% without detergents</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn shadow pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-items-center mb-5">
										<i className="icomoon-car-wash-3"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="#">Rain/Snow protection programs</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn shadow pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-items-center mb-5">
										<i className="icomoon-vacuum-cleaner"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="#">Efficient modern wash machines</a>
									</h2>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-xl-3">
								<article className="bg-white rounded babFeatureColumn shadow pr-5 pl-5 pt-6 pb-5 pr-xl-7 pl-xl-8 pt-xl-8 pb-xl-7 mb-6">
									<span className="icnWrap d-flex align-items-center mb-5">
										<i className="icomoon-car"></i>
									</span>
									<h2 className="mb-0 position-relative pb-3 pb-xl-5">
										<a href="#">Online Appointment Booking system</a>
									</h2>
								</article>
							</div>
						</div>
						<ul className="list-unstyled fabFeaturesList mb-0 d-flex flex-wrap mb-10">
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-vacuum-cleaner"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Complete Interior Vacuum</a>
									</h6>
								</div>
							</li>
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-seat"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Bumper Gentle Wash</a>
									</h6>
								</div>
							</li>
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-repair"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Four Wheel Alighning</a>
									</h6>
								</div>
							</li>
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-mat"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Soft Towel Drying</a>
									</h6>
								</div>
							</li>
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-car-1"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Surface Drying Machines</a>
									</h6>
								</div>
							</li>
							<li>
								<div className="featureColumn bg-white rounded text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
									<span className="icnWrap d-flex align-item-center justify-content-center mb-5">
										<i className="icomoon-tire"></i>
									</span>
									<h6 className="h6 mb-0 position-relative">
										<a href="#">Wheels Air Checking</a>
									</h6>
								</div>
							</li>
						</ul>
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
						<div className="row">
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-car-wash-4"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">High Quality</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-bathing"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">Organic Products</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-mechanic"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">Talented Workers</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-clean"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">Eco Hand Wash</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-ventilator"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">Modern Equipments</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
							<div className="col-12 col-sm-6 col-md-4">
								<article className="ftColumnGrid py-3 mb-6 d-sm-flex align-items-center">
									<span className="icnWrap d-flex justify-content-center align-items-center mr-sm-3 mb-5 mb-sm-0 rounded-circle flex-shrink-0">
										<i className="icomoon-steering-wheel"></i>
									</span>
									<div className="dscrWrap">
										<h5 className="h5 mb-2">
											<a href="#">Best Result</a>
										</h5>
										<p>Sed sed condimentum massa morbila auctor vestibulum urna.</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
                <div className="counterComponent">
					<div className="container">
						<h2 className="h2 mb-5 fwMedium">Counter</h2>
					</div>
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
				</div>
                <div className="priceBoxComponent py-8 py-md-12 py-lg-16">
					<div className="container">
						<h2 className="h2 mb-5 mb-md-8 fwMedium">Pricing Box</h2>
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
                            </div>
                            <div className="progressBarComponent pb-12 pb-md-12 pb-lg-16">
					<div className="container">
						<h2 className="h2 mb-5 mb-md-8 fwMedium">Progress Bar</h2>
						<div className="row">
							<div className="col-12 col-lg-6">
								<ul className="list-unstyled skillsRankList mb-10 mb-lg-0">
									<li>
										<div className="progresWrap">
											<div className="prgTopWrap text-lDark d-flex mb-3">
												<div className="wrap">
													<strong className="d-block fontAlter font-weight-normal">Crisis Management</strong>
												</div>
												<div className="wrap text-right">
													<strong className="d-block fontAlter font-weight-normal"><span className="dataCount">80</span>%</strong>
												</div>
											</div>
											<div className=" progress-bar bg-white position-relative" id="progress-bar01">
												<span className="d-block progressBar">
													<span className="percentageProgBar" >
														<span className="bar">
															<span className="over" data-percent="100%" ></span>
														</span>
													</span>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className="progresWrap">
											<div className="prgTopWrap text-lDark d-flex mb-3">
												<div className="wrap">
													<strong className="d-block fontAlter font-weight-normal">Public Speaking</strong>
												</div>
												<div className="wrap text-right">
													<strong className="d-block fontAlter font-weight-normal"><span className="dataCount">90</span>%</strong>
												</div>
											</div>
											<div className=" progress-bar bg-white position-relative" id="progress-bar02">
												<span className="d-block progressBar">
													<span className="percentageProgBar" >
														<span className="bar">
															<span className="over" data-percent="100%" ></span>
														</span>
													</span>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className="progresWrap">
											<div className="prgTopWrap text-lDark d-flex mb-3">
												<div className="wrap">
													<strong className="d-block fontAlter font-weight-normal">Problem Solving</strong>
												</div>
												<div className="wrap text-right">
													<strong className="d-block fontAlter font-weight-normal"><span className="dataCount">85</span>%</strong>
												</div>
											</div>
											<div className=" progress-bar bg-white position-relative" id="progress-bar03">
												<span className="d-block progressBar">
													<span className="percentageProgBar" >
														<span className="bar">
															<span className="over" data-percent="100%" ></span>
														</span>
													</span>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className="progresWrap">
											<div className="prgTopWrap text-lDark d-flex mb-3">
												<div className="wrap">
													<strong className="d-block fontAlter font-weight-normal">Strategy Planning</strong>
												</div>
												<div className="wrap text-right">
													<strong className="d-block fontAlter font-weight-normal"><span className="dataCount">95</span>%</strong>
												</div>
											</div>
											<div className=" progress-bar bg-white position-relative" id="progress-bar04">
												<span className="d-block progressBar">
													<span className="percentageProgBar" >
														<span className="bar">
															<span className="over" data-percent="100%" ></span>
														</span>
													</span>
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-12 col-lg-6">
								<div className="row">
									<div className="col-12 col-sm-6 text-center">
										<div className="pieWrapper mb-15 mb-sm-0">
											<span className="label"><span className="dataCount">80</span>%</span>
											<div className="pie">
												<div className="left-side half-circle"></div>
												<div className="right-side half-circle"></div>
											</div>
											<div className="shadow"></div>
											<h6 className="h6 mb-0 pieAnaTitle text-center mt-4">Diagnostic</h6>
										</div>
									</div>
									<div className="col-12 col-sm-6 text-center">
										<div className="pieWrapper mb-">
											<span className="label"><span className="dataCount">95</span>%</span>
											<div className="pie">
												<div className="left-side half-circle"></div>
												<div className="right-side half-circle"></div>
											</div>
											<div className="shadow"></div>
											<h6 className="h6 mb-0 pieAnaTitle text-center mt-4">Consultation</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="serviceBoxComponent pt-8 pt-lg-0 pb-12 pb-lg-16">
					<div className="container">
						<h2 className="h2 mb-5 mb-md-8 fwMedium">Service Boxes</h2>
						<div className="row d-block mt-n6">
							<div className="sbSlider ">
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
          </Swiper>
									
								</div>
							</div>
						</div>
						<div className="serviceListWrap pt-8 pt-md-12 pt-lg-16 pb-xlwd-6">
							<ul className="list-unstyled serviceListView pl-0 mb-0 d-flex align-items-center justify-content-center flex-wrap">
								<li>
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-car-wash"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Express Exterior</a></h6>
									</article>
								</li>
								<li>
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-air-blower"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Auto Detailing</a></h6>
									</article>
								</li>
								<li>
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-car-wash-1"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Full Service Car Wash</a></h6>
									</article>
								</li>
								<li>
									
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-car-wash-2"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Complete Detail Wash</a></h6>
									</article>
								</li>
								<li>
								
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-fuel"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Oil Changing</a></h6>
									</article>
								</li>
								<li>
									<article className="serviceViewBox text-center bg-white">
										<span className="icnWrap d-flex align-items-center justify-content-center rounded-circle mb-3">
											<span className="w-100 d-block p-1">
												<span className="icn icomoon-repair"></span>
											</span>
										</span>
										<h6 className="h6 mb-0"><a href="#">Preventative Maintenance</a></h6>
									</article>
								</li>
							</ul>
						</div>
					</div>
				</div>
                <div className="testimonialsComponent pb-8 pb-md-12 pb-xl-16">
					<div className="container">
						<h2 className="h2 mb-3 mb-md-5 fwMedium">Testimonials</h2>
                        <div className="testimonialSliderVI">
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // Show 3 slides per view

            navigation={false}
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
    </div>
    <div className="sponserComponent pt-5 pt-md-8 pb-8 pb-md-12 pb-xl-16">
      <div className="container">
        <h2 className="h2 mb-8 mb-lg-10 fwMedium">Partners & Sponsors</h2>
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
    <div className="calloutComponent py-5 py-md-8">
      <div className="container">
        <h2 className="h2 mb-5 mb-md-8 fwMedium">Callout Box</h2>
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
                  <a href="tel:1800234567">1-800 234 567</a> between 09:00 and 18:00 Mon - Sat.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="extraWrap pl-sm-15 pl-lg-0 text-lg-right">
                <a
                  href="#"
                  className="btn btnThemeWhite position-relative border-0 p-0 btnLarge"
                  data-hover="Request a Call Back"
                >
                  <span className="d-block btnText">Request a Call Back</span>
                </a>
              </div>
            </div>
          </div>
          <span className="bgPattern bgPatternv2 inaccessible position-absolute">
            <img src="/images/bgPattern04.png" className="img-fluid" alt="image description" />
          </span>
          <span className="bgPattern bgPatternv3 inaccessible position-absolute">
            <img src="/images/bgPattern05.png" className="img-fluid" alt="image description" />
          </span>
        </div>
      </div>
    </div>
    <div className="tableComponent py-8 py-md-12 py-lg-16">
      <div className="container">
        <h2 className="h2 mb-5 mb-md-8 fwMedium">Table</h2>
        <div className="table-responsive">
          <table className="table tableDefault fontAlter mb-0">
            <thead>
              <tr>
                <th>À La Carte Services</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cctService">Air Freshener</td>
                <td className="cctTime">45 Min</td>
                <td className="cctAmount">$1.00</td>
              </tr>
              <tr>
                <td className="cctService">Armor All Tires</td>
                <td className="cctTime">60 Min</td>
                <td className="cctAmount">$2.00</td>
              </tr>
              <tr>
                <td className="cctService">Gleam Polish Wax</td>
                <td className="cctTime">15 Min</td>
                <td className="cctAmount">$4.00</td>
              </tr>
              <tr>
                <td className="cctService">Extra Vacuuming</td>
                <td className="cctTime">30 Min</td>
                <td className="cctAmount">$5.00 &amp; Up</td>
              </tr>
              <tr>
                <td className="cctService">Mats Brush Cleaned</td>
                <td className="cctTime">45 Min</td>
                <td className="cctAmount">$1.00</td>
              </tr>
              <tr>
                <td className="cctService">Trunk and Cargo Vacuuming</td>
                <td className="cctTime">90 Min</td>
                <td className="cctAmount">By Estimate</td>
              </tr>
              <tr>
                <td className="cctService">Convertible Tops Cleaned</td>
                <td className="cctTime">20 Min</td>
                <td className="cctAmount">By Estimate</td>
              </tr>
              <tr>
                <td className="cctService">Vinyl Tops Cleaned and Dressed</td>
                <td className="cctTime">10 Min</td>
                <td className="cctAmount">By Estimate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="messageboxComponent py-5 pb-md-8">
      <div className="container">
        <h2 className="h2 mb-5 mb-md-8 fwMedium">Message Boxes</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="messageBox successMessage position-relative">
              <div className="d-flex bg-white shadow rounded py-4 pl-4 pr-8 mb-6">
                <div className="icnWrap flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center mr-3">
                  <i className="far fa-check-circle"></i>
                </div>
                <div className="descWrap">
                  <h6 className="h6 mb-1">Success</h6>
                  <p className="mb-0">Sed pellentesque pellen tesque quamac maculisora.</p>
                </div>
                <a href="#" className="icnClose fas fa-times"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
    {/* Error Message */}
    <div className="messageBox errorMessage position-relative">
      <div className="d-flex bg-white shadow rounded py-4 pl-4 pr-8 mb-6">
        <div className="icnWrap flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center mr-3">
          <i className="far fa-times-circle"></i>
        </div>
        <div className="descWrap">
          <h6 className="h6 mb-1">Error</h6>
          <p className="mb-0">Sed pellentesque pellen tesque quamac maculisora.</p>
        </div>
        <a href="#" className="icnClose fas fa-times"></a>
      </div>
    </div>
  </div>

  <div className="col-12 col-md-6">
    {/* Warning Message */}
    <div className="messageBox warningMessage position-relative">
      <div className="d-flex bg-white shadow rounded py-4 pl-4 pr-8 mb-6">
        <div className="icnWrap flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center mr-3">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div className="descWrap">
          <h6 className="h6 mb-1">Warning</h6>
          <p className="mb-0">Sed pellentesque pellen tesque quamac maculisora.</p>
        </div>
        <a href="#" className="icnClose fas fa-times"></a>
      </div>
    </div>
  </div>

  <div className="col-12 col-md-6">
    {/* Important Message */}
    <div className="messageBox importantMessage position-relative">
      <div className="d-flex bg-white shadow rounded py-4 pl-4 pr-8 mb-6">
        <div className="icnWrap flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center mr-3">
          <i className="far fa-bell"></i>
        </div>
        <div className="descWrap">
          <h6 className="h6 mb-1">Important</h6>
          <p className="mb-0">Sed pellentesque pellen tesque quamac maculisora.</p>
        </div>
        <a href="#" className="icnClose fas fa-times"></a>
      </div>
    </div>
    </div>
          {/* Repeat for other message boxes */}
        </div>
      </div>
    </div>
    <div className="buttonComponent py-5 pb-md-8">
      <div className="container">
        <h2 className="h2 mb-5 mb-md-8 fwMedium">Buttons</h2>
        <div className="row justify-content-center">
          {/* Button Box 1 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="btnBox text-center px-8 py-10">
              <ul className="list-unstyled pl-0 mb-0">
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAlt position-relative border-0 p-0 btnMinXLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAlt position-relative border-0 p-0 btnMinLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAlt position-relative border-0 p-0 btnMinMedium"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAlt position-relative border-0 p-0 btnMinSmall"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Button Box 2 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="btnBox text-center px-8 py-10">
              <ul className="list-unstyled pl-0 mb-0">
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAltInverse position-relative border-0 p-0 btnMinXLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAltInverse position-relative border-0 p-0 btnMinLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAltInverse position-relative border-0 p-0 btnMinMedium"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeAltInverse position-relative border-0 p-0 btnMinSmall"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Button Box 3 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="btnBox text-center px-8 py-10">
              <ul className="list-unstyled pl-0 mb-0">
                <li>
                  <a
                    href="#"
                    className="btn btnTheme position-relative border-0 p-0 btnMinXLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnTheme position-relative border-0 p-0 btnMinLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnTheme position-relative border-0 p-0 btnMinMedium"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnTheme position-relative border-0 p-0 btnMinSmall"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Button Box 4 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="btnBox text-center px-8 py-10 bg-primary rounded">
              <ul className="list-unstyled pl-0 mb-0">
                <li>
                  <a
                    href="#"
                    className="btn btnThemeWhiteInverse position-relative border-0 p-0 btnMinXLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeWhiteInverse position-relative border-0 p-0 btnMinLarge"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeWhiteInverse position-relative border-0 p-0 btnMinMedium"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btnThemeWhiteInverse position-relative border-0 p-0 btnMinSmall"
                    data-hover="Learn More"
                  >
                    <span className="d-block btnText">Learn More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contactformComponent pt-5 pt-md-8 pb-3">
      <div className="container">
        <div className="row">
          {/* Google Map Section */}
          <div className="col-12 col-lg-6">
            <h2 className="h2 mb-6 fwMedium">Google Map</h2>
            <div className="imgWrap mb-8">
              <Image
                src="/images/mapPlaceholder.jpg"
                className="img-fluid w-100"
                alt="image description"
                width={600} // Adjust width as per your needs
                height={400} // Adjust height as per your needs
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="col-12 col-lg-6">
            <h2 className="h2 mb-6 fwMedium">Forms</h2>
            <form action="#" className="contactForm">
              <div className="row mx-n2">
                {/* Name Input */}
                <div className="col-12 col-sm-6 px-2">
                  <div className="form-group">
                    <label className="colFormLabel fontAlter">
                      Your Name <span className="text-danger fsSmall">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control d-block w-100"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="col-12 col-sm-6 px-2">
                  <div className="form-group">
                    <label className="colFormLabel fontAlter">
                      Email <span className="text-danger fsSmall">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control d-block w-100"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="col-12 px-2">
                  <div className="form-group">
                    <label className="colFormLabel fontAlter">Subject</label>
                    <input type="text" className="form-control d-block w-100" />
                  </div>
                </div>

                {/* Message Input */}
                <div className="col-12 px-2">
                  <div className="form-group">
                    <label className="colFormLabel fontAlter">
                      Write Your Message:
                    </label>
                    <textarea className="form-control w-100 d-block"></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="btn btnThemeAlt d-flex font-weight-bold text-capitalize position-relative border-0 p-0 mt-2 btnWidthSmall w-100"
                data-hover="Send Message"
              >
                <span className="d-block btnText">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default elements
