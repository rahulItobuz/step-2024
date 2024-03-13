import { Router } from "express";
import addToCart from "./addToCart.js";

const route = Router();

export default () =>  {
    addToCart(route)
    return route;
}

