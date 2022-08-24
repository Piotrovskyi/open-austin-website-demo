import dayjs from 'dayjs'

type Props = {
  date: Date | string;
};
export default function Date({ date }: Props) {
  const dayjsDate = dayjs(date)
  return (
    <time dateTime={dayjsDate.toISOString()} className="bg-gray-200 py-1.5 px-2 text-xs rounded ">
      <span>Published: {dayjsDate.format("DD MMM YYYY")}</span>
    </time>
  );
}
