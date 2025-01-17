import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContainer from "../Containers/MainContainer";
import Home from "../Home/Home";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log({ pathname });
  return (
    <div
    //   className={` ${
    //     pathname === "/"
    //       ? "bg-yellow-500"
    //       : pathname === "/donation"
    //       ? "bg-red-600"
    //       : " bg-cyan-300"
    //   }`}
    >
      <MainContainer>
        <div
        className=" min-h-screen"
        //   className={` min-h-screen 
        //     ${
        //     pathname === "/"
        //       ? "bg-yellow-500"
        //       : pathname === "/donation"
        //       ? "bg-red-600"
        //       : " bg-cyan-300"
        //   }
        //   `}
        >
          
          <Outlet />
        </div>
        <Footer />
      </MainContainer>
    </div>
  );
};

export default Root;
