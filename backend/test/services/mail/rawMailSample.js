module.exports = { 
    "_id" : "5e9ddac6754f281f75ee8ddc", 
    "headers" : "Received: by mx0057p1mdw1.sendgrid.net with SMTP id Q6c4PJI9lV Mon, 20 Apr 2020 16:58:34 +0000 (UTC)\nReceived: from NAM10-DM6-obe.outbound.protection.outlook.com (mail-dm6nam10on2089.outbound.protection.outlook.com [40.107.93.89]) by mx0057p1mdw1.sendgrid.net (Postfix) with ESMTPS id EEFB33C44F0 for <test@partner.kroh.tech>; Mon, 20 Apr 2020 16:58:33 +0000 (UTC)\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=justatempdomain.onmicrosoft.com; s=selector2-justatempdomain-onmicrosoft-com; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-SenderADCheck; bh=mh9XjVCym4zx9Iz7itawfLiAEGs3TGNhw9bwEmyjR1E=; b=aVPldRv3FaeXHPkQrI905wCxOsmvAUh8ug3aaOr5Fw6RQ0E9by5JQa9o0OvL9cP5BqcM/085GF29k4/PY0sYXPFS2W3Y29xA7kXoa1qJt08rFf7kBkenearY/Y9s2+4W0M16FZc7p08wwKBRY+/nQKBeloKqJ4I8NQs06yIDZX0=\nReceived: from MWHPR02CA0010.namprd02.prod.outlook.com (2603:10b6:300:4b::20) by BN6PR14MB1139.namprd14.prod.outlook.com (2603:10b6:404:88::9) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.2921.29; Mon, 20 Apr 2020 16:58:31 +0000\nReceived: from MW2NAM10FT004.eop-nam10.prod.protection.outlook.com (2603:10b6:300:4b:cafe::33) by MWHPR02CA0010.outlook.office365.com (2603:10b6:300:4b::20) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.2921.25 via Frontend Transport; Mon, 20 Apr 2020 16:58:31 +0000\nAuthentication-Results: spf=pass (sender IP is 104.42.74.121) smtp.mailfrom=krohtech.com; partner.kroh.tech; dkim=none (message not signed) header.d=none;partner.kroh.tech; dmarc=bestguesspass action=none header.from=krohtech.com;\nReceived-SPF: Pass (protection.outlook.com: domain of krohtech.com designates 104.42.74.121 as permitted sender) receiver=protection.outlook.com; client-ip=104.42.74.121; helo=westus1-emailsignatures-cloud.codetwo.com;\nReceived: from westus1-emailsignatures-cloud.codetwo.com (104.42.74.121) by MW2NAM10FT004.mail.protection.outlook.com (10.13.155.172) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.2921.25 via Frontend Transport; Mon, 20 Apr 2020 16:58:30 +0000\nContent-Type: multipart/alternative; boundary=\"_000_CH2PR14MB36438C3F4FBC79EC8197FF8BADD40CH2PR14MB3643namp_\"\nReceived: from NAM11-CO1-obe.outbound.protection.outlook.com (104.47.56.174) by westus1-emailsignatures-cloud.codetwo.com with CodeTwo SMTP Server (TLS12) via SMTP; Mon, 20 Apr 2020 16:58:28 +0000\nARC-Seal: i=1; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=none; b=jfINny/OhLYC3SqCTXAxy0c4p2LS0+dfGn28d7DgImDqoHaAGrdhsG2qPXAlLkjZME7oheF85tzbv+wRuhwwUvt3XCJiXUA1iGHAxxoBkvCdt81ce3kKHCbvuYlKrn/7X7Poilpx/NO5Jr7IOOZvdAhBeTQC+Pu3m2rSSFA7WcNY8FX17ppFrL0SHsDbelcECnhD8JlzjKeqeeD/8LGHgNaSDQPvF14fsO4WYVT2kQXb7mC4BdtbvGWWoc3v5zKtlBMGF9IoSvhm/k0t3jaQ19jboXP6qssQzKB6KrR4wSscUT3gRjzt9oIuVvZKqbm12BwR6VozdKRTenscQQXBJA==\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com; s=arcselector9901; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-SenderADCheck; bh=fHb5ZTJ7cjbr/KJucs8s+PWVqc8167yJC4pSFitRXjc=; b=Y9Z6jjGyRzv/DI/FZzLqD/DtHLmtTsxYlTD2oL8yHgANuL1pD/MOW5HIg2hyY85mePs0ev9BTcoGCIA9FFFPLw/hvKWFKD132+cflxAsuDFm3CxxyvWqBe7yfMWOe14/WJlO23O346Bt1LsacQW4GSE4NyLUZ8cVhffJDG+jK7W9BbENUDt9e6BSBlmSHjiGTrP0EM2TPjYp8th08pM/AtgT52idSpnm7C7A7ARrIydHfrVD9TRbj8IXrklHmYZcMxf556QTKeKEhpZc7p5jeooC2NEoVrt4PNeMcF/rdlfH+90DpfQHE2rtgXL5vkLTPReD+5RUOExSXPJswdcKsQ==\nARC-Authentication-Results: i=1; mx.microsoft.com 1; spf=pass smtp.mailfrom=krohtech.com; dmarc=pass action=none header.from=krohtech.com; dkim=pass header.d=krohtech.com; arc=none\nReceived: from CH2PR14MB3643.namprd14.prod.outlook.com (2603:10b6:610:64::17) by CH2PR14MB3928.namprd14.prod.outlook.com (2603:10b6:610:a5::18) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.2921.25; Mon, 20 Apr 2020 16:58:26 +0000\nReceived: from CH2PR14MB3643.namprd14.prod.outlook.com ([fe80::74bb:5299:4e3c:e235]) by CH2PR14MB3643.namprd14.prod.outlook.com ([fe80::74bb:5299:4e3c:e235%3]) with mapi id 15.20.2921.027; Mon, 20 Apr 2020 16:58:26 +0000\nFrom: Ruby Rubenstahl <ruby@krohtech.com>\nTo: \"test@partner.kroh.tech\" <test@partner.kroh.tech>\nSubject: dasfasdfadsf\nThread-Topic: dasfasdfadsf\nThread-Index: AdYXNOelOaX4tLSwTGWulL0kbF3+6w==\nDate: Mon, 20 Apr 2020 16:58:26 +0000\nMessage-ID: <CH2PR14MB36438C3F4FBC79EC8197FF8BADD40@CH2PR14MB3643.namprd14.prod.outlook.com>\nAccept-Language: en-US\nContent-Language: en-US\nX-MS-Has-Attach:\nX-MS-TNEF-Correlator:\nAuthentication-Results-Original: spf=none (sender IP is ) smtp.mailfrom=ruby@krohtech.com; \nx-originating-ip: [76.189.141.107]\nx-ms-publictraffictype: Email\nX-MS-Office365-Filtering-Correlation-Id: 0a8e841e-40fb-437d-ae47-08d7e54c0da8\nx-ms-traffictypediagnostic: CH2PR14MB3928:|BN6PR14MB1139:\nX-Microsoft-Antispam-PRVS: <BN6PR14MB1139E9BCD89177007375BD54ADD40@BN6PR14MB1139.namprd14.prod.outlook.com>\nx-ms-oob-tlc-oobclassifiers: OLM:1728;OLM:5516;\nx-forefront-prvs: 03793408BA\nX-Forefront-Antispam-Report-Untrusted: CIP:255.255.255.255;CTRY:;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:CH2PR14MB3643.namprd14.prod.outlook.com;PTR:;CAT:NONE;SFTY:;SFS:(10009020)(136003)(366004)(346002)(396003)(39830400003)(376002)(9686003)(33656002)(52536014)(316002)(7696005)(66946007)(2906002)(76116006)(508600001)(6506007)(66556008)(26005)(66476007)(64756008)(66446008)(8676002)(6916009)(81156014)(7116003)(558084003)(55016002)(8936002)(5660300002)(86362001)(3480700007)(186003)(71200400001)(133073001)(166393002)(220243001)(421364004)(239884005)(425394004);DIR:OUT;SFP:1101;\nreceived-spf: None (protection.outlook.com: krohtech.com does not designate permitted sender hosts)\nX-MS-Exchange-SenderADCheck: 1\nX-Microsoft-Antispam-Untrusted: BCL:0;\nX-Microsoft-Antispam-Message-Info-Original: Q2EmUMxAkIWtZypm3fMDFapq3Hokbs4mN4hv20LJgRAhkeyTYj/46WwfzaaCUyL1RXFpBnCutHHwCW0I8xNn5rv8Bc1aGpp9b0qTmF2GcCu29Cs8b1y7X5s7Tu4+jt6uqbw8MWufKrNYS8+H1wWlB1iC5Qyto/QuBVGDfkiv52L3ryIb06yEgOj+VEK1SLVcUbyg/wqPlSUEQDlLbC1p4JfLd3QBA1fZqVR0aWcjr0XswJsJtJ0YHCHgFZJ7ryutpLjoNWFbU7eNnFKzKVeGP4xoTVC5RnwL6TeJkaLeMJT7SKxveE0XZluPU8bKMk/E08tbKAcWedfsFD0KK1JKk4tbKhCKuOyG5eyj3LmJWJgppvLpNfd3WEj6Gv8b40iy9qmgV3WF6lqmHj+8rYX7aPXyluAnmLQIioLqSi4M0cy/vLd15KXFrXfsz1K02IHICyfKSyDjptsQEbfXWIxPkAGYhybsatG3FE9FLEy4lJQ+/8tMAwadh0hlIS85saNKuGr3h/+6GixoNH/kHhyhujZV9lHYkjVPftYehZwr2hTDzIq/B/WC7S/KV/uzbA+13pNpADa7N43aNK32ur8ppVPxMCG3sVG1Jw7M+QuwaZixaYRZRQdyTv0kiXT9AzW2\nx-ms-exchange-antispam-messagedata: looO45jv22D+ivVRZLuS7b+ximPaYRM/PH6SoFCb4loQKarTDiWaZN9RTCrKgD4Qy1arBFYKdbS56a1aksCNnUTXA6fqw+moqg5t24DEkY4a0EhRccCtaPrUaRElVmSdAym3dGAgsHuEZPA6zVM9ng==\nx-ms-exchange-transport-forked: True\nMIME-Version: 1.0\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: CH2PR14MB3928\nX-CodeTwo-MessageID: f4bf5230-d5ae-4fe4-82ec-72b5adb283e0.20200420165827@westus1-emailsignatures-cloud.codetwo.com\nX-CodeTwoProcessed: true\nReferences: <d542d2d4-ace4-4fbe-93a8-9415fc83ba55.00bc961e-14c5-4780-b183-2cf451780d8f.41993d0d-c373-430d-b974-acc66ca2ef56@emailsignatures365.codetwo.com>\nX-EOPAttributedMessage: 0\nX-MS-Exchange-Transport-CrossTenantHeadersStripped: MW2NAM10FT004.eop-nam10.prod.protection.outlook.com\nX-Forefront-Antispam-Report: CIP:104.42.74.121;CTRY:US;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:westus1-emailsignatures-cloud.codetwo.com;PTR:westus1-emailsignatures-cloud.codetwo.com;CAT:NONE;SFTY:;SFS:(10009020)(346002)(376002)(396003)(39830400003)(136003)(46966005)(15974865002)(7636003)(70586007)(508600001)(66616009)(86362001)(47076004)(33656002)(52536014)(55016002)(70206006)(9686003)(186003)(7596003)(356005)(336012)(246002)(3480700007)(2906002)(8936002)(8676002)(316002)(6916009)(26005)(7116003)(6506007)(5660300002)(7696005)(133073001)(166393002)(220243001);DIR:OUT;SFP:1101;\nX-MS-Office365-Filtering-Correlation-Id-Prvs: f1edf1ec-c6a2-4f30-c243-08d7e54c0b82\nX-Forefront-PRVS: 03793408BA\nX-Microsoft-Antispam: BCL:0;\nX-Microsoft-Antispam-Message-Info: 2LBIwF3akLwyg1qWCjQmDOZVslLcgpOvI2SE+gob8FrJvsd5ZEjHhcwbLN+JNcrOnB4t+rptcltClnau1g89m5fx8bj1BM9wbbiDReEitpkV+T/Nn5nQ2ZlKKZQR55IUsbOI9C8aPjn72WtshW0gpfOUwSQdgkUNZN/Y00wACc2VF1GqZ49LH7rF7L6N1uklEffElzEPsxumWfMQLc+GacJ+txcHt8LSgUOKprEYjUmadE9TSHh7gvFbErQObueEd98m3sFHMJqeOZHRlLUNElS3LVylZ7hYmvSxdpZiwDlO/0NUrjSoqO2sT0VqmT/49tzSFRN8j2R5qPCoAIgptxwDX67rlCCAkxz8Rb8NRgzNG3opoxNoY8befwNqo2SSnBTr27pF0vRF71+aaAuGYs0bhFzhB9MZ7q9S6sGeQEmG5OdtTQZzNaXgxE7VnE8/Oat78i6uc+JMlP1FfitAdne5CDmGxM45KdO+uGKcwKiHub61u1ZrMoamyE942iYv5Xo1AEth9YSDQl5ahJvwEvR8HL0h8bSBeaBU/ns96FqtA4i7GcRGRuoZwqOOGf1ZHKNd/YZv5RGd1geuThow0UyqQKVUKseV0QyTNbJwyVeYNX5INSfiTbh3LAwhBZS3zwhfHY12Andrel+EbKdd+vLg8Vg9Nuchjk9yMce/EN8=\nX-OriginatorOrg: krohtech.com\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 20 Apr 2020 16:58:30.5108 (UTC)\nX-MS-Exchange-CrossTenant-Network-Message-Id: 0a8e841e-40fb-437d-ae47-08d7e54c0da8\nX-MS-Exchange-CrossTenant-Id: 6043c481-ca7c-4fde-9673-d1bd537ea35d\nX-MS-Exchange-CrossTenant-OriginalAttributedTenantConnectingIp: TenantId=6043c481-ca7c-4fde-9673-d1bd537ea35d;Ip=[104.42.74.121];Helo=[westus1-emailsignatures-cloud.codetwo.com]\nX-MS-Exchange-CrossTenant-FromEntityHeader: HybridOnPrem\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: BN6PR14MB1139\n", 
    "dkim" : "{@justatempdomain.onmicrosoft.com : pass}", 
    "content-ids" : "{\"KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png\":\"attachment1\"}", 
    "to" : "\"test@partner.kroh.tech\" <test@partner.kroh.tech>", 
    "html" : "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" xmlns:m=\"http://schemas.microsoft.com/office/2004/12/omml\" xmlns=\"http://www.w3.org/TR/REC-html40\">\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=us-ascii\">\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\n<style><!--\n/* Font Definitions */\n@font-face\n\t{font-family:\"Cambria Math\";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\n/* Style Definitions */\np.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{margin:0in;\n\tmargin-bottom:.0001pt;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;}\nspan.EmailStyle17\n\t{mso-style-type:personal-compose;\n\tfont-family:\"Calibri\",sans-serif;\n\tcolor:windowtext;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tfont-family:\"Calibri\",sans-serif;}\n@page WordSection1\n\t{size:8.5in 11.0in;\n\tmargin:1.0in 1.0in 1.0in 1.0in;}\ndiv.WordSection1\n\t{page:WordSection1;}\n--></style><!--[if gte mso 9]><xml>\n<o:shapedefaults v:ext=\"edit\" spidmax=\"1026\" />\n</xml><![endif]--><!--[if gte mso 9]><xml>\n<o:shapelayout v:ext=\"edit\">\n<o:idmap v:ext=\"edit\" data=\"1\" />\n</o:shapelayout></xml><![endif]-->\n</head>\n<body lang=\"EN-US\" link=\"#0563C1\" vlink=\"#954F72\">\n<div class=\"WordSection1\">\n<p class=\"MsoNormal\">dsafdasfadsf<o:p></o:p></p>\n</div>\n\n<P \nstyle=\"FONT-SIZE: 10pt; MARGIN-BOTTOM: 5pt; FONT-FAMILY: ARIAL; MARGIN-TOP: 0pt\">\n<TABLE style=\"HEIGHT: 73px; WIDTH: 595px; BACKGROUND-COLOR: white\" cellSpacing=0 \ncellPadding=0 border=0>\n  <TBODY>\n  <TR>\n    <TD \n    style=\"FONT-SIZE: 10pt; FONT-FAMILY: Arial; WIDTH: 100px; COLOR: #3c3c3b; PADDING-LEFT: 8px\" \n    vAlign=middle><A title=https://krohtech.com \n      href=\"https://krohtech.com/\"><IMG style=\"HEIGHT: 118px; WIDTH: 144px\" \n      border=0 alt=\"KrohTech Logo\" \n      src=\"cid:KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png\" \n      width=144 height=118></A></TD>\n    <TD \n    style=\"FONT-SIZE: 8pt; FONT-FAMILY: Arial; WIDTH: 495px; COLOR: #3c3c3b; PADDING-LEFT: 10px; BORDER-LEFT: #c6c6c5 1px solid\" \n    vAlign=middle>\n      <P style=\"FONT-SIZE: 8pt; FONT-FAMILY: Arial\"><STRONG \n      style=\"FONT-SIZE: 10pt\"><FONT style=\"FONT-SIZE: 10pt; COLOR: #0084ff\" \n      color=#3d86ff>Ruby Rubenstahl</FONT></STRONG><SPAN \n      style=\"FONT-SIZE: 10pt\"><BR>Software Solutions Specialist - Principal<BR>KrohTech, \n      LLC<BR>ruby@krohtech.com<BR>Mobile: (330) 719-7494<BR>Web: \n      <A href=\"http://www.krohtech.com\">www.krohtech.com</A></SPAN><SPAN \n      style=\"COLOR: #ffffff\"><BR></SPAN></P></TD></TR></TBODY></TABLE></P>\n<P \nstyle=\"FONT-SIZE: 10pt; MARGIN-BOTTOM: 5pt; FONT-FAMILY: ARIAL; MARGIN-TOP: 0pt\">&nbsp;</P>\n<P \nstyle=\"FONT-SIZE: 10pt; MARGIN-BOTTOM: 5pt; FONT-FAMILY: Arial; MARGIN-TOP: 0px\"></P>\n<P \nstyle=\"FONT-SIZE: 10pt; MARGIN-BOTTOM: 5pt; FONT-FAMILY: ARIAL; MARGIN-TOP: 0pt\">\n<TABLE style=\"HEIGHT: 73px; WIDTH: 595px; BACKGROUND-COLOR: white\" cellSpacing=0 \ncellPadding=0 border=0>\n  <TBODY>\n  <TR>\n    <TD style=\"FONT-SIZE: 10pt; FONT-FAMILY: Arial; WIDTH: 595px\" vAlign=top \n    colSpan=2><SPAN style=\"COLOR: #b20e12\">Reminder: </SPAN><SPAN \n      style=\"FONT-SIZE: 8pt; COLOR: #727272\">Due to the coronavirus outbreak <U \n      style=\"FONT-SIZE: 8pt; COLOR: #727272\">the KrohTech, LLC Office will be \n      closed until May 1st</U>. Employees will be working form home and all \n      non-essential staff travel is suspended.</SPAN></TD></TR>\n  <TR>\n    <TD style=\"FONT-SIZE: 5pt; FONT-FAMILY: Arial; WIDTH: 100px\" \nvAlign=top></TD>\n    <TD \n    style=\"FONT-SIZE: 5pt; FONT-FAMILY: Arial; WIDTH: 495px; PADDING-LEFT: 10px; BORDER-LEFT: #c6c6c5 1px solid\" \n    vAlign=top>&nbsp;</TD></TR></TBODY></TABLE></P></body>\n</html>\n", 
    "from" : "Ruby Rubenstahl <ruby@krohtech.com>", 
    "text" : "dsafdasfadsf\n\n[cid:KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png]<https://krohtech.com/>\n\nRuby Rubenstahl\nSoftware Solutions Specialist - Principal\nKrohTech, LLC\nruby@krohtech.com\nMobile: (330) 719-7494\nWeb: www.krohtech.com<http://www.krohtech.com>\n\n\n\n\nReminder: Due to the coronavirus outbreak the KrohTech, LLC Office will be closed until May 1st. Employees will be working form home and all non-essential staff travel is suspended.\n\n", 
    "sender_ip" : "40.107.93.89", 
    "spam_report" : "Spam detection software, running on the system \"mx0057p1mdw1.sendgrid.net\", has\nidentified this incoming email as possible spam.  The original message\nhas been attached to this so you can view it (if it isn't spam) or label\nsimilar future email.  If you have any questions, see\n@@CONTACT_ADDRESS@@ for details.\n\nContent preview:  dsafdasfadsf [cid:KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png]<https://krohtech.com/>\n   Ruby Rubenstahl Software Solutions Specialist - Principal KrohTech, LLC ruby@krohtech.com\n   Mobile: (330) 719-7494 Web: www.krohtech.com<http://www.krohtech.com> [...]\n   \n\nContent analysis details:   (0.0 points, 5.0 required)\n\n pts rule name              description\n---- ---------------------- --------------------------------------------------\n 0.0 HTML_MESSAGE           BODY: HTML included in message\n 0.0 T_MIME_NO_TEXT         No text body parts\n\n", 
    "envelope" : "{\"to\":[\"test@partner.kroh.tech\"],\"from\":\"ruby@krohtech.com\"}", 
    "attachments" : "1", 
    "subject" : "dasfasdfadsf", 
    "spam_score" : "0.011", 
    "attachment-info" : "{\"attachment1\":{\"filename\":\"KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png\",\"name\":\"KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png\",\"type\":\"image/png\",\"content-id\":\"KrohtechEmailSignatureLogo_59fd705c-ff4e-484f-beee-3f6e22f12ad4.png\"}}", 
    "charsets" : "{\"to\":\"UTF-8\",\"html\":\"us-ascii\",\"subject\":\"UTF-8\",\"from\":\"UTF-8\",\"text\":\"us-ascii\"}", 
    "SPF" : "pass"
}