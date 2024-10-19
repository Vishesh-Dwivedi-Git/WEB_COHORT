

function MakeCard({children}){
    return (
        <div className="p-2 flex flex-col justify-evenly items-center bg-gradient-to-r from-green-600 via-lime-800 to-lime-950 border border-stone-200 rounded-lg text-white h-[400px] w-[400px]">
          <h1 className="text-bold font-serif">Hello Welcome to the Card</h1>
            {children}
        </div>
    )
}

function Children(){
    return(
    <MakeCard>
        <div >
            <p className=" text-bold font-semibold">Hello i am vishesh Dwivedi @Google</p>
            <p className=" text-bold font-semibold">Opening and Working on a Start Up</p>
        </div>
    </MakeCard>);
}

export default Children

