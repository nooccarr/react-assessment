import { useEffect, useState } from 'react';

export default function useItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    requestItems();
  }, []);

  const requestItems = async () => {
    const response = await fetch('../../database/data.json');
    const data = await response.json();
    setItems(data.items);
  };

  return [items, setItems];
}
