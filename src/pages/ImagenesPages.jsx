import ImagenLocal from "../assets/base.jpg";
import { BtnVolver } from "../components/ui/buttons/BtnVolver"

export const ImagenesPages =()=> {
    return (
        <div className="max-w-3xl mx-auto p-6 gap-10">
            <BtnVolver/>
            <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>
            
            <section className="gap-2">
                <h2 className="text-xl font-semibold mt-6">Imagenes Locales</h2>
                <img src={ImagenLocal} alt="Imagen de centro de datos" />
            </section>

            <section className="gap-2">
                <h2 className="text-xl font-semibold mt-6">Imagenes Externa</h2>
                <img src="https://concepto.de/wp-content/uploads/2018/04/base-de-datos-min-e1523470727712-800x414.jpg" alt="Imagen de centro de datos" />
            </section>

            <section className="gap-2">
                <h2 className="text-xl font-semibold mt-6">Imagenes de Fondo</h2>
                <div className="h-64 bg-cover bg-center rounded-2xl items-center justify-center flex" style={{backgroundImage:"url('https://img.datacentermarket.es/wp-content/uploads/2025/01/16115523/Bases-de-datos-como-Servicio-3.jpeg')"}}>
                <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">Fondo con texto encima</span>
                </div>
            </section>
        </div>
    );
};