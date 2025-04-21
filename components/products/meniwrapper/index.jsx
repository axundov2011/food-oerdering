import React, { useState } from "react";
import Title from "../../ui/Title";
import MenuItem from "../menuItem";
import styles from "./index.module.scss";

const MenuWrappers = ({ categoryList }) => {
  const [categoryActive, setCategoryActive] = useState(0);
  return (
    <div className={styles["menu-wrapper"]}>
      <Title addClass={styles.title}>Our Menu</Title>

      <div >
        {categoryList &&
          categoryList.map((category, index) => (
            <button
              className={`px-6 py-2 rounded-3xl ${
                index === categoryActive && "bg-secondary text-white"
              }`}
              key={category._id}
              onClick={() => setCategoryActive(index)} 
            >
              {category.title}
            </button>
          ))}
      </div>

      <div className={styles["menu-grid"]}>
        {categoryList?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuWrappers;
