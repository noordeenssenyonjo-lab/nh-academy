export default function NavBottom() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
      <a href="/" className="text-center text-sm">🏠<div>Home</div></a>
      <a href="/courses" className="text-center text-sm">📚<div>Courses</div></a>
      <a href="/groups" className="text-center text-sm">🕌<div>Groups</div></a>
      <a href="/schedule" className="text-center text-sm">📅<div>Schedule</div></a>
      <a href="/profile" className="text-center text-sm">👤<div>Profile</div></a>
    </nav>
  )
}
