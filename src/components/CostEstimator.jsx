import { useMemo, useState } from 'react'

// Editable cost-estimation table. Quantity and unit cost start blank so the
// UI reads as a template ("₹____") rather than a real quotation; totals are
// computed live as values are entered. Nothing here is persisted.
export default function CostEstimator({ equipment }) {
  const [rows, setRows] = useState(() => equipment.map((e) => ({ ...e, unitCost: '' })))

  const updateRow = (index, field, value) => {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, [field]: value } : r)))
  }

  const grandTotal = useMemo(
    () =>
      rows.reduce((sum, r) => {
        const qty = Number(r.qty) || 0
        const cost = Number(r.unitCost) || 0
        return sum + qty * cost
      }, 0),
    [rows]
  )

  return (
    <div>
      <p className="text-xs text-ink-500 mb-4">
        Example Budget — Replace with current vendor quotations. Enter unit costs to see the total update.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="text-left text-ink-500 border-b border-white/10">
              <th className="py-2 pr-3 font-medium">Category</th>
              <th className="py-2 pr-3 font-medium">Quantity</th>
              <th className="py-2 pr-3 font-medium">Unit Cost (₹)</th>
              <th className="py-2 font-medium">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const qty = Number(row.qty) || 0
              const cost = Number(row.unitCost) || 0
              return (
                <tr key={row.category} className="border-b border-white/5">
                  <td className="py-2.5 pr-3 text-ink-300">{row.category}</td>
                  <td className="py-2.5 pr-3">
                    <input
                      type="number"
                      min="0"
                      value={row.qty}
                      onChange={(e) => updateRow(i, 'qty', e.target.value)}
                      className="w-16 rounded-md bg-white/5 border border-white/10 px-2 py-1 text-ink-100 focus:border-accent-cyan/50 outline-none"
                    />
                  </td>
                  <td className="py-2.5 pr-3">
                    <input
                      type="number"
                      min="0"
                      placeholder="____"
                      value={row.unitCost}
                      onChange={(e) => updateRow(i, 'unitCost', e.target.value)}
                      className="w-24 rounded-md bg-white/5 border border-white/10 px-2 py-1 text-ink-100 placeholder:text-ink-500 focus:border-accent-cyan/50 outline-none"
                    />
                  </td>
                  <td className="py-2.5 text-ink-100 font-medium">{qty * cost ? (qty * cost).toLocaleString('en-IN') : '—'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <div className="glass-card rounded-xl px-5 py-3 text-right">
          <p className="text-xs text-ink-500">Estimated Total</p>
          <p className="text-lg font-bold text-gradient">
            {grandTotal ? `₹${grandTotal.toLocaleString('en-IN')}` : '₹____'}
          </p>
        </div>
      </div>
    </div>
  )
}
