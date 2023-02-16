const db = require('../db');

class feedbackController {
  async createFeedback(req, res) {
    const { name, email, message } = req.body;
    const newFeedback = await db.query(
      `INSERT INTO reachOut(name, email, message) values($1, $2, $3) RETURNING *`,
      [name, email, message]
    );
    res.json({
      status: "success",
      code: 201,
      data: {
        newFeedback: newFeedback.rows[0],
      },
    });
  }
  async getAllFeedbacks(req, res) {}
}

module.exports = new feedbackController();
