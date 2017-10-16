import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLines } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default( props ) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}>
                     <SparklinesReferenceLines type="avg" />
                </SparklinesLine>
            </Sparklines>
            <div>{average(props.data)} {props.units} </div>
        </div>
    );
}