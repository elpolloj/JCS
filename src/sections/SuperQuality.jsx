import { bigpos } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You With
          <span className='text-navy-blue'> Super </span>
          <span className='text-navy-blue'>Quality </span> Tech Solutions
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring premium performance and innovation, 
        our meticulously crafted technology solutions are designed to elevate your experience, 
        providing you with unmatched quality, cutting-edge advancements,
         and a touch of sophistication.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Our dedication to detail and excellence ensures your satisfaction with every product and service from JCS.
        </p>
        <div className='mt-11'>
        <Button
          label='View Details'
          redirectURL='https://wa.me/c/96176976500'
        />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={bigpos}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;