import { Router } from 'express'
import repositoryUsers from '../../repository/users'
import { validateCreate, validateUpdate, validateId } from './validation'

const router = new Router()

router.get('/', async (req, res, next) => {
  const users = await repositoryUsers.listUsers()
  res.status(200).json( users )
})

router.get('/:id', validateId, async (req, res, next) => {
  const { id } = req.params
  const user = await repositoryUsers.getUserById(id)
  user ? res.status(200).json(user) : res.status(404).json({ message: "Not found" })
})

router.post('/', validateCreate, async (req, res, next) => {
  const newUser = await repositoryUsers.addUser(req.body)
  res.status(201).json(newUser)
})

router.delete('/:id', validateId, async (req, res, next) => {
  const { id } = req.params
  const user = await repositoryUsers.removeUser(id)
  user ? res.status(200).json({message: "user deleted"}) : res.status(404).json({ message: "Not Found" })
})

router.put('/:id', validateId, validateUpdate, async (req, res, next) => {
  const { id } = req.params
  const user = await repositoryUsers.updateUser(id, req.body)
  user ? res.status(200).json(user) : res.status(404).json({ message: "Not Found" })
})

export default router
