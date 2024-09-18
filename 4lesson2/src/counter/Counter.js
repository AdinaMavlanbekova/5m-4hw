import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {plusCount, minusCount, resetCount, plusTen, minusTen} from "../store/counterSlice";


const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.count)

    const countPlus = () => {
        dispatch(plusCount(count +1))
    }

    const countMinus = () => {
        if (count > 0){
            dispatch(minusCount(count -1))
        }
    }

    const getTenMinus = () => {
        if(count >= 10) {
            dispatch(minusTen(count -10))
        }
    }

    const getTenPlus = () => {
        dispatch(plusTen(count +10))
    }

    const getReset = () => {
        dispatch(resetCount(0))
    }

    console.log(count)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={countPlus}>plus</button>
            <button onClick={countMinus}>minus</button>
            <button onClick={getReset}>reset</button>
            <button onClick={getTenPlus}>plus 10</button>
            <button onClick={getTenMinus}>minus 10</button>
        </div>
    )
}

export default Counter;