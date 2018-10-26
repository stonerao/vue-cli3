import chart from './d3.js'
class Bar extends chart {
    constructor() {
        super() 
        console.log(this)
        this.render({
            width:350,
            height:200,
            el:"#svg",
        })
    } 

}
export default Bar