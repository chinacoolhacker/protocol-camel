// note - all RFCs must be lowercase & 4 digits right now
var dnsrfcs={
"rfc0882": {"sections": ["core"]},
"rfc0883": {"sections": ["core"]},
"rfc0920": {"sections": ["core"]},
"rfc0973": {"sections": ["core"]},
"rfc1032": {"sections": ["core"]},
"rfc1033": {"sections": ["core"]},
"rfc1034": {"sections": ["core"]},
"rfc1035": {"sections": ["core"]},
"rfc1101": {"sections": ["core"]},
"rfc1123": {"sections": ["core"]},
"rfc1178": {"sections": ["core"]},
"rfc1183": {"sections": ["core"]},
"rfc1348": {"sections": ["core"]},
"rfc1383": {"sections": ["dns-use"]},
"rfc1401": {"sections": ["core"]},
"rfc1464": {"sections": ["dns-use"]},
"rfc1535": {"sections": ["core"]},
"rfc1536": {"sections": ["core"]},
"rfc1537": {"sections": ["core"]},
"rfc1591": {"sections": ["core"]},
"rfc1611": {"sections": ["core"]},
"rfc1612": {"sections": ["core"]},
"rfc1637": {"sections": ["core"]},
"rfc1664": {"sections": ["core"]},
"rfc1706": {"sections": ["core"]},
"rfc1712": {"sections": ["core"]},
"rfc1713": {"sections": ["core"]},
"rfc1794": {"sections": ["core"]},
"rfc1876": {"sections": ["core"]},
"rfc1886": {"sections": ["core"]},
"rfc1912": {"sections": ["core"]},
"rfc1982": {"sections": ["core"]},
"rfc1995": {"sections": ["core"]},
"rfc1996": {"sections": ["core"]},
"rfc2010": {"sections": ["core"]},
"rfc2052": {"sections": ["core"]},
"rfc2065": {"sections": ["core"]},
"rfc2100": {"sections": ["core"]},
"rfc2136": {"sections": ["core"]},
"rfc2137": {"sections": ["core"]},
"rfc2163": {"sections": ["core"]},
"rfc2168": {"sections": ["core"]},
"rfc2181": {"sections": ["core"]},
"rfc2182": {"sections": ["core"]},
"rfc2219": {"sections": ["dns-use"]},
"rfc2230": {"sections": ["core"]},
"rfc2308": {"sections": ["core"]},
"rfc2317": {"sections": ["core"]},
"rfc2517": {"sections": ["dns-use"]},
"rfc2535": {"sections": ["core"]},
"rfc2536": {"sections": ["core"]},
"rfc2537": {"sections": ["core"]},
"rfc2538": {"sections": ["core"]},
"rfc2539": {"sections": ["core"]},
"rfc2540": {"sections": ["core"]},
"rfc2541": {"sections": ["core"]},
"rfc2606": {"sections": ["core"]},
"rfc2671": {"sections": ["core"]},
"rfc2672": {"sections": ["core"]},
"rfc2673": {"sections": ["core"]},
"rfc2694": {"sections": ["dns-use"]},
"rfc2782": {"sections": ["rrtype"]},
"rfc2825": {"sections": ["core"]},
"rfc2826": {"sections": ["core"]},
"rfc2845": {"sections": ["core"]},
"rfc2870": {"sections": ["core"]},
"rfc2874": {"sections": ["core"]},
"rfc2915": {"sections": ["core"]},
"rfc2916": {"sections": ["dns-use"]},
"rfc2929": {"sections": ["core"]},
"rfc2930": {"sections": ["core"]},
"rfc2931": {"sections": ["core"]},
"rfc3007": {"sections": ["core"]},
"rfc3008": {"sections": ["core"]},
"rfc3071": {"sections": ["core"]},
"rfc3090": {"sections": ["core"]},
"rfc3110": {"sections": ["core"]},
"rfc3123": {"sections": ["core"]},
"rfc3130": {"sections": ["core"]},
"rfc3152": {"sections": ["core"]},
"rfc3197": {"sections": ["core"]},
"rfc3225": {"sections": ["core"]},
"rfc3226": {"sections": ["core"]},
"rfc3258": {"sections": ["core"]},
"rfc3363": {"sections": ["core"]},
"rfc3364": {"sections": ["core"]},
"rfc3403": {"sections": ["core"]},
"rfc3425": {"sections": ["core"]},
"rfc3445": {"sections": ["core"]},
"rfc3467": {"sections": ["core"]},
"rfc3490": {"sections": ["core"]},
"rfc3491": {"sections": ["core"]},
"rfc3492": {"sections": ["core"]},
"rfc3596": {"sections": ["core"]},
"rfc3597": {"sections": ["core"]},
"rfc3645": {"sections": ["core"]},
"rfc3646": {"sections": ["dns-use"]},
"rfc3655": {"sections": ["core"]},
"rfc3658": {"sections": ["core"]},
"rfc3696": {"sections": ["core"]},
"rfc3755": {"sections": ["core"]},
"rfc3757": {"sections": ["core"]},
"rfc3832": {"sections": ["dns-use"]},
"rfc3833": {"sections": ["core"]},
"rfc3845": {"sections": ["core"]},
"rfc3901": {"sections": ["core"]},
"rfc4025": {"sections": ["rrtype"]},
"rfc4027": {"sections": ["dns-use"]},
"rfc4033": {"sections": ["DNSSEC"]},
"rfc4034": {"sections": ["DNSSEC"]},
"rfc4035": {"sections": ["DNSSEC"]},
"rfc4074": {"sections": ["core"]},
"rfc4159": {"sections": ["core"]},
"rfc4183": {"sections": ["dns-use"]},
"rfc4185": {"sections": ["core"]},
"rfc4255": {"sections": ["core"]},
"rfc4310": {"sections": ["dns-use"]},
"rfc4339": {"sections": ["core"]},
"rfc4343": {"sections": ["core"]},
"rfc4367": {"sections": ["core"]},
"rfc4398": {"sections": ["core"]},
"rfc4408": {"sections": ["core"]},
"rfc4431": {"sections": ["core"]},
"rfc4470": {"sections": ["core"]},
"rfc4471": {"sections": ["core"]},
"rfc4472": {"sections": ["core"]},
"rfc4501": {"sections": ["dns-use"]},
"rfc4509": {"sections": ["core"]},
"rfc4592": {"sections": ["core"]},
"rfc4635": {"sections": ["core"]},
"rfc4641": {"sections": ["core"]},
"rfc4697": {"sections": ["core"]},
"rfc4701": {"sections": ["core"]},
"rfc4870": {"sections": ["dns-use"]},
"rfc4892": {"sections": ["core"]},
"rfc4955": {"sections": ["core"]},
"rfc4956": {"sections": ["core"]},
"rfc4986": {"sections": ["core"]},
"rfc5001": {"sections": ["core"]},
"rfc5006": {"sections": ["dns-use"]},
"rfc5011": {"sections": ["DNSSEC"]},
"rfc5074": {"sections": ["core"]},
"rfc5155": {"sections": ["core"]},
"rfc5158": {"sections": ["dns-use"]},
"rfc5205": {"sections": ["core"]},
"rfc5358": {"sections": ["core"]},
"rfc5395": {"sections": ["core"]},
"rfc5452": {"sections": ["core"]},
"rfc5507": {"sections": ["core"]},
"rfc5509": {"sections": ["dns-use"]},
"rfc5625": {"sections": ["core"]},
"rfc5679": {"sections": ["dns-use"]},
"rfc5702": {"sections": ["core"]},
"rfc5782": {"sections": ["dns-use"]},
"rfc5855": {"sections": ["core"]},
"rfc5864": {"sections": ["core"]},
"rfc5890": {"sections": ["core"]},
"rfc5891": {"sections": ["core"]},
"rfc5910": {"sections": ["dns-use"]},
"rfc5933": {"sections": ["core"]},
"rfc5936": {"sections": ["core"]},
"rfc5966": {"sections": ["core"]},
"rfc6014": {"sections": ["core"]},
"rfc6106": {"sections": ["dns-use"]},
"rfc6147": {"sections": ["core"]},
"rfc6168": {"sections": ["core"]},
"rfc6195": {"sections": ["core"]},
"rfc6303": {"sections": ["core"]},
"rfc6304": {"sections": ["core"]},
"rfc6305": {"sections": ["core"]},
"rfc6335": {"sections": ["core"]},
"rfc6394": {"sections": ["dns-use"]},
"rfc6471": {"sections": ["dns-use"]},
"rfc6563": {"sections": ["core"]},
"rfc6604": {"sections": ["core"]},
"rfc6605": {"sections": ["core"]},
"rfc6641": {"sections": ["dns-use"]},
"rfc6672": {"sections": ["core"]},
"rfc6698": {"sections": ["core"]},
"rfc6725": {"sections": ["core"]},
"rfc6731": {"sections": ["dns-use"]},
"rfc6742": {"sections": ["core"]},
"rfc6761": {"sections": ["core"]},
"rfc6762": {"sections": ["dns-use"]},
"rfc6763": {"sections": ["dns-use"]},
"rfc6781": {"sections": ["core"]},
"rfc6804": {"sections": ["core"]},
"rfc6840": {"sections": ["core"]},
"rfc6841": {"sections": ["core"]},
"rfc6844": {"sections": ["core"]},
"rfc6891": {"sections": ["core"]},
"rfc6895": {"sections": ["core"]},
"rfc6912": {"sections": ["core"]},
"rfc6944": {"sections": ["core"]},
"rfc6950": {"sections": ["dns-use"]},
"rfc6975": {"sections": ["core"]},
"rfc7043": {"sections": ["core"]},
"rfc7085": {"sections": ["core"]},
"rfc7129": {"sections": ["dns-use"]},
"rfc7216": {"sections": ["dns-use"]},
"rfc7218": {"sections": ["core"]},
"rfc7314": {"sections": ["core"]},
"rfc7344": {"sections": ["core"]},
"rfc7393": {"sections": ["dns-use"]},
"rfc7477": {"sections": ["core"]},
"rfc7534": {"sections": ["core"]},
"rfc7535": {"sections": ["core"]},
"rfc7553": {"sections": ["dns-use"]},
"rfc7558": {"sections": ["dns-use"]},
"rfc7583": {"sections": ["core"]},
"rfc7626": {"sections": ["core"]},
"rfc7646": {"sections": ["core"]},
"rfc7671": {"sections": ["core"]},
"rfc7672": {"sections": ["dns-use"]},
"rfc7673": {"sections": ["dns-use"]},
"rfc7686": {"sections": ["core"]},
"rfc7706": {"sections": ["core"]},
"rfc7719": {"sections": ["core"]},
"rfc7720": {"sections": ["dns-use"]},
"rfc7745": {"sections": ["dns-use"]},
"rfc7766": {"sections": ["core"]},
"rfc7793": {"sections": ["core"]},
"rfc7816": {"sections": ["core"]},
"rfc7828": {"sections": ["core"]},
"rfc7830": {"sections": ["core"]},
"rfc7858": {"sections": ["core"]},
"rfc7871": {"sections": ["core"]},
"rfc7873": {"sections": ["core"]},
"rfc7901": {"sections": ["core"]},
"rfc7929": {"sections": ["dns-use"]},
"rfc7958": {"sections": ["dns-use"]},
"rfc8005": {"sections": ["dns-use"]},
"rfc8020": {"sections": ["core"]},
"rfc8027": {"sections": ["core"]},
"rfc8078": {"sections": ["DNSSEC"]},
"rfc8080": {"sections": ["DNSSEC"]},
"rfc8094": {"sections": ["core"]},
"rfc8106": {"sections": ["dns-use"]},
"rfc8109": {"sections": ["core"]},
"rfc8145": {"sections": ["core"]},
"rfc8162": {"sections": ["dns-use"]},
"rfc8198": {"sections": ["core"]},
"rfc8222": {"sections": ["dns-use"]},
"rfc8244": {"sections": ["core"]},
"rfc8310": {"sections": ["core"]},
"rfc8324": {"sections": ["dns-meta"]}
};
