import React, { useState } from 'react';
import styles from './mainSlider.module.scss';
// Components
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { BannerSaekano, BannerGridman, BannerQuintessential } from 'assets';
import { ArrowNextIcon, ArrowPrevIcon } from 'icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const sliderData = [
  {
    label: 'Go-Tōbun no Hanayome',
    imgPath: BannerQuintessential,
  },
  {
    label: 'Saenai Heroine no Sodatekata',
    imgPath: BannerSaekano,
  },
  {
    label: 'SSSS. GRIDMAN',
    imgPath: BannerGridman,
  },
];

const AppNav = (props) => {
  const { activeIndex, items, onTransition } = props;
  return (
    <ul className={styles.nav}>
      {items.map((item, i) => (
        <li
          key={i}
          className={activeIndex === i ? styles.active : ''}
          onClick={() => onTransition(i)}></li>
      ))}
    </ul>
  );
};

const Waves = () => (
  <svg
    className={styles.waves}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shapeRendering="auto">
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
      />
    </defs>
    <g className={styles.parallax}>
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(28, 35, 49,0.7)" />
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(28, 35, 49,0.5)" />
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(28, 35, 49,0.3)" />
      <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(244, 244, 247)" />
    </g>
  </svg>
);

function MainSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sliderData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.root}>
      <AppNav
        items={sliderData}
        activeIndex={activeStep}
        onTransition={handleStepChange}
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {sliderData.map((step, index) => (
          <div key={step.label} className={styles.item}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <img
                  className={styles.img}
                  src={step.imgPath}
                  alt={step.label}
                />
                <div className={styles.title}>
                  <h2>{step.label}</h2>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {activeStep !== 0 && (
        <a
          className={styles.prev}
          href="#sliderControls"
          role="button"
          data-slide="prev"
          onClick={handleBack}>
          <ArrowPrevIcon />
        </a>
      )}
      {activeStep !== maxSteps - 1 && (
        <a
          className={styles.next}
          href="#sliderControls"
          role="button"
          data-slide="next"
          onClick={handleNext}>
          <ArrowNextIcon />
        </a>
      )}
      <Waves />
    </div>
  );
}

export default MainSlider;
