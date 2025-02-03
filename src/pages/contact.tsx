import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // Correct import for Head
import Headernav from '@/components/Headernav';
import Footer from '@/components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';
interface FormData {
  name: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}
export default function contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phonenumber: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.phonenumber;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:1337/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }), // Wrap formData inside 'data'
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          subject: '',
          message: '',
        });
      } else {
        const errorMessage = await response.text();
        setError(`Failed to submit: ${errorMessage}`);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);
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
  <main>
      {/* introBlock */}
      <div className="introBlock innerPagesBanner">
        {/* ibsColumn */}
        <article className="ibsColumn text-center d-flex w-100 position-relative text-white fontAlter">
          <div className="alignHolder w-100 d-flex align-items-center">
            <div className="align w-100 py-8 py-md-14 py-lg-20">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="text-white font-weight-bold mb-4 h2Large">Contact</h1>
                    <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                      <li><a href="home1.html">Home</a></li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="bgCover ibsBgWrap w-100 h-100 position-absolute" style={{ backgroundImage: 'url(images/img18.jpg)' }}></span>
        </article>
      </div>

      {/* contactSectionBlock */}
      <section className="contactSectionBlock position-relative py-8 py-sm-10 py-md-13 pt-lg-14 pb-lg-13 pt-xl-22">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
              <header className="headingHead fzMedium mb-8 mb-md-12 text-center">
                <h2>
                  <strong className="d-block text-uppercase hTitle fwmMedium mb-4">Get In touch</strong>
                  <span className="d-block fwSemi">See Contact Details</span>
                </h2>
                <p>In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris.</p>
              </header>
            </div>
          </div>
          <div className="row">
            {/* Address Section */}
            <div className="col-12 col-md-6 col-lg-3 d-flex">
              <article className="ardcColumn bg-white shadow rounded position-relative px-3 px-sm-6 px-lg-3 px-xl-6 py-8 w-100 mb-6">
                <span className="icnWrap d-flex mb-1">
                  <i className="icomoon-location1"></i>
                </span>
                <h5 className="h5 mb-3">Our Address</h5>
                <address className="mb-0">Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia</address>
              </article>
            </div>

            {/* Phone Section */}
            <div className="col-12 col-md-6 col-lg-3 d-flex">
              <article className="ardcColumn bg-white shadow rounded position-relative px-3 px-sm-6 px-lg-3 px-xl-6 py-8 w-100 mb-6">
                <span className="icnWrap d-flex mb-1">
                  <i className="icomoon-phone-call"></i>
                </span>
                <h5 className="h5 mb-3">Phone</h5>
                <ul className="list-unstyled pl-0 ardcList mb-0">
                  <li><a href="tel:616307929639">(61) 630-792-9639</a></li>
                  <li><a href="tel:615409569639">(61) 540-956-9639</a></li>
                </ul>
              </article>
            </div>

            {/* Email Section */}
            <div className="col-12 col-md-6 col-lg-3 d-flex">
              <article className="ardcColumn bg-white shadow rounded position-relative px-3 px-sm-6 px-lg-3 px-xl-6 py-8 w-100 mb-6">
                <span className="icnWrap d-flex mb-1">
                  <i className="icomoon-mail1"></i>
                </span>
                <h5 className="h5 mb-3">Email</h5>
                <ul className="list-unstyled pl-0 ardcList mb-0">
                  <li><a href="mailto:noreply@envato.com">noreply@envato.com</a></li>
                  <li><a href="mailto:enquiry@envato.com">enquiry@envato.com</a></li>
                </ul>
              </article>
            </div>

            {/* Hours Section */}
            <div className="col-12 col-md-6 col-lg-3 d-flex">
              <article className="ardcColumn bg-white shadow rounded position-relative px-3 px-sm-6 px-lg-3 px-xl-6 py-8 w-100 mb-6">
                <span className="icnWrap d-flex mb-1">
                  <i className="icomoon-clock"></i>
                </span>
                <h5 className="h5 mb-3">Hours</h5>
                <time dateTime="2008-02-14 20:00">We’re available Mon to Sat 08:00 am - 10:00 pm</time>
              </article>
            </div>
          </div>
        </div>
        <span className="bgCover imgBg w-100 h-100 position-absolute" style={{ backgroundImage: 'url(images/bgPattern07.jpg)' }}></span>
      </section>

      {/* Contact Form */}
      <section className="contactFormBlock">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <form onSubmit={handleSubmit} className="contactForm">
                  <h4 className="h4 mb-5 text-center">Leave your Message</h4>
                  <div className="row mx-n2">
                    <div className="col-12 col-sm-6 px-2">
                      <div className="form-group">
                        <label htmlFor="name" className="colFormLabel fontAlter">
                          Your Name <span className="text-danger fsSmall">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control d-block w-100"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 px-2">
                      <div className="form-group">
                        <label htmlFor="email" className="colFormLabel fontAlter">
                          Email <span className="text-danger fsSmall">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control d-block w-100"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 px-2">
                      <div className="form-group">
                        <label htmlFor="phonenumber" className="colFormLabel fontAlter">
                          Phone Number <span className="text-danger fsSmall">*</span>
                        </label>
                        <input
                          id="phone"
                          type="number"
                          name="phonenumber"
                          className="form-control d-block w-100"
                          value={formData.phonenumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 px-2">
                      <div className="form-group">
                        <label htmlFor="subject" className="colFormLabel fontAlter">Subject</label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          className="form-control d-block w-100"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 px-2">
                      <div className="form-group">
                        <label htmlFor="message" className="colFormLabel fontAlter">
                          Write Your Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control w-100 d-block"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
          <ReCAPTCHA
            sitekey={"6LfDpssqAAAAAHRGf-mL8ePZ4PnJRAQamU8HwOb_"}
            
          />
        </div>
                  <button
                    type="submit"
                    className="btn btnThemeAlt d-flex font-weight-bold text-capitalize position-relative border-0 p-0 mt-2 btnWidthSmall w-100"
                    disabled={isSubmitting}
                  >
                    <span className="d-block btnText">
                      {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </span>
                  </button>
                </form>
                {success && (
                  <div className="alert alert-success mt-4">Message sent successfully!</div>
                )}
                {error && (
                  <div className="alert alert-danger mt-4">{error}</div>
                )}
              </div>
            </div>
          </div>
          <hr className="d-block m-0 py-4 py-md-6 py-xl-11 border-0" />

{/* Google Map */}
<div className="cuMapBlock">
  <div className="cuMapHolder">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423061829!2d-0.12174774915757933!3d51.50330061872473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1648621593284!5m2!1sen!2s"
     
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
        </section>
        
      <Footer></Footer>
    </main>
    </div>
  )
}
