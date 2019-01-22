import React from 'react';



// Stateless Fuction Component
    const Action = (props) => {
           return (
            <div>
                <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
            </div>
          );
    }

export default Action