import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemList from "./ItemList";
import Form from "./Form";

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    requestItems();
  }, []);

  const requestItems = async () => {
    const response = await fetch('../../database/data.json');
    const data = await response.json();
    setItems(data.items);
  };

  const handleClick = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleClearCompleted = () => {
    const updatedItems = items.filter((item) => !item.completed);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = items.find((item) => item.name === name);
    if (found) {
      alert(`${name} is already in your list!`);
    } else {
      const newItem = {
        id: uuidv4(),
        name: name,
        completed: false
      };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setName("");
    }
  };

  return (
    <>
      <header>
        <h1>Shipping List</h1>
      </header>
      <main>
        <Form item={items} setName={setName} name={name} handleSubmit={handleSubmit} />
        <ItemList items={items} handleClick={handleClick} handleDelete={handleDelete} />
        {items.length ? <button onClick={handleClearCompleted}>Clear Completed</button> : null}
      </main>
    </>
  );
};

export default App;