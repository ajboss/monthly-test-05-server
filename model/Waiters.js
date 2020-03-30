module.exports = (sequelize, Sequelize) => {
    const Waiter = sequelize.define("waiters", {
        WaiterName: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        WaiterAge: {
            type: Sequelize.DECIMAL(3),
            allowNull: false,
        },
        WaiterMobile: {
            type: Sequelize.DECIMAL(10),
            allowNull: false
        },
        WaiterRatings: {
            type: Sequelize.DECIMAL(10,2),
            defaultValue: 0,
            allowNull:true
        },
        WaiterExperience: {
            type: Sequelize.DECIMAL(10,2),
            defaultValue: 0,
            allowNull:true
        }
    }, {
        timestamps: false,
        tableName: 'Waiters'
    });
    
    Waiter.associate = (model) => {

        Waiter.hasOne(model.order,{
            foreignKey: {
                name:'WaiterId',
                allowNull:false
            }
        });
    }
    return Waiter;
};