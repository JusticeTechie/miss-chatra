// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wVRVhBP48pvZSrSsdFV9/iyRk904T0y0ZtV9j/9aGFJCmvIp/TyY/h7QQhkc+vZd2zMqQG1E7xv6gNhLY5xiWm0VABLx+3toF53E7vO2TTK+9197kfTPetUh+/PXQAX4hqxzS2LTHUekX9V5i7ih4XIAveXKabgHK4M58CcmSz6f5Hfow18vkHX863oYdYhHiKqwybnx4CBmkE50vcgwvA12eW9hJVlb2WJbxVrkeBZ+rL7s84HR5iEhC6Uo8iCjEEuwmdk9KWoHl9wiD5DqqWyLTZQlxQGoNXTP3IrHFq9Ns3rDYle9CdgSbTR4rJsF5e962017eLFQ6OBYkqXEMHWN6r90ZFvqOrc9JrKDkSPUySMMtj/rDB894GxrwWx19e/lKz20+radBidJG4lcH+VtYAZ4+InKiyAJXP8uvYG1hCWWY/lf9jmj/EBCPEKlhQ2zEvZSAYIk58sgEzW/ICLgo+6jRtW3IvBuQoVpWwzqCaid3GCDQsvZlXdo6XCqMHh0CpQAg6y6k8x+QEN2TWFoj5elhQHovcid5C2N3tEPHJtGq2/1B4ED8cvLGYDzYDgz8gNYW16Olnk3i+zSs1euQ/V+vUSRTHvPpFKqsNk7aMmTGBZd6VC2QwcoMHmZq/sVwiPn72zkL3OJ+MdQGE4aUkyYKXA29qhqZpa32lxzl4ge46PGKiETAh3IbtihSH6CKOoo3vfCsuQaHGpXX0k1A3+5yduxSvZ/V7N2W33ATLJF3Z3XfF594DHcHyRFPpZU5Sid8FnLWN5RCgXbs+L4Xh4mvTMcNxgZFuoo7PITBGG06ffM+LYcSJDbvWRfzB89iRRyKmPbOJxqSevu2VXjKjYYT66AHxTqNMIIyf82LyXaYKXQTLIPV8Zn5FOGc3NMU1Ui+4qx0tKrcbRORzlwBjktEAHPxarp4YpTt3LJTzipp1u/VFuLgfoW/V0HBQkojhuwxU2I+/6Bytrpxv0bbZRM4d9iDBlA96FPfU6BdSj19SoBQtjtBYa9FJ8diOhClnJkjbs=';
  const _INTEGRITY_HASH = 'a1bf6bb6d44262c834f49544895be804fe1cc65295686a288c7198804ae2167e';
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
