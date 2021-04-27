const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        name: {
            type: String,
            required: true,
        },
        animal: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Pet = mongoose.model("Pet", PetSchema);