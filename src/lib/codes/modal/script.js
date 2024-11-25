export default `
class Modal {
    constructor({
        body = '',
        title = '',
        confirmText = 'Yes',
        cancelText = 'Cancel',
        actionHTML = '',
        innerHTML = '',
        mainClass = '',
        closeOnOverlayClick = true,
        onConfirm = () => {},
        onClose = () => { },
    }) {
        this.body = body;
        this.title = title;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.actionHTML = actionHTML;
        this.innerHTML = innerHTML;
        this.closeOnOverlayClick = closeOnOverlayClick;
        this.onConfirm = onConfirm;
        this.onClose = onClose;
        this.mainClass = mainClass;

        // close on ESC keyword event handler
        this._closeOnESC = (event) => {
            if (event.key == 'Escape') this.close();
        };
    }

    _headerModal() {
        return \`<div class="modal__header">
                    <div class="modal__title">\${this.title}</div>
                    <div class="modal__header-cancel" data-modal-close></div>
                </div>\`;
    }

    _actionModal() {
        if (this.actionHTML) {
            return \`<div class="modal__footer">
                        \${this.actionHTML}
                    </div>\`;
        } else {
            return \`<div class="modal__footer">
                        <button class="button" data-modal-close><span>\${this.cancelText}</span></button>
                        <button class="button solid" data-modal-confirm>\${this.confirmText}</button>
                    </div>\`;
        }
    }

    _build() {
        let modalElement = document.createElement('div');
        modalElement.className = 'modal';

        if (this.innerHTML) {
            modalElement.innerHTML = this.innerHTML;
        } else {
            modalElement.innerHTML = \`<div class="modal__card">
                                        <div class="modal__content">
                                            \${this._headerModal()}
                                            \${this.body}
                                            \${this._actionModal()}
                                        </div>
                                    </div>\`;
        }

        document.body.insertAdjacentElement('beforeend', modalElement);

        // add data-modal-card to detect is use click outside of the modal or not
        modalElement.firstElementChild.dataset.modalCard = '';

        // setup event for event close and confirm
        modalElement.addEventListener('click', (event) => {
            if (this.closeOnOverlayClick && !event.target.closest('[data-modal-card]')) return this.close();

            if (event.target.closest('[data-modal-close]')) return this.close();

            if (event.target.closest('[data-modal-confirm]')) return this.onConfirm();
        });

        return modalElement;
    }

    show() {
        this.element = this._build();

        this.element.classList.add('modal--show');
        if (this.mainClass) this.element.classList.add(this.mainClass);
        document.body.addEventListener('keydown', this._closeOnESC);

        // prevent scroll on body
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.element.classList.remove('modal--show');

        // remove prevent scroll on body
        document.body.style.height = '';
        document.body.style.overflow = '';

        // remove element when the transition end
        this.element.addEventListener('animationend', () => {
            document.body.removeEventListener('keydown', this._closeOnESC);
            this.element.remove();
            this.onClose();
        });
    }

    isShown() {
        return Boolean(this.element?.classList.contains('modal--show'));
    }

    rerender() {
        this.element.innerHTML = this.innerHTML;
        // add data-modal-card to detect is use click outside of the modal or not
        this.element.firstElementChild.dataset.modalCard = '';
    }
}
`
