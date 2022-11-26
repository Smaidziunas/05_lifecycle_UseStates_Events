import Counter from '../counters/Counter';

const counterArr = [
  { id: 1, CounterName: 'Counter 1' },
  { id: 2, CounterName: 'Counter 2' },
  { id: 3, CounterName: 'Counter s3' },
];

function CounterList() {
  return counterArr.map((obj) => (
    <Counter key={obj.id}>{obj.CounterName}</Counter>
  ));
}

export default CounterList;
