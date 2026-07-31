import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Boxes, TrendingUp, PackageMinus, IndianRupee, Plus, Pencil, Check } from 'lucide-react'
import { SectionHeading } from './Products.jsx'

const SIZE_OPTIONS = ['1L', '4L', '10L', '20L']

export default function InventoryDashboard({ products, setProducts }) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editing, setEditing] = useState(null) // { productId, size }
  const [draftStock, setDraftStock] = useState('')

  // ---- Aggregate totals across every product/size ----
  const totals = useMemo(() => {
    let totalStock = 0
    let totalSold = 0
    let revenue = 0
    let profit = 0

    products.forEach((p) => {
      p.sizes.forEach((s) => {
        const sold = p.sold[s.size] || 0
        const cost = p.costPerUnit[s.size] || 0
        totalStock += s.stock
        totalSold += sold
        revenue += sold * s.price
        profit += sold * (s.price - cost)
      })
    })

    return { totalStock, totalSold, revenue, profit }
  }, [products])

  const startEdit = (productId, size, currentStock) => {
    setEditing({ productId, size })
    setDraftStock(String(currentStock))
  }

  const saveStock = () => {
    const value = Math.max(0, parseInt(draftStock, 10) || 0)
    setProducts((prev) =>
      prev.map((p) =>
        p.id !== editing.productId
          ? p
          : {
              ...p,
              sizes: p.sizes.map((s) => (s.size === editing.size ? { ...s, stock: value } : s)),
            }
      )
    )
    setEditing(null)
  }

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct])
    setShowAddForm(false)
  }

  return (
    <section id="dashboard" className="section-pad max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          eyebrow="Admin Panel"
          title="Inventory dashboard"
          subtitle="Track stock, sales and profit across every shade and size in real time."
        />
        <button
          onClick={() => setShowAddForm((v) => !v)}
          className="btn-primary !py-3 !px-6 text-sm shrink-0"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Summary cards */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard icon={Boxes} label="Total Stock (units)" value={totals.totalStock.toLocaleString('en-IN')} />
        <StatCard icon={PackageMinus} label="Units Sold" value={totals.totalSold.toLocaleString('en-IN')} />
        <StatCard icon={IndianRupee} label="Revenue" value={`₹${totals.revenue.toLocaleString('en-IN')}`} />
        <StatCard icon={TrendingUp} label="Profit" value={`₹${totals.profit.toLocaleString('en-IN')}`} highlight />
      </div>

      {showAddForm && <AddProductForm onAdd={addProduct} onCancel={() => setShowAddForm(false)} />}

      {/* Table */}
      <div className="mt-10 rounded-2xl glass overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="text-left text-muted text-xs uppercase tracking-wider border-b border-white/10">
                <th className="px-5 py-4 font-medium">Product</th>
                <th className="px-5 py-4 font-medium">Size</th>
                <th className="px-5 py-4 font-medium">Price</th>
                <th className="px-5 py-4 font-medium">Stock</th>
                <th className="px-5 py-4 font-medium">Sold</th>
                <th className="px-5 py-4 font-medium">Profit</th>
                <th className="px-5 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.flatMap((p) =>
                p.sizes.map((s, idx) => {
                  const sold = p.sold[s.size] || 0
                  const cost = p.costPerUnit[s.size] || 0
                  const rowProfit = sold * (s.price - cost)
                  const isEditing = editing?.productId === p.id && editing?.size === s.size

                  return (
                    <tr key={`${p.id}-${s.size}`} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                      {idx === 0 ? (
                        <td className="px-5 py-4 font-body align-top" rowSpan={p.sizes.length}>
                          <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.hex }} />
                            <div>
                              <p className="font-medium text-cream">{p.name}</p>
                              <p className="text-xs text-muted">{p.shade}</p>
                            </div>
                          </div>
                        </td>
                      ) : null}
                      <td className="px-5 py-4">{s.size}</td>
                      <td className="px-5 py-4">₹{s.price.toLocaleString('en-IN')}</td>
                      <td className="px-5 py-4">
                        {isEditing ? (
                          <input
                            type="number"
                            min="0"
                            autoFocus
                            value={draftStock}
                            onChange={(e) => setDraftStock(e.target.value)}
                            className="w-20 bg-charcoal-lighter border border-opus-orange/50 rounded-lg px-2 py-1 text-cream focus:outline-none"
                          />
                        ) : (
                          <span className={s.stock <= 5 ? 'text-opus-amber' : ''}>{s.stock}</span>
                        )}
                      </td>
                      <td className="px-5 py-4">{sold}</td>
                      <td className="px-5 py-4 text-emerald-400">₹{rowProfit.toLocaleString('en-IN')}</td>
                      <td className="px-5 py-4 text-right">
                        {isEditing ? (
                          <button onClick={saveStock} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-body text-xs font-medium">
                            <Check size={14} /> Save
                          </button>
                        ) : (
                          <button
                            onClick={() => startEdit(p.id, s.size, s.stock)}
                            className="inline-flex items-center gap-1 text-muted hover:text-opus-amber font-body text-xs font-medium"
                          >
                            <Pencil size={13} /> Update
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, label, value, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-5 glass shadow-card ${highlight ? 'ring-1 ring-opus-orange/40' : ''}`}
    >
      <div className={`w-10 h-10 rounded-xl grid place-items-center mb-4 ${highlight ? 'bg-opus-gradient text-charcoal' : 'bg-white/10 text-cream'}`}>
        <Icon size={18} />
      </div>
      <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
      <p className="mt-1.5 font-display font-bold text-2xl font-mono">{value}</p>
    </motion.div>
  )
}

function AddProductForm({ onAdd, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    shade: '',
    hex: '#FF5A1F',
    type: 'Interior',
    family: 'Warm',
    finish: '',
    size: '1L',
    price: '',
    cost: '',
    stock: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.shade || !form.price || !form.stock) return

    const newProduct = {
      id: `p${Date.now()}`,
      name: form.name,
      shade: form.shade,
      hex: form.hex,
      type: form.type,
      family: form.family,
      finish: form.finish || 'Standard Finish',
      sizes: [{ size: form.size, price: Number(form.price), stock: Number(form.stock) }],
      costPerUnit: { [form.size]: Number(form.cost) || Math.round(Number(form.price) * 0.6) },
      sold: { [form.size]: 0 },
    }
    onAdd(newProduct)
  }

  return (
    <motion.form
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl glass p-6 shadow-card"
    >
      <p className="font-display font-semibold mb-5">New product</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Field label="Product name">
          <input required value={form.name} onChange={update('name')} placeholder="Opus Silk Interior Emulsion" className="input" />
        </Field>
        <Field label="Shade name">
          <input required value={form.shade} onChange={update('shade')} placeholder="Sunrise Amber" className="input" />
        </Field>
        <Field label="Swatch color">
          <input type="color" value={form.hex} onChange={update('hex')} className="w-full h-10 rounded-lg bg-transparent border border-white/10 cursor-pointer" />
        </Field>
        <Field label="Finish">
          <input value={form.finish} onChange={update('finish')} placeholder="Silk Matte" className="input" />
        </Field>

        <Field label="Usage">
          <select value={form.type} onChange={update('type')} className="input">
            <option>Interior</option>
            <option>Exterior</option>
          </select>
        </Field>
        <Field label="Color family">
          <select value={form.family} onChange={update('family')} className="input">
            <option>Warm</option>
            <option>Cool</option>
            <option>Neutral</option>
            <option>Earth</option>
          </select>
        </Field>
        <Field label="Size">
          <select value={form.size} onChange={update('size')} className="input">
            {SIZE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Price (₹)">
          <input required type="number" min="0" value={form.price} onChange={update('price')} placeholder="349" className="input" />
        </Field>

        <Field label="Cost per unit (₹, optional)">
          <input type="number" min="0" value={form.cost} onChange={update('cost')} placeholder="Auto-estimated if left blank" className="input" />
        </Field>
        <Field label="Opening stock">
          <input required type="number" min="0" value={form.stock} onChange={update('stock')} placeholder="30" className="input" />
        </Field>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="btn-primary !py-2.5 !px-6 text-sm">
          <Plus size={16} /> Add to inventory
        </button>
        <button type="button" onClick={onCancel} className="btn-ghost !py-2.5 !px-6 text-sm">
          Cancel
        </button>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #1C1815;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          color: #F5EFE6;
          font-size: 0.875rem;
        }
        .input:focus {
          outline: none;
          border-color: #FF5A1F;
        }
      `}</style>
    </motion.form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs text-muted mb-1.5">{label}</span>
      {children}
    </label>
  )
}
