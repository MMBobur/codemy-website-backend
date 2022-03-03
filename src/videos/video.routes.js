const router = require("express").Router();
const validate = require("express-validation");
const Validation = require("./video.Validation");
const tutorials = require("../videos/video.controller");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");
const upload = require("../util/uploadfile");

router.get("/", tutorials.findAll);
router.get("/:id", tutorials.findOne);

// router.use(authenticate);
// router.use(permit("admin"));

router.post("/", upload.single("file"), tutorials.create);

router.put("/:id", upload.single("file"), tutorials.update);

router.delete("/:id", validate(Validation.deleteOne), tutorials.delete);

module.exports = router;
