import React from "react";
import { GiTrousers,GiTShirt } from "react-icons/gi";
import { useFormContext } from "react-hook-form";
const getIcon = (name,color)=>{
    console.log(color);
    switch(name){
        case "person_shirt_color": return <GiTShirt style={{ height:"50pt",width: "50pt",color: color }}/>;
        case "person_pants_color": return <GiTrousers style={{ height:"50pt",width: "50pt",color: color }}/>;
        default: return <div></div>;
    }
}
export default function InputColorImage({icon, labelText, imgSrc, name, colors }) {

    const { register, watch } = useFormContext(); // retrieve all hook methods     
    return (

        <div className="d-flex mt-3 flex-row align-items-center " style={{ marginBottom: "20pt" }}>


            <div className="d-flex mt-1  flex-row justify-content-center col-3 ">
                {
                    watch(name) === "" ?
                        (<div className="">
                            {labelText}
                            </div>) :
                          getIcon(name,watch(name))  
                        
                }

            </div>
            
            <div className="d-flex flex-row">
                {

                    colors.map((value, index) => (<div className="mx-1" key={`${name}_${index}`}>
                        <input
                            {...register(name)}
                            type="radio"
                            className="colorSelect btn-check"
                            id={`${name}_${index}`}  
                            value={value}
                            name={name}                          
                            autoComplete="off"
                        />
                        <label
                            className={`divColor btn btn-secondary `}
                            style={{                                
                                height: "17pt",
                                width: "17pt", backgroundColor: value
                            }}
                            htmlFor={`${name}_${index}`}
                        >

                        </label>


                    </div>))
                }

            </div>
            {/* <div className="d-flex flex-column ">

                <div className="d-flex flex-row ">
                    <input type='range'
                        {...register(name)}
                        min="1" max={colors.length}
                        className="text-end mx-2 d-flex flex-row form-range" />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    {
                        colors.map(( value, index) =>
                            <label
                                key={`${index}_${name}`}
                                style={{  backgroundColor: value }}
                                className='d-flex flex-row'
                            >
                            </label>
                        )
                    }
                </div>
            </div> */}
        </div>

    );
}