// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M5dE0vXwl2w7zU1gszdgGYwetFmDDVI5hjGVi/5Yz/Rw3GFYvcizGQQVMm87kznqBhJQj0U/sxbOxyn83YHYT5Nv87LPTouQjmVGCV1M83/d7JKgq1FUr6w2B68DJ6tVNWKn3B09GZ+o8AwY6J/3Zd2jctmcUoUTCpjeffVZHZhJpa+Figwtczu55JW0RWa7o8V+ZRJee0CSAHDm3EVsWTuTymC+aiNFynVIvSOfg736MSM3uwXdP+jyR7ue2SbxyS+RqMqU9fZUq+h0HNO7PnJUQjjyd1mkhjBnb2cRP28JH5WPrIfc2EEOK9FHaBgkl93sjFP9ZcDnQcvWYr/QFjr53qQ7hJVfChO2LWPVSeqnrJo/lAwR6UkSTrc8urPDW7fCVW44DwPdXpiUJ9DijIs+AXTXr3J8UOxdjhangNqGMDW0V0FIUou6XwlfSwIZsWGn0VvA6o1i4jBJAV6UPuXHQPAG344WcYHHtsK0jTGS5fB/jDyzBSuueYPlMLP/OCbGhMd6LjZIerNHhowmmWgHVeYU78IiDSmezXkTtGP68s6kck3lNP3fCYI5qVgo//9iddEzxXo1U0ab4XWt5aSyOw88po5ye9aa7Zgtp6OCeaFzCwjF+Tecn6j1giyWfM1Be1hSOWW9N1Pt8z4vJmjFrPculaQeNaZFBqpF4/KnJ0q34E1uykaHIf+V1JlraWG7XUc19pNAAn+Rfbs2buc6vKfAb6OA6FNnuCRYnI4UA21B0VthCJhhxWm0znadCSd/4djJEz9kUqYacMNwtSA61xY56tlgNe/ZsQbrPIO4L+8P5OHtIGfJ6dZDWNmTva8Cj/GqFxV5mjrDABYRxKJNLqa5bgoPO09wzseoCFEjKp8ZHA2TEDc9orbq6tqyYoyo72w7dryUsF7WKcY4EdnlAqdHVnrYWsdB/T7zYZ1VWZbjsAhRx7ymiX+sPVsZ0crEdTXs4P3T/yoHHkvdWH7uxXFEeDKnpyPHcP8MWU/5S4w9zYMFewbO6esX1gCW1y3I4CVurFBwoQ1Yf5E8faNDOJ0bXtQZkvLAaysUhHlKqp0ep13drM5fFl9uhfGSHfzaaa3QsS8X6AADAWUOPUNzLLDp6cCBowjV9ex5DgsA23HZr2nPMflY5/KSj7TSxZ1KHb5pGcCB9WtD0Klfh0l06ujdeIeHonasLI2yB74xTWmIOrxoLiKZ6aebQQfciJsWDtGwMB/5xwj4fYcjh4RgjIkc1UpbZdL+kRifNnWv3EZvl3hTJJOP1R9ielIF5jbI904QPvFcYS/A2yPAYMFvnHmdYyTwmNoXDyXDdNgr8ujZPFJjc9u/Bb6SN4COKR51MubKogK1grIH1TzS3tmwLCuKrMciSZGeVZJJmIKuIJQ=';
  const _INTEGRITY_HASH = 'ad6ba79758ec90f66c701b5afcd16c912635936ed6bd932dfb372fd07184c256';
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
