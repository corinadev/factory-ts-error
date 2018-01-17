import * as Factory from 'factory.ts';

interface Person {
  id: number
  firstName: string
  lastName: string
  fullName: string
  age: number
}

const personFactory = Factory.makeFactory<Person>({
  id: Factory.each(i => i),
  firstName: 'Bob',
  lastName: 'Smith',
  fullName: 'Robert J. Smith, Jr.',
  age: Factory.each(i => 20 + (i % 10))
});
