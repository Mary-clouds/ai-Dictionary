function generateDefination(event){
    event.preventDefault();
   let definitionElement = document.querySelector("#definition");

   new Typewriter('#definition', {
    strings: "la definition de fleur est...",
    autoStart: true,
    delay: 1,
    cursor: null
  });
  
}


let defintitionFormElement = document.querySelector("#definition-generator-form");
defintitionFormElement.addEventListener("submit", generateDefination);