export type ProjectCategory =
  | "Work Project"
  | "Client Project"
  | "Personal Project"
  | "Internship Project"
  ;

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  poster: string;
  description: string;
  features: string[];
  technologies: string[];
  year: number;
};
