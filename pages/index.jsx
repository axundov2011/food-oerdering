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

      <Home />
      <Footer/>
    
    </div>
  );
}
