import Link from 'next/link'

export default function Header({ setLang, lang }: any) {
  const change = (l: string) => setLang(l)
  return (
    <header className="flex items-center justify-between">
      <div className="header-brand">
        <img src="/logo.svg" alt="N&H" className="logo-svg" />
        <div>
          <div className="font-bold">N & H Arabic & Islamic Academy</div>
          <div className="text-sm text-gray-600">Learn • Grow • Succeed</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <select value={lang} onChange={e => change(e.target.value)} className="border p-1 rounded">
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="lg">Luganda</option>
        </select>
      </div>
    </header>
  )
}
