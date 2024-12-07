function generateDefination(event){
    event.preventDefault();

    let userInputValue= document.querySelector("#user-input");
    let apikey ="1b3cfb66ad014a3fo55df2e890f445t9";
    
    let prompt = `user instructions: Generate a short and precise definition of the ${userInputValue.value}`;
    let context= `You are an universal Dictionary.please identify first the language of ${userInputValue.value}. Then make sure to follow the user instructions. provide a precise title about the language you are about to use for the definition. make sure to give the definition in both english and then in the language of ${userInputValue.value}. please don't write about html just display in basic html.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
    
   //clear the previous definition to prevent overlap
    let inputRemover = document.querySelector("#definition");
    inputRemover.innerHTML="";
   //show the result
    axios.get(apiUrl).then(showDefination);
}
function showDefination(response){
    new Typewriter('#definition', {
        strings: response.data.answer,
        autoStart: true,
        delay: 40,
        cursor: null,
      });
      
}


let defintitionFormElement = document.querySelector("#definition-generator-form");
defintitionFormElement.addEventListener("submit", generateDefination);

