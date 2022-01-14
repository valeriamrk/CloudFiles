import { Router } from "express";
// import controller from "../controllers/authController.js";
// import { check } from "express-validator";
// import authMiddleware from "../middleware/authMiddleware.js";
// import roleMiddleware from "../middleware/roleMiddleware.js";
// import PostController from "../controllers/authController.js";

const router = new Router();

// router.post(
//   "/registration",
//   [
//     check("username", "Required field").notEmpty(),
//     check("password", "Password must contain 4-10 characters").isLength({
//       min: 4,
//       max: 10,
//     }),
//   ],
//   controller.registration
// );
// router.post("/login", controller.login);
// router.get("/users", roleMiddleware(["USER"]), controller.getUsers);
// router.get("/posts", PostController.getTestPost);
router.get("/posts");

export default router;
