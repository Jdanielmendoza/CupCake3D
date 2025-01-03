import "./Button.css";
const Button = ({
  flavor = "chocolate",
  cherryPearl = true,
  creamFilling = true,
  emoji = " 🍫",
}) => {
  const mensaje = `Hola Daniel, quiero reservar un cupcake de sabor ${flavor} ${emoji} ${
    creamFilling ? "que incluya crema de pistacho" : "sin crema"
  } ${cherryPearl ? "y con cereza" : "y sin cereza"} `;
  return (
    <button>
      <a
        href={"https://wa.me/59171024318?text=" + mensaje}
        className="link__button"
      >
        {" "}
        Book now for free
      </a>
    </button>
  );
};

export default Button;
