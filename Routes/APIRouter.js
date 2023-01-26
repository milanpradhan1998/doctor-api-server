const express = require("express");
const city = require("../Controller/city-Controller");
const bestDoctors = require("../Controller/bestDr-Controller");
const doctors = require("../Controller/profile-Controller");
const order = require("../Controller/order-Controller");
const filterData = require("../Controller/filter-Controller");
const catagoriesList = require("../Controller/catagories-Controller");
const payment = require("../Controller/payment-Controller");
const router = express.Router();

// my 1st home api
router.get("/", (request, response) => {
  response.send("Home api");
});
//city api in get method
router.get("/api/city", city.getCityList);
//catagories by get method
router.get("/api/catagories", catagoriesList.getCatagoriesList);
//best Dr api in get method
router.get("/api/best-doctors", bestDoctors.getBestDr);
//get doctor by id method
router.get("/api/profile/:id", doctors.getDrById);
// save order in post method
router.post("/api/orders-save", order.saveOrders);
// get order history
router.post("/api/orders-details", order.getOrderDetails);
// filter by post method
router.post("/api/filter-data", filterData.getfilterData);
// payment controller
router.post("/api/gen-order-id-payment", payment.genOrderId);
router.post("/api/verify-payment", payment.verifyPayment);

module.exports = router;
