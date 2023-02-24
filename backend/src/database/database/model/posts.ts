import { Model, INTEGER, STRING } from 'sequelize'
import db from '.';
import User from './users';

class Post extends Model {
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
Post.init({
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
  text: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
    field: 'text'
  },
  image: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
    field: 'image'
  },
  title: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
    field: 'title'
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'Post',
  tableName: 'posts'
})

User.belongsTo(Post, {
  foreignKey: 'id',
})

export default Post