'use client';

interface AdBannerProps {
  slot: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
}

export default function AdBanner({ slot, format = 'horizontal' }: AdBannerProps) {
  const sizeClasses = {
    horizontal: 'h-24 w-full',
    vertical: 'w-40 h-[600px]',
    rectangle: 'w-[300px] h-[250px]',
  };

  return (
    <div className={`bg-[#1f2326] border border-gray-700 rounded-lg flex items-center justify-center ${sizeClasses[format]}`}>
      <div className="text-center text-gray-500">
        <p className="text-xs">광고 영역</p>
        <p className="text-xs">Google AdSense</p>
        <p className="text-xs text-gray-600">Slot: {slot}</p>
      </div>
      {/* 
        실제 AdSense 코드:
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      */}
    </div>
  );
}
