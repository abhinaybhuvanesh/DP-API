import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// LCS FUNCTION
function lcsLength(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}

// ROOT
app.get("/", (req, res) => {
  res.send("LCS API is running");
});

// ✅ THIS IS WHAT YOUR SIR NEEDS (GET → NUMBER)
app.get("/lcs", (req, res) => {
  const s1 = req.query.s1;
  const s2 = req.query.s2;

  if (!s1 || !s2) {
    return res.send("0");
  }

  const result = lcsLength(s1, s2);
  res.send(result.toString()); // NUMBER ONLY
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
