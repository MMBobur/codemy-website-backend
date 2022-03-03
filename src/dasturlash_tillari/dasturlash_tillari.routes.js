const Dastur = require("./dasturlash_tillari.controller");
const router = require("express").Router();
const Validator = require("./dasturlash_tillari.validator");
const validate = require("express-validation");
const upload = require("../util/uploadfile");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", Dastur.findAll);

router.get("/:id", Dastur.findOne);

// router.use(authenticate);
// router.use(permit("admin"));

router.post("/", upload.single("file"), Dastur.create);

router.put("/:id", upload.single("file"), Dastur.update);

router.delete("/:id", validate(Validator.deleteOne), Dastur.delete);

module.exports = router;