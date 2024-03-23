'use client';

import ProductItemV2 from "@/components/ProductItemV2";
import Link from "next/link";

import { data, danhMuc } from '@/data/danhmucsanpham';


type DataType = Record<string, Array<{
    image: string;
    title: string;
    price: number;
    sale?: boolean;
    priceSale?: number;
}>>

const datas: DataType = {
    ...data
}


export default function ListItems({ params }: { params: { slug: string } }) {
    const item = danhMuc.find((item) => item.slug === params.slug);
    if (!item) {
        return <div>Not found</div>;
    }

    return (
        <>
            {/* <!-- Header --> */}
            <header className='ex-header bg-gray'>
                <div className='container mx-auto px-4 sm:px-1 xl:max-w-6xl xl:px-4'>
                    <h1 className='xl:ml-24 max-md/2:text-3xl'>Danh mục sản phẩm</h1>
                </div>
                {/* <!-- end of container --> */}
            </header>
            {/* <!-- end of ex-header --> */}
            <div className='ex-basic-1'>
                <div className="mx-auto max-w-2xl px-4 sm:px-8 sm:py-12 lg:max-w-7xl lg:px-8">
                    <div className="menu"> <Link className="menu" href='/'>Trang chủ</Link> / <Link className="menu" href={'/' + item.slug}>{item.title}</Link> </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {datas[item.id].map((item) => {
                            return (
                                <ProductItemV2 key={item.title} {...item} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}