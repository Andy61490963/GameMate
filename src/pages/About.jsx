import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-6">探索 GameMate：你的遊戲戰友搜尋神器</h1>

      <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg relative">
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-base-200 animate-pulse">
            <span className="text-sm text-gray-400">載入中...</span>
          </div>
        )}

        <iframe
          src="https://www.youtube.com/embed/qRhZV-aTsvg"
          title="GameMate Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setVideoLoaded(true)}
        ></iframe>
      </div>

      <p className="text-center text-lg text-gray-600 mt-8 max-w-3xl">
        GameMate 是一款專為玩家設計的平台，提供即時隊友配對、遊戲任務管理、聊天室與戰績統計功能，
        讓你快速找到最佳拍檔，提升遊戲體驗。
      </p>

      <div className="mt-10 flex gap-4">
        <Link to="/login" className="btn btn-primary btn-lg">
          立即開始
        </Link>
      </div>
    </div>
  );
}