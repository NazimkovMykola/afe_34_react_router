import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import One from './One';
import result from './assets/data';

function App() {

  
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))

  return (
    <div className="App">
      <header className="App-header">
        {result.results.map((el) => {
          return (
            <NavLink className={"link"} key={el.id} to={`character/${el.id}`}>
              {el.name}
            </NavLink>
          )
        })}
        <Routes>
          <Route  path="character/:number" element={<One />} />
        </Routes>
      </header>
    </div>
  )
}

export default App;
