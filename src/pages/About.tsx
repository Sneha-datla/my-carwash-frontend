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

function About() {
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
                                                                  <h1 className="text-white font-weight-bold mb-4 h2Large">About Us</h1>
                                                                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                  <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>About Us</li>
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
      <article className="aboutBlock pt-13 pb-7 pt-sm-15 pb-md-10 pt-lg-18 pb-lg-18 pt-xl-22 pb-xl-23">
        <div className="container">
          <div className="row mb-10 mb-lg-14 mb-xl-22 mx-xl-n5">
            <div className="col-12 col-lg-6 px-xl-5">
              <div className="imgHolder imgHolderv1 imgHolderv2 position-relative mx-auto mb-10 mb-sm-15 mb-lg-0 mx-lg-0">
                <Image src="/images/img64.png" className="w-100 img-fluid" alt="image description" width={500} height={500} />
                <div className="descrTag descrTagv1 position-absolute d-inline-flex align-items-center bg-white fontAlter">
                  <i className="lnr lnr-flag icn mr-2">
                    <span className="sr-only">icon</span>
                  </i>
                  <strong className="d-block fwMedium">25 years of <br />Experience</strong>
                </div>
                <span className="bgPattern bgPatternv1 position-absolute">
                  <Image src="/images/bgPattern01.png" className="img-fluid" alt="pattern" width={200} height={200} />
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-6 px-xl-5 d-flex align-items-lg-center">
              <div className="align pr-lg-10 pr-xl-15">
                <header className="headingHead mb-5">
                  <h2 className="fwSemi">
                    <strong className="d-block text-uppercase hTitle fwMedium mb-4">Who We Are</strong>
                    <span className="d-block">Professional Washing and Cleaning of Your Car</span>
                  </h2>
                </header>
                <p>Since opening Mister Car Wash in 1998, owners Petisars and Ken Mathov have been the driving force.</p>
                <p>Mister wash made its debut in America in 1998, bringing with us a 40 year legacy in the convenience-store and car wash business from across seven states. Far from your typical gas-n-go, we built our brand by giving customers a sense of luxury in a place.</p>
                <a href="/about" className="btn btnThemeAlt position-relative border-0 p-0 mt-3 mt-md-7 btnMinMediumAlt" data-hover="About More">
                  <span className="d-block btnText">About More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <article className="abtBlockColumn position-relative mb-10 mb-lg-0">
                <span className="icnWrap d-flex align-item-center mb-4">
                  <i className="icomoon-like"></i>
                </span>
                <h4 className="h4 mb-6">Our Mission, Vision, Values.</h4>
                <div className="row">
                  <div className="col-12 col-sm-5 col-lg-12 col-xl-5">
                    <div className="imgWrap mb-4 mb-sm-0 mb-lg-4 mb-xl-0">
                      <Image src="/images/img65.png" className="img-fluid" alt="image description" width={300} height={300} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-7 col-lg-12 col-xl-7">
                    <p>More like it was the first of its kind in the state, serving customers looking for a high quality car wash. a reasonable price, with friendly relationship.</p>
                    <ul className="list-unstyled pcFeaturesList pcfAlt pl-0 mb-0">
                      <li><strong className="fwMedium text-primary">Safety: </strong>Use all senses and take action</li>
                      <li><strong className="fwMedium text-primary">Integrity: </strong>Stay honest; do what’s right</li>
                      <li><strong className="fwMedium text-primary">Fun: </strong>Connect, compete, and laugh</li>
                      <li><strong className="fwMedium text-primary">Teamwork: </strong>Help others before they ask any help to us.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article className="abtBlockColumn position-relative">
                <span className="icnWrap d-flex align-item-center mb-4">
                  <i className="icomoon-medal"></i>
                </span>
                <h4 className="h4 mb-6">Inspiring People to Shine</h4>
                <div className="row">
                  <div className="col-12 col-sm-5 col-lg-12 col-xl-5">
                    <div className="imgWrap mb-4 mb-sm-0 mb-lg-4 mb-xl-0">
                      <Image src="/images/img66.png" className="img-fluid" alt="image description" width={300} height={300} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-7 col-lg-12 col-xl-7">
                    <p>Everyday we strive to create the best possible experience for both our new customers and our carwash members. It’s not just part of our culture, it is our culture by listening to you and applying the principles.</p>
                    <ul className="pvList list-unstyled pl-0 mb-0">
                      <li>
                        <strong className="d-block mb-0 text-primary fwMedium">Our Purpose</strong>
                        <p>Create smiles & lifetime customers.</p>
                      </li>
                      <li>
                        <strong className="d-block mb-0 text-primary fwMedium">Our Vision</strong>
                        <p>To be the Service Industry Leader.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </article>
      <aside className="counterAsideBlock position-relative pt-6 pb-1 pt-md-9 pb-md-3 pt-lg-15 pb-lg-10 pt-xl-20 pb-xl-14" style={{ backgroundImage: "url('/images/bgPattern03.png')" }}>
        <div className="container">
          <ul className="list-unstyled cabCounterList d-flex flex-wrap justify-content-around mb-0 mx-auto mx-md-0">
            <li>
              <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">25</span>
                <span className="text-white subtitle">Years of <br />Experience</span>
              </h3>
            </li>
            <li>
              <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">38</span>K</span>
                <span className="text-white subtitle">Total Cars <br />Washed</span>
              </h3>
            </li>
            <li>
              <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount">17</span>
                <span className="text-white subtitle">Awards & <br />Recognitions</span>
              </h3>
            </li>
            <li>
              <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3"><span className="dataCount">14</span>K</span>
                <span className="text-white subtitle">Trusted <br />Clients</span>
              </h3>
            </li>
          </ul>
        </div>
      </aside>
      <section className="meetTheTeamSection pt-10 pt-md-12 pt-lg-18 pt-lgwd-22 pb-sm-3 pb-lg-6 pb-lgwd-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-12 text-center">
              <h2 className="fwSemi">
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">Power Behind Us</strong>
                <span className="d-block">Meet the Team Members</span>
              </h2>
              <p>
                We know the most integral part of our success is our team members. Our goals of delivering exceptional customer service are high.
              </p>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <article className="mccColumn mb-6 position-relative text-center mx-auto mx-sm-0">
              <div className="imgHolder position-relative">
                <Image src="/images/img67.jpg" className="img-fluid d-block w-100" alt="image description" width={300} height={300} />
                <div className="mcssHolder">
                  <ul className="mcssList list-unstyled rounded bg-white overflow-hidden p-0 m-0 d-flex">
                    <li>
                      <a href="#" className="mcssLink" title="Twitter"><i className="vssIcn fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Facebook"><i className="vssIcn fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Linkedin"><i className="vssIcn fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mcCaptionWrap pt-5 pb-4 position-relative">
                <h6 className="mccName mb-2">Cevin Peter</h6>
                <h6 className="mccDesig text-secondary mb-0 text-uppercase fwmMedium">Owner/Operator</h6>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <article className="mccColumn mb-6 position-relative text-center mx-auto mx-sm-0">
              <div className="imgHolder position-relative">
                <Image src="/images/img68.jpg" className="img-fluid d-block w-100" alt="image description" width={300} height={300} />
                <div className="mcssHolder">
                  <ul className="mcssList list-unstyled rounded bg-white overflow-hidden p-0 m-0 d-flex">
                    <li>
                      <a href="#" className="mcssLink" title="Twitter"><i className="vssIcn fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Facebook"><i className="vssIcn fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Linkedin"><i className="vssIcn fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mcCaptionWrap pt-5 pb-4 position-relative">
                <h6 className="mccName mb-2">Carleno Emo</h6>
                <h6 className="mccDesig text-secondary mb-0 text-uppercase fwmMedium">General Manager</h6>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <article className="mccColumn mb-6 position-relative text-center mx-auto mx-sm-0">
              <div className="imgHolder position-relative">
                <Image src="/images/img69.jpg" className="img-fluid d-block w-100" alt="image description" width={300} height={300} />
                <div className="mcssHolder">
                  <ul className="mcssList list-unstyled rounded bg-white overflow-hidden p-0 m-0 d-flex">
                    <li>
                      <a href="#" className="mcssLink" title="Twitter"><i className="vssIcn fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Facebook"><i className="vssIcn fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Linkedin"><i className="vssIcn fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mcCaptionWrap pt-5 pb-4 position-relative">
                <h6 className="mccName mb-2">Robert Peterson</h6>
                <h6 className="mccDesig text-secondary mb-0 text-uppercase fwmMedium">Wash Technician</h6>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <article className="mccColumn mb-6 position-relative text-center mx-auto mx-sm-0">
              <div className="imgHolder position-relative">
                <Image src="/images/img70.jpg" className="img-fluid d-block w-100" alt="image description" width={300} height={300} />
                <div className="mcssHolder">
                  <ul className="mcssList list-unstyled rounded bg-white overflow-hidden p-0 m-0 d-flex">
                    <li>
                      <a href="#" className="mcssLink" title="Twitter"><i className="vssIcn fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Facebook"><i className="vssIcn fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a href="#" className="mcssLink" title="Linkedin"><i className="vssIcn fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mcCaptionWrap pt-5 pb-4 position-relative">
                <h6 className="mccName mb-2">Donald Trump</h6>
                <h6 className="mccDesig text-secondary mb-0 text-uppercase fwmMedium">Service Engineer</h6>
              </div>
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
    <Footer></Footer>

    </div>
  )
}

export default About
