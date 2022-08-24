import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="bg-gray-800 rounded-3xl p-10 mb-8 shadow text-gray-50 flex justify-between items-center mt-10">
          <div>
            <div className="text-xl mb-2 font-bold">Support Us</div>
            <div className="text-gray-200">
              We maintain full transparency of our finances with{" "}
              <a
                className="underline text-red-500"
                href="https://opencollective.com/"
              >
                Open Collective
              </a>
            </div>
          </div>
          <a
            className="text-white bg-red-500 py-3 px-5 font-bold rounded-xl no-underline hover:text-white hover:bg-red-600"
            href="https://opencollective.com/open-austin/donate"
            target="_blank"
            rel="noreferrer noopener"
          >
            Donate
          </a>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 mt-10">
        <footer className="p-4 !pt-10 sm:p-6  container mx-auto ">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Special Thanks to
              </h2>
              <ul className="sponsor-list">
                <li className="mb-4 max-w-[150px]">
                  <a href="http://www.codeforamerica.org">
                    <img src="/images/footercfa.png" />
                  </a>
                </li>
                <li className=" max-w-[150px]">
                  <a href="http://www.ch3data.com">
                    <img src="/images/footerch3.png" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="dark:text-gray-400">
                <li>
                  <a href="https://www.facebook.com/Open-Austin-412390968837071/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://github.com/open-austin">GitHub</a>
                </li>
                <li>
                  <a href="http://www.meetup.com/Open-Austin/">Meetup</a>
                </li>
                <li>
                  <a href="https://twitter.com/openaustin">Twitter</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="dark:text-gray-400">
                <li>
                  <a href="mailto:info@open-austin.org">Email us</a>
                </li>
                <li>
                  <a href="http://slack.open-austin.org/">
                    Join our Slack group
                  </a>
                </li>
                <li>
                  <a href="http://eepurl.com/cadL-T">
                    Subscribe to our Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Open Austin
              </a>
              . All Rights Reserved.
            </span>

            <div className="mb-6 md:mb-0">
              <Link href="/">
                <a className="flex items-center">
                  <Image
                    src="/icons/open-austin-logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="OPEN AUSTIN Logo"
                    width={50}
                    height={50}
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    OPEN AUSTIN
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
