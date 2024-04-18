export interface BlogCategoryMenuProps {
  id: number;
  categoryName: string;
  isActive: boolean;
}

export interface BlogListCategoryProps {
  id: number;
  categoryName: string;
  data: string[];
}

export interface BlogItems {
  id: number;
  blogThumbImage?: string | any;
  blogDate: string;
  blogTitle: string;
  blogTags: string;
  blogUrl: string;
}