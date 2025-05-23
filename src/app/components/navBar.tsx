export default function Navbar() {
  return (
    <nav
      className="bg-blue-900 text-white flex justify-between items-center px-6 py-3"
      style={{ height: "55px", position: "fixed", width: '100vw'}}
    >
      <div className="flex gap-4 items-center">
        <span className="font-bold">HOME</span>
        <a href="#" className="hover:underline">
          Sobre Nós
        </a>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="🔍"
          className="p-1 rounded text-black"
        />
        <button className="bg-white text-blue-900 px-3 py-1 rounded">
          Login
        </button>
      </div>
    </nav>
  );
}
