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
  name: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false
  },
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