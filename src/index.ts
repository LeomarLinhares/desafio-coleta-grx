import express from 'express';
import mainRoute from './routes/main';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/api', mainRoute);
    this.app.use('/', express.static('public'));
  }

  public start(): void {
    this.app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  }
}

new App().start();
