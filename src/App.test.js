import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About Me/);
  expect(linkElement).toBeInTheDocument();
});
// working of toBe
test('test adding two positive nums - failing test', function() {
  expect(4).not.toBe(8);
});
//working of toEqual
test('check gfgObj toEqual', () => {
  let gfgObj = { name: "GFG" };
  gfgObj['type'] = "company";
  expect(gfgObj).toEqual({ name: "GFG", type: "company" });
});
//checking for truthy values - All the tests will return truthy.
test('check for truthy', function() {
  const gfgObj = {
      first: null,
      second: undefined,
      third: false
  }
  const gfgUsers = [
    'user1',
    'user2',
    'user3'
];
  expect(gfgObj.first).not.toBeTruthy(); // True - Pass
  expect(gfgObj.second).toBeUndefined(); // True - Pass
  expect(gfgObj.third).toBeFalsy();      // True - Pass
  expect(gfgUsers).not.toEqual(expect.arrayContaining(['user1', 'user4']));
});
//skip test
test.skip('skip test example - skipping the addition test', () => {
  expect(5).toBe(5);
});

//only test
test.only('skip test example - skipping the addition test', () => {
  expect(5).toBe(5);
});