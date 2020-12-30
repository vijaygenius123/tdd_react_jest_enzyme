import React from 'react';
import { shallow } from 'enzyme';
import PersonList from '../PersonList'

describe('PersonList', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PersonList />)
    })

    it('has a ul', () => {
        const peopleList = wrapper.find('ul');
        expect(peopleList).toHaveLength(1);
    })


    it('has no li when there are no people passed', () => {
        const ulList = wrapper.find('li');
        expect(ulList).toHaveLength(0)
    })

    it('renders one person', () => {
        const people = [
            { firstName: 'Tony', lastName: 'Stark' }
        ]
        const wrapper = shallow(<PersonList people={people} />)
        const liElements = wrapper.find('li')
        expect(liElements).toHaveLength(1)
    })

    it('renders three people', () => {
        const people = [
            { firstName: 'Tony', lastName: 'Stark' },
            { firstName: 'Steve', lastName: 'Rogers' },
            { firstName: 'Dr', lastName: 'Banner' }
        ]
        const wrapper = shallow(<PersonList people={people} />)
        const liElements = wrapper.find('li')
        expect(liElements).toHaveLength(3)
    })

    it('renders fist and last name', () => {
        const people = [
            { firstName: 'Tony', lastName: 'Stark' }
        ]
        const wrapper = shallow(<PersonList people={people} />)
        const liElements = wrapper.find('li')
        console.log(liElements.text());
        expect(liElements.text()).toContain(people[0].firstName)
        expect(liElements.text()).toContain(people[0].lastName)

    })
})