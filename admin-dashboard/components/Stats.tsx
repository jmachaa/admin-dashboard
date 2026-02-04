export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {["Users", "Orders", "Revenue"].map((item, i) => (
        <div key={i} className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">{item}</p>
          <h2 className="text-2xl font-bold">123</h2>
        </div>
      ))}
    </div>
  )
}