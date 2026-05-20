import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import FeelAgainLogo from './Logo';
import Button from './Button';
import { motion } from 'framer-motion';

interface HeroViewProps {
  lang: Language;
  onStart: () => void;
  onToggleLang: () => void;
}

// SDG 8: Decent Work and Economic Growth (Pink)
const Sdg8Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
    <rect fill="#dd1367" width="1000" height="1000"></rect>
    <path fill="#fff" d="M333.15,128.52l13.11,38.09H361l-13.34-37.73c7.95-1.82,11.14-7.1,11.14-16V102.19c0-11.64-5.15-18.62-19.24-18.62H319.18v83h14Zm0-33.56h4.65c4.79,0,6.87,2.2,6.87,6.75V114c0,4.4-2.08,6.86-6.87,6.86h-4.65Z"></path>
    <polygon fill="#fff" points="400.89 155.22 381.53 155.22 381.53 130 395.37 130 395.37 118.72 381.53 118.72 381.53 94.96 400.89 94.96 400.89 83.57 367.56 83.57 367.56 166.61 400.89 166.61 400.89 155.22"></polygon>
    <path fill="#fff" d="M431.13,83.57H409.59v83h21.54c14.94,0,20.21-9.55,20.21-22.29V105.87c0-12.87-5.27-22.3-20.21-22.3m6.25,63.2c0,5-2.19,8.45-8,8.45h-5.87V95h5.87c5.77,0,8,3.42,8,8.32Z"></path>
    <path fill="#fff" d="M474.5,83.57h-14V146.4c0,12.86,6.12,21.18,20.82,21.18,14.21,0,19.72-8.32,19.72-21.18V83.57H488.2v64.18c0,4.89-1.95,8.21-6.85,8.21s-6.85-3.32-6.85-8.21Z"></path>
    <path fill="#fff" d="M510.26,105v40.16c0,12.86,6.13,22.41,20.81,22.41s19.71-8.81,19.71-20.69V132.56H538.06v15.31c0,4.9-1.72,8.07-6.73,8.07s-7.12-3.54-7.12-8.56V102.8c0-5,2.09-8.58,7.12-8.58s6.73,2.94,6.73,8.09v10.9h12.72v-9.79c0-12.26-4.27-20.82-19.71-20.82-14.68,0-20.81,9.43-20.81,22.41"></path>
    <polygon fill="#fff" points="559.62 166.6 592.93 166.6 592.93 155.22 573.59 155.22 573.59 129.99 587.42 129.99 587.42 118.72 573.59 118.72 573.59 94.96 592.93 94.96 592.93 83.57 559.62 83.57 559.62 166.6"></polygon>
    <path fill="#fff" d="M601.62,83.57v83h21.56c14.94,0,20.21-9.55,20.21-22.29V105.87c0-12.87-5.27-22.3-20.21-22.3Zm27.81,19.71v43.49c0,5-2.21,8.45-8,8.45h-5.88V95h5.88c5.75,0,8,3.43,8,8.32"></path>
    <rect fill="#fff" x="319.19" y="202.38" width="13.96" height="83.03"></rect>
    <polygon fill="#fff" points="382.65 202.37 371.01 202.37 371.01 250.02 355.94 202.37 342.23 202.37 342.23 285.41 353.98 285.41 353.98 233.24 370.39 285.41 382.65 285.41 382.65 202.37"></polygon>
    <polygon fill="#fff" points="423.8 213.77 423.8 202.38 390.5 202.38 390.5 285.41 423.8 285.41 423.8 274.01 404.46 274.01 404.46 248.79 418.29 248.79 418.29 237.53 404.46 237.53 404.46 213.77 423.8 213.77"></polygon>
    <path fill="#fff" d="M450,201.4c-14.69,0-21.07,9.42-21.07,22.4V264c0,11.27,4.77,19.46,15.93,21.44v5.63l26.33,4.9V285.54l-10.29-2c7.1-3.42,10.29-10.53,10.29-19.6V223.8c0-13-6.37-22.4-21.19-22.4m7.22,65.53c0,4.89-2.2,8.56-7.22,8.56s-7.11-3.67-7.11-8.56V221.61c0-5,2.22-8.58,7.11-8.58s7.22,3.55,7.22,8.58Z"></path>
    <path fill="#fff" d="M479,202.38v62.83c0,12.86,6.13,21.18,20.83,21.18,14.21,0,19.72-8.32,19.72-21.18V202.38H506.69v64.17c0,4.9-2,8.21-6.86,8.21s-6.86-3.31-6.86-8.21V202.38Z"></path>
    <path fill="#fff" d="M539.74,202.38l-15.67,83H537.3l2.44-15.2h14.83l2.57,15.2h14.32l-15.79-83Zm1.84,56.71,5.51-33.32h.12l5.51,33.32Z"></path>
    <polygon fill="#fff" points="577.1 202.38 577.1 285.4 607.72 285.4 607.72 274.02 591.06 274.02 591.06 202.38 577.1 202.38"></polygon>
    <rect fill="#fff" x="613.97" y="202.38" width="13.96" height="83.03"></rect>
    <polygon fill="#fff" points="659.91 285.41 659.91 213.77 671.41 213.77 671.41 202.38 634.3 202.38 634.3 213.77 645.82 213.77 645.82 285.41 659.91 285.41"></polygon>
    <rect fill="#fff" x="677.78" y="202.38" width="13.96" height="83.04"></rect>
    <polygon fill="#fff" points="733.02 274.02 713.67 274.02 713.67 248.79 727.51 248.79 727.51 237.53 713.67 237.53 713.67 213.77 733.02 213.77 733.02 202.38 699.7 202.38 699.7 285.4 733.02 285.4 733.02 274.02"></polygon>
    <path fill="#fff" d="M738.51,256.39v11.14c0,10.91,5.51,18.86,19.72,18.86s20.33-8.09,20.33-19.48v-4c0-9.17-3.68-13.83-11.26-21.55l-8.95-8.82c-4-3.93-6.61-6.61-6.61-11.26v-1.72c0-4.66,2.69-6.85,6.61-6.85,4.42,0,6.61,2.31,6.61,7.09V227h12.75v-6.75c0-12-5.51-18.85-19.48-18.85-13.59,0-19.59,8-19.59,18.24v2.82c0,9.55,3.66,14.33,11.64,22.16l8.19,8.22c4.3,4,6.25,7,6.25,11.76v3.18c0,4.41-2,7.35-6.37,7.35-4.77,0-6.86-2.69-6.86-7.35V256.39Z"></path>
    <polygon fill="#fff" points="96.48 131.03 96.48 285.52 130.41 285.52 130.41 83.69 103.32 83.69 72.07 120.31 72.07 155.74 72.36 155.74 96.17 131.03 96.48 131.03"></polygon>
    <path fill="#fff" d="M254.25,233.43V135.78c0-31.55-15.77-54.47-50.31-54.47-34.23,0-50,22.92-50,54.47v97.65c0,31.25,15.79,54.47,50,54.47,34.54,0,50.31-23.22,50.31-54.47m-66.39,5.36V130.43c0-12.21,4.46-20.84,16.08-20.84,11.91,0,16.37,8.63,16.37,20.84V238.79c0,12.21-4.46,20.83-16.37,20.83-11.62,0-16.08-8.62-16.08-20.83"></path>
    <g>
      <g>
        <path fill="#fff" d="M592.3,657.55H407.68a2.14,2.14,0,0,0-2,2.24v55.49a2.14,2.14,0,0,0,2,2.25H592.3a2.14,2.14,0,0,0,2-2.25V659.79a2.14,2.14,0,0,0-2-2.24"></path>
        <path fill="#fff" d="M592.3,539.48H407.68a2.14,2.14,0,0,0-2,2.24v55.49a2.13,2.13,0,0,0,2,2.25H592.3a2.13,2.13,0,0,0,2-2.25V541.72a2.14,2.14,0,0,0-2-2.24"></path>
      </g>
      <g>
        <path fill="#fff" d="M589.7,455.61,501.08,367a1.54,1.54,0,0,0-2.16,0L410.3,455.61a1.53,1.53,0,0,0,1.08,2.61H588.62A1.53,1.53,0,0,0,589.7,455.61Z"></path>
        <path fill="#fff" d="M672.9,718.21l88.62-88.62a1.53,1.53,0,0,0,0-2.17L672.9,538.8a1.53,1.53,0,0,0-2.61,1.08V717.13A1.53,1.53,0,0,0,672.9,718.21Z"></path>
        <path fill="#fff" d="M410.3,801.41,498.92,890a1.52,1.52,0,0,0,2.16,0l88.62-88.62a1.53,1.53,0,0,0-1.08-2.62H411.38A1.53,1.53,0,0,0,410.3,801.41Z"></path>
        <path fill="#fff" d="M327.1,538.8l-88.62,88.62a1.53,1.53,0,0,0,0,2.17l88.62,88.62a1.53,1.53,0,0,0,2.61-1.08V539.88A1.53,1.53,0,0,0,327.1,538.8Z"></path>
      </g>
    </g>
  </svg>
);

// SDG 3: Good Health and Well-being (Green)
const Sdg3Svg = () => (
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="m0-.02h1000v1000.03h-1000z" fill="#4c9f38"/>
    <g fill="#fff">
        <path d="m142.7 288.14c34.21 0 49.08-18.15 49.08-46.1v-29.73c0-18.44-8-30.34-25-34.2 14-4.46 23.19-15.77 23.19-32.71v-17.55c0-28.55-13.68-46.09-44.9-46.09-35.1 0-47.3 20.8-47.3 50.55v17.84h30.93v-20.52c0-12.49 3.88-19.62 14.58-19.62s14.56 7.13 14.56 18.13v21.71c0 10.71-7.13 16.35-18.12 16.35h-12.8v25.89h14.28c11.89 0 16.64 5.64 16.64 16.35v33.31c0 10.7-4.75 18.15-15.16 18.15-11.59 0-15.76-7.75-15.76-19.64v-28.84h-30.92v26.46c0 30.64 12.18 50.26 46.67 50.26"/>
        <path d="m835.26 625c0-28.14-18-51-45.4-51-13.67 0-30.17 15-39.13 24.19-9-9.23-24.36-24.21-38-24.21-27.34 0-46.51 22.81-46.51 51a51.51 51.51 0 0 0 14.51 36l70.1 70.23 70-70.15-.06-.05a51.55 51.55 0 0 0 14.49-36.01z"/>
        <path d="m536.81 845.88h-.72a11.48 11.48 0 0 1 -10.63-9.54l-35.61-207.41-53.94 100a11.51 11.51 0 0 1 -21.52-3.83l-22.9-160.05-41.89 94.1a11.54 11.54 0 0 1 -10.52 6.85h-162.83a11.52 11.52 0 0 1 0-23h155.35l55.11-123.77a11.51 11.51 0 0 1 21.91 3l23.61 165 53.19-98.63a11.52 11.52 0 0 1 21.48 3.52l33 192.07 120.15-399.19a11.52 11.52 0 0 1 21.4-1.68l63.23 131.09a11.51 11.51 0 1 1 -20.73 10l-50.38-104.41-125.75 417.68a11.5 11.5 0 0 1 -11.01 8.2z"/>
        <path d="m306.23 121.79h19.54v43.65h-9.89v-8.93c-1.81 6.15-5.67 9.89-13.14 9.89-11.82 0-17.24-9.4-17.24-22.06v-39.55c0-12.78 6.15-22.06 20.61-22.06 15.19 0 19.66 8.44 19.66 20.5v7.23h-12.54v-8.32c0-5.06-1.93-8-6.87-8s-7.12 3.5-7.12 8.44v43.89c0 4.94 2.05 8.44 6.75 8.44 4.46 0 6.76-2.53 6.76-7.84v-14.43h-6.52z"/>
        <path d="m334.8 144.34v-39.55c0-12.78 6.27-22.06 20.74-22.06s20.86 9.27 20.86 22.06v39.55c0 12.66-6.27 22.06-20.86 22.06s-20.74-9.4-20.74-22.06zm27.85 2.17v-43.89c0-4.94-2.17-8.44-7.11-8.44s-7 3.5-7 8.44v43.89c0 4.94 2.17 8.44 7 8.44s7.11-3.5 7.11-8.44z"/>
        <path d="m385.44 144.34v-39.55c0-12.78 6.27-22.06 20.74-22.06s20.82 9.27 20.82 22.06v39.55c0 12.66-6.27 22.06-20.85 22.06s-20.71-9.4-20.71-22.06zm27.85 2.17v-43.89c0-4.94-2.17-8.44-7.11-8.44s-7 3.5-7 8.44v43.89c0 4.94 2.17 8.44 7 8.44s7.11-3.5 7.11-8.44z"/>
        <path d="m477.18 105.64v37.85c0 12.54-5.18 21.95-19.89 21.95h-21.22v-81.74h21.22c14.71 0 19.89 9.3 19.89 21.94zm-21.58 48.58c5.67 0 7.84-3.37 7.84-8.32v-42.79c0-4.83-2.17-8.2-7.84-8.2h-5.78v59.31z"/>
        <path d="m531.92 129.39h-13.26v36.05h-13.75v-81.74h13.75v34.6h13.26v-34.6h13.86v81.74h-13.86z"/>
        <path d="m554.82 83.7h32.8v11.21h-19v23.39h13.62v11.09h-13.67v24.83h19v11.22h-32.8z"/>
        <path d="m594 165.44 15.44-81.74h15.67l15.55 81.74h-14.11l-2.55-14.95h-14.56l-2.44 14.95zm17.24-25.92h11l-5.42-32.8h-.12z"/>
        <path d="m647.53 83.7h13.74v70.52h16.4v11.22h-30.14z"/>
        <path d="m675.74 83.7h36.53v11.21h-11.33v70.53h-13.87v-70.53h-11.33z"/>
        <path d="m746.87 129.39h-13.26v36.05h-13.74v-81.74h13.74v34.6h13.26v-34.6h13.86v81.74h-13.86z"/>
        <path d="m283.43 285.29 15.43-81.74h15.67l15.55 81.74h-14.08l-2.53-15h-14.61l-2.41 15zm17.24-25.92h11l-5.43-32.79h-.12z"/>
        <path d="m348.53 233.93v51.36h-11.53v-81.74h13.51l14.82 46.9v-46.9h11.46v81.74h-12.11z"/>
        <path d="m426.89 225.5v37.85c0 12.54-5.18 21.94-19.89 21.94h-21.22v-81.74h21.22c14.71 0 19.89 9.29 19.89 21.95zm-21.58 48.58c5.67 0 7.84-3.37 7.84-8.32v-42.76c0-4.82-2.17-8.19-7.84-8.19h-5.79v59.31z"/>
        <path d="m479.45 234.78-7.71 50.51h-12.9l-11-81.74h13.26l6.39 51.84h.12l6.87-51.84h11.21l7.6 51.84h.12l6.27-51.84h11.57l-10.61 81.74h-13l-8.08-50.51z"/>
        <path d="m518.39 203.55h32.79v11.22h-19v23.38h13.62v11.1h-13.66v24.83h19v11.21h-32.75z"/>
        <path d="m559.74 203.55h13.75v70.53h16.39v11.21h-30.14z"/>
        <path d="m597.36 203.55h13.74v70.53h16.4v11.21h-30.14z"/>
        <path d="m625.69 237h19.31v11h-19.31z"/>
        <path d="m653.18 203.55h19.89c13.74 0 18.32 6.39 18.32 18v8.32c0 6.87-2.53 11.21-8.19 13 6.87 1.56 10.24 6.14 10.24 13.62v10.85c0 11.57-5.18 18-18.92 18h-21.34zm13.74 34.45h4.82c4.46 0 6.51-2.29 6.51-6.63v-10c0-4.46-2-6.63-6.63-6.63h-4.7zm0 10.49v25.56h6c4.58 0 6.75-2.29 6.75-6.63v-12.3c0-4.34-2.05-6.63-6.87-6.63z"/>
        <path d="m701.52 203.55h32.79v11.22h-19v23.38h13.63v11.1h-13.68v24.83h19v11.21h-32.74z"/>
        <path d="m742.87 203.55h13.74v81.74h-13.74z"/>
        <path d="m777.35 233.93v51.36h-11.57v-81.74h13.5l14.83 46.9v-46.9h11.45v81.74h-12z"/>
        <path d="m835.34 241.65h19.53v43.64h-9.87v-8.92c-1.81 6.15-5.66 9.89-13.14 9.89-11.81 0-17.24-9.41-17.24-22.07v-39.54c0-12.78 6.15-22.06 20.62-22.06 15.19 0 19.65 8.44 19.65 20.49v7.24h-12.56v-8.32c0-5.06-1.93-8-6.87-8s-7.12 3.5-7.12 8.44v43.89c0 4.94 2 8.43 6.76 8.43 4.46 0 6.75-2.53 6.75-7.83v-14.43h-6.51z"/>
    </g>
  </svg>
);

// SDG 17: Partnerships for the Goals (Navy)
const Sdg17Svg = () => (
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect fill="#19486a" width="1000" height="1000"></rect>
    <path fill="#fff" d="M142.7,288.14c34.21,0,49.08-18.15,49.08-46.1v-29.73c0-18.44-8-30.34-25-34.2,14-4.46,23.19-15.77,23.19-32.71v-17.55c0-28.55-13.68-46.09-44.9-46.09-35.1,0-47.3,20.8-47.3,50.55v17.84h30.93v-20.52c0-12.49,3.88-19.62,14.58-19.62s14.56,7.13,14.56,18.13v21.71c0,10.71-7.13,16.35-18.12,16.35h-12.8v25.89h14.28c11.89,0,16.64,5.64,16.64,16.35v33.31c0,10.7-4.75,18.15-15.16,18.15-11.59,0-15.76-7.75-15.76-19.64v-28.84h-30.92v26.46c0,30.64,12.18,50.26,46.67,50.26"></path>
    <polygon fill="#fff" points="214.23 121.79 233.77 121.79 233.77 165.44 223.88 165.44 223.88 156.51 212.07 156.51 212.07 143.97 223.88 143.97 223.88 133.01 214.23 133.01 214.23 121.79"></polygon>
    <path fill="#fff" d="M250,144.34v-39.55c0-12.78,6.27-22.06,20.74-22.06s20.86,9.27,20.86,22.06v39.55c0,12.66-6.27,22.06-20.86,22.06s-20.74-9.4-20.74-22.06m27.85,2.17v-43.89c0-4.94-2.17-8.44-7.11-8.44s-7,3.5-7,8.44v43.89c0,4.94,2.17,8.44,7,8.44s7.11-3.5,7.11-8.44"></path>
    <path fill="#fff" d="M300.64,144.34v-39.55c0-12.78,6.27-22.06,20.74-22.06s20.82,9.27,20.82,22.06v39.55c0,12.66-6.27,22.06-20.85,22.06s-20.71-9.4-20.71-22.06m27.85,2.17v-43.89c0-4.94-2.17-8.44-7.11-8.44s-7,3.5-7,8.44v43.89c0,4.94,2.17,8.44,7,8.44s7.11-3.5,7.11-8.44"></path>
    <path fill="#fff" d="M392.38,105.64v37.85c0,12.54-5.18,21.95-19.89,21.95h-21.22V83.7h21.22c14.71,0,19.89,9.3,19.89,21.94m-21.58,48.58c5.67,0,7.84-3.37,7.84-8.32v-42.79c0-4.83-2.17-8.2-7.84-8.2h-5.78v59.31Z"></path>
    <path fill="#fff" d="M447.12,129.39h-13.26v36.05h-13.75V83.7h13.75v34.6h13.26V83.7h13.86v81.74h-13.86Z"></path>
    <path fill="#fff" d="M470,83.7h32.8V94.91h-19v23.39h13.62v11.09H483.75v24.83h19v11.22H470Z"></path>
    <path fill="#fff" d="M509.2,165.44l15.44-81.74h15.67l15.55,81.74H541.75l-2.55-14.95H524.64l-2.44,14.95Zm17.24-25.92h11l-5.42-32.8h-.12Z"></path>
    <path fill="#fff" d="M562.73,83.7h13.74v70.52h16.4v11.22H562.73Z"></path>
    <path fill="#fff" d="M590.94,83.7h36.53V94.91H616.14v70.53H602.27V94.91H590.94Z"></path>
    <path fill="#fff" d="M662.07,129.39h-13.26v36.05h-13.74V83.7h13.74v34.6h13.26V83.7h13.86v81.74h-13.86Z"></path>
    <path fill="#fff" d="M198.63,285.29l15.43-81.74h15.67l15.55,81.74H231.2l-2.53-15H214.06l-2.41,15Zm17.24-25.92h11l-5.43-32.79h-.12Z"></path>
    <path fill="#fff" d="M263.73,233.93v51.36H252.2V203.55h13.51l14.82,46.9v-46.9h11.46v81.74h-12.11Z"></path>
    <path fill="#fff" d="M342.09,225.5v37.85c0,12.54-5.18,21.94-19.89,21.94h-21.22V203.55h21.22c14.71,0,19.89,9.29,19.89,21.95m-21.58,48.58c5.67,0,7.84-3.37,7.84-8.32v-42.76c0-4.82-2.17-8.19-7.84-8.19h-5.79v59.31Z"></path>
    <path fill="#fff" d="M394.65,234.78l-7.71,50.51H374l-11-81.74h13.26l6.39,51.84h.12l6.87-51.84h11.21l7.6,51.84h.12l6.27-51.84h11.57l-10.61,81.74h-13l-8.08-50.51Z"></path>
    <path fill="#fff" d="M433.59,203.55h32.79v11.22h-19v23.38h13.62v11.1H447.35v24.83h19v11.21H433.55Z"></path>
    <path fill="#fff" d="M474.94,203.55h13.75v70.53h16.39v11.21H474.94Z"></path>
    <path fill="#fff" d="M512.56,203.55h13.74v70.53h16.4v11.21H512.56Z"></path>
    <path fill="#fff" d="M540.89,237h19.31v11H540.89Z"></path>
    <path fill="#fff" d="M568.38,203.55h19.89c13.74,0,18.32,6.39,18.32,18v8.32c0,6.87-2.53,11.21-8.19,13,6.87,1.56,10.24,6.14,10.24,13.62v10.85c0,11.57-5.18,18-18.92,18H568.38Zm13.74,34.45h4.82c4.46,0,6.51-2.29,6.51-6.63v-10c0-4.46-2-6.63-6.63-6.63h-4.7Zm0,10.49v25.56h6c4.58,0,6.75-2.29,6.75-6.63v-12.3c0-4.34-2.05-6.63-6.87-6.63Z"></path>
    <path fill="#fff" d="M616.72,203.55h32.79v11.22h-19v23.38h13.63v11.1H630.47v24.83h19v11.21H616.72Z"></path>
    <path fill="#fff" d="M658.07,203.55h13.74v81.74H658.07Z"></path>
    <path fill="#fff" d="M692.55,233.93v51.36H681v-81.74h13.5l14.83,46.9v-46.9h11.45v81.74h-12Z"></path>
    <path fill="#fff" d="M750.54,241.65h19.53v43.64h-9.87v-8.92c-1.81,6.15-5.66,9.89-13.14,9.89-11.81,0-17.24-9.41-17.24-22.07v-39.54c0-12.78,6.15-22.06,20.62-22.06,15.19,0,19.65,8.44,19.65,20.49v7.24h-12.56v-8.32c0-5.06-1.93-8-6.87-8s-7.12,3.5-7.12,8.44v43.89c0,4.94,2,8.43,6.76,8.43,4.46,0,6.75-2.53,6.75-7.83v-14.43h-6.51Z"></path>
    <g>
      <path fill="#fff" d="M500,693.45c-106.84,0-193.45-86.61-193.45-193.45S393.16,306.55,500,306.55,693.45,393.16,693.45,500,606.84,693.45,500,693.45m0-359.39c-91.5,0-165.94,74.43-165.94,165.94S408.5,665.94,500,665.94,665.94,591.5,665.94,500,591.5,334.06,500,334.06"></path>
      <path fill="#fff" d="M500,566.21c-36.51,0-66.21-29.7-66.21-66.21s29.7-66.21,66.21-66.21,66.21,29.7,66.21,66.21-29.7,66.21-66.21,66.21m0-104.91c-21.34,0-38.7,17.36-38.7,38.7s17.36,38.7,38.7,38.7,38.7-17.36,38.7-38.7-17.36-38.7-38.7-38.7"></path>
      <path fill="#fff" d="M500,433.79a66.21,66.21,0,1,1-66.21,66.21,66.29,66.29,0,0,1,66.21-66.21m0,104.91a38.7,38.7,0,1,0-38.7-38.7,38.74,38.74,0,0,0,38.7,38.7"></path>
      <path fill="#fff" d="M500,433.79a66.21,66.21,0,1,1-66.21,66.21,66.29,66.29,0,0,1,66.21-66.21m0,104.91a38.7,38.7,0,1,0-38.7-38.7,38.74,38.74,0,0,0,38.7,38.7"></path>
    </g>
  </svg>
);

const SDGTile = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div 
    className="group relative h-4 w-4 hover:w-32 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded shadow-lg cursor-default hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 bg-white border border-gray-100"
  >
     {/* Logo Block - Full Height */}
     <div className="absolute left-0 top-0 h-4 w-4 z-10 flex items-center justify-center p-0 transition-transform duration-300 group-hover:scale-110">
        {children}
     </div>
     
     {/* Text Content (Revealed on Hover) */}
     <div className="absolute left-4 top-0 h-full w-28 flex items-center pl-2 pr-3 bg-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 transform translate-x-2 group-hover:translate-x-0">
        <span className="text-white text-[6px] font-bold uppercase leading-tight whitespace-normal">
          {title}
        </span>
     </div>
  </div>
);

const HeroView: React.FC<HeroViewProps> = ({ lang, onStart, onToggleLang }) => {
  const heroT = CONTENT[lang].hero;
  const navT = CONTENT[lang].appNav;

  const [currentSlogan, setCurrentSlogan] = React.useState(0);

  React.useEffect(() => {
    if (heroT.slogans) {
      const timer = setInterval(() => {
        setCurrentSlogan((prev) => (prev + 1) % heroT.slogans.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [heroT.slogans]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        onStart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart]);

  return (
    <div 
      className="w-full h-screen bg-transparent relative overflow-hidden flex flex-col items-center justify-center cursor-pointer group/hero"
      onClick={onStart}
    >
      {/* Background Overlay - Clean, allowing gradient to show */}
      <div className="absolute inset-0 z-0 bg-transparent"></div>
      
      {/* Language Toggle Absolute */}
      <div className="absolute top-6 right-6 z-50">
          <button 
              onClick={(e) => { e.stopPropagation(); onToggleLang(); }}
              className="px-4 py-2 text-white hover:text-white bg-black/20 hover:bg-black/40 rounded-full flex items-center gap-2 font-mono text-xs font-bold transition-all border border-white/20 backdrop-blur-md"
          >
              <Globe size={14} />
              {lang}
          </button>
      </div>

      {/* Top Left Branding */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-2xl transform hover:scale-110 transition-transform cursor-pointer">
             <FeelAgainLogo fill="#00E5FF" className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-white tracking-tighter text-xl leading-none">FEEL AGAIN</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyber-cyan font-bold">
              {lang === Language.EN ? "Digital Infrastructure" : "Цифрова інфраструктура"}
            </span>
          </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          
          <div className="text-cyber-cyan font-bold text-xs uppercase tracking-[0.4em] mb-4">
            01 {lang === Language.EN ? "CRISIS" : "КРИЗА"}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl max-w-4xl uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan via-blue-500 to-cyber-purple">
              {heroT.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-12 leading-relaxed font-light">
            {lang === Language.EN 
              ? "Ukraine has 9.6 million people who need psychological help, thousands of trained specialists, and billions of humanitarian dollars — but there is no connection between them. FEEL AGAIN builds the digital infrastructure that connects these three disconnected links."
              : "Україна має 9.6 мільйонів людей які потребують психологічної допомоги, тисячі навчених фахівців, і мільярди гуманітарних доларів — але між ними немає з'єднання. FEEL AGAIN будує цифрову інфраструктуру яка з'єднує ці три розірвані ланки."}
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="text-cyber-cyan font-mono text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
                {lang === Language.EN ? "Click anywhere or press Space to start" : "Клікніть будь-де або натисніть Пробіл, щоб почати"}
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-cyber-cyan to-transparent"></div>
            </div>
          </div>

          {/* Strategic Alignment - Moved to Right and Higher */}
          <div className="absolute right-12 top-[45%] -translate-y-1/2 flex flex-col items-end gap-4 hidden lg:flex">
             <div className="text-[9px] font-thin text-white/50 uppercase tracking-[0.2em] leading-relaxed border-r border-cyber-cyan/30 pr-3 text-right max-w-[180px]">
               {heroT.footer}
             </div>
             
             <div className="flex flex-col gap-4">
                <SDGTile title={lang === Language.EN ? "Good Health and Well-being" : "Міцне здоров'я та благополуччя"}>
                    <Sdg3Svg />
                </SDGTile>
                
                <SDGTile title={lang === Language.EN ? "Decent Work and Economic Growth" : "Гідна праця та економічне зростання"}>
                    <Sdg8Svg />
                </SDGTile>
 
                <SDGTile title={lang === Language.EN ? "Partnerships for the Goals" : "Партнерство заради сталого розвитку"}>
                    <Sdg17Svg />
                </SDGTile>
             </div>
          </div>

          {/* Mobile version of SDGs */}
          <div className="mt-12 lg:hidden flex flex-col items-center gap-4">
             <div className="text-[9px] font-thin text-white/50 uppercase tracking-widest leading-relaxed border-l border-cyber-cyan/30 pl-3">
               {heroT.footer}
             </div>
             <div className="flex gap-3">
                <SDGTile title={lang === Language.EN ? "Good Health and Well-being" : "Міцне здоров'я та благополуччя"}><Sdg3Svg /></SDGTile>
                <SDGTile title={lang === Language.EN ? "Decent Work and Economic Growth" : "Гідна праця та економічне зростання"}><Sdg8Svg /></SDGTile>
                <SDGTile title={lang === Language.EN ? "Partnerships for the Goals" : "Партнерство заради сталого розвитку"}><Sdg17Svg /></SDGTile>
             </div>
          </div>

      </div>

      {/* Strategic Slogans - Vertical Fade Transition */}
      {heroT.slogans && (
        <div className="absolute bottom-12 left-0 w-full h-12 flex items-center justify-center overflow-hidden z-50">
          <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
            <motion.div
              key={currentSlogan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute text-center"
            >
              <span className="text-cyber-cyan font-black text-[10px] uppercase tracking-[0.4em] mr-4">•</span>
              <span className="text-white/80 font-bold text-[10px] uppercase tracking-[0.3em]">{heroT.slogans[currentSlogan]}</span>
              <span className="text-cyber-cyan font-black text-[10px] uppercase tracking-[0.4em] ml-4">•</span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroView;