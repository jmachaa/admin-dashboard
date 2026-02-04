export default function Users() {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">John</td>
            <td className="p-2 border">john@test.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}