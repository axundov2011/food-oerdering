import Image from "next/image";
import styles from "./index.module.scss";

import { useState } from "react";
import Account from "@/components/profile/account";
import Password from "@/components/profile/password";
import Order from "../../components/profile/order/index";

const Profile = () => {
    const [tabs, setTabs] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.profileHeader}>
          <Image
            src="/images/aykhan.jpg"
            alt="John Doe"
            width={100}
            height={100}
          />
          <b>Aykhan Akhundov</b>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem} onClick={() => setTabs(0)}>
            <i className="fa fa-home"></i>
            <button>Account</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(1)}>
            <i className="fa fa-key"></i>
            <button>Password</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(2)}>
            <i className="fa fa-motorcycle"></i>
            <button>Orders</button>
          </li>
          <li className={styles.menuItem} onClick={() => setTabs(3)}>
            <i className="fa fa-sign-out"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
      {tabs === 0 && (
         <Account />
      )}
      {tabs === 1 && (
        <Password/>
      )}
      {tabs === 2 && (
        <Order/>
      )}
      </div>
    </div>
  );
};

export default Profile;
