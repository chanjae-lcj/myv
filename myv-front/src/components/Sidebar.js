import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="bg-black text-white w-56 h-screen fixed left-0 top-0 flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">myV</h1>
      <nav className="flex flex-col space-y-4 text-sm">
        <Link to="/" className="hover:text-pink-400">홈</Link>
        <Link to="/vtubers" className="hover:text-pink-400">Vtubers</Link>
        <Link to="/vmusics" className="hover:text-pink-400">Vmusics</Link>
        <Link to="/community" className="hover:text-pink-400">커뮤니티</Link>
        <Link to="/announcements" className="hover:text-pink-400">공지사항</Link>
      </nav>
    </aside>
  );
}
