const elements = {
    getElement : (element, text) => {
        return `<${element}>${text}</${element}>`;
    }
}

const body = document.body;
const structure = [];
structure.push(elements.getElement('header',"this is a header!"));
structure.push(elements.getElement("main", "this is a main section!"));
structure.push(elements.getElement("footer","this a footer!"));
structure.forEach((item => body.innerHTML += `${item}\n`));

