const visibleClass = 'visible';
const trackElement = shadow.querySelector('.banner-track');
const bannerWrapper = shadow.querySelector('.banner-wrapper');
const banners = shadow.querySelectorAll('.banner');
const nav = shadow.querySelector('.nav');
//
const initNav = () => {
    nav.addEventListener('click', (e) => {
        const target = e.target;
        const targetSelector = target.getAttribute('data-target');
        navigate(targetSelector);
    })
}
initNav();

const initFontSize = () => {
    const wrapperWidth = bannerWrapper.clientWidth;
    const calcSize = wrapperWidth * .013;
    bannerWrapper.style.fontSize = calcSize + 'px';
}
initFontSize();
window.addEventListener('resize', initFontSize);
window.addEventListener('orientationchange', initFontSize);

const navigate = (targetSelector) => {
    const targetBanner = shadow.querySelector('.' + targetSelector);
    if (!targetBanner) {
        console.warn('targetBanner not found', targetSelector);
        return;
    }
    banners.forEach(b => b.classList.remove(visibleClass));
    targetBanner.classList.add(visibleClass);
    bannerWrapper.className = 'banner-wrapper --current' + targetSelector;
    if (targetSelector === '--b01') {
        trackElement.style.transform = 'translate(0, 0)';
    }
    else if (targetSelector === '--b02') {
        trackElement.style.transform = 'translate(0, -50%)';
    }
    else if (targetSelector === '--b03') {
        trackElement.style.transform = 'translate(-50%, -50%)';
    }
    else if (targetSelector === '--b04') {
        trackElement.style.transform = 'translate(-50%, 0)';
    }
    else if (targetSelector === '--b05') {
        trackElement.style.transform = 'translate(0, 0)';
    }
    else if (targetSelector === '--b06') {
        trackElement.style.transform = 'translate(0, 50%)';
    }
    else if (targetSelector === '--b07') {
        trackElement.style.transform = 'translate(50%, 50%)';
    }
    else if (targetSelector === '--b08') {
        trackElement.style.transform = 'translate(50%, 0%)';
    }
    else if (targetSelector === '--b09') {
        trackElement.style.transform = 'translate(50%, 50%)';
    }
    else if (targetSelector === '--b10') {
        trackElement.style.transform = 'translate(50%, 0%)';
    }
    else if (targetSelector === '--b11') {
        trackElement.style.transform = 'translate(100%, 0%)';
    }
    else if (targetSelector === '--b12') {
        trackElement.style.transform = 'translate(50%, 0%)';
    }

    nav.querySelectorAll('p')?.forEach(el => el.classList.remove('active'));
    const navEl = nav.querySelector('[data-target=' + targetSelector + ']');
    navEl.classList.add('active')
}
const initArrows = () => {
    const arrows = shadow.querySelectorAll('.arrow-hover-wrap');
    arrows.forEach(arrow => {
        const targetSelector = arrow.getAttribute('data-target');
        if (!targetSelector) {
            console.warn('targetSelector not found');
            return;
        }
        arrow.addEventListener('click', () => {
            navigate(targetSelector)
        })
    })
}
initArrows();
const initBanner = () => {
    navigate('--b01');
}

setTimeout(initBanner, 400)