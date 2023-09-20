import Item from './Item';

const ItemList = ({ items, handleClick, handleDelete }) => {


  return (
    <ul>
      {!items.length ? (
        <h2>Item list empty.</h2>
      ) : (
        items.map((item) => (
          <Item
            item={item}
            handleClick={handleClick}
            handleDelete={handleDelete}
            key={item.id} />
        ))
      )}
    </ul>
  );
};

export default ItemList;