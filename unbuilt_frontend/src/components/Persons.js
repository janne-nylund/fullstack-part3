import React from 'react'
import Person from './Person'

const Persons = ({personsToShow, removePerson} ) => {
    return (
      <div>{personsToShow.map((person) =>
        <div key={person.id}>  
        <p><Person person={person} />
          <button 
            value={person.id} 
            onClick={remove => removePerson(remove.target.value)}
          >
            Delete
          </button>
        </p>
        </div>
    )}
    </div>
    )
}

export default Persons
