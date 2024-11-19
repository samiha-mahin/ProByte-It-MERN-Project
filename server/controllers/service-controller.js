const Service = require("../models/service-model");

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    if (!services || services.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }
    res.status(200).json(services); // Respond with the retrieved data
  } catch (error) {
    console.error(`Error fetching services: ${error.message}`);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { getAllServices };
