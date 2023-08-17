import { Router } from "express";
import { getCheckStatus } from "@controllers/checkStatus";

const route = Router();

route.get("/", getCheckStatus);

export default route;