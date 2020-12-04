import $ from 'jquery';
class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal-close");
        this.events();
    }

    events() {
        this.openModalButton.click(this.openModal.bind(this));

        this.closeModalButton.click(this.closeModal.bind(this));

        $(document).keyup(this.keyPressHandler.bind(this));
    }
    openModal() {
        this.modal.addClass("modal-is-visible");
        return false; //this will not perform its originak work! same like preventDefault!
    }
    closeModal() {
        this.modal.removeClass("modal-is-visible");
    }
    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }
}
export default Modal;
