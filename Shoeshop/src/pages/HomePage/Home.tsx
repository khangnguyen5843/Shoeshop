import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/CardProduct/Card'
import { AppDispatch, RootState } from '../../redux/configStore'
import { getProductApi, ProductModel } from '../../redux/reducers/productReducer'
import { Carousel } from 'antd';

type Props = {}



const contentStyle: React.CSSProperties = {
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home({ }: Props) {
  const { arrProduct } = useSelector((state: RootState) => state.productReducer)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const actionThuk = getProductApi()
    dispatch(actionThuk)
  }, [])

  const renderProduct = () => {
    return arrProduct.map((item: ProductModel, index: number) => {
      return <div className='col-lg-4 col-md-6' key={index}>
        <Card product={item} />
      </div>
    })
  }

  return (
    <div className='home-page'>
      <div className='container'>
        <div className='home-wapper'>
          <div className='home-top'>
            <div className='home-top-title'>
              <h2 className='text-center'>Shoes Shop</h2>
            </div>
            <div className='carousel-home mt-2 mb-2'>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </div>
          <div className='home-bottom'>
            <div className='home-bottom-title'>
              <h2 className='text-center mt-2 mb-2'>---Sản Phẩm---</h2>
            </div>
            <div className='row'>
              {renderProduct()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}