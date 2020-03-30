const db = require("../model");
const create = async (req, res) => {
    try{
        const { body } = req;
        let data = await db.menu.create({
            ItemName: body.ItemName,
            CuisineName: body.CuisineName,
            VegEggNonVeg: body.VegEggNonVeg,
            ItemPrice: body.ItemPrice
        });
        res.json(data);
    } catch (err) {
        console.error(err.message);
    }
}

const read = async (req , res) => {
    try{
        let data = await db.menu.findAll();
        res.json(data);
    } catch(err) {
        console.error(err.message);
    }
}

const update = async (req, res) => {
    try{
        const {body, params} = req;
        let data = await db.menu.update({
            ItemName: body.ItemName,
            CuisineName: body.CuisineName,
            VegEggNonVeg: body.VegEggNonVeg,
            ItemPrice: body.ItemPrice
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
        let data = await db.menu.destroy({
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