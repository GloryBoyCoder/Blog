import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <nav className='nav'>
            <div className='logo'><a href="">Rivon Newland</a></div>
            <div>
                   <ul className='untitled-list'>
                    <li className='li-items'><a href="">Essays</a></li>
                    <li className="li-items"><a href="">Projects</a></li>
                    <li className="li-items"><a href="">Contact</a></li>
                   </ul>
            </div>
        </nav>
    </div>
  )}

export default Header