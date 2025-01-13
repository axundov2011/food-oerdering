import { ErrorMessage, useFormik } from "formik";
import styles from "./index.module.scss";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import Link from "next/link";
import { adminSchema } from "@/schema/admin";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text ",
      placeholder: "Your userName",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
    },
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your passwordx address",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Title addClass={styles.title}>Admin Login</Title>
        <div className={styles.inputGroup}>
          {inputs.map((input) => (
            <Input
              className={styles.input}
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
            <button className={styles.btnPrimary}>Admin Login</button>
            <button className={`${styles.btnPrimary} ${styles.btnSecondary}`}>
              <i className="fa-brands fa-github"></i> GITHUB
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

export default Login;
