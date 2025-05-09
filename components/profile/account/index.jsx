import React, { useEffect } from 'react'
import Title from '../../ui/Title'
import Input from '../../form/Input'
import styles from './index.module.scss'
import { profileSchema } from '@/schema/profile'
import { useFormik } from 'formik'
import axios from 'axios'
const Account = ({user}) => {
  
  console.log(user, 'user');
  
    const onSubmit = async (values, actions) => {
        try {
          console.log("Submitting values:", values);
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
          console.log(res.data, 'res')
        } catch (err) {
          console.log(err, 'err')
        }
        actions.resetForm();
      };

 
      
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
       useFormik({
      initialValues: {
        fullName: user?.fullName || "",
        phoneNumber: user?.phoneNumber || "",
        email: user?.email || "",
        address:  user?.address || "",
        job: user?.job || "",
        bio: user?.bio || "",
      },
      onSubmit,
      validationSchema: profileSchema,
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
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
          value: values.phoneNumber,
          errorMessage: errors.phoneNumber,
          touched: touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Your Address",
          value: values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
        {
          id: 5,
          name: "job",
          type: "text",
          placeholder: "Your Job",
          value: values.job,
          errorMessage: errors.job,
          touched: touched.job,
        },
        {
          id: 6,
          name: "bio",
          type: "text",
          placeholder: "Your Bio",
          value: values.bio,
          errorMessage: errors.bio,
          touched: touched.bio,
        },
      ];
    
  return (
    <div>
         <form className={styles.formContainer} onSubmit={handleSubmit}>
  <Title addClass={styles.title}>Account Settings</Title>
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
  <button  type="submit">Update</button>
</form>

    </div>
  )
}

export default Account