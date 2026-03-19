// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J7J9mAqqPX7jISZLMYxIIq6kc4o3d/H0Gsq5zDUZUBIPGX9UtRMLhUcetlHvJ4BkoGeu3xqcidRflQ76GT/SjEdVk0oAGXejZ7MVsWNoPBY/W1cqQ07wPaPYFWMvSQnElIyolzq2KdZnSBUwZPzB2muN5S0Hwe+i/KH7sPaWV85g0df5XRz3IP3+lsAZ83IfspCwxQOEZWNrP+byQUS3l1cXpCiedLcgSJVkcSUePyMsyPEg2TqLZo3qRsLOACObkakOB/6s5x8ac1xKrd4xscC1d2qArcot3WV06mk1bNRB1GOFZK0wM1bW/gXlfD4VDsSR3ffh6/UtTJrIYXhAzj8+mdd5G7QWobFslQSzwshuM3EwZUunsYxk3JsPtpSWgkt9PDff9p/z7KvVILVUFKZjsl0jPGKLkXXJ1Kt9qgNChcgXBiEgS28Ef34hew8Z7Szyk55a4GandnLMlshrLcYI2QbEKOxuIpj9cPhrB1PcX6UxtBLLPSYpaUIF+GDPsHG2rUz9T3KnQhzJ3fQ9epa3nqkBdZKFEKn2CY9i4XGCDb+uIkaNrUjTsn+xcX1aho2z9ZGFXnjhek4u9nFlAdR+bROXzTE8/rhTXaMFx28i3mRa4128sfLGebUtF2warUeilQXvjJjaMeqvsJkXU6mWfds6g4ILMCtZREyELrJPUuGmjrPjjd/tQRKW13pwMjLKn4xkht4wreR/PcHD+ci1cLl9cUugfLT4WELZHbJ+zrEKmLskBJL0uLrqDO0ET18mcTfESX18XZhjxbQpdd6NcSgz3hyBdghYjDxww2MqCV6oaEKKn+xW5CNzZ9rdiyZFKm/s+tPWQhY1oSElyhaZ+KJZ9gIqmqGYs+krpr/NitfIkvR/XB6Au37jmYrxRCr7fqJgCENOBLP67L6afZx57jRNEdMrLAYPvPBAYeZYTrvEg3Ii1apRtzAt9Ul6YF0JO/OvkKJ6gUyLpMIRzV8yCZAF7AKZG0KC8GWxWM/zEZ+XrY4USOyizzej+U2vQ4PgswaNhTsS0gG6Ghggz1LTOesloxYIzqYUkvfU+Q1KWj6Q7jyYwPwGBEj6hAOGkmPvR7WFXUo6jQcayhY2El6mcJUt+kLRVkHMSSg5PUZWVTt0XAPy1xlqNoHAstH0Dma9FyIRniBGhLAeqiUaFhCZjTsxaCYhl1dKqfdK0olhPyMLI6UpntqqVnA+RIWZk8l/hhAPGHWbUHNf8ghl8Q4dD95fSpRmUxpIIAVJNmnqrFbDH1ovBL70F+uFqV3OJ9svygUJxsaGHgjUhewHZ1y3KEwLdw5wXbH78YHDTVG1sNBupxWta7cXf0AYna3LoJIuRvHLb0Kw4leanK5e2lCtRK2vUyrciEg1M/9xXHFyA3XL/PHNJA==';
  const _INTEGRITY_HASH = '0da99fff424ed227bd0b68f11a511b291a4f496e00a21e11c75745e6a403548d';
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
