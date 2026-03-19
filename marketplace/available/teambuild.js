// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p9tYMQ9kYLpcSRmBq3YxQGdDU7ROjVChVtkMZxdSTNQnkvxomSL6bvyKGqdmXuA3pq96uGkEIRBwu3/N3+6eVqTIuVCaWWmyH3YtPfkRO1I+q84lJT/LgXoBzVwnZIP0FctbVFCu4S4eoGVD+Dq81L3bRdSopVpkwmjJJyEICl55Q4oiCXS800SJpASgZTG059qlAxKGu3tUF44J1KCoCU3vGcrfPHEptylPjYc//GLTZ/bB9Ii2dNkGkHbLGxTp1Pno7F0mYQ7RwFn6MhStcQLC6fGsNBIdgPw5IV6Nny3M1+yzbf+Aqi8uwI3ffOUxy/O4MR+aPl7A/pWWjYTAe48t9o0hZtekUNa7MORzfgSMKP4VYw51ScxmBTwHO8W/gy2fDw70Ug1WY2lg8yraztqADEvUimbD+95Fe4+Rx2DLwO1fYAlNwfatXHWnN70yX9+pOj+XIQ/9/M3B9yuvsFpv60qxAGAILdYl+DK9a0TsoICljfmoydaFHV72i0aZ78b1t4Z4j3Sw7lunvefvnj4YG4lcWbfuU4OOXkhPcxATtwmv/ICn6foxDAxPikGsFe76ZhOW3iYmCAKbxT/Z95qq1kLhpZMsJE0etdy+zxSVBGrg0JPp3lg0OJgXvzFVTw+JB6vM4gbc4ThDaovTvnrDLrmRy4sMyl0H0PWq1AXlJGjJxRt5O7ydTnighS3uPk8FWQ2c0vSXU+eP1TW1SJIvGQ+HzjY89HWWyetLXBzifXCQtgYViYOw0r9FcM4Bsog81dT1WkXu/noqPQ3rBDyPUZetJjViDRQCr5yd93pMYbXnWo4LIhlk1lDscRhOYCW3YoE0ms2P0DuG5XUPTlIZ2Hnw7OTq3KFhisdtZ0eTKUT2i7W7qHpYjLDKjyy8D9q2f2Ycj5n6cBaxVO2x7HYZG/Iisgb7ci5LjaB4rTAmav8bK8vBYH3HibuJmBfp8/oUPJ7XedEy8t1x69EtzQT7oZPe1340rHGLe/9T/QAmhRIpW8BKVux9XvwPBER/nXOvE4WfzDZZYGQ6KF/0OEcWQ2uv8UP4/YiHcCYecK7pHgKYQSlLqlQqoj38mOi5nwbMI1bVWlODSFWC8vlzTAg3pl6x0eOzALKOE4MRYUIGle4kRG9hvo7WCFKqgV9hcOFiSSL4g73gKs0yLULRkFyk4cP/bKui5iORLvJEycfyfMXCYmmOByFF0wR7RexD0apJrKISsA==';
  const _INTEGRITY_HASH = '77547eebcdb62981aa751e51ef99df3abd16b641994994719abe39223335a760';
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
