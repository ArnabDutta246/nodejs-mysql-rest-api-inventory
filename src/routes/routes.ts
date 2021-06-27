import express from "express";
import deleteBrand from "../pages/brands/delete";
// controller
import fetchAllBrand from "../pages/brands/fetch-all";
import createBrand from "../pages/brands/insert-brand";
import updateBrand from "../pages/brands/update";
const router = express.Router();

//routes
router.post("/create/brand", createBrand);
router.get("/get/all-brands", fetchAllBrand);
router.patch("/update/brand", updateBrand);
router.delete("/delete/brand", deleteBrand);
// export the const
export = router;
