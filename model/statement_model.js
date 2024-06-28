import { Schema, model } from "mongoose";

const statementSchema = new Schema ({
    incidentType: {type: String ,
        enum: ["Criminal", "Non Criminal"]},
    civilianStatus: {type: String,
        enum: ["Witness", "Victim", "Suspect", "Arrested", "Released"]
    },
    statement: {type: String},
    caseStatus: {type: String,
        enum: ["Open", "Closed", "Ongoing", "Under Investigation", "Awaiting Trial"]},
    civilianId: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});







const civilianSchema = new Schema ({
    civilianId: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    middleName: {type: String},
    dateOfBirth: {type: Date},
    email: {type: String},
    phone: {type: String},
    address: {type: String},
    sex: {type: String,
        enum: ["Male", "Female"]
    },
    occupation: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date}
});

// Exporting the statement model
export const StatementModel = model ("statement", statementSchema)