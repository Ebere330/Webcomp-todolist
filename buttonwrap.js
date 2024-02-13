class ButtonWrap extends Todo {
    static name = "button-wrap";
    connectedCallback() {
        this.shadow.innerHTML = `
        <slot></slot>
        `
    }
}
ButtonWrap.create()