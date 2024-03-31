const SuperDao = require("./SuperDao");
const models = require("../models");

const Feature = models.feature; // Assuming the name of your feature model is 'Feature'

class FeatureDao extends SuperDao {
  constructor() {
    super(Feature);
  }

  async isFeatureExists(featureName) {
    return Feature.count({ where: { feature_name: featureName } }).then(
      (count) => {
        if (count != 0) {
          return true;
        }
        return false;
      }
    );
  }

  async findById(id) {
    return Feature.findOne({ where: { id } });
  }

  async createWithTransaction(feature, transaction) {
    return Feature.create(feature, { transaction });
  }

  // Implement other methods for CRUD operations as needed
}

module.exports = FeatureDao;
