const db = require("../model");
const create = async (req, res) => {
    try{
        const { body } = req;
        let data = await db.tables.create({
            SeatingStrength: body.SeatingStrength,
            TableName: body.TableName,
            FloorNumber: body.FloorNumber
        });
        res.json(data);
    } catch (err) {
        console.error(err.message);
    }
}

const read = async (req , res) => {
    try{
        let data = await db.tables.findAll();
        res.json(data);
    } catch(err) {
        console.error(err.message);
    }
}

const update = async (req, res) => {
    try{
        const {body, params} = req;
        let data = await db.tables.update({
            SeatingStrength: body.SeatingStrength,
            TableName: body.TableName,
            FloorNumber: body.FloorNumber
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
        let data = await db.tables.destroy({
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