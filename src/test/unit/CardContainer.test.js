import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import { shallow, mount } from 'enzyme';
import React from 'react';
import CardContainer from '../../CardContainer.js';


describe ('CardContainer', () => {
    const mockData2 = [{
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
        }}, 
    
        {location: "ACADEMY 20", 
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
        }}, 
    
        {location: "ADAMS COUNTY 14", 
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
        }}, 
      ];
      
    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = mount (
            <CardContainer data = {mockData2} />
        )
            expect(wrapper).toMatchSnapshot();
    })
});