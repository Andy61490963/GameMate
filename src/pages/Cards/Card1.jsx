"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Heart, X, Gamepad2, Trophy, Sparkles } from "lucide-react";

const mockUsers = [
  {
    id: 1,
    name: "小光",
    games: ["LoL", "APEX"],
    rank: "鑽石",
    avatar:
      "https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg",
    level: 85,
    status: "線上",
    age: 24,
    location: "台北市",
    bio: "熱愛遊戲的軟體工程師，平時喜歡和朋友一起開黑打 LoL，也很愛玩射擊遊戲。希望能找到一起遊戲的夥伴！",
    interests: ["遊戲", "程式設計", "咖啡", "旅行"],
    photos: [
      "https://cdn.pixabay.com/photo/2023/02/01/08/00/anime-girl-7760467_1280.jpg",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    gameStats: {
      LoL: { rank: "鑽石 II", winRate: "68%" },
      APEX: { rank: "白金 I", winRate: "45%" },
    },
    joinDate: "2023年加入",
    lastActive: "2小時前",
  },
  {
    id: 2,
    name: "小艾",
    games: ["VALORANT", "原神"],
    rank: "白金",
    avatar:
      "https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg",
    level: 72,
    status: "遊戲中",
    age: 22,
    location: "新北市",
    bio: "大學生，主修資訊工程。VALORANT 射擊手，原神旅行者。喜歡和有趣的人一起探索遊戲世界～",
    interests: ["遊戲", "動漫", "美食", "攝影"],
    photos: [
      "https://cdn.pixabay.com/photo/2023/11/30/13/06/anime-girl-8420806_1280.jpg",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    gameStats: {
      VALORANT: { rank: "白金 III", winRate: "72%" },
      原神: { rank: "AR 58", winRate: "深淵 12-3" },
    },
    joinDate: "2023年加入",
    lastActive: "正在遊戲中",
  },
  {
    id: 3,
    name: "小明",
    games: ["CS2", "Dota2"],
    rank: "大師",
    avatar:
      "https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg",
    level: 95,
    status: "線上",
    age: 26,
    location: "桃園市",
    bio: "電競老將，CS 和 Dota 雙修。喜歡競技遊戲的刺激感，也樂於指導新手。尋找志同道合的遊戲夥伴！",
    interests: ["電競", "健身", "音樂", "料理"],
    photos: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    gameStats: {
      CS2: { rank: "至尊第一", winRate: "75%" },
      Dota2: { rank: "不朽", winRate: "MMR 6500" },
    },
    joinDate: "2022年加入",
    lastActive: "30分鐘前",
  },
];

export default function SwipeCardPage() {
  const [users, setUsers] = useState(mockUsers);
  const [dragDirection, setDragDirection] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleSwipe = (dir, userId) => {
    console.log(`${dir === "right" ? "右滑配對" : "左滑略過"}: user ${userId}`);
    setUsers((prev) => prev.filter((u) => u.id !== userId));
    setDragDirection(null);
  };

  const openProfile = (user) => {
    setSelectedUser(user);
    setCurrentPhotoIndex(0);
  };

  const closeProfile = () => {
    setSelectedUser(null);
    setCurrentPhotoIndex(0);
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case "大師":
        return "from-purple-500 to-pink-500";
      case "鑽石":
        return "from-blue-400 to-cyan-400";
      case "白金":
        return "from-gray-300 to-gray-500";
      default:
        return "from-green-400 to-blue-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "線上":
        return "bg-green-400";
      case "遊戲中":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  const currentUser = users[0];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 動態背景 - 當前用戶的照片 */}
      <div className="absolute inset-0">
        {currentUser && (
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${
                currentUser.avatar ||
                "https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg"
              })`,
            }}
          />
        )}
        {/* 模糊和暗化覆蓋層 */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-black/60"></div>
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-8">
        <div
          className="
    relative
     mx-auto        
     w-[80vw]        
     sm:w-[400px]    
     md:w-[480px]   
     lg:w-[540px]  
     xl:w-[600px]  
     h-[700px]
   "
        >
          <AnimatePresence>
            {users.map((user, index) => (
              <motion.div
                key={user.id}
                className="absolute inset-0"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                  scale: index === 0 ? 1 : 0.95 - index * 0.02,
                  opacity: 1,
                  y: index * -4,
                  zIndex: users.length - index,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
                drag={index === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={{
                  rotate:
                    dragDirection === "right"
                      ? 10
                      : dragDirection === "left"
                      ? -10
                      : 0,
                  scale: 1.02,
                  transition: { duration: 0.1 },
                }}
                onDrag={(e, info) => {
                  if (info.offset.x > 50) setDragDirection("right");
                  else if (info.offset.x < -50) setDragDirection("left");
                  else setDragDirection(null);
                }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 120) handleSwipe("right", user.id);
                  else if (info.offset.x < -120) handleSwipe("left", user.id);
                  else setDragDirection(null);
                }}
              >
                <div className="relative w-full h-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                  {/* 拖拽指示器 */}
                  <AnimatePresence>
                    {dragDirection && index === 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={`absolute top-6 ${
                          dragDirection === "right" ? "right-6" : "left-6"
                        } z-20 px-4 py-2 rounded-full text-white font-bold text-lg ${
                          dragDirection === "right"
                            ? "bg-green-500 shadow-green-500/50"
                            : "bg-red-500 shadow-red-500/50"
                        } shadow-xl`}
                      >
                        {dragDirection === "right" ? "💖 配對" : "👋 略過"}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 主要圖片區域 */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />

                    {/* 漸變遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* 狀態指示器 */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getStatusColor(
                          user.status
                        )}`}
                      ></div>
                      <span className="text-white text-sm font-medium">
                        {user.status}
                      </span>
                    </div>

                    {/* 等級 */}
                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white text-sm font-bold">
                        Lv.{user.level}
                      </span>
                    </div>

                    {/* 底部用戶信息 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-3xl font-bold text-white">
                              {user.name}
                            </h2>
                            <span className="text-2xl text-white/80">
                              {user.age}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${getRankColor(
                                user.rank
                              )} text-white text-sm font-bold`}
                            >
                              <Trophy size={14} />
                              {user.rank}
                            </div>
                            <span className="text-white/70 text-sm">
                              📍 {user.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <Gamepad2 size={16} className="text-white/70" />
                            <div className="flex flex-wrap gap-2">
                              {user.games.map((game, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium"
                                >
                                  {game}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* 查看更多按鈕 */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => openProfile(user)}
                            className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl py-2 text-white font-medium transition-all duration-200 text-sm"
                          >
                            查看更多資訊
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {users.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <Sparkles className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <p className="text-xl font-bold text-white mb-2">
                  🥺 沒有更多用戶了
                </p>
                <p className="text-purple-200 text-sm mb-4">
                  請稍後再試，或許會有新的遊戲夥伴加入～
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setUsers(mockUsers)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
                >
                  重新載入
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* 個人資料詳情頁 */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProfile}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 關閉按鈕 */}
              <div className="absolute top-4 right-4 z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeProfile}
                  className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* 照片輪播 */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={
                      selectedUser.photos[currentPhotoIndex] ||
                      "/placeholder.svg"
                    }
                    alt={selectedUser.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* 照片指示器 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedUser.photos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPhotoIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentPhotoIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* 基本信息覆蓋 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">
                        {selectedUser.name}
                      </h2>
                      <span className="text-xl text-white/80">
                        {selectedUser.age}
                      </span>
                      <div
                        className={`w-3 h-3 rounded-full ${getStatusColor(
                          selectedUser.status
                        )}`}
                      ></div>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <MapPin size={14} />
                      <span>{selectedUser.location}</span>
                      <Calendar size={14} className="ml-2" />
                      <span>{selectedUser.joinDate}</span>
                    </div>
                  </div>
                </div>

                {/* 詳細信息 */}
                <div className="p-6 space-y-6">
                  {/* 個人簡介 */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      關於我
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {selectedUser.bio}
                    </p>
                  </div>

                  {/* 遊戲統計 */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      遊戲成就
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedUser.gameStats).map(
                        ([game, stats]) => (
                          <div
                            key={game}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-white">
                                {game}
                              </span>
                              <div
                                className={`px-2 py-1 rounded-lg bg-gradient-to-r ${getRankColor(
                                  selectedUser.rank
                                )} text-white text-xs font-bold`}
                              >
                                {stats.rank}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                              <Star size={14} />
                              <span>勝率/成就: {stats.winRate}</span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* 興趣愛好 */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      興趣愛好
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 最後活動時間 */}
                  <div className="text-center text-white/60 text-sm">
                    最後活動: {selectedUser.lastActive}
                  </div>

                  {/* 操作按鈕 */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <MessageCircle size={20} />
                      聊天
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
