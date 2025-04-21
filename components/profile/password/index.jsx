import React from 'react'
import Title from '../../ui/Title'
import Input from '../../form/Input'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import { newPassword } from '@/schema/register'
import axios from 'axios'

const Password = ({user}) => {
    const onSubmit = async (values, actions) => {
        try {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
          console.log(res.data, 'res');
          
        } catch (err) {
          console.log(err)
        }
        actions.resetForm();
        console.log('values',values)
      };
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
       useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPassword,
    });
    const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id: 2,
          name: "confirmPassword",
          type: "password",
          placeholder: "Your confirmPassword",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        }
      ];
    
  return (
    <div>
         <form className={styles.formContainer} onSubmit={handleSubmit}>
  <Title addClass={styles.title}>Password</Title>
  <div className={styles.formGrid}>
    {inputs.map((input) => (
      <Input
        key={input.id}
        {...input}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    ))}
  </div>
  <button type="submit">Update</button>
</form>

    </div>
  )
}

export default Password