const SuperDao = require("./SuperDao");
const models = require("../models");

const Role = models.role; // Assuming the name of your role model is 'Role'

class RoleDao extends SuperDao {
  constructor() {
    super(Role);
  }

  async isRoleExists(roleName) {
    return Role.count({ where: { role_name: roleName } }).then((count) => {
      if (count != 0) {
        return true;
      }
      return false;
    });
  }

  async findById(id) {
    return Role.findOne({ where: { id } });
  }

  async createWithTransaction(role, transaction) {
    return Role.create(role, { transaction });
  }

  // Implement other methods for CRUD operations as needed
}

module.exports = RoleDao;
