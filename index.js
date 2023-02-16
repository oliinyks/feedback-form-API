const express = require('express');
const feedbackRouter = require("./routes/feedback.routes"); 

const { PORT } = require('./config');
const app = express();

app.use(express.json());
app.use('/api', feedbackRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, ()=> console.log('server started'))