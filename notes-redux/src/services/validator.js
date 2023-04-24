
export class ValidatorService{
    //we'll have the input value and the min amt of chars. that we want
    static min(inputValue, min){
        if(inputValue.length < min){
            return `Can't be less than ${min} charachter`;
            
        }
    }
    
    static max(inputValue, max){
        if(inputValue.length > max){
            return `Can't be more than ${max} charachter`;
        }
    }
}