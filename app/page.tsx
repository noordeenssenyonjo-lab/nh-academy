import Link from 'next/link'

export default function Home(){
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-brandBlue">Learn Arabic. Learn the Qur'an. Grow in Knowledge.</h1>
          <p className="mt-4 text-gray-700">A calm place for your family to learn, practice, and grow with trusted teachers.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/courses"><a className="px-5 py-3 bg-brandGreen text-white rounded-md">Explore Courses</a></Link>
            <Link href="/register"><a className="px-5 py-3 border border-brandBlue rounded-md">Register Now</a></Link>
            <Link href="/login"><a className="px-5 py-3 bg-white text-brandBlue rounded-md">Login</a></Link>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Featured Courses</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold">Qur'an Reading & Memorization</h3>
                <p className="text-sm text-gray-600 mt-2">Learn to read and memorize the Qur'an with tajweed.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold">Tajweed</h3>
                <p className="text-sm text-gray-600 mt-2">Master the rules of recitation.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Reading Groups</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="font-semibold">Al-Furqan</div>
                <div className="text-sm text-gray-600 mt-1">Beginner Qur'anic reading group</div>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="font-semibold">Ihsan</div>
                <div className="text-sm text-gray-600 mt-1">Intermediate recitation and tajweed</div>
              </div>
            </div>
          </section>
        </div>
        <div className="rounded-2xl p-4 shadow-lg bg-white">
          <img src="https://raw.githubusercontent.com/noordeenssenyonjo-lab/nh-academy/main/Screenshot_20260807-234044_ChatGPT.jpg" alt="app mockup" className="w-full rounded-lg border" />
          <div className="mt-4 text-sm text-gray-600">Mobile app mockup (provided). I will adapt the pages to match this design responsively.</div>
        </div>
      </div>
    </section>
  )
}
