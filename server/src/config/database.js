import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Bloggy", "root", "546trygfh", { // Replace with hicoders "hicoders" and "hicoders_12"
  host: "localhost",  //Replace with "mysql-hicoders"
  port: 3306,
  dialect: "mysql",
  logging: false
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();

export default sequelize;
