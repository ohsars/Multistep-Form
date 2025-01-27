import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({ firstName, lastName, email, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Information">
      <label>First Name</label>
      <input 
      autoFocus 
      required 
      type="text" 
      value={firstName} 
      onChange={e => updateFields({firstName: e.target.value})}/>

      <label>Last Name</label>
      <input required type="text" 
      value={lastName} 
      onChange={e => updateFields({lastName: e.target.value})}/>

      <label>Email</label>
      <input required type="email" 
      value={email} 
      onChange={e => updateFields({email: e.target.value})}/>

      <label>Age</label>
      <input required type="number" min={1} 
      value={age}
      onChange={e => updateFields({age: e.target.value})}/>
    </FormWrapper>
    )
}