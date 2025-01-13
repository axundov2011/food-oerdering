import Image from "next/image";
import Title from "../../components/ui/Title";
import styles from "./index.module.scss";

const Cart = () => {
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
            <tr>
              <td className={styles.flexCenter}>
                <Image className="pizzaImg" src="/images/f1.png" alt="" width={50} height={50} />
                <span>Good Pizza</span>
              </td>
              <td>mayonez, acı sos, ketçap</td>
              <td>$20</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cart Total Bölməsi */}
      <div className={styles.cartTotal}>
        <Title addClass={styles.title}>CART TOTAL</Title>
        <div className={styles.summary}>
          <b>Subtotal: </b>$20 <br />
          <b className="inline">Discount: </b>$0.00 <br />
          <b>Total: </b>$20
        </div>
        <button className={styles.btnPrimary}>CHECKOUT NOW!</button>
      </div>
    </div>
  );
};

export default Cart;
