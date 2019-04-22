import React from 'react'
class App extends React.Component {
  render () {
    return <div>
      <h1>Hello React & Webpack!</h1>
      <ul>
        {
          ['a', 'b', 'c'].map(name => <li key={name}>{`I'm ${name}!`}</li>)
        }
      </ul>

      <div className="flex">
        <div>12</div>
        <div>12</div>
        <div>12</div>
      </div>
    </div>
  }
}
export default App
