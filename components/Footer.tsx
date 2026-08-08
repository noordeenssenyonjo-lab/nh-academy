export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-semibold">N & H Arabic & Islamic Academy</div>
            <div className="mt-2">Learn Arabic. Learn the Qur'an. Grow in Knowledge.</div>
          </div>
          <div className="mt-4 md:mt-0">© {new Date().getFullYear()} N&H Academy</div>
        </div>
      </div>
    </footer>
  )
}
