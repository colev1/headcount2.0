import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import data from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer.js';
import './styles/App.css';
import Search from './Search.js';
import CompareCardContainer from './CompareCardContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      compareCard1: null,
      compareCard2: null,
      changedCard: 'compareCard1'
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(data);
    this.setState({
      data: district.stats
    });
  }

  displaySearch = (searchValue) => {
    const district = new DistrictRepository(data);
    const searchedSchoolsArr = district.findAllMatches(searchValue);
    let searchedSchoolsObj = searchedSchoolsArr.reduce((acc, currSchool) => {
      acc[currSchool] = district.stats[currSchool];
      return acc;
    },{});
    this.setState({
      data: searchedSchoolsObj
    })
  }

  displaySelected = (card) => {
    const district = new DistrictRepository(data);
    const comparedCard = district.findByName(card.location);
    if (!this.state.compareCard1) {
      this.setState({compareCard1: comparedCard});
    } else if (!this.state.compareCard2) {
      this.setState({compareCard2: comparedCard});
    } 
      if (this.state.changedCard === 'compareCard1') {
        this.setState({changedCard: 'compareCard2'})
      } else {
        this.setState({changedCard: 'compareCard1'})
      }
      this.setState({[this.state.changedCard]: comparedCard});
  }

  compareCards = (card1, card2) => {
    const district = new DistrictRepository(data);
    const comparedAvg = district.compareDistrictAverages(card1, card2);
    return comparedAvg;
}

  render() {
    return (
      <div className = "App">
          <h1 className="header"> 
          HeadCount 2.0
          </h1>
          <Search 
          displaySearch={this.displaySearch}
          />
          <CompareCardContainer 
          compareCard1 = {this.state.compareCard1}
          compareCard2 = {this.state.compareCard2}
          compareCards = {this.compareCards}
          />
          <CardContainer 
          data={this.state.data} 
          displaySelected={this.displaySelected}
          compareCard1 = {this.state.compareCard1}
          compareCard2 = {this.state.compareCard2}
          />
      </div>
    );
  }
}

export default App;
