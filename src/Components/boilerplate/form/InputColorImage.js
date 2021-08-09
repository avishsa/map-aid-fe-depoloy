import React from "react";
import {  useFormContext } from "react-hook-form";
import RadioInput from "../../boilerplate/form/RadioInput";
export default function InputColorImage({ imgSrc, name,colors }) {
    
    const { register, watch } = useFormContext(); // retrieve all hook methods
    const colorImg = Number(watch(name)) !== -1 ? colors[Number(watch(name)) - 1].value : "black";
    console.log(colors.length);
    return (

        <div className="d-flex mt-3 flex-row " style={{ marginBottom: "20pt" }}>


            <div className="d-flex mt-1 px-2 flex-row col-4">
                {
                    watch(name) === "-1" ?
                        (<div className="">
                            טרם נבחר צבע</div>) :
                        imgSrc && <i
                            className="fas fa-tshirt  fa-3x "
                            style={{ color: colorImg }} ></i>
                }

            </div>
            <div className="d-flex flex-column ">

                <div className="d-flex flex-row ">
                    <input type='range'
                        {...register(name)}
                        min="1" max={colors.length}
                        className="text-end mx-2 d-flex flex-row form-range" />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    {
                        colors.map(({ value, className }, index) =>


                            <label
                                key={`${index}_${name}`}
                                style={{ marginLeft: "2pt", height: "10pt", width: "15pt", backgroundColor: value }}
                                className='d-flex flex-row'
                            >
                            </label>
                        )
                    }
                </div>
            </div>
        </div>

    );
}