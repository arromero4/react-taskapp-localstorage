import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <TaskRow task={task} key={i} toggleTask={toggleTask}/>
        ))}
      </tbody>
    </table>
  );
};
