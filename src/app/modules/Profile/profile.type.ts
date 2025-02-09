export type TProfile = {
  name: string;
  designation: string;
  introduction: string;
  profilePicture: string;
  frontEndSkills: string;
  backEndSkills: string;
  tools: string;
  socialLinks: {
    linkedin: string;
    github: string;
    x: string;
    facebook: string;
    youtube: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  resumeLink: string;
  finishedProjects?: string;
  workingHours?: string;
  awardsWon?: string;
  age?: string;
  freelance?: string;
  residence?: string;
  address?: string;
  hobby?: string;
};
