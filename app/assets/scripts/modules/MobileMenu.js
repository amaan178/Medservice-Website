class MobileMenu {
    constructor() {
        //1. store all the needed DOM elements in the object 
        this.menuIcon = document.querySelector(".mobile-header-icon");
        this.mobileHeader = document.querySelector("#mobile-header");

        //2. Can create any class/object variables which is needed
        this.x = 10;

        //3.call a function which registers all the required events
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
//        /* 
//            arrow operator(=>):
//            * preserves this
//            * has to be used while defining function...for ex
//                element.addEventListener("click", () => {    
//                    //body of function
//                });
//            * came to existence from es6
//        */
    }

    toggleMenu() {
        this.mobileHeader.classList.toggle("mobile-menu-active");
        this.menuIcon.classList.toggle("mobile-header-icon-close");
    }
}
export default MobileMenu;