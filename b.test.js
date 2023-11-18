import * as url from 'url';
import { test } from 'vitest';

test('parse', () => {
  console.log(url.parse('http://www.example.com'));
});
