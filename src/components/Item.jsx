const Item = ({ item, handleClick, handleDelete }) => {
  const { id, name, completed } = item;

  return (
    <div>
      <h2>{name}</h2>
      <label htmlFor="checkbox">
        Completed
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          defaultChecked={completed}
          onClick={(e) => handleClick(id)}
        />
      </label>
      <button onClick={(e) => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;