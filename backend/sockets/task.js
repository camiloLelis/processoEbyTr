const Task = require('../models/taskModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('statusTaskSet', async ({ id, status }) => {
    // vai ficar no front pra quando alterar(<select>) o status da tarefa
    console.log(`funcionario mudou status de id ${id}`);
    await Task.statusAlter(id, status);
    const task = await Task.getById(id);
    
    io.emit('statusTaskFront', task);
    // statusTaskFront: vai ficar em um useeffect no front com um soket.on para emitir a mudança
  })
}); 