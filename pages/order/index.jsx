import Image from "next/image";
import styles from "./index.module.scss";

const Order = () => {
  return (
    <div className={styles.container}>
      {/* Sifariş Cədvəli */}
      <div className={styles.cartTable}>
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>63107F5559...</td>
              <td>Aykhan Akhundov</td>
              <td>Baku</td>
              <td>$15</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status Göstəriciləri */}
      <div className={styles.statusContainer}>
        <div className={styles.statusStep}>
          <Image
            src="/images/paid.png"
            alt="Payment"
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Payment</span>
        </div>
        <div className={`${styles.statusStep} ${styles.animate}`}>
          <Image
            src="/images/bake.png"
            alt="Preparing"
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Preparing</span>
        </div>
        <div className={styles.statusStep}>
          <Image
            src="/images/bike.png"
            alt="On the way"
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>On the way</span>
        </div>
        <div className={styles.statusStep}>
          <Image
            src="/images/delivered.png"
            alt="Delivered"
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
