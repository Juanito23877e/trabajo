const express = require("express");
const app = express();

app.use(express.static("public")); // Sirve archivos de la carpeta 'public'

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/inicio.html");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
