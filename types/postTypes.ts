import { User } from "@prisma/client";

export interface PostTypes {
  id: string;
  createdAt: Date | string;
  title: string;
  img: string | null;
  desc: string;
  featured: boolean;
  topPost: boolean;
  category: string;
  user: User;
}