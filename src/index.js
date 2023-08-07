import './index.html';
import './index.scss';
import { width } from './modules/width';

if (width < 321) {
  
    new Swiper('.swiper', {
  
      pagination: {
  
        el: '.swiper-pagination',
        clickable: true,
  
      },
      
    });
  
  };