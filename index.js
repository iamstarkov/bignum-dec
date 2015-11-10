import Bignum from 'bn.js';

export default function bignumDec(number) {
  if (!number) return;
  return (new Bignum(number).sub(new Bignum('1'))).toString();
}
