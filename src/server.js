import express from "express";

const PORT = 4000;

const app = express();

const home = (req, res) => res.send("<h1>Hello!</h1>");

app.get("/", home);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
