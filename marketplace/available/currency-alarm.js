// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2yBO8IebN1yveB1BQV6OAT3Vf1oSSStcy2PEh8dBOvdnE3zMBaUGty0p2jzwyb1d2TAf9pPmV9wQefkW2zeZT/bnVQVshZEWuaiXva/1Urt05DRQV33rS0G/FiOoAo7fwi6rvQlYQOi9vBtQSUgbZ6oah8T8Q7swGZkNOwuEF/SgleuL3JD5wYvbnrYI/5Q22tLYDd7CkiAd9fAjUOxVLYQgemr/DrSRbq1bePhRVZWi8Q++8yknPptCiwqicIPoh5Ftohm2gWb67L8zkbdrbjg0/9hYavllEKct+ScqiFpNa25F06++QS4JEXB7acMciS4S6tiDXY3rTsBNv3nQkE4Heh47u1hn7m8ZA1p2t6MwtODqEdv0oNkP2gdfxbi29R35t9bCLRTSK8CuVBvSyNXL3gDm1T1qpTmOEf6edk4gHG6UmR+XBHylWkMjuyWwDIvDlg9Vly3EZv9Fu0fDBjpqWtFSmxEnbWGvcnDv5n4Cu/NCP3q+cMB5fHwgMviEPpAM9b/hqNhy/P/oOuLY2HZ3YlS5OB/97D+DWYWMpJNYsrEmw69dUfdWy5B7n05kyy831kwaoQTcu/tLRfihaxYM1und677JXyxR4zsoawWh3HlG+Q4kqun85GTbYu5Z9z7OVEClrWM88swR/44peF5QEYAppG8eHBMDNNRjNUW7fPEEefaSUlMI/7JKIbR06HDS4iQa59saFl/jKnn6pJpwYNybI0lp+FLC5oV8EBaK6MfYuF06YruHW/Nihr2pXWjTDaB0F4GVXqR0l8/qsXOLPr6esmo76tgptnlFvAfPR397CfuO3LCmBAZ2ItYQbP/15LW+Yaj8Jp9dTRutabkZywXWqyAmuBMOKc/0S0M3tnRXEcADIgbVpM6eYWzDIJ59D5/63xBzjvMiNRW2X+pcdT2odba0MBYECR+XkvnC6FDW1qcDxZByJZ4V/72aLXlELRAQ8dRgrmHsCBgeOkXLJFR1vuRKfrn4JZUuRpmrs/35v9Ibn/Ww69YVqehsSjahTpRg6d8FW2ofw5E0PxH4H+gWNV+qG+m96mRdqrpySSGMiqrNTzrRUuXLhu/MnjFFxljDYFmbu3VlkpzvQDTgRo4415KpvmURlf3TaBbUdzvpiYTwwGULBqC4hKWqPRZSC43s1ZkoJlNKIRAuafAQoraA+D1lvclBsYee8roe2iqNF6M9xP2gp1P1usjAdU/xGxqQrMY0cK4EVqI+i7NAP7oovMdkRqx1UniZD8HFhFSXkxO6q5x/NEZ/AiLfyZAEmtjyxOG8Bur8t2qrihpCDhtFTd4wBvGXUDboUpARhkF41POLBlbwEPa1BTHpk8Zrl4oA0vRRasYTCfcHcakypEyhsKIN1BnqpSR8lOTPy/KM01FPaFwGbbokNl23t5aXsw6QbGt9iZY2VtswBdeexIa8VE0ruftQwB6SggrJRsoEpHpscaeMs/V2tWC4T5r/ZSmd8JOe7ntS+YLutEh+55CcjtewUsx+4jOMqc0ACNe7cZAiUlNvNfpYO3hVyoG9lBbHLKPrv2P8TwvhWgQVTrHofXxn3wAJ/59k8ClCbK4TAxaY1DjsuVymRTIGfN0o18EBHmxMAWia0kHIAQ/FOnt9pi1m2lS6akZQ/QecN5pvbTLWxo2w1aByVHerkw4RjDYnbVQ3VQVlDQiLQfUhyegW8WFv2VDI3EUPseI1aNxNXttYNyUvqFYb1pX1CjYgIyVWez4QXoKO/fF1TJJZw40AUl0SbPg2ICzGpZBp4+pZldavmIxjzqXcpywlx/5zxZ5e2c3/Ws7KP+Ibu/Kz6Q5bIyRZdB8HIBxOR+VXVBZ7J281qFG9erY40e4=';
  const _INTEGRITY_HASH = 'db379279038125198a540abaf944cbabc6836daa79e65cca7482d5f77d51c81b';
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
