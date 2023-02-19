import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';
import User from './users';

class WheelOfLife extends Model {
  id!: number;
  userId!: number;
  financas!: number;
  amor!: number;
  equilibrio!: number;
  espiritualidade!: number;
  saude!: number;
  familia!: number;
  vidaSocial!: number;
  amorProprio!: number;
  proposito!: number;
  resignificacaoTrauma!: number;
  contribuicaoParaHumanidade!: number;
  produtividade!: number; 
}
WheelOfLife.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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

User.belongsTo(WheelOfLife, {
    foreignKey: 'id',
  })

export default WheelOfLife