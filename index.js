const express = require("express");
const applicationRoutes = require("./routes/applications");

const app = express();
const port = 3000;

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>Application Status API</h1>
    <p>Available endpoints:</p>
    <ul>
      <li><a href="/api/applications/connected">/api/applications/connected</a></li>
      <li><a href="/api/applications/disconnected">/api/applications/disconnected</a></li>
      <li><a href="/api/applications/idle">/api/applications/idle</a></li>
      <li><a href="/api/applications/operational">/api/applications/operational</a></li>
      <li><a href="/api/applications/all">/api/applications/all</a></li>
    </ul>
  `);
});

app.use("/api/applications", applicationRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
