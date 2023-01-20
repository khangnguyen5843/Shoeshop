import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="active">
          Home
        </a>
        <a href="#">profile</a>
        <a href="#">Women</a>
        <a href="#">Kid</a>
        <a href="#">Sport</a>
      </div>
    </nav>
  )
}