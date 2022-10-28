const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addUserFriend,
  removeUserFriend,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

//  /api/user/:userId
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addUserFriend).delete(removeUserFriend)

module.exports = router;