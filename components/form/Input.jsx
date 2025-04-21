import React, { useState } from "react";
import styles from "./input.module.scss"; // SCSS faylı import edilir

const Input = ({ type, errorMessage, touched, placeholder, ...formProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Placeholderin aktiv olması üçün dəyərin olub-olmamasını yoxla
  const isActive = isFocused || (formProps.value && formProps.value.length > 0);

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles.label}>
        <input
          type={type}
          className={`${styles.input} ${touched && errorMessage ? styles.error : styles.valid}`}
          required
          {...formProps}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {type !== "datetime-local" && (
          <span className={`${styles.placeholder} ${isActive ? styles.active : ""}`}>
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className={styles["error-message"]}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
