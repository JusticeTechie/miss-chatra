// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd26VRnUFm6kZx2rRWODxToyuRENWgrcApHp0Y1mIJZZmCJGeS0bEuyDboC6TqAb+C/ckMCoF0jtcpFDPjH9WBTmrXIylEXoUYnpZ2R6FMHrq3Ksp5GgnItNY5a1MDCTvwyymBa8erOOiJl9aXUqGXp3kRhZ6VgXNNMSyS+oEb/sRPrEQonLNfb5vAz0ZIoTF6CNes74B72y61A/vLzDxBOwKPlPdZavS4MJcbjIQ+x4MjgmsLt9yHD6UV4c3axWtimc5jX0o8Hz+z90NW1mhhUZgzpQ+Ymj7jATEnlAMG4JcyN7iEH8//dvdRVuKnM8Art3bAiEmYB4J1fCMrHQy3NSQ5PFw+c3ZaRBfiPujCgL3AC0EQv3w0YxyjnY3L8FL0ymIvI+GPI/Na1L4jpE3UoKUT34HIy+2btLDq+NWo0aApG4gqVTFmA5+iFvJOTacufHang+JHi6eTs9dr9POUGUE81sYHO1qcCYagpk8V+VC5N86Jwm8TGpAZx6gQtzecm/Q8eqj8l2xUadZpHqmMGvDjW5hQNLzA0AuiJjrlTFLAJLhUZdgEw+6T8GFC9va5Ej33o7vY5r9EsFt6OqtSrDacB4ao4FRYhlqU5jyenkBm9ffJVqZTqHbLddRFPf24o8alC4XiaCkyeN4qgkjmdrq8/BgfavlTlMo8820Zl+AUHGACzN6znSUySI3jbRO1szO3XTU7WOAReHzVbUPad1UXQBrnIsChiQHGmRZmLUfJhT+laudhNC4Xicpk0iQaq15csBpmft+smHs+1xVNCcZTVYpqywc+lcb106RrptGOt6hrN6KlbZ9heZpNkkdwSfbpNlnLXY80oDXVRTR/kzMV3qflhC8MP6WBA7Gn91WXVm1ThmntsFcwhNe3tW/YZPnHUKKzlDccmSgr/+PkM/dfmx2KP7SdOg8MdNKQTWs97niUoThknfm10KNoONx1Gjy9Zo6k5asevfH1ibWlmxICTge8gnhy4EO7pNiQt7HZzZB8roC+R/xtFmiUb2sEw==';
  const _INTEGRITY_HASH = '99d53e745d071848bb6f49750f80f44a4e78df482973d4801871f3527ad59045';
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
