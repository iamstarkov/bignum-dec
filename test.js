import { equal } from 'assert';
import dec from './index';

it('should bignumDec', () =>
  equal(dec('420000000000000000000000'), '419999999999999999999999'));

it('should bignumDec invalid input', () =>
  equal(dec(), undefined));
