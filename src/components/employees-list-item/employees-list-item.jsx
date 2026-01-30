import "./employees-list-item.css";
import { Component } from 'react';

const EployedListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, increase, rise, onSalaryChange } = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={(e) => onSalaryChange(parseInt(e.target.value), name)} />
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type="button" onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm"><i className="fas fa-trash"></i></button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default EployedListItem;