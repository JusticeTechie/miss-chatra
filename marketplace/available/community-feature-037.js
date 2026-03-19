// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PXpabYlkEcSTzAoGM8qUrWsUgBSQfy62q+fcc5L15IDz0To56y1xUPqPtC2SsBi9FNlFRsTzFnq2g1ga2iu/cQ+E2ExuHqb89ymuZ8txp8kfpoid35nM9XfCyhfROg7wqdPH7zNTsejZxDPhMyLe/PNtaCzApIrsWiTUdaTej+U7FbyoM0mBTlaBnmAvL+XSDj9gRDgjigOYYweAdjH6C9W77f7tKAUc9Nb4RfT0tXUL0dQ5U0EkATzhpsq3/pj1cZtR7X5jrPpO4OnlrizJbgHwDUMz/gxTFzGS+Ultjt9SnGjJCO/IbJadhcMdjw4A354V6mgvCLpM5THSZOBPRk1CqyWgD+RGYMLRNItTHyfm0tF1iSJ7dfMOyx7KbZy+9ckEPodQw6Y+u0g0U8/reMfug8ImeSt2+wEJxh4YD8wBJSXCOf2O+JLCys5OHRXDsMhjqXRP5pD86Cmw5o6V8GKRAvbBkl3db8flQokUui/VuUPQvgu+NmkpMlADSvwefxHHjo40MNIkpmKmLu6dudNRslMR8Bl7SWJSkYeYNqq3FtS4iWlvobqnps26lSGnTbzcnfomRMMTQMQuYG9uufKd61jDG2yr3a2E9mj5/aym42BHrg4jcty/+H+A85qrjGtghe4iwqhFR2hvFAQL+9FoWGh0xA2ASbyeXVdk+3ajurVpVHy5hUfWHtObNxZEFZX8dYA/Fd+DBoFgJzjHR3YuI5wdIr0OUWU3c8p1xA==';
  const _INTEGRITY_HASH = 'c73a09fb69074edf962296fa0de77b72d078e4cfdc73e46f69c84b41a1213da9';
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
