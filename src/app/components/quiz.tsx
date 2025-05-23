export default function Quiz() {
  return (
    <div
      className="bg-[#f5e7e7] min-h-screen p-8"
      style={{
        paddingTop: "55px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        paddingRight: "3rem",
        paddingLeft: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <h1 className="text-2xl font-semibold">NOME DA FASE</h1>

        <div className="flex gap-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded font-semibold"
            style={{ borderRadius: "24px" }}
          >
            Pular fase
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold"
            style={{ borderRadius: "24px" }}
          >
            Ajuda
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md" style={{ height: "60vh" }}>
        <div
          className="text-center text-lg"
          style={{ height: "80%", alignContent: "center" }}
        >
          |0⟩ — [H] — [H] — ?
        </div>

        <div
          className="flex justify-center gap-6"
          style={{ height: "20%", padding: "1rem" }}
        >
          <div className="bg-gray-300 px-6 py-3 rounded cursor-pointer hover:bg-gray-400">
            |0⟩
          </div>
          <div className="bg-gray-300 px-6 py-3 rounded cursor-pointer hover:bg-gray-400">
            |1⟩
          </div>
          <div className="bg-gray-300 px-6 py-3 rounded cursor-pointer hover:bg-gray-400">
            -|1⟩
          </div>
          <div className="bg-gray-300 px-6 py-3 rounded cursor-pointer hover:bg-gray-400">
            1/√2|0⟩
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
          style={{ borderRadius: "24px" }}
        >
          Avançar
        </button>
      </div>
    </div>
  );
}
