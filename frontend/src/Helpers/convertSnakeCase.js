export const convertSnakeCase = (snakeInput) => {
    return snakeInput.split('_').map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    
}

export default convertSnakeCase;

//console.log(convertSnakeCase("test_string"));