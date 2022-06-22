import { ChangeEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './CreateTask.module.css';

type CreateTaskProps = {
  onCreateNewTask: (newTask: string) => void;
};

export const CreateTask = ({ onCreateNewTask }: CreateTaskProps) => {
  const [newTask, setNewTask] = useState('');

  const handleAddNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreateNewTask = () => {
    onCreateNewTask(newTask);
    setNewTask('');
  };

  const shouldDisableButton = newTask.length === 0;

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleAddNewTask}
        value={newTask}
        required
      />
      <button
        type="button"
        onClick={handleCreateNewTask}
        disabled={shouldDisableButton}
      >
        Criar <PlusCircle />
      </button>
    </div>
  );
};
