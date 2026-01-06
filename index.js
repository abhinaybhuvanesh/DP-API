import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Home route
 */
app.get("/", (req, res) => {
  res.send("LCS API is running. Use /lcs?a=1,2,3&b=2,3");
});

/**
 * LCS logic (numbers)
 */
function lcsLength(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
}

/**
 * LCS API route
 * Example:
 * /lcs?a=1,2,3,4&b=2,3,4
 */
app.get("/lcs", (req, res) => {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({
      error: "Provide inputs like ?a=1,2,3&b=2,3"
    });
  }

  const arr1 = a.split(",").map(Number);
  const arr2 = b.split(",").map(Number);

  const length = lcsLength(arr1, arr2);

  res.json({
    sequence1: arr1,
    sequence2: arr2,
    lcsLength: length
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
