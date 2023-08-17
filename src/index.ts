import express from 'express';
import cors from "cors";
import path from "path";
import checkStatusRoute from "./routes/checkStatus";


async function initialApp() {
  global.__dirname = path.resolve(__dirname);

  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
   app.use("/checkstatus", checkStatusRoute);

  app.listen(3000, async () => {
    console.log('Server listening on port 3000');
  });
}

initialApp().then(() => {});