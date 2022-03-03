const Kurslar = require("./kurslar.controller");
const router = require("express").Router();
const Validator = require("./kurslar.validator");
const validate = require("express-validation");
const upload = require("../util/uploadfile");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", Kurslar.findAll);

router.get("/:id", Kurslar.findOne);

// router.use(authenticate);
// router.use(permit("admin"));

router.post("/", upload.single("file"), Kurslar.create);

router.put("/:id", upload.single("file"), Kurslar.update);

router.delete("/:id", validate(Validator.deleteOne), Kurslar.delete);

module.exports = router;