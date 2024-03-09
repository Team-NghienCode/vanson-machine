'use client';

import ProductItemV2 from "@/components/ProductItemV2";
import Link from "next/link";

import { data, danhMuc } from '@/data/danhmucsanpham';

export default function ListItems({ params }: { params: { slug: string } }) {
    const item = danhMuc.find((item) => item.slug === params.slug);
    if (!item) {
        return <div>Not found</div>;
    }

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
                <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                    <div className="menu"> <Link className="menu" href='/'>Trang chủ</Link> / <Link className="menu" href={'/' + item.slug}>{item.title}</Link> </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data[item.id].map((item) => {
                            return (
                                <ProductItemV2 key={item.id} {...item} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}