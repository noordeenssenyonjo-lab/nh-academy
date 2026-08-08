import Link from 'next/link'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/"><a className="flex flex-col items-center text-xs text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>Home</a></Link>
        <Link href="/courses"><a className="flex flex-col items-center text-xs text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" /></svg>Courses</a></Link>
        <Link href="/groups"><a className="flex flex-col items-center text-xs text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87" /></svg>Groups</a></Link>
        <Link href="/schedule"><a className="flex flex-col items-center text-xs text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Schedule</a></Link>
        <Link href="/profile"><a className="flex flex-col items-center text-xs text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.9 0 5.57.86 7.879 2.333M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Profile</a></Link>
      </div>
    </nav>
  )
}
