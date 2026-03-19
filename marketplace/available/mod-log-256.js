// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZU06497ztVsimyM7cxjOKbm7pXp3rSE4S6TUgJajZXUaSgKdoPngP06ak1r1WlzpSiEWTGWVrMVlREg4sJ1Jwict6BSpflXuiFO5w3iVes1fHTyOSvtidYa/kIAW3CD3PPrXCW9qjUEsmxGOEhailgFvzkDtzQGz3YhoTkYRDsp0efwcAuQdLktCOczDnZbSxuQgtJW2Aee9CNahudHmAu0+yLNfqLnQ4FCrM5uCaDdorBJ6AZ+lH54n5WS7yu8MTIzGgkdcyFQmeLxRFXaBkdqFS5AlVWnvWQCKCcvBFntraC0pvDdaDhN2yGQ7vKruAXMwFkVLOpyigpefZIXgcSNEdvbqPovCnrS5DOLhnepUcw8IbXC3C4WqEwSpYP4yuxA4k2tXt25Otzm5qBrr8MvVYO3juezaFhJ3VwJcp/zlNtJTy+dKiIzyoXVbYqBXNjxr5rDaSV3ahABMz20kkZSqLBouMzBAkZKNTBSNcLVqGXcXDPM9+56h9rEp/CthwF+5kxEHK7Xyy7ThQOh/qk8WuVv/EyFJ9Ded0a0hjb1zQhSyBYBnvi86S8sOLPfztidwWpu0dIEBU0cDCMUw/gy+lyWsbv7oDtee5TXnr7LrMTLxcH0C0FRRhtRc4Del7hTt4aJz01HRdIV60pKh4aHhKczERz7A1yTlzxapSy3uW0KVRvvGOcoqQm+8krDUz+9Ma8Q02dgtfnQouBdU5IZs54E3T/LqONNj0yPbsd/OHfznRXAjVRHP56LavC5A04XGtOh1ZZ1BgVaq0/C7EevtxPqCcWL9GzsQnMWQkJxH3XlIZdHqnb4gyK+NmyPmNFNETNd9iazsCEg+O7X1FyP0IPnH2THEzNgb2ubG1v9QlZd9ef7L3lq6IvW3IPIEn1jjlM+ze8Ya6EaJumpXnhGS9Nc4779MOXtsuNZvHTJPRTa27/3EqP6ebSYaP0Xdg8Hyw9Yl4rIuzjDyqj/2nS5FwNeCuvFiGJroerCxvY/3ivb8jVq7bQkPszB/+whJyIbsLytMjKbsoEnMbDWXF3aaAzHiSCKazjkUMGtr04/34mFTc6pbgu9TUj9k2eN0BfsYlqKC4JjeGT/qyKMFJcp6DQZAUKcs46WiIyj5CSUCNaJPFhtOd5H7/B1SQ9I4aESRE4G3jskGkQ/Dpz2wr96e3Zgbu7wp25eBgcrJ2IqH/RmLCGgqWJiV8Ebwrd50rKxHielHrNSDbyE4c3LPIXYdvqA7D9Frm3xfhQdh556sV5CMOQByemwsffMikEzLxo+BV2lGzcislKBdDe4MuDXEVX5ovAmKE0lq2AGLycqYcEJMYK4DTLYd+zCtWSG4B6kMYYPop0BptA==';
  const _INTEGRITY_HASH = 'fd33d11c8422d94833b31ff6900c9e48485db93df0f369cfbab30c58d681daaa';
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
