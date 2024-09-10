import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
    credentials: true,
}));

app.use("/infafred", apiRoutes);

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
