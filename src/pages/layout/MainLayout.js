import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () =>
   <section className='app'>
    <Outlet/>
   </section>

export default MainLayout