import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'
import { motion } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem('token', response.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500'>
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
          Login
        </motion.h2>

        <form onSubmit={handleSubmit}>
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
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-400 outline-none transition duration-300 bg-white/80'
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
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-400 outline-none transition duration-300 bg-white/80'
              placeholder='Enter your password'
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: '0px 8px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300'
          >
            Login
          </motion.button>

          {/* Link to Register */}
          <p className='text-center mt-6 text-gray-700 text-sm'>
            Don't have an account?{' '}
            <Link to='/register' className='text-purple-600 font-semibold hover:underline'>
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  )
}

export default Login
