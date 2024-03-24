import { Outlet } from "react-router-dom";
import Footer from "../homes/footers/Footer";
import Header from "../headers/Header";


const Root = () => {
    return (
      <div>
        <div className="max-w-6xl mx-auto ">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;