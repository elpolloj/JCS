const ProductCard = ({ imgURL, changeBigProdImage, bigProdImg }) => {
    const handleClick = () => {
      if (bigProdImg !== imgURL.bigProduct) {
        changeBigProdImage(imgURL.bigProduct);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigProdImg === imgURL.bigProduct
            ? "border-navy-blue"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='product collection'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ProductCard;