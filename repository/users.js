import User from "../model/user"

const listUsers = async () => {
  const result = await User.find()
  return result
}

const getUserById = async (userId) => {
  const result = await User.findById(userId)
  return result
}

const removeUser = async (userId) => {
  const result = await User.findByIdAndRemove(userId)
  return result
}

const addUser = async (body) => {
  const result = await User.create(body)
  return result
}

const updateUser = async (userId, body) => {
  const result = await User.findByIdAndUpdate(
    userId,
    { ...body },
    { new: true },
  )
  return result
}

export default {
  listUsers,
  getUserById,
  removeUser,
  addUser,
  updateUser
}
