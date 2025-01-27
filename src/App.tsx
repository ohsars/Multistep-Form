import { useState, FormEvent } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, previous, next} = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />, 
    <AddressForm {...data} updateFields={updateFields}/>, 
    <AccountForm {...data} updateFields={updateFields}/>
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    // alert("Form submitted!");
    alert(JSON.stringify(data, null, 2))
  }

  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2em",
    margin: "1em",
    borderRadius: ".5em",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 0 1em rgba(0, 0, 0, .1)",
  }}
    >
    <form onSubmit={onSubmit}>
      <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div style={{ 
        marginTop: "1em", 
        display: "flex", 
        justifyContent: "flex-end", 
        gap: "1em" }}>
        {!isFirstStep && <button type="button" onClick={previous}>Previous</button>}
        <button type="submit" >{isLastStep ? "Finish" : "Next"}</button>
      </div>
    </form>
  </div>
}

export default App