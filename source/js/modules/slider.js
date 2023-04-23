import { SliderDirection } from '../constants';

export const slider = () => {
    const mainSlider = document.querySelector('[data-slider]');
    if (!mainSlider) {
        return;
    }

    const sliderWrapper = mainSlider.querySelector('[data-slider-wrapper]');
    const sliderCards = mainSlider.querySelectorAll('[data-slider-card]');
    const slideCount = sliderCards.length;
    const sliderCardWidth = sliderCards[0].offsetWidth;
    const prevButton = mainSlider.querySelector('[data-slider-button-prev]');
    const nextButton = mainSlider.querySelector('[data-slider-button-next]');
    let activeSlideIndex = 0;

    const changeSlide = (direction) => {
        if (direction === SliderDirection.Next) {
            activeSlideIndex++;

            if (slideCount === activeSlideIndex) {
                activeSlideIndex = 0;
            }
        }

        if (direction === SliderDirection.Prev) {
            activeSlideIndex--;

            if (activeSlideIndex === -1) {
                activeSlideIndex = slideCount - 1;
            }
        }
        sliderWrapper.style.transform = `translateX(-${activeSlideIndex * sliderCardWidth}px)`;
        sliderCards.forEach(card => card.classList.remove('active'));
        sliderCards[activeSlideIndex].classList.add('active');
    };

    sliderCards[activeSlideIndex].classList.add('active');

    nextButton.addEventListener('click', () => {
        changeSlide(SliderDirection.Next);
    });

    prevButton.addEventListener('click', () => {
        changeSlide(SliderDirection.Prev);
    });
};
