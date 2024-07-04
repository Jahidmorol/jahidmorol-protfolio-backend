import { Schema, model } from 'mongoose';
import { TProject } from './projects.type';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  categories: { type: [String] },
  liveLink: { type: String },
  githubFrontend: { type: String },
  githubBackend: { type: String },
});

const Project = model<TProject>('Project', projectSchema);

export default Project;
