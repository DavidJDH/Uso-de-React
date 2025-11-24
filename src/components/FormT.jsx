import { Text } from "./icons/Text";

export const FormT =()=> {
    return (
        <section className="max-w-[450px] m-auto my-3 px-4">
            <div className="boder border-black rounded bg-gray04 flex items-center p-2">
                <span className="text-gray02 mr-2"><Text/></span>
                <form className="w-full">
                    <input type="text" className="w-full bg-transparent outline-none" placeholder="Add a task..."/>
                </form>
            </div>
        </section>
    );
};