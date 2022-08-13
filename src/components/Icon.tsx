import React from "react";
import SVG from 'react-inlinesvg'
type TProps= {
  name:string
  size?:number,
  props?:any,

}
export const Icon = ({name,size=16,...props}:TProps) => {
  return       <SVG
  src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
  width={size}
  height={size}
  {...props}
/>;
};
