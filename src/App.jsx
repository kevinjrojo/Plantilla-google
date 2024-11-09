import { Cheque } from "./components/Cheque.jsx";
import { Logo } from "./components/Logo.jsx";
import { Tarjet } from "../src/components/Tarjet.jsx";
import "./styles.css";

function App() {
  const title = "Revisores";
  const subtitlte =
    "Revisores es donde las personas pueden acceder a pautas, listas de verificación y otras herramientas que les ayudarán a revisar artículos o manuscritos. Proporciona un enfoque estructurado para garantizar que el proceso de revisión sea exhaustivo, eficiente y coherente.";
  const descriptions = [
    {
      classConteiner: "target-1",
      img: "./public/images/social.png",
      name: "google",
      title: "Samantha Lee",
      text: "La lista de verificación garantiza que el proceso de revisión sea exhaustivo.",
      stars: "⭐️ ⭐️ ⭐️ ⭐️",
    },
    {
      classConteiner: "target-2",
      img: "./public/images/meta.png",
      name: "meta",
      title: "Rachel Patel",
      text: "Recomiendo ampliamente la descripción comercial de Writecream.",
      stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    },
  ];
  return (
    <div className="conteiner">
      <Logo />
      <h1 className="title-app"> {title}</h1>
      <p className="subtitle-app">{subtitlte}</p>
      <Cheque />
      {descriptions.map((desc, index) => (
        <Tarjet
          key={index}
          title={desc.title}
          text={desc.text}
          stars={desc.stars}
          img={desc.img}
          classNameImg={desc.name}
          classNameTarget={desc.classConteiner}
        />
      ))}
    </div>
  );
}

export default App;
