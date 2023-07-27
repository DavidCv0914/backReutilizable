import { Router } from "express";
import { createCajones, createTecnicas } from "../controllers/crud.js";

export const create = Router()

create.post("/createCajones", createCajones)
create.post("/createTecnicas", createTecnicas)