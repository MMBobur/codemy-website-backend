const tutorials = require("./controller");
const router = require("express").Router();
const Validator = require("./about.validator");
const validate = require("express-validation");
const upload = require("../util/uploadfile");

const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", tutorials.findAll);
router.get("/:id", tutorials.findOne);

// router.use(authenticate);
// router.use(permit("admin"));

router.post("/", upload.single("file"), tutorials.create);

router.put("/:id", upload.single("file"), tutorials.update);

router.delete("/:id", validate(Validator.deleteOne), tutorials.delete);

module.exports = router;
