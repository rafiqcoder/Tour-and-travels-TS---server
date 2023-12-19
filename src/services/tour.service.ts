import { Itour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTour = async (userData: Itour): Promise<Itour> => {
  const result = await Tour.create(userData)
  return result
}

const getAllTour = async (): Promise<Itour[]> => {
  const result = await Tour.find()
  return result
}

const getSingleTour = async (id: string): Promise<Itour | null> => {
  const result = await Tour.findById(id)
  return result
}

const updateTour = async (
  id: string,
  userData: Itour,
): Promise<Itour | null> => {
  const result = await Tour.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTour = async (id: string): Promise<Itour | null> => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

export const tourServices = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
}
