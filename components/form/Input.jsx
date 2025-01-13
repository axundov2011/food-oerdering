import React from "react";
import styles from "./input.module.scss"; // Sass faylı import olunur

const Input = (props) => {
  const { type, errorMessage, touched, placeholder, ...formProps } = props;

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles.label}>
        <input
          type={type}
          className={`${styles.input} ${
            touched && errorMessage ? styles.error : styles.valid
          }`}
          required
          {...formProps}
        />
        {type !== "datetime-local" && (
          <span
            className={`${styles.placeholder} ${
              formProps.value ? styles.active : ""
            }`}
          >
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className={styles["error-message"]}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
