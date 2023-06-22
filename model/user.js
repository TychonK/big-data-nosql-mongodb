import pkg from 'mongoose'
const { Schema, model } = pkg

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for user'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    }
})

const User = model('users', userSchema)

export default User