import { More } from "./icons/more";

export const ListTasks =()=> {
    return (
        <section className="max-w-[450px] m-auto pb-7 pt-1 px-4">
            <div className="flex justify-between gap-4 items-center my-4">
                <span className="cursor-pointer flex items-center">
                    <input 
                    type="checkbox"
                    className="checkbox" />
                </span>
                <p className="grow text-left">New task Name</p>
                <span className="cursor-pointer"><More/></span>
            </div> 
        </section>
    );
};