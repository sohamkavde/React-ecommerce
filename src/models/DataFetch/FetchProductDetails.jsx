import React from "react";
import Image1 from '../../assets/img/shoe1.png';
import Image2 from '../../assets/img/shoe2.png';
import Image3 from '../../assets/img/shoe3.png';
import Image4 from '../../assets/img/shoe4.png';

function useFetchProductDetails() {
 const arr = [
  {
    id: 1,
    title: "Nike Air Force 1 Low",
    price: 250,
    img: Image1,
    description: "<strong>Step into timeless style</strong> with the legendary <em>Air Force 1 Low</em>. Crafted with <b>premium leather</b> and a crisp white finish, this sneaker delivers unmatched comfort and an effortlessly cool look."
  },
  {
    id: 2,
    title: "Nike Air Force 1 High",
    price: 450,
    img: Image2,
    description: "Elevate your sneaker game with the <b>Air Force 1 High</b>. Featuring an <em>adjustable ankle strap</em> for a snug fit, this high-top classic blends <strong>heritage design</strong> with modern streetwear appeal."
  },
  {
    id: 3,
    title: "Nike Air Force 1 Shadow",
    price: 550,
    img: Image3,
    description: "Make a <b>bold statement</b> with the <em>Air Force 1 Shadow</em>. Designed with a <strong>playful, layered aesthetic</strong> and extra cushioning, this sneaker redefines comfort and edgy style."
  },
  {
    id: 4,
    title: "Nike Air Force 1 Utility",
    price: 550,
    img: Image4,
    description: "Unleash <strong>urban utility</strong> with the <b>Air Force 1 Utility</b>. Featuring <em>oversized straps</em> and rugged detailing, this sneaker merges durability with a <b>futuristic street-ready design</b>."
  }
];


  return arr;
}

export default useFetchProductDetails;
