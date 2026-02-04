import Stats from '@/components/Stats'
import Analytics from '@/components/Analytics'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Stats />
      <Analytics />
    </div>
  )
}