
export default function ListItems({ params }: { params: { machine_name: string } }) {

    return (
        <>
            {/* <!-- Header --> */}
            <header className='ex-header bg-gray'>
                <div className='container mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4'>
                    <h1 className='xl:ml-24'>Danh mục sản phẩm</h1>
                </div>
                {/* <!-- end of container --> */}
            </header>

            {/* <!-- end of ex-header --> */}
            <div className='ex-basic-1'>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative p-4 bg-gray rounded-md">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="/uploads/2023/08/img20220306210105-6149-300x225.jpg" alt="Máy May 1 Kim Điện Tử Juki DDL 7000A-7" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                <div className="absolute top-0 left-0 bg-red-600 font-bold text-white p-1"> Giảm Giá</div>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#" className="text-lg">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Máy May 1 Kim Điện Tử Juki DDL 7000A-7
                                        </a>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <p className="text-md font-medium text-red-600 line-through">84.500.000 ₫</p>
                                        <p className="text-md font-bold text-red-600">81.500.000 ₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative p-4 bg-gray rounded-md">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="/uploads/2023/08/ke430hx-4684-300x225.png" alt="Máy May 1 Kim Điện Tử Juki DDL 7000A-7" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                <div className="absolute top-0 left-0 bg-red-600 font-bold text-white p-1"> Giảm Giá</div>
                            </div>
                            <div className="mt-4">
                                <div className="h-[82px] flex flex-col justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#" className="text-lg">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Máy May 1 Kim Điện Tử
                                        </a>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <p className="text-md font-medium text-red-600 line-through">84.500.000 ₫</p>
                                        <p className="text-md font-bold text-red-600">81.500.000 ₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}