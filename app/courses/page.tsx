import Link from 'next/link'

export default function Courses(){
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Courses</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/courses/quran-reading"><a className="p-4 border rounded-lg shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">قرآن</div>
          <div>
            <div className="font-semibold">Qur'an Reading & Memorization</div>
            <div className="text-sm text-gray-600">Learn to read and memorize the Qur'an</div>
          </div>
        </a></Link>
        <Link href="/courses/tajweed"><a className="p-4 border rounded-lg shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">تجويد</div>
          <div>
            <div className="font-semibold">Tajweed</div>
            <div className="text-sm text-gray-600">Master the rules of Tajweed</div>
          </div>
        </a></Link>
      </div>
    </section>
  )
}
