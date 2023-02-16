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
	async getAllFeedbacks(req, res) {
		const feedbacks = await db.query("SELECT * FROM reachOut");
		res.json({
      status: "success",
      code: 200,
      data: {
        newFeedback: feedbacks.rows,
      },
    });
  }
}

module.exports = new feedbackController();
