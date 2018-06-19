# Event-Bus
event proxy

## Initial
```javascript
window.bus = new EventBus()
```

## Usage

```javascript
//bind event and get eventItem instance
let b = bus.on('eventName', function(name) {
    console.log('I am callback!' + name)
})

//global emit event
bus.fire('eventName', 'event bus hello')

//remove event binder
bus.remove('eventName', b)

//emit will get none action
bus.fire('eventName', 'event bus hello')
```
