export default class EventBus {
    bus: any = {};
    uid: number = 1;

    public on(eventName: string, cb: () => any) {
        let ei = new EventItem(cb, this.uid)

        if (eventName in this.bus) {
            this.bus[eventName].push(ei)
        } else {
            this.bus[eventName] = [ei]
        }

        this.uid++

        return ei
    }

    public fire(eventName: string, args: any = undefined) {
        let targets = this.bus[eventName]

        if (!targets) return

        for (let idx in targets) {
            targets[idx].fucker(args)
        }
    }

    public remove(eventName: string, eventItem: EventItem) {
        if (!this.bus[eventName]) return

        let targets = this.bus[eventName]

        for (let idx in targets) {
            if (targets[idx] === eventItem) {
                targets.splice(idx, 1)
                break;
            }
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