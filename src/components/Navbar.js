import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-50">
      <div className="flex items-center mr-auto">
        <p className="text-gray-800 font-medium text-lg mt-5 ml-5 hover:text-blue-400 transition duration-200 ease-in-out">
          <Link href="/">Paul Schofield</Link>
        </p>
      </div>
      <div className="flex justify-right items-center">
        <p className="text-gray-800 font-medium text-lg mt-5 mr-6 hover:text-blue-400 transition duration-200 ease-in-out">
          <Link href="/projects">Projects</Link>
        </p>
        <p className="text-gray-800 font-medium text-lg mt-5 mr-6 hover:text-blue-400 transition duration-200 ease-in-out">
          <Link href="/readinglist">Reading List</Link>
        </p>
      </div>
    </div>
  );
}
