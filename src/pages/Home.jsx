import { HeroSection } from "../components/Home/HeroSection";
import { useEffect, useState } from "react";

import "../components/Home/Home.css";
import { Link } from "react-router-dom";
import { SlideImageBar } from "../components/Home/SlideImageBar";
import CategorySlider from "../components/Home/CategorySlider";

function Home() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="">
      <HeroSection />
      <div className=" m-2 my-8 px-5 py-6 sale rounded-lg">
        <h1 className=" text-xl lg:text-3xl font-bold">Flash Sale</h1>
        <div className="product-sale rounded-lg mt-5">
          {product.slice(0, 10).map((data) => {
            return (
              <Link key={data.id}>
                <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border">
                  <div>
                    <img
                      className="rounded-lg aspect-square object-contain"
                      src={data.image}
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-md lg:text-xl ">
                      {data.title}
                    </h3>
                    <h3 className=" font-semibold text-sm lg:text-lg">
                      ${data.price}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" mb-10">
        <SlideImageBar />
      </div>
      <CategorySlider />
      <div className=" m-2 my-8 px-5 py-6 sale rounded-lg">
        <h1 className="text-xl lg:text-3xl font-bold">Feature Product</h1>
        <div className="grid grid-cols-1 gap-5 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mt-5 lg:mt-10">
          <div>
          {product.slice(0, 1).map((data) => {
            return (
              <Link key={data.id}>
                <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border">
                  <div>
                    <img
                      className="rounded-lg aspect-square object-contain"
                      src={data.image}
                    />
                  </div>
                  <div  className="mt-5">
                    <h3 className=" font-bold justify-center grid text-md lg:text-xl ">
                      {data.title}
                    </h3>
                    <h3 className=" grid justify-center font-semibold text-sm lg:text-lg">
                      ${data.price}
                    </h3>
                    <button>addCart</button>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
          <div className="grid grid-rows-2 gap-12 lg:gap-5 grid-cols-2">
          {product.slice(1, 5).map((data) => {
            return (
              <Link key={data.id}>
                <div className="  transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border">
                  <div>
                    <img
                      className="rounded-lg aspect-square object-contain"
                      src={data.image}
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-md lg:text-xl ">
                      {data.title}
                    </h3>
                    <h3 className=" font-semibold text-sm lg:text-lg">
                      ${data.price}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
