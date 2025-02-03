import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";import Footer from '@/components/Footer';
interface Review {
  id: number;
  name: string;
  position: string;
  content: string;
  image: {
    url: string;
  };
}
const testimonals: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/testimonals?populate=*');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        const data = await response.json();

        // Transform the API data into the expected structure
        const transformedReviews: Review[] = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          position: item.position,
          content: item.content,
          image: {
            url: item.image[0]?.url || '', // Handle case where image may not exist
          },
        }));

        setReviews(transformedReviews);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }  return (
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
                                                                  <h1 className="text-white font-weight-bold mb-4 h2Large">Testimonials</h1>
                                                                  <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                  <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>Testimonials</li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                            <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                          <Image src="/images/img90.png" alt="Background" layout="fill" objectFit="cover" />
                                        </span> 				</article>
                            
                                      </div>
<article className="testimonialsBlock overlay position-relative pt-10 pb-5 pb-md-7 pt-lg-14 pb-lg-12 pt-xl-21 pb-xl-19">
      <div className="container">
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
                  
                    <cite className="d-block pl-12 pl-sm-0">
                    <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                        <img
                          src="/images/img09.png"
                          className="rounded-circle"
                          alt="Peek Thakul"
                        />
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
      <span
        className="bgCover imgBg w-100 h-100 position-absolute"
        style={{ backgroundImage: "url(images/bgPattern07.jpg)" }}
      ></span>
    </article>
    <section className="customerReviewsBlock py-7 py-sm-9 py-md-13 py-lg-16 pt-xl-18 pb-xl-20">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <h2 className="text-center mb-6 mb-md-10 mb-lg-14">
              <strong className="d-block text-uppercase hTitle fwMedium mb-4">Customer Review</strong>
              <span className="d-block">What people think about our services</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {reviews.map((review) => (
            <div key={review.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="clientFeedback bg-white shadow rounded mb-8 mb-md-10 mb-lg-14 px-3 py-5 px-sm-5 p-xl-8">
                <blockquote className="clientQuoteii mb-0">
                  <div className="d-block mb-8" dangerouslySetInnerHTML={{ __html: review.content }}></div>
                  <div className="d-flex align-items-center">
                    <span className="cImgWrap rounded-circle flex-shrink-0 mr-2">
                      <img
                        src={`http://localhost:1337${review.image.url}`}
                        className="rounded-circle"
                        alt={`${review.name}'s review`}
                        loading="lazy"
                      />
                    </span>
                    <cite className="wrap d-block text-left">
                      <strong className="h5 mb-0 text-capitalize fwSemiBold">{review.name}</strong>
                      <strong className="d-block font-weight-normal">{review.position}</strong>
                    </cite>
                  </div>
                </blockquote>
              </article>
            </div>
          ))}
        </div>
        <div className="text-center mt-xl-n2">
          <button
            className="btn btnThemeAlt position-relative border-0 p-0 mx-auto"
            data-hover="Load More Reviews"
            onClick={() => alert('Load More functionality not implemented yet!')}
          >
            <span className="d-block btnText">Load More Reviews</span>
          </button>
        </div>
      </div>
    </section>
<Footer></Footer>
    </div>
  )
}

export default testimonals
