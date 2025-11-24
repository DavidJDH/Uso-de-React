import { BtnVolver } from "../components/ui/buttons/BtnVolver";
import { FormRegis } from "../components/FormRegis";

export const Singup =()=> {
    return (
        <div className="flex w-full h-screen bg-gray-100">
            <BtnVolver/>
            <FormRegis/>
        </div>
    );
};