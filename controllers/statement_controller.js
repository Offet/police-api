//  importing the statement model created
import { StatementModel } from "../model/statement_model.js";


/* removing all the (req, res) => ... etc function to one fileURLToPath, in order to minimise the code in it
with that, the router file can have the variable name that contains 
the variable name instead of the long (req, res) => {....} function*/

// writing a function to store data in a database, and also export afterwards
export const addStatement = async (req, res) => {

    try{
        console.log("request", req.body);
        /* adding the statement model data to the database*/
        const addData = await StatementModel.create(req.body);
        res.status(200).send(addData);

    } catch(error) {
        console.log(error)
    }
};

// getting all statements
export const getStatement = async (req, res, next) => { /* next is used to handle try catch errors in express*/
    try {
        // get all statements from database 
    const allStatements = await StatementModel.find(); /* find is used to retrieve items*/
        // Return all recipes
        res.json(allStatements);
    } catch (error) {
        next(error);
    }
};

// getting a particular statement by id

export const getStatementId = async (req, res, next) => { /* next is used to handle try catch errors in express*/
    try {
        // get a particular statement from database 
    const statementId = await StatementModel.findById(req.params.id); /* find is used to retrieve items*/
        // Return a particular statement id
        res.json(statementId); /* you could have used the res.status(200).send(statementId) method here; */
    } catch (error) {
        next(error);
    }
};

// updating the case status from open to close
// export const updateStatement = async (req, res, next) => {
//     try {
//         const updatedStatement = await StatementModel.updateOne(req.params.id); /* update one updates only one*/
//         res.json(updatedStatement);
//     } catch (error) {
//         next(error);
//     }
// };

// Updating by an id rectified
export const updateStatement = async (req, res, next) => {
    try {

        const status = req.body.caseStatus;
        console.log("request", status);
        const updatedStatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status}); /* update one updates only one*/
        res.status(200).send(updatedStatement);

    } catch(error) {
        console.log(error);
    }
};

// deleting by an id
export const deleteStatement = async (req, res, next) => {
    try {
        const deletestatus = req.body.caseStatus;
        console.log("deleting", deletestatus);
        const deletedStatement = await StatementModel.findByIdAndDelete(req.params.id); /* update one updates only one*/
        res.status(200).send(deletedStatement);
    } catch (error) {
        console.log(error);
    }
};
/* Read more on 
1. async and await
2. try catch...try catch works like try except in python */