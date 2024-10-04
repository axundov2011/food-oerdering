import { ErrorMessage, useFormik } from "formik";
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
    <div className="container  mx-auto py-3">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Admin Login</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col w-full gap-y-3 mt-6">
            <button className="btn-primary">LOGIN</button>
            <button className="btn-primary !bg-secondary">
              <i className="fa-brands fa-github"></i>GITHUB
            </button>
            <Link href="/" className="">
              <span className="text-sm underline cursor-pointer text-secondary">
                Home Page
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
