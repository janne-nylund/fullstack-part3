import React from 'react'

const PhonebookForm = (props) => {
    return(
      <form onSubmit={props.addPerson}>
          <div className="textInputs">
            Name:
            <input
            value={props.newName} 
            onChange={props.handleNameChange}
            />
          </div>
          <div className="textInputs">
            Number:
            <input 
            value={props.newNumber} 
            onChange={props.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit" className="addButton">add</button>
          </div>
        </form>
    )
  }

export default PhonebookForm