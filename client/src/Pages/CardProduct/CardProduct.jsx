import { useParams } from "react-router-dom";
import HitSale from "../../Component/HitSale/HitSale";
import ProductInfo from "../../Component/ProductInfo/ProductInfo";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";

import { useEffect, useState } from "react";
import axios from "../../utils/Axios/Axios";

const CardProduct = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`app/products/get/${params.id}`);
        setProduct({...res.data});
      } catch {
        console.log("erorr fetchProduct");
      }
    };
    fetchProduct();
  }, [params.id]);

  
  if ("_id" in product) {
    return (
      <>
        <div className="cardProduct">
          <div className="container">
            <div className="cardProduct__inner">
              <ProductSlider product={product} />

              <ProductInfo product={product} />
            </div>
          </div>
        </div>
        <HitSale />
      </>
    );
  } else {
    return <h2>loading</h2>;
  }
};

export default CardProduct;
