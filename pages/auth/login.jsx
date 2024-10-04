import { ErrorMessage, useFormik } from "formik";
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
      placeholder: "Your passwordx address",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container  mx-auto">
      <form className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
      onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
         <div className="flex flex-col w-full gap-y-4 mt-6">
         <button className="btn-primary">Login</button>
          <button className="btn-primary !bg-secondary">
            <i className="fa-brands fa-github"></i>GITHUB
          </button>
          <Link href="/auth/register" className="">
            <span className="text-sm underline cursor-pointer text-secondary">Do you have a account?</span>
          </Link>
         </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
