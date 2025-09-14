import React from 'react'
const NavBar=()=>{


return(
<div className="flex justify-around h-16 items-center border-2 border-b-gray-950">
<h1 className="text-black font-bold">BlogVerse</h1>
<button className="text-gray-700 hover:bg-blue-100 px-5 py-2 rounded-2xl">home</button>
<div className="flex gap-5">
    <button className='font-semibold text-gray-700'>Sign in</button>
    <button className='bg-blue-600 text-white px-2 py-2 rounded-xl cursor-pointer'>Sign up</button>
</div>
</div>


)



}
export default NavBar