import React from "react";
import Title from "../../ui/Title";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Title addClass={styles.title}>Contact Us</Title>
          <div className={styles.info}>
            <div>
              <i className="fa fa-map-marker"></i>
              <span>Location</span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>Call +01 1234567890</span>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <span>demo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.feane}`}>
          <Title addClass={styles.title}>Feane</Title>
          <p className={styles.text}>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className={styles.socialLinks}>
            <a href="F">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <Title addClass={styles.title}>Opening Hours</Title>
          <div className={styles.info}>
            <div>
              <span>Everyday</span>
            </div>
            <div>
              <span>10.00 Am -10.00 Pm</span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2022 All Rights Reserved By Free Html Templates
      </p>
    </div>
  );
};

export default Footer;
