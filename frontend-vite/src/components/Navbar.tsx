const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-10 h-12">
      <div className=" flex items-center justify-between h-full w-full md:w-1/2 md:mx-auto px-3 ">
        {/* Title/Brand */}
        <div className="">
          <a
            href="/"
            className="text-xl font-light text-gray-900 tracking-tight hover:underline"
          >
            second brain
          </a>
        </div>

        {/* Navigation Link */}
        <div className="">
          <a href="/create" className="text-black hover:underline text-sm">
            Post
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
