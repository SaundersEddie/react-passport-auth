const router = require('express').Router();
const userController = require('../../controller/controller.js');

// const router = express.Router();

// This is all with /api/user
// router.route("/") - Update User
//   .put(userController.updateUser);

router.route("/listall")
    .get(userController.listAll);

// Matches with "/api/user/:userName"
// router.route("/:userName")
//   .get(userController.getUserInfo);

// router.route("/addFriend/:userName")
//   .put(userController.addFriend);

// router.route("/removeFriend/:userName")
//   .delete(userController.removeFriend);


// router.post('/register', userController.registerUser);
// router.get('/listall', userController.listAll);
// router.get('/login', userController.loginUser);
// router.get('/adminmenu', userController.adminMenu);
// router.get('/authmenu', userController.authMenu);

module.exports = router;
