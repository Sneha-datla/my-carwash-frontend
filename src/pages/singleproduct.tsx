import Footer from '@/components/Footer'
import Headernav from '@/components/Headernav'
import React from 'react'
import Head from 'next/head'; // Correct import for Head
import Link from 'next/link';
import Image from 'next/image';

function singleproduct() {
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
											<li>Lister Wash Liqids 5l</li>
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
  <div className="row">
    <div className="col-12 col-lg-4 col-lgwd-3 mb-6">
      <div className="mr-md-n3 mr-lg-n5">
        <aside className="sidebar px-sm-10 px-md-20 px-lg-0">
          {/* widgetSearch */}
          <div className="widgetSearch mb-6 mb-lg-10">
            <form action="#" className="searchForm">
              <div className="inputWrap">
                <input type="text" className="form-control w-100" placeholder="Search Here…" />
                <button type="submit" className="btnSearch">
                  <i className="icn lnr lnr-magnifier"></i>
                </button>
              </div>
            </form>
          </div>
          
          {/* categoryListWidget */}
          <div className="categoryListWidget mb-6 mb-lg-10">
            <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Category</h5>
            <ul className="list-unstyled wCatList pl-0 fontAlter">
              <li>
                <a href="javascript:void(0);">All Products <span className="catCount">(16)</span></a>
              </li>
              <li>
                <a href="javascript:void(0);">Auto Parts <span className="catCount">(5)</span></a>
              </li>
              <li>
                <a href="javascript:void(0);">Car Wash <span className="catCount">(3)</span></a>
              </li>
              <li>
                <a href="javascript:void(0);">Equipements <span className="catCount">(2)</span></a>
              </li>
              <li>
                <a href="javascript:void(0);">Wash Products <span className="catCount">(4)</span></a>
              </li>
              <li>
                <a href="javascript:void(0);">Others <span className="catCount">(1)</span></a>
              </li>
            </ul>
          </div>
          
          {/* priceFilterWidget */}
          <div className="priceFilterWidget mb-6 mb-lg-10">
            <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Pricing Filter</h5>
            <div id="slider-range"></div>
            <input type="hidden" id="amount1" name="amount1" />
            <input type="hidden" id="amount2" name="amount2" />
            <div className="getResultsWrap d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn btnTheme btn-sm text-capitalize position-relative border-0 p-0"
                data-hover="Filter"
              >
                <span className="d-block btnText">Filter</span>
              </button>
              <p id="amount" className="mb-0 fwSemiBold text-uppercase"></p>
            </div>
          </div>
          
          {/* fpListWidget */}
          <div className="fpListWidget mb-6 mb-lg-10">
            <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Featured Products</h5>
            <ul className="list-unstyled fpList pl-0 mb-0">
              <li>
                <div className="alignleft imgWrap text-center">
                  <a href="singleProduct.html">
                    <img src="images/img55.jpg" className="img-fluid" alt="image description" />
                  </a>
                </div>
                <div className="descrWrap pt-1">
                  <h4 className="fwMedium mb-2">
                    <a href="singleProduct.html">Twin Exhaster Pipe</a>
                  </h4>
                  <h4 className="prPrice fwMedium">£9.99</h4>
                </div>
              </li>
              <li>
                <div className="alignleft imgWrap text-center">
                  <a href="singleProduct.html">
                    <img src="images/img56.jpg" className="img-fluid" alt="image description" />
                  </a>
                </div>
                <div className="descrWrap pt-1">
                  <h4 className="fwMedium mb-2">
                    <a href="singleProduct.html">Mister wash Liquids 5l</a>
                  </h4>
                  <h4 className="prPrice fwMedium">£14.99</h4>
                </div>
              </li>
              <li>
                <div className="alignleft imgWrap text-center">
                  <a href="singleProduct.html">
                    <img src="images/img57.jpg" className="img-fluid" alt="image description" />
                  </a>
                </div>
                <div className="descrWrap pt-1">
                  <h4 className="fwMedium mb-2">
                    <a href="singleProduct.html">Car Break System</a>
                  </h4>
                  <h4 className="prPrice fwMedium">£19.99</h4>
                </div>
              </li>
            </ul>
          </div>
          
          {/* widgetTags */}
          <div className="widgetTags mb-6 mb-lg-10">
            <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Tags</h5>
            <ul className="list-unstyled pl-0 d-flex flex-wrap fontAlter">
              <li>
                <a href="javascript:void(0);">Autocare</a>
              </li>
              <li className="current">
                <a href="javascript:void(0);">Washing</a>
              </li>
              <li>
                <a href="javascript:void(0);">Maintenance</a>
              </li>
              <li>
                <a href="javascript:void(0);">Tires</a>
              </li>
              <li>
                <a href="javascript:void(0);">Detailing</a>
              </li>
              <li>
                <a href="javascript:void(0);">Shine</a>
              </li>
              <li>
                <a href="javascript:void(0);">Cleaning</a>
              </li>
              <li>
                <a href="javascript:void(0);">Machine Wash</a>
              </li>
              <li>
                <a href="javascript:void(0);">Tips</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
    <div className="col-12 col-lg-8 col-lgwd-9">
      <div className="pl-md-5 pl-xl-15 fontAlter">
        <div className="row mb-8 mb-xl-12 singleProductWrap">
          <div className="col-12 col-lg-6">
            <div className="imageWrap mb-5">
              <img src="images/img61.jpg" className="img-fluid w-100" alt="image description" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="sdbWDescription fontBase">
              <h5 className="fwMedium mb-0">Lister Wash Liquids 5l</h5>
              <div className="d-flex align-items-center mb-1">
                <ul className="list-unstyled ratingList d-flex mb-0 mr-2">
                  <li className="active"><i className="fas fa-star"></i></li>
                  <li className="active"><i className="fas fa-star"></i></li>
                  <li className="active"><i className="fas fa-star"></i></li>
                  <li className="active"><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <span className="fsSubBody">(5 Customer reviews)</span>
              </div>
              <h6 className="fwMedium mb-3">£14.99</h6>
              <p className="mb-2">Air plant keffiyeh tilde umami PBR&B taxidermy year next level...</p>
              <span className="d-block text-primary txtStock fontAlter fwmMedium">In stock</span>

              <form action="#" className="cartForm mt-4 mb-6">
                <div className="form-row mx-0">
                  <div className="form-group mb-2 mb-sm-0">
                    <div className="quantity position-relative">
                      <input type="number" min="1" value="1" />
                    </div>
                  </div>
                  <button type="submit" className="mb-2 mb-sm-0 btn btnThemeAlt text-uppercase position-relative border-0 p-0" data-hover="Add to Cart">
                    <span className="d-block btnText">Add to Cart</span>
                  </button>
                </div>
              </form>

              <dl className="shpDefinaition text-capitalize">
                <dt className="fwNormal">Category: </dt>
                <dd>Wash Products, Car Wash</dd>
                <dt className="fwNormal">Tags: </dt>
                <dd>Wash, Liquids</dd>
              </dl>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs dcsTabset fontAlter" id="dcsTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
          </li>
        </ul>

        <div className="tab-content dcsTabContent mb-7 mb-xl-12" id="dcsTabContent">
          <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
            <div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
              <p>To help customers block out even more of the sun, consider offering window-tinting services...</p>
            </div>
          </div>
          <div className="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
            <div className="overflow-hidden px-3 px-md-6 pt-5 pb-1">
              <h6 className="h6 fwMedium mb-6">2 Reviews for Product</h6>
              <ul className="list-unstyled reviewsList">
                <li>
                  <div className="alignleft text-center">
                    <span className="profiler rounded d-block mx-auto">
                      <img className="rounded-circle d-block w-100" src="images/img62.png" alt="image description" />
                    </span>
                  </div>
                  <div className="descrWrap overflow-hidden">
                    <div className="d-flex justify-content-between align-items-start">
                      <h3 className="text-capitalize mb-1">Brandon Kelley</h3>
                      <ul className="list-unstyled ratingList d-flex mb-0">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                    </div>
                    <time dateTime="2011-01-12" className="time d-block mb-3">March 03, 2020</time>
                    <p>Thomas Edison may have been behind the invention of the electric light bulb...</p>
                  </div>
                </li>
                <li>
                  <div className="alignleft text-center">
                    <span className="profiler rounded d-block mx-auto">
                      <img className="rounded-circle d-block w-100" src="images/img63.png" alt="image description" />
                    </span>
                  </div>
                  <div className="descrWrap overflow-hidden">
                    <div className="d-flex justify-content-between align-items-start">
                      <h3 className="text-capitalize mb-1">Beter Cobus</h3>
                      <ul className="list-unstyled ratingList d-flex mb-0">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                    </div>
                    <time dateTime="2011-01-12" className="time d-block mb-3">March 04, 2020</time>
                    <p>Thomas Edison may have been behind the invention of the electric...</p>
                  </div>
                </li>
              </ul>

              <form action="#" className="reviewSubmissionForm pb-3">
                <h5 className="h5 fwMedium mb-2">Add a Review</h5>
                <p className="mb-6">Your email address will not be published. Required fields are marked <em className="req">*</em></p>
                <div className="form-group row">
                  <label className="col-sm-3 col-xl-2 col-form-label">Your Ratings <em className="req">*</em></label>
                  <div className="col-sm-9 col-xl-10">
                    <ul className="list-unstyled ratingList d-flex mb-0">
                      <li><a href="javascript:void(0);"><i className="fas fa-star"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fas fa-star"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fas fa-star"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fas fa-star"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fas fa-star"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="review" className="col-sm-3 col-xl-2 col-form-label">Your Review <em className="req">*</em></label>
                  <div className="col-sm-9 col-xl-10">
                    <textarea rows={5} className="form-control" id="review"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-xl-2 col-form-label">Name <em className="req">*</em></label>
                  <div className="col-sm-9 col-xl-10">
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-3 col-xl-2 col-form-label">Email <em className="req">*</em></label>
                  <div className="col-sm-9 col-xl-10">
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-8 offset-sm-2">
                    <button type="submit" className="btn btnThemeAlt text-capitalize position-relative border-0 p-0" data-hover="Submit">
                      <span className="d-block btnText">Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    <h4 className="h4 mb-5">Related Product</h4>
      <div className="row">
        {/* First Product */}
        <div className="col-12 col-md-6 col-lgwd-4 d-flex">
          <article className="proItemCol w-100 text-center position-relative mb-6" data-featured-tag="Sale!">
            <div className="prodImgWrap mb-3 mb-md-5">
              <a href="singleProduct.html">
                <img src="images/img49.jpg" className="img-fluid" alt="image description" />
              </a>
            </div>
            <div className="prodDescWrap">
              <div className="prodCategory">Auto Parts</div>
              <h6 className="h6 mb-1 productName">
                <a href="singleProduct.html">Bumber of Brandix</a>
              </h6>
              <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="prodPrice mb-4">$59.49</div>
              <a href="cart.html" className="btn btnAddToCart btnNoOver">
                Add to Cart <span className="icn fas fa-chevron-right"></span>
              </a>
            </div>
          </article>
        </div>

        {/* Second Product */}
        <div className="col-12 col-md-6 col-lgwd-4 d-flex">
          <article className="proItemCol w-100 text-center position-relative mb-6">
            <div className="prodImgWrap mb-3 mb-md-5">
              <a href="singleProduct.html">
                <img src="images/img50.jpg" className="img-fluid" alt="image description" />
              </a>
            </div>
            <div className="prodDescWrap">
              <div className="prodCategory">Car Wash</div>
              <h6 className="h6 mb-1 productName">
                <a href="singleProduct.html">Spark Plug Kit-400</a>
              </h6>
              <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
              </ul>
              <div className="prodPrice mb-4">$119.00</div>
              <a href="cart.html" className="btn btnAddToCart btnNoOver">
                Add to Cart <span className="icn fas fa-chevron-right"></span>
              </a>
            </div>
          </article>
        </div>

        {/* Third Product */}
        <div className="col-12 col-md-6 col-lgwd-4 d-flex">
          <article className="proItemCol w-100 text-center position-relative mb-6">
            <div className="prodImgWrap mb-3 mb-md-5">
              <a href="singleProduct.html">
                <img src="images/img51.jpg" className="img-fluid" alt="image description" />
              </a>
            </div>
            <div className="prodDescWrap">
              <div className="prodCategory">Wash Products</div>
              <h6 className="h6 mb-1 productName">
                <a href="singleProduct.html">Spark Plug Kit-400</a>
              </h6>
              <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li className="active"><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="prodPrice mb-4">$148.49</div>
              <a href="cart.html" className="btn btnAddToCart btnNoOver">
                Add to Cart <span className="icn fas fa-chevron-right"></span>
              </a>
            </div>
          </article>
        </div>
      </div>
</div>
</div>
</div>
    </div>
</article>
      <Footer></Footer>
    </div>
  )
}

export default singleproduct
