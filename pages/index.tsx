import Link from 'next/link'
import Header from '../../components/Header'

export default function Home({ setLang, lang }: any) {
  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />

      <section className="mt-4">
        <div className="bg-gradient-to-b from-nhblue to-white text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold">Assalamu alaikum!</h2>
          <p className="mt-2 text-lg">Learn Arabic. Learn the Qur'an. Grow in Knowledge.</p>
          <p className="mt-3">A calm place for your family to learn, practice, and grow with trusted teachers.</p>
          <div className="flex gap-3 mt-4">
            <Link href="/register"><a className="px-4 py-2 bg-nhgreen rounded text-white">Register Now</a></Link>
            <Link href="/login"><a className="px-4 py-2 border border-white rounded text-white">Login</a></Link>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Featured Courses</h3>
        <div className="mt-3 space-y-3">
          <Link href="/courses/quran-reading"><a className="block p-3 border rounded-lg">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">Qur'an Reading & Memorization</div>
                <div className="text-sm text-gray-600">Beginner • Ustadh Bilal</div>
              </div>
              <div className="text-sm text-nhgreen">Enroll</div>
            </div>
          </a></Link>

          <Link href="/courses/tajweed"><a className="block p-3 border rounded-lg">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">Tajweed</div>
                <div className="text-sm text-gray-600">Intermediate • Ustadh Ali</div>
              </div>
              <div className="text-sm text-nhgreen">Enroll</div>
            </div>
          </a></Link>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Reading Groups</h3>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Link href="/groups/al-furqan"><a className="p-3 border rounded">Al-Furqan</a></Link>
          <Link href="/groups/al-huda"><a className="p-3 border rounded">Al-Huda</a></Link>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Upcoming Classes</h3>
        <div className="mt-2 p-3 border rounded">Tajweed Foundations — Today, 6:30 PM — Live</div>
      </section>

      <section className="mt-6 mb-20">
        <h3 className="text-lg font-semibold">Why choose N&H</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Qualified teachers</li>
          <li>Live interactive classes</li>
          <li>Certificates upon completion</li>
        </ul>
      </section>

    </div>
  )
}
