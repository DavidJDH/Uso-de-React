import { BtnVolver } from "../components/ui/buttons/BtnVolver";
import { Header } from "../components/Header";
import { Day } from "../components/Day";
import { ListTasks } from "../components/ListTasks";
import { FormT } from "../components/FormT";
import { useState } from "react";
import { Month } from "../components/Month";
import { Yeark } from "../components/Yeark";
import { Week } from "../components/week";



export const TodoList =()=> {
    const [dateM, setDateM] = useState(new Date());
    const [tasks, setTasks] = useState([]);
    const [tab, setTab] = useState("day");

    return (
        <main>
            <BtnVolver/>
            <h1 className="text-4xl flex justify-center items-center">Todo List</h1>
            <div className="bg-gray03 text-white"> 
            <Header tab={tab} setTab={setTab}/>
            {tab === "day" &&  <>
                <Day/>
                <FormT/>
                <ListTasks/>  
            </>}
            {tab === "week" &&  <>
                <Week/>
            </>}
            {tab === "month" &&  <>
                <Month/>
            </>}
            {tab === "year" &&  <>
                <Yeark/>
            </>}

            </div>
        </main>
    );
};