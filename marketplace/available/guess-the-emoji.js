// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lE9MHMT/P1xYVtB2l5SJtL9v7VbX1mlnwW5x/yedlxkSQuxkZgPyaFBGOomUXkGByE7VpN8Hqy+iNBPnT7lQzbA6w1C3iGFuIbvfnUk37dO/r6DxhypR+U9yl8wygo/NG8yjrJcffcCFDlvGhLRdwkvF/NQcBKBKX+Bgq/q5xtjpRpAHvjOGWxZE6VKb5Z3F+jwjtT8UL6AyYmMxO1bU1Oj3IClr//dWzKmabov9Z6wAM4B67/b+ztDqgm32W36aYd5sPbs5V7MsEK1mdzvAt9a7KSaznoeMtDdOW340xIpOQgp9aQ5756pLa+V/L+IiHkcLaElvij4FPqogLJpQrqX4WuinJ4MkSSUIWZqGvlmtPl6BJ0wyVCWSvj6hMsXJTwL9ZaQtmH2T4LE0/XCF++5cJU9qGOzewDEfWJjkNx4z3Z4mDQm/X/7cWJwgj29P4QWTV4MhdNApzHO6uiFS0M5xp3r3vPPB7v4Ogf1NnjJwVdVnpB7GmPKZaoyL2JubH+2HLsT0YEyELTvlGCqdKQPfL2RP6zpQNb4cLFYilRH9dkfAM4PaWj5KIsLadcLXdqHjoxtQMqpIqVoF9u58JTXIuZlMXgp3jW0zOsQuusbr8i6OqPrbv5MZl7YzJwW9Nedx0kQLdl5LBuJVUZlBBGHQvdfRU71KjBID8Ht9J8yAbABk9dy2t3jvQRRfzpvZS+qpQiiNG1/+EmdjENrm29YH7DqKAsKYqr8xQSWveTDEQGEwG1njKzdL6GU8QZ9Q2c+nphOv0992Z1SN+nywnD8zatBe77ZkmQpo0vJPRXWIMqAu7gD2LJPwUxy4m39HB7H1LoiRRYuadR44wVoLXi9vetbliwGHKTkhrMHqF6eMKwUBbHzAu2wH85/smgautTY5uVx5gNheHMDDq5oM/X/GQcAUfeEqGGsHNvTp8XNA/ujkKVM4tMh30NpsDrXInWujfr0MpGHj3TsE05M3ReBzVuDN9QQkv5s3EVe8mmoZiELdmbcyRdS7Xa9QtYgq08S7mYVnrP9T5cMsVhzY/WOdpXMaYWAK7LsNu5ja8i9uXLZbHa7DX1E44SrZXkcEORsVjMn5wOxkYxebqx7SmIXtseTiB0kWqC/a7OUcUCpHPy9mDCNdqm0BG1EYY0Ixhi8Iy1KgHRmz1ZZ6+Ai1UhEJ8tgopq1Sj++LO4DbgwIyP6msneZST0Wx6u+PtJmmAt6WjWPsvMUR142T8TxcIfwVLBeAhp0ruNzGdNJA38usfIIr2bY9daYzngcsXB0pDBnwUCPe1NnUdPQORYD1JBEAUZwE2iV/3rXdnN8ZVXZaphzSWBVqsYzdJG7wba5971LBBuCVNqF7HhgnWiJeiXNYKhdc+cgyA7X3sYaJ+E60pKeKJFIWyOWh3BpH7nsMWgdK/GDCSHVczXeSbH4FvgPFWrWpJbJOwPKln9SRvh8aB5lQAma/JlFmbM0GELPCNWACrXcqNzTPJdaDKpU2ZcQdWG2XAs320GVeHecB8IEluIg+JR4FYEKR12SCjGRLCNLpM+Fw/3xqVaEhP3QMJBQ9nf/4dbsa0DtWTk2GfP9pTrjzF7n8ebl8WGbxOmzg7ChXocCF';
  const _INTEGRITY_HASH = '3614c5d01542876aac0aee78ec0284342d6c875d32b13b8b7c44f92e01df1fdb';
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
