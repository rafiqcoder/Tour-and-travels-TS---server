/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express'
import { reviewServices } from '../services/review.service'

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    console.log(reviewData)

    const result = await reviewServices.createReview(reviewData)
    res.status(201).json({
      message: 'Review created successfully',
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

const getAllReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewServices.getAllReview()
    console.log(result)

    res.status(201).json({
      message: 'got reviews',
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

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const result = await reviewServices.getSingleReview(reviewData)
    res.status(201).json({
      message: 'Review created successfully',
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

const updateReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const id = req.params.id
    const result = await reviewServices.updateReview(id, reviewData)
    res.status(201).json({
      message: 'Review created successfully',
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

const deleteReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const result = await reviewServices.deleteReview(reviewData)
    res.status(201).json({
      message: 'Review created successfully',
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

export const reviewController = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview,
}
