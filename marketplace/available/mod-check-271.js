// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PX371I9SN84q+/XawPDdfJ3WLAv+e391xO93eCLTDbShAEi0KawKCi8c4uMHgAsge5cZtis3dRyVbZcvDn2ZJmCimrK6lSx80GYXxmuqAsZ3tMqbSvsBLSJSDgAzf/TCiX0bb0OiyFIYAWqbHUNRPVrwCHOoZCckXV70hfhMN2TRm6cwSMq2PGASgWE7uA04VN1kfPinlC2u7ZcFEDkNWHXo9FATgIeCC5vf2HJnbMIvV06g2a211+foTs5Qv8mY9w1wbh0B3cJrIJfZdslQvLONRwSTNZqzyeA0o6yktepwDxPGAoSYFAZF+AKovSfYWLW3NppMT5qJEasH/rUAjeTVcr2JuS5ZD3uB3/zEEhQAoEhQn0n/YtNSO5LCjyRkfcd9+I5QywO/tl0nxZbaGTNw3usT+7CukW8Btwt4Fm8IJiL1jAvpC/+8MgIunbMMh3nSFlzB1bjqIm2uBQ9pbD7L94f+maStzweWfdHyjPhkx0zMkTCr00RGRaiG0ZqkuYVdPyl1MYuItFA/KgM1K3Yj5gGlx85wDoYsTtXaeebKmGu0cOrBshjgoK+qqR436KTek7jUfNUzMEIMbaShHvFyAO6jfv4sZ3KEap92vrfH+w3Rq33J6eUqccTnR4/9wB+EZ7kJxlWh6wqdldxyEEH0OgWB1z4dwjlwqncYlmutWmbrsTQCKAjM+h52yMwOviQJ44I0ODqSj8WuXCD62ywDWgnCgUrd0XQNzJxDBys9p7OlmxYr1s4r3uataxjJwXR0MVsSxo321Rz1LBe+zgP5ys/I6Ox+Gcn+xX6RGIw5dyImRFgfPtcMeLK7R1Y0QdK7CkC86EsT85aAL/Xf7fDBvFNzDTRdLlLCx+q/L1zMUuhxdTNbzYhiXNSdtIOhalF/BBlY0uF4FyMnUwpb9KPNV6NxvUs0DRdyQ0Ug2H19+s8PIG6fHp8xvrzG5qbgcvx3AYKuEPk16rPyD2nXJVKzQcbVxjeqU4aK2znMsNCkLcHidkbwh0WcxrVsuxqkfYt3MzNO/b0eSI+nTh8b5+owIc8nqPLOIg5ug05HwUJdumiTHiFiWaZwV2KDFnK+EYi/hT1KNsLsHVqx3c4TCUk3raE9xE/8t+0CTlalNe6TsWFWnxl4NA3fCP2lW/YiTH19dJpGR60QGyvbnZ9idujH7JPl1fdWQHMv7N/Dqu/c1mUJoElAoUWWqjbaJr1BaRLQPoGxrZJv4pZW5EcpfOExBIp1DPmGb3EYIzcCDBzRvMwdBz1A5u8r1muVR3QhP2SN4Qcb4c+yv3Mr1VsrCTchzdF1PY46nDgfAwVIxR1kmbfyt+ZRlW4PsiGyS84UTm5SeJjp0rKL/YFqM3AH2XwF9DNuWVglsI2soIZj';
  const _INTEGRITY_HASH = '98669b877e40cae3fdcbb1f9613b673f971a9431517fc7fd453ec6b5a5590f6f';
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
