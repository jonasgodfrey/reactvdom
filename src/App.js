import React from 'react';

function MyComputer(){

   // Step three 
  // return <h1>Hello React!</h1>

  //JSX Expressions - Step four
  // const name = 'Peter';
  // const greeting = <p>Hello, {name}!</p>
  // return <h1>{greeting}</h1>

  // JSX Attributes - Step five
  // const link = <a href="https://example.com">Visit Example</a>
  // return <p>{link}</p>

  // Updating Component - Step six
  
  const handleClick = () => alert('Hello, React!');

  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );


}

export default MyComputer;