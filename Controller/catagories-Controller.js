const catagoriesModel = require("../Model/catagories-Model");
module.exports.getCatagoriesList = async (request, response) => {
  try {
    let result = await catagoriesModel.find();
    response.status(200).send({
      status: true,
      catagorie: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
