import Title from "@/components/ui/Title";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./index.module.scss";
// import {addProduct} from "../../redux/cartSlice"
import { addProduct } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Extra cheese",
    price: 1.99,
  },
  {
    id: 2,
    name: "Peperoni",
    price: 1.99,
  },
  {
    id: 3,
    name: "Sausage",
    price: 1.99,
  }
  
]
const foodItems = [
  {
    id: 1,
    name: "Pizza",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam molestiae.",
    extraOptions: [
      {
        id: 1,
        name: 'Extra Cheese',
        price: 1.99
      },
      {
        id: 2,
        name: 'Peperoni',
        price: 1.99
      },
      {
        id: 3,
        name: 'Sausage',
        price: 1.99
      }
    ]
  }
]
const ProductDetail = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra)
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    console.log(difference);
    setSize(sizeIndex)
    changePrice(difference)
  }

  const changePrice = (number) => {
    setPrice(price + number);

  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    console.log(checked);
    if(checked){
      setExtras((prev) => [...prev, item]);
      changePrice(item.price)
  } else {
    setExtras(extras.filter(extra => extra.id !== item.id))
    changePrice(-item.price)
  }
}

  const handleClick = () => {
    const product = {...foodItems[0], extras, price, quantity: 1};
    dispatch(addProduct(product))
  }

  console.log(cart) 

  return (
    <div className={styles["product-container"]}>
      <div className={styles["image-wrapper"]}>
        <Image src="/images/f1.png" alt="Pizza" layout="fill" objectFit="contain" />
      </div>

      <div className={styles["content"]}>
        <Title>Good Pizza</Title>
        <span className={styles["price"]}>${price}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit
          corporis ex laboriosam tenetur at ad aspernatur eius numquam molestiae.
        </p>

        <div className={styles["sizes"]}>
          <h4>Choose the size</h4>
          <div className={styles["size-options"]}>
            <div className={styles["size-option"]} style={{ width: "32px", height: "32px" }} onClick={() => handleSize(0)} >
              <Image src="/images/pizza-animasyon.jpg" alt="" layout="fill"  />
              <span className={styles["size-label"]}>Small</span>
            </div>
            <div className={styles["size-option"]} style={{ width: "48px", height: "48px" }} onClick={() => handleSize(1)}>
              <Image src="/images/pizza-animasyon.jpg" alt="" layout="fill" />
              <span className={styles["size-label"]}>Medium</span>
            </div>
            <div className={styles["size-option"]} style={{ width: "64px", height: "64px" }} onClick={() => handleSize(2)}>
              <Image src="/images/pizza-animasyon.jpg" alt="" layout="fill" />
              <span className={styles["size-label"]}>Large</span>
            </div>
          </div>
        </div>

        <div className={styles["checkbox-options"]}>
         {
          extraItems.map((item) => (
            <label key={item.id}>
            <input type="checkbox" onChange={(e) => handleChange(e, item)} />
            <span>{item.name}</span>
          </label>
          ))
         }
        
        </div>

        <button className={styles["cart-button"]} onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
