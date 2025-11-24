export const Week =()=> {
    return (
        <div className="p-4">
            <div className="border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2">
                <div className="bg-gray05 p-1 rounded min-2-[78px] text-center h-fit">
                    <span>Monday</span>
                    <div className="flex justify-center items-center">
                        <span className="text-4xl">24</span>
                        <span 
                        style={{writingMode:"vertical-lr"}} 
                        className="text-xs font-medium">
                            Nov
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                    <span className="border border-black px-2 rounded bg-gray03 inline-block h-fit">Task one</span>
                    <span className="border border-black px-2 rounded bg-gray03 inline-block h-fit">Task two</span>
                    <span className="border border-black px-2 rounded bg-gray03 inline-block h-fit">Task three</span>
                    <span className="border border-black px-2 rounded bg-gray03 inline-block h-fit">Task four</span>
                </div>
            </div> 
        </div>
    );
};