import api from './apiConfig.js'

export const getRestaurants = async () => {
  try {
    const response = await api.get('/')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getRestaurant = async id => {
  try {
    const response = await api.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createRestaurant = async restaurantData => {
  try {
    const response = await api.post('/', restaurantData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateRestaurant = async (id, restaurantData) => {
  try {
    const response = await api.put(`/${id}`, restaurantData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteRestaurant = async id => {
  try {
    const response = await api.delete(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
