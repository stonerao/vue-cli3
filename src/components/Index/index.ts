// import { socket } from '@/utils/config'; 
class Index {
    socket: string;
    websocket: any;
    constructor(socket: string) {
        this.socket = socket;
        this.websocket = new WebSocket(socket);
        this.websocket.onerror = (msg: any) => {
            console.error(msg);
            this.open()
        }
    }
    open() {
        this.websocket.onopen = (msg: object) => {
            this.websocket.send("data send");
        }
        this.websocket.onmessage = (msg: object) => {
            console.log(msg)
        }
    }
}
// export default Index;
export function Sockets(params: { area: string, message: string, data: object, event: any }) {
    // let ws = new WebSocket(params.area);
    let _this = Sockets.prototype = {

    }
    return _this; 
}