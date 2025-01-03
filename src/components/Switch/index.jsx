import "./Switch.css";

const Switch = ({ id, checked = true, setState }) => {
  const handleChange = (event) => {
    setState(event.target.checked);
  };

  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input
          id={id} // Usa un id único
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={id} />
      </div>
    </div>
  );
};

export default Switch;
