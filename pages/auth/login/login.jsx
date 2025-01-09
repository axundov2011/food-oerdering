import { ErrorMessage, useFormik } from "formik";
import styles from './login.module.scss'; // Sass modulu importu
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import Link from "next/link";
import { loginSchema } from "@/schema/login";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

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
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 1,
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
      <form className={`${styles.form} ${styles.flexColumn}`} onSubmit={handleSubmit}>
        <Title addClass={styles.title}>Login</Title>
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
            <button className={`${styles.btnPrimary}`}>Login</button>
            <button className={`${styles.btnPrimary} ${styles.btnSecondary}`}>
              <i className="fa-brands fa-github"></i>GITHUB
            </button>
            <Link href="/auth/register" className={styles.link}>
              <span>Do you have an account?</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
