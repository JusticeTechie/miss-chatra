// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BqhR1f829X0JsEzeh2m69CwlhKjYb1C42uGTqiVEnpvvBKYZL66gk33zoK1pNhz1ODDpVcfItiVbMC5LVuw4sQ74cSwGDUin/+cnSACBAg8iIKUQAtFGm6WYVlYZZCfzOX9eANrNT76UhOr9xYion5Q0YBF3iyyVYGsW0pPgLPgKeGuH6bCNWvOVrCIHAyVo/nk700Qw2nSkd1aW84ydoP8bNW2fHmv0VQP559v9JHWOtiqhkK3CM2pxWZIUlLu1sLu3U6ToGxOk/4QuqEwsl8jSbrW48BEp+CD4tI/FgYSff6dR5MqQZ8WsUO+VY0LOas6bcsTjxOel37V8ksK3SnmY6/tASY7wJmjRMPCo3kEvjxuCeZ2mIZ5/e21U3z3+NUjJjk3LOYj+TGrzAIXBK7ofwnJmcttSD+GLorwCFzGFdDANpQ4amURm8mzTKjZFfuYoPkjWUx3N407Pa+634njcMQ0TelsgPO/KM90T0Fl1I+NTgTEUOBK/uDcmZm98nCjhPpuunJusHl70MnNW3nx+9/k3iFZqCgHMiWviqwmwfY1eKCNy1Lu5CuKOY44y7xi2T/8tkbFlJuaZ+T/0NC/bOuqNiswHuQOelA0sSITb9fW0R85FMmThqhrZSYu5TxuHogw2ITLNanvxZarPi3CUWxlWVJHMp1LbgqdgOlejJ4Kk0HXhmc1KvJTp8SwfeWiIaWyXQLtANplDLuFKltqKexsnuWrjK3WbxMU7OBrv6ABbyiSNCWp4FjI0M9pYNmMAemOjOEVTX4PJViATEmVTz4yh5uakGxGjcpOSbG/MXE/WlI///beVD1EemWXx4M/Wnt3jTDV4Tm9xhArOC/3vyINdnIY+MQvLHaHPpMPj63ThY0prCfgAafRJEEN1rlI97BaFePehLnDu7NDhNVlSN9Bs1F7CZt/YX8XiwaeBK7tRQ7UqNvxXgMosXcyZ91c4V99RBl7IFL4TEunYLBPzWv/mHgdePhK/eM8/yC+K1EeNr4CoaEA2FYD31TaFlwywr6WELYY78l/3YiHS0mitgxISZi/dLxcSxXVBRr06BBH6ReeWDKR/zhbaplLwy044Z6zDp9MXOUydENA6JBsJ0TNZio2ltw6APjrZwSPcd1HgzAIRWwe4ciABIXlBgxS8RIYybbDI1srQgz70UiLl/MKNSo3bs3FHfnUwGVXqW/F/VtHqj4C40BAWhnX18gJ1Ew==';
  const _INTEGRITY_HASH = '07a71877ab3f9c4e46855e462bc1f2c520bedc8155b9ccfe20ace316b677f218';
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
