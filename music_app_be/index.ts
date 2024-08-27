import express,{Express,Request,Response} from "express"
import dotenv from "dotenv"
import * as database from "./config/database"
import cors from "cors"

dotenv.config()
database.connect();

const app: Express = express()
const port:number|string = process.env.PORT || 3000

app.use(cors())
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})