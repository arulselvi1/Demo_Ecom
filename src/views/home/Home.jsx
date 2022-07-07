import React, { Fragment } from "react";
import Header from "@Components/header/Header";
import Footer from "@Components/footer/Footer";
import AppLayout from "../../app/appProvider/AppLayout";
import Button from "../../commonUI/button/Button";
import ImageEXP from "../../components/Image/ImageEXP";


const Home = () => {
  return (
    <>
    <AppLayout>
      <h2>Home</h2>
     <Button/>
     <ImageEXP />
    </AppLayout>
    </>
  );
};

export default Home;
