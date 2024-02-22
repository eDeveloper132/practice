import express from "express";
import path from "path";

const app = express();
const PORT = 8080;
const publicPath = path();

app.use(express.static(publicPath.join("public")));
app.get("/", (req, res) => {
    res.send({
        message: "everything is working"
    });
});

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});
