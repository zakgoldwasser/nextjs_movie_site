import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


export default function PopularityBar(props) {

    const calcColor = (percent,start,end) =>{
        let a = percent/10,
        b = (end-start) * a,
        c= b+start;

        return "hsl("+ c + ",100%,50%)"
    }
  return (
    <CircularProgressbar 
        value={props.vote_average}
        text={props.vote_average+'/10'}
        maxValue={10}
        styles={{
            path:
                {stroke: calcColor(props.vote_average, 0 ,120)},
            text: {
                fill:'white',
                fontWeight: 'bold'
            }
        }}
    />
  )
}
