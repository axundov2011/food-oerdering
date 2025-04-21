import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";
import styles from "./index.module.scss";
import Title from "@/components/ui/Title";

const AddProduct = ({ setAddPorductModal }) => {
  return (
    <div className={styles.productModal}>
      <OutsideClickHandler onOutsideClick={() => setAddPorductModal(false)}>
        <div className={styles.outsideClickHandler}>
          <div className={styles.modalContent}>
            <Title className={styles.modalTitle}>Add a New Product</Title>
            <div>
              <div>
                <span className="font-semibold">Choose an image </span>
                <input type="file" />
              </div>
              <div className={styles.listItem}>
                <label htmlFor="">Title</label>
                <input
                  className={styles.inputField}
                  type="name"
                  placeholder="Write a title"
                />
              </div>
              <div className={styles.listItem}>
                <label htmlFor="">Description</label>
                <textarea
                  className={styles.inputField}
                  type="name"
                  placeholder="Write a description"
                />
              </div>
              <div className={styles.listItem}>
                <label htmlFor="">Categories</label>
                <select
                  className={styles.inputField}
                  type="name"
                  placeholder="Write a description"
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="flex flex-col text-sm mt-4">
                <label htmlFor="">Prices</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 "
                    placeholder="small"
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 "
                    placeholder="medium"
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 "
                    placeholder="large"
                  />
                </div>
            </div>
            <div className="flex flex-col text-sm mt-4 w-full">
            <label htmlFor="">Prices</label> 
                <div className="flex gap-6 w-full md:flex-nowrap flex-wrap ">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 "
                    placeholder="item"
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 "
                    placeholder="price"
                  />
                  <button className="btn-primary ml-auto">Add</button>
               
                </div>
                <div className="mt-2">
                  <span className="inline-block border border-orange-500 text-orange-300  p-1 rounded-xl text-xs">ketçap</span>
                </div>
                <div className="flex justify-end">
                  <button className="btn-primary !bg-success">Create</button>
                </div>
            </div>
            </div>
            <button
              className={styles.cancelButton}
              onClick={() => setAddPorductModal(false)}
            >
              <GiCancel size={30} className="transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
