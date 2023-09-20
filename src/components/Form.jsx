const Form = ({ items, name, setName, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;