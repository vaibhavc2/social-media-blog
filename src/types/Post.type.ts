export interface Post {
  userId: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
}

export type UpdatePost = Omit<Post, "slug" | "userId">;
