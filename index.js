import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route (health check)
app.get("/", (req, res) => {
  res.send(
    "Longest Common Subsequence (LCS) Dynamic Programming API is running"
  );
});

// LCS API
app.post("/api/lcs", (req, res) => {
  const { s1, s2 } = req.body;

  if (!s1 || !s2) {
    return res.status(400).json({
      error: "Both s1 and s2 are required"
    });
  }

  const m = s1.length;
  const n = s2.length;

  const dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  res.json({
    string1: s1,
    string2: s2,
    lcsLength: dp[m][n],
    technique: "Dynamic Programming (Bottom-Up)"
  });
});

// Render-safe port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
