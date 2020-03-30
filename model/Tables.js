module.exports = (sequelize, Sequelize) => {
  let Table = sequelize.define("tables", {
      SeatingStrength: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TableName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      FloorNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }
    },
    {
      timestamps: false,
      tableName: 'Tables'
    }
  );

  Table.associate = (model) => {

    Table.hasOne(model.order,{
        foreignKey: {
            name:'TableId',
            allowNull:false
        }
    });
  }
  return Table;
};