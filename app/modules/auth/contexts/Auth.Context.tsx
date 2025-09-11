'use client'

import { createContext, ReactNode, useContext, useLayoutEffect, useState } from 'react'
import { User } from '../models/User.Model'
import { useRouter } from '@/i18n/navigation'
import { register } from 'module'

interface AuthContextType {
  user?: User
  isLoading: boolean
  login: (email:string, password: string) => Promise<void>
  logout: () => void
  register: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useLayoutEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {return}
    setUser(JSON.parse(user))
  }, [])

  const login =  async (email:string, password: string) => {
    setIsLoading(true)

    try {
      // TODO: Replace with real API call
      const userData = {
        id: 1,
        email: email,
        login: 'admin',
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      router.push('/')
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(undefined)
    localStorage.removeItem('user')
  }

  const register = async () => {

  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}