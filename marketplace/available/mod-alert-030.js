// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GPxOfvzB0iyKACIfY0RkhanWzqCBsZcD7xuW0s3voDnurbtoDmObxnyyBwfO12BEB9dPQxH9dnku6VORONmny8hep/JmNSxWOdhgXF08UxI4R+6uQJAAh12Ggfq9XO8I0dyTA6G6b9WMEFOpXz8D8Ke+ftgt8jV4A5v34EIDTVhZ1DagBWYwx9bKvHxZOSg1tikwnQsIz7DhBnxSGCmgufFuewb7YNVfCHv5daibZX0lXh0jwFqnq5Djc/RJYX/0r35dJYplIIbPsse/IHbubLQGfLNqj8uddaI7aKYmGrKWw0HoKHyACe7377zAuQ126dDKyE8A3OM1PN7hkT1Z0cORw/gRApmErAMXC3V4ehSOuYOFNoksebIWLLSnokr9wukyluGcbs1my9A10gMtkd8OnvwpuRKYZU4W8gVkI71r+0qIGZUrx9yjxUBtbdI9bjifTg9b20syVNS1ARv4cxtEY1PT9SSbIoxy4N3UGIewGy6gcdj73QhlnJ3durkqZ64+lmOiPUaFk5lcZTCETmF1hr6P+x3a3rGX4uJ39IpStjlgmYMqiOmvlW8m1LAL5nfj/1hMm6u7aULhyjaRV30l+XeUtKRR0lD9vyW8ibpCRixoIhd2aGFJvzmyvpvY2lhXF9lBlIm8jPjl5q0MjMzzTkIOOmlRWn+FXY4S3CVaI6HBghZuuOg/FYYCziAXRoEFptj+a8ChaklMX1ol4+aZ28Y9ts9XT7MB4FhyUL2cpHOdoA3JvgLb8pQShP3U5M375lzXOCuaKPCg4quHOGMzJS3waU/svKAL6LMyz5klAQ6BJqp+Bo3s+nMwhGcTi94tRsMHu1fGhYe5Cc3S2xN6WkFyGpVwzEvhfCFNeA9qI4UsKYy2X2gmry+SqFawRFK+YXQPt4iBXpKisBbEeydfiCjYU5JD7Rh992/qm0ON0t6pQ0tI6XnWwL6Ns2b3TVJa9+6m6WI1rCDNGQehzFSTCkjr7uXUTUbdI1U0Vpn3X3JCExv28j007VEBGItlGpn3rwWZmJIzSvBBK/ort4tP4bdnuVc52yQlTavJDGkvRWXqUsyN0uQeERE00mVmCWMBtXcQ5l/8WsRK2wZ+F5lABuKJRur39IhrzzfuOSL176we1/3wpmxRkgXcBV9WB9Hz+Vr2qhbK9CcT0rSFnwJy5bhG52GEZLRLuRFcPSXCwh9MXywmR25mLS/Iy7evkBk6Vo325DClNmfLPHf8JaSgszXExGr9kdjNcSlBghYdDQbOVSJS9xFiuM1UWIIc3TLhm/1+oIV8X3N3UuSIDOulpu4X6XsfwsZ056ANcKRx9MqnpFbfEVVPcS8PAj16rT8HgR7ymmDgaIM5qQcb8wOcd7lyxzXF8w==';
  const _INTEGRITY_HASH = '07973483c3c4d479b0aa1a1fba78d26a019986ba0af12006839286108dacf6b6';
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
