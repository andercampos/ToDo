import { Task } from './Task';
import { EmptyState } from './EmptyState';

import { TaskType } from '../types';

import styles from './TaskList.module.css';

type TaskListProps = {
  tasks: TaskType[];
  onCompleteToggle: (task: TaskType) => void;
  onDeleteTask: (task: TaskType) => void;
};

export const TaskList = ({
  tasks,
  onCompleteToggle,
  onDeleteTask,
}: TaskListProps) => {
  const totalTasks = tasks.length;
  const hasTasks = totalTasks > 0;

  const completedTasks = tasks.reduce(
    (acc, task) => acc + (task.isCompleted ? 1 : 0),
    0
  );

  return (
    <div className={styles.container}>
      <header className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>

        <div className={styles.done}>
          <strong>Concluídas</strong>
          {hasTasks && (
            <span>
              {completedTasks} de {totalTasks}
            </span>
          )}

          {!hasTasks && <span>{completedTasks}</span>}
        </div>
      </header>

      {!hasTasks && <EmptyState />}

      {hasTasks && (
        <main className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCompleteToggle={onCompleteToggle}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </main>
      )}
    </div>
  );
};
