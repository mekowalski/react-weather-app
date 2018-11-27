//Main file working, React Component
import React from 'react' //import react object from react package in package.json

//this class creates an instance of App and extends React.Component that is an object that lives in
//node_modules
class App extends React.Component {
  render() {
    return (
      //JSX compiled with Babel
      <div>
        <p>Hello Weather App Users!!!</p>
      </div>
    )
  }
}

//in order for other files to import this Component successfully, need to export this file at the bottom
export default App //tells file that this Component is accessible
