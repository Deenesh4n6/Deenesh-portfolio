import { ArrowDown } from 'lucide-react'

const trunk = ['Internet', 'ISP Modem', 'Firewall', 'Core / Managed Switch']
const branches = [
  { vlan: 'Staff VLAN', device: 'PCs / Laptops', extra: ['Network Printer', 'Server / NAS'] },
  { vlan: 'Guest VLAN', device: 'Wi-Fi (Access Points)', extra: [] },
  { vlan: 'CCTV VLAN', device: 'Cameras', extra: [] },
]

// A hand-built, mobile-scrollable diagram for the 25-user company network
// proposal. Only the Staff branch continues further down (to a printer and
// server/NAS), matching the asymmetric topology in the brief — the other
// two columns are simply shorter.
export default function CompanyNetworkDiagram() {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col items-center min-w-[640px] py-2">
        {trunk.map((node) => (
          <div key={node} className="flex flex-col items-center">
            <div className="glass-card rounded-xl px-5 py-3 text-sm font-semibold text-ink-100 border-accent-cyan/30">
              {node}
            </div>
            <ArrowDown className="w-4 h-4 text-accent-cyan my-2" aria-hidden="true" />
          </div>
        ))}

        <div className="relative w-full flex justify-center mb-1">
          <div className="absolute top-0 h-px bg-accent-cyan/40" style={{ left: '12%', right: '12%' }} aria-hidden="true" />
        </div>

        <div className="grid grid-cols-3 gap-6 w-full mt-3">
          {branches.map((b) => (
            <div key={b.vlan} className="flex flex-col items-center gap-2">
              <div className="w-px h-4 bg-accent-cyan/40" aria-hidden="true" />
              <div className="glass-card rounded-xl px-3 py-2 text-sm font-medium text-accent-green border-accent-green/30 text-center whitespace-nowrap">
                {b.vlan}
              </div>
              <ArrowDown className="w-4 h-4 text-ink-500" aria-hidden="true" />
              <div className="glass-card rounded-xl px-3 py-2 text-xs text-ink-100 text-center whitespace-nowrap">
                {b.device}
              </div>

              {b.extra.map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-ink-500" aria-hidden="true" />
                  <div className="glass-card rounded-xl px-3 py-2 text-xs text-ink-100 text-center whitespace-nowrap">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
