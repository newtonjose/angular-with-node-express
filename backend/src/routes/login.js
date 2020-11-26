import { models } from "../db";

export default async (req, res) => {
  try {
    const { email, passwd } = req.body;

    const user = await models.User.findOne({
      where: { email },
    });

    if (user === null) {
      return res.status(400).json({ message: "User not found" });
    }

    if (passwd !== user.dataValues.passwd) {
      return res.status(400).json({ message: "Password invalid" });
    }

    return res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};