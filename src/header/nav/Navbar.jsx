

const Navbar = () => {
    return (
        <div className="bg-violet-700/70 py-2">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white"
        >
          <h2 className="flex items-center italic">Budget App</h2>
          <div className="flex items-center gap-4">
            <h2>Tahsin Tarannum Chowdhury</h2>
            <a href="#" className="undeline text-sm text-white/50">Sign Out</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;