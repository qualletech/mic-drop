export default function Footer() {
  return (
    <footer className="bg-white/50 shadow">
      <div className="w-full p-6 border-solid md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-left dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://micdrop.nyc/"
            className="hover:underline rounded-lg focus:ring-2 py-2 focus:  ring-orange focus:  ring-offset-4 focus:outline-none"
          >
            Mic Drop
          </a>
          . All Rights Reserved.
          <br />
          NYC's Open Mic Dashboard
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a
              href="/contact"
              className="hover:underline rounded-lg px-3 py-2  focus:ring-2 focus:  ring-orange focus:outline-none   "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
