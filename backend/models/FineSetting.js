const mongoose = require('mongoose')

const finesSettingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 10
    },
    interval: {
        type: String,
        default: "day"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("FineSetting", fineSettingSchema)
