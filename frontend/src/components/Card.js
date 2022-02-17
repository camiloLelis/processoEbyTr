import React, { useState, useEffect } from 'react';
import socket from '../utils/socketClient';

// referencia: peguei de exercicios propostos no curso tryber

import { Card, Button } from 'react-bootstrap';

function Card({ index, id, data, descricao, status }) {
  const [currentTask, setCurrentTask] = useState(status);

  useEffect(() => {
    socket.on('statusTaskFront', (task) => {
      if (task._id === id) setCurrentTask(task.status);
    })
  }, []);
  
  const handleSelect = () => {
    socket.emit('statusTaskSet', { id, status} );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{descricao}</Card.Title>
        <Card.Text>
          { currentTask }
        </Card.Text>
        < Select onClick={handleClick} data-testid={`status-select-${index}`}>selecionar</Select>
        <option></option>
      </Card.Body>
    </Card>
  );
}

export default Card;