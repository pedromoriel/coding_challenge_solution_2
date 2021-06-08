const Operation = require('../models/numbers');
const operationCtrl = {};

operationCtrl.getASum = async (req, res) => {
    try {
        let num1 = parseInt(req.body.number1), num2 = parseInt(req.body.number2);
        let result = num1 + num2;
        const sender = {operation: "sum", result: result}
        const sum = await new Operation(sender);
        await sum.save();
        res.json({
            "result": result
        });
    } catch (err) {
        res.json({
            "msg": "Cannot sum numbers."
        });
        console.log(err);
    }
};

operationCtrl.getAProduct = async (req, res) => {
    try {
        let num1 = req.body.result;
        let result = num1 * 2;
        const sender = {operation: "product", result: result}
        const product = await new Operation(sender);
        await product.save();
        res.json({
            "result": result
        });
    } catch (err) {
        res.json({
            "msg": "Cannot Multiply number."
        });
        console.log(err);
    }
};

operationCtrl.getAPower = async (req, res) => {
    try {
        let num1 = req.body.result;
        let result = Math.pow(num1, 2);
        const sender = {operation: "power", result: result}
        const power = await new Operation(sender);
        await power.save();
        res.json([{
            "result": result
        }]);
    } catch (err) {
        res.json({
            "msg": "Cannot Power number."
        });
        console.log(err);
    }
};

module.exports = operationCtrl;