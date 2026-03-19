// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jLpDD8PeSz9CLh3/4udsTPtUinxiXhcel9vuHwfpwOV/tiWhprMnEOt4FkZt6TzzfUAGOFeGy0Y9AgfmeTrCeUBmuOR9JcqBGOCFphvS4aOVA8HS3v7lRztHINaHxo09YUqGEyfDyDMCOfkGvAQk9gu6IWdEBTRq3WsSTSTuBA7B+liVkzuZnG3BW0fuO2OI7nOKpxRXiNRDpvhYohS3EAquI+sgJEoEPE0rU1DfkmtOegp77n5ka1IjDAvFHMCfAFZFYX5JRmT59msRLLZvngfM7wtiPtryfA/xcF5XuYT0o7mgIQqg0LCwy3y8zgokXTxWPQTtXvfpQz8GTW1wzs0bCCEeeiJn2xSkyhxkTZAxhLRQupdtLjlkFcaKKriE6KE7QgkNTZP5zD2dFFWgpP0rEPKG0VgkoJdq4b3iFmplguvNeuY5o5V5Ujit4Ikl/OUSiD6DvuoZbjPcDWgpCvwELYp5emQKKwnR7wjby2Aro4tXdTUKcBnozZbmK+RUSTi8njw7oMf2RqhUz1b6hcekYduQe5EJ8SINpsYKfGq/c3WbUKo8nFTxqGzN7SH5igsdLnVjl3rG6HSljjwxR5IWOBXX8gtPrnKvRq0Wi6Q7xh7dXTay/JFSyvgVJzATIVTNmEH6xpnw203rQWZNxfP4UiyDvXVh1bkVtNGVnNSALjo4ALOJjp17gr12FfFfmzMoSxo6VJpg1FoR6jO0Vq4TcosO6x0ImEgV5v1PoC6KhifI59cWdoMil4vnDPlX8Zmq3+kxZMTNuxkupKw/ELqnQKqIzPNCCu96U14HZtceZqZw/Hq3UEw0TMcogILnQcy/NKalOcfYqZdEPidTQ6PDgbznB9EmgSxUrl0EvVl2JW9Hnag9vZhRwEUiiNdDMYAsPtG8RlsRDuMlRLvahg8z83prATD9RvqWm219TVYmltqs2xTsgMb8owzHFH0dWY1d7cofUDcClSJSdOXX4AQjBYDsfMZoOtHgPQ00nMSVEtTd1tBujYNmw4psRFTQDB9SW/84M/LGDShT8X4NqF1dJ/tgJRj30B76AcaZNkP85BeGQy/vmjROMeDf8Hj/vVOY3Hw91gtIJNt38ARjSejK8Rpn1Re1kPGHYVQaOELwluHpnf12cRxs20Uof9NsXejCPI+UGwP9jzjpFR63WQ7sXRCNL/5A6a6pNOmBMqie2lBDc4CPRxQhe3XU2J0McCRR';
  const _INTEGRITY_HASH = 'ad124433ea09f0d885592baeedf774d47bc6af2b626d7476fc3c660767419bf3';
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
