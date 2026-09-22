import { ArrowDown } from 'lucide-react'

// Renders a simple "trunk then branch" topology:
//   trunk[0] -> trunk[1] -> ... -> trunk[n]
//                                    |
//                        ┌───────────┼───────────┐
//                     branch[0]  branch[1]   branch[2]
//
// Wrapped in an overflow-x-auto container so it stays readable on mobile
// instead of squeezing the page layout.
export default function TrunkBranchDiagram({ trunk, branch }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col items-center min-w-[420px] py-2">
        {trunk.map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            <div className="glass-card rounded-xl px-5 py-3 text-sm font-semibold text-ink-100 border-accent-cyan/30">
              {node}
            </div>
            <ArrowDown className="w-4 h-4 text-accent-cyan my-2" aria-hidden="true" />
          </div>
        ))}

        {/* branch splitter */}
        <div className="relative w-full flex justify-center">
          <div
            className="absolute top-0 h-px bg-accent-cyan/40"
            style={{ left: '15%', right: '15%' }}
            aria-hidden="true"
          />
        </div>

        <div className="flex justify-center gap-8 mt-4 w-full">
          {branch.map((node) => (
            <div key={node} className="flex flex-col items-center">
              <div className="w-px h-4 bg-accent-cyan/40" aria-hidden="true" />
              <div className="glass-card rounded-xl px-4 py-2.5 text-sm font-medium text-ink-100 border-accent-green/30 whitespace-nowrap">
                {node}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
