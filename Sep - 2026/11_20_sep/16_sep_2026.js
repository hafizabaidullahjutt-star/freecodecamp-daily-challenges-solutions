function capitalize(paragraph) {
    let capitalize=true;
    let result='';
    for(let i=0;i<paragraph.length;i++){
        let char=paragraph[i];
        if(capitalize && /[a-zA-z]/.test(char)){
            result+=char.toUpperCase();
            capitalize=false;
        }else{
            result+=char;

            if(char=="."||char=="!"||char=="?"){
                capitalize=true;
            }
        }

    }
  return result;
}

console.log(capitalize("crazy!!!strange???unconventional...sentences."));
