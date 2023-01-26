const { request, response } = require("express");
const profileModel = require("../Model/profile-Model");
module.exports.getfilterData = async (request, response) => {
  let { page, city_id, rating, cetagory_id, l_cost, h_cost, sort } =
    request.body;
  sort = sort ? sort : 1;
  page = page ? page : 1;
  const filterData = {};
  if (city_id !== undefined) filterData["city_id"] = city_id;
  if (rating !== undefined) filterData["rating"] = { $gt: rating, $lt: 5 };
  if (cetagory_id !== undefined) filterData["cetagory_id"] = cetagory_id;
  if (l_cost !== undefined && h_cost !== undefined)
    filterData["fee"] = { $gt: l_cost, $lt: h_cost };
  console.log(filterData);
  try {
    let result = await profileModel
      .find(filterData, {
        _id: 1,
        name: 1,
        city: 1,
        location: 1,
        fee: 1,
        p_image: 1,
        cetagory: 1,
        rating: 1,
        time: 1,
        locatin: 1,
      })
      .sort({ fee: sort });
    response.status(200).send({
      status: true,
      filteredData: result,
    });
    console.log(result);
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
