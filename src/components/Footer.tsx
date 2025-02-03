import React from 'react'

export default function Footer() {
  return (
    <div><div className="ftAreaWrap bg-light">
    {/* ftConnectAside */}
    <aside className="ftConnectAside pt-4 pb-3 pt-md-7 pb-md-7 text-center text-md-left">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <nav className="ftcaNav mb-4 mb-lg-0">
              <ul className="list-unstyled d-flex flex-wrap mb-0 justify-content-center justify-content-lg-start">
                <li><a href="about.html">About Us</a></li>
                <li><a href="Services-2.html">Services</a></li>
                <li><a href="blogClassic.html">Events</a></li>
                <li><a href="blogGrid.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="portfolioGrid.html">Portfolio</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-lg-5">
            <div className="ctConnectWrap d-sm-flex justify-content-sm-center justify-content-lg-end align-items-sm-center">
              <strong className="title flex-shrink-0 mb-1 font-weight-normal mr-sm-3 d-block">Connect With Us</strong>
              <ul className="list-unstyled socialNetworks ftSocialNetworks d-flex flex-wrap justify-content-center justify-content-sm-end mb-0">
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-facebook-square"><span className="sr-only">facebook</span></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-twitter"><span className="sr-only">twitter</span></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-instagram"><span className="sr-only">instagram</span></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-youtube"><span className="sr-only">youtube</span></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>

    {/* footerAside */}
    <div className="footerAsideInnerWrap position-relative">
      <aside className="footerAside pt-10 pb-sm-2 pt-xl-15 pb-lg-10 py-lgwd-14 pb-xl-19">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 mb-10 mb-lg-0">
              <h5 className="h5 ftHeading text-white mb-4">Our Address</h5>
              <address className="mb-0 ftPlace">
                Level 13, 2 Elizabeth St,<br />
                Melbourne, Victoria 3000,<br />
                Australia
              </address>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-10 mb-lg-0">
              <h5 className="h5 ftHeading text-white mb-4">Opening Hours</h5>
              <ul className="list-unstyled ftpScheduleList mb-0">
                <li>
                  <span className="d-block">Monday - Friday</span>
                  <span className="d-block">09:00 AM - 06:00 PM</span>
                </li>
                <li>
                  <span className="d-block">Saturday</span>
                  <span className="d-block">10:00 AM - 05:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-10 mb-lg-0">
              <h5 className="h5 ftHeading text-white mb-4"><i className="icomoon-whatsapp icn text-secondary"><span className="sr-only">icon</span></i> 650-732-9369</h5>
              <p>If you have any question, feel free to contact us</p>
              <a href="mailto:noreply@envato.com">noreply@envato.com</a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-10 mb-lg-0">
              <h5 className="h5 ftHeading text-white mb-4">Newsletter</h5>
              <p>Join our newsletter for latest Updates</p>
              <form action="#" className="subscritionForm">
                <div className="inputWrap">
                  <input type="text" className="form-control w-100" placeholder="Your email address" />
                  <button type="submit" className="btnSubmit"><i className="icn fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>

      {/* pageFooter */}
      <footer id="pageFooter" className="text-center pt-6 pb-3 pt-md-8 pb-md-5">
        <div className="container">
          <p><a href="home1.html">Autoglow Carwash Template</a> - <a href="javascript:void(0);">Mad UX</a> &copy; 2022. <br className="d-md-none" />All Rights Reserved</p>
        </div>
      </footer>
      <span className="bgCover bgImg w-100 h-100 position-absolute" style={{ backgroundImage: 'url(images/img12.jpg)' }}></span>
    </div>
  </div></div>
  )
}
