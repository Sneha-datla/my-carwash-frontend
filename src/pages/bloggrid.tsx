import React from 'react'
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

function bloggrid() {
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
                              <h1 className="text-white font-weight-bold mb-4 h2Large">Blog Grid</h1>
                              <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                              <li><a href="home1.html">Home</a></li>
											<li><a href="blogClassic.html">Blog</a></li>
											<li>Blog Grid</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                          <Image src="/images/img95.jpg" alt="Background" layout="fill" objectFit="cover" />
                        </span>      </article>
                  </div>
                  <div className="blogListingSection py-10 py-md-14 py-lgwd-18 py-xl-22">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-4 col">
            <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="Auto Care">
              <div className="imgWrap overflow-hidden mb-5">
                <Image src="/images/img84.jpg" className="img-fluid w-100" alt="image description" layout="responsive" width={500} height={300} />
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2011-01-12">May 5, 2020</time>
                - by 
                <Link href="/blogSinglePost"className="text-lDark">developer
                </Link>
              </strong>
              <h5 className="h5">Preparing your Car for the Winter Holidays</h5>
              <Link href="/blogSinglePost" className="btnLink fwSemi">Read More
              </Link>
            </article>
          </div>

          {/* Blog Post 2 */}
          <div className="col-12 col-sm-6 col-lg-4 isoCol">
            <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="Carwashing">
              <div className="imgWrap overflow-hidden mb-5">
                <Image src="/images/img85.jpg" className="img-fluid w-100" alt="image description" layout="responsive" width={500} height={300} />
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2011-01-12">May 5, 2020</time>
                - by 
                <Link href="/blogSinglePost" className="text-lDark">developer
                </Link>
              </strong>
              <h5 className="h5">The Importance of Washing Under Vehicle surface</h5>
              <Link href="/blogSinglePost" className="btnLink fwSemi">Read More
              </Link>
            </article>
          </div>

          {/* Blog Post 3 */}
          <div className="col-12 col-sm-6 col-lg-4 isoCol">
            <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="News & Tips">
              <div className="imgHolder mb-5 position-relative">
                <div className="nrcImageSlider">
                  <div className="imgWrap">
                    <Image src="/images/img86.jpg" className="img-fluid w-100" alt="image description" layout="responsive" width={500} height={300} />
                  </div>
                 
                </div>
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2011-01-12">May 5, 2020</time>
                - by 
                <Link href="/blogSinglePost" className="text-lDark">developer
                </Link>
              </strong>
              <h5 className="h5">Tough Stains in Your Car’s Interior (what to do about them)</h5>
              <Link href="/blogSinglePost" className="btnLink fwSemi">Read More
              </Link>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 isoCol">
      {/* blockPostColumn */}
      <article 
        className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" 
        data-media-type-video 
        data-category="Auto Care"
      >
        <div className="imgWrap overflow-hidden mb-5">
          <Image 
            src="/images/img96.jpg" 
            className="img-fluid w-100" 
            alt="image description" 
            width={500} 
            height={300} 
            layout="responsive"
          />
          <a 
            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" 
            className="btnYouPlay d-flex align-items-center justify-content-center position-absolute lightbox" 
            data-fancybox="true"
          >
            <span className="sr-only">icon</span>
          </a>
        </div>
        <strong className="d-block fwmMedium title mb-2">
          <i className="far fa-calendar-alt">
            <span className="sr-only">icon</span>
          </i>
          <time dateTime="2011-01-12">May 5, 2020</time>
          {' - by '}
          <Link href="/blogSinglePost" className="text-lDark">developer
          </Link>
        </strong>
        <h5 className="h5">Winter Maintenance Tips to Avoid Engine Repairs</h5>
        <Link href="/blogSinglePost" className="btnLink fwSemi">Read More
        </Link>
      </article>
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col">
      {/* blockPostColumn */}
      <article 
        className="blockPostColumn position-relative fontAlter mb-6" 
        data-category="General"
      >
        <div className="imgWrap overflow-hidden mb-5">
          <Image 
            src="/images/img97.jpg" 
            className="img-fluid w-100" 
            alt="image description" 
            width={500} 
            height={300} 
            layout="responsive"
          />
        </div>
        <strong className="d-block fwmMedium title mb-2">
          <i className="far fa-calendar-alt">
            <span className="sr-only">icon</span>
          </i>
          <time dateTime="2011-01-12">May 5, 2020</time>
          {' - by '}
          <Link href="/blogSinglePost" className="text-lDark">developer
          </Link>
        </strong>
        <h5 className="h5">How to Clean, Detail and Wax your Car’s Exterior?</h5>
        <Link href="/blogSinglePost" className="btnLink fwSemi">Read More
        </Link>
      </article>
    </div>      
      <div className="col-12 col-sm-6 col-lg-4 isoCol">
        <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="News & Tips">
          <div className="imgWrap overflow-hidden mb-5">
            <Image src="/images/img98.jpg" className="img-fluid w-100" alt="image description" width={600} height={400} />
          </div>
          <strong className="d-block fwmMedium title mb-2">
            <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
            <time dateTime="2011-01-12">May 5, 2020</time> - by
            <Link href="blogSinglePost.html" className="text-lDark">developer</Link>
          </strong>
          <h5 className="h5">The 10 Best Car Review Generation Platforms</h5>
          <Link href="blogSinglePost.html" className="btnLink fwSemi">Read More</Link>
        </article>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 col">
      {/* blockPostColumn */}
      <article 
        className="blockPostColumn position-relative fontAlter mb-6" 
        data-category="General"
      >
        <div className="imgWrap overflow-hidden mb-5">
          <Image 
            src="/images/img99.jpg" 
            className="img-fluid w-100" 
            alt="image description" 
            width={500} 
            height={300} 
            layout="responsive"
          />
        </div>
        <strong className="d-block fwmMedium title mb-2">
          <i className="far fa-calendar-alt">
            <span className="sr-only">icon</span>
          </i>
          <time dateTime="2011-01-12">May 5, 2020</time>
          {' - by '}
          <Link href="/blogSinglePost"className="text-lDark">developer
          </Link>
        </strong>
        <h5 className="h5">As Contactless Gains, Will QR Codes Win Over?</h5>
        <Link href="/blogSinglePost"className="btnLink fwSemi">Read More
        </Link>
      </article>
    </div>
      <div className="col-12 col-sm-6 col-lg-4 isoCol">
        <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="Carwashing">
          <div className="imgWrap overflow-hidden mb-5">
            <Image src="/images/img101.jpg" className="img-fluid w-100" alt="image description" width={600} height={400} />
          </div>
          <strong className="d-block fwmMedium title mb-2">
            <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
            <time dateTime="2011-01-12">May 5, 2020</time> - by
            <Link href="blogSinglePost.html" className="text-lDark">developer</Link>
          </strong>
          <h5 className="h5">Clean Streak Ventures Acquires Bay Breeze Car Wash</h5>
          <Link href="blogSinglePost.html" className="btnLink fwSemi">Read More</Link>
        </article>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 isoCol">
        <article className="blockPostColumn position-relative fontAlter mb-8 mb-md-11 mb-xl-14" data-category="Maintenance">
          <div className="imgWrap overflow-hidden mb-5">
            <Image src="/images/img100.jpg" className="img-fluid w-100" alt="image description" width={600} height={400} />
          </div>
          <strong className="d-block fwmMedium title mb-2">
            <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
            <time dateTime="2011-01-12">May 5, 2020</time> - by
            <Link href="blogSinglePost.html" className="text-lDark">developer</Link>
          </strong>
          <h5 className="h5">Mister yuvan Car Wash Celebrates 25 Years</h5>
          <Link href="blogSinglePost.html" className="btnLink fwSemi">Read More</Link>
        </article>
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center mb-0 pb-0">
          <li className="page-item active" aria-current="page">
            <Link href="javascript:void(0);" className="page-link">1 <span className="sr-only">(current)</span></Link>
          </li>
          <li className="page-item">
            <Link href="javascript:void(0);" className="page-link">2</Link>
          </li>
          <li className="page-item">
            <Link href="javascript:void(0);" className="page-link">Next <i className="fas fa-chevron-right icn" aria-hidden="true"><span className="sr-only">icon</span></i></Link>
          </li>
        </ul>
      </nav>

        </div>
      </div>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default bloggrid
