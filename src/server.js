const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "learning_platform",
});

app.get("/api/topics/:languageSlug", async (req, res) => {
  const { languageSlug } = req.params;

  try {
    const result = await pool.query(
      `SELECT t.id, t.title, t.content
       FROM topics t
       JOIN languages l ON t.language_id = l.id
       WHERE l.slug = $1`,
      [languageSlug]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});