import { useFormik } from "formik";
import styles from "./register.module.scss";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { registerSchema } from "@/schema/register";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Register = () => {
  const {push} = useRouter();
  const onSubmit = async (values, actions) => {
   try {
    const res  = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,values);
    
    console.log(res);
    if(res.status === 200){
      toast.success("User created successfully");
      push("/auth/login/login");
    }
   } catch (error) {
    toast.error(error.response.data.message);
    console.log(error)
   }
    actions.resetForm();
  };
  

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

    const inputs = [
      {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Your Full Name",
        value: values.fullName,
        errorMessage: errors.fullName,
        touched: touched.fullName,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Your email address",
        value: values.email,
        errorMessage: errors.email,
        touched: touched.email,
      },
     
      {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Your Passowrd",
        value: values.password,
        errorMessage: errors.password,
        touched: touched.password,
      },
      {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Your Passowrd Again",
        value: values.confirmPassword,
        errorMessage: errors.confirmPassword,
        touched: touched.confirmPassword,
      },
      
     
     
    ];

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Title addClass={styles.title}>Register</Title>
        <div className={styles.inputGroup}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary} type="submit">Register</button>
            <Link href="/auth/login/login" className={styles.link}>
              <span>Dont have an account?</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
