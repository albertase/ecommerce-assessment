import React from 'react';
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


import { urlFor } from '../lib/client';

const Kids = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/kids/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={350}
            height={350}
            className="product-image"
          />
          <Badge className='cart' badgeContent={0} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
          <p className="product-name">{name}</p>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}

export default Kids