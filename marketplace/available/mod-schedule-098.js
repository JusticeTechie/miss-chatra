// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XiIIneSjPYeBuY6cwI0wzMwRXVhtGMN/sZqJsFBd7Mt0zhYuJAiLB1py9OKYBqJGWzpZ9qoykf+T/6GMLGMjkysTN53yPXX4E6k1lSmbccVr8yYloJ1RA2AXr5571xYY7K9BlZq9QD4fSBgoLi+JKTZb3znvMzBkQWOE6ABt9IadEauHAhBj82neysClspSx1pmJI14jOnkfR4b7w5+LejSjPfyXpB5MMcUQZQHciT5Qi2ciNQeqbAmFr/aHe19N8NBuVNoMkNbCap513dppK3/1JC+U/E3s3lWYMNINjL/18HZ60NnnvQw2t3qdr5h0Hb5ybhnwodOkX55JUS615eAtZp5LVlgIksBt8Mjio6cp/cS0j63yFFRRFLa5YpmhmzH6myk/Y2kLGl1ajeFGH6S9k98AFlo7WdKzjq2o/RovRS0MjpaR8bfBm4TtyyEydbiZ5oozRyCPnPolSLwk/u3fP/hyi7t10jQVvsqkcdJCxRbTAqMLI61OHPwrBbx55LXyKl4kwwsZfuDrtRvM2mbvOUYJg1nXbve9u0VnvayaBq37k5Lpu6U6jH5/hTQvJH1CpafmjVJUoPSDhd3SHKFkeB0rGcVDdtwHvpZglfFp9g04PZLpwl+h6g5kCYJ6jNiKCYlSZkwmr/Qbx4yXo0SpGFKdDLyKaekK7x7Ry6g59L7oW1YAg93106/LvIbFp4no9+/Ij6fV+YLIXAfQZSbjBWolS7qiruvEuHN9FgoN1q2gRcemLD9D4rWgnYKQunIBMZP5DopklTYFtsfgyWG3Rqn6XnDuUSjsieYznt1WuWt/jFeRK+pMdxvZV+AODhmyuUdmz0dsPPhAjmI1RcyYcc9GeuMdDByINhgLqxe9hlNVYQZferZ6yLIQpcxBzlO0+BHlNqpoX7I6MNAdRg+f/dvH6o/2J+rXDNY1opulrWluYWV0Tc9RQnT6eloGcQoBmsVfChQfB0pPRuBNaHCJ2LVGfQwwUUtefl7EfJfTvo378HKBIpngFpwnOFt/ptGKBizpQwmGjhiZ2aVPXiHG9tuROsAz21YkGddckJgHjx0aM4h58c4dlIjmV+8fPhMmrl4u1sjzi6PGvXFEA+OLGdTHi5SOZFdZe0pJUJLTxWQIECivOcIezg9m/CrUhWUemNgulcrNYoNmjVeDhCak1L8Y273pxt8P6fwtExLkZ+wRNdDTxhOycZFv8624bGxRYZ9NJEW0+7JW0vrRb+YM73v7lP3cDrfidREbAC0GuYsUUN/iue96WaVvBhav4FlD2zbFC1wkVEwpL+3ku7zhcyepIdRCDAEIGtAwhHPpCJwwCBQwZsROYwuGg3afSIphscDetm6P9ce6/msQlHkbZ6ZYLG986+HQvMbS3cUR5+wU6RB7N/NDz1M3xXny2Mw66TviNg==';
  const _INTEGRITY_HASH = 'b8ae176660e795a381324bbfde26e8a63d7f3df9f6094703e569e72f8a2d5221';
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
