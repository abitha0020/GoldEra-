interface NavbarProps{
    name: string;
  }
export default function Header({ name}: NavbarProps) {
  return (
    <>
      <nav className="bg-[#C07F00] bg-opacity-80 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
              {name}
            </span>
          </a>
          <div
            className="w-full md:block md:w-auto"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-white hover:bg-[#4C3D3D]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-white hover:bg-[#4C3D3D]"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
