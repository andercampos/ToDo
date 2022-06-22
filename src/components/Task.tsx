import { Trash } from 'phosphor-react';

import { Checkbox } from './Checkbox';

import { TaskType } from '../types';

import styles from './Task.module.css';

type TaskProps = {
  task: TaskType;
  onCompleteToggle: (task: TaskType) => void;
  onDeleteTask: (task: TaskType) => void;
};

export const Task = ({ task, onCompleteToggle, onDeleteTask }: TaskProps) => {
  const handleCheckboxClick = () => {
    onCompleteToggle(task);
  };

  const handleTaskDelete = () => {
    onDeleteTask(task);
  };

  return (
    <div className={styles.container}>
      <div>
        <Checkbox checked={task.isCompleted} onClick={handleCheckboxClick} />

        <span {...(task.isCompleted && { className: styles.done })}>
          {task.title}
        </span>
      </div>

      <button type="button" onClick={handleTaskDelete}>
        <Trash size={14} />
      </button>
    </div>
  );
};
