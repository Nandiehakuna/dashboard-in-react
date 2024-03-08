import { BrowserRouter, Route,Routes  } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage";
import Header from "../components/Header";
import MainLayout from "../pages/layout/MainLayout";
import IndexPage from "../pages/home/IndexPage";

const GuestRoutes =()=>{
    return(
        <BrowserRouter >
            <Routes>
            <Route path="/" exact element={<MainLayout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            </Routes>
        </BrowserRouter >

    )

}
export default GuestRoutes;