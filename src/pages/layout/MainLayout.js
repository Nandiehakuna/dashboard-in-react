import React from "react";

import { Outlet } from "react-router-dom";

const MainLayout = () =>
   <section className='app'>
    <Outlet/>
   </section>

export default MainLayout