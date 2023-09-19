import { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    requestItems();
  }, []);

  const requestItems = async () => {
    const response = await fetch('../../database/data.json');
    const data = await response.json();
    setItems(data.items);
  };

  const updateItems = async (updatedItems) => {
    // const response = await fetch('../../database/data.json', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ items: updatedItems }),
    // });
    // const data = await response.json();
    // setItems(data.items);
  };

  const handleClick = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setItems(updatedItems);
    updateItems(updatedItems);
  };

  return (
    <div>
      {!items.length ? (
        <h2>Loading...</h2>
      ) : (
        items.map((item) => (
          <Item
            item={item}
            handleClick={handleClick}
            key={item.id} />
        ))
      )}
    </div>
  );
};

export default ItemList;