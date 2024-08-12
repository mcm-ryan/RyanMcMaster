import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="app_container">
      <Header />
      <body>
      <Home/>
      </body>
    </div>
  );
}

export default App;
