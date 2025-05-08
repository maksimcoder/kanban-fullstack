import { Router } from 'express';
const router = Router();

const mockDB = [
  {
    id: '1',
    name: 'maksim',
    surname: 'deviatilov'
  },
  {
    id: '2',
    name: 'nataly',
    surname: 'deviatilova'
  },
]

/*
Таблицы:
BOARD_TABLE (one-to-many) {board: columns: []}
COLUMN_TABLE (many-to-one) {column: {board: uuid}} | (one-to-many) {column: {taskIds: []}}
TASK_TABLE (many-to-one) {task: {column: uuid}}
?SUBTUSK_TABLE (many-to-one) 

-----
POST task in column in board
POST /boardId/columnId/createTask - ищу конкретную колонку в конкретной доске и создаю в ней задачу
POST /columnId/createTask - найти колонку по ID по всем колонкам в таблице
*/

router.get('/', (req, res) => {
  res.json({ data: mockDB })
});

router.post('/', (req, res) => {
  const user = req.body;

  mockDB.push(user);

  res.send(`${user.name} was added`);
})

export { router };