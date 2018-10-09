module.exports = {
  key: 'verbal',
  title: 'Verbal',
  tests: [
    require('./verbal-reasoning-practice-1.json'),
    require('./verbal-reasoning-practice-2.json'),
    require('./verbal-reasoning-practice-3.json'),
    require('./verbal-reasoning-practice-4.json'),
    require('./verbal-reasoning-practice-5.json'),
    require('./verbal-reasoning-practice-6.json'),
    require('./verbal-reasoning-practice-7.json'),
    require('./verbal-reasoning-practice-8.json'),
  ],
  intro: [
    {
      "key": "one",
      "title": "Verbal Reasoning Test", 
      "text": "Read the passage, and then answer the question below.\n\nYou may revisit any question before the time is up.",
      "backgroundColor": "#59b2ab"
    },
    {
      "key": "two",
      "title": "Exam Technique Suggestions",
      "text": "Read the question before you read the passage.\n\nBe extremely literal and exact in your interpretation of the material. Don’t apply ‘common sense’ or knowledge of the real world.\n\nIf you don’t know the answer, guess and move on. Allocate 30 seconds per question.",
      "backgroundColor": "#febe29"
    }
  ]
};
