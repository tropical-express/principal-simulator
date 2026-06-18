export async function loadYaml(path){

const response=

await fetch(path);

const text=

await response.text();

return jsyaml.load(text);

}