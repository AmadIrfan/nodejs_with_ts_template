/** @format */

import express from "express";
import { config } from "dotenv";
import path from "path";
config();
const app = express();

app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req: any, res: any) => {
	res.render('index');
	// res.send("Welcome to my app!!!!!!!");
});

app.listen(process.env.PORT, () => {
	console.log(`Server started on port : ${process.env.PORT}`);
	console.log(`http://localhost:${process.env.PORT}/`);
});
