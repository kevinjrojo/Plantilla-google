import "../components/styles/target.css";

export const Tarjet = ({
  title,
  text,
  stars,
  img,
  classNameImg,
  classNameTarget,
}) => {
  return (
    <div className={classNameTarget}>
      <nav className="stiker">
        <img src={img} alt={classNameImg} className={classNameImg} />
        <p className="start">{stars}</p>
      </nav>
      <h2 className="title-target">{title}</h2>
      <p>{text}</p>
    </div>
  );
};
