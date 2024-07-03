import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import ResumeControllers from './resume.controller';
import updateResumeValidation from './resume.validation';

const router = express.Router();

router.get('/', ResumeControllers.getResume);
router.put(
  '/:id',
  AuthGuard(),
  validateRequest(updateResumeValidation),
  ResumeControllers.updateResume,
);

const ResumeRoutes = router;

export default ResumeRoutes;
