import * as React from 'react';

export interface IProductItemV2Props {
    title: string;
    price: number;
    priceSale?: number;
    sale?: boolean;
    image: string;
}

export default function ProductItemV2(props: IProductItemV2Props) {
    let title = props.title;
    if (title.length > 40) {
        title = props.title.slice(0, 40) + '...';
    }
    return (
        <div className="group relative p-4 bg-gray rounded-md">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={props.image} alt={title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                {props.sale && (<div className="absolute top-0 left-0 bg-red-600 font-bold text-white p-1"> Giảm Giá</div>)}
            </div>
            <div className="mt-4">
                <div className="h-[82px] flex flex-col justify-between">
                    <h3 className="text-sm text-gray-700">
                        <a href="#" className="text-lg">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {title}
                        </a>
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {props.sale && (
                            <p className="text-md font-medium text-red-600 line-through">{props.priceSale!.toLocaleString('de-DE')} ₫</p>)}
                        <p className="text-md font-bold text-red-600">{props.price.toLocaleString('de-DE')} ₫</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
