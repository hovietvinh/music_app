import express,{Express,Request,Response} from "express"
import dotenv from "dotenv"
import * as database from "./config/database"

dotenv.config()
database.connect();

const app: Express = express()
const port:number|string = process.env.PORT || 3000

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})