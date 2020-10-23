import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import PhonebookForm from './components/PhonebookForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = (props) => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personsToShow, setPersonsToShow ] = useState([])
  const [ filterValue, setFilterValue] = useState('')
  const [ successMessage, setSuccessMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      setPersonsToShow(initialPersons)
  })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }
 
    // array.some -> if atleast one of the elements match
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && newNumber === "")) {
      const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      window.alert(`Please give a number for ${personExists.name}.`);
    } 
    else if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && person.number !== newNumber)) {
      const personToUpdate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      if (window.confirm(`${personToUpdate.name} is already added to the phonebook, replace the old number with a new one?`)){
        personService
      .update(personToUpdate.id, personObject)
      .then(returnedPerson => {
        const updatedNumber = persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson)
        setPersons(updatedNumber)
        setPersonsToShow(updatedNumber)
        setNewName('')
        setNewNumber('')
        setFilterValue('')
        setSuccessMessage(`${newName}'s number was updated`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 2500)
      })

      .catch(error => {
        if (error.response.data.error === undefined) {
          setErrorMessage(`${personToUpdate.name} was already removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3500)
          setPersons(persons.filter(p => p.id !== personToUpdate.id))
          setPersonsToShow(persons.filter(p => p.id !== personToUpdate.id))       
        } else {
          setErrorMessage(`${error.response.data.error}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3500)
        }
        
      })
      }
    }
    else if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && person.number === newNumber)) {
      const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      window.alert(`${personExists.name} already exists in the phonebook`);
    }    
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setPersonsToShow(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setFilterValue('')
          setSuccessMessage(`${newName} was added to the phonebook`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 2500)
        })
        .catch(error => {
          setErrorMessage(`${error.response.data.error}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3500)
        })
    }
  }
  
  const removePerson = (id) => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToRemove.name}?`)){   
      personService
      .remove(id)
      .then(response => {
      setFilterValue('')
      setPersons(persons.filter(p => p.id !== id))
      setPersonsToShow(persons.filter(p => p.id !== id))
      setSuccessMessage(`${personToRemove.name} was deleted, status: ${response}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 2500)
    })
    .catch(error => {
      setErrorMessage(
        `${personToRemove.name} was already removed from server, status: ${error.response.status}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 2500)
      setPersons(persons.filter(p => p.id !== personToRemove.id))
      setPersonsToShow(persons.filter(p => p.id !== personToRemove.id))
    })
   } 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFindChange = (event) => {
    const searchString = event.target.value
    setFilterValue(searchString)
    setPersonsToShow(persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase())))
  }
  

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <Notification message={successMessage} cssSelector = 'notification' />
      <Notification message={errorMessage} cssSelector = 'error' />
      <div>Filter persons
        <input
          value={filterValue} 
          onChange={handleFindChange}
        />
      </div>
      <h2>Add a new person</h2>
      <PhonebookForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons removePerson={removePerson} personsToShow={personsToShow} />
    </div>
  )
}

export default App