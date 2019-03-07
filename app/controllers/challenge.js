import Controller from '@ember/controller';

export default Controller.extend({
  challenges: null,
  init() {
    let challenges = [{
        name: '100 days of code',
        description: 'Code for at least half an hour, every day, for 100 days.',
        length: 100,
      },
      {
        name: 'Couch to 5k',
        description: 'Learn to run 5km without stopping',
        length: 60,
      },
      {
        name: 'NaNoWriMo',
        description: 'Committ to writing 50,000 words in the 30 days of November?',
        length: 30,
      },
    ]
    this.set('challenges', challenges);
  },
  actions: {
    newChallenge() {
      console.log(this.get('challenges'))
      let challenge = this.get('challenges').shift();
      console.log(this.get('challenges'))
      var newChallenge = this.store.createRecord('challenge', {
        name: challenge.name,
        description: challenge.description,
        length: challenge.length,
      });

      newChallenge.save();
    },
  }
});
