const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios").default;
const cors = require("cors");

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

axios.get("/").then(function (response) {
  console.log(response);
});
