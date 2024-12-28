import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
	res.send("Welcome to my app!!!!!!!");
});

app.listen(8000, () => {
	console.log("Server started on port 8000");
});
