// import { z } from 'zod';

// const RepliesSchema = z.object({
//   author: z.string().min(1, { message: 'Author is required' }),
//   content: z.string().min(1, { message: 'Content is required' }),
// });

// const CommentSchema = z.object({
//   author: z.string().min(1, { message: 'Author is required' }),
//   content: z.string().min(1, { message: 'Content is required' }),
//   replies: z.array(RepliesSchema).default([]),
// });

// const PostSchema = z.object({
//   title: z.string().min(1, { message: 'Title is required' }),
//   photos: z
//     .array(z.string().min(1, { message: 'Photo URL is required' }))
//     .min(1, { message: 'At least one photo is required' }),
//   content: z.string().min(1, { message: 'Content is required' }),
//   tags: z
//     .array(z.string().min(1, { message: 'Tag is required' }))
//     .min(1, { message: 'At least one tag is required' }),
//   views: z
//     .number()
//     .nonnegative({ message: 'Views must be a non-negative number' }),
//   commentsCount: z
//     .number()
//     .nonnegative({ message: 'Comments count must be a non-negative number' }),
// });

// const createBlogValidation = z.object({
//   body: z.object({
//     post: PostSchema,
//     comments: z.array(CommentSchema).default([]),
//   }),
// });

// export default createBlogValidation;

// v1 blog validation ---=>
import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

export default createBlogValidation;
