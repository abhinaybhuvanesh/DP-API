# DP-API – Longest Common Subsequence (LCS)

DP-API is a **Dynamic Programming–based REST API** that computes the  
**Longest Common Subsequence (LCS)** between two numeric sequences.

This project is designed as an **academic implementation** that demonstrates the practical application of Dynamic Programming concepts through a RESTful API.


## 🚀 Live Deployment
🔗 https://dp-api-wr2q.onrender.com

## 📌 API Endpoint

### GET /lcs

Calculates the length of the Longest Common Subsequence between two sequences.

---

##  Input Format

Inputs are provided as **query parameters**:

- `a` → First numeric sequence (comma-separated)
- `b` → Second numeric sequence (comma-separated)

---

##  Output Format

- Returns **only a number**
- The number represents the **length of the LCS**

---

## 🧪 Example Usage

### Request

🔗 https://dp-api-wr2q.onrender.com/lcs?a=1,2,3,4&b=2,3

### 2

##  Algorithm Used
- **Dynamic Programming**
- Bottom-up DP table approach

### Time Complexity
O(n × m)

shell
Copy code

### Space Complexity
O(n × m)

yaml
Copy code

Where:
- `n` = length of first sequence  
- `m` = length of second sequence  

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- Render (for deployment)

---

## 📂 Project Structure

DP-API/
│── index.js
│── package.json
│── package-lock.json
│── .gitignore
│── test.http

yaml
Copy code

---

## Key Features

- Accepts **numeric input only**
- Returns **numeric output only**
- Uses efficient Dynamic Programming
- Fully deployed and accessible online
- Internship and academic ready

---

##  Author
**THOTA ABHINAY BHUVANESH**
