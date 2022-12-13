import "./App.css";
import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Asu",
  },
  {
    id: 2,
    name: "Ömer",
  },
  {
    id: 3,
    name: "Alp",
  },
];

function App() {
  return (
    <>
      <User
        name="Asu"
        surname="Fiskin"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={{
          title: "Asmalıevler/Denizli",
          zip: 20500,
        }}
      />
    </>
  );
}

export default App;
