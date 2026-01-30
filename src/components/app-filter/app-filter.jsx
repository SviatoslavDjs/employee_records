import "./app-filter.css";
import { Component } from 'react'

const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", label: 'Всі співробітники' },
        { name: "rise", label: 'На підвищення' },
        { name: "moreThen1000", label: 'ЗП більше 1000$' }
    ]
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${clazz}`} type="button" data-btn="all" key={name} onClick={() => props.onFilterSelect(name)}>{label}</button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}
export default AppFilter;