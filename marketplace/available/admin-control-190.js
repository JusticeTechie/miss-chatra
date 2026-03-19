// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i80ebUuytvO5kYpciVVpJ3IZcTZNSCaqTxcr5UReltldUQyulUXxCuxJOXY+u7CjB0+hntUPVcFpB9wsfJ9OBELtYnmUcCXjrbKeNRPBRy16WXbY31w1JV6lL/wUg3yAoBLxIU/As0uVjrmve8vT1M9wVIYB4GM/QT7W14FrKUGdX+U9sX5zK9ryPYzTZQg7LJNEtmuHLk5yVO9QtxUjdd7LR84r1HAaA7SZsO0dWAXAa1VbNXoxURmanI58bc3Fm3KH+3545TEQp52LbQXjYIKqfxrkZSFa7fuVrT0PImUVazvtLhhXbiicoFpQWLYs9YD6wDZPri1a3z7FBtPhx9yU/3PsUUzPhLmBdC7rIfbdri/nquP90NT6q1b5gb+PhuRUVrkXeZkIgnQSMp2wsy9LWg4ogwc/1PVYb5q1RRY3qAjHrCSo6cKvVmU2MOER9S1CUa9IkAMdzaZKPgKMbo9HTzwFaLF0jOXETQL5zYXWoxu2wz3Uk6Rt3986+YQs4JGkFu4W8oxIddcaup89lRQr9Zmam0nnJbXsTphoZnmOw/idXGHszVYddOQZIDnvcU+wcHfezF93LOcMI3KP5nOtYw0wK77YTe1HXcuVCo8vwSPOXWR0OQlKllaP41160vwv7miAP8Ehp62bvXhNurDbhr3JlmX+4jJmeCuaSrf13cjYxgHpeVZiBCyZapiM1axfFiIVJCM0rxG1U5GEgj50/oyczrZjy7IDZoauQUF4WtXjngW7m0OUHZ9jK7iobVdxbPPeNlVZzGBavrLDqByD6dn4IP18evwp/u7TbvJyMDSB3ZVWGCLspwIBUz8TYQC1ixv8sbmvaXc5R5WQI4F06xzFCoSMASFZGBngB3/BOx/MZNWG1ECE8jOTL36bsfW+CK1h7l5Xx4VBvvUlOc0+r90ae/CurE3oOoQh0tKOCSwkTXcB0tIuNzNrAOXzmy+y8Z+Tc4H6iGeDNN3CcAXBLhu3CAeDJGGreEf3S5eT47cbquK3bRf5uVouDyD3oM+jWEISc8Y=';
  const _INTEGRITY_HASH = 'a681f368a8245eb8127787add63c7c0a8ab83cd81aed1f880f5dfdd2d450017f';
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
