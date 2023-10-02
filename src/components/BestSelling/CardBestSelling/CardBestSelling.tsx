import "./styles.scss";

const CardBestSelling = () => {
  return (
    <div className="cardContainer">
      <h1>Best Selling Products</h1>
      <p>The easiest way to buy your favorite products</p>
      <a href="/products">
        <button>
          <span>See more</span> <img src="./BestSelling/arrow.svg" alt="" />
        </button>
      </a>
    </div>
  );
};

export default CardBestSelling;
