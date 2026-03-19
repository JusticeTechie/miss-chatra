// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XpyitwXTOiKrf9TffGZSM4b4Ch/a/O6up5VoaQ7E+4p2V4d7WK5u3h2/FYzcyqlqcFTDHcDaAz7MLHYaUzifbfgeUHHWRzgHNSiXj13R9IVjzodFOZfh60SkQLCdPWYMJ7q7Aq8wypycU6PWI1gjnlH2FoPHYWZLNMbE0PxpDP21JGaQsFbHXaEqMMvQIXT8ypo5YgLhGoCu2PVdXjNkeU4j/nWgA57BYYpLAxuZJDkov0tfZu2KqWpmq2HN2DOHb4lLxxlOfWVBxybffAxpcVqrzR14uK39jKKy1Hr8iZQjS/og7KJOcpKk7Q7at3UMP+yxcWV/brrGgfAsa2Sxh3/qsXTrhbQacYcXoQy8kRXPf3QUlUqTu6GvKrZTKwA0vZNHFBJGNBufKQWSSprqHOjSIIImLnT8gmyjFaD4wqwF9gghsVysa4Ehknqs5DUwhBIGOFOhfijEB83ZFNFhTXN36uG/eHG5xlASQOmqJh/VmnCcX/FLMXH6nszObzRQme0Qeg++oZcI1Nus9dNqroN19J2rdZ4QOGFNIgWJGLADLcmTt5G/T5AnZQicAvR50ExmrofVMWGQuAw8lkX1AA0Emu9fZ5eoR293ApptFr9PrRz97myujn6IViRKajpMStGALeKtgs7MhC+gYaYURUzqdUz0deG8fV3O78HtMEmjohRTN2I6lgsp2i7orC1wVYnUyM4Uuaz4zRHTDd0TWVSjgw6REQLPGCXjOsjxA8Ad+fcIpDLh8tJPkj09rbF/Nrvyc/o9MYziLnNmcMSg9gEJvBJUQFLxWVVECDFx4kIV8StRpgtSRsFt3HFdvwq74VG7fZTjG8+cHLKDIZDjSt6buf28kl0IxbS4inay1jiALjX0WMGXtaW4iAKpvb+oGsI5UkJK5b2P3YbN0/M5iQ1UtO1cDwm3EDzYgZwlwZ4lKxNpFGImb7ZMoTFnBPMaJEIZxTMRFyZBuGapnciGCqydr2TC5Sasuj5SbfMZQgXAjfDpKRowUoYKQELnHCSOg7Eep+NH/hVpXOqPyt0t7+MRKgQMmc1tz660j76SW4FtNJF+rMXqkXSglz/CJHEnnPHEkAHeeLkEBM/KVUzH2LCGGfRsENxMx0oj/9jHtKQvAsdyeycJ0X0hM/ZndlkSzSy/CmcAD4sH2WQT1EYH8/XE6cn43vgWWzYcHJImhZ9/RlxMLY5dVB0=';
  const _INTEGRITY_HASH = 'f6916d16306ac0346299f2e7b447d5e13d14e594624967ed2f3bad03f93a4c6e';
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
