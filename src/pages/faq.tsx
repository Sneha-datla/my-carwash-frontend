import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string; // Assumes this field contains HTML content
}
const faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:1337/api/faqs");
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        setFaqs(data.data); // Update state with fetched FAQs
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);
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
                                                              <h1 className="text-white font-weight-bold mb-4 h2Large">FAQ</h1>
                                                              <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                              <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>FAQ</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                        <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                      <Image src="/images/img24.jpg" alt="Background" layout="fill" objectFit="cover" />
                                    </span> 				</article>
                        
                                  </div>
       <article className="faqSectionBlock py-10 py-md-15 pt-lg-14 pb-lg-13 pt-xl-22 pb-xl-19">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
            <header className="headingHead fzMedium mb-8 mb-md-12 text-center">
              <h2>
                <strong className="d-block text-uppercase hTitle fwMedium mb-4">Find Answers Below</strong>
                <span className="d-block">Frequently Asked Questions</span>
              </h2>
              <p>
                If you cannot find the answer below, please use the contact form or send us an email to{' '}
                <a href="mailto:mail@domain.com">mail@domain.com</a>
              </p>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-6">
            <div className="mr-md-n3 mr-lg-n5">
              <aside className="dscSidebar pt-1 ml-xl-n5">
                <nav className="widget mb-6 mb-lg-10 widgetDepartsNav widgetBgLight py-5 px-6 rounded">
                  <h5 className="h5 mb-4">FAQ Category</h5>
                  <ul className="list-unstyled pl-0 mx-n2 mb-0 mb-3 fontAlter">
                    <li><a href="javascript:void(0);">General Question</a></li>
                    <li><a href="javascript:void(0);">Car Washing</a></li>
                    <li className="active"><a href="javascript:void(0);">Auto Detailing</a></li>
                    <li><a href="javascript:void(0);">Unlimited Wash Club</a></li>
                    <li><a href="javascript:void(0);">Auto Maintainance</a></li>
                  </ul>
                </nav>
                <div className="widget mb-6 mb-lg-10 widgetHelp bg-primary rounded-lg pt-8 px-6 pb-8 position-relative text-center text-white">
                  <div className="captionHolder">
                    <i className="icn icomoon-information1 text-secondary d-block mb-3"><span className="sr-only">icon</span></i>
                    <h3 className="h3 h3Large text-white mb-2">Need any help?</h3>
                    <p>Here you can get your perfect answer for your problem.</p>
                    <a href="contact.html" className="btn btnThemeAlt text-capitalize position-relative border-0 p-0 btnMinMedium" data-hover="Contact now">
                      <span className="d-block btnText">Contact now</span>
                    </a>
                    <i className="whWatermarkIcn icomoon-helpc position-absolute"><span className="sr-only">icon</span></i>
                  </div>
                  <span className="bgCover bgImg w-100 h-100 position-absolute" style={{ backgroundImage: 'url(images/bgPattern02.png)' }}></span>
                </div>
              </aside>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="pl-md-5 pl-xl-15 fontAlter">
              <div className="accordion faqAccordion mb-8 mb-md-12 mb-lg-16 mb-xl-20" id="ctdepartsAccordion">
                {/* Accordion Item 1 */}
                {faqs.map((faq, index) => (
            <div className="ctaccRow mb-4" key={faq.id}>
              <div className="ctaccOpener">
                <a
                  className="fontAlter"
                  href={`#ctr${index}`}
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls={`ctr${index}`}
                >
                  {faq.question}
                </a>
              </div>
              <div
                className="collapse ctaccSlide"
                id={`ctr${index}`}
                data-parent="#ctdepartsAccordion"
              >
                <div
                  className="overflow-hidden px-5 pb-1"
                  dangerouslySetInnerHTML={{
                    __html: faq.answer,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      
      
     
                {/* Additional Accordion Items */}
                <div className="askYourQuesWrap">
      <header className="mb-7">
        <h4 className="h4 mb-1 fwMedium">Ask your Question</h4>
        <p>If you cannot find the answer below, please message us</p>
      </header>
      <form action="#" className="contactForm">
        <div className="row mx-n2">
          <div className="col-12 col-sm-6 px-2">
            <div className="form-group">
              <label className="colFormLabel fontAlter">
                Your Name <span className="text-danger fsSmall">*</span>
              </label>
              <input type="text" className="form-control d-block w-100" />
            </div>
          </div>
          <div className="col-12 col-sm-6 px-2">
            <div className="form-group">
              <label className="colFormLabel fontAlter">
                Email <span className="text-danger fsSmall">*</span>
              </label>
              <input type="email" className="form-control d-block w-100" />
            </div>
          </div>
          <div className="col-12 px-2">
            <div className="form-group">
              <label className="colFormLabel fontAlter">
                Subject <span className="text-danger fsSmall">*</span>
              </label>
              <input type="text" className="form-control d-block w-100" />
            </div>
          </div>
          <div className="col-12 px-2">
            <div className="form-group">
              <label className="colFormLabel fontAlter">Your Message:</label>
              <textarea className="form-control w-100 d-block"></textarea>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btnThemeAlt d-flex fwSemi text-capitalize position-relative border-0 p-0 mt-2 btnWidthSmall"
          data-hover="Send Message"
        >
          <span className="d-block btnText">Send Message</span>
        </button>
      </form>
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

export default faq
