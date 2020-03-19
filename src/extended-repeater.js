module.exports = function repeater(str, options) {
    let finalSequence = [];
    let counter = 0;

    if(options.separator===undefined){
        options.separator = '+';
    }

    if(options.additionSeparator === undefined){
        options.additionSeparator = '|'

    }

    if(Number.isInteger(options.repeatTimes)==false && Number.isInteger(options.additionRepeatTimes)==false){
        return str + options.addition;
    }else{
        while(options.repeatTimes !== 0){
            finalSequence.push(str);
            if(options.hasOwnProperty('additionRepeatTimes')){
            counter = 0;
            while(options.additionRepeatTimes!==0){
                finalSequence.push(options.addition);
                if(options.additionRepeatTimes!==0){
                    finalSequence.push(options.additionSeparator);
                }
                options.additionRepeatTimes--
                counter++
            }
            finalSequence.pop()
            options.additionRepeatTimes =  options.additionRepeatTimes + counter; 
        }
            if( options.repeatTimes !== 1){
            finalSequence.push(options.separator);
        }
            options.repeatTimes--
}
    return finalSequence.map(String).join('');
}
};



  