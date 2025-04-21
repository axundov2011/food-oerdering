import { useFormik } from "formik";
import styles from "./login.module.scss";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import Link from "next/link";
import { loginSchema } from "@/schema/login";
import { getSession, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const {data: session} = useSession();
  const {push} = useRouter();
  const [currentUser, setCourrentUser] = useState(null);

  const onSubmit = async (values, actions) => {
    const {email, password} = values;
   try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res, "res");
    if(res.error){
      console.log("Login error:", res.error);

    } else {
      console.log("Login successful:", res);
    }
    actions.resetForm();
   } catch (error) {
    console.log(error)
   }

  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCourrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && push("/profile/" + currentUser?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push, currentUser]);

  

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your email address",
      value: values.email,
      errors: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: values.password,
      errors: errors.password,
      touched: touched.password,
    },
    
  ];

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Title addClass={styles.title}>Login</Title>
        <div className={styles.inputGroup}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={input.placeholder}
              errorMessage={input.errors}
              touched={input.touched}
            />
          ))}
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary} type="submit">Login</button>
            <button className={`${styles.btnPrimary} ${styles.btnSecondary}`} type="button" onClick={() => signIn("github")}>
              <i className="fa-brands fa-github"></i> GITHUB
            </button>
            <Link href="/auth/register/register" className={styles.link}>
              <span>Dont have an account? Register</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};


 export async function getServerSideProps({ req }) {
   const session = await getSession({ req });

   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
   const user = await res.data?.find((user) => user.email === session?.user.email);
 
   console.log(user, "user");
   if (session && user) {
     return {
       redirect: {
         destination: "/profile/" + user._id,
         permanent: false,
       },
     };
   }
 
   return {
     props: {
      
     },
   };
 }

export default Login;
