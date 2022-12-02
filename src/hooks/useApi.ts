import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
})

export const useApi = () => ({

    validateToken: async (token:string) => {

      return {
        user:{
          id: 2,
          name: 'Menezes',
          email: 'frantec@gmail.com'
        }      }

      const response = await api.post('/validate', {token})
      return response.data
    },

    signin: async (email:string, password: string) => {

      return {
        user:{
          id: 2,
          name: 'Menezes',
          email: 'frantec@gmail.com'
        },
        token: '123456789'
      }
        const response = await api.post("/signin", {email, password})

  

        return response.data
    },

    logout: async () => {

      return {status: false}
      const response = await api.post("/logout")

      return response.data
    }




});