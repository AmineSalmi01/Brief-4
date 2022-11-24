import { Routes, Route, Link } from 'react-router-dom';
import Todo from './components/Todo';
import TodoAdd from './components/TodoCrude/TodoAdd';
import TodoEdite from './components/TodoCrude/TodoEdite';
import TodoIndex from './components/TodoCrude/TodoIndex';

function App() {
  return (
    
    <div className='bg-slate-200'>
      <div className='max-w-7xl mx-auto min-h-screen'>
        <nav>
          <ul className='flex'>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/Add">Add Todo</Link>
            </li> 
          </ul>
        </nav>
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/LisTodo' element={<TodoIndex />} />
            <Route path='/Add/create' element={<TodoAdd />} />
            <Route path='/Edit/:id/edit' element={<TodoEdite />} />
          </Routes>
      </div>
    </div>  

    // <Todo />
  );
}

export default App;
