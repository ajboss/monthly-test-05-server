const db = require("../model");
const create = async (req, res) => {
    try{
        const { body } = req;
        let data = await db.order.create({
            UserName: body.UserName,
            UserMobile: body.UserMobile,
            ItemsOrdered: JSON.parse(body.ItemsOrdered),
            TotalPrice: body.TotalPrice,
            PaymentMode: body.PaymentMode,
            createdAt: new Date(),
            updatedAt: new Date(),
            TableId: body.TableId,
            WaiterId: body.WaiterId
        }, {include: [db.waiters, db.tables]});
        res.json(data);
    } catch (err) {
        console.error(err.message);
    }
}

const read = async (req , res) => {
    try{
        let data = await db.order.findAll({include:[db.waiters,db.tables]});
        res.json(data);
    } catch(err) {
        console.error(err.message);
    }
}

const update = async (req, res) => {
    try{
        const {body, params} = req;
        let data = await db.order.update({
            UserName: body.UserName,
            UserMobile: body.UserMobile,
            ItemsOrdered: body.ItemsOrdered,
            TotalPrice: body.TotalPrice,
            PaymentMode: body.PaymentMode,
            updatedAt: new Date(),
            TableId: body.TableId,
            WaiterId: body.WaiterId
        }, {
            where: {id: params.id}
        });
        let msg = (data == 1) ? "Updated Successfully!": "Error updating!";
        res.json(msg);
    } catch(err) {
        console.error(err.message);
    }
}

const del = async(req , res) => {
    try{
        const { params } = req;
        let data = await db.order.destroy({
            where: {id: params.id}
        });
        let msg = (data == 1) ? "Deleted from the database!": "ID not found!";
        res.json(msg);
    } catch(err) {
        console.error(err.message);
    }
}

module.exports = {
    create,
    read,
    update,
    del
}