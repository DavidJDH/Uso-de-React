import {CardList} from "../components/CardList"

export const Home = ()=> {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100 text-white" style={{backgroundImage:"url('https://wallpapercave.com/wp/wp2465923.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100%"}}> 
            <div className="bg-white py-9 px-15 rounded-4xl mx-auto w-full max-w-3xl">
                <h1 className="text-black text-3xl font-bold text-center mb-8">React 19 - Practica</h1>
            <CardList/>
            </div>
            
        </main>
    );
}