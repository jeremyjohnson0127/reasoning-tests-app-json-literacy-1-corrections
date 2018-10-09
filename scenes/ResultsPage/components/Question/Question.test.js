import React from 'react';
import { Provider } from 'react-redux'

import Question from './Question';

import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store'
const mockStore = configureStore()

const questionMock = {
  question: [],
  explanation: [],
  answers: []
};

const testMock = {
  name: 'foo',
  attachments: {},
  questions: [questionMock],
  pass_percentage: 10,
  time_limit: 10,
};

const defaultProps = {
  testId: 0,
  questionId: 0,
  test: testMock,
};

describe('Question', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Provider store={ mockStore({ answers: {} }) }>
        <Question {...defaultProps} />
      </Provider>
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
