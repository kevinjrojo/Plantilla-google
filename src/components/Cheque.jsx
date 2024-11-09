import cheque from "../assets/images/cheque.png";
import "./styles/cheque.css";

const textos = {
  text1: "Lista de verificación para revisar un trabajo académico.",
  text2: "Lista de verificación de revisión por pares.",
  text3:
    "Lista de verificación para editores, revisores y autores de revistas SPIE.",
};

export const Cheque = () => {
  return (
    <div className="cheque">
      <img src={cheque} alt="" className="tilde" />
      <p className="text-cheque">{textos.text1}</p>
      <img src={cheque} alt="" className="tilde" />
      <p className="text-cheque">{textos.text2}</p>
      <img src={cheque} alt="" className="tilde" />
      <p className="text-cheque">{textos.text3}</p>
    </div>
  );
};
