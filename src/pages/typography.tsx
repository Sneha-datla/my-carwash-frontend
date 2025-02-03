import React from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Footer from '@/components/Footer';
function typography() {
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
                                                                  <h1 className="text-white font-weight-bold mb-4 h2Large">Typography</h1>
                                                                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                  <li><a href="#">Home</a></li>
											<li><a href="#">Pages</a></li>
											<li>Typography</li>
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
      <div className="container">
        {/* Heading Component */}
        <div className="headingComponent">
          <h2 className="h2 mb-3">Headings</h2>
          <p>
            A faceting effect livens up and interrupts the cubism that sets the
            morphology of the West system apart from the cliches of modern
            design. Characterised by its suitability for use in a wide range of
            different contemporary and traditional arrangements, West also
            features glints of pure creativity, such as the chaise longue,
            available in pentagonal or hexagonal form and the elements that
            stand out for their striking backrests in saddle hide.
          </p>
          {/* Elements */}
          <div className="elements mt-8">
            <h1 className="h1">H1. Heading</h1>
            <h2 className="h2">H2. Heading</h2>
            <h3 className="h3">H3. Heading</h3>
            <h4 className="h4">H4. Heading</h4>
            <h5 className="h5">H5. Heading</h5>
            <h6 className="h6">H6. Heading</h6>
          </div>
        </div>
        <hr className="my-10 my-md-15 border-0" />

        {/* Column Component */}
        <div className="columnComponent">
          <h2 className="h2 mb-4">Text Columns</h2>
          <h4 className="h4 mb-3">Full width text (4 columns)</h4>
          <p>
            True elements of surprise, they break up the compositional layout,
            creating a stylistic point of interest, and interrupting the
            continuous effect of the fabric covering, visually lightening the
            volume at the rear. A solution designed to optimise both look and
            form, created with the know-how about design and the savoir-faire
            associated with fine tailoring that have always distinguished the
            Minotti brand.
          </p>
          <hr className="my-10 border-0" />

          <h4 className="h4 mb-2">2 columns</h4>
          <div className="row">
            <div className="col-12 col-sm-6">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest, and interrupting
                the continuous effect of the fabric covering, visually
                lightening the volume at the rear.
              </p>
            </div>
            <div className="col-12 col-sm-6">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest, and interrupting
                the continuous effect of the fabric covering, visually
                lightening the volume at the rear.
              </p>
            </div>
          </div>
          <hr className="my-10 border-0" />

          <h4 className="h4 mb-2">3 columns</h4>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Visually lightening the volume at the rear. A solution designed
                to optimise both look and form, created with the know-how about
                design.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Visually lightening the volume at the rear. A solution designed
                to optimise both look and form, created with the know-how about
                design.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p>
                Visually lightening the volume at the rear. A solution designed
                to optimise both look and form, created with the know-how about
                design.
              </p>
            </div>
          </div>
          <hr className="my-10 border-0" />

          <h4 className="h4 mb-2">4 columns</h4>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>
                True elements of surprise, they break up the compositional
                layout, creating a stylistic point of interest.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-10 my-md-15 border-0" />

{/* Text Component */}
<div className="textComponent">
  <h2 className="h2 mb-4">Text Elements</h2>
  <p className="mb-6">
    <span className="text-secondary">
      Mobile app development services catering to other businesses
    </span>{' '}
    can easily be tracked on various well-known B2B rating and review platforms where,
    based upon client satisfaction and several other parameters, the development companies
    and their credentials are explained in an objective manner. For choosing the development
    company of your preference, often the location plays a hugely important role. The biggest
    impact created by the{' '}
    <span className="text-primary">difference in location is the uneasiness of working</span>{' '}
    with people in different time zones. Apart from this, some regions also offer more
    cost-effective development solutions.
  </p>

  <p className="mb-6">
    True elements of surprise,{' '}
    <span className="bg-primary text-white">
      they break up the compositional
    </span>{' '}
    layout, creating a stylistic point of interest, and interrupting the continuous effect of
    the fabric covering, visually lightening the volume at the rear. A solution designed to
    optimize both look and form,{' '}
    <span className="bg-secondary text-white">
      created with the know-how about design
    </span>{' '}
    and the savoir-faire associated with fine tailoring that have always distinguished the
    Minotti brand.
  </p>

  <p className="mb-6">
    Every element of the system is made with exquisite goose down padding to ensure maximum
    comfort, features cushions finished with a piping that defines their profile and a
    distinctive aluminium strip, slightly rounded at the edges which skims the floor, in a
    brand new polished Brandy colour finish.
  </p>
</div>

<hr className="my-10 my-md-15 border-0" />

{/* Dropcaps Component */}
<div className="dropcapsComponent">
  <h2 className="h2 mb-5">Dropcaps</h2>
  <div className="row">
    <div className="col-12 col-md-6">
      <p>
        <span className="dropCap rounded-lg text-white bg-secondary d-flex justify-content-center align-items-center mr-2 mt-1 font-weight-bold float-left">
          B
        </span>
        Bonocle ipsum dolor sit amet elegant bulletin Melbourne sharp, ryokan conversation
        business class essential Scandinavian Zürich. Bulletin sastha sunspel discerning
        classic Shinkansen Washlet Singapore Tsutaya finest way on artisanal. Destination
        sleepy exquisite, hand-crafted business.
      </p>
    </div>
    <div className="col-12 col-md-6">
      <p>
        <span className="dropCap rounded-sm text-white bg-primary d-flex justify-content-center align-items-center mr-2 mt-1 font-weight-bold float-left">
          B
        </span>
        Bonocle ipsum dolor sit amet elegant bulletin Melbourne sharp, ryokan conversation
        business class essential Scandinavian Zürich. Bulletin sastha sunspel discerning
        classic Shinkansen Washlet Singapore Tsutaya finest way on artisanal. Destination
        sleepy exquisite, hand-crafted business.
      </p>
    </div>
  </div>
</div>


        {/* Additional components (e.g., Dropcaps, Blockquote) */}
        {/* Add other components as per your original structure */}
      </div>
    </div>
     {/* Blockquote Component */}
     <div className="blockquoteComponent">
        <h2 className="h2 mb-5">Blockquote</h2>
        <blockquote className="feedbackSlide fontAlter position-relative pl-10 pl-xl-12">
          <q className="d-block position-relative mb-4 font-italic">
            Carwash is a feature-rich design theme that made launching your website inventions off
            the ground dead simple way of process.
          </q>
          <cite className="d-block">
            <strong className="d-block font-weight-normal text-capitalize mb-1">
              - Nichalo Testla
            </strong>
          </cite>
        </blockquote>
      </div>

      <hr className="my-12 my-md-17 border-0" />

      {/* Listing Component */}
      <div className="lsitingComponent">
        <h2 className="h2 mb-5">Listing</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul className="list-unstyled pl-0 mb-0 listDefaultStyles numberList mb-7">
              <li>Pre-soak penetrating</li>
              <li>Spa Foam Cleaner</li>
              <li>Heated Super Dry</li>
              <li>Heavy-duty Cleaning</li>
              <li>Rain-X Treatment</li>
              <li>Tire Shine and Wheel</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul className="list-unstyled pl-0 mb-0 pcFeaturesList pcfAlt mb-7">
              <li>Pre-soak penetrating</li>
              <li>Spa Foam Cleaner</li>
              <li>Heated Super Dry</li>
              <li>Heavy-duty Cleaning</li>
              <li>Rain-X Treatment</li>
              <li>Tire Shine and Wheel</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul className="list-unstyled pl-0 mb-0 servicesList servicesListVII mb-7">
              <li>Brake Service Repair</li>
              <li>Door panels / seats wiped</li>
              <li>Rubber mats washed</li>
              <li>Computerized Diagnostics</li>
              <li>Undercarriage rust inhibitor</li>
              <li>Rim cleaner x 2</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul className="list-unstyled pl-0 mb-0 servicesList serAlt">
              <li>Brake Service Repair</li>
              <li>Door panels / seats wiped</li>
              <li>Rubber mats washed</li>
              <li>Computerized Diagnostics</li>
              <li>Undercarriage rust inhibitor</li>
              <li>Rim cleaner x 2</li>
            </ul>
          </div>
        </div>
      </div>
   <Footer></Footer>
      
    </div>
  )
}

export default typography
