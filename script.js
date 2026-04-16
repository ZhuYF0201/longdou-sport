document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 平滑滚动 (仅针对首页锚点链接)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // 如果在移动端点击了链接，关闭菜单
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去 header 的高度
                    behavior: 'smooth'
                });
            }
        });
    });
});
