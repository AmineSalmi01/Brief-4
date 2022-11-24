import {React, useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Todoindex = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () =>{
      const todos_api = await axios.get("http://127.0.0.1:8000/api/home");
      setTodos(todos_api.data)
    };  
    getTodos();
  }, [])
  return (
    <div>
    <div className='mt-12'>
      <div className='flex justify-end m-2 p-2'>
        <Link to="/add/create" className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>New Todo</Link> 
      </div>
    <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Edit/delete
                    </th>
                </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                
                return (
                  <tr  key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{todo.name}</td>
                    <td className="py-4 px-6">edit/delete</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default Todoindex