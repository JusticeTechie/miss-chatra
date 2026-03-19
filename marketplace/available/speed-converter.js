// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qVFC5MJBi0tJ9jZ/Zdsy27eyKLLQDlhhJWhx6XZSVoKl8A7Uzvq7a0M2z1zwrX6UkUEyEQPsBitE5fNBKmyH1QN7mERsxmJ/H1R4QPD1xR9qvG9LfmWNkDo8u+IOfxm7V/meATc7EcIADANduSeqk/6YEAZNexwKPPKrJ5lFzLlhdedV4RmD2t3ZnMHBgUwtdminPM3/QvRJHKp13Yvxold3LqpNQKohRQvA4ESkIoVTV19hIMC7lPb1mK1KG15szVzEKkEVzSn11PUFT6w0zQkOBWDas8ZtU7xy3Y2zAcweVJOWqsfd600tisVkahotgplvpU85klfLeU/O+9WJF1KlF2DXtsUdcKTk93FMsdjMEkVy4TJxsh54ig5vm0Sts9QthPOshIDd3tj7Q2MYHBbPINKkXoL+hGt3aj2X+J23XEd7unqbiG9ZWg0ntsQ3yR3fABSN7IW42tg8YxtxX5mkN3zCYyTwGYorrXFdMU55Qp+vFvJuQQ62noOdktksWaZrGJCyhC1B8ahx7vbOg18c+zLM7pQXarzA8cC+hAX3yqgwTW0izo0f+o1d2myIv4bHU7SSd7ACoRFz4P9otnaSWjo3eJEvd3nFTRajqMKGSV8hCKuUhYf6KWH4PxmTNHXAoh+lxqqK6Ptr2zfGaJSfXmSDbqJU/BX1kk/gz/sK5zuBzGrKfp9m9uH2rTkyERFGiWno2+YgnVRz49IV1O4YFj1HhEsBS8hm3Iq3itm4/WlYE5Dd5b/oVwT6BD2q+r4eS1aot61hPgNuPUoOSLu1OtP6joFKWQZ7q14FbXM9KnhCFtAgKotkY9sXLqEDqchVpIfZ1qtjuVZ0I9rCPKMXbJvAkyFs779+hXQJhucdP83UQrNqFpWIcR78KrFEzMjIZnS/Ga05gFtw1YamnMeQ8p+t2Gpp+7lGuzgWcCuYsbGxJ7t2VmI+HOlAWPqj5mZZwThFSwMLUlL764upiv68rd8jGYKGpU2MCugXsQJh6LLXNl16Q5sQIYGMPXAKsciU5/a7Yb2PGyOWVvjX2F6fQHNleNLUj6iVMp9NxEw8d+aUVSA3PrEmokqU8Cov29EUKpL5VNkebQha+e4yU7iDUJsz1z0oyueCUgA8R2T0iCIIUl1obGXDDc+6kSmbLQAlfGL+KaqZhsbnA+qihbhM7E7J+necMCjBLbZQIzvMxmCBHifci80a5bqfx/vbU2ZQpVhgmtUyonIUitZ/uakl7QQFNvZYZLqEIRBjrgsj2CkN+KVSCJetYg//9b5h/4rOy4e/7fdnhX0mSDDVGVUfn4HYj+meVn6JohRf87R17qOGnSi9JGJwPbx7YQ8147jrghMdt4lVASzcJTZK6rQGvRjtZnaVfMIfsuQuy/vM4Jo9cVZloU/EUoeSgKO4Yhh/2oi4zdqrGYMcwpAtrjOD4QyJ5X/J+Y0mWXsZJR23hJkqdVNVp9oaIm7RGC/3eHLOoo81eAaK+j4kqssE1a+yOsQeh6ibJ7Y8gBqtAPeKT1qGESFfeK+qCrmWCuM9qPFP2WtoGkWVxXiHekHxLdzt94LLlW9Ee5v06FYucfL8c19XnghIEoJkQrzat0E75wNiuhsOCBIbk1+SZlGJtljc9QvuuFgP1JmPXuq56mmplLvAKgn+8WWlLuCVIcl3T8LVn9wT1blzLwOurYA6f+HKYJQKeFlSVau5jd9Uf2MmZ8MLl1ISZ5zTwQ==';
  const _INTEGRITY_HASH = '4e133e87ceb5f416a9e426880727bc9a99134d391eef9d2aa54cc17887d33000';
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
