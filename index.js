import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("LCS API is running. Use /lcs?a=1,2,3&b=2,3");
});

// LCS route (NUMBERS)
app.get("/lcs", (req, res) => {
  if (!req.query.a || !req.query.b) {
    return res.send("Please provide inputs like ?a=1,2,3&b=2,3");
  }

  const a = req.query.a.split(",").map(Number);
  const b = req.query.b.split(",").map(Number);

  const n = a.length;
  const m = b.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // RETURN ONLY NUMBER
  res.send(String(dp[n][m]));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
