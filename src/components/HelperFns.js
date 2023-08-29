
export function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function removeWhiteSpace(location){
    return location
                .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
                .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
                .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
                .replace(/\s+/g, '+') // replace any remaining white space with +, so it works in api call
}