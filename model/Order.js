module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
    UserName: {
    type: Sequelize.STRING(32),
    allowNull: false,
    },
    UserMobile: {
        type: Sequelize.DECIMAL(10),
        allowNull:false
    },
    ItemsOrdered: {
        type: Sequelize.JSON,
        allowNull:false
    },
    TotalPrice: {
        type: Sequelize.DECIMAL(12,2),
        allowNull:false
    },
    PaymentMode: {
        type: Sequelize.ENUM('CASH', 'CARD', 'ONLINE'),
        allowNull:false
    }
    }, {
    timestamps: true,
    tableName: 'Orders',
    classMethods: {
        associate : function(models) {
            Order.belongsTo(models.waiters)
        },
      },
    });

    Order.associate = (model) => {
        //1:M

        Order.belongsTo(model.waiters,{
            foreignKey: {
                name: 'WaiterId',
                allowNull: false
            }
        });
        Order.belongsTo(model.tables, {
            foreignKey: {
                name: 'TableId',
                allowNull: false
            }
        });
    }

    return Order;
};
// module.exports = Order;