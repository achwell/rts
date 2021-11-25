import {ChildAsFC as Child} from './Child'
const Parent = () => {
    return <Child color="green" onClick={() => console.log('Click!')}>
        <p>Child</p>
    </Child>
}
export default Parent