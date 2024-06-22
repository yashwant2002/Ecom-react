import { HeroSection } from "../components/Home/HeroSection";
import { useCallback, useEffect, useState, Fragment } from "react";
import "../components/Home/Home.css";
import { SlideImageBar } from "../components/Home/SlideImageBar";
import CategorySlider from "../components/Home/CategorySlider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../features/CartSlicer";
import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { FaSearch } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const openDialog = useCallback((product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }, []);

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  const handleAddCart = useCallback((product) => {
    dispatch(addCart(product));
  }, [dispatch]);

  return (
    <div className="">
      <HeroSection />
      <div className="m-2 my-8 px-5 py-6 sale rounded-lg">
        <h1 className="text-xl lg:text-3xl font-bold">Flash Sale</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
          {products.slice(0, 10).map((product) => (
            <button onClick={() => openDialog(product)} key={product.id}>
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border">
                <div className="h-48 flex items-center justify-center">
                  <img className="rounded-lg max-h-full" src={product.image} alt={product.title} />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-bold text-md lg:text-xl">{product.title}</h3>
                  <h3 className="font-semibold text-sm lg:text-lg">${product.price}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <SlideImageBar />
      </div>
      <CategorySlider />
      <div className="m-2 my-8 px-5 py-6 sale rounded-lg">
        <h1 className="text-xl lg:text-3xl font-bold">Feature Product</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
          {products.slice(10, 20).map((product) => (
            <button onClick={() => openDialog(product)} key={product.id}>
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border">
                <div className="h-48 flex items-center justify-center">
                  <img className="rounded-lg max-h-full" src={product.image} alt={product.title} />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-bold text-md lg:text-xl">{product.title}</h3>
                  <h3 className="font-semibold text-sm lg:text-lg">${product.price}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeDialog}>
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black opacity-30" />
            </TransitionChild>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {selectedProduct && (
                  <>
                    <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      {selectedProduct.title}
                    </DialogTitle>
                    <div className="mt-2">
                      <img src={selectedProduct.image} alt={selectedProduct.title} className="rounded-lg" />
                      <p className="text-sm text-gray-500 mt-4">{selectedProduct.description}</p>
                      <p className="text-lg font-bold mt-4">${selectedProduct.price}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 "
                        onClick={() => handleAddCart(selectedProduct)}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                        onClick={closeDialog}
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Home;
