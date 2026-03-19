// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GdCidKNkRcZcwuZYGREtsvDSAatO0kSs6AGjvOtolTa2nwKZYZiTiSUIbyRgS8SoC+KDqkzad9HQQEpT6zHw4Plhq8eAyiUChooZuiJMpJ0Zjerdj7+gCqUYMfNgAv4PMosXwxYjstTkx1SFbxqgEjGwh5ZSskqJeb2EbJLdihbEV9dlO1UDyrWnFvu0Pk/Pqo2mAnuMUY+ywYJjj+vWpbk00GCU4zc3qHpdPo620pcuRwxTXsyLZF+EIDf6tTGuBy4aRXFDFwXwqa8Ediq73nKkprQdGXMJsx6KiNShPboiJBzWbyCOo7m/rzwkAr+o9Uea5pmvEzO8BZ+NSxm+GgFZOAwj3Juvk34T2yDUoMZ4Ct6q3l074yDk1M8ERvdj+VuEyyBIKq72noLnqqDURGg5akJ0Zy3Bswfz5nz8lYlktXK/dz39Yjudl4AxUF3w5WUXCBIXTirEuCYFpmhwx/epLqPkRoEbFNigYt3/pwRhhNC8thO02fR3nXQulaiTy08QKum9wnKzTBHkZ9SKc1G/duDARfe9Y6SoCCx9t60sjEQurrv9v0tQGnFXdP+qJGdfnGZ0a0UJD1QjWrPFgwOmKd47p60k5VeTpR6qlqddGsdB0RMnZ5Sb3KRCwng1/9uKIiCI5cncN2vKmQ+DcU0d62sVxXzfYzQipr/r2ClbZzXY6TPNe52trJcuUYkdp50FzzlDZyLlqW/Y6EkbFgxKufmx0IqkExEbZCvU4kb5Dm+RuU1Lujztm9BUjjMhrZjctG3ZmyNKOZoHp2nfVKikINT8hUFFwcNUP6YqXHhB2ARxvKKv9x9d4BH7kHov2BCzUGLJt7s+PsESTA/ZyyF5fONm7RTSWbU4p4UwQ2jq0YCdnXjzncJcz4QxyUyk6FXoX5n8nxykhRnHSs7M28Kl5JYNp26qwFHwy9NFYvDsHHE/gxBt92iOL99CFN5SWIyLd7xmEG3amyhrqQ9dBKBFG3cZUXagOBDO1V+No9Wp6IrGf8FxAIyWXRCm5UKaNQ==';
  const _INTEGRITY_HASH = '4e689c2a2ec3ca2cdcc5ee507ca28d72e408226fad746b54cf3ae47118c3ec2c';
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
