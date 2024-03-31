const httpStatus = require("http-status");
const RoleService = require("../service/RoleService");
const logger = require("../config/logger");

class RoleController {
  constructor() {
    this.roleService = new RoleService();
  }

  createRole = async (req, res) => {
    try {
      const role = await this.roleService.createRole(req.body);
      const { message, data } = role.response;
      res.status(role.statusCode).send({ message, data });
    } catch (error) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  async getRole(req, res) {
    try {
      // Implement role retrieval logic here
      console.log("here");
    } catch (error) {
      logger.error(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  }

  updateRole = async (req, res) => {
    try {
      const { id } = req.params; // Extract roleId from request params
      const updatedRoleData = req.body; // Get updated role data from request body

      const role = await this.roleService.updateRole(id, updatedRoleData);
      const { message, data } = role.response;
      res.status(role.statusCode).send({ message, data });
    } catch (error) {
      logger.error(error);
      res.status(httpStatus.BAD_GATEWAY).send(error);
    }
  };

  async deleteRole(req, res) {
    try {
      // Implement role deletion logic here
    } catch (error) {
      logger.error(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  }
}

module.exports = RoleController;
