const express = require("express");
const axios = require("axios");
const { isValidID, fetchNumbers } = require("./utils");

const app = express();
const PORT = 3000;
const WINDOW_SIZE = 10;

app.get("/numbers/:id", async (req, res) => {
  const id = req.params.id;

  if (!isValidID(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const fetched = await fetchNumbers(id, 500);
    const after = updateNumbers(fetched, WINDOW_SIZE);
    const average = (
      after.reduce((sum, val) => sum + val, 0) / after.length
    ).toFixed(2);

    res.json({after, avg: Number(average) });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
n