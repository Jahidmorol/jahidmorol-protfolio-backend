import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    images: z
      .array(z.string().min(1, { message: 'Image URL is required' }))
      .min(1, { message: 'At least one image is required' }),
    categories: z
      .array(z.string().min(1, { message: 'Category is required' }))
      .optional(),
    liveLink: z.string().min(1, { message: 'Live link is required' }),
    githubFrontend: z.string().optional(),
    githubBackend: z.string().optional(),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    images: z
      .array(z.string().min(1, { message: 'Image URL is required' }))
      .optional(),
    categories: z
      .array(z.string().min(1, { message: 'Category is required' }))
      .optional(),
    liveLink: z.string().optional(),
    githubFrontend: z.string().optional(),
    githubBackend: z.string().optional(),
  }),
});

const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};

export default ProjectValidations;
