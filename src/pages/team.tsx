import { useEffect, useState } from "react";
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Footer from '@/components/Footer';
interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: { url: string };
  social_links: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

interface TeamData {
  description: string;
  teamMembers: TeamMember[];
}
function team() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/team-datas?populate[teams][populate]=image")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging
  
        if (data?.data?.length > 0) {
          const teamInfo = data.data[0]; // Use `attributes`
          setTeamData({
            description: teamInfo.description || "No description available.",
            teamMembers: teamInfo.teams?.map((member: any) => ({
              id: member.id,
              name: member.name,
              designation: member.designation,
              image: {
                url: member.image[0]?.url || '', // Handle case where image may not exist
                id:member.image[0].id
              },
            })) || [],
          });
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
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
                                                        <h1 className="text-white font-weight-bold mb-4 h2Large">Team</h1>
                                                        <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                        <li><a href="home1.html">Home</a></li>
											<li><a href="about.html">Pages</a></li>
											<li>Team</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                  <span className="bgCover ibsBgWrap w-100 h-100 position-absolute">
                                <Image src="/images/img18.jpg" alt="Background" layout="fill" objectFit="cover" />
                              </span> 				</article>
                  
                              <section className="meetTheTeamSection pt-10 pt-md-12 pt-lg-16 pt-xl-22 pb-20 pb-xl-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
          <header className="headingHead fzMedium mb-12 text-center">
  <h2>
    <strong className="d-block text-uppercase hTitle fwMedium mb-4">
      Power Behind Us
    </strong>
    <span className="d-block">Meet the Team Members</span>
  </h2>
  <p
    dangerouslySetInnerHTML={{
      __html: teamData ? teamData.description : "Loading...",
    }}
  />
</header>

          </div>
        </div>

        <div className="row">
          {teamData?.teamMembers.map((member) => (
            <div key={member.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <article className="mccColumn mb-6 position-relative text-center mx-auto mx-sm-0">
                <div className="imgHolder position-relative">
                  <Image
                    src={`http://localhost:1337${member.image.url}`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="img-fluid d-block w-100"
                  />
                  <div className="mcssHolder">
                    <ul className="mcssList list-unstyled rounded bg-white overflow-hidden p-0 m-0 d-flex">
                      
                        <li>
                          <a href="#" className="mcssLink" title="Twitter">
                            <i className="vssIcn fab fa-twitter"></i>
                          </a>
                        </li>
                  
                     
                        <li>
                          <a href="#" className="mcssLink" title="Facebook">
                            <i className="vssIcn fab fa-facebook-square"></i>
                          </a>
                        </li>
                    
                    
                        <li>
                          <a href="#" className="mcssLink" title="LinkedIn">
                            <i className="vssIcn fab fa-linkedin-in"></i>
                          </a>
                        </li>
                    
                    </ul>
                  </div>
                </div>
                <div className="mcCaptionWrap px-5 pt-5 pb-4 position-relative">
                  <h6 className="mccName mb-2">{member.name}</h6>
                  <h6 className="mccDesig text-secondary mb-0 text-uppercase">{member.designation}</h6>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="superPowerTeamSection py-10 py-md-12 py-lg-16 pt-xl-20">
      <div className="container">
        <div className="row mx-xl-n9">
          <div className="col-12 col-lg-6 position-static px-xl-9">
            <a
              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
              className="videoBoxWrap position-relative overflow-hidden lightbox d-block w-100 mt-n30 mt-xl-n35 mb-10"
              data-fancybox="true"
            >
              <Image
                src="/images/img83.jpg"
                alt="image description"
                className="img-fluid w-100"
                layout="responsive"
                width={500}
                height={300}
              />
              <span className="playBtnWrap position-absolute rounded-pill bg-white d-flex align-items-center">
                <span className="btnPlay position-relative rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mr-4">
                  <span className="sr-only">play</span>
                </span>
                <strong className="plyBtnTxt">Play Intro Video</strong>
              </span>
            </a>
          </div>
          <div className="col-12 col-lg-6 px-xl-9">
            <div className="captionHolder">
              <header className="headingHead fzMedium mb-7">
                <h2>
                  <strong className="d-block text-uppercase hTitle fwMedium mb-3">
                    Super Power Team
                  </strong>
                  <span className="d-block text-white">
                    We care about your vehicles comfort and safety.
                  </span>
                </h2>
                <p>
                  Carwash made its debut in America in 1998, bringing with us a 40-year legacy in the convenience-store and car wash business from across seven states. We built our brand by giving customers a sense of luxury in a Mister car wash.
                </p>
              </header>
              <ul className="list-unstyled cabCounterList d-flex flex-wrap mb-0 mx-auto mx-md-0">
                <li>
                  <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                    <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount text-secondary">
                      25
                    </span>
                    <span className="text-white subtitle">
                      Years of <br /> Experience
                    </span>
                  </h3>
                </li>
                <li>
                  <h3 className="cclColumnWrap fwSemi text-uppercase d-flex mb-0 align-items-center">
                    <span className="font-weight-normal flex-shrink-0 textCount mr-1 mr-sm-3 dataCount text-secondary">
                      17
                    </span>
                    <span className="text-white subtitle">
                      Awards &amp; <br /> Recognitions
                    </span>
                  </h3>
                </li>
              </ul>
              <a
                href="javascript:void(0);"
                className="btn btnThemeWhite position-relative border-0 p-0 mt-3 btnMinMediumAlt"
                data-hover="Discover More"
              >
                <span className="d-block btnText">Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside className="seeBenefitsAside styleAlt pb-5 pt-10 py-md-12 py-lg-16 pt-xl-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <h4 className="h4 pr-xl-10 mb-8 mb-lg-6 text-center text-lg-left">
              <strong className="d-block text-uppercase hTitle fwMedium mb-3 text-primary">
                See Benefits
              </strong>
              <span className="d-block text-white">Each visit includes special benefits</span>
            </h4>
          </div>
          <div className="col-12 col-lg-8">
            <ul className="list-unstyled fabFeaturesList mb-0 d-flex flex-wrap justify-content-center">
              <li>
                <div className="featureColumn text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
                  <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                    <i className="icomoon-repair"></i>
                  </span>
                  <h6 className="h6 mb-0 position-relative">Four Wheel Alignment</h6>
                </div>
              </li>
              <li>
                <div className="featureColumn text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
                  <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                    <i className="icomoon-mat"></i>
                  </span>
                  <h6 className="h6 mb-0 position-relative">Soft Towel Drying</h6>
                </div>
              </li>
              <li>
                <div className="featureColumn text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
                  <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                    <i className="icomoon-car-1"></i>
                  </span>
                  <h6 className="h6 mb-0 position-relative">Surface Drying Machines</h6>
                </div>
              </li>
              <li>
                <div className="featureColumn text-center px-3 px-md-5 px-xl-7 pt-2 mb-6">
                  <span className="icnWrap d-flex align-item-center justify-content-center mb-2">
                    <i className="icomoon-tire"></i>
                  </span>
                  <h6 className="h6 mb-0 position-relative">Wheels Air Checking</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <section className="ourBlogSection pt-10 pb-5 pt-md-12 pb-md-8 pt-lg-16 pb-lg-12 pt-xl-20">
      <div className="container">
        <div className="row align-items-center mb-6 mb-md-10 mb-lg-14">
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
            <h2>
              <strong className="d-block text-uppercase hTitle fwMedium mb-3">Read Our Blog</strong>
              <span className="d-block">Featured News and Insights</span>
            </h2>
          </div>
          <div className="col-12 col-sm-6 text-sm-right mb-3 mb-md-0">
            <a href="blogGrid.html" className="btn btnTheme position-relative border-0 p-0 btnMinLarge" data-hover="See All News">
              <span className="d-block btnText">See All News</span>
            </a>
          </div>
        </div>
        <div className="row">
          {/* First Blog Post */}
          <div className="col-12 col-sm-6 col-lg-4 col">
            <article className="blockPostColumn position-relative fontAlter mb-6" data-category="Auto Care">
              <div className="imgWrap overflow-hidden mb-5">
                <Image src="/images/img84.jpg" alt="Preparing your Car for the Winter Holidays" width={400} height={300} className="img-fluid w-100" />
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2020-05-05">May 5, 2020</time> - by 
                <a href="blogSinglePost.html" className="text-lDark">developer</a>
              </strong>
              <h5 className="h5">Preparing your Car for the Winter Holidays</h5>
              <a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
            </article>
          </div>

          {/* Second Blog Post */}
          <div className="col-12 col-sm-6 col-lg-4 col">
            <article className="blockPostColumn position-relative fontAlter mb-6" data-category="Carwashing">
              <div className="imgWrap overflow-hidden mb-5">
                <Image src="/images/img85.jpg" alt="The Importance of Washing Under Vehicle surface" width={400} height={300} className="img-fluid w-100" />
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2020-05-05">May 5, 2020</time> - by 
                <a href="blogSinglePost.html" className="text-lDark">developer</a>
              </strong>
              <h5 className="h5">The Importance of Washing Under Vehicle surface</h5>
              <a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
            </article>
          </div>

          {/* Third Blog Post */}
          <div className="col-12 col-sm-6 col-lg-4 col">
            <article className="blockPostColumn position-relative fontAlter mb-6" data-category="News & Tips">
              <div className="imgHolder mb-5 position-relative">
                <div className="nrcImageSlider">
                  <div>
                    <div className="imgWrap overflow-hidden">
                      <Image src="/images/img86.jpg" alt="Tough Stains in Your Car’s Interior" width={400} height={300} className="img-fluid w-100" />
                    </div>
                  </div>
                 </div>
              </div>
              <strong className="d-block fwmMedium title mb-2">
                <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
                <time dateTime="2020-05-05">May 5, 2020</time> - by 
                <a href="blogSinglePost.html" className="text-lDark">developer</a>
              </strong>
              <h5 className="h5">Tough Stains in Your Car’s Interior (what to do about them)</h5>
              <a href="blogSinglePost.html" className="btnLink fwSemi">Read More</a>
            </article>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default team
