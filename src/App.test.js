import App from './App';
import PersonList from './components/PersonList'
import { shallow } from 'enzyme'

describe('App', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<App />);
  })

  it('renders a person list', () => {
    const wrapper = shallow(<App />);
    const personList = wrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  })

})
