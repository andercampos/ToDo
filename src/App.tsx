import { useState } from 'react';

import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

import { TaskType } from './types';

import './global.css';

import styles from './App.module.css';

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const onCreateNewTask = (newTask: string) => {
    setTasks((prevState) => [
      ...prevState,
      { id: prevState.length + 1, title: newTask, isCompleted: false },
    ]);
  };

  const onCompleteToggle = (taskToToggle: TaskType) => {
    const toggledCompleteTask = tasks.map((task) =>
      task.id === taskToToggle.id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );

    setTasks(toggledCompleteTask);
  };

  const onDeleteTask = (taskToDelete: TaskType) => {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete.id
    );

    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <CreateTask onCreateNewTask={onCreateNewTask} />

        <TaskList
          tasks={tasks}
          onCompleteToggle={onCompleteToggle}
          onDeleteTask={onDeleteTask}
        />
      </main>
    </>
  );
};
