import { useState } from "react";
import React from "react";
import styles from "./index.module.scss";
import Logo from "../../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Search from "../../ui/Search";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <div
      className={`${styles.header} ${
        router.asPath === "/" ? styles.transparent : styles.secondary
      }`}
    >
      <div className={styles.container}>
        <Logo />

        <nav className={`${isMenuModal ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>

          {isMenuModal && (
            <button
              className={styles["close-menu"]}
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} />
            </button>
          )}
        </nav>

        <div className={styles.icons}>
          <Link href="/auth/login/login">
            <FaUserAlt />
          </Link>
          <Link href="/cart">
            <span className={styles["cart-icon"]}>
              <FaShoppingCart />
              <span className={styles["cart-badge"]}>
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch />
          </button>
          <Link href="#" className={styles["order-button"]}>
            <button className="btn-primary">Order Online</button>
          </Link>
          <button
            className={styles["menu-button"]}
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
