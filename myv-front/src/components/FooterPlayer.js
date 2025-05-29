export default function FooterPlayer() {
  return (
    <footer className="fixed bottom-0 left-56 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <span>🎵 재생 중: 없음</span>
      <div>
        <button className="mx-2">⏮️</button>
        <button className="mx-2">▶️</button>
        <button className="mx-2">⏭️</button>
      </div>
    </footer>
  );
}
