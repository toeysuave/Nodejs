/* eslint-disable no-console */
import type { Request, Response } from "express";
// import { accessories } from "@models/V1/Accessories/repository";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getCheckStatus(req: Request, res: Response) {
  try {

    let status : object  ={
      status: 500,
      text: "success"
    }
    return res.json(status);
  } catch (error) {
    console.error(error);

    return res.status(500).send({ error });
  }
}