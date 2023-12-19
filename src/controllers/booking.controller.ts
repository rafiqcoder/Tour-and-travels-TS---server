/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express'
import { bookingServices } from '../services/booking.service'


const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body
    console.log(bookingData)

    const result = await bookingServices.createBooking(bookingData)
    res.status(201).json({
      message: 'Booking created successfully',
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

const getAllBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.getAllBooking()
    console.log(result)

    res.status(201).json({
      message: 'got bookings',
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

const getSingleBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body
    const result = await bookingServices.getSingleBooking(bookingData)
    res.status(201).json({
      message: 'Booking created successfully',
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

const updateBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body
    const id = req.params.id
    const result = await bookingServices.updateBooking(id, bookingData)
    res.status(201).json({
      message: 'Booking created successfully',
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

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body
    const result = await bookingServices.deleteBooking(bookingData)
    res.status(201).json({
      message: 'Booking created successfully',
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

export const bookingController = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}
