import React from "react";
import { GiTrousers,GiTShirt } from "react-icons/gi";
import {ImCross} from "react-icons/im"
import { useFormContext } from "react-hook-form";
const getIcon = (name,color)=>{
    
    switch(name){
        case "person_shirt_color": return <GiTShirt style={{ height:"50pt",width: "50pt",color: color,zIndex:9 }}/>;
        case "person_pants_color": return <GiTrousers style={{ height:"50pt",width: "50pt",color: color,zIndex:9 }}/>;
        default: return <div></div>;
    }
}
export default function InputColorImage({icon, labelText, imgSrc, name, colors }) {

    const { register, watch } = useFormContext(); // retrieve all hook methods     
    return (

        <div className="d-flex mt-3 flex-row  justify-content-between align-items-center " style={{ marginBottom: "20pt" }}>


            <div className="d-flex mt-1  flex-row justify-content-center "
            style={{height:"60pt",width: "60pt",border:"5pt solid #3043EF"}}
            >
                {
                    watch(name) === "" ?
                        (<div >
                            
                            </div>)
                        :
                          getIcon(name,watch(name))  
                        
                }

            </div>
            
            <div className="d-flex flex-row mr-4">
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
            
        </div>

    );
}