type Props = {
  author: any;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span>{author.name}</span>
    </>
  );
}
