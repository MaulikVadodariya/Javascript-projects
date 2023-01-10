const convertBtn = document.querySelector('#convert-btn')

const camelCaseConvert = (str) => {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
     });
}

const pascalCaseConvert = (str) => {
    return `${str}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

const toSnakeCaseConvert = (str) => {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}

const toScreamingSnakeCaseConvert = (str) => {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_'); 
}


const tokebabCaseConvert = (str) => {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();
}

const toScreamingKebabCaseConvert = (str) => {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toUpperCase();
}

const convert = () => {
    var plainText = document.querySelector('#text').value;
     
    const camelCase = document.querySelector('#camel-case');
    camelCase.innerHTML = camelCaseConvert(plainText);

    const pascalCase = document.querySelector('#pascal-case');
    pascalCase.innerHTML = pascalCaseConvert(plainText);    

    const snakeCase = document.querySelector('#snake-case');
    snakeCase.innerHTML = toSnakeCaseConvert(plainText);

    const screamingSnakeCase = document.querySelector('#screaming-snake-case');
    screamingSnakeCase.innerHTML = toScreamingSnakeCaseConvert(plainText);

    const kebabCase = document.querySelector('#kebab-case');
    kebabCase.innerHTML = tokebabCaseConvert(plainText);

    const screamingKebabCase = document.querySelector('#screaming-kebab-case');
    screamingKebabCase.innerHTML = toScreamingKebabCaseConvert(plainText);
}

convertBtn.addEventListener("click" , convert)
