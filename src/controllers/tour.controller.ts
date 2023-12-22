/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express'
import { tourServices } from '../services/tour.service'
const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    console.log(tourData)

    const result = await tourServices.createTour(tourData)
    res.status(201).json({
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}

const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await tourServices.getAllTour()
    console.log(result)

    res.status(201).json({
      message: 'got tours',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await tourServices.getSingleTour(tourData)
    res.status(201).json({
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const id = req.params.id
    const result = await tourServices.updateTour(id, tourData)
    res.status(201).json({
      message: 'Tour updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await tourServices.deleteTour(tourData)
    res.status(201).json({
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}

export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
}
