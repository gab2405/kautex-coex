const visibleClass = 'visible';
const trackElement = coexShadow.querySelector('.banner-track');
const bannerWrapper = coexShadow.querySelector('.banner-wrapper');
const banners = coexShadow.querySelectorAll('.banner');

const nav = coexShadow.querySelector('.nav');

const urlSearchParams = new URLSearchParams(window.location.search);
const slideKey = 'prslide'
const setSlideParameter = (slideValue) => {
    urlSearchParams.set(slideKey, slideValue);
    const newUrl = `${window.location.origin}${window.location.pathname}?${urlSearchParams.toString()}${window.location.hash}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
};

const getSlideParameter = () => {
    return urlSearchParams.get(slideKey);
}


const initNav = () => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const targetSelector = target.getAttribute('data-target');
        if (targetSelector) navigate(targetSelector);
        else {
            const href = e.target.getAttribute('href');
            const slide = getSlideParameter();
            const targetURL = href + '?' + slideKey + "=" + slide;
            if (targetURL) window.location.assign(targetURL)
        }
    })
}
initNav();

const initFontSize = () => {
    const wrapperWidth = bannerWrapper.clientWidth;
    const calcSize = wrapperWidth * .013;
    bannerWrapper.style.fontSize = calcSize + 'px';
}
initFontSize();
setTimeout(initFontSize, 100); // sometimes this seems necessary
window.addEventListener('resize', initFontSize);
window.addEventListener('orientationchange', initFontSize);

const navigate = (targetSelector) => {
    const targetBanner = coexShadow.querySelector('.' + targetSelector);
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
        trackElement.style.transform = 'translate(-100%, 0)';
    }
    else if (targetSelector === '--b06') {
        trackElement.style.transform = 'translate(-100%, 50%)';
    }
    else if (targetSelector === '--b07') {
        trackElement.style.transform = 'translate(-150%, 50%)';
    }
    else if (targetSelector === '--b08') {
        trackElement.style.transform = 'translate(-150%, 0%)';
    }
    else if (targetSelector === '--b09') {
        trackElement.style.transform = 'translate(-150%, 50%)';
    }
    else if (targetSelector === '--b10') {
        trackElement.style.transform = 'translate(-150%, 0%)';
    }
    else if (targetSelector === '--b11') {
        trackElement.style.transform = 'translate(-200%, 0%)';
    }
    else if (targetSelector === '--b12') {
        trackElement.style.transform = 'translate(-250%, 0%)';
    }


    nav.querySelectorAll('p')?.forEach(el => el.classList.remove('active'));
    const navEl = nav.querySelector('[data-target=' + targetSelector + ']');
    navEl.classList.add('active')
    setSlideParameter(targetSelector.substring(3))
}
const initArrows = () => {
    const arrows = coexShadow.querySelectorAll('.arrow-hover-wrap');
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
    const initialSlide = getSlideParameter();
    if (initialSlide) navigate('--b' + initialSlide)
    else navigate('--b01');
}

setTimeout(initBanner, 400)
