const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./validator");
const afoCont = require("./controller");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");
const upload = require("../util/uploadfile");

router.get("/", afoCont.findAll);

router.get("/:id", afoCont.findOne);

// router.use(authenticate);
// router.use(permit("admin"));

router.post("/", upload.single("file"), afoCont.create);

router.put("/:id", upload.single("file"), afoCont.update);

router.delete("/:id", validate(Validator.deleteOne), afoCont.delete);

module.exports = router;
