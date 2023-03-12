import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTaskRequest,
  deleteTaskRequest,
  loadTasks,
} from "../store/tasks";
import AddTask from "./AddTask";

const Tasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const completeTask = (id) => {
    dispatch(completeTaskRequest({ id, completed: true }));
  };

  const deleteTask = (id) => {
    dispatch(deleteTaskRequest(id));
  };

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <div className="todos">
      <AddTask />
      {loading ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task) => (
          <p
            key={task.id}
            className={`todo__item ${task.completed ? "completed" : ""}`}
          >
            {task.task}
            <span>
              <button onClick={() => completeTask(task.id)}>✅</button>{" "}
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </span>
          </p>
        ))
      )}
    </div>
  );
};

export default Tasks;
