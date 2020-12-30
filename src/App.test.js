import App from './App';
import PersonList from './components/PersonList'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('render without crashing', () => {
    expect(wrapper).not.toBeNull();
  })

  it('renders a person list', () => {
    const personList = wrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  })

  it('has state', () => {
    const state = wrapper.state();
    expect(state).not.toBeNull();
  })

  it('has people property in state', () => {
    const state = wrapper.state();
    expect(state.people).toBeDefined();
  })

  it('passes people property of state to PersonList as prop', () => {
    const personList = wrapper.find(PersonList);
    expect(personList.props().people).toEqual(wrapper.state().people);

  })

})
