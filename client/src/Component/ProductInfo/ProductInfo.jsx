import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";

const ProductInfo = ({ product }) => {
  const {
    user,
    favorites,
    favoritesHandler,
    addCarts,
    addCardsCountPlus,
    addCardsCountMinus,
  } = useContext(CustomContext);

  const [btnPayVisible, setBtnPayVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setBtnPayVisible(!user.carts?.some((item) => item._id === product._id));
    // setCount(user.carts.find((item) => item._id === product._id).count);
  }, []);

  // console.log(user.carts.find((item) => item._id === product._id));
  return (
    <div className="purches__inform">
      <h3>{product.title}</h3>
      <p className="purches__inform-category">{product.category}</p>
      <div className="payGroup">
        <p className="payGroup-price">{product.price}₽</p>
        {btnPayVisible ? (
          <button
            form="chengePSC"
            onClick={() => {
              addCarts(product);
              setBtnPayVisible(false);
            }}
          >
            В корзину
          </button>
        ) : (
          <div className="chengePSC">
            <button
              type="button"
              onClick={() => {
                addCardsCountMinus(product._id);
              }}
            >
              -
            </button>
            <p>{user.carts.find((item) => item._id === product._id)?.count || 0} </p>

            <button
              type="button"
              onClick={() => {
                addCardsCountPlus(product._id);
              }}
            >
              +
            </button>
          </div>
        )}

        <div className="payGroup-favorite">
          <img
            onClick={() => favoritesHandler(product)}
            src={
              favorites.some((el) => el.id === product.id)
                ? "/images/icons/HeartRed.svg"
                : "/images/icons/favorite.svg"
            }
            alt=""
          />
          <p>Добавить в желаемое</p>
        </div>
      </div>

      <div className="productDescription">
        <h4>Описание</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
