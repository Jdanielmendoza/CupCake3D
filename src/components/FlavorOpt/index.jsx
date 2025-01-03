import "./FlavorOpt.css"
const FlavorOpt = ({
    label = "chocolate",
    checked,
    setSelectedOption,
    emoji = "🍫",
  }) => {
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return (
      <label className="opt__label" >
        <input
          type="radio"
          name="options"
          value={label}
          /* checked={selectedOption === "op1"} */
          checked={checked}
          onChange={handleChange}
          className="input__opt"
        />
        {label.charAt(0).toUpperCase() +
          label.slice(1).toLowerCase() +
          " " +
          emoji}
      </label>
    );
  };

export default FlavorOpt