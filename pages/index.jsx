import Header from "@/components/layout/Header";
import Home from "./home";
import Input from "@/components/form/Input";
import Footer from "@/components/layout/Footer";

export default function Index() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      /> */}
      <Home />
      <Footer/>
    
    </div>
  );
}
