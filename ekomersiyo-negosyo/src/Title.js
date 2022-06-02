import React from 'react';

export default function Title ({prodName,label}){
    return(
        <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">{prodName}<strong className="text-yellow">{label}</strong>
        </h1>
        </div>
        </div>
    )
}