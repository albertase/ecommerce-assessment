import React from 'react';
import Link from 'next/link';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {useRouter} from 'next/router'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const usePath = useRouter()

  const womenRef = <a href="/" className={usePath.pathname === '/' ? 'non-active' : 'active'}>WOMEN</a>
  const menRef = <a href="/men" className={usePath.pathname === '/men' ? 'non-active' : 'active'}>MEN</a>
  const kidRef = <a href="/kids" className={usePath.pathname === '/kids' ? 'non-active' : 'active'}>KIDS</a>

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">{womenRef}</Link>
        <Link href="/men">{menRef}</Link>
        <Link href="/kids">{kidRef}</Link>
      </p>
      <div className="navbar-btn">
        <button>↺</button>
      </div>
      <div className="navbar-currency">
      <select name="" id="">
        <option value="">$</option>
        <option value="usd">$ USD</option>
        <option value="eur">€ EUR</option>
        <option value="jpy">¥ JPY</option>
      </select>
      </div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <Badge badgeContent={totalQuantities} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar