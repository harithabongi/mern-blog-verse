import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{


return(
<div className="flex justify-around h-16 items-center border-2 border-b-gray-950 w-full">
<h1 className="text-black font-bold">BlogVerse</h1>
<Link to="/home" className="text-gray-700 hover:bg-blue-100 px-5 py-2 rounded-2xl">Home</Link>
<div className="flex gap-5">
    <Link to="/signin"className='font-semibold text-gray-700'>SignIn</Link>
    <Link to="/signup"className='bg-blue-600 text-white px-2 py-2 rounded-xl cursor-pointer'>SignUp</Link>
</div>
</div>


)



}
export default NavBar