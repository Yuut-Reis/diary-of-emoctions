import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}
User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
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
    type: STRING,
    allowNull: false,
    field: 'role',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'User',
  tableName: 'users'
})

export default User