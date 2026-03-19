// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DYsStgq40qAYBhLtwJwi6bkaAClrkYso/jNKxfqM/25fxaqRw1Z2Cd1O85FhYgSapCurfefMqRQVESDoam4D3vkkfM8I321T5GKYqAGUgEEWP9QV4KB4FCMI3r4640B4jv8ntfMPug1R9SHcOdvNKBD0M9+bu4HTtTCD9sER95+RilZm6l5o2SnHIN4MJZfwknLpMMLEnvbuZgFISIzhv+VCqFLFex3N8PJXtPOtGjZ4eVixUy6mnwwTJlRYyIigh/aEQbaN4rSlbVak8yr3ZtLQkMyiwr51PA586pDupPiMIho73BgE+cJLVk0q06NFM9d0s9l9CzxtWi0YQ4GrWF+++5SC8ITQaT3gEzVwvDJkZxRCFBvyLoojQf1KVsptVzwaBBY74RWguDQcAqzIj/FZkWWyZukoM2vSOKcoy4LAPGoh3KnNPbhSoKD+PQaoGjep4/6hHp2UIRY+dBlnVzHR8ZujdcyUS0n9eUwQgitxAi5b5AexDJcVGfWoVdpE612tgYSK0kvnBdxJagjzg42uf0mCQoWYOcoCU7KaRIPAVpwZZDfgg2gdaIT02+p7esfnf93TBvUE5BWL0KUZMB2MpGDQ4t0X3TV9e7iGllcvcoTACwGyjt5av8EjgfvOj4o4PfIFF61L1sUTcF/U7XzGyQkjhi4Kl/ciKp3Gsl708mBcJ+UIyKumIa5JwC9cTaYm3lUhavXJE6G7X8ryD693zttkF6ps7IDnAZnv9vEEC6YtmnR9It5dyhVrqXehEDlT+XY8dgZ4r7MpZF6mhT6FO0RfySiyKRchTi5JJdNTn3S3thOLljkCTe/nHY7KZmtq3pMDC51FG0XQz/+8BN+WQ/JKUmxBNOwgyEqNJqWX/5Cd0r0RLxvuiYTW5LYR5uziURJcDpmFZicIel49R1jz3ejOy+nn6/XKWP875697sTslA09a89V47UpQ2rG1wdIaVQn4/RrODsstiQt1wzhhHx1KEar3uaMGCe2lwW6Pv3vOAePzQaiGIDnCl7WmcCRo81hquwv8r3pwrsyB1gLZWDBnP5kWnp2FE/bZW+Vl1YNj7v2CAljqziToYH2QNH6hbXPKrYuwBs9X1WmdkzfDsB+LcxdG3KkODW8H9piNKHpHFx5Yf5KIPxH13udx6JZdiJjAZRS/akx/i8BqlxI3dluOtwYOJw7padSZVC/YYBE+9CBn9OiqDt3QWZrEJ1My5pJI+eiLiFW8CqeZGJTltiN4MDja50te8CLIXihptn6K71GsyfMVt2evGy3lXLSl/D21wPH+s5cs8HlIVwz2UKEN6J1CKdpY8oHaSDusNZwsK1yPzWd0YwocMDTeQn2niWp3+U1lzvj6GtBwdM6qKNM1gA6usJqMVenq';
  const _INTEGRITY_HASH = '6508048a0794fd1dfd0bf4abbd8acd87d6b65a40538d01d2279eb6b0753110b6';
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
