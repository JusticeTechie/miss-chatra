// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J6zG9q0DmESYDICtQTuyrcHform9u1HbNMLi/GTIg7eFvxCq9+mPJMPU8R+BXz+xKKCj21HxKXZcnC5QbAI6cUG+JaJ90PM6phfImt7fh/+3m2tgCJDdBgAgFzQd05ujr4s7lpe+T41CTTtzAQh0i+jRpMntLq2RRfPirr/DP7XxYUUxuamZDWnBc5uG0rgukQ9W/KWWrO8ryLpwrm2UnZeGB658UBNrbkm6711Lo3Od0heUkZf0N382s5wPjTpsKforiZPFC+6EEkfD0StpHSj6YdUkMBMWqpDXUZNaYSnaxWArB4Z3bnGEWBYH535KGO8d/4aFV+6IRcJOn0GQQY3cAfRNE0DRj6gGbdD8kDpKBY2JU9p7z/brnj41q/ZAEWf1uwVllfFhrscHd+k02YpY0zhBnKbEh9DdkMXj1oIk8iw8XdLAxz5mulUIVNJtkXWOQndLpL2PMRPKoc7Vo9UwjRHFMUw4RpsFK8SW9xz8Qw9KSEUBdCo+RcETP5IGhzhAfTbhBGxal0j5iUo30XL4bS73LwttM6NreZBNlA0gcN2r1xVp2N1+Zj5snhsxjSXI+LkewwKcv67cdgux4gcgsZ7J++dgmMEpKhLCAa5W+EhDRvn8zhoZxfrhAytA5epP8ebJm4KCtAeqamFBxY9yK3pe4knxO3BBBIMOlfA1riBk/mPnDueGoYQBW94iUSTZdvD4shIXoa2rvfVcj0zSu5ZZo9nrtZVCwzz3qUcDkU0=';
  const _INTEGRITY_HASH = 'ac47abb4cde1367d461517a3a0ccf9524ef8b8f503afa44c1539d35fa5243625';
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
