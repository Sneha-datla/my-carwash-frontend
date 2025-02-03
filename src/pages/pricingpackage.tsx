import React from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Footer from '@/components/Footer';
function pricingpackage() {
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
                                                                  <h1 className="text-white font-weight-bold mb-4 h2Large">Pricing Plans</h1>
                                                                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                  <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>Pricing Plans</li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                          <Image src="/images/img89.jpg" alt="Background" layout="fill" objectFit="cover" />
                                        </span> 				</article>
                            
                                      </div>
                                      <section className="plansBlock py-7 py-md-10 pt-lg-13 pt-xl-18 pb-xl-16">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-12 text-center">
              <h2>
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">
                  Pricing Plans
                </strong>
                <span className="d-block">Choose your Package</span>
              </h2>
              <p>
                Unlimited Washes is for you! Wash whenever you want and enjoy
                the ease of auto monthly billing and you can cancel any time.
              </p>
            </header>
          </div>
        </div>
        <form action="#" className="sycForm mb-8 mb-md-12">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
              <input
                type="radio"
                id="ssOption1"
                className="fakeInput"
                name="select-service"
                value="option1"
              />
              <label htmlFor="ssOption1" className="fake_label mb-0">
                <span className="icnWrap d-flex justify-content-center mb-2">
                  <i className="icomoon-icn-syc01"></i>
                </span>
                Mid-Size Car
              </label>
            </div>
            <div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
              <input
                type="radio"
                id="ssOption2"
                className="fakeInput"
                name="select-service"
                value="option2"
                defaultChecked
              />
              <label htmlFor="ssOption2" className="fake_label mb-0">
                <span className="icnWrap d-flex justify-content-center mb-2">
                  <i className="icomoon-icn-syc02"></i>
                </span>
                Small Size Car
              </label>
            </div>
            <div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
              <input
                type="radio"
                id="ssOption3"
                className="fakeInput"
                name="select-service"
                value="option3"
              />
              <label htmlFor="ssOption3" className="fake_label mb-0">
                <span className="icnWrap d-flex justify-content-center mb-2">
                  <i className="icomoon-icn-syc03"></i>
                </span>
                Full-Size Car
              </label>
            </div>
            <div className="fakeRadioInput position-relative mb-0 flex-shrink-0">
              <input
                type="radio"
                id="ssOption4"
                className="fakeInput"
                name="select-service"
                value="option4"
              />
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
    <section
      className="processBlock bg-secondary text-center pt-10 py-md-15"
      style={{ backgroundImage: 'url(images/bgPattern03.png)' }}
    >
      <div className="container">
        <div className="row pcColumnsWrap pcColumnsWrapVII mx-n10 mx-xl-n25">
          {/* First Column */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">Make an appointment &amp; Bring your car</h3>
            </article>
          </div>
          {/* Second Column */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">We give our 5 star rating Services</h3>
            </article>
          </div>
          {/* Third Column */}
          <div className="col-12 col-md-4 col px-10 px-xl-25">
            <article className="processColumn mb-20 mb-md-0 position-relative">
              <span className="pcCountSpan position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center font-weight-light mb-5"></span>
              <h3 className="fwMedium h3Medium mb-0 text-white">Pay Online & Get your car</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
    <aside className="seeBenefitsAside seeBenefitsAsideVII bg-primary pb-5 pt-10 py-md-12 py-lg-16 pt-xl-20">
      <div className="container">
        <h4 className="h4 mb-8 mb-md-12 text-center">
          <strong className="d-block text-uppercase hTitle fwMedium mb-3">See Benefits</strong>
          <span className="d-block text-white">Each Visit Includes Special Benefits</span>
        </h4>
        <ul className="list-unstyled fabFeaturesList mb-0 d-flex flex-wrap justify-content-center position-relative">
          {/* Feature 1 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-vacuum-cleaner"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Complete Interior Vacuum</h6>
            </div>
          </li>
          {/* Feature 2 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-seat"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Bumper Gentle Wash</h6>
            </div>
          </li>
          {/* Feature 3 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-repair"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Four Wheel Aligning</h6>
            </div>
          </li>
          {/* Feature 4 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-mat"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Soft Towel Drying</h6>
            </div>
          </li>
          {/* Feature 5 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-car-1"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Surface Drying Machines</h6>
            </div>
          </li>
          {/* Feature 6 */}
          <li>
            <div className="featureColumn text-center px-1 px-sm-3 px-md-5 px-xl-7 mb-6">
              <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                <i className="icomoon-tire"></i>
              </span>
              <h6 className="h6 mb-0 position-relative text-white">Wheels Air Checking</h6>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <section className="faqSection pb-5 pt-10 pt-md-15 pb-md-9 pt-xl-20">
      <div className="container">
        <header className="headingHead fzMedium mb-12 text-center">
          <h2>
            <strong className="d-block text-uppercase hTitle fwMedium mb-4">
              Find Answers Below
            </strong>
            <span className="d-block">Frequently Asked Questions</span>
          </h2>
          <p>
            If your question isn’t listed below, please contact our Customer Service on 1-800-123-4567.
          </p>
        </header>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="accordion faqAccordion mb-8 mb-lg-12" id="ctdepartsAccordion">
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr1"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr1"
                  >
                    How long does a car wash take?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr1" data-parent="#ctdepartsAccordion">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      One of the most common additions people make to their cars in order to keep the
                      heat out is a windshield visor...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr2"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr2"
                  >
                    What size vehicles can fit through the car wash tunnel?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr2" data-parent="#ctdepartsAccordion">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr2"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr2"
                  >
                  Do I have to make an appointment for a car wash?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr2" data-parent="#ctdepartsAccordion">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr2"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr2"
                  >
                  How often should I wax my vehicle?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr2" data-parent="#ctdepartsAccordion">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr2"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr2"
                  >
Why is my car still wet after the dry cycle?                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr2" data-parent="#ctdepartsAccordion">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              {/* Add more FAQ items here in a similar structure */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion faqAccordion mb-8 mb-lg-12" id="ctdepartsAccordion01">
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr01"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr01"
                  >
                    Do you use brushes? Are you touchless?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr01" data-parent="#ctdepartsAccordion01">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      One of the most common additions people make to their cars in order to keep the
                      heat out is a windshield visor...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr02"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr02"
                  >
                    My car is still in the auto pound. Do I have to request a hearing?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr02" data-parent="#ctdepartsAccordion01">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr02"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr02"
                  >
I have a bug shield or bike rack, etc. Is it safe?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr02" data-parent="#ctdepartsAccordion01">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr02"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr02"
                  >
How often can I wash my vehicle?                 
 </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr02" data-parent="#ctdepartsAccordion01">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              <div className="ctaccRow mb-4">
                <div className="ctaccOpener">
                  <a
                    className="fontAlter"
                    href="#ctr02"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="ctr02"
                  >
How do I pay for my unlimited wash club plan?
                  </a>
                </div>
                <div className="collapse ctaccSlide" id="ctr02" data-parent="#ctdepartsAccordion01">
                  <div className="overflow-hidden px-5 pb-1">
                    <p>
                      Fast Lane Shinkansen global hand-crafted premium...
                    </p>
                  </div>
                </div>
              </div>
              {/* Add more FAQ items here in a similar structure */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside className="getDiscountAside text-center pb-10 pb-md-15 pb-xl-20">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 px-xl-8 px-xlwd-12">
            <span className="icnWrap d-flex justify-content-center mb-5">
              <i className="icomoon-credit-card"></i>
            </span>
            <h4 className="h4 mb-6">
              Join our car wash club and <span className="text-secondary font-italic">Get 20% Discount</span> & Unlimited Wash Scheme!
            </h4>
            <a
              href="javascript:void(0);"
              className="btn btnThemeAlt position-relative border-0 p-0 mx-auto"
              data-hover="Join Unlimited Wash Club"
            >
              <span className="d-block btnText">Join Unlimited Wash Club</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  <Footer></Footer>
    </div>
  )
}

export default pricingpackage
