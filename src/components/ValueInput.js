import React from 'react'

export default function ValueInput(props) {
    const {
        Options,
        chooseCurrency,
        ChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type="number" min="0" className="MoneyInput" value={amount} onChange={onChangeAmount}/>
            <select value={chooseCurrency} onChange={ChangeCurrency}>
                {Options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            
            </select>
        </div>
    )
}