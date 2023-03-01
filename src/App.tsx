import React, {FC} from 'react';
import './App.css';
import { Person, HairColor} from './components/Person'

const App: FC = () => {

  return (
    <div className="App">
      <Person name= "Emily" age={30} email="emily@email.com" hairColor={HairColor.Brown} />
    </div>
  );
}

export default App;
