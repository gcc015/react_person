import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => {
  const people = [misha, olya, alex];

  return (
    <div className="App">
      {/* 渲染 Person 组件 */}
      {people.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};
