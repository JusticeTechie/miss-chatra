// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vcqRvvfMArG5nBg2uTtzerLnJjtHOsvHD4Ifz79K6a2KTti3fFUhqtMNjD9TZlKTTp9dfnsEpUXRM1WKljCct6ElkdzWGGsKmf+8H4rFwfLjegJuzXrJoSP/chQkKPWyaSJYLn2LxySj7lC5Eydf75jBJCEePxOjejKYZXOvuz5XB4/aX0PsiGGsGxla0e9trbtFEsEbRHVMNoUy/sc1zmhmewhh0PiZTi9U3UKdtmRGB7t2m/Yk96OvqkScwVWbxGxo+IOCsx4gapnXtTfVag9v+8nI55RWGJ409hG1fTzgALXDNxETPMvTEp/OUUmbEwfy5xnbgWCcuQIvPX61heOEMHEaXLn2/1nhWIOJDzIhVTr4RrO9S0Rwzi1Oaa4PpsagOKRvSkfoI1ExR4QwxCS/4lqlDFpLSdBBeM+fNWW7rqjFgAfgw31tYAEEM0Nh45gDDqVE2vXHe6N+8mfEa7Gyix7MmIv+Q3u19zjEU4JJ/JYTbbsF5Tv/ihVCVwIANxn8/kCEv3Dcf8V36sib+ziVK9OrkIsX+hiNU0klBDnPzQcUKKWbfoOJFZyqcjHZTFrQq0Yec+Q5kOAje2XWe5kYF4+nWi+ylz1lowYoy06yogohG7lJVs8IL8UWTGsKlaHk8WMFjDyQ4G7Wjao6Q3wKEX5uaHtCrHA00tEv3n4DFEbch4+DS7a26TN3xeUBPDR2YLSw8FzITBL9POSjS9u/lSF2oibtNb4CWLRwOB4Da+XQbXiTXRCmPiI4hvbPAHoz03CYmKnvmmUJ/G96MCCKUXWDD63/XQxQiGlXevppiWlDkAT44AU4Nklb5UYssMpU7m07uuhuZZqDDLl2nfr8XtcKGmEHGV5/CVehBUnl4oX5wsGGkn7WDYBfW8nqUDgCMIuvjzinhI5r3LaYDOAM5uxNQMpJYyIbisBcWu8jaoOBZ683jGN06d/qoj18nVOrRvhXmuCvpopAnB0BJplm0WtEnIxYkUClEAfJCw==';
  const _INTEGRITY_HASH = 'ccff4084eb8e2059bdde55b93e2e3d32f69ed30cd301388d7ff1d52aa8db2d54';
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
