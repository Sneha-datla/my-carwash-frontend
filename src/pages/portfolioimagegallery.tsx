import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Headernav from '@/components/Headernav'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
interface Portfolio {
  
 
  id: number;
  title: string;
  category:string;
 
  image: {
    url: string;
  }; 

}
function portfolioimagegallery() {
   const [services, setServices] = useState<Portfolio[]>([]);
      const [filteredServices, setFilteredServices] = useState<Portfolio[]>([]);
      const [selectedFilter, setSelectedFilter] = useState<string>('all');
    
      // Fetch data from Strapi API
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:1337/api/portfolios?populate=*'); // Your Strapi API URL
            if (!response.ok) throw new Error('Failed to fetch portfolio data');
    
            const data = await response.json();
    
            // Transform the API data into the expected structure
            const transformedServices: Portfolio[] = data.data.map((item: any) => ({
              id: item.id,
              title: item.title,
              category: item.category,
              image: {
                url: Array.isArray(item.image) && item.image[0]
                  ? item.image[0]?.formats?.medium?.url || item.image[0]?.url || ''
                  : '', // Fallback to an empty string if image is not available
              },
            }));
    
            setServices(transformedServices);
            setFilteredServices(transformedServices); // Set both services and filtered services initially
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      // Handle filter change
      const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        if (filter === 'all') {
          setFilteredServices(services);
        } else {
          setFilteredServices(
            services.filter((service) => service.category.includes(filter))
          );
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
                                                        <h1 className="text-white font-weight-bold mb-4 h2Large">Image Gallery</h1>
                                                        <ul className="list-unstyled cbbPageList text-capitalize d-flex align-items-center justify-content-center flex-wrap mb-0 p-0">
                                                        <li><a href="home1.html">Home</a></li>
											<li><a href="portfolioGrid.html">Portfolio</a></li>
											<li>Image Gallery</li>
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
                            <section className="ItemfullBlock py-8 py-md-10 py-lg-14 py-xl-22">
      <div className="container">
        <ul className="list-unstyled ifbFiltersList d-flex isoFiltersList mb-lg-12 mb-xl-14 fontAlter flex-wrap justify-content-center">
          <li className="active">
         
              <a>All</a>
           
          </li>
          <li>
          
              <a data-filter=".washing">Washing</a>
            
          </li>
          <li>
           
              <a data-filter=".autoDetail">Auto Detail</a>
           
          </li>
          <li>
          
              <a data-filter=".exterior">Exterior</a>
            
          </li>
          <li>
          
              <a data-filter=".interior">Interior</a>
           
          </li>
          <li>
          
              <a data-filter=".repair">Repair</a>
            
          </li>
        </ul>

        <div className="row justify-content-center isoContentHolder mb-8">
            {services .map((service) => (
              <div key={service.id} className={`col-12 col-md-6 col-lg-4 isoCol ${service.category}`}>
                <article className="gPhoColumnGallery position-relative overflow-hidden mb-6">
                  <div className="imgWrap position-relative">
                    <Image
                      src={`http://localhost:1337${service.image.url}`}
                      className="img-fluid w-100"
                      alt={service.title}
                      width={600}
                      height={400}
                    />
                    <Link href={`http://localhost:1337${service.image.url}`} className="icnSearch lightbox position-absolute" data-fancybox="true">
                      <i className="lnr lnr-magnifier"><span className="sr-only">icon</span></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btnThemeAlt btnLoadMore text-capitalize position-relative border-0 p-0"
            data-hover="Load More"
          >
            <span className="d-block btnText">Load More</span>
          </button>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>
  )
}

export default portfolioimagegallery
