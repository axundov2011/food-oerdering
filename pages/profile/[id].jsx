import Image from "next/image";
import styles from "./index.module.scss";

import { useEffect, useState } from "react";
import Account from "@/components/profile/account";
import Password from "@/components/profile/password";
import Order from "../../components/profile/order/index";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { notFound, redirect } from "next/navigation";

const Profile = ({user}) => {
    const {data: session} = useSession();
    const [tabs, setTabs] = useState(0)
    const {push} = useRouter()

    const handleSignOut = () => {
      try {
        if(confirm("Are you sure want to sign out?")){
          signOut({redirect: false});
          push("/auth/login/login");
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if(!session){
        push("/auth/login/login");
      }
    }, [session, push])

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
          <b>{user?.fullName}</b>
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
          <li className={styles.menuItem} onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
      {tabs === 0 && (
         <Account user={user} />
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

export async function getServerSideProps({ req, params }) {
 
  const session = await getSession({req});
  if(!session){
    return {
      redirect: {
        destination: "/auth/login/login",
        permanent: false,
      }
    }
  }
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );



 
   return {
     props: {
       session,
       user: user ? user.data : null,
     },
   };
 }
export default Profile;
