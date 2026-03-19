// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ti9Wpyeu81SLVtB1h1bM7M3gMKyJLhur2F6J2wXwHiqA9o1lI46jlnHDMirtBWNHf3sypzGz5iRZOt+FTx26FYK4wJjcVBFVKn3wY9nyW8LFKEEKJB1OpniGMyObaaNchWJUuyaLbfb6BP17YsSsi7+jePEdwT9S7Uj8HG3eWFU2htOG1lXlwCEXIuz6Z63F1vekjYzqEvb16D/FIKarwhLHwzBu8sTRNHXlXlfb2q0lYXtfnqHCEOEPxDsuptialnt7yEwJSUBcxUiimUvNsK7791hMrz96PukLXhBAf+xeYp3gtci4aBd+TftPLwtkauh2u9Xx5zsStTUQeXVChN/SESXNLNCqeQ5olCsJ5zME/t2z7fGIH7oB5JSp5z0b40ABlvPHhbpG8oQCz6V5IGWCYvZ9Ukahm8ScYIeYRiU4txdpIsu2AOLHnOGDev/ITj9BBAmpXxA+S+mPQvThjK8gNKW55H4ZmVMHVLaxv6W6XpMV9mBulnf/6v1ijDQtakxA8EeZuOwMNg6eD4j2Jxg4uKrgP7ZZeSfadOOy36MDMTOwWXcJpCg1XPS7D1FKgHF3Sq8wQqw6WbFhXkNec0lhqgvkDzp7ZVQwX9pf0z1SA9JibMoPgc4Wo3+PrUdTNj0DuMj/ITf+6XD2EgEX2+Clm56VoFZXSTTWA9fXLuvBdTFp/ynrzb7PT7xiJcOv/jZRXNtXag3ars+8ZIK5dQEFXmESd73omiDvR5KDvPgNiPE2VrpUH9SC20ueCfKAEZ56uzriypNKSeKT8J+VcUPLA6fGRPVsAx7/VNQIlrLt5aR2S7qf9NrElqTXg1cNeKO9syumQY1YXUaZ11m4sFAhDeHFBgCG5PCgt0TUgxYWPj6wwBa+gbNWpaWguGveKddbZ7u8s2IZSkcDqdUYHZ7b7yudiOR/kKi1LvW5UyeNqt242bipOQCHyHgnL5nPbHtYpszp5BPqlvgw/j2RQdzD/B7uX0AHe3YGvCirU6kzAwP21U31bmFHVbctUPI9j/nhnO6QhX2wjFlOUmgVjFnIKntggoLuOO4kC+r3aPEEdw4k36h0c1MXQbE67pPZXkxGwQAw1umAr/hJ+2PYiJFru0546VANTugKaGpiXBgDLq+l/BQZAmsnhE5XZag4ItdRS7A0GDSaNALjqPGpXpadGaWDZ1jJytqtw3M2RfeJtk329eMbCgH0I/DhxCKsVInI0LRmcnvyDnkK8eXiai2/W3LKo2KcUFP76p6COolNCg57JaNd27hgPcIFXEb1rNq88adom0DiCKWwgjlxGZSu39E+c2nnnUOb1sM42k6u90ffhtMHk7vBMEwteJA7WmIeMIDFZGfTqtMS20KnCrBIG/1fjTWyC+FKJKharqvAnpQvaEBVwg==';
  const _INTEGRITY_HASH = '006287493e9f54f9bf549b6524f0dc8afd0c4c3102a23b7cd96373a771399e0d';
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
