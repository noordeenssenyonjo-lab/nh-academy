import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [lang, setLang] = useState('en')

  useEffect(()=>{
    try{
      const saved = localStorage.getItem('nh_lang') || 'en'
      setLang(saved)
    }catch(e){}
  },[])

  function changeLang(e: any){
    const v = e.target.value
    setLang(v)
    try{ localStorage.setItem('nh_lang', v) }catch(e){}
    // reload to let server re-evaluate if you wire i18n later
    window.location.reload()
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><a className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-brandGreen text-white flex items-center justify-center font-bold">N&amp;H</div><div className="font-semibold">N & H Arabic & Islamic Academy</div></a></Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/courses"><a>Courses</a></Link>
          <Link href="/groups"><a>Reading Groups</a></Link>
          <Link href="/schedule"><a>Schedule</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/login"><a className="px-3 py-1 border rounded">Login</a></Link>
          <select value={lang} onChange={changeLang} className="ml-2 border rounded px-2 py-1 text-sm">
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="lg">Luganda</option>
          </select>
        </nav>
        <div className="md:hidden">
          <select value={lang} onChange={changeLang} className="border rounded px-2 py-1 text-sm">
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="lg">LG</option>
          </select>
        </div>
      </div>
    </header>
  )
}
