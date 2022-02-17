// referencia: peguei de exercicios propostos no curso tryber
import React, { useEffect, useState } from 'react';

import { CardGroup } from 'react-bootstrap';

import  Card from '../components/Card';

function ListTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((tasks) => {
        setIsLoading(false);
        setTasks(tasks);
      });
  }, []);

  return (
    <div>
      <h1>Escolha uma Tarefa alterando o status dela :</h1>

      {isLoading ? <p>Carregando as tarefas ....</p>
        : ( 
          <CardGroup>
            { tasks.map(({_id, data, descricao, status}, index) => (
              <Card
                key={_id}
                index={index}
                id={_id}
                data={data} 
                descricao={descricao}
                status={status} />
            ))}
          </CardGroup>
      )}
    </div>
  );
}

export default ListTask;