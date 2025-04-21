import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = () => {
  return (
    <div className={styles["menu-item"]}>
      <div className={styles["image-container"]}>
        <Link href="/product">
          <div className={styles["image-wrapper"]}>
            <Image src="/images/pizza-delicious.png" layout="fill" alt="Pizza" priority />
          </div>
        </Link>
      </div>
      <div className={styles["content"]}>
        <h4>Delicious Pizza</h4>
        <p>
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque.
        </p>
        <div className={styles["bottom-section"]}>
          <span className={styles["price"]}>$20</span>
          <button className={styles["cart-button"]}>
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
