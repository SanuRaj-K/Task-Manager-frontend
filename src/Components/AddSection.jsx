import React from "react";

function AddSection() {
  return (
    <div>
      <section class="grid place-items-center     p-16  ">
        <div class="flex  justify-between    w-[50%]">
          <input
            class="h-12 flex-1 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            type="text"
            placeholder="Type your task"
          />
          <button class="h-12 min-w-[8rem] rounded-lg border-2 ml-3    bg-pink-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
            Add Task
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddSection;
