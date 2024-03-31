const httpStatus = require("http-status");
const FeatureService = require("../service/FeatureService");
const logger = require("../config/logger");

class FeatureController {
  constructor() {
    this.featureService = new FeatureService();
  }

  createFeature = async (req, res) => {
    try {
      const feature = await this.featureService.createFeature(req.body);
      const { message, data } = feature.response;
      res.status(feature.statusCode).send({ message, data });
    } catch (error) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  async getFeature(req, res) {
    try {
      // Implement feature retrieval logic here
      console.log("here");
    } catch (error) {
      logger.error(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  }

  updateFeature = async (req, res) => {
    try {
      const { id } = req.params; // Extract featureId from request params
      const updatedFeatureData = req.body; // Get updated feature data from request body

      const feature = await this.featureService.updateFeature(
        id,
        updatedFeatureData
      );
      const { message, data } = feature.response;
      res.status(feature.statusCode).send({ message, data });
    } catch (error) {
      logger.error(error);
      res.status(httpStatus.BAD_GATEWAY).send(error);
    }
  };

  async deleteFeature(req, res) {
    try {
      // Implement feature deletion logic here
    } catch (error) {
      logger.error(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  }
}

module.exports = FeatureController;
