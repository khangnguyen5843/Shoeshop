import { Badge } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const waiting = require("../../assets/img/image3.png")

export default function HeaderLayout({ }: Props) {
  return (
    <div className='header-shoe'>
      <div className='container'>
        <div className='wapper-header'>
          <div className='header-left'>
            <a href="#" className='logo'>
              <img src={waiting} alt="..." />
            </a>
          </div>
          <div className='header-right'>
            <div className='user-interact'>
              <div className='user-search'>
                <i className='fas fa-search'></i>
              </div>
              <div className='user-cart'>
                <NavLink to={""}>
                  <Badge count={2}>
                    <i className="fas fa-shopping-cart"></i>
                  </Badge>
                </NavLink>
              </div>
              <div className='user-login'>
                <a href="#">
                  <i className='fas fa-user'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}