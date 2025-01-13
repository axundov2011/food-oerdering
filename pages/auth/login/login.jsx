import { useFormik } from "formik";
import styles from "./login.module.scss";
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

    console.log("Errors:", errors);
console.log("Touched:", touched);
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
            <button className={styles.btnPrimary}>Login</button>
            <button className={`${styles.btnPrimary} ${styles.btnSecondary}`}>
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

export default Login;
