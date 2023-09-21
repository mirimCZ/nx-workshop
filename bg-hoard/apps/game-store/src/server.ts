import express, { Request, Response } from 'express';
import { getAllGames, getGame } from './fake-api/get-games';

const app = express();

app.get('/api/games', (req: any, res: any) => {
  res.send(getAllGames());
});

app.get('/api/games/:id', (req: Request, res: Response) => {
  return res.send(getGame(req.params.id));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);