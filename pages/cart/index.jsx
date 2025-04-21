import Image from "next/image";
import Title from "../../components/ui/Title";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {/* Cart Table Bölməsi */}
      <div className={styles.cartTable}>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>EXTRAS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product.id}>
              <td className={styles.flexCenter} >
                <Image className="pizzaImg" src="/images/f1.png" alt="" width={50} height={50} />
                <span>{product.name}</span>
              </td>
              <td>{product.extras.map((ext) => (
                
                  <span key={ext?.id}>
                    {ext.name}
                  </span>
              ))}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cart Total Bölməsi */}
      <div className={styles.cartTotal}>
        <Title addClass={styles.title}>CART TOTAL</Title>
        <div className={styles.summary}>
          <b>Subtotal: </b>${cart.total} <br />
          <b className="inline">Discount: </b>$0.00 <br />
          <b>Total: </b>${cart.total}
        </div>
        <button className={styles.btnPrimary} onClick={() => dispatch(reset())}>CHECKOUT NOW!</button>
      </div>
    </div>
  );
};

export default Cart;
