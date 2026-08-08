import Link from 'next/link'

export default function Home(){
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
        </div>
        <div className="bg-brandBlue text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brandBlue font-bold">N&amp;H</div>
            <div>
              <div className="text-sm">Assalamu alaikum</div>
              <div className="text-lg font-semibold">Welcome to N & H Arabic & Islamic Academy</div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-lg">Join classes, reading groups, and track your progress.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
