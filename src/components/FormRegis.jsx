export const FormRegis =()=> {

        const handleSubmit = (e) =>{
            e.preventDefault();
        }
    return (

        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="mb-1 text-4xl flex items-center justify-center">Sing up now</h1>
            <h2 className="mb-10 text-sm flex items-center justify-center">Create a free account</h2>

            <div className="flex flex-col gap-1">
                <form action="formulario" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-between">
                        <h2>Nombre</h2>
                        <input type="text" placeholder="Ingrese su nombre" className="border-2"/>
                        <h2>Correo</h2>
                        <input type="email" placeholder="Ingrese su Email" className="border-2"/>
                        <h2>Contraseña</h2>
                        <input type="password" placeholder="Ingrese una contraseña" className="border-2"/>
                    </div>
                    <div className="">
                        <button className="w-30 py-2 bg-violet-500 text-white font-bold rounded-xl flex items-center justify-center mt-3" type="submit">Crear</button>
                    </div>

                </form>
            </div>
        </div>
    );
};