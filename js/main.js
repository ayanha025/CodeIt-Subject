// ============================================
// TEOS - Minimal interactivity (hover-first UI)
// 아이콘은 HTML에 인라인 SVG로 삽입되어 있어 별도 스프라이트 로드가 필요 없음.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // 모바일에서 햄버거 버튼으로 사이드바 토글 (해당 버튼이 있는 경우)
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.querySelector('[data-toggle-sidebar]');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('is-open'));
  }
});