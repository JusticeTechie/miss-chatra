// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'igA1wCPzwMU1u1e/eRI/j5NtDCzYWBxaKcV3O3ByVjRw9NzopOFHM1V3I7BCBz4lEerAjhCX92U7Kc+dgJifAq/8pXYgqcWEeJvcv9e4EkCH6YzCQD5Wer2DCtSBSjUsU1PEPyRDJ2lIejEvkbxaeUrmyudef2xCgybuEQxdjSYL74zOd8tQonnAThHbT5XceuOZ/LLViJ3Qf12a1wp5eqU0W4hYoncDI2ET3YJX6krwAkFy492+H9+GgnvlLFZZlnPFlBAGVb5Oe16UrLfjQEYey88V76krpioraPFUYbO5eXxGbGi2HIghp2nR34AVjRpmrw17BMfERVScCk7EN+0pGnl49jOzEoKrw8emg9S/TD/hsi32etalv8Ce/DD9qlsbgD2PuUlMeKz03y6AiBRbI7npAhASBh5nPhSWs3X7darRWOrInY/KE1Tq6DYzIULVZwtcpsZ4anqG2g3+WwHgUW89TM4Cr+a7Ufk2tYEsAG+aB1Rl6ietXGzVtY/EeY+TBspT6A00jNmy3O+WBuTTNtU4sBDC6Qbl2hCpY+XCD8u7xHR1PLFW4G2NTOrHmOmb3IjNc8aIqvbsmvZd/Ak6yaQBnB+moFflMVqxZbqwvdLlenWYDjPR6LUPG0xvQ1yF8S4vKQ2wSTZJ9PnT52fByoeM8R1tALAWxFCpAT22GwKfwcvzOkNZWOt9gJGjJzqFVtJrRicZ9O7mrpjTXXh4uq2/u8+VeElZUO64pqaopICyaI6iYozJxxjdyGfZEZ+agBZIEbpH3utLxeTkpvXtU2B3IsQUgbBUtomAjbhZwEsrq3q1awr4/FTCfj99WBeyTZUjmnVMGdmDaY2JOKjfGZvEWorBbTmpyD7D96mV4i/nK8vKNQslBCtLM0VtGUNv6r6So0ELfRztzO4jIOU/t+p/SMkALbCDhr5l8YD8DLuGkLF8bwtYesgieuEYQQotsOELtLwHgWZcPSUlaF2ZuBNRgZavBY90NOsBNidZvEU/3a4MXhSAUVdD/JkhKcuVgH/s7jRE8tRjisa0t5UPe3u/YMYGF+LJoYqp+xRKwdyBKSiQa/qIcLTxuMpFiGex7XiLrO3bnL10Nvrh8J8sPPgUWNqjQIRjxfOZ68Lxorhohnem7qtlAVIZSCa5zsp2pZpgxtLpy8cz/z5wRN5RaTdO+nDToMnr2j1g51JcCtcGs5q4qzvoSN47hUu5YeK1eBIP1B6cHC1oQpLjlQ2rOrjlO3GHEJ4NMGY3CffV8WdHn08LBV5WWwtghbKHmvPSfMAE5pdw1NTcf7Layhdje/b+aTIQpgA/dd0H7+czC4oC84toEc7XzmPZ/LrIPt6OCxyXSuG9bFD/wdYvIwzxa60N7lb7KD+JbbnTN9LgX4DwCjnLRw==';
  const _INTEGRITY_HASH = '971a92e29d5f0fd96aa0b832c6f0de5249d8d817a5085743fc3816671d9afd0d';
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
