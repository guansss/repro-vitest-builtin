import { parse } from 'url';
import { test } from 'vitest';

test('parse', () => {
  console.log(parse('http://www.example.com'));
});
