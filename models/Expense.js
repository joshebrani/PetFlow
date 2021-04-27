const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema(
    {
        // pet: {
        //     type: Schema.Types.ObjectId,
        //     ref: "pets"
        // },
        date: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Expense = mongoose.model("Expense", ExpenseSchema);