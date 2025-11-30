export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            VALOSTRAT(이하 &quot;사이트&quot;)는 현재 회원가입 기능을 제공하지 않으며, 
            별도의 개인정보를 직접 수집하지 않습니다. 다만, 서비스 이용 과정에서 
            아래와 같은 정보가 자동으로 생성되어 수집될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. 자동 수집 정보</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>IP 주소, 브라우저 종류, 운영체제</li>
            <li>방문 일시, 서비스 이용 기록</li>
            <li>쿠키(Cookie) 정보</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. 쿠키(Cookie) 사용</h2>
          <p className="mb-3">
            사이트는 사용자 경험 향상 및 광고 서비스 제공을 위해 쿠키를 사용합니다.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>필수 쿠키:</strong> 사이트 기본 기능 작동에 필요</li>
            <li><strong>분석 쿠키:</strong> 방문자 통계 및 사이트 개선 목적</li>
            <li><strong>광고 쿠키:</strong> Google AdSense를 통한 맞춤형 광고 제공</li>
          </ul>
          <p className="mt-3">
            브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 서비스 이용이 제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. 광고 서비스</h2>
          <p className="mb-3">
            사이트는 Google AdSense를 통해 광고를 게재합니다. Google은 사용자의 
            관심사에 기반한 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
          </p>
          <p>
            Google의 광고 쿠키 사용에 대한 자세한 내용은{' '}
            <a 
              href="https://policies.google.com/technologies/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ff4655] hover:underline"
            >
              Google 광고 정책
            </a>
            에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. 개인정보의 보유 및 파기</h2>
          <p>
            자동 수집된 정보는 수집 목적이 달성된 후 지체 없이 파기됩니다. 
            단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. 이용자의 권리</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>쿠키 수집 거부 (브라우저 설정)</li>
            <li>Google 맞춤 광고 비활성화 (Google 광고 설정)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. 개인정보처리방침 변경</h2>
          <p>
            본 방침은 법령 및 서비스 변경에 따라 수정될 수 있으며, 
            변경 시 사이트를 통해 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. 문의</h2>
          <p>
            개인정보 관련 문의사항은 아래 이메일로 연락해 주세요.
          </p>
          <p className="mt-2 text-[#ff4655]">[이메일 주소를 입력하세요]</p>
        </section>

        <div className="pt-8 border-t border-gray-700 text-sm text-gray-500">
          <p>시행일자: 2025년 11월 30일</p>
        </div>
      </div>
    </div>
  );
}
