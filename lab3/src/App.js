import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Main from './pages/Main';
import Search from './pages/Search';
import Groups from './pages/Groups';
import SearchGr from './pages/SearchGr';
import {BrowserRouter, NavLink, Routes, Route, Link} from 'react-router-dom'

function App() {

  // const [toDosList, setToDoList] = useState(["Sprawdzić zadania", "Wpisać oceny", "uwalić paru Studentów"]);
    const [toDosList, setToDoList] = useState([]);
    const [groupList, setGroupList] = useState([]);

  return (
      <dev>
        <header><h2>"Tinder" for students</h2></header>
        <main>
          <BrowserRouter>
            <nav>
                <NavLink to="/">Create announcement</NavLink>
                <NavLink to="/search">Search for announcements</NavLink>
                <NavLink to="/gr">Create group</NavLink>
                <NavLink to="/searchgr">Search for groups</NavLink>
            </nav>
            <Routes>

                <Route path="/" element={<Main toDosList={toDosList} setToDoList={setToDoList}/>}/>
                <Route path="/search" element={<Search toDosList={toDosList}/>} />
                <Route path="/gr" element={<Groups groupList={groupList} setGroupList={setGroupList}/>}/>
                <Route path="/searchgr" element={<SearchGr groupList={groupList}/>} />

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
