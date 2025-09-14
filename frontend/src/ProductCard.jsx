const ProductCard = () => {
    return (
        <div className="border-1 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-2xl bg-blue-200 mask-origin-content">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-1 border-blue-600 rounded-3xl py-4" />
            <div className=" felx-col items-center gap-20">
            <h1 className="font-bold text-4xl text-red-600">Product 1</h1>
            <p className="text-2xl text-gray-700 text-center">This is a sample Product</p>
            <p className="font-bold text-cyan-900 text-4xl">$29.99</p>
            </div>
            <button className="bg-blue-700 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-blue-900">Add to cart</button>


        
        </div>



)

}
export default ProductCard;