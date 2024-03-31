const httpStatus = require("http-status");
const logger = require("../config/logger");
const responseHandler = require("../helper/responseHandler");
const FeatureDao = require("../dao/FeatureDao");

class FeatureService {
  constructor() {
    this.featureDao = new FeatureDao();
  }

  /**
   * Create a user
   * @param {Object} featureBody
   * @returns {Object}
   */
  createFeature = async (featureBody) => {
    try {
      let message = "Feature created successfully";
      // Check if the feature already exists
      // if (await this.featureDao.isFeatureExists(featureBody.feature_name)) {
      //   return responseHandler.returnError(
      //     httpStatus.BAD_REQUEST,
      //     "Feature name already exists"
      //   );
      // }

      // Create the feature
      let featureData = await this.featureDao.create(featureBody);

      if (!featureData) {
        message = "Feature creation failed";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      featureData = featureData.toJSON();
      // Optionally modify or clean up the feature data before sending it back in the response
      // For example, deleting sensitive information or formatting data

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        featureData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  async getFeature(featureId) {
    try {
      // Implement feature retrieval logic here using FeatureDao
    } catch (error) {
      logger.error(error);
      return responseHandler.returnError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error"
      );
    }
  }

  async updateFeature(id, updatedFeatureData) {
    console.log(
      "🚀 ~ FeatureService ~ updateFeature ~ updatedFeatureData:",
      updatedFeatureData
    );
    console.log("🚀 ~ FeatureService ~ updateFeature ~ id:", id);

    try {
      // Check if the feature exists
      let feature = await this.featureDao.findById(id);
      if (!feature) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "Feature not found!"
        );
      }

      // Implement feature update logic here using FeatureDao
      // For example, you can update the feature attributes with the updated data
      const updatedFeature = await this.featureDao.updateById(
        updatedFeatureData,
        id
      );

      if (!updatedFeature) {
        return responseHandler.returnError(
          httpStatus.INTERNAL_SERVER_ERROR,
          "Failed to update feature"
        );
      }

      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Feature updated successfully",
        updatedFeature
      );
    } catch (error) {
      logger.error(error);
      return responseHandler.returnError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error"
      );
    }
  }

  async deleteFeature(featureId) {
    try {
      // Implement feature deletion logic here using FeatureDao
    } catch (error) {
      logger.error(error);
      return responseHandler.returnError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error"
      );
    }
  }
}

module.exports = FeatureService;
