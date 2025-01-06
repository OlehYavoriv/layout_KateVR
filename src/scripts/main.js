'use strict';

import { videoPlayer } from './utils/videoPlayer';
import { burgerMenu } from './utils/burgerMenu';
import { languageSelector } from './utils/languageSelector';
import { languageNavMenu } from './utils/languageNavMenu';
import {
  aboutUsSliderConfig,
  headerSliderConfig,
  slider,
} from './utils/slider';

document.addEventListener('DOMContentLoaded', () => {
  videoPlayer();
  burgerMenu();
  languageSelector();
  languageNavMenu();
  slider(aboutUsSliderConfig);
  slider(headerSliderConfig);
});
