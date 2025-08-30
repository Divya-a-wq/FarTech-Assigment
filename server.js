const express = require("express");
const app = express();

app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User" });
});

const PORT = 80; // Run on port 80
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
