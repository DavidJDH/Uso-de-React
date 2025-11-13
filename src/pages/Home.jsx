import {CardList} from "../components/CardList"

export const Home = ()=> {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white" style={{backgroundImage:"url('https://b2995878.smushcdn.com/2995878/wp-content/uploads/2023/09/Why-we-use-ReactJS-for-our-projects-Illustration.jpg?lossy=2&strip=0&webp=1')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100%"}}> 
            <div className="bg-stone-400 mx-auto w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-8">React 19 - Teoria</h1>
            <CardList/>
            </div>
            
        </main>
    );
}