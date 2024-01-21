// eventManager.js
class EventManager {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    // Return an object with an 'unsubscribe' method
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (eventCallback) => eventCallback !== callback
        );
      },
    };
  }

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  }
}

const eventManager = new EventManager();
export default eventManager;
