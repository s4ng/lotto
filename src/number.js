import React from 'react';

function Number() {
    ranNum = () => {
        let lotto = new Array();
        let count = 0;
        let isOK = true;

        while(count < 6){
            let num = Math.floor(Math.random() * 45) + 1;

            for(let i = 0; i < count; i++){
                if(num == lotto[i]){
                    isOK = false;
                }
            }

            if(isOK){
                lotto[count] = num;
                count++;
            }
        }
    }
    
    return ({
        render(){
            <div className="Number">
                <span className="num">

                </span>
            </div>
        }
    })
}

export default Number;