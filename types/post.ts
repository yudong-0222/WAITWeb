export interface Post {
  slug: string;
  type: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  isTop?: boolean;
}
