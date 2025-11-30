'use client';

import { useState } from 'react';
import AdBanner from '@/components/AdBanner';

const mockPosts = [
  {
    id: 1,
    title: '다이아 찍은 어센트 A 사이트 공략법 공유합니다',
    author: 'ProGamer123',
    map: '어센트',
    category: '전략',
    likes: 234,
    comments: 45,
    createdAt: '2시간 전',
  },
  {
    id: 2,
    title: '소바 리콘 볼트 라인업 모음 (전맵)',
    author: 'SovaMain',
    map: '전체',
    category: '라인업',
    likes: 567,
    comments: 89,
    createdAt: '5시간 전',
  },
  {
    id: 3,
    title: '솔랭 탈출 팁: 요원 선택부터 다르게',
    author: 'RankUpKing',
    map: '전체',
    category: '팁',
    likes: 892,
    comments: 156,
    createdAt: '1일 전',
  },
  {
    id: 4,
    title: '바이퍼 원웨이 스모크 위치 정리',
    author: 'ViperQueen',
    map: '브리즈',
    category: '라인업',
    likes: 345,
    comments: 67,
    createdAt: '1일 전',
  },
  {
    id: 5,
    title: '5인큐 팀 조합 추천 (맵별)',
    author: 'TeamPlayer',
    map: '전체',
    category: '팀조합',
    likes: 456,
    comments: 78,
    createdAt: '2일 전',
  },
];

const categories = ['전체', '전략', '라인업', '팁', '팀조합', '질문'];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">전략 공유</h1>
          <p className="text-gray-400">유저들의 전략과 팁을 공유하고 배워보세요</p>
        </div>
        <button className="bg-[#ff4655] hover:bg-[#ff4655]/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          글쓰기
        </button>
      </div>

      <AdBanner slot="community-top" format="horizontal" />

      {/* Category Filter */}
      <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-[#ff4655] text-white'
                : 'bg-[#1f2326] text-gray-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="mt-6 space-y-4">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1f2326] border border-gray-700 rounded-xl p-6 card-hover cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#ff4655]/20 text-[#ff4655] px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {post.map}
                  </span>
                </div>
                <h3 className="text-lg font-semibold hover:text-[#ff4655] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.createdAt}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  ❤️ {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  💬 {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg ${
              page === 1
                ? 'bg-[#ff4655] text-white'
                : 'bg-[#1f2326] text-gray-400 hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <AdBanner slot="community-bottom" format="horizontal" />
      </div>
    </div>
  );
}
