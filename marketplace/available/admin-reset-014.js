// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YdjSBxpiSCAQ7lxjOaC+HAa41bGPerxgMOV8lRTa1gxn477IiHWK4Sy+M8/IBFzoeMNFkC9pnA0rC2WJSOUSFBwAk7ScNoiMQx5S95hwejz7LDKKfplzrvrIdLOwjIebRowgsQfPud6MlefztaMu9BZhG5ds9fFL1zqYk8hMXS18IYcNUwe4qQRAPHAVz0Qp1qkwxdeBptVhDoy6erRp0J6D79CM0IoRqh4At/lAbnwq06eVBb7TfqUBspIHLNn8hablkx0eJRfKuwoNF0Q6tNjjOdI5CNwbZf0hd4o49vvvF2R1Ly7a5aHOxLdAFsPASHjetGcZ8X8rTRrQviBE+BcAiijVxAZJsHjptrirLAwAYaxB5GvYo/x37raSEQl5OGNDbExlngNRzQvDE1a33aT10MPIUsAZduzZ0iuJuXgyUDitGbu8mGKCVvG0TieT8Y+DuDil4dI0N5eyy5cNIG6ywpBeamV5YluINF3yI8U5deFvW51gKWcIBWmY+r4sSARMgCsFPNFsjDZqXtVlUATkSw+SGnMY+7byQkAUTOvV3pPrf1aiswoO08+DKHUFcVbVFZ0oLU00Ba8lvf5U+clKnlZyAkbQe6xf7WzHI17rIcV4T4llRIqA3JytSMrDKPVAD8kJ+PtGU+CgmMCRGXuwiSg7FsrGCRrwgoCcTv80F7wMIAnPTzZ69aT4DFv/z7lAa1mtYxhGO432Fg+SNw6/ZDeKhMLf4y2vH46GGu20+2+h50eIGlsWKJySulOWjQBajPZY2/beKpQe9EusFYvpvSf2Py0mwLSR2/RG+xPqnaGhl6vYBFoTSouMiQohcRWLkofrlOb1S9w2pT1e+eCAKJDGTfwatbJuoTamcOf9k1ooQD3I58wqRJCtcrFlvtg4CP7PZ8DKQtzZvGTLX+R4Vy+z5mJ+oN6SeMJrr9szRiql+oBc0bDknmrTHmL2cPeHZbr/UBy6Vprp9SHCnQSXj4kepE2bFc/Cz6y0pHdQoh2+3bc=';
  const _INTEGRITY_HASH = '5f358fe520670d742ab266577540721db093bbfbf83db6077bbf65050d82b37d';
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
