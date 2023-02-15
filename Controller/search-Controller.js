const { request, response } = require("express");
const profileModel = require("../Model/profile-Model");

module.exports.getSearchResult = async (request, response) => {
  try {
    let { catagories_id, search } = request.body;
    let result = await profileModel.find(
      {
        name: { $regex: search + ".*", $options: "i" },
        cetagory_id: Number(catagories_id),
      },
      {
        _id: 1,
        name: 1,
        city: 1,
        p_image: 1,
        cetagory: 1,
      }
    );
    response.status(200).send({ status: true, doctors: result });
  } catch (error) {
    response.status(500).send({ status: false, error });
  }
};
