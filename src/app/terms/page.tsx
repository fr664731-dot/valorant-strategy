export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">이용약관</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제1조 (목적)</h2>
          <p>
            본 약관은 VALOSTRAT(이하 &quot;사이트&quot;)가 제공하는 서비스의 이용조건 및 
            절차, 사이트와 이용자의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제2조 (서비스의 내용)</h2>
          <p>사이트는 다음과 같은 서비스를 제공합니다:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>발로란트 게임 전략 및 가이드 정보</li>
            <li>맵별 전략, 요원 가이드, 라인업 정보</li>
            <li>팀 조합 추천 및 메타 분석</li>
            <li>사용자 간 전략 공유 게시판</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제3조 (면책조항)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              사이트는 Riot Games와 공식적인 제휴 관계가 없는 팬 사이트입니다.
            </li>
            <li>
              &quot;발로란트(VALORANT)&quot; 및 관련 상표는 Riot Games, Inc.의 자산입니다.
            </li>
            <li>
              본 사이트는{' '}
              <a href="https://www.riotgames.com/en/legal" target="_blank" rel="noopener noreferrer" className="text-[#ff4655] hover:underline">
                Riot Games Legal Jibber Jabber
              </a>
              {' '}정책을 준수합니다.
            </li>
            <li>
              사이트에서 제공하는 정보는 참고용이며, 게임 내 실제 결과와 다를 수 있습니다.
            </li>
            <li>
              사이트는 제공된 정보의 정확성을 보장하지 않으며, 이용으로 인한 
              손해에 대해 책임지지 않습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제4조 (저작권)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              사이트가 작성한 콘텐츠의 저작권은 사이트에 귀속됩니다.
            </li>
            <li>
              이용자가 게시한 콘텐츠의 저작권은 해당 이용자에게 귀속됩니다.
            </li>
            <li>
              게임 관련 이미지, 명칭 등의 저작권은 Riot Games에 귀속됩니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제5조 (이용자의 의무)</h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>타인의 개인정보 도용</li>
            <li>사이트 운영을 방해하는 행위</li>
            <li>불법적이거나 부적절한 콘텐츠 게시</li>
            <li>타인의 명예를 훼손하거나 불이익을 주는 행위</li>
            <li>기타 관련 법령에 위배되는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제6조 (서비스 변경 및 중단)</h2>
          <p>
            사이트는 운영상, 기술상의 필요에 따라 서비스를 변경하거나 중단할 수 있으며, 
            이에 대해 별도의 보상을 하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제7조 (약관의 변경)</h2>
          <p>
            본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 
            사이트에 공지함으로써 효력이 발생합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">제8조 (준거법 및 관할)</h2>
          <p>
            본 약관의 해석 및 분쟁에 관하여는 대한민국 법률을 적용하며, 
            분쟁 발생 시 관할 법원은 민사소송법에 따릅니다.
          </p>
        </section>

        <div className="pt-8 border-t border-gray-700 text-sm text-gray-500">
          <p>시행일자: 2025년 11월 30일</p>
        </div>
      </div>
    </div>
  );
}
