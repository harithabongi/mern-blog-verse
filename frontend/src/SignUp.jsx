import React from 'react'
const SignUp = () => {
    return (
        <div className="flex justify-center flex-col items-center mt-10 gap-5">
            <h1 className='text-2xl font-bold text-blue-600'>Join Blogverse</h1>
            <p className='text-xl text-gray-600 text-center font-bold'>create your account and <br></br>start your Blogging jouerney</p>
            <form className='flex flex-col border-1 border-black w-[25%] px-3 py-7 items-center gap-5'>

                <div className="w-[98%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder='Enter your full name' className='border-1 border-gray-700 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-700'>
                    </input>



                </div>
                <div className="w-[98%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email" placeholder='Enter your  email' className='border-1 border-gray-700 w-full py-3 px-3 rounded-2xl focus:outline-none focus:border-purple-700'>
                    </input>



                </div>
                <div className="w-[98%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder='Enter your password' className='border-1 border-gray-700 w-full py-3 px-3 rounded-2xl focus:outline-none focus:border-purple-700'>
                    </input>



                </div>
                <div className="w-[98%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input type="password" placeholder='Enter your password' className='border-1 border-gray-700 w-full py-3 px-3 rounded-2xl focus:outline-none focus:border-purple-700'>
                    </input>



                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5 ' />
                    <p> I agree to the terms of service and privacy policy</p>


                </div>

                <button className='border-1 bg-purple-500 w-[90%] py-4 text-white rounded-xl font-bold  '>create account</button>
                <div className=" border-[0.5px] border-gray-400 w-[90%] mt-4">
                </div>
                <p className='text-gray-700 font-semibold '>already have an account?<span className='text-purple-500 ml-2'>sign in</span></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer">back to home</button>
            </form>

        </div>

    )
}
export default SignUp;