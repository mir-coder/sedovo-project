import Header from "./Header.js";
import { MySwiper, MySwiperProduct } from "./Slider.js";
import CircleText from './CircleText.js';
import LightboxHandler from "./LightboxHandler.js"; 
import TelegramForm from "./TelegramForm.js"; 
import InputMaskCollection from "./InputMask.js";


new Header()
new MySwiper();
new MySwiperProduct();
new Datepicker('#arrivalDate');
new Datepicker('#departureDate');
new TelegramForm();
new InputMaskCollection();
new CircleText();
new LightboxHandler();