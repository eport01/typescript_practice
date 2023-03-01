import {ChangeEvent, FC, useState} from 'react';
import { HairColor } from '../Enums';
import { User } from '../Interfaces'; 




export const Person: FC<User> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null >("")

  //type NameType = "Emily" | "Ellie"
  //const nameForType: NameType = "Emily"


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder="Write down your country..." onChange={handleChange}/>

      {country}
      {hairColor}
    </div>
  );
}
