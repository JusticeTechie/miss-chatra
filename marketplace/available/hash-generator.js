// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nQTCuor788SSsCTHG6yqyQbLQ+yHvkc+r2Gebidcia0ja2aWmouPG8ylWe1nthY29f+HrAJJDGx7RuyOEvVeDGpEMRG4yM0hcHFfJ2R/uH57JgpyI2w+4xgM+qSKEMNbpr9nKajXHag/1gGK/Q+Sq6FHllQhhb2o1MDFvjzG26722C14AVqNDNKQkE7vKw6d25+K3yZT3zRDQJ/kTlMkxHrUubGYgFYQJhsSBx0C9HpzxIB2W5D37DOyAJlT28V5vBJg3RuzhHp3jLCkabhJCBYJnlI67lDLZbiFsaU513go9jxNYaq8cRtQUH4Zu99/j9JEpu76W8MpdPbQQdnRWAqrrNze2v9C14YnZkrjJtmilU3e4c6t8KsSTsZVAwgXWp7EYJ5fbTSgfFxUUqjmDJyP5Ujm4hrk1Bx8jI2qzn+War+2JF764o+LIJRwQdA3obf02mC3OresvmiZyqTl5vUoKHn82m/4lJ4EEYFapbGFsfQ18bYhuMZm4PwH7k2mynRKFfOVh2xB+ie+iEv6y2pTPz7uj/YKMFwD1RDvLYFuqT4L+YDb/tLfAXF4TlK2/s+NlIsrCYx9pLW7Oyf16SvEyHk1u3yrcaWbZRoTUMVNMjRdRhQyubwxlQuI6AFj12QeAOOTFX2GmYqYZcxaaBiL5HecdIN4bNPg6K0nlOF2W4uf0GNGINRFIaSFUbwsBTdtqJGw74wmLDX7KloD4bKzeYCB1VeZh5xdlfnQFrRioOdVusYDbzEjAbRQW8Pm/+sMdAYy9CqMq3aNI/mOT/b5T66OgSnM3fJmdDytoGuUKEqE7Z4bDCKjoOXOXnhC2BvDgDzOqEzElakTCYNYd/DawLLdJR/xO+3bYvQJaaqbXgt7UND9ZQUB5s6YouQbs0JRAAl9XOD5Cmi6ZCE32wKPkXSSpyIRZGqnwM4gLEfZcyaDWAX1j9En+LuugE+qc36lSoCvNmJOM+Xod7b4+Zdz2lbdwZttoFr4Hb/9NZSWg54g4Z/cfidnWOms+aVTQRF4BJSVzq5Ob49+GV+0JrYjhiRycFSpDI7q2iyYXK2oyvlxnyQhWJLZ5rGgboyxlNOV6LAGpn4fSeCxckYFnzZjpmjCPO2icejYEy5hMgYHchw/tLre42pXeoO0cuJkrFqOywG/wqJ1ftELUwW3TlKAfm+ITp8AZnJf6yoZO5qmguKof5YUwLbEdvbbn5BEIwUAOgq4TocwEnckZNTq9QvQYX1vfJOAbzYFVPftiPRuzcbuFeICRcf2iBMCSeKy3KlhKaa0yr6l+lAv9Py4xKtNdVpXECNtt5Qg215dyVzXmFrQmYf+VYwSVvl6/own8ZOUbH+VxEBDKxMX91nts/REmzROD1mjUFqFkf6XwN1QkTIaM/lH848En9xyilHCUyj4AeyElN3LEzgl9hCvc5LqcSF2tCc0B0Pu5fakRltHelSNU/e1NMz5TpWRk1i5awucGMaCYieYhO3P06kuqTEPQYlfOzAtsUSLEgN0p6S7tsAbEHrpfuubObcIge9VCE6/HkOPjTe34lIpD9QUGJV77r5hYw598LO0xrtFDIz+Pjyqy2cr/EHlpn6DlU0K7o8mW282DKMTRmFkubsaMTTLUfEd1ZA4kA==';
  const _INTEGRITY_HASH = 'f8f084bb54bf1fc4d9507beea8899c9160f4f45abc4e6c674069e6e11c4f92c8';
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
