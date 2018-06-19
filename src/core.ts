export default class EventBus {
    bus: any;
    private uid: number;

    constructor() {
        this.bus = {}
    }

    public on(eventName: string, cb: () => any) {
        let ei = new EventItem(cb, this.uid)

        if (eventName in this.bus) {
            this.bus[eventName].push(ei)
        } else {
            this.bus[eventName] = [ei]
        }

        this.uid++
    }

    public fire(eventName: string, args: any) {
        let targets = this.bus[eventName]
        for (let idx in targets) {
            targets[idx].fucker(args)
        }
    }
}

class EventItem {
    fucker: () => any
    uid: number

    constructor(fucker: any, uid: number) {
        this.fucker = fucker
        this.uid = uid
    }
}