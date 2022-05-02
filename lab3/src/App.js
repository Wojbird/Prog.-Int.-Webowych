import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Main from './pages/Main';
import Search from './pages/Search';
import {BrowserRouter, NavLink, Routes, Route, Link} from 'react-router-dom'

function App() {

  // const [toDosList, setToDoList] = useState(["Sprawdzić zadania", "Wpisać oceny", "uwalić paru Studentów"]);
  const [toDosList, setToDoList] = useState([]);

  return (
      <dev>
        <header><h2>"Tinder" for students</h2></header>
        <main>
          <BrowserRouter>
            <nav>
              <NavLink to="/">Create announcement</NavLink>
              <NavLink to="/search">Search for announcements</NavLink>
            </nav>
            <Routes>

              <Route path="/" element={<Main toDosList={toDosList} setToDoList={setToDoList}/>}/>
              <Route path="/search" element={<Search toDosList={toDosList}/>} />

            </Routes>
          </BrowserRouter>
        </main>
        <footer></footer>
      </dev>
  );
  // return <Main toDosList={toDosList} setToDoList={setToDoList}/>
};

// const App = () => {

// }
export default App;
