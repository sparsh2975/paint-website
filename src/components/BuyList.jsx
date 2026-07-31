import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, ShoppingBag, Receipt, IndianRupee, History, X } from 'lucide-react'
import { SectionHeading } from './Products.jsx'

export default function BuyList({ purchases, setPurchases }) {
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return purchases
    return purchases.filter(
      (p) =>
        p.description.toLowerCase().includes(q) ||
        p.materialCode.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q) ||
        p.invoiceNo.toLowerCase().includes(q)
    )
  }, [purchases, query])

  // Newest first, so "check original cost" naturally shows the latest price up top
  const sorted = useMemo(
    () => [...filtered].sort((a, b) => (b.invoiceDate || '').localeCompare(a.invoiceDate || '')),
    [filtered]
  )

  const totals = useMemo(() => {
    const totalSpent = purchases.reduce((sum, p) => sum + p.taxableAmount, 0)
    const totalUnits = purchases.reduce((sum, p) => sum + p.qty, 0)
    const invoiceCount = new Set(purchases.map((p) => p.invoiceNo)).size
    return { totalSpent, totalUnits, invoiceCount }
  }, [purchases])

  const addPurchase = (entry) => {
    setPurchases((prev) => [{ ...entry, id: `pu${Date.now()}` }, ...prev])
    setShowForm(false)
  }

  return (
    <section id="buylist" className="section-pad max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          eyebrow="Purchase Ledger"
          title="Buy list"
          subtitle="Every item bought from the distributor, searchable by name or material code — so you always know your original cost."
        />
        <button onClick={() => setShowForm((v) => !v)} className="btn-primary !py-3 !px-6 text-sm shrink-0">
          <Plus size={16} /> Log a Purchase
        </button>
      </div>

      {/* Summary */}
      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        <StatCard icon={ShoppingBag} label="Line Items Logged" value={totals.totalUnits.toLocaleString('en-IN')} />
        <StatCard icon={Receipt} label="Invoices on File" value={totals.invoiceCount} />
        <StatCard icon={IndianRupee} label="Total Spent (Taxable)" value={`₹${totals.totalSpent.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`} highlight />
      </div>

      {/* Search */}
      <div className="mt-10 relative max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={17} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by shade, material code, or invoice no..."
          className="w-full bg-charcoal-lighter border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-cream focus:outline-none focus:border-opus-orange"
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-cream">
            <X size={15} />
          </button>
        )}
      </div>

      {showForm && <AddPurchaseForm onAdd={addPurchase} onCancel={() => setShowForm(false)} />}

      {/* Table */}
      <div className="mt-8 rounded-2xl glass overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="text-left text-muted text-xs uppercase tracking-wider border-b border-white/10">
                <th className="px-5 py-4 font-medium">Item</th>
                <th className="px-5 py-4 font-medium">Material Code</th>
                <th className="px-5 py-4 font-medium">Size</th>
                <th className="px-5 py-4 font-medium">Qty</th>
                <th className="px-5 py-4 font-medium">Rate (cost)</th>
                <th className="px-5 py-4 font-medium">Net Cost</th>
                <th className="px-5 py-4 font-medium">Invoice</th>
                <th className="px-5 py-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((p) => (
                <tr key={p.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                  <td className="px-5 py-4 font-body">
                    <p className="text-cream font-medium">{p.description}</p>
                    {p.note && <p className="text-[11px] text-opus-amber mt-0.5 font-body">{p.note}</p>}
                  </td>
                  <td className="px-5 py-4 text-muted">{p.materialCode}</td>
                  <td className="px-5 py-4">{p.size}</td>
                  <td className="px-5 py-4">{p.qty}</td>
                  <td className="px-5 py-4">₹{p.rate.toLocaleString('en-IN')}</td>
                  <td className="px-5 py-4 text-opus-amber">₹{p.taxableAmount.toLocaleString('en-IN')}</td>
                  <td className="px-5 py-4 text-muted">{p.invoiceNo}</td>
                  <td className="px-5 py-4 text-muted">{p.invoiceDate || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-muted text-sm py-10 font-body">No purchases match "{query}" yet.</p>
        )}
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs text-muted font-body">
        <History size={14} className="shrink-0 mt-0.5" />
        Sorted newest first — when several rows share a material code, the top one is your most recent (and usually most current) cost for that item.
      </p>
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

function AddPurchaseForm({ onAdd, onCancel }) {
  const [form, setForm] = useState({
    description: '',
    materialCode: '',
    size: '1L',
    qty: '',
    rate: '',
    disc: '',
    invoiceNo: '',
    invoiceDate: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.description || !form.qty || !form.rate) return

    const qty = Number(form.qty)
    const rate = Number(form.rate)
    const disc = Number(form.disc) || 0
    const taxableAmount = qty * rate - disc

    onAdd({
      description: form.description,
      materialCode: form.materialCode || '—',
      size: form.size,
      qty,
      rate,
      disc,
      taxableAmount,
      invoiceNo: form.invoiceNo || 'Manual entry',
      invoiceDate: form.invoiceDate,
    })
  }

  return (
    <motion.form
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl glass p-6 shadow-card"
    >
      <p className="font-display font-semibold mb-5">Log a new purchase</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Field label="Item / shade name">
          <input required value={form.description} onChange={update('description')} placeholder="SWP WHT Calista Sparkle Wood Primer" className="input" />
        </Field>
        <Field label="Material code">
          <input value={form.materialCode} onChange={update('materialCode')} placeholder="9610039900210" className="input" />
        </Field>
        <Field label="Size">
          <select value={form.size} onChange={update('size')} className="input">
            {['50ml', '100ml', '200ml', '500ml', '1L', '4L', '10L', '10kg', '20L'].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Quantity">
          <input required type="number" min="0" value={form.qty} onChange={update('qty')} placeholder="6" className="input" />
        </Field>

        <Field label="Rate per unit (₹)">
          <input required type="number" min="0" step="0.01" value={form.rate} onChange={update('rate')} placeholder="214.00" className="input" />
        </Field>
        <Field label="Discount (₹, optional)">
          <input type="number" min="0" step="0.01" value={form.disc} onChange={update('disc')} placeholder="51.36" className="input" />
        </Field>
        <Field label="Invoice number">
          <input value={form.invoiceNo} onChange={update('invoiceNo')} placeholder="JK2635256881" className="input" />
        </Field>
        <Field label="Invoice date">
          <input type="date" value={form.invoiceDate} onChange={update('invoiceDate')} className="input" />
        </Field>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="btn-primary !py-2.5 !px-6 text-sm">
          <Plus size={16} /> Add to buy list
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
