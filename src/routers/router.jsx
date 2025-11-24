import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseEffectP } from "../pages/UseEffectP";
import { Page404 } from "../pages/Page404";
import { ImagenesPages } from "../pages/ImagenesPages";
import { TodoList } from "../pages/TodoList";
import { Singup } from "../pages/Singup";


export const MyRoutes = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path= "/UseEffectP" element={<UseEffectP/>}/>
        <Route path ="/ImagenesPages"  element = {<ImagenesPages/>}/>
        <Route path ="/Login"  element = {<Login/>}/>
        <Route path = "/TodoList" element = {<TodoList/>}/>
        <Route path = "/Singup" element = {<Singup/>}/>
        <Route path = "*" element = {<Page404/>}/>
    

    </Routes>
    </BrowserRouter> 
)