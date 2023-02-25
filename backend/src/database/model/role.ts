import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';

class Role extends Model {
  id!: number;
  role!: string;
  accountId!: number;
}
Role.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    }
    },
  role: {
    type: STRING,
    allowNull: false
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'Role',
  tableName: 'roles'
})

export default Role