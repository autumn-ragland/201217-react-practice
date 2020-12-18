import React from 'react';
import Cards from './components/Cards/Cards';
import Picker from './components/Picker/Picker';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      // chosenState: ""
    }
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  handleStateChoice = async (stateChoice) => {
    // console.log(stateChoice);
    const fetchedData = await fetchData(stateChoice);
    console.table(fetchedData);
    this.setState({ data: fetchedData});
  }
  render() {
    // const data = this.state.data;
    const { data } = this.state;
    return (
      <>
        <div className={styles.container}>
          <h1>Covid 19 US Cases Tracker</h1>
          <Picker handleStateChoice={this.handleStateChoice} />
          <Cards data={data} />
        </div>
      </>
    )
  }
}

export default App;
