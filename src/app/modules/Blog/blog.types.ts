// export type TPost = {
//   title: string;
//   photos: string[];
//   content: string;
//   tags: string[];
//   categories: string[];
//   views: number;
//   commentsCount: number;
// };

// export type TRepliesSchema = {
//   author: string;
//   content: string;
// };

// export type TComment = {
//   author: string;
//   content: string;
//   replies: TRepliesSchema[];
// };

// export type TBlog = {
//   post: TPost;
//   comments: TComment[];
// };

// v1 type-----=>
export type TBlog = {
  title: string;
  content: string;
  image: string;
  publicationDate?: Date;
};
