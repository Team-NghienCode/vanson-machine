'use client';

import { useEffect, useState } from "react";
import ProductItemV2 from "@/components/ProductItemV2";
import Link from "next/link";

import { data, danhMuc } from '@/data/danhmucsanpham';
import { Pagination } from "@mui/material";


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

    const [list, setList] = useState(item ? datas[item.id].slice(0, 16) : []);

    useEffect(() => {
    }, [list]);

    if (!item) {
        return <div className="w-full flex-center text-4xl font-bold text-red-700">Not found</div>;
    }

    const pagination = datas[item.id].length % 16 === 0 ? datas[item.id].length / 16 : Math.floor(datas[item.id].length / 16) + 1;

    const showListItem = (page: number) => {
        const start = (page - 1) * 16;
        const end = start + 16;
        setList(datas[item.id].slice(start, end));
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
                    <div className="menu"> <Link className="menu" href='/'>Trang chủ</Link> / <span className="font-bold"> {item.title} </span></div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {list.map((item) => {
                            return (
                                <ProductItemV2 key={item.title} {...item} />
                            );
                        })}
                    </div>
                </div>
                <Pagination count={pagination} variant="outlined" shape="rounded" className="w-full flex-center" onChange={(_, page) => { showListItem(page) }} />
            </div>
        </>
    );
}