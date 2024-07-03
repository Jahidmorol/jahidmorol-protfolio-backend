import Resume from './resume.model';
import { TResume } from './resume.type';

const updateResume = async (id: string, payload: TResume) => {
  return await Resume.findByIdAndUpdate(id, payload, { new: true });
};

const getResume = async () => {
  return await Resume.findOne();
};

const ResumeServices = {
  updateResume,
  getResume,
};

export default ResumeServices;
