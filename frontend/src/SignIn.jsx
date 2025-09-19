
const SignIn = () => {
    return (
    <div className=" flex justify-center items-center align-middle mt-20  ">
        <div className="flex justify-center flex-col items-center mt-5 gap-3 border-1 border-black w-[30%] h-[700px] bg-blue-50" >
            <h1 className="text-3xl text-center font-bold">sign in</h1>
            <p className="text-gray-600 text-center mt-2">access your account</p>
            <form className=" 'flex flex-col px-2 py-3   justify-center mt-6 w-[80%] " >
                <div className="flex flex-col  gap-3  mt-1 ">
                    <h1 className="text-xl">Email Address</h1>
                    <input type="text" placeholder="sample@gmail.com" className="border-1 border-black  py-3 px-6 rounded-2xl w-full" />
                </div>
                <div className="flex flex-col gap-3 mt-6 ">
                    <h1 className="text-xl ">Password</h1>
                    <input type="text" placeholder="sample123" className=" border-1 border-black  py-3 px-6 rounded-2xl w-full" />
                </div >
                <div className="flex  justify-around  items-center mt-4">
                    <div className="flex">
                        <input type="checkbox" className="h-4 w-4 " />
                        <p>Remember me</p>
                    </div>
                    <div>
                        <h1 className="text-blue-600">Forgot password?</h1>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center mt-10 gap-5">
                <button className="text-white border-1 bg-blue-600 border-black w-full justify-center flex flex-col items-center hover:bg-blue-800"> Sign In
                </button>
                </div>
                <div className=" border-[0.5px] border-gray-400 w-[90%] mt-8">
                </div>
                <div className=" flex items-center justify-center mt-4">
                    <p className="text-gray-600 font-semibold">Don't have an account? <button className="text-blue-500 hover:text-blue-700">create one here </button></p></div>



            </form>

        </div>
        </div>

    )


}
export default SignIn;