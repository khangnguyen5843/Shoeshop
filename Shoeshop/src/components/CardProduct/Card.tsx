import React from 'react'
import { ProductModel } from '../../redux/reducers/productReducer'
import { Rate } from 'antd';

type Props = {
    product: ProductModel
}

export default function Card({ product }: Props) {
    return (
        <div className='card mt-3 mb-3'>
            <img src={product.image} alt={product.name} />
            <div className='card-body'>
                <h4>{product.name}</h4>
                <p>{product.price}$</p>
                <p>{product.description.slice(0, 30) + `...`}</p>
                <Rate disabled defaultValue={4.5} />
            </div>
            {/* <div className='card-footer'>
                <button className='theme-btn'>
                    View Details
                </button>
            </div> */}
        </div>
    )
}