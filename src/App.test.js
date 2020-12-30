import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<App />);
  })
})
