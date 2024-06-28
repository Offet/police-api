import { Router } from "express";
// import the exported things from the statement controller file
import { addStatement, deleteStatement, getStatement, getStatementId, updateStatement } from "../controllers/statement_controller.js";

// creating a router 
const statementRouter = Router();


statementRouter.post("/statement", addStatement);

statementRouter.get("/statement", getStatement);

statementRouter.get("/statement/:id", getStatementId);

statementRouter.patch("/statement/:id", updateStatement);

statementRouter.delete("/statement/:id", deleteStatement);

//  export router
export default statementRouter;