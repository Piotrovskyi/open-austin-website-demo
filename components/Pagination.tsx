import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number | null) => string;
    as: (page: number | null) => string;
  };
};

export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);

  return (
    <div className=" px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-end">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {pagination.map((it, i) =>
              it.excerpt ? (
                <span
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white dark:bg-transparent text-sm font-medium text-gray-700`}
                >
                  ...
                </span>
              ) : (
                <Link href={link.href(it.page)} as={link.as(it.page)}>
                  <a
                    href="#"
                    className={`${
                      it.page === current ? "text-red-500" : ""
                    } first:rounded-l-md  last:rounded-r-md bg-white dark:bg-transparent border-gray-300 text-gray-500 hover:bg-gray-50 md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}
                  >
                    {it.page}
                  </a>
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
