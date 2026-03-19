// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tydgHTNZ4RbDQiDRCtxvJ0+tWUzAJYbCIKmDBbkRl4VglGbVNY3wqiCxz4UY8A7nNXbdAXoI/MZBqD2HrrzBTssOBXYkguh/yjjB1efRCoIU/HPkZHDVduXdqUbMbGw36nnH8WwQk7N6OKfHBLikspgQ/932pTVtSQ82O1REHjuUjZFanoaNW+mMnqU9fzlIhRvrtC2kchaZa0XWrFMFMCIJVMg9YvozK3ncCe8mW3yQoKvOqlwr4BrGtLidBMByFRRGt5dAZnEN5Gttss1e49Q+H8amNhmntVSiWQH3kTXtWb/pM101xE88VI6rjJTy1diuXJ9kXy5NrTdBP6d801ED3eJf5+R+ZaK0+y25RuHlhWbroRjDC0yl4lcCrMs33BjVYmTAcQbFDJYLcJvtL/72RGnqb130LRJUcUYMoyE4yH+DklLizafJ/QeuOMWXjPFbjq/9lJLLZdqONnr2o7LJ3+4QgfOvE6cR5z8EFvEoxz0lKT3epksPl/z3yANakvAcp/6KUDZhgB0f66DtnkTQ8LbBN5PFuHJmfqVAnKzKQMaOzGtdaTDhsCxaADFmCRTNxvT5clr8Lu/9ieeuF8f9U/xlWmUlSXPUmR3764jPNagBLwk30YZL8hdQf7TkCOKXapdU87YaA4tRnxNDVJoM4zIkwsC0fw17W5BbPf76/C5bTphvXNRP+mXZY1g+47cDD/LZj15ucps/moxCuwY8IZZ2qbUJHS7l9HvmA4fk0GyKlGf/44lT+cmN1tGvfbrThYSpdrebr2mChsMUDmrSbBtMhyc6fE6WwYILdq0l3L2oVtMj4kGgtJoQYYPpnEEP1ofgVjAMSnPz0SgHpU0ALKOUyYhNBvaaA2Rgo8Qm4FoLUR0m9zn+X08hWfXF7RMaGp9FXfKxOt603RI0Q8/lZ6i8FQzY9fz0fhLYo7PsdT2FzmcbC/0XA+4560Wx8a+V5YIJcNk/qrbvlisJF3QIt9Xe7AgLLgiR8oUqt2Smt+TLTg2d3k4HKzIL2TMA3/aRC3ylSzpjiTAVbJMfzwp6fRzi1PtYpt7KQYlRJdMQ/DGH9njpbgCQd/cQJSWlvoGkZ2Fg2tsz+FSHNlkiv4/Rr7WMgqnnkGbfC0uIsT1XLOGIKbbHajanpZsSkX0ydE9XxH3KKwliuAa/tKaD5IRQ1eG0u53NWzY+DwlgopBhqTojv2sCB2Y6GPDvHx9mQfNYTss3dNs1nZ5rviZBr5tU+sHJhOZHcy9Nmy5rUMESjzT0TfGp9A1p/ov7pJTeFoUeJSV3g21k4BDQk4rcCaxzedWlGClDJAbmAqaVk5IWzAYdC7F61kdQQBi+qbURUcPJGIcVbv5kXNHF+nFWw53xWiC9k2B97Q==';
  const _INTEGRITY_HASH = 'b2823fe75adad9ef8658f9ea4a45f9631b6afb25df3592bc64d48441548de53b';
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
