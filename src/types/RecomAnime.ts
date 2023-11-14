export type Data = {
  content: string;
  mal_id: string;
  date: string;
  user: {
    url: string;
    username: string;
  };
  entry: {
    mal_id: string;
    title: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
  }[];
}

export type Pagination = {
  has_next_page: boolean;
  last_visible_page: number;
}
