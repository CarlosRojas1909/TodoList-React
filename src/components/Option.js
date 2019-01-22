import React from 'react';



//Stateless Function Component
 const Option = (props) => {
   
   return (
          <div>
            {props.each}
            <button 
                  onClick={ (e) => {
                      props.handleDeleteOption(props.each) }}
                  >remove
            </button>
          </div>
        );
}

export default Option;