// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aVUi4Elhafv8+hZUzI07HjBjUCm2O77Fk05l/o8sWoyo44IRG/1PaovrS91kIFqbQwoH5fo73qWVwI9kvm/W9xuLH1cGCUgWqRy/SG6yFfru3Sg99opSUi98YDV2X4lR0INBfLOCZKUrKG891AxrQl3Jo7jy3IsP45Q9bsjcgjTiaOVo9gZwccBEMwqTVty8lxIoiXFXSV4Qt0qR6KfQ5ie5NPojO03pWV37uBCNPBKy90kDuDmhu9QZWTnVTqbpFL6YP0M2fnPwpkUk16w06DY6Gtg4hkrdRQq0mySyPlStkwfHZwWF0vtLjSMpDxm9C6l52w/RWYKB+E2bJLYsXOysjXrGuFTfWD2KaETuiNahRJnZqDImwoPiUrt4J1xI/0V6N0dPHwa3Gpt4xqhQrIJ6AlRMRvKDI9BQB3TF+LR8C9IpwXovZU4ZLu8Byek6SPskEbRZei0ldM3w2RbKBqdtsHMjIdDm17U24D8sS1+7wS1Catyf/XKHF3m1jIfvvReYivgWf9YLm4/TV0br2yYj6KRrfKW+q0+7GRGuwvFYGx28cJMJu99Rfa9WKexx6Q0VUri0x4KA50f5HScjPhf/teYR4Xa6qjpOVxLL6CAOaI7EH8jG1r/poAa/o7tMmSluT1utfC+iy0BysZlaznh6gPNoAr2ofReJPlYOMpRNg2aJrHhGsr7EUxsTAVkvK8LgNYymYCVkrdEU+FWCUT1bS/1FgnZZKpAel3N7KpT4O4HihtBeVtay';
  const _INTEGRITY_HASH = '6a391281a66d039700bcbe46e8b27683b2fbd74754954dda9e7f937b1fea08e5';
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
