import React from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Footer from '@/components/Footer';

function Error() {
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
                                                            <h1 className="text-white font-weight-bold mb-4 h2Large">404 Error</h1>
                                                            <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                            <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>404 Error</li>
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
      {/* 404 Section */}
      <section className="pt-6 pb-8 pt-md-11 pb-md-15 pt-xl-18 pb-xl-22">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-lg-6 col-xlwd-4 text-center">
            <strong className="header-404 fontAlter d-flex align-items-center justify-content-center mb-2">4 <span className="icn icomoon-like text-secondary mx-5"></span> 4</strong>

              <h2>Ohh! Page Not Found</h2>
              <p>It looks like nothing was found at this location. Click the button below to return home.</p>
              <a href="/" className="btnThemeAlt btn btnNoOver mt-5 btnMinXLarge">
                Back to Home <i className="fas fa-arrow-right btnIcn ml-2" aria-hidden="true"><span className="sr-only">icon</span></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Error
