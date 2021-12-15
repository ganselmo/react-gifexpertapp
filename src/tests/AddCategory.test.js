import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";

describe('Test for Add Category component', () => {

    let wrapper = shallow(<AddCategory setCategories={()=>{}}/>);

    beforeEach(()=>{
        wrapper = shallow(<AddCategory  setCategories={()=>{}}/>)
    })
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should match input value', () => {
        
        wrapper.find("input").simulate('change', { target: { value: 'Hello' }} );
        // console.log(wrapper.find("input").props().value)
        // console.log(wrapper.dive().state())
        // expect(wrapper.state('inputValue')).toBe("Hello")
    })

    test('Should have the prop Set categories',()=>{
        //wrapper = shallow(<AddCategory/>)
        
    })
    
    
})
