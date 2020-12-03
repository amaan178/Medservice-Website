import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import "lazysizes";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import $ from 'jquery';

//Handles Mobile Menu/Header
let mobileMenu = new MobileMenu();

//Adding smooth scroll functionality to our header links
new SmoothScroll();

//Handles Reveal On Scroll 
new RevealOnScroll($("#our-beginning"));
new RevealOnScroll($("#departments"));
new RevealOnScroll($("#counters"));
new RevealOnScroll($("#testimonials"));

if(module.hot) {
    module.hot.accept();
}
