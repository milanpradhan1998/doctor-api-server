const { request, response } = require("express");
const profileModel = require("../Model/profile-Model");
module.exports.getDrById = async (request, response) => {
  try {
    let { id } = request.params;
    let result = await profileModel.findById(id);
    response.status(200).send({
      status: true,
      doctor: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
