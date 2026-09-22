import { useMemo, useState } from 'react'

// Interactive checklist grouped by category. Purely client-side state —
// resets whenever the modal is remounted, which is fine for a portfolio
// demonstration of a testing process rather than a real tracked project.
export default function TestingChecklist({ categories }) {
  const allItems = useMemo(
    () => Object.entries(categories).flatMap(([cat, items]) => items.map((item) => `${cat}::${item}`)),
    [categories]
  )
  const [checked, setChecked] = useState(() => new Set())

  const toggle = (key) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div>
      <p className="text-sm text-ink-500 mb-4">
        {checked.size} / {allItems.length} items checked
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-accent-cyan mb-2">{category}</h4>
            <ul className="space-y-2">
              {items.map((item) => {
                const key = `${category}::${item}`
                const isChecked = checked.has(key)
                return (
                  <li key={key}>
                    <label className="flex items-center gap-2.5 text-sm text-ink-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(key)}
                        className="w-4 h-4 rounded accent-accent-cyan"
                      />
                      <span className={isChecked ? 'line-through text-ink-500' : ''}>{item}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
