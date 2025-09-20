import React from 'react'
import NavBar from "./NavBar.jsx"
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';
const SignUp = () => {
    const [formData, setformData] = useState(
        {
            fullname: "",
            email: "",
            password: "",
            confirmpassword: ""


        }
    )
    const [errors, seterrors] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""



    })
    const [error, seterror] = useState("");
    const [success, setsuccess] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        let newerrors = {}


        if (!formData.fullname) {
            newerrors.fullname = "please enter your fullname"
        }
        if (!formData.email) {
            newerrors.email = "please enter your email"
        }


        if (!formData.password) {
            newerrors.password = "please enter your password"
        }
        if (!formData.confirmpassword) {
            newerrors.confirmpassword = "please confirm you password"
        } else if (formData.password !== formData.confirmpassword) {
            newerrors.confirmpassword = "your password doesn't match"
        }
        if (objects.keys(newerrors).length > 0) {
            seterrors(newerrors);
        }
        else {
            setsuccess("your account is created successfully");
            setformData({
                fullname: "",
                email: "",
                password: "",
                confirmpassword: ""

            })
        }
    }

  {/*}  if (!formData.fullname || !formData.email || !formData.password || !formData.confirmpassword) {
        seterror("please fill all the feilds")
    } else if (formData.password !== formData.confirmpassword) {
        seterror("your password is wrong")
    } else {
        setsuccess("your account is created")
        seterror("")
        setformData({

            fullname: "",
            email: "",
            password: "",
            confirmpassword: ""



        })

    }*/}


const [showPassword, setshowPassword] = useState(false);
const [showConfirmPassword, setshowConfirmPassword] = useState(false);
const handlePassword = () => {
    setshowPassword((password) => !password)
}
const handleConfirmPassword = () => {
    setshowConfirmPassword((password) => !password)
}
const handleChange = (event) => {
    seterror("")
    setsuccess("")
    setformData((formData)=>({
        ...formData,
        [event.target.name]:event.target.value}
))    }
seterror("")
    setsuccess('')
    seterrors((errors) => ({
        ...formData,
        [event.target.name]: ""
    }))


}

return (
    <div className="flex justify-center flex-col items-center mt-10 gap-5">
        <NavBar />
        <h1 className='text-2xl font-bold text-blue-600'>Join Blogverse</h1>
        <p className='text-xl text-gray-600 text-center font-bold'>create your account and <br></br>start your Blogging jouerney</p>
        <form onSubmit={handleSubmit} className='flex flex-col border-1 border-black w-[25%] px-3 py-7 items-center gap-5 '>

            <div className="w-[98%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Full Name</p>
                <div className="relative gap-3">
                    <input value={formData.fullname} onChange={handleChange} type="text" name="fullname" placeholder='Enter your full name' className='border-1 border-gray-700 w-full py-4 pl-10 px-3 rounded-2xl focus:outline-none focus:border-purple-700' />
                    <User className='absolute top-4 left-3' />

                </div>
                {errors.fullname && <p className='text-red-500'>{errors.fullname}</p>}



            </div>
            <div className="w-[98%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Email</p>
                <div className='relative'>
                    <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder='Enter your  email' className='border-1 border-gray-700 w-full py-3 pl-10 px-3 rounded-2xl focus:outline-none focus:border-purple-700' />

                    <Mail className='absolute top-4 left-3' />
                </div>
                {errors.email && <p className='text-red-500'>{errors.email}</p>}


            </div>
            <div className="w-[98%] flex flex-col gap-2  ">
                <p className="text-md text-gray-700 font-semibold">Password</p>
                <div className="relative">
                    <input value={formData.password} onChange={handleChange} name="password" type={showPassword ? "password" : "text"} placeholder='Enter your password' className='border-1 border-gray-700 w-full py-3 px-3 rounded-2xl focus:outline-none pl-12 focus:border-purple-700 ' />
                    <KeyRound className="absolute text-blue-500 top-4 left-3" />

                    <p onClick={handlePassword}>{showPassword ? <Eye className='absolute top-4 right-3' /> : <EyeOff className='absolute top-4 right-3' />}</p>
                </div>
                {errors.password && <p className='text-red-500'>{errors.password}</p>}


            </div>
            <div className="w-[98%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                <div className="relative">
                    <input value={formData.confirmpassword} onChange={handleChange} name="confirmpassword" type={showConfirmPassword ? "password" : "text"} placeholder='Enter your password' className='border-1 border-gray-700 w-full py-4 pl-10 px-3 rounded-2xl focus:outline-none focus:border-purple-700 ' />
                    <KeyRound className="absolute text-blue-500 top-4 left-3" />
                    <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className='absolute top-4 right-3' /> : <EyeOff className='absolute top-4 right-3' />}</p>
                </div>
                {errors.password && <p className='text-red-500'>{errors.confirmpassword}</p>}


            </div>
            <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                <input type="checkbox" name="" id="" className='h-5 w-5 ' />
                <p> I agree to the terms of service and privacy policy</p>


            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className='border-1 bg-purple-500 w-[90%] py-4 text-white rounded-xl font-bold flex  justify-center cursor-pointer '><CircleUser />create account</button>
            <div className=" border-[0.5px] border-gray-400 w-[90%] mt-4">
            </div>
            <p className='text-gray-700 font-semibold '>already have an account?<Link to="/signin" className='text-purple-500 ml-2'>sign in</Link></p>
            <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer">back to home</button>
        </form>

    </div>

 
)
}
export default SignUp;