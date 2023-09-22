const Form = ({ name, setName, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required={true}
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;