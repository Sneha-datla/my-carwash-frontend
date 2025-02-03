import Headernav from '@/components/Headernav'
import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import router from 'next/router';
interface Product {
  documentId: number;
  featured_tag: string;
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number; // Add rating to the interface
  image: {
    url: string;
    id:number;
  };
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]); // Explicitly type the state as Product[]
  const [cart, setCart] = useState<{ [key: number]: { product: Product; quantity: number } }>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:1337/api/products?populate=*");
        const data = await response.json();
        // Map the API response to your `Product` interface structure
        const formattedProducts :Product[]= data.data.map((item: any) => ({
          id: item.id,
          documentId:item. documentId,
          name: item.name,
          category: item.category,
          price: item.price,
          rating: item.rating,
          featured_tag:item.featured_tag,
          image: {
            url: item.image[0]?.url || '', // Handle case where image may not exist
            id:item.image[0].id
          },
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  const handleAddToCart = (product: Product) => {


 
  // Send the updated cart to the backend (as you already do)
  const requestBody = {
    data: {
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image.id,
    },
  };

  fetch('http://localhost:1337/api/carts?populate=*', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.ok) {
        // Update localStorage with the new cart
        console.log('Item added to cart successfully!');
        router.push('/cart');

      } else {
        console.error('Failed to add item to cart:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error adding item to cart:', error);
    });
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
                <li><a href="about.html">Shop</a></li>
                   
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
        <header className="ctSorterWrapHeader">
          <div className="row align-items-md-center">
            <div className="col-12 col-md-5 text-center text-md-left order-2 order-md-1">
              <p>
                <strong className="fwmMedium">Showing 1–9 of 13 results</strong>
              </p>
            </div>
            <div className="col-12 col-md-7 d-md-flex justify-content-md-end order-1 order-md-2">
              <div className="dropdown dsSortDropdown mb-2 mb-md-0">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Default Sorting
                </a>
                <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="row">
      {products.map((product) => (
        <div className="col-12 col-md-6 col-lgwd-4 d-flex" key={product.id}>
          <article className="proItemCol text-center position-relative mb-6 w-100"  {...(product.featured_tag && { "data-featured-tag": product.featured_tag })}

       
          >
            <div className="prodImgWrap mb-3 mb-md-5">
              <Link href={`/singleproduct`}>
                <Image
                  src={`http://localhost:1337${product.image.url}`}
                  className="img-fluid"
                  alt={product.name}
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="prodDescWrap">
              
              <div className="prodCategory">{product.category}</div>
              <h6 className="h6 mb-1 productName">
              <Link href={`/singleproduct`}>{product.name}</Link>
              </h6>
              <ul className="list-unstyled ratingList mb-1 d-flex justify-content-center">
                {[...Array(5)].map((_, index) => (
                  <li key={index} className={index < product.rating ? "active" : ""}>
                    <i className="fas fa-star"></i>
                  </li>
                ))}
              </ul>
              <div className="prodPrice mb-4">${product.price.toFixed(2)}</div>
              <Link href="" className="btn btnAddToCart btnNoOver"  onClick={() => handleAddToCart(product)}>
                Add to Cart <span className="icn fas fa-chevron-right"></span>
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
               
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
      </div>
      </div>
      
    </article>
    <Footer></Footer>
    </div>
  )
}

export default Shop
