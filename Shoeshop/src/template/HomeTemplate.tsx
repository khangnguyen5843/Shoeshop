import React from 'react'
import { Outlet } from "react-router-dom";
import FooterLayout from '../components/FooterLayout/FooterLayout';
import HeaderLayout from '../components/HeaderLayout/HeaderLayout';
import Navbar from '../components/NavbarLayout/Navbar';

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
        <HeaderLayout />
        <Navbar />
        <Outlet />
        <FooterLayout />
    </>
  )
}