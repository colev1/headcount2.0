import React from 'react';
import './styles/Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    const stats = Object.keys(props.cardInfo.stats).map(currStat => {
        let classString = 'low';
        if (props.cardInfo.stats[currStat] > 0.5) {
            classString = 'high'; 
        }
        return (<li 
        className={classString} key={currStat}
        >
            <span className='year'>
            {currStat}
            </span>
            <span className='percentage'>
            {props.cardInfo.stats[currStat]} 
            </span>
        </li> )
    });

    return (
        <div className={props.selected || 'card selected'} key={props.cardInfo.id} 
        onClick={() => props.displaySelected(props.cardInfo)}
        > 
            <h1> {props.cardInfo.location} </h1>
                <article> 
                    <h3 className="info"> year </h3>
                    <h3 className="info"> % enrollment </h3>
                </article>
            <ul> {stats} </ul>
        </div>
    );
}

Card.propTypes = {
    compareCard1: PropTypes.object,
    compareCard2: PropTypes.object,
    cardInfo: PropTypes.object,
    displaySelected: PropTypes.func,
    selected: PropTypes.string
}

export default Card;