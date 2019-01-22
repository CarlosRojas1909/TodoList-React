class Counter extends React.Component {
      constructor(props) {
        super(props);
          this.handleAddOn = this.handleAddOn.bind(this);
          this.handleMinusOne = this.handleMinusOne.bind(this);
          this.handleReset = this.handleReset.bind(this)
          this.state = {
            count: 0
        };
      }

componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if( !isNaN(count)) {
        this.setState(() => ({ count: count}));
    }
}

componentDidUpdate(previousProps, previousState) {
      if(previousState !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
}

      // aaOn subclass
      handleAddOn () {
        this.setState((previousState) => {
          return {
            count: previousState.count + 1
          }
        })
      }
      //  handleMinusOne subclass
      handleMinusOne() {
        this.setState((previousState) => {
          return {
            count: previousState.count - 1
          }
        })
      }
      // handleReset subclass
      handleReset() {
        this.setState(() => {
          return {
            count : 0
          }
        })
      }
      render() {
        return(
          <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOn}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>

          </div>
        )
      }
}




ReactDOM.render(<Counter  />, document.getElementById('app'));


// let count = 0;

// //function addon
// const addOn = () => {
//    count ++;
//    renderCounterApp();
//  }
// //function minusone
// const minusOne = () => {
//    count --;
//    renderCounterApp();
// }
// //function reset
// const reset = () => {
//    count = 0;
//    renderCounterApp();
// }


// const renderCounterApp = () => {
//       const template = (
//          <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={addOn}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//          </div>
//       )
// ReactDOM.render(template, document.getElementById('app'));
// }

// renderCounterApp()