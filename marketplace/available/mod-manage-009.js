// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YB+sUN2vp2NRa1E4jbMeDY7IvcXGYCRPJUtgBVGaMFKuf8oMaCs9UpgLIJU94NGj2kNTWpeU13958ueYkOgBZr3Pkjn6Bio/H+7Urtka8iRTglkVxgsuXwJrvZiVqgklfICnV29sLplOTzKgQxgLcs9xps6Bnwiu/nxyFLjVIaVwP3qWgFzfCoDFEo1HiMtiiWQLl+gKjsd0hguCtF3gEAf6GQaR4bRFu7I9yUx3y6FZMYwfw7riWQkk845vmGqpxHo5EmB2SrCx1BSSKKL+0dtJUXul8Eif+mUxGX6xKLZUZ7H0tefRdM0t8PFWAgj7itHd9cpNwyXS4i21ye7ddnnRD/rntqS/RjePn4bgySyOYc1v5gmJz39Sktjo8IRHD1gZf0vtKzibvJcrKv02lx0xX7SEK4HpA2zrzZgD5KF4MMCwdJXZ60XoHO7srZYwXz15Aewlhx1DsIwgZ5vkTJbe8OmMxXNY8LxhMh12DvlklIGL1YGXtPzGBPszp5ME6YbscEsylbS309eqcFHGEqoEcq0g13qViXt8GQmn2OCtYW8lLmuBHZWWZy3li1xRdceqGnWtU68hlTd511TLAuwtPw40/NAUjrGJVGwfTJGWvbjzZYs7bNfCCA/RH5C8vkJtUBc9RmnZ2ulV5Bln6MO1s1WODdAdsNo+M9/C1imYHyOXsbZwKH/hSOasg/TrACYq0lZpwrrUBJkO2hF4kQ/kMMdY/LYlzCrzciMV8Boatt9n4xMarm2FU8m8vUZzOSpsZ5GafTFjgtxrHa8s4xLi64DPmkGF5MWTUfLx74AcoMdLiQyLh4yQjIGXY63Reyo0mZ578GsOklLqCJI7NAeLc9g9JDDZR/ey913q9IssYk1c9x1/62GLUM5aCTcpXQ6mVh+O8Cv83iXkodwNOdOL0xuaPwL4vr3SVdgcmjyvyyhNwEmD2eYUmxXz0ZfZxiEXhCGBWWlTsxAKPmoGI4GHEyoY0LZxzcye+FZu4UuQO237RTAX1iPPBtWz1ByNNjPZSdrfnsgH0CEx+BYjTB/fUQ9T2vsE0JdH94tWDqKnCjGsDmjXpa3JzrDp0Y4AvPvlutdMpMqeYinoevpqDSqiJRfKWhjLThCEqvtt5lmoRxCr93V7ieGbS61apo9VzlG90gkBZ+BQ4cx6t5U6V4ixXQWWEvcYVHx5OJoeyrpmgtzrATMCyTdtt9fq/Cpv7UtEAR34vxk2p03RTIMXlVl1DlALmyO5Ol5MSbat0ltNTLywVhTjvkomjwClQcapiMPj0NOqQSXC+pZCbFkKptW1Bhs0lGz8kfHEeoCWYC+zItUafE1y9dHhnqcPQ8mfTZATDcmaWgS4Cbf71wYJUiYzhXxCGdYqJbVqPVU5';
  const _INTEGRITY_HASH = '6adc2dd2fd3c702eb3172f02d2cce50a5af93f9a91e2de04e141268c9f670052';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
