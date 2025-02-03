import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Headernav from '@/components/Headernav';

function myaccount() {
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTabClick = (tab: string) => {
      setActiveTab(tab);
      setError('');
      setSuccess('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (activeTab === 'register') {
        setFormData({ ...formData, [name]: value });
    } else {
        setLoginData({ ...loginData, [name]: value });
    }
};

const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
        const response = await fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.jwt) {
            localStorage.setItem('user', JSON.stringify(data)); // Store user info in local storage
            setSuccess('Registration successful! You can now log in.');
            setFormData({ username: '', email: '', password: '' });
        } else {
            setError(data.message[0].messages[0].message);
        }
    } catch (err) {
        setError('An error occurred. Please try again.');
    }
};

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              identifier: loginData.email, // Fix: Use 'identifier' instead of 'email'
              password: loginData.password
          }),
      });

      const data = await response.json();
      if (data.jwt) {
          localStorage.setItem('user', JSON.stringify(data)); 
          setSuccess('Login successful! Redirecting...');
          setTimeout(() => {
              window.location.href = '/home1';
          }, 1500);
      } else {
          setError(data?.error?.message || 'Invalid credentials. Please try again.');
      }
  } catch (err) {
      setError('An error occurred. Please try again.');
  }
};


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
                                                                        <h1 className="text-white font-weight-bold mb-4 h2Large">My Account</h1>
                                                                        <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                                        <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>My Account</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                  <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                                <Image src="/images/img23.jpg" alt="Background" layout="fill" objectFit="cover" />
                                              </span> 				</article>
                                  
                                            </div>
                                            <section className="login_section py-8 py-md-15 py-xl-22 fontAlter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <ul className="nav nav-tabs tabset justify-content-center mb-10" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link tablink ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => handleTabClick('login')}
                  role="tab"
                  aria-controls="login"
                  aria-selected={activeTab === 'login'}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link tablink ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => handleTabClick('register')}
                  role="tab"
                  aria-controls="register"
                  aria-selected={activeTab === 'register'}
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content" id="loginTabContent">
              <div
                className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <form onSubmit={handleLogin}>
                                        {error && <p className="text-danger">{error}</p>}
                                        {success && <p className="text-success">{success}</p>}
                                        <div className="form-group">
                                            <label>Email <span className="text-danger">*</span></label>
                                            <input type="email" name="email" className="form-control" value={loginData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleChange} required />
                                        </div>
                                        <button
                    type="submit"
                    className="btn btnThemeAlt fwMedium w-100 d-block text-capitalize position-relative border-0 p-0"
                    data-hover="Login"
                  >
                    <span className="d-block btnText">Login</span>
                  </button>                                         </form>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
                id="register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                 <form onSubmit={handleRegister}>
                                        {error && <p className="text-danger">{error}</p>}
                                        {success && <p className="text-success">{success}</p>}
                                        <div className="form-group">
                                            <label>Username<span className="text-danger">*</span></label>
                                            <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email<span className="text-danger">*</span></label>
                                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Password<span className="text-danger">*</span></label>
                                            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                                        </div>
                    <button
                    type="submit"
                    className="btn btnThemeAlt fwMedium w-100 d-block text-capitalize position-relative border-0 p-0"
                    data-hover="Register"
                  >
                    <span className="d-block btnText">Register</span>
                  </button>                                   
                   </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default myaccount
