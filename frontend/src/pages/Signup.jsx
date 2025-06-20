import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name, email, password
      })
      if (response.data.success) {
        navigate('/login')
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='backdrop-blur-lg bg-white/70 border border-white/30 shadow-2xl p-10 w-96 rounded-3xl'
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl font-extrabold text-center mb-6 text-gray-800'
        >
          Sign Up
        </motion.h2>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <motion.div
            animate={{ scale: focusedField === 'name' ? 1.03 : 1 }}
            transition={{ duration: 0.2 }}
            className='mb-6'
          >
            <label className='block text-gray-700 font-semibold mb-1'>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-400 outline-none transition duration-300 bg-white/80'
              placeholder='Enter your name'
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            animate={{ scale: focusedField === 'email' ? 1.03 : 1 }}
            transition={{ duration: 0.2 }}
            className='mb-6'
          >
            <label className='block text-gray-700 font-semibold mb-1'>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-400 outline-none transition duration-300 bg-white/80'
              placeholder='Enter your email'
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            animate={{ scale: focusedField === 'password' ? 1.03 : 1 }}
            transition={{ duration: 0.2 }}
            className='mb-8'
          >
            <label className='block text-gray-700 font-semibold mb-1'>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-400 outline-none transition duration-300 bg-white/80'
              placeholder='Enter your password'
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: '0px 8px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300'
          >
            Create Account
          </motion.button>

          {/* Link to Login */}
          <p className='text-center mt-6 text-gray-700 text-sm'>
            Already have an account?{' '}
            <Link to='/login' className='text-pink-600 font-semibold hover:underline'>
              Login here
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  )
}

export default Signup
