import Image from "next/image";
import styles from "./index.module.scss";

import { useState } from "react";
import Password from "@/components/profile/password";
import Order from "@/components/profile/order/index";
import { RiAdminFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { IoIosKey } from "react-icons/io";
import { RiContactsBook2Line } from "react-icons/ri";

import Poruducts from "@/components/admin/products";
import Category from "@/components/admin/category";
import Footer from "@/components/admin/footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import AddProduct from "@/components/admin/addProduct";


const Profile = () => {
    const [tabs, setTabs] = useState(0)
    const {push} = useRouter()
    const [addPorductModal, setAddPorductModal] = useState(false)
    const closeAdminAccount = async () => {
      try {
        if(confirm("Are you sure want to close your Admin Account?")){
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`)
          if(res.status === 200){
            push("/admin");
            toast.success("Admin Account Closed!");
          }
        } 
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.profileHeader}>
          <RiAdminFill
            className={styles["admin-icon"]}
          />
          <b>Admin</b>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem} onClick={() => setTabs(0)}>
            <GiForkKnifeSpoon className="fa fa-home" />
            <button>Products</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(1)}>
            <i className="fa fa-motorcycle"></i>
            <button>Orders</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(2)}>
            <BiCategory className="fa fa-key" />
            <button>Category</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(3)}>
            <IoIosKey className="fa fa-key" />
            <button>Password</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(4)}>
            <RiContactsBook2Line className="fa fa-key" />
            <button>Footer</button>
          </li>
          
          <li className={styles.menuItem} onClick={closeAdminAccount}>
            <i className="fa fa-sign-out"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
    
      {tabs === 0 && <Poruducts />}
      {tabs === 1 && <Order/>}
      {tabs === 2 && <Category/>}
      {tabs === 3 && <Password/>}
      {tabs === 4 && <Footer/>}
    {addPorductModal && <AddProduct setAddPorductModal
    ={setAddPorductModal} />}
   <button className={styles.button} onClick={() => setAddPorductModal(true)}>
    +
</button>
      </div>
    </div>
  );
};
export const getServerSideProps =  (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  
  if(myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      }
    }
  }
  return {
    props: {},
  }
  }
export default Profile;
