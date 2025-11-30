'use client';

import { useState } from 'react';
import { videos, videoCategories } from '@/data/videos';
import AdBanner from '@/components/AdBanner';

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0f1923]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎬 영상 <span className="text-[#ff4655]">가이드</span>
          </h1>
          <p className="text-xl text-gray-400">
            프로 플레이어와 전문가들의 발로란트 공략 영상
          </p>
        </div>
      </section>

      <AdBanner />

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {videoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#ff4655] text-white'
                  : 'bg-[#1a2634] text-gray-400 hover:bg-[#2a3644] hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#1a2634] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ff4655] transition-all"
            >
              {/* Video Thumbnail / Player */}
              <div className="relative aspect-video bg-black">
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                      <div className="w-16 h-16 bg-[#ff4655] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">해당 카테고리에 영상이 없습니다.</p>
          </div>
        )}
      </section>

      <AdBanner />
    </div>
  );
}
