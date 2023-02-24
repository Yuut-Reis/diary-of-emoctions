import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';
import User from './users';

class WheelOfLife extends Model {
  id!: number;
  user_id!: number;
  financas!: number;
  amor!: number;
  equilibrio!: number;
  espiritualidade!: number;
  saude!: number;
  familia!: number;
  vida_social!: number;
  amor_proprio!: number;
  proposito!: number;
  resignificacao_trauma!: number;
  contribuicao_para_humanidade!: number;
  produtividade!: number; 
}
WheelOfLife.init({
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
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  financas: {
    type: INTEGER,
    allowNull: false,
    field: 'financas',
  },
  amor: {
    type: INTEGER,
    allowNull: false,
    field: 'amor',
  },
  equilibrio: {
    type: INTEGER,
    allowNull: false,
    field: 'equilibrio',
  },
  espiritualidade: {
    type: INTEGER,
    allowNull: false,
    field: 'espiritualidade',
  },
  saude: {
    type: INTEGER,
    allowNull: false,
    field: 'saude',
  },
  familia: {
    type: INTEGER,
    allowNull: false,
    field: 'familia',
  },
  vida_social: {
    type: INTEGER,
    allowNull: false,
    field: 'vida_social',
  },
  amor_proprio: {
    type: INTEGER,
    allowNull: false,
    field: 'amor_proprio',
  },
  proposito: {
    type: INTEGER,
    allowNull: false,
    field: 'proposito',
  },
  resignificacao_trauma: {
    type: INTEGER,
    allowNull: false,
    field: 'resignificacao_trauma',
  },
  contribuicao_para_humanidade: {
    type: INTEGER,
    allowNull: false,
    field: 'contribuicao_para_humanidade',
  },
  produtividade: {
    type: INTEGER,
    allowNull: false,
    field: 'produtividade',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'WheelOfLife',
  tableName: 'wheel_of_life'
})

User.belongsTo(WheelOfLife, {
  foreignKey: 'id',
})

export default WheelOfLife