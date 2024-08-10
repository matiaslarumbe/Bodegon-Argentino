import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {productos.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
