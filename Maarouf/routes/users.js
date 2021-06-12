var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
const config = require('../config/config.json');
router.get('/', async function (req, res, next) {
  const limit = parseInt(req.query.limit) || 10;
  res.send(await usersRepo.getUsers(limit))
});
router.delete('/:id', async function (req, res, next) {
  const id = req.params.id
  await usersRepo.deleteUser(id)
})
router.put('/', async function (req, res, next) {
  const user = req.body
  res.send(await usersRepo.updateUser(user))
})
router.post('/', async function (req, res, next) {
  const user = req.body
  const retrievedUser = await usersRepo.getUserByEmail(user.email)
  if (!retrievedUser) {
    res.send(await usersRepo.addUser(user))
  } else {
    res.status(400).json({ message: 'Email already exists!' })
  }
})
router.get('/:id', async function (req, res, next) {
  res.send(await usersRepo.getUser(req.params.id))
})
module.exports = router;
