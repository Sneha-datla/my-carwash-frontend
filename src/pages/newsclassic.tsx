import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Correct import for Head
import Headernav from '@/components/Headernav';
import Image from 'next/image';
import Footer from '@/components/Footer';
interface BlogPost {
  category:string;
  quote: string;
  id: number;
  title: string;
  author: string;
  date: string;
  image: {
    url: string;
  };  type: string;
  developer: string;
  description: string;

}
function newsclassic() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/blog-classics?populate=*');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
  
        const data = await response.json();
  
        // Transform the API data into the expected structure
        const transformedPosts: BlogPost[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          author: item.author,
          date: item.date,
          quote: item.quote || '', // Handle case where quote may not exist
          description: item.description,
          image: {
            // Ensure item.image exists and is an array before accessing its first element
            url: Array.isArray(item.image) && item.image[0]
              ? item.image[0]?.formats?.medium?.url || item.image[0]?.url || ''
              : '', // Fall back to an empty string if image is not available
          },
          type: item.type,
          developer: item.developer,
        }));
  
        setBlogPosts(transformedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setBlogPosts([]); // In case of an error, ensure it doesn't crash
      }
    };
  
    fetchData();
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
      <div className="introBlock">
      
            <article className="ibsColumn text-center d-flex w-100 position-relative text-white fontAlter">
              <div className="alignHolder w-100 d-flex align-items-center">
                <div className="align w-100 py-8 py-md-14 py-lg-20">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h1 className="text-white font-weight-bold mb-4 h2Large">Blog Classic</h1>
                        <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                        <li><a href="home1.html">Home</a></li>
											<li><a href="blogClassic.html">Blog</a></li>
											<li>Blog Classic</li>
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
            <article className="ItemfullBlock blogClassicView py-8 py-md-14 py-lgwd-18 py-xl-22">
            <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-9">
          <div className="pr-xl-14">
            {/* blockPostColumn 1 */}
            {blogPosts.map((post) => {
  if (post.type === 'quote') {
    return (
      <article className="blockPostColumn blogClassicVII position-relative fontAlter mb-8 mb-md-11 mb-xl-14" key={post.id}>
        <div className="fdbWrap bgCover rounded position-relative mb-6" style={{ backgroundImage: "url('/images/bgPattern08.jpg')" }}>
          <blockquote className="feedbackSlide fontAlter position-relative mb-0">
            <span className="icnWrap d-block mb-4">
              <span className="icomoon-icnQuoteAlt"></span>
            </span>
            <q className="d-block position-relative mb-4 font-italic">{post.quote}</q>
            <cite className="d-block">
              <strong className="d-block font-weight-normal text-capitalize">- {post.author}</strong>
            </cite>
          </blockquote>
        </div>
        <div className="px-n1 px-sm-3">
          <span className="catTag mb-5">General</span>
          <strong className="d-block fwmMedium title mb-2">
            <i className="far fa-calendar-alt"></i>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            - by <a href="blogSinglePost.html" className="text-lDark">{post.author}</a>
          </strong>
          <div className="decWrap">
            <h5 className="h4">{post.title}</h5>
            {/* Using dangerouslySetInnerHTML */}
            <p dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>
        </div>
      </article>
    );
  } else if (post.type === 'image') {
    return (
      <article className="blockPostColumn blogClassic position-relative fontAlter mb-8 mb-md-11 mb-xl-14"  data-category={post.category}>
									<div className="imgWrap overflow-hidden mb-5">
                  <img src={`http://localhost:1337${post.image.url}`} className="img-fluid w-100" alt={post.title} />
        </div>
        <strong className="d-block fwmMedium title mb-2">
          <i className="far fa-calendar-alt"></i>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          - by <a href="blogSinglePost.html" className="text-lDark">{post.author}</a>
        </strong>
        <div className="decWrap">
          <h5 className="h4">{post.title}</h5>
          <p dangerouslySetInnerHTML={{ __html: post.description }} />
          <div className="btnWrap d-flex justify-content-between align-items-center mt-6 mt-lg-8 position-relative">
            <a href="blogSinglePost.html" className="btnThemeAlt btn btnNoOver">
              Continue Reading 
              <i className="fas fa-arrow-right btnIcn ml-1 ml-sm-3 mr-sm-1" aria-hidden="true"><span className="sr-only">icon</span></i>
            </a>
            <div className="nwssHolder">
              <div className="position-relative vssDropdownHolder">
                <a href="javascript:void(0);" className="btnLinkShare rounded-circle d-flex align-items-center justify-content-center icomoon-icnShare vssOpener vssLink hasHover">
                  <span className="sr-only">icon</span>
                </a>
                <div className="vssDropdown">
                  <ul className="list-unstyled vssDropdownList position-relative d-block m-0">
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Google">
                        <i className="vssIcn fab fa-google" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Facebook">
                        <i className="vssIcn fab fa-facebook-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Twitter">
                        <i className="vssIcn fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  } else if (post.type === 'video') {
    return (
      <article className="blockPostColumn blogClassic position-relative fontAlter mb-8 mb-md-11 mb-xl-14" key={post.id} data-media-type="video">
        <div className="imgWrap overflow-hidden mb-5">
          <img src={`http://localhost:1337${post.image.url}`} className="img-fluid w-100" alt={post.title} />
          <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="btnYouPlay d-flex align-items-center justify-content-center position-absolute lightbox" data-fancybox="true">
            <span className="sr-only">icon</span>
          </a>
        </div>
        <strong className="d-block fwmMedium title mb-2">
          <i className="far fa-calendar-alt"><span className="sr-only">icon</span></i>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          - by <a href="blogSinglePost.html" className="text-lDark">{post.author}</a>
        </strong>
        <div className="decWrap">
          <h5 className="h4">{post.title}</h5>
          <p dangerouslySetInnerHTML={{ __html: post.description }} />
          <div className="btnWrap d-flex justify-content-between align-items-center mt-6 mt-lg-8 position-relative">
            <a href="blogSinglePost.html" className="btnThemeAlt btn btnNoOver">
              Continue Reading 
              <i className="fas fa-arrow-right btnIcn ml-1 ml-sm-3 mr-sm-1" aria-hidden="true"><span className="sr-only">icon</span></i>
            </a>
            <div className="nwssHolder">
              <div className="position-relative vssDropdownHolder">
                <a href="javascript:void(0);" className="btnLinkShare rounded-circle d-flex align-items-center justify-content-center icomoon-icnShare vssOpener vssLink hasHover">
                  <span className="sr-only">icon</span>
                </a>
                <div className="vssDropdown">
                  <ul className="list-unstyled vssDropdownList position-relative d-block m-0">
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Google">
                        <i className="vssIcn fab fa-google" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Facebook">
                        <i className="vssIcn fab fa-facebook-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="vssLink" title="Twitter">
                        <i className="vssIcn fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
})}


               
      <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-4 mt-sm-6 mt-md-8 mb-0 pb-0">
        <li className="page-item active" aria-current="page">
         
            <a className="page-link">
              1 <span className="sr-only">(current)</span>
            </a>
          
        </li>
        <li className="page-item">
        
            <a className="page-link">2</a>
         
        </li>
        <li className="page-item">
         
            <a className="page-link">
              Next <i className="fas fa-chevron-right icn" aria-hidden="true"><span className="sr-only">icon</span></i>
            </a>
         
        </li>
      </ul>
    </nav> 
          </div>
        </div>
      
    <div className="col-12 col-lg-4 col-xl-3">
      <aside className="sidebar pt-8 pt-md-10 pt-lg-0">
        {/* authorWidget */}
        <div className="authorWidget mb-6 mb-lg-10 bg-white shadow rounded text-center px-3 py-5">
          <div className="imgWrap rounded-circle overflow-hidden mb-3">
            <Image
              src="/images/img111.png"
              alt="Micky Loft"
              className="rounded-circle img-fluid"
              width={100}
              height={100}
            />
          </div>
          <h6 className="h6 mb-2">
            <a href="teamSingle.html">Micky Loft</a>
          </h6>
          <p>Hi! I`m a founder of this company. Follow Us - For more news!</p>
          <ul className="list-unstyled socialNetworks tmcbSocialNetworks justify-content-center d-flex flex-wrap mb-0 mt-xl-4">
            <li>
              <a href="javascript:void(0);">
                <i className="fab fa-twitter">
                  <span className="sr-only">twitter</span>
                </i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="fab fa-facebook-square">
                  <span className="sr-only">facebook</span>
                </i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="fab fa-linkedin-in">
                  <span className="sr-only">linkedin</span>
                </i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="fab fa-instagram">
                  <span className="sr-only">instagram</span>
                </i>
              </a>
            </li>
          </ul>
        </div>

        {/* widgetSearch */}
        <div className="widgetSearch mb-8">
          <form action="#" className="searchForm">
            <div className="inputWrap">
              <input type="text" className="form-control w-100" placeholder="Search Here&hellip;" />
              <button type="submit" className="btnSearch">
                <i className="icn lnr lnr-magnifier"></i>
              </button>
            </div>
          </form>
        </div>

        {/* categoryListWidget */}
        <div className="categoryListWidget mb-6 mb-lg-10">
          <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Categories</h5>
          <ul className="list-unstyled wCatList pl-0 fontAlter">
            <li>
              <a href="javascript:void(0);">
                Auto Care <span className="catCount">(3)</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                Carwashing <span className="catCount">(5)</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                General <span className="catCount">(3)</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                Maintainance <span className="catCount">(2)</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                News &amp; Tips <span className="catCount">(4)</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                Uncategorized <span className="catCount">(1)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* recentNewsWidget */}
        <div className="recentNewsWidget mb-6 mb-lg-10">
          <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Recent News</h5>
          <ul className="list-unstyled pl-0 mb-7">
            <li>
              <div className="imgHolder flex-shrink-0 mr-4 mt-1">
                <Image
                  src="/images/img108.jpg"
                  alt="Preparing Your Car For The Winter Holidays"
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </div>
              <div className="descrWrap">
                <h4 className="fwMedium mb-1">
                  <a href="blogSinglePost.html">Preparing Your Car For The Winter Holidays</a>
                </h4>
                <time dateTime="2011-01-12" className="d-block">
                  <i className="far fa-calendar-alt icn mr-1">
                    <span className="sr-only">icon</span>
                  </i>
                  May 5, 2020
                </time>
              </div>
            </li>
            <li>
              <div className="imgHolder flex-shrink-0 mr-4 mt-1">
                <Image
                  src="/images/img109.jpg"
                  alt="Tough Stains in Your Car’s Interior"
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </div>
              <div className="descrWrap">
                <h4 className="fwMedium mb-1">
                  <a href="blogSinglePost.html">Tough Stains in Your Car’s Interior</a>
                </h4>
                <time dateTime="2011-01-12" className="d-block">
                  <i className="far fa-calendar-alt icn mr-1">
                    <span className="sr-only">icon</span>
                  </i>
                  May 5, 2020
                </time>
              </div>
            </li>
            <li>
              <div className="imgHolder flex-shrink-0 mr-4 mt-1">
                <Image
                  src="/images/img110.jpg"
                  alt="Want to Make Shine Our Car Exterior?"
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </div>
              <div className="descrWrap">
                <h4 className="fwMedium mb-1">
                  <a href="blogSinglePost.html">Want to Make Shine Our Car Exterior?</a>
                </h4>
                <time dateTime="2011-01-12" className="d-block">
                  <i className="far fa-calendar-alt icn mr-1">
                    <span className="sr-only">icon</span>
                  </i>
                  May 5, 2020
                </time>
              </div>
            </li>
          </ul>
        </div>

        {/* widgetGallery */}
        <div className="widgetGallery mb-6 mb-lg-10">
      <h5 className="fwMedium widgetTitile mb-5 pl-1 position-relative">Photo Gallery</h5>
      <ul className="list-unstyled pl-0 d-flex flex-wrap">
        <li>
          <a href="images/img102.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img102.jpg" className="img-fluid" alt="image description" />
          </a>
        </li>
        <li>
          <a href="images/img103.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img103.jpg" className="img-fluid" alt="image description" />
          </a>
        </li>
        <li>
          <a href="images/img104.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img104.jpg" className="img-fluid" alt="image description" />
          </a>
        </li>
        <li>
          <a href="images/img105.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img105.jpg" className="img-fluid" alt="image description" />
          </a>
        </li>
        <li>
          <a href="images/img106.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img106.jpg" className="img-fluid" alt="image description" />
          </a>
        </li>
        <li>
          <a href="images/img107.jpg" className="lightbox" data-fancybox="true">
            <img src="images/img107.jpg" className="img-fluid" alt="image description" />
          </a>
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

        {/* widgetHelp */}
        <div className="widget mb-0 widgetHelp bg-primary rounded-lg pt-8 px-6 pb-8 position-relative text-center text-white">
          <div className="captionHolder">
            <i className="icn icomoon-information1 text-secondary d-block mb-3">
              <span className="sr-only">icon</span>
            </i>
            <h3 className="h3 h3Large text-white mb-2">Need any help?</h3>
            <p>Here you can get your perfect answer for your problem.</p>
            <a
              href="contact.html"
              className="btn btnThemeAlt text-capitalize position-relative border-0 p-0 btnMinMedium"
              data-hover="Contact now"
            >
              <span className="d-block btnText">Contact now</span>
            </a>
            <i className="whWatermarkIcn icomoon-helpc position-absolute">
              <span className="sr-only">icon</span>
            </i>
          </div>
          <span
            className="bgCover bgImg w-100 h-100 position-absolute"
            style={{ backgroundImage: 'url(/images/bgPattern02.png)' }}
          ></span>
        </div>
      </aside>
    </div>
    </div>
    </div>

                </article>
                <Footer></Footer>


            
    </div>
  )
}

export default newsclassic
