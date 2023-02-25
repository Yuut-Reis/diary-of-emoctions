import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  password!: string;
  accountId!: number;
  username!: string;
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
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false
  },
  token: {
    type: STRING,
    allowNull: false,
    field: 'token',
  },
  pronoun: {
    type: STRING,
    allowNull: false,
    field: 'pronoun',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'User',
  tableName: 'users'
})


export default User