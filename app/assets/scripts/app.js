import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from 'jquery';

//Handles Mobile Menu/Header
let mobileMenu = new MobileMenu();

//Handles Reveal On Scroll 
new RevealOnScroll($("#our-beginning"));
new RevealOnScroll($("#departments"));
new RevealOnScroll($("#counters"));
new RevealOnScroll($("#testimonials"));

if(module.hot) {
    module.hot.accept();
}
