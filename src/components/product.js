import React from 'react';
import ImageCard from './imageCard';
import desc_products from '../static/desc_products';
import useWindowPosition from '../hook/useWindowPosition';
import productStyle from './styles/productStyle'

export default function Product () {
  const classes = productStyle();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={desc_products[1]} checked={checked} />
      <ImageCard place={desc_products[0]} checked={checked} />
    </div>
  );
}