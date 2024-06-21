import { HeroSection } from "../components/Home/HeroSection";
import { useCallback, useEffect, useState } from "react";
import "../components/Home/Home.css";
import { SlideImageBar } from "../components/Home/SlideImageBar";
import CategorySlider from "../components/Home/CategorySlider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../features/CartSlicer";

// eslint-disable-next-line react/prop-types
function Home() {
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const OpenDialog =useCallback( ()=>{
    setSelectProduct(product);
    setIsOpen(true);
  }
);
  const CloseDialog = ()=>{
    setSelectProduct(null);
    setIsOpen(false);
  }

  const handleAddCart = useCallback((selectProduct)=>{
    dispatch(addCart(selectProduct));
  },[dispatch]);
  return (
    <div className="">
      <HeroSection />
      <div className=" m-2 my-8 px-5 py-6 sale rounded-lg">
        <h1 className=" text-xl lg:text-3xl font-bold">Flash Sale</h1>
        <div className="product-sale rounded-lg mt-5">
          {product.slice(0, 10).map((data) => {
            return (
              <button  key={data.id}>
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
              </button>
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
                <button key={data.id}>
                  <div >
                    <div>
                      <img
                        className="rounded-lg aspect-square object-contain"
                        src={data.image}
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className=" font-bold justify-center grid text-md lg:text-xl ">
                        {data.title}
                      </h3>
                      <h3 className=" grid justify-center font-semibold text-sm lg:text-lg">
                        ${data.price}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="grid grid-rows-2 gap-12 lg:gap-5 grid-cols-2">
            {product.slice(12, 16).map((data) => {
              return (
                <button  key={data.id}>
                  <div className="  transition-transform duration-500 ease-in-out transform hover:scale-105 img-hover-border">
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
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
