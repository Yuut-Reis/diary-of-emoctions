"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    /*
    accountId: {
      type: INTEGER,
      allowNull: false,
      field: 'account_id',
      references: {
        model: 'accounts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    */
    role: {
        type: sequelize_1.STRING,
        allowNull: false,
        field: 'role',
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    underscored: true,
    modelName: 'User',
    tableName: 'users'
});
exports.default = User;
//# sourceMappingURL=users.js.map