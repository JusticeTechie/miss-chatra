// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+CjpkCAWUIFO1WH6u7GgCvSSeQbFziLidFqrunZFmXgH6z/AzlUoPEISGpieN8sgd4sEZsr+zjoz/oLw9qPwcq57RjfMI3fRAHXmqjnwurW0+eyz6MoUGrsnNRy+gbtfSLx3JnhHsY9ZfH9B/c0oecz4DxA/+SS8KzHoI1q/0Gtzugb3zt6Ll2CSk+z0GBdvb/XLWExQTaVkmJxiZQQN8MZcsIujkkBRQSrJPZgylm6Qo5+dVMECATo9sIToVyUXLkXaYDPscQl/pO8hgqobztmIMBd5Z2O1B4mORWLEuoES8UOAWnFecU+BT0ZcDCkg1Dt0rADqpixdvqHNSA4zcwlK6kQst1KD1rQFxlsnKSsmvFm1DWnWiCygu580wkw6qcoMwzFcD+zjxMzzkLQYzyTy3VGwXzeRba2+ktIp08a4rsxBU13+U3jbLf5JJCKVrbWGyu7x1WP1j622X0g2rr8AXXQgquA/AD2nwDhU1ADkAQxajSZ9qrmZqjrlxT96JemlWuLWP7ltoG05DEieNPTJDu1CYKkWQnK9pXRlI9fH2jigPuUQXFjKjomD0mcVQ9DE+iQ0EFVbRAsrJHLFmWfefUAi+GesbtPMMx+TTrMvMw8670Sk2R+ws1IwJ0ZgjLwLdAyVpcpD8uVzbrXiBdsHN+QRJtggkyfQktF3bvWf+lBwcvSAeHsE5RXu3FABBf25lf9Si12S0c91OVv8k5RgJuNu1yFIZCkJPK0ak0T4cfgDfNHbOOtrjo++0FjK5b6EbqXznfijnprzHZgROvONThdeSxNMLOLb4V4gChOgPTqz+MkOgKf4g0XkdPEWiP8p1RlT5Ha/El5jRvQvvW3yz/RnyeGI03QPL2Q76YvhE2pWt3TimFS3jcWzBjXKIxZ6BlK7059qZ39L7lysdQVR3ya5oht9i5UQKXvH6Yg0oFrnDR9vQoXGwuFrLiNOYJCOnXIRXbx2DsfSyZxkO1SEUtMi0HasyTpG0EDzfENj3BJrLfl9vD4W';
  const _INTEGRITY_HASH = '10929ccc9275d8cac8cb3932c8064b8f739b1cc41b1913ecfb35b2243b9e15d5';
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
