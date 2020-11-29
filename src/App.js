import "./styles/style.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AppProvider from "./contexts/contextProvider";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
