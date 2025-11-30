import { MetadataRoute } from 'next';
import { agents } from '@/data/agents';
import { maps } from '@/data/maps';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valorant-strategy.vercel.app'; // 나중에 실제 도메인으로 변경

  // 기본 페이지들
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/maps`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/agents`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/lineups`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/team-comps`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/meta`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/community`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
  ];

  // 맵 페이지들
  const mapPages = maps.map((map) => ({
    url: `${baseUrl}/maps/${map.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 요원 페이지들
  const agentPages = agents.map((agent) => ({
    url: `${baseUrl}/agents/${agent.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 라인업 페이지들
  const lineupPages = agents
    .filter((agent) => ['sova', 'viper', 'killjoy', 'cypher', 'brimstone', 'kayo', 'fade', 'gekko'].includes(agent.id))
    .map((agent) => ({
      url: `${baseUrl}/lineups/${agent.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...mapPages, ...agentPages, ...lineupPages];
}
