import React, { useState } from 'react'

function Card(props) {

    return (
        <>
            
                <div className=" my-6 shadow-sm bg-transparent ">
                    <div className=" m-2.5 text-white rounded-md">
                        <img src={props.imgPath} alt="card-image" />
                    </div>
                    <div className="p-2">
                        <p className="text-slate-500 leading-normal ">
                           {props.title}
                        </p>
                    </div>
                </div>
            
        </>
    )
}

export default Card
