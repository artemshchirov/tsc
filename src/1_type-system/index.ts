console.log('1_type-system loaded');

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
}

type A = keyof (Person & Lifespan)
type B = keyof Person | keyof Lifespan

type C = keyof (Person | Lifespan)
type D = keyof Person & keyof Lifespan



const getKey = <K extends string>(val: any, key: K) => {
  console.log(val, key);
}
getKey({}, 'x')
getKey({}, Math.random() < 0.5 ? 'a' : 'b')
// getKey({}, 1)



interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point;

const sortBy = <K extends keyof T, T>(vals: T[], key: K): T[] => {
  console.log('vals ==>', vals)
  console.log('key ==>', key)
  return vals
}

const pts: Point[] = [{ x: 1, y: 1 }, { x: 2, y: 0 }];

sortBy(pts, 'x');
sortBy(pts, 'y');
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y');
// sortBy(pts, 'z');



interface PersonName {
  first: string;
  last: string;
}

const p: PersonName = { first: 'Jane', last: 'Jacobs' };

class Cylinder {
  radius = 1;
  height = 1;
}

const email = (p: PersonName, subject: string, body: string): void => {
  console.log({ p, subject, body })
};

const emailOptions = (options: { person: Person, subject: string, body: string }) => {
  const res = options;
  return res;
};

// const emailDestructure = ({ person: Person, subject: string, body: string }) => { };  // Error
const emailDestructure = ({ person, subject, body }: { person: PersonName, subject: string, body: string }) => {
  const res = { person, subject, body }
  return res;
};


const calculateVolume = (shape: unknown) => {
  if (shape instanceof Cylinder) {
    shape
    shape.radius
  }
}

type T1 = typeof p;
type T2 = typeof email;
const myEmail: T2 = () => { }

const v1 = typeof p;
const v2 = typeof email;
console.log('v1, v2 ==>', v1 + ', ' + v2);

const v = typeof Cylinder;
console.log('v ==>', v);

type T = typeof Cylinder;

declare let fn: T;
// const c = new fn(); // type Cylinder

type C2 = InstanceType<typeof Cylinder>;

const first: PersonName['first'] = p['first'];

type PersonEl = PersonName['first' | 'last'];
type Tuple = [string, number, Date];
// TODO loot at this. Why result string | number | Date and work only with [number]?
type TupleEl = Tuple[number];
