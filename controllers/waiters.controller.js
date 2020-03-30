const db = require("../model");
const create = async (req, res) => {
    try{
        const { body } = req;
        let data = await db.waiters.create({
            WaiterName: body.WaiterName,
            WaiterAge: body.WaiterAge,
            WaiterMobile: body.WaiterMobile,
            WaiterRatings: body.WaiterRatings,
            WaiterExperience: body.WaiterExperience
        });
        res.json(data);
    } catch (err) {
        console.error(err.message);
    }
}

const read = async (req , res) => {
    try{
        let data = await db.waiters.findAll();
        res.json(data);
    } catch(err) {
        console.error(err.message);
    }
}

const update = async (req, res) => {
    try{
        const {body, params} = req;
        let data = await db.waiters.update({
            WaiterName: body.WaiterName,
            WaiterAge: body.WaiterAge,
            WaiterMobile: body.WaiterMobile,
            WaiterRatings: body.WaiterRatings,
            WaiterExperience: body.WaiterExperience
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
        let data = await db.waiters.destroy({
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