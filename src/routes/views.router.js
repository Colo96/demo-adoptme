import { Router } from "express";
import { usersService } from "../services/index.js";
import { petsService } from "../services/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("welcome");
});

router.get("/users", async (req, res) => {
  const usersDB = await usersService.getAll();
  const users = usersDB.map((user) => {
    return {
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
    };
  });
  res.render("users", { users });
});
router.get("/pets", async (req, res) => {
  const petsDB = await petsService.getAll();
  const pets = petsDB.map((pet) => {
    return {
      name: pet.name,
      specie: pet.specie,
      image: pet.image,
    };
  });
  res.render("pets", { pets });
});

export default router;
