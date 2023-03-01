import React, {FC, createContext} from 'react';
import './App.css';
import { Person } from './components/Person'
import { HairColor } from './Enums';


interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Emily",
    age: 30,
    country: "United States"
  }

  return (
    <AppContext.Provider value = {contextValue}>
    <div className="App">
      <Person name= "Emily" age={30} email="emily@email.com" hairColor={HairColor.Brown} />
    </div>
    </AppContext.Provider>
  );
}

export default App;

