import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import axios from "axios";

const Category = () => {
  // const categoryList = ["Pizza", "Hamburger", "Drink"];
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    const getCategories = async() => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res?.data);
        console.log(res.data, 'res');
      } catch (err) {
        console.log(err);
      }
    };
   
    getCategories();
  }, [])

  const createCategories = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {title: inputText});
      console.log(res.data, 'res');
      
      setCategories((prevCategories) => [...prevCategories, res.data])

      setInputText("")
      console.log(res.data, 'res');
    } catch (error) {
      
    }
  }
  
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className={styles.container}>
      <Title>Category</Title>
      <section className={styles.categorySectionWrapper}>
        <Input placeholder="Add a new Category"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        />
        <button className="btn-primary" 
        onClick={createCategories}>Add</button>
      </section>
      <div className={styles.categoryList}>
        <div className={styles.categoryLeft}>
          <ul>
            {categories.map((category) => (
              <li key={category._id}  className={styles.categoryItem}>
                <span>{category.title}</span>
                <button className="btn-primary !bg-red" onClick={(e) => handleDelete(e, category._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
