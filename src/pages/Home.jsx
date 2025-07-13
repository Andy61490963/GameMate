import { Link } from "react-router-dom";
import animeGirl from "../assets/images/AnimeGirlPlayingGame.png";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-base-100 text-base-content px-6 py-12 lg:px-16 lg:py-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* 左側：文字 + CTA */}
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            GameMate<br className="hidden lg:block" />
            遊戲隊友配對平台
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            快速尋找志同道合的隊友、組隊開黑，無痛體驗遊戲社群的魅力！
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/login" className="btn btn-primary btn-lg">
              立即開始
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              了解更多
            </Link>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
            <div className="bg-primary text-white text-sm rounded-full px-3 py-1 font-medium">
              超過 1,000+ 玩家使用
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              成為下一位高手的一員 🎮
            </span>
          </div>
        </div>

        {/* 右側：圖片 */}
        <div className="flex-shrink-0">
          <img
            src={animeGirl}
            alt="動漫女孩遊玩電腦遊戲"
            className="rounded-2xl shadow-xl max-w-full w-[500px] lg:w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
