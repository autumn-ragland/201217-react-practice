import React from 'react';
import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : {},
    }
  }
  async componentDidMount(){
    const fetchedData  = await fetchData();
    console.log(fetchedData);
    this.setState({data : fetchedData})
  }
  render(){
    // const data = this.state.data;
    const {data} = this.state;
    return(
      <>
      <div className={styles.container}>
        <h1>Covid 19 US Cases Tracker</h1>
      </div>
      <Cards data={data}/>
      </>
    )
  }
}

export default App;
