
type PostType = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly summary: string;
  readonly thumb: string;
  readonly thumbalt: string;
}

export default PostType
