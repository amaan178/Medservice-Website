import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";

//Handles Mobile Menu/Header
let mobileMenu = new MobileMenu();


if(module.hot) {
    module.hot.accept();
}
