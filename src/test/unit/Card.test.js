import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Card from '../../Card.js';

describe('Card', () => {
    it('should match the snapshot with all data passed in correctly', () => {
            const card1 = {
                location:
                "COLORADO", 
                stats: {
                  2004: 0.24,
                  2005: 0.278,
                  2006: 0.337,
                  2007: 0.395,
                  2008: 0.536,
                  2009: 0.598,
                  2010: 0.64,
                  2011: 0.672,
                  2012: 0.695,
                  2013: 0.703,
                  2014: 0.741
                }
            };
            const card2 = 
                { location: "ACADEMY 20", 
                stats: {
                  2004: 0.24,
                  2005: 0.278,
                  2006: 0.337,
                  2007: 0.395,
                  2008: 0.536,
                  2009: 0.598,
                  2010: 0.64,
                  2011: 0.672,
                  2012: 0.695,
                  2013: 0.703,
                  2014: 0.741
                }
            }; 
            const wrapper = shallow(<Card cardInfo={card1} />);
            expect(wrapper).toMatchSnapshot();
            
    })
})