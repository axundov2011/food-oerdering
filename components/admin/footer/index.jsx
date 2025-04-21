import Input from "@/components/form/Input";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";

const Footer = () => {
        const [iconName, setIconName] = useState("")
        const [location, setLocation] = useState("")
        const [icons, setIcons]  = useState([]);

        const iconMap = {
          facebook: <FaFacebook />,
          twitter: <FaTwitter />,
          instagram: <FaInstagram />,
        }

        const addIcon = () => {
          if(iconMap[iconName.toLowerCase()]){
            setIcons([...icons, iconMap[iconName.toLowerCase()]])
            setIconName("")
          }
        }
      const onSubmit = async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          actions.resetForm();
        };

      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
         useFormik({
        initialValues: {
          location: "",
          email: "",
          phonNumber: "",
          desc: "",
          day: "",
          time: "",
        },
        onSubmit,
        validationSchema: footerSchema,
      });

      const inputs = [
          {
            id: 1,
            name: "location",
            type: "text",
            placeholder: "Your Location",
            value: values.location,
            errorMessage: errors.location,
            touched: touched.location,
          },
          {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
          },
          {
            id: 3,
            name: "phonNumber",
            type: "number",
            placeholder: "Your Phone number",
            value: values.phonNumber,
            errorMessage: errors.phonNumber,
            touched: touched.phonNumber,
          },
          {
            id: 4,
            name: "desc",
            type: "text",
            placeholder: "Write a Description",
            value: values.desc,
            errorMessage: errors.desc,
            touched: touched.desc,
          },
          {
            id: 5,
            name: "day",
            type: "date",
            placeholder: "Write a Day",
            value: values.day,
            errorMessage: errors.day,
            touched: touched.day,
          },
          {
            id: 6,
            name: "time",
            type: "text",
            placeholder: "Write a Time",
            value: values.time,
            errorMessage: errors.time,
            touched: touched.time,
          },
        ];
      

      const iconDelete = (id) => {
        setIcons(icons.filter((_, index) => index !== id))
      }
        console.log(values, 'values')
        console.log(icons, 'icons')
        console.log(iconName, 'iconName')
        console.log(location, 'location')
  return (
    <div className={styles.footerSectionWrapper}>
      <Title>Footer</Title>
      <div className={styles.footerWrapper}>
        {
          inputs.map((input) => (
            <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onSubmit={handleSubmit}
            values={values}
            />
          ))
        }
      </div>

      <div className={styles.footerAddLink}>
        <div className={styles.inputGroup}>
          <Input
            onChange={(e) => {
              setLocation(e.target.value)
              setLocation("")
            }}
            defaulValue="https://"
            type="text"  
            placeholder="Link Address"
          />
          <Input
            onChange={(e) => setIconName(e.target.value)}
            value={iconName}
            type="text"
            placeholder="Icon Name"
          />
          <button className="btn-primary" onClick={addIcon}>Add</button>
        </div>
        <div className={styles.iconWrapper}>
          {
            icons.map((item, index) => (
              <div className={styles.iconItem} key={index}>
              {item}
              <MdDelete onClick={() => iconDelete(index)} className={styles.delete} />
            </div>
            ))
          }
        </div>
      </div>
      <div className={styles.updateWrapper}>
        <button className="btn-primary">Update</button>
      </div>
    </div>
  );
};

export default Footer;
