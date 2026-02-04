'use client'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', value: 200 },
  { name: 'Tue', value: 400 },
  { name: 'Wed', value: 300 },
]

export default function Analytics() {
  return (
    <div className="bg-white p-4 shadow rounded h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}