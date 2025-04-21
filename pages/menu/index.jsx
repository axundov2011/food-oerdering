import MenuWrappers from "@/components/products/meniwrapper";
import axios from "axios";
import React from "react";

const index = ({categoryList}) => {
  return (
    <div className="pt-10">
      <MenuWrappers categoryList={categoryList} />
    </div>
  );
};

export default index;

export const  getServerSideProps = async() => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  }
}
