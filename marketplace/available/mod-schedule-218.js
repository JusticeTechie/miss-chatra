// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'itKk19bJrr7OplRLJd7dAbCjg3iIOwJxMzcF9+0lW0ko5Ri8naWpw3FkUHNq4i923xTKMI68VLc2TwTZ+c82R+35bsbL3rfm3k82W0PNeHOj0jrIdDrhFYlHFQ2Q5SvGii0zV5FXf2M+9iYRl5Ls/t9nhRW/vB7NASFkjFPMPEAKciq6EXxNDExNem8xjmgE0I7ZVymree0NgKSfnzxyZU9vbKlHTIdKH0lE/Go61hAj75wAKzbgp1Pkt1iUSEjrEJubB0f1pYH1O45nXpD6eyeTT12R6+rHNeekEtVXtVFCoy+rYqOk6nxAlrBOPbvEeAUr4o8/k2DJMOKnfDF0cMf5W3dkvZu95t6VAE2iHJJ28oIVAotCIEPWzkBtg8IWRj7uPq+yaRR7+rSAl7mYo5kMRWxRKfe0sQchq5E0EP3oTfLWikjoDWtpRiWrL/Pvg9zdbNmH9e1EHYsSFh0nRuKax5pikvAoCftrjjseu5in3i5kPLMC9DnYzu44tbc8fImL6jGZIHQdv31QXSoDgNp6BAXvvwaD715gaKu74yGWI5IHa59cfPChnAHJ5H1rFKVqdCd1oAJlTA/4mzJiDoi6IxIWzDmLp/7ers8PUbWEns5EWMhG85wIkF/xu9QPGjDtSi5mJXHbWtj+soQS/g3YQUmG3okzJnTmOVC8eWSYeNRZ7w2yUKieiFTj+Krlt7LNxT5gEiu+J218udd4Yj4Ad+qEftZgeexg0QB0XjLA2Oj2KGySIOxjpMxTlo8v7lvGMTV9RRvM3Oo7BnnyUGMiYoudi3zeduboD7kDpU+3vHbFYFY9UHL0BsL14sfJU/VJ+QGAv/IVf1neQ0t5hMyYzNZytuTxY0/ocVr9mHc9eGaG7lVGcr+NPlXHnQiHVUJL4GRJIbMbcAOpweK+cL7mJCuoSYzdWYz/YHzsG33dRLOH726QmySzl+j5sS/gDJpi0p+voJDgfdvFTJ/tiSGp6vxHu2nq7Zo7O53Z+rjz/PU/JCp3i+McOvEQ1wKnHWs+/lUfwW4bqawjVEzIlaXu8h7CENuwu92TKNf0pvsZF63Nq6QCFhl8ZBRhi//Tr98OYxM31xl2KCAeB78ShEs4DuQ9gmy+cYXsX0nwF7Yoei+nUMaTZJd4WvITY0oGCt5ykhRoD5vsmUvfRNHnEj1D4TQp3p8jLZF3UClPIZ0UWH3kAB8GBomUXL27hMimvtRfQv7B5dV+zgSO0ZOIZY4upHLEmDwrvhEAeyesyP9wtis98xDgFcFlOXKwjIdmfhgzeuP+N50hGurGvwBrCLaMYTPKcERT8J2DsSQudOunbYEEzNYlWzidHcDC+Ia98/s6vfjK/i/nv3cZhZXuwoFw/cByHmgi3e+pGq63pxqEs+zpYPPiRcCRZuBE7BaXdKXVHTQ7EzJoNqzs';
  const _INTEGRITY_HASH = '5fd37600a3b3fbe88ac0859f9503a405113180d616b101dfc5c172d77a4acc96';
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
