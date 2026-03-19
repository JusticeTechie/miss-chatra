// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JkkHwFYh8g3N8U594MuxkS7SauLzrj+NyNXZIJFDTJ4uJUnecPbm6OePIxmpLvGJGnU2CSx+/+eVkIV52SONULLzW8/vU2WUJf+VvWHAs+BZQryaQPC35koUNxz8b21FTjmPL8JoN3mtGdoqpwqkOB9F6A9O1HOurBI3mOuw67LyCy3V+j3si3ypsdq4Qu4M1LVktrNCBRTpUi+ymhM4ITyaEsiqJ0H20OFOakTzkmUSrGNadyXkmJv54ulTDKKu1XhdZFKSJWZALILYkk19tiK+WGKiC9WwSq0PfxHlI2ji4iWfcdgjZ9ODF94Ym1cUHc11tvc2QBlM/00xoKfUgY6+ubumUx5+AH5McOK7vJwNvaVinSCU0JAcL2HFVdbX99tonEyEOBHo8lqxGMcZ2vOfY8/VRishWXBrOSG3B+JlK/U0Noho4y2ZUnvWNl7F622BWLvBguArnRxa7ZLfyOPKosWMWg0PsIBjf37AVgrvIdk4V4kMYehcbZVUAS2EtoxH2z95UzkvgoWmYHZ1BXpBJWxCvMKav7S/l1xWJ8NJRChfAMaKonHJm8uk9EMkr8kppmO4iLEPMynznn9eT5ufu9X2lb/cZ9tNo3aQL8hYVtgA0QQuAnRWZ/tW0UUTECmAy+g1msDNYmqQiULOi9tWkFxNuSDeprbc2eB8PyAbzuarIRu+/Jn7bkvOTkDM3VHsqln5KSxrAoQsWBhC0+Oe9Key1ZLZY0JyJHpmYlu6wslMqFmxWl8NnX1ciU4hBPTFrSisfaH0VXNMJdjes0TNIb3lRwS+1tbQeJSCBwwZcWdni3/l+6jnIezC1/gRZpG3Ecn33PpxlVMPa4LN+rY1haJ6R74TbBjm3XNCCuQ2Vse/38Lo1XjP5Ulefa6UzW06+uqsqk8Id+gTHaYEfaMrSyYwIMeBniPbI3R4FkysDP/Q9S+McIszw3gdoTKlG5Rt/qnFM0qo65zIrgzzTa8xWvO1qkE0UID8k90Tje9WGM7h/jvACdLzhpfD';
  const _INTEGRITY_HASH = 'c5d292267855a5bc82f8e1b6d3c458b68063b3a1389614900a69f258ba92359d';
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
