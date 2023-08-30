const tModel = require("../model/travellingModel");

const Add = async (req, res) => {
  try {
    const addDetails = new tModel({
      Name: req.body.Name,
      Email: req.body.Email,
      From: req.body.From,
      To: req.body.To,
      Adults: req.body.Adults,
      Childrens: req.body.Childrens,
      Password: req.body.Password,
    });
    const saveDetails = await addDetails.save();
    res.status(200).send({ msg: "Booked", data: saveDetails });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { Add };
