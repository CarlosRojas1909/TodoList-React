// IndecisionApp Component parent!!!
class IndecisionApp extends React.Component {
  //constuctor
      constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this .state = {
                    options: []
        };
      }  

       componentDidMount() {
         try {
                const json = localStorage.getItem('options');
                const options = JSON.parse(json);

                if(options) {
                  this.setState(() => ({ options: options }));
               }
         } catch(e) {
                // do nothing at all
         }
                
      }
       
       componentDidUpdate(previousProps, previousState) {
                if(previousState.options.length !== this.state.options.length) {
                  const json =JSON.stringify(this.state.options);
                  localStorage.setItem('options', json);
                }
       }

       componentWillUnmount() {

       }

        //class method set state
        handleDeleteOptions() {
            this.setState(() => ({ options: [] }));
      }

      //creating another delete button next to my options 
      handleDeleteOption(optionToRemove) {
          this.setState( (previousState) => ({
                options: previousState.options.filter((option) => {
                  return optionToRemove !== option
                })
          }))
      }

      //class method
        handlePick () {
            let randomNum = Math.floor(Math.random() * this.state.options.length);
            let option = this.state.options[randomNum]
            console.log(option)
        }
      //class method
        handleAddOption(option) {
       
            if (!option) {
              return 'Enter valid value to add item'
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            this.setState((previousState) =>
             ({options: previousState.options.concat([option])})
          )
        }
      
      render() {
        
        const subtitle = "Put your life in the hands of a computer";
        
        return (
          <div>
            <Header   subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
            <Options 
                  options={this.state.options} 
                   handleDeleteOptions={this.handleDeleteOptions}
                   handleDeleteOption = {this.handleDeleteOption} />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        );
      }
}

//stateless Function Component
const Header = (props) => {
    return (
          <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2> {props.subtitle}</h2>}
          </div>
        );
}

Header.defaultProps = {
  title: 'Indecision'
}

// Stateless Fuction Component
    const Action = (props) => {
           return (
            <div>
                <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
            </div>
          );
    }
  
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

    //Addoption component
class AddOption extends React.Component {
  //constructor
      constructor(props) {
        super(props);
        this.handleAdding = this.handleAdding.bind(this);
        this.state = {
          error: undefined
        }
      }

      //class method
      handleAdding(event) {
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() =>({ error: error }));

        if(!error) {
            event.target.elements.option.value = ' ';
        }
      }
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


