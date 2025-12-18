import express from "express";
import authRoute from "../routes/auth.route.js"
import morgan from "morgan"
import {connectDB} from "../db/db.js"
export const app = express();


app.use(express.json());
app.use(morgan("tiny"))
app.use(express.urlencoded({extended: true}));
connectDB();

app.get("/",(_req,res)=>{
  res.send({
    success : true,
    message : "hellooooo from the server "
  })
})


app.use("/api/auth",authRoute);

