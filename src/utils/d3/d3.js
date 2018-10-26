import * as d3 from 'd3';
class chart {
    d3 = d3;
    color = d3.scaleOrdinal(d3.schemeCategory20);
    svg;
    constructor() {
        
    }
    render({width,height,zoom,el}){
        /**
         * @param width 宽度
         * @param height 宽度
         * @param zoom 宽度
         * @param el 宽度  
         */
        //document 
        if (!el) {
            console.error("not svg")
            return false
        }
        this.svg = d3.select(el).attr("width", width || 400).attr("height", height || 400);
        //Do you need to zoom?
        if (zoom !== false) {
            let zoom = d3.zoom().on("zoom", (e) => {
                main.attr("transform", d3.event.transform)
            }).scaleExtent([0.1, 5])
            this.svg.call(zoom);
        }
    }

}
export default chart