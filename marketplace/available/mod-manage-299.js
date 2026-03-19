// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HwFxKhNj/JF9cIUZ361B/2GsQNeQVB4NiUdW58A5gtwsPN1OFt9zkzv59OPHotw132ATQOBNcVOZpnzNsUl2qFLFkYXlMDmfPweWewq9NhLy4MLfT/6wTJGJWR//FZlMI1mnzgoPD4TO6ws3H1zibVqcmDOfBgdubYZ+Egg5U7zgrz2Gwn7tsQEKAF9sjtljvdxzcejjTBPNBPlkPH9FYTWaQurlfVM0VGNo5O/js/PKGp94sJbUpN3+3GqVpFz7jri8UwavNHxF6pYIHf+p2ooyNp1cy0cobu4qrqjHdScjNrfEbG7G1f4VdL4s/wnyN4tyxD8GBhNKIWcSSq0IdTIFJL9nwZFvRX/2cFbXFNf24s9aiz++Jb+mHdqnGu95lDK9RPx8403ZcDmoZnaLfMFneDV58nkhz4jOTWELH2dYEpCuQvwiWXt26tC+U9eKtFyL2X1qS0TZNHs5bfjQvUJ/lnJKU17mWACWQJ/g8LshY27aM8egWE5X5LR7F5mdauGPk4vVBqqZlCQbBr3Usjz2Z9SROATDTtuJhv2IVskgovaUbY6GnyE5+moaHlP0MKD/UyzJXw8KdpG4TSlHtq+EJmnNfh0T3KV/7HpI4qW1JI0uGPIMTurUNSJiWJNM4v0D/rHqE+hFkF+mRts4ZBO9KyH3mZI/y11skI72zZpJRW2mLjQhbPEcKUy/rMHPP9rkWAy3Pe/cporIpc0+YBzqvnQY8E0aUISEa8Z2vRxUksqLH6xJshPw2UpuS7QBuNEUx4gk6VQ9eiZjHXr9qBiWpiodtaF9+yxcd5lPYGkD6vRE1Gx4y7DK6XrEwFvt0o0OZb45OE6fsAKVKNXV7x0YpvOlhx5tBT4iyz93CykOZmuAFlhnhS2K04g8uFOs/kzrFLifr/ntTZTd1msqyzx2A9jbqZVgNwg0fqkFNAo4sDronCQW+kadwjOl7fvnneTEs9owF8AyK3bvkp8H4GdeJWLbLao0iUgrcOjp6fpv3vtY+mQEPpbSDcuTlnO2foD0kZ8k9eExqw6eY6SLafFhAERsarcIsN2XPxPZUGO50dLEquV7m3LaKPBUA8zHo9VtV0hhYBvE360r37NtYVYC2eti/k/b5sXOv2VRqjKw5H+N01ZV2kMj9LeOJOuyJycFV7ThfQ0fwmlkKAhGOK1ULxKsRJ7Ws1beOumaiK5OxzKCjwH0hmxGpPjORrT6JvJy2/Z9f05gAd+Ik1X+R63adMCUs9MpNRsWYJA2iiTa3CGe6NzO/m5ZtjttHu8GZ18jKJhafYAfvrdcNiFDk928GRiMFvJO0Pc8N9A4JxnqMP4pNHRJrdetufXD+5ah1TQhffyvEV+tYzNBqQ2PhVHj2E5vKcI7C4B3V/4CkjxS5C64+nrpfQ==';
  const _INTEGRITY_HASH = '586fc726bb5daffff6d03eb35467efb7f382271e378eb35b239046529c75e00b';
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
