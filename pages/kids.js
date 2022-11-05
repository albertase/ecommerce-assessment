import React from 'react';

import { client } from '../lib/client';
import { Kids} from '../components';

const Kid = ({ products}) => (
  <div>
    <div className="products-heading">
      <h3>Category name</h3>
    </div>

    <div className="products-container">
      {products?.map((product) => <Kids key={product._id} product={product} />)}
    </div>

  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "kids"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Kid;