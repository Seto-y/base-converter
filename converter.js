function convertToBinary(a) {

    array = [];
    array1 = [];
    i = 0;
    result = "";

    while(a > 0){

        i = a % 2;
        array.push(i);
        a = (a - i) / 2;

    }

    let n = array.length - 1 ;

    while(n >= 0){
        result += array[n];
        n--;
    }
    
    return result;
 
}

function convertToHexa(a){

    array = [];
    array1 = [];
    result = "";

    while(a > 0){

        i = a % 16;

        switch(i){
            case 0:
                array.push(0);
                break;
            case 1:
                array.push(1);
                break;
            case 2: 
                array.push(2);
                break;
            case 3: 
                array.push(3);
                break;
            case 4: 
                array.push(4);
                break;
            case 5: 
                array.push(5);
                break;
            case 6: 
                array.push(6);
                break;
            case 7: 
                array.push(7);
                break;
            case 8:
                array.push(8);
                break;
            case 9:
                array.push(9);
                break;
            case 10:
                array.push("A");
                break;
            case 11:
                array.push("B");
                break;
            case 12:
                array.push("C");
                break;
            case 13:
                array.push("D");
                break;
            case 14:
                array.push("E");
                break;
            case 15:
                array.push("F");
                break;
        }

        a = (a - i) / 16
    }
    
    let n = array.length - 1 ;

    while(n >= 0){
        result += array[n];
        n--;
    }
    
    return result;
}

module.exports = {
    convertToBinary,
    convertToHexa
}