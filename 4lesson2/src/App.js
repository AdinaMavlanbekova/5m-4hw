import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      {/*<MainPage />*/}
      {/*  <UsersPage />*/}
        <Counter />
    </div>
  );
}

export default App;
