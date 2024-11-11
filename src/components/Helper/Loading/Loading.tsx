import { useEffect, useState } from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i: number) {
    return {
      display: step === i ? 'block' : 'none',
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg
          width="1024"
          height="768"
          viewBox="0 0 1024 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <g style={displayStep(0)}>
              <rect
                x="498"
                y="131"
                width="42"
                height="142"
                rx="16"
                fill="black"
              />
              <rect
                x="709.007"
                y="209.419"
                width="42"
                height="142"
                rx="16"
                transform="rotate(48.3528 709.007 209.419)"
                fill="black"
              />
            </g>
            <g style={displayStep(1)}>
              <rect
                x="790.084"
                y="384.284"
                width="42"
                height="142"
                rx="16"
                transform="rotate(90.1145 790.084 384.284)"
                fill="black"
              />
              <rect
                x="734.846"
                y="563.297"
                width="42"
                height="142"
                rx="16"
                transform="rotate(131.201 734.846 563.297)"
                fill="black"
              />
            </g>
            <g style={displayStep(2)}>
              <rect
                x="498"
                y="528"
                width="42"
                height="142"
                rx="16"
                fill="black"
              />
              <rect
                x="412.425"
                y="472.85"
                width="42"
                height="142"
                rx="16"
                transform="rotate(48.3528 412.425 472.85)"
                fill="black"
              />
            </g>
            <g style={displayStep(3)}>
              <rect
                x="393.084"
                y="384.284"
                width="42"
                height="142"
                rx="16"
                transform="rotate(90.1145 393.084 384.284)"
                fill="black"
              />
              <rect
                x="439.507"
                y="299.536"
                width="42"
                height="142"
                rx="16"
                transform="rotate(131.201 439.507 299.536)"
                fill="black"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="1024" height="768" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
