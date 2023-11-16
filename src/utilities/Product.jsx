import React from "react";
import LineChart from "./ProductsHub/lineCharts";
import PieChart from "./ProductsHub/pieChart";
import Header from "./ProductsHub/Header";
import Courses from "./ProductsHub/Course";
import Features from './ProductsHub/FeaturesMentor';
import Material from "./ProductsHub/Material";
import Opportunity from "../pages/Opportunity";
import Sidebar from "../components/Sidebar";

const Product = () => {
  return (
    <div className="h-screen w-full flex justify-start items-start">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%]  pt-8">
        <Header />
        <div className="flex gap-10">
          <PieChart />
          <LineChart />
        </div>
        <Courses />
        <Features />
        <Opportunity />
        <Material />
      </div>
    </div>
  );
};

export default Product;
