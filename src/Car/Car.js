import React from 'react'
import './Car.sass'

export default (props) => {
    const inputClasses = ['input']

    if(props.name !== ''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red')
    }

    return (
        <div className="car">
            <button className="delete" onClick={props.deleteCar}>x</button>
            <h3>{props.name}
                <input
                    onChange={props.onChangeNameCar}
                    type="text"
                    placeholder={props.name}
                    className={inputClasses.join(' ')}
                />
                <button>Change</button>
            </h3>
            <p>Year : {props.year} </p>
            <button onClick={props.onChangeTitle}>Change title - {props.name}</button>
            <div>
                <input
                    onChange={props.onChangeText}
                    type="text"
                    placeholder="Change title"/>
            </div>
        </div>
    )
};