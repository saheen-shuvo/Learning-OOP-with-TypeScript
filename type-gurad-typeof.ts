{
    //
    // typeof ----> Type Guard
    // const add(param1: string | number, param2: string | number) : string|number => {
    //     if(typeof param1 === "number" && typeof param2 === "number"){
    //         return param1 + param2;
    //     }
    //     else{
    //         return param1.toString() + param2.toString();
    //     }
    // }


    type AlphaNumeric = string | number;

    const add: any(param1: AlphaNumeric, param2: AlphaNumeric) : AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    //
}