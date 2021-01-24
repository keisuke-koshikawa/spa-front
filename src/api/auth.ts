import Client from '@/api/client'
import { User } from '@/types/user'
import {
  getAuthDataFromStorage,
  removeAuthDataFromStorage,
  setAuthDataFromResponse
} from '@/utils/auth-data'

export const login = async (email: string, password: string): Promise<User> => {
  return await Client.post('/auth/sign_in', {email, password})
    .then((response) => {
      setAuthDataFromResponse(response.headers)
      return response.data
    })
}

export const logout = async (): Promise<void> => {
  return await Client.delete('/auth/sign_out', { headers: getAuthDataFromStorage() })
    .then(() => {
      removeAuthDataFromStorage()
    })
}

