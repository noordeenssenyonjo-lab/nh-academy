export default function Footer() {
  return (
    <footer className="p-4 text-sm text-gray-600 mt-6">
      <div>© {new Date().getFullYear()} N & H Arabic & Islamic Academy — Learn • Grow • Succeed</div>
      <div className="mt-2">Contact: <a href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_CONTACT || 'nharabicacademy@gmail.com'}`} className="text-nhgreen">{process.env.NEXT_PUBLIC_ADMIN_CONTACT || 'nharabicacademy@gmail.com'}</a></div>
    </footer>
  )
}
