module.exports = (sequelize, Sequelize) => {
   const Menu = sequelize.define("menu", {
   ItemName: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   CuisineName: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   VegEggNonVeg: {
      type: Sequelize.ENUM('VEG', 'EGG', 'NON-VEG'),
      allowNull: false,
   },
   ItemPrice: {
      type: Sequelize.DECIMAL(12,2),
      allowNull:false
   }
   }, {
   timestamps: false,
   tableName: 'Menu'
   });

   return Menu;
};