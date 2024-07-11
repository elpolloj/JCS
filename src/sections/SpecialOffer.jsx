import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-navy-blue'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable deals.
        From premier software solutions to cutting-edge hardware, 
        we offer unparalleled value that sets Jarrah Compu-serve apart.
        </p>
        <p className='mt-6 info-text'>
        Navigate a realm of possibilities designed to fulfill your unique desires, 
        surpassing the loftiest expectations. Whether you need top-tier software, 
        the latest hardware, or comprehensive IT services, 
        your journey with us is nothing short of exceptional. 
        Discover the difference with JCS today.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button
          label='Shop now'
          iconURL={arrowRight}
          redirectURL='https://wa.me/c/96176976500'
        />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;