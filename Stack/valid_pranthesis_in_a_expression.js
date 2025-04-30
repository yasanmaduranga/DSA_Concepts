function isBalanced(s) {
    let expression = s;
    let openBracketStack = [];

    for (i = 0; i < expression.length; i++) {
        if (expression[i] == '[' || expression[i] == '{' || expression[i] == '(') {
            openBracketStack.push(expression[i]);
        } else {
            if ((openBracketStack.length > 0) && (((openBracketStack[openBracketStack.length - 1] == '[') && (expression[i] == ']')) || ((openBracketStack[openBracketStack.length - 1] == '{') && (expression[i] == '}')) || ((openBracketStack[openBracketStack.length - 1] == '(') && (expression[i] == ')')))) {
                openBracketStack.pop();
            } else {
                return false;
            }
        }
    }

    return openBracketStack.length == 0 ;
}

let s = "{{[]}}{}{[]}";
console.log(isBalanced(s) ? "true" : "false");

