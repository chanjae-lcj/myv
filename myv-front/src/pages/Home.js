const mockCards = [
  {
    title: "Editor's Pick",
    desc: "감성 가득 커버곡 모음",
    image: "https://via.placeholder.com/200x200.png?text=Cover+1",
  },
  {
    title: "추천 버튜버",
    desc: "요즘 떠오르는 라이브 커버",
    image: "https://via.placeholder.com/200x200.png?text=Cover+2",
  },
  {
    title: "오리지널곡 모음",
    desc: "직접 작곡한 노래들",
    image: "https://via.placeholder.com/200x200.png?text=Cover+3",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">오늘은 뭐 듣지? 🎧</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
