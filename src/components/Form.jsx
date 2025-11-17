
export const Form =()=> {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="text-5xl font-semibold">Welcome Back</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details.</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your Password"
                    />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Remember for 30 days</label>
                    </div>
                    <button className="font-medium text-base text-violet-500">Forget password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 bg-violet-500 text-white text-lg font-bold rounded-xl">Sign in</button>
                    <button className="flex py-3 rounded-xl border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51
                        5.3 2.56 13l7.98 6.19C12.43 13.09 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.5 24c0-1.62-.15-3.18-.43-4.68H24v9.36h12.65c-.55 2.98-2.23 5.5-4.75 7.19l7.31 
                        5.66C43.85 37.78 46.5 31.36 46.5 24z"/>
                        <path fill="#FBBC05" d="M10.54 28.19c-.48-1.44-.74-2.98-.74-4.69 0-1.7.26-3.25.74-4.69L2.56 13C.92 16.29 0 
                        20.03 0 24s.92 7.71 2.56 11l7.98-6.81z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.81l-7.31-5.66c-2.02 1.36-4.61 2.16-8.59 
                        2.16-6.26 0-11.57-3.59-13.46-8.69L2.56 35C6.51 42.7 14.62 48 24 48z"/>
                        </svg>                  
                        Sign in with Google
                    </button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">Dont have an account?</p>
                    <button className="text-violet-500 text-base font-medium ml-2">Sign up</button>
                </div>
            </div>
        </div>
    );
};