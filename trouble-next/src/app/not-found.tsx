export default function NotFound() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>페이지를 찾을 수 없습니다.</h2>
            <p>요청하신 페이지가 존재하지 않거나 이동되었어요.</p>
            <a href="/" style={{ color: '#0070f3' }}>
                메인으로 돌아가기 →
            </a>
        </div>
    );
}
