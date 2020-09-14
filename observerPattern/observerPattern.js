class YoutubeChannel {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  addSubscriber (subscriber) {
    this.subscribers.push(subscriber)
  }

  removeSubscriber (subscriber) {
    this.subscribers = this.subscribers.filter(_subscriber => _subscriber !== subscriber);
  }

  notifySubscriberNewVideo (subscriber) {
    const target = this.subscribers.find(_subscriber => _subscriber === subscriber);
    if (target) target.addVideo(this.name);
  }

  notifyAllNewVideo () {
    this.subscribers.forEach(subscriber => subscriber.addVideo(this.name))
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
    this.videoList = [];
  }

  addVideo (video) {
    this.videoList.push(video);
  }
}

const channel1 = new YoutubeChannel('LOL');
const channel2 = new YoutubeChannel('Starcraft');
const channel3 = new YoutubeChannel('Overwatch');

const lee = new Subscriber('Lee')
const park = new Subscriber('Park')
const kim = new Subscriber('Kim')
const choi = new Subscriber('Choi')

channel1.addSubscriber(lee)
channel1.addSubscriber(park)
channel1.addSubscriber(kim)
channel1.addSubscriber(choi)
channel1.notifyAllNewVideo();
channel1.notifySubscriberNewVideo(lee);
console.log(lee);
console.log(park);
