import React from 'react';

//Addoption component
export default class AddOption extends React.Component {
  
        state = {
          error: undefined
        }

      //class method
      handleAdding = (event) => {
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() =>({ error: error }));

        if(!error) {
            event.target.elements.option.value = ' ';
        }
      };
      render() {

        return (
          <div>
              {this.state.error  && <p>{this.state.error}</p>}
              <form onSubmit={this.handleAdding}>
                  <input type="text" name="option"/>
                  <button>Submit</button>
              </form>
          </div>
        )
      }
}
