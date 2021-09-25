import React from "react";

import Card, { Props as CardProps } from "./displays/Card";

const Products: CardProps[] = [
  {
    title: "Product 1",
    description: "Description of product 1",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
  {
    title: "Product 2",
    description: "Description of product 2",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
  {
    title: "Product 3",
    description: "Description of product 3",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
  {
    title: "Product 4",
    description: "Description of product 4",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
  {
    title: "Product 5",
    description: "Description of product 5",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
  {
    title: "Product 6",
    description: "Description of product 6",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com"
  },
];

export default class Main extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: '50vh', marginBottom: '10vh'}}>
        <div style={{display:'inline-flex', flexDirection: 'row'}}>
          {Products.map(product => {
            return <Card productInfo={product} />;
          })}
        </div>
        <div style={{display:'inline-flex', flexDirection: 'row'}}>
          {Products.map(product => {
            return <Card productInfo={product} />;
          })}
        </div>
      </div>
    );
  }
}