import Header from "@/components/layout/header";
import Home from "./home";
import Input from "@/components/form/Input";
import Footer from "@/components/layout/footer/Footer";
import axios from "axios";

export default function Index({categoryList}) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <Home categoryList={categoryList} />
     
    </div>
  );
}

export const  getServerSideProps = async() => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  }
}
