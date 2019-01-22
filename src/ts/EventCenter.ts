const EventCenter = function(){
    let EVENT_BUS = null
    class _EventCenter {
        listenerList:{}

        constructor(){
            if(!EVENT_BUS){
                EVENT_BUS = this;
            }
            EVENT_BUS.listenerList = {}
        }

        addEventListener(eventName,callBack){
            if(!this.listenerList[eventName]){
                this.listenerList[eventName] = []
            }

            this.listenerList[eventName].push(callBack);
        }
        removeEventListener(eventName,callBack){
        let arr =  this.listenerList[eventName]
        let index = arr.findIndex(item=>item === callBack);
        arr.splice(index,1);
        }

        fire(eventName:string,param?:any){
            this.listenerList[eventName] && this.listenerList[eventName].forEach(func => {
                func(param)
            });
        }
    }
    return _EventCenter
}()
const EVENT_BUS = new EventCenter();

export default EVENT_BUS