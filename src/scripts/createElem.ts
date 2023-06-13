function createElement (elemType: string, elemClass?: string): HTMLElement {
    let elem = document.createElement(elemType);
    if (elemClass) {
        elem.classList.add(elemClass);
    };
    return elem;
};

module.exports = createElement;