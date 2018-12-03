import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({data, displaySelected, compareCard1, compareCard2}) => {
    const cards = Object.keys(data).map((currCard) => {
        let className = 'card';
        if (compareCard1 && data[currCard].location === compareCard1.location) {
            className = 'card selected';   
        } 
        if (compareCard2 && data[currCard].location === compareCard2.location) {
                className = 'card selected';
        }
        return <Card 
        key = {data[currCard].location}
        compareCard1 = {compareCard1}
        compareCard2 = {compareCard2}
        cardInfo={data[currCard]} 
        displaySelected={displaySelected}
        selected = {className}/>
    })
    return (
        <div className = "card-container">
            {cards}
        </div>
        )
    }

CardContainer.propTypes = {
    data: PropTypes.object,
    displaySelected: PropTypes.func,
    compareCard1: PropTypes.object,
    compareCard2: PropTypes.object
}

export default CardContainer;