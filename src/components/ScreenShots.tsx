import {
  enSs1,
  enSs2,
  enSs3,
  enSs4,
  trSs1,
  trSs2,
  trSs3,
  trSs4,
  deSs1,
  deSs2,
  deSs3,
  deSs4,
} from '../../public/index';

import screenshotsOptions, {
  LanguageData,
  screenshotsOptionsData,
} from '@/screenshotsOptionsData';

import { useDisplaySelectionStore } from '@/store/DisplaySelection';
import { useLanguageSelectionStore } from '@/store/LanguageSelection';

const ScreenShots = () => {
  const { selectedLanguage } = useLanguageSelectionStore();
  const { selectedDisplay } = useDisplaySelectionStore();

  const options: screenshotsOptionsData = screenshotsOptions;
  const languageOptions: LanguageData = options[selectedLanguage];
  const displayOption: boolean = languageOptions[selectedDisplay];

  const deImages = [deSs1, deSs2, deSs3, deSs4];
  const trImages = [trSs1, trSs2, trSs3, trSs4];
  const enImages = [enSs1, enSs2, enSs3, enSs4];

  const displayedImageArr =
    selectedLanguage === 'en'
      ? enImages
      : selectedLanguage === 'tr'
      ? trImages
      : deImages;

  if (displayOption) {
    return (
      <div>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {displayedImageArr.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  const inchValue = selectedDisplay.slice(-2);
  const numberIncValue = Number(inchValue);
  const displayedIncValue = inchValue[0] + '.' + inchValue[1];

  if (
    numberIncValue <= 55 &&
    selectedLanguage === 'de' &&
    screenshotsOptions.de.IPHONE_55
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin flex justify-center underline decoration-sky-500 decoration-2 underline-offset-4 decoration-wavy font-semibold ">
          {' '}
          Using 5.5" Display{' '}
        </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {deImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  } else if (
    numberIncValue > 55 &&
    selectedLanguage === 'de' &&
    screenshotsOptions.de.IPHONE_65
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 6.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {deImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  if (
    numberIncValue <= 55 &&
    selectedLanguage === 'tr' &&
    screenshotsOptions.tr.IPHONE_55
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 5.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {trImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  } else if (
    numberIncValue > 55 &&
    selectedLanguage === 'tr' &&
    screenshotsOptions.tr.IPHONE_65
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 6.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {trImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  if (
    numberIncValue <= 55 &&
    selectedLanguage === 'en' &&
    screenshotsOptions.en.IPHONE_55
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 5.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {enImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  } else if (
    numberIncValue > 55 &&
    selectedLanguage === 'en' &&
    screenshotsOptions.en.IPHONE_65
  ) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 6.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {enImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  if (screenshotsOptions.en[selectedDisplay]) {
    return (
      <div>
        <h3 className="displayInfoMargin ">
          {' '}
          Using {displayedIncValue}" Display{' '}
        </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {enImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  if (numberIncValue <= 55 && screenshotsOptions.en.IPHONE_55) {
    return (
      <div>
        <h3 className="displayInfoMargin "> Using 5.5" Display </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {enImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  } else if (numberIncValue > 55 && screenshotsOptions.en.IPHONE_65) {
    return (
      <div>
        <h3 className="displayInfoMargin"> Using 6.5" Display </h3>

        <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
          {enImages.map(image => (
            <img
              className="w-60 h-auto rounded-lg"
              key={image}
              src={image}
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <h2 className="flex justify-center text-3xl underline underline-offset-4 decoration-red-500 decoration-wavy decoration-3 ">
      There is no screenshots
    </h2>
  );
};
export default ScreenShots;
