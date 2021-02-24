import {ABC} from './test'

const fn = () => {
    console.log('Hello fn')
}
fn()

console.log(ABC)
//babel plugin test
class X {
    a = 10
    ABC(){
        console.log(a)
    }
}
let a = new X()

a.ABC()