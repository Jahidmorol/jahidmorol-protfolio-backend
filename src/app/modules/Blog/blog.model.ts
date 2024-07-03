import { Schema, model } from 'mongoose';
import { TBlog, TComment, TPost, TRepliesSchema } from './blog.types';

const PostSchema = new Schema<TPost>({
  title: { type: String, required: true },
  photos: { type: [String], required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  views: { type: Number, required: true },
  commentsCount: { type: Number, required: true },
});

const RepliesSchema = new Schema<TRepliesSchema>({
  author: { type: String, required: true },
  content: { type: String, required: true },
});

const CommentSchema = new Schema<TComment>({
  author: { type: String, required: true },
  content: { type: String, required: true },
  replies: { type: [RepliesSchema], default: [] },
});

const BlogSchema = new Schema<TBlog>({
  post: { type: PostSchema, required: true },
  comments: { type: [CommentSchema], default: [] },
});

const Blog = model('Blog', BlogSchema);
export default Blog;
