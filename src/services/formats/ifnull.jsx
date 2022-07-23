import React from 'react';

export function ifnull(a, b) {
    if(a !== undefined && a !== "" && a !== null){
        return a;
    }else{
        return b;
    }
}
