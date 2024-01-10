import express from "express";
import bodyParser from "body-parser";
import assignmentsRouter from "./apps/assignments.js";
import logging from "./middlewares/logging.js";
import { validateAssignmentData } from "./middlewares/assignmentValidation.js";

const app = express();
const port = 4000;

// app.use(bodyParser.json());
// app.use("/assignments", assignmentRouter);

app.use(bodyParser.json());
app.use([logging, validateAssignmentData]);
app.use("/assignments", assignmentsRouter);

app.listen(port, () => {
  return console.log(`Server is running at ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running at the port ${port}`);
// });
