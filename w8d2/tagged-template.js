const takesArgs = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

const name = 'Andy';
const color = 'yellow';

takesArgs`Hello my name is ${name} and my favourite color is ${color}. What's yours?`;
