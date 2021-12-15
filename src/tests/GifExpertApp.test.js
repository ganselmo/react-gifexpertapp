import { shallow } from "enzyme";
import GifExpertApp from "../components/GifExpertApp";

describe('Test for Gif Experts App', () => {

    let wrapper = shallow(<GifExpertApp />);

    beforeEach(()=>{
        wrapper = shallow(<GifExpertApp />)
    })
    test('should match snapshot', () => {
        // expect(wrapper).toMatchSnapshot();
    })

    // test('should add an element ', () => {
    //     wrapper.find("button").simulate("click")
    //     expect(wrapper.find("ol").children("li").length).toBe(1)
    // })
    
    
})
