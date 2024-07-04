// export type TProject = {
//   _id?: string;
//   title: string;
//   description: string;
//   categories: string[];
//   images: string[];
//   liveLink: string;
//   githubFrontend: string;
//   githubBackend: string;
// };

// v1 project type ---=>
export type TProject = {
  name: string;
  title: string;
  description: string;
  tech: string[];
  githubClient?: string;
  githubServer?: string;
  liveLink: string;
  image: string;
};
