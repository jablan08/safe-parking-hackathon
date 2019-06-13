const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
    resource: String,
    servicePlanningArea: String,
    operator: String,
    website: String,
    address: String,
    email: String,
    phone: String,
    hoursOfOperation: {},
    walkInsAllowed: Boolean,
    eligibilityRequirements: String,
    populationNotes: String,
    notes: String,
})

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource