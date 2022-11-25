import React, { Component } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import TodoAdd from './TodoAdd';
import { Params } from 'react-router-dom';
class TodoEdit extends Component {

  state = {
    name:''
  }

  handInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async componentDidMount() {
    const todo_id = this.props.match.params.id;
    console.log(todo_id);
  }

  editTodo = async (e) => {
    e.preventDefault();

  }


 
  render() {
        return(
          <div className='mt-20'>
          <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
              <div className='space-y-6'>
                <div className='mb-4'>
                    <label className='block mb-2 text-sm font-medium'>Todo</label>
                    <input name='name' onChange={this.handInput} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'/>
                </div>
              </div>
              <div className='my-3'>
                <button type='submit' className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Edit todo</button>
              </div>
          </form>
        </div>
       )
    }
}

export default TodoEdit
