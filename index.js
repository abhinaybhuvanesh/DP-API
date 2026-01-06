import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route (optional but useful)
app.get("/", (req, res) => {
  res.send("Longest Common Subsequence (LCS) Dynamic Programming API is running");
});

// Dynamic Programming - Longest Common Subsequence
function longestCommonSubsequence(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// API endpoint
app.post("/api/lcs", (req, res) => {
  const { s1, s2 } = req.body;

  if (!s1 || !s2) {
    return res.status(400).json({
      error: "Both s1 and s2 strings are required"
    });
  }

  const lcsLength = longestCommonSubsequence(s1, s2);

  res.json({
    string1: s1,
    string2: s2,
    lcsLength,
    technique: "Dynamic Programming (Bottom-Up)"
  });
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
