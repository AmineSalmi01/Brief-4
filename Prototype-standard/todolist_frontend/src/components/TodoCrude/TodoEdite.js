import React from "react";

const TodoEdit = () => {
  
  return (
    <div className="mt-20">
      <form  className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Edit Todo</label>
            <input
              name="name"
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
          >
            Update todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoEdit;
