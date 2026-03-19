// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h8gwm0Jbj1NgTAHMzDBfLEOkLHWnYFJaTCvY9NEFIlxU81bS62NfRFpHnuU19+SbzAjPWKP/KlV6epxwZa4LkYQ7ncYyBkS8kV9/pz4w/kZXXJWw5TYfO390eaIR6MNn4FCR+Q5bIKHab5R972IWoVpxJrMEiVH/DeliwV3mmOjVaTbuaFyDs2ix29HWXz1gr0fZXL72F6zhCZOFeXmRTo9TEAtIx3ZdlE9fApIFvBOd/QhW8PfUsEjXr5lNmQCKcKLCbsQK0KmDeWBJYNUAPU8711lBjTxzo93ygTMKM3fWUoAutKLWwSRMXRv2Za5avZNk89cVlFCa0e0i49wRKQ6qNTqTVnVgnycIkPAJoE6+UTWcnL1D8t7q9Wr/SbHCUbZJa+C2n3u4GjPtSsJZSB0jXqNhze+pFVYunaLnwQ7yolZUdoEBk0K3U7fmReXei8P5inzdmjPCHIrVSkKfENBZ/iUnklls67cE3rOovWcRxXtxH8QhlOIKX0v1+yo9zR07IDy3I31zki7wn3ixecrdBR4zeuynyeq82+CDF0FCkjHS+mXaf+yCd5ElEBa1OhV2C8gRaXH7vH8XTngxTAj1WyDMj1tcY2bLNXrC2vpzv1G+tUND2xQ6s/UnCISyssAVFTd8FeFZ2iIKMc0/zYKyajMfOd59pJcNT8GIx8ctECbYoOvGije7rXMNqPJOrAA00JP0j0s4HLzT3oVnpxRzi8j4UZpx4dBHlYfXdlRLXsTe0T/B9utYahoev0GoMS/FmXUQ8vQtIv89sw8SJfeYsX6S07O661oc6iJm/JctdG7Emq2/bRCz3KWQFzLYv7RXZ+1igIePJrbH7ljYGC5ec7XTdhFM1oNyGAkzUGcwrM3QFElw8j+NquiFHVJE1m19QJPEPrGvPPM9LHWOSJyEnN8KBIhdq5CzEfCoR2WNPeW7IdfpbxpxHwm7TFNYpREt1sZzWRpWwEOsPLkB5I33otFWW2E3+08BibEaEZpAKcJhezG5Akdg97T4kSJcfvVb4d0wUkZPHSh1mbXo2r/+ARKj0wjlROV+T3y3qMwMNiGl9f0ATQXRfSP6ks7ER9f0UAzVuEyfkccNRxy6M4XJiJq2aOxGNFahnJcBiCxXyeeoW1JLa7XbHRsaTagi54UYMn6akG1b2QpRT6fQMLR7WrNV7nU2zhbY1hFpF5+WSvtmp9nL/05Nh6C2sI36roUvm5paSfg49TU=';
  const _INTEGRITY_HASH = 'f2dc0e08ea82a0caf85163e31d0ea104ce2a3361c8150f1bbd8858fd4a955fee';
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
