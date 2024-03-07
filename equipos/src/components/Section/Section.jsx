import userImg from "../../assets/perfil.png";
import "./Section.css";

const users = [
  {
    id: 1,
    name: "John Doe",
    description: "I am a developer",
    image: userImg,
  },
  {
    id: 2,
    name: "la lepi Doe",
    description: "I am a juanista",
    image: userImg,
  },
  {
    id: 3,
    name: "franciscano 3",
    description: "I am rey",
    image: userImg,
  },
];

const Section = () => {
  return (
    <section>
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <img className="image" src={user.image} alt={user.name} />
            <h2 className="name">{user.name}</h2>
            <p className="description">{user.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
