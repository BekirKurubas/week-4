import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Bloggy', 'root', '546trygfh', { // Replace with hicoders "hicoders" and "hicoders_12"
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
