const router = require("express").Router();
let Plant = require("../models/plants.model");

router.route("/").get((req, res) => {
  Plant.find()
    .then((plants) => res.json(plants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const status = req.body.status;

  const newPlant = new Plant({
    name,
    type,
    status,
  });

  newPlant
    .save()
    .then(() => res.json("Plant added."))
    .catch((err) => res.status(400).json("Error " + err));
});

// router.route("/:id").get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercise) => res.json(exercise))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise Deleted"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/update/:id").post((req, res) => {
//   Exercise.findById(req.params.id).then((exercise) => {
//     exercise.username = req.body.username;
//     exercise.description = req.body.description;
//     exercise.duration = Number(req.body.duration);
//     exercise.date = Date.parse(req.body.date);

//     exercise
//       .save()
//       .then(() => res.json("Exercise Updated."))
//       .catch((err) => res.status(400).json("Error: " + err));
//   });
// });

module.exports = router;
