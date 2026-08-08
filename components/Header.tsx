import Link from 'next/link'

export default function Header(){
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
        </nav>
      </div>
    </header>
  )
}
