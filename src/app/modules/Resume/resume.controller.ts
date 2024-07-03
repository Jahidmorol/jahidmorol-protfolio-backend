import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import ResumeServices from './resume.service';

const updateResume = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.updateResume(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resume updated successfully!',
    data: result,
  });
});

const getResume = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.getResume();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resume fetched successfully!',
    data: result,
  });
});

const ResumeControllers = {
  updateResume,
  getResume,
};

export default ResumeControllers;
