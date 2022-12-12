import "./App.css";

const name = "Asu";
const surname = "Fiskin";
const isLoggedIn = false;
function App() {
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız."}
      </h1>
    </div>
  );
}

export default App;
