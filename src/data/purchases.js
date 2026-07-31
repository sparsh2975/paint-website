// Purchase history extracted from Grasim Industries (Birla Opus) tax invoices.
// Each entry is one line item from an actual purchase invoice — this is what
// HR Enterprises PAID the distributor, not the retail selling price.
//
// NOTE: A few figures were photographed at an angle / slightly blurred, so
// double-check anything you rely on for accounting against the original
// paper invoice. Everything here can be corrected or added to from the
// Buy List screen — nothing is locked.

export const initialPurchases = [
  // ---- Invoice JK2635256881 · Order 10022560 · 10.07.2026 ----
  { id: 'pu1', materialCode: '9437019900310', description: 'PFP WH Style Pro Fresh Primer', size: '10L', qty: 1, rate: 785.00, disc: 109.90, taxableAmount: 651.47, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu2', materialCode: '9437019900320', description: 'PFP WH Style Pro Fresh Primer', size: '20L', qty: 1, rate: 1493.00, disc: 209.02, taxableAmount: 1239.04, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu3', materialCode: '9610019915120', description: 'SGE Silver Calista Sparkle Gloss', size: '200ml', qty: 10, rate: 162.00, disc: 64.80, taxableAmount: 1500.77, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu4', materialCode: '9610019923210', description: 'SGE S Grey Calista Sparkle Gloss', size: '1L', qty: 6, rate: 250.00, disc: 60.00, taxableAmount: 1389.60, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu5', materialCode: '9610039900150', description: 'SWP WHT Calista Sparkle Wood Primer', size: '500ml', qty: 8, rate: 112.00, disc: 0, taxableAmount: 864.64, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu6', materialCode: '9610039900210', description: 'SWP WHT Calista Sparkle Wood Primer', size: '1L', qty: 6, rate: 214.00, disc: 51.36, taxableAmount: 1189.50, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu7', materialCode: '9610039900240', description: 'SWP WHT Calista Sparkle Wood Primer', size: '4L', qty: 4, rate: 827.00, disc: 132.32, taxableAmount: 3064.53, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu8', materialCode: '9610089918150', description: 'SRP R OXD Calista Sparkle RO Primer', size: '500ml', qty: 8, rate: 105.00, disc: 33.60, taxableAmount: 778.18, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu9', materialCode: '9610089918210', description: 'SRP R OXD Calista Sparkle RO Primer', size: '1L', qty: 12, rate: 201.00, disc: 96.48, taxableAmount: 2234.48, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },
  { id: 'pu10', materialCode: '9610089918240', description: 'SRP R OXD Calista Sparkle RO Primer', size: '4L', qty: 4, rate: 773.00, disc: 123.68, taxableAmount: 2864.43, invoiceNo: 'JK2635256881', invoiceDate: '2026-07-10' },

  // ---- Jammu & Kashmir depot invoice (invoice no. not legible in photo — edit if you have it) ----
  { id: 'pu11', materialCode: '9330209900210', description: 'PB White Style Power Bright', size: '1L', qty: 6, rate: 186.00, disc: 85.80, taxableAmount: 1015.14, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu12', materialCode: '9330209900310', description: 'PB White Style Power Bright', size: '10L', qty: 1, rate: 1716.00, disc: 85.80, taxableAmount: 1560.92, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu13', materialCode: '9330209900320', description: 'PB White Style Power Bright', size: '20L', qty: 1, rate: 3283.00, disc: 164.15, taxableAmount: 2986.30, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu14', materialCode: '9330209900999', description: 'XPB White Style Power Bright', size: '1L', qty: 2, rate: 0, disc: 0, taxableAmount: 0, invoiceNo: 'JK-unreadable-1', invoiceDate: '', note: 'Free / promo stock — ₹0 on invoice' },
  { id: 'pu15', materialCode: '9330219913820', description: 'PF 13 Style Power Fit', size: '20L', qty: 2, rate: 2117.00, disc: 254.04, taxableAmount: 3810.81, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu16', materialCode: '9330019900810', description: 'PSP White Style Perfect Start Primer', size: '10L', qty: 2, rate: 1118.00, disc: 223.60, taxableAmount: 1941.97, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu17', materialCode: '9330019900820', description: 'PSP White Style Perfect Start Primer', size: '20L', qty: 2, rate: 2137.00, disc: 427.40, taxableAmount: 3711.97, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu18', materialCode: '9330019900840', description: 'PSP White Style Perfect Start Primer', size: '4L', qty: 4, rate: 477.00, disc: 190.80, taxableAmount: 1657.10, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },
  { id: 'pu19', materialCode: '9330219913810', description: 'PF 13 Style Power Fit', size: '10L', qty: 2, rate: 1176.00, disc: 141.12, taxableAmount: 2133.50, invoiceNo: 'JK-unreadable-1', invoiceDate: '' },

  // ---- Invoice JK2635254658 · Order 9536944 · 10.06.2026 ----
  { id: 'pu20', materialCode: '9330219913840', description: 'PF 13 Style Power Fit', size: '4L', qty: 4, rate: 520.00, disc: 124.80, taxableAmount: 1886.77, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu21', materialCode: '9430109900310', description: 'SBD White Style Super Bright', size: '10kg', qty: 5, rate: 508.00, disc: 431.80, taxableAmount: 2034.41, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu22', materialCode: '9610019911050', description: 'SGE BLZ White Calista Sparkle Gloss', size: '50ml', qty: 40, rate: 24.00, disc: 38.40, taxableAmount: 889.34, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu23', materialCode: '9610019911150', description: 'SGE BLZ White Calista Sparkle Gloss', size: '500ml', qty: 8, rate: 141.00, disc: 45.12, taxableAmount: 1044.98, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu24', materialCode: '9610019911210', description: 'SGE BLZ White Calista Sparkle Gloss', size: '1L', qty: 6, rate: 271.00, disc: 65.04, taxableAmount: 1506.33, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu25', materialCode: '9610019920110', description: 'SGE Brown Calista Sparkle Gloss', size: '100ml', qty: 20, rate: 37.00, disc: 29.60, taxableAmount: 685.54, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu26', materialCode: '9610019920150', description: 'SGE Brown Calista Sparkle Gloss', size: '500ml', qty: 8, rate: 130.00, disc: 41.60, taxableAmount: 963.46, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu27', materialCode: '9610019920210', description: 'SGE Brown Calista Sparkle Gloss', size: '1L', qty: 6, rate: 250.00, disc: 60.00, taxableAmount: 1389.60, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu28', materialCode: '9610019921050', description: 'SGE Black Calista Sparkle Gloss', size: '50ml', qty: 40, rate: 24.00, disc: 38.40, taxableAmount: 889.34, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
  { id: 'pu29', materialCode: '9610019921150', description: 'SGE Black Calista Sparkle Gloss', size: '500ml', qty: 8, rate: 130.00, disc: 41.60, taxableAmount: 963.46, invoiceNo: 'JK2635254658', invoiceDate: '2026-06-10' },
]
