import { useState } from "react";

import { Products, statistics } from "../constants";
import { Button, ProductCard } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(Products[0]);

  const changeBigProdImage = (product) => {
    setCurrentProduct(product);
  };

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-navy-blue'>
          Our Top Products
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[52px] max-sm:leading-[62px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Check Out Our
          </span>
          <br />
          <span className='text-navy-blue inline-block mt-3'>{currentProduct.name}</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          {currentProduct.description}
        </p>

        <Button
          label='Shop now'
          iconURL={arrowRight}
          redirectURL='https://wa.me/c/96176976500'
        />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={currentProduct.bigProduct}
          alt='product collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {Products.map((product, index) => (
            <div key={index}>
              <ProductCard
                index={index}
                imgURL={product}
                changeBigProdImage={() => changeBigProdImage(product)}
                bigProdImg={currentProduct.bigProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
