import React from 'react';
import Option from './Option'


//Stateless  Fucntion Component
const Options = (props) => {
     return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((each) => 
                  (<Option 
                        key={each} 
                        each={each}
                        handleDeleteOption= {props.handleDeleteOption}
                       />
                  ))
            }
        </div>
      );
}


export default Options