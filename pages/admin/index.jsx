"use client";
import { useFormik } from "formik";
import styles from "./index.module.scss";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import Link from "next/link";
import { adminSchema } from "@/schema/admin";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {

  const {push} = useRouter();
  const onSubmit = async (values, actions) => {
    console.log(" Form submit edildi!", values); 
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
      console.log(" Serverdən cavab alındı:", res.data);
      
      if (res.status === 200) {
        console.log(res.data);
        actions.resetForm();
        toast.success("Admin  Login successful");
        push("/admin/profile");
      }
    } catch (error) {
      console.error(" Login xətası:", error);
      toast.error(error?.response?.data?.message || "An unexpected error occurred.");
    }
  };
  

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your userName",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} onClick={() => console.log("Buttona basıldı!")}>
        <Title addClass={styles.title} className={styles.title}>Admin Login</Title>
        <div className={styles.inputGroup}>
          {inputs.map((input) => (
            <Input
              className={styles.input}
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={input.placeholder}
              errorMessage={input.errorMessage}
              touched={input.touched}
            />
          ))}
          <div className={styles.buttonGroup} >
            <button className={styles.btnPrimary} type="submit">
               Login
            </button>

            <button className={`${styles.btnPrimary} ${styles.btnSecondary}`} type="submit">
              <i className="fa-brands fa-github" ></i> GITHUB
            </button>
            <Link href="/" className={styles.link}>
              <span>Home Page</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps =  (ctx) => {
const myCookie = ctx.req?.cookies || "";

if(myCookie.token === process.env.ADMIN_TOKEN) {
  return {
    redirect: {
      destination: "/admin/profile",
      permanent: false,
    }
  }
}
return {
  props: {},
}
}
export default Login;
  