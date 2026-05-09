/* eslint-disable */
// Japanese learning data — kept beginner-friendly, accurate, and IT-flavored.
// All structures are plain JS so the app works offline as a static page.

// Visual mnemonics — emoji are unicode chars, zero file size. Only added
// where they actually help recall; abstract words intentionally have none.
const EMOJI = {
  // greetings & basics
  "こんにちは": "👋", "おはようございます": "🌅", "こんばんは": "🌙",
  "ありがとうございます": "🙏", "ありがとう、助かりました。": "🙏",
  "すみません": "🙇", "お願いします": "🤲", "さようなら": "👋", "おやすみなさい。": "🌙",
  "はじめまして": "🤝", "よろしくお願いします": "🤝", "また明日。": "👋",
  "お疲れさまです": "💪",
  // pronouns & people
  "私": "🧑", "僕": "👨", "あなた": "👉", "彼": "👨", "彼女": "👩",
  "私たち": "👥", "彼ら": "👥", "彼女たち": "👥", "皆さん": "👥",
  "友達": "🤝", "家族": "👨‍👩‍👧", "学生": "🎓", "先生": "👨‍🏫",
  "エンジニア": "👨‍💻", "プログラマー": "👨‍💻",
  // demonstratives
  "これ": "👉", "それ": "👈", "あれ": "👀", "どれ": "❓",
  "ここ": "📍", "そこ": "📌", "あそこ": "🏞️", "どこ": "❓",
  // question words
  "何": "❓", "いつ": "⏰", "誰": "👤", "なぜ": "🤔", "どうして": "🤔",
  "どう": "❓", "どうやって": "🛠️", "いくら": "💰", "いくつ": "🔢", "何時": "🕒",
  // yes / no
  "はい": "✅", "いいえ": "❌", "そうです": "✅", "違います": "❌",
  "わかりました": "💡", "わかりません": "❓",
  // time
  "今日": "📅", "明日": "📅", "昨日": "📅", "今": "⏱️", "後で": "⏳",
  "月曜日": "🌙", "火曜日": "🔥", "水曜日": "💧", "木曜日": "🌳",
  "金曜日": "💰", "土曜日": "🌍", "日曜日": "☀️",
  // daily
  "水": "💧", "ご飯": "🍚", "お茶": "🍵", "コーヒー": "☕",
  "駅": "🚉", "電車": "🚆", "家": "🏠", "学校": "🏫",
  // work
  "会社": "🏢", "仕事": "💼", "会議": "🗣️", "上司": "👔", "同僚": "🧑‍💼",
  "問題": "⚠️", "質問": "🙋", "答え": "💡",
  // IT
  "コンピュータ": "💻", "パソコン": "💻", "プログラム": "📝", "コード": "👨‍💻",
  "バグ": "🐛", "テスト": "✅", "レビュー": "👀", "ミーティング": "🤝",
  "メール": "📧", "ファイル": "📄", "サーバー": "🖥️", "データ": "📊",
  // verbs
  "食べる": "🍴", "飲む": "🥤", "見る": "👁️", "行く": "🚶➡️",
  "来る": "⬅️🚶", "する": "✨", "書く": "✍️", "読む": "📖",
  "話す": "💬", "聞く": "👂", "ある": "📦", "いる": "🧍",
  "なる": "🔄", "分かる": "💡", "働く": "💼", "直す": "🔧",
  "送る": "📤", "勉強する": "📚",
  // numbers
  "一": "1️⃣", "二": "2️⃣", "三": "3️⃣", "四": "4️⃣", "五": "5️⃣",
  "六": "6️⃣", "七": "7️⃣", "八": "8️⃣", "九": "9️⃣", "十": "🔟",
  "百": "💯", "円": "💴",
  // adjectives
  "いい": "👍", "悪い": "👎", "大きい": "🐘", "小さい": "🐭",
  "新しい": "✨", "古い": "📜", "難しい": "🧩", "簡単": "🎯",
  "速い": "🏃", "遅い": "🐢", "忙しい": "😵‍💫", "楽しい": "😄", "元気": "💪",
  // nouns referenced by chapters
  "本": "📚", "名前": "🪪", "日本語": "🗾"
};

// Nepali translations — lookup keyed by Japanese sentence/phrase.
// The rendering code displays this in the Structure tab so a Nepali speaker
// sees: Japanese ↔ Romaji ↔ English ↔ Nepali (Devanagari + romanized).
// Format: "japanese": "नेपाली (romanized nepali)"
const NEPALI = {
  // ── Foundation ────────────────────────────────────────────
  "私は学生です。": "म विद्यार्थी हुँ। (ma vidyarthi hu)",
  // ── Particle cheat sheet ──────────────────────────────────
  "私は会社で同僚とコーヒーを飲みます。": "म कम्पनीमा सहकर्मीसँग कफी पिउँछु। (ma company ma sahakarmi sanga coffee piuchhu)",
  "コーヒーを飲みます。": "कफी पिउँछु। (coffee piuchhu)",
  "私の本": "मेरो किताब (mero kitab)",
  "東京に行きます。": "टोकियो जान्छु। (Tokyo jaanchhu)",
  "電車で行きます。": "ट्रेनबाट जान्छु। (train bata jaanchhu)",
  "会社から帰ります。": "कम्पनीबाट घर फर्कन्छु। (company bata ghar farkanchhu)",
  "私もエンジニアです。": "म पनि इन्जिनियर हुँ। (ma pani engineer hu)",
  "彼は食べます。": "ऊ खान्छ। (u khanchha)",
  "私はネパール人です。": "म नेपाली हुँ। (ma nepali hu)",
  "彼女は行きます。": "उनी जान्छिन्। (uni janchhin)",
  "食べません。": "खाँदिन। (khadina)",
  "行きません。": "जाँदिन। (jadina)",
  "飲みません。": "पिउँदिन। (piudina)",
  "お金がありません。": "पैसा छैन। (paisa chaina)",
  "問題はありません。": "समस्या छैन। (samasya chaina)",
  "私は学生ではありません。": "म विद्यार्थी होइन। (ma vidyarthi hoina) — formal",
  "私は先生じゃありません。": "म शिक्षक होइन। (ma shikshak hoina) — everyday",
  // ── Identity (A は B です) ────────────────────────────────
  "私はエンジニアです。": "म इन्जिनियर हुँ। (ma engineer hu)",
  "これは本です。": "यो किताब हो। (yo kitab ho)",
  "彼は先生です。": "ऊ शिक्षक हो। (u shikshak ho)",
  "今日は月曜日です。": "आज सोमबार हो। (aja somabar ho)",
  "私の名前はシシルです。": "मेरो नाम शिशिर हो। (mero naam Shishir ho)",
  "田中さんは同僚です。": "तानाका जी सहकर्मी हुनुहुन्छ। (Tanaka-ji sahakarmi hunuhunchha)",
  "あれは新しいパソコンです。": "त्यो नयाँ ल्यापटप हो। (tyo naya laptop ho)",
  // ── Negative identity ─────────────────────────────────────
  "私は学生じゃありません。": "म विद्यार्थी होइन। (ma vidyarthi hoina)",
  "これはバグじゃありません。": "यो बग होइन। (yo bug hoina)",
  "彼女はエンジニアじゃありません。": "उनी इन्जिनियर होइनन्। (uni engineer hoinan)",
  "今日は月曜日じゃありません。": "आज सोमबार होइन। (aja somabar hoina)",
  "あれは私の本じゃありません。": "त्यो मेरो किताब होइन। (tyo mero kitab hoina)",
  "問題は難しくありません。": "समस्या गाह्रो छैन। (samasya garho chaina)",
  "彼は上司じゃありません。": "ऊ हाकिम होइन। (u hakim hoina)",
  // ── Past identity ─────────────────────────────────────────
  "昨日は会議でした。": "हिजो मिटिङ थियो। (hijo meeting thiyo)",
  "私は学生でした。": "म विद्यार्थी थिएँ। (ma vidyarthi thieñ)",
  "彼はプログラマーでした。": "ऊ प्रोग्रामर थियो। (u programmer thiyo)",
  "テストは簡単でした。": "टेस्ट सजिलो थियो। (test sajilo thiyo)",
  "今日は楽しかったです。": "आज रमाइलो थियो। (aja ramailo thiyo)",
  "昨日は忙しかったです。": "हिजो व्यस्त थिएँ। (hijo byasta thieñ)",
  "あの人は同僚でした。": "त्यो मान्छे सहकर्मी थियो। (tyo manchhe sahakarmi thiyo)",
  // ── Present/future verb (ます) ────────────────────────────
  "私はコーヒーを飲みます。": "म कफी पिउँछु। (ma coffee piuchhu)",
  "彼はメールを書きます。": "ऊ इमेल लेख्छ। (u email lekhchha)",
  "毎日コードを書きます。": "हरेक दिन कोड लेख्छु। (harek din code lekhchhu)",
  "彼女は本を読みます。": "उनी किताब पढ्छिन्। (uni kitab padhchhin)",
  "明日、ファイルを送ります。": "भोलि फाइल पठाउँछु। (bholi file pathaunchhu)",
  "私たちは日本語を勉強します。": "हामी जापानी पढ्छौं। (hami japanese padhchhau)",
  "上司はバグを直します。": "हाकिमले बग मिलाउँछ। (hakim le bug milaauchha)",
  // ── Negative verb (ません) ────────────────────────────────
  "私はコーヒーを飲みません。": "म कफी पिउँदिन। (ma coffee piudina)",
  "今日は行きません。": "आज जाँदिन। (aja jadina)",
  "彼はメールを送りません。": "ऊ इमेल पठाउँदैन। (u email pathaudaina)",
  "私は肉を食べません。": "म मासु खान्न। (ma masu khadina)",
  "わかりません。": "बुझ्दिन। (bujhdina)",
  "彼女は日本語を話しません。": "उनी जापानी बोल्दिनन्। (uni japanese boldinan)",
  "明日は働きません。": "भोलि काम गर्दिन। (bholi kaam gardina)",
  // ── Past verb (ました) ────────────────────────────────────
  "バグを直しました。": "बग मिलाएँ। (bug milaae)",
  "メールを送りました。": "इमेल पठाएँ। (email pathaae)",
  "プルリクを送りました。": "पुल रिक्वेस्ट पठाएँ। (pull request pathaae)",
  "彼は会議に行きました。": "ऊ मिटिङमा गयो। (u meeting ma gayo)",
  "昨日、コードを書きました。": "हिजो कोड लेखेँ। (hijo code lekheñ)",
  "ご飯を食べました。": "भात खाएँ। (bhat khaae)",
  "彼女は本を読みました。": "उनीले किताब पढिन्। (uni le kitab padhin)",
  // ── Past negative (ませんでした) ──────────────────────────
  "昨日、会議に行きませんでした。": "हिजो मिटिङमा गइनँ। (hijo meeting ma gainañ)",
  "メールを送りませんでした。": "इमेल पठाइनँ। (email pathainañ)",
  "彼はコードを書きませんでした。": "उसले कोड लेखेन। (us le code lekhena)",
  "今朝、ご飯を食べませんでした。": "आज बिहान भात खाइनँ। (aja bihana bhat khainañ)",
  "わかりませんでした。": "बुझिनँ। (bujhinañ)",
  "彼女は来ませんでした。": "उनी आइनन्। (uni aainan)",
  "昨日は働きませんでした。": "हिजो काम गरिनँ। (hijo kaam garinañ)",
  // ── Continuous (ています) ─────────────────────────────────
  "コードを書いています。": "म कोड लेख्दैछु। (ma code lekhdai chhu)",
  "今、会議をしています。": "अहिले मिटिङमा छु। (ahile meeting ma chhu)",
  "サーバーが落ちています。": "सर्भर डाउन छ। (server down chha)",
  "彼はメールを読んでいます。": "ऊ इमेल पढ्दैछ। (u email padhdai chha)",
  "日本語を勉強しています。": "म जापानी पढ्दैछु। (ma japanese padhdai chhu)",
  "テストが失敗しています。": "टेस्ट फेल भइरहेको छ। (test fail bhairaheko chha)",
  "彼女は電話で話しています。": "उनी फोनमा कुरा गर्दैछिन्। (uni phone ma kura gardai chhin)",
  // ── i-adjective ────────────────────────────────────────────
  "このバグは難しいです。": "यो बग गाह्रो छ। (yo bug garho chha)",
  "コーヒーは熱いです。": "कफी तातो छ। (coffee tato chha)",
  "今日は忙しいです。": "आज व्यस्त छु। (aja byasta chhu)",
  "この本は面白いです。": "यो किताब रोचक छ। (yo kitab rochak chha)",
  "サーバーは速いです。": "सर्भर छिटो छ। (server chhito chha)",
  "この問題は難しくないです。": "यो समस्या गाह्रो छैन। (yo samasya garho chaina)",
  "昨日は楽しかったです。": "हिजो रमाइलो थियो। (hijo ramailo thiyo)",
  // ── na-adjective ──────────────────────────────────────────
  "この問題は簡単です。": "यो समस्या सजिलो छ। (yo samasya sajilo chha)",
  "彼は元気です。": "ऊ सञ्चै छ। (u sanchai chha)",
  "彼女は親切です。": "उनी दयालु छिन्। (uni dayalu chhin)",
  "この部屋は静かです。": "यो कोठा शान्त छ। (yo kotha shanta chha)",
  "彼はとても有名です。": "ऊ धेरै प्रसिद्ध छ। (u dherai prasiddha chha)",
  "この駅は便利です。": "यो स्टेसन सुविधाजनक छ। (yo station suvidhajanak chha)",
  "テストは簡単じゃありません。": "टेस्ट सजिलो छैन। (test sajilo chaina)",
  // ── Yes/No question ──────────────────────────────────────
  "学生ですか？": "विद्यार्थी हो? (vidyarthi ho?)",
  "これはバグですか？": "यो बग हो? (yo bug ho?)",
  "今、忙しいですか？": "अहिले व्यस्त हुनुहुन्छ? (ahile byasta hunuhunchha?)",
  "コーヒーを飲みますか？": "कफी पिउनुहुन्छ? (coffee piunuhunchha?)",
  "会議は終わりましたか？": "मिटिङ सकियो? (meeting sakkiyo?)",
  "彼は同僚ですか？": "ऊ सहकर्मी हो? (u sahakarmi ho?)",
  "明日、来ますか？": "भोलि आउनुहुन्छ? (bholi aaunuhunchha?)",
  // ── Wh-questions ──────────────────────────────────────────
  "これは何ですか？": "यो के हो? (yo k ho?)",
  "名前は何ですか？": "नाम के हो? (naam k ho?)",
  "あの人は誰ですか？": "त्यो मान्छे को हो? (tyo manchhe ko ho?)",
  "駅はどこですか？": "स्टेसन कहाँ छ? (station kahaa chha?)",
  "会議はいつですか？": "मिटिङ कहिले हो? (meeting kahile ho?)",
  "これはいくらですか？": "यो कति हो? (yo kati ho?)",
  "どうしてバグが起きましたか？": "बग किन आयो? (bug kina aayo?)",
  // ── Answers ───────────────────────────────────────────────
  "はい、エンジニアです。": "हो, म इन्जिनियर हुँ। (ho, ma engineer hu)",
  "いいえ、学生じゃありません。": "होइन, विद्यार्थी होइन। (hoina, vidyarthi hoina)",
  "はい、そうです。": "हो, त्यही हो। (ho, tyahi ho)",
  "いいえ、違います。": "होइन, फरक छ। (hoina, farak chha)",
  "はい、わかりました。": "हो, बुझेँ। (ho, bujheñ)",
  "いいえ、まだです。": "होइन, अहिलेसम्म होइन। (hoina, ahile samma hoina)",
  "はい、元気です。": "हो, सञ्चै छु। (ho, sanchai chhu)",
  // ── 1st person ────────────────────────────────────────────
  "私はシシルです。": "म शिशिर हुँ। (ma Shishir hu)",
  "僕はエンジニアです。": "म इन्जिनियर हुँ। (ma engineer hu — purush, anaupacharik)",
  "ネパールから来ました。": "नेपालबाट आएँ। (Nepal bata aaye)",
  "私たちのチームです。": "हाम्रो टिम हो। (hamro team ho)",
  "自分でやります。": "आफै गर्छु। (aafai garchhu)",
  "コードレビューをお願いします。": "कृपया कोड रिभ्यु गरिदिनुहोस्। (kripaya code review garidinuhos)",
  // ── 2nd person ────────────────────────────────────────────
  "田中さんはエンジニアですか？": "तानाका जी इन्जिनियर हुनुहुन्छ? (Tanaka-ji engineer hunuhunchha?)",
  "シシルさんはネパール人ですか？": "शिशिर जी नेपाली हुनुहुन्छ? (Shishir-ji nepali hunuhunchha?)",
  "山田さん、ちょっといいですか？": "यामादा जी, एक छिन हुन्छ? (Yamada-ji, ek chhin hunchha?)",
  "お名前は何ですか？": "तपाईंको नाम के हो? (tapaiñ ko naam k ho?)",
  "お元気ですか？": "सञ्चै हुनुहुन्छ? (sanchai hunuhunchha?)",
  "田中さんの会社はどこですか？": "तानाका जीको कम्पनी कहाँ छ? (Tanaka-ji ko company kahaa chha?)",
  // ── 3rd person ────────────────────────────────────────────
  "彼はエンジニアです。": "ऊ इन्जिनियर हो। (u engineer ho)",
  "山田さんは上司です。": "यामादा जी हाकिम हुन्। (Yamada-ji hakim hun)",
  "彼らは会議中です。": "उनीहरू मिटिङमा छन्। (uniharu meeting ma chhan)",
  "彼女はコードを書いています。": "उनी कोड लेख्दैछिन्। (uni code lekhdai chhin)",
  "田中さんは会議に行きました。": "तानाका जी मिटिङमा जानुभयो। (Tanaka-ji meeting ma jaanubhayo)",
  // ── たい (want) ───────────────────────────────────────────
  "コーヒーを飲みたいです。": "कफी पिउन मन छ। (coffee piuna man chha)",
  "日本語を話したいです。": "जापानी बोल्न मन छ। (japanese bolna man chha)",
  "早く帰りたいです。": "चाँडै घर जान मन छ। (chhito ghar jaana man chha)",
  "ラーメンを食べたいです。": "रामेन खान मन छ। (ramen khana man chha)",
  "今日は働きたくないです。": "आज काम गर्न मन छैन। (aja kaam garna man chaina)",
  "日本に行きたかったです。": "जापान जान मन थियो। (japan jaana man thiyo)",
  "新しいパソコンを買いたいです。": "नयाँ ल्यापटप किन्न मन छ। (naya laptop kinna man chha)",
  // ── てください (request) ──────────────────────────────────
  "ゆっくり話してください。": "बिस्तारै बोल्नुहोस्। (bistarai bolnuhos)",
  "もう一度説明してください。": "फेरि एकपटक व्याख्या गर्नुहोस्। (pheri ek choti vyakhya garnuhos)",
  "このファイルを送ってください。": "यो फाइल पठाउनुहोस्। (yo file pathaaunuhos)",
  "ちょっと待ってください。": "एक छिन पर्खनुहोस्। (ek chhin parkhanuhos)",
  "ここに名前を書いてください。": "यहाँ नाम लेख्नुहोस्। (yahaa naam lekhnuhos)",
  "もう一度、見てください。": "फेरि हेरिदिनुहोस्। (pheri heridinuhos)",
  "コードをレビューしてください。": "कोड रिभ्यु गर्नुहोस्। (code review garnuhos)",
  // ── ませんか / ましょう ──────────────────────────────────
  "お昼ごはんを食べに行きませんか？": "खाजा खान जाउँ? (khaja khana jaau?)",
  "コーヒーを飲みませんか？": "कफी पिउँ? (coffee piau?)",
  "一緒に行きましょう。": "सँगै जाउँ। (sangai jaau)",
  "会議を始めましょう。": "मिटिङ सुरु गरौं। (meeting suru garaau)",
  "明日、会いましょうか？": "भोलि भेटौं? (bholi bhetaau?)",
  "テストを書きませんか？": "टेस्ट लेखौं? (test lekhaau?)",
  "少し休みましょう。": "अलि आराम गरौं। (ali aaram garaau)",
  // ── あります / います ────────────────────────────────────
  "会議室にパソコンがあります。": "मिटिङ रुममा ल्यापटप छ। (meeting room ma laptop chha)",
  "問題があります。": "समस्या छ। (samasya chha)",
  "オフィスに同僚がいます。": "अफिसमा सहकर्मी छ। (office ma sahakarmi chha)",
  "家に犬がいます。": "घरमा कुकुर छ। (ghar ma kukur chha)",
  "質問はありますか？": "प्रश्न छ? (prashna chha?)",
  "上司は今、いません。": "हाकिम अहिले छैनन्। (hakim ahile chhainan)",
  "昨日、会議がありました。": "हिजो मिटिङ थियो। (hijo meeting thiyo)",
  // ── の (possessive) ──────────────────────────────────────
  "私の会社": "मेरो कम्पनी (mero company)",
  "シシルさんのコード": "शिशिर जीको कोड (Shishir-ji ko code)",
  "日本語の本": "जापानी भाषाको किताब (japanese bhasha ko kitab)",
  "私の家族の写真": "मेरो परिवारको फोटो (mero pariwar ko photo)",
  "会社の同僚": "कम्पनीको सहकर्मी (company ko sahakarmi)",
  "今日のミーティング": "आजको मिटिङ (aja ko meeting)",
  "あれは私のパソコンです。": "त्यो मेरो ल्यापटप हो। (tyo mero laptop ho)",
  // ── で / に (location) ────────────────────────────────────
  "会社で働きます。": "कम्पनीमा काम गर्छु। (company ma kaam garchhu)",
  "東京に行きます。": "टोकियो जान्छु। (Tokyo jaanchhu)",
  "家にいます。": "घरमा छु। (ghar ma chhu)",
  "カフェでコーヒーを飲みます。": "क्याफेमा कफी पिउँछु। (cafe ma coffee piuchhu)",
  "駅で会いましょう。": "स्टेसनमा भेटौं। (station ma bhetaau)",
  "会議に行きました。": "मिटिङमा गएँ। (meeting ma gaae)",
  "学校で日本語を勉強します。": "स्कूलमा जापानी पढ्छु। (school ma japanese padhchhu)",
  // ── から (because) ───────────────────────────────────────
  "忙しいから、行きません。": "व्यस्त भएकोले जाँदिन। (byasta bhaekole jadina)",
  "サーバーが落ちているから、テストできません。": "सर्भर डाउन भएकोले टेस्ट गर्न सकिन्न। (server down bhaekole test garna sakinna)",
  "明日は休みですから、ゆっくりします。": "भोलि बिदा भएकोले आराम गर्छु। (bholi bida bhaekole aaram garchhu)",
  "雨が降っているから、家にいます。": "पानी परिरहेकोले घरमै छु। (pani pariraheko le ghar mai chhu)",
  "難しいから、ゆっくり話してください。": "गाह्रो भएकोले बिस्तारै बोल्नुहोस्। (garho bhaekole bistarai bolnuhos)",
  "バグがあるから、リリースできません。": "बग भएकोले रिलिज गर्न सकिन्न। (bug bhaekole release garna sakinna)",
  "今日は会議があるから、早く来ました。": "आज मिटिङ भएकोले चाँडै आएँ। (aja meeting bhaekole chhito aaye)",
  // ── て-form linking ──────────────────────────────────────
  "コードを書いて、テストします。": "कोड लेखेर टेस्ट गर्छु। (code lekhera test garchhu)",
  "朝起きて、コーヒーを飲みます。": "बिहान उठेर कफी पिउँछु। (bihana uthera coffee piuchhu)",
  "駅に行って、電車に乗ります。": "स्टेसन गएर ट्रेन चढ्छु। (station gaaera train chadhchhu)",
  "バグを直して、プルリクを送りました。": "बग मिलाएर पुल रिक्वेस्ट पठाएँ। (bug milaaera pull request pathaae)",
  "本を読んで、勉強します。": "किताब पढेर पढ्छु। (kitab padhera padhchhu)",
  "会議に行って、報告しました。": "मिटिङमा गएर रिपोर्ट गरेँ। (meeting ma gaaera report gareñ)",
  "電話して、メールも送りました。": "फोन गरेर इमेल पनि पठाएँ। (phone garera email pani pathaae)",
  // ── 7th examples (Main + 7 = 8 → perfect 2x4 grid) ──
  "私は本を読みます。": "म किताब पढ्छु। (ma kitab padhchhu)",
  "時間がありません。": "समय छैन। (samaya chaina)",
  "私の家は東京です。": "मेरो घर टोकियोमा छ। (mero ghar Tokyo ma chha)",
  "これは私のメールじゃありません。": "यो मेरो इमेल होइन। (yo mero email hoina)",
  "先週は雨でした。": "गत हप्ता पानी पर्‍यो। (gata hapta pani paryo)",
  "毎朝、お茶を飲みます。": "हरेक बिहान चिया पिउँछु। (harek bihana chiya piuchhu)",
  "私はビールを飲みません。": "म बियर पिउँदिन। (ma beer piudina)",
  "友達に会いました。": "साथीलाई भेटेँ। (sathi lai bheteñ)",
  "パーティーに行きませんでした。": "पार्टीमा गइनँ। (party ma gainañ)",
  "雨が降っています。": "पानी परिरहेको छ। (pani pariraheko chha)",
  "駅は近いです。": "स्टेसन नजिक छ। (station najik chha)",
  "この仕事は大変です。": "यो काम गाह्रो छ। (yo kaam garho chha)",
  "日本語が分かりますか？": "जापानी भाषा बुझ्नुहुन्छ? (japanese bhasha bujhnuhunchha?)",
  "何時に来ますか？": "कति बजे आउनुहुन्छ? (kati baje aaunuhunchha?)",
  "はい、お願いします。": "हो, कृपया। (ho, kripaya)",
  "私は東京に住んでいます。": "म टोकियोमा बस्छु। (ma Tokyo ma baschhu)",
  "鈴木さん、何を飲みますか？": "सुजुकी जी, के पिउनुहुन्छ? (Suzuki-ji, k piunuhunchha?)",
  "田中さんは英語が上手です。": "तानाका जी अंग्रेजीमा निपुण हुनुहुन्छ। (Tanaka-ji english ma nipun hunuhunchha)",
  "映画を見たいです。": "मुभी हेर्न मन छ। (movie hernā man chha)",
  "電話をしてください。": "फोन गर्नुहोस्। (phone garnuhos)",
  "公園を散歩しませんか？": "पार्कमा घुम्न जाउँ? (park ma ghumna jaau?)",
  "駅の近くにカフェがあります。": "स्टेसनको नजिकमा क्याफे छ। (station ko najik ma cafe chha)",
  "山田さんの仕事": "यामादा जीको काम (Yamada-ji ko kaam)",
  "図書館で勉強します。": "पुस्तकालयमा पढ्छु। (pustakalaya ma padhchhu)",
  "寒いから、コートを着ます。": "जाडो भएकोले कोट लगाउँछु। (jado bhaekole coat lagaauchhu)",
  "スーパーに行って、肉を買いました。": "सुपरमार्केटमा गएर मासु किनेँ। (supermarket ma gaaera masu kineñ)",
  // ── Expansion: more particles + counters + conjugation refs ──
  "友達と昼ご飯を食べました。": "साथीसँग खाजा खाएँ। (sathi sanga khaja khaae)",
  "田中さんと話しました。": "तानाका जीसँग कुरा गरेँ। (Tanaka-ji sanga kura gareñ)",
  "パンと牛乳を買いました。": "रोटी र दूध किनेँ। (roti ra dudh kineñ)",
  "妻と子供がいます。": "श्रीमती र छोराछोरी छन्। (shrimati ra chhoraachhori chhan)",
  "母と買い物に行きます。": "आमासँग किनमेलमा जान्छु। (aama sanga kinmel ma jaanchhu)",
  "同僚と会議をします。": "सहकर्मीसँग मिटिङ गर्छु। (sahakarmi sanga meeting garchhu)",
  "犬と猫が好きです。": "कुकुर र बिरालो मन पर्छ। (kukur ra biralo man parchha)",
  "先生と一緒に勉強します。": "गुरुसँग सँगै पढ्छु। (guru sanga sangai padhchhu)",
  "東京へ行きます。": "टोकियो तर्फ जान्छु। (Tokyo tarpha jaanchhu)",
  "学校へ向かいます。": "स्कूलतिर लाग्छु। (school tira laagchhu)",
  "家へ帰ります。": "घरतिर फर्कन्छु। (ghar tira farkanchhu)",
  "海外へ旅行します。": "विदेशतिर यात्रा गर्छु। (videsh tira yatra garchhu)",
  "日本へようこそ。": "जापानमा स्वागत छ। (Japan ma swagat chha)",
  "友達への手紙": "साथीलाई पठाइने पत्र (sathi lai pathaaine patra)",
  "駅へ走ります。": "स्टेसनतिर दौडन्छु। (station tira daudanchhu)",
  "オフィスへ来てください。": "अफिसमा आउनुहोस्। (office ma aaunuhos)",
  "りんごやバナナを買いました。": "स्याउ, केरा (आदि) किनेँ। (syau, kera aadi kineñ)",
  "東京や大阪に行きました。": "टोकियो, ओसाका (आदि) गएँ। (Tokyo Osaka aadi gaeñ)",
  "ペンや紙が必要です。": "कलम कागज (आदि) चाहिन्छ। (kalam kagaj aadi chahinchha)",
  "犬や猫などが好きです。": "कुकुर बिरालो आदि मन पर्छ। (kukur biralo aadi man parchha)",
  "寿司やラーメンを食べました。": "सुसी, रामेन (आदि) खाएँ। (sushi ramen aadi khaaeñ)",
  "田中さんや山田さんが来ました。": "तानाका, यामादा जी (आदि) आए। (Tanaka Yamada-ji aadi aae)",
  "ノートやペンを持ってきます。": "कापी कलम (आदि) लिएर आउँछु। (kapi kalam aadi lieyera aaunchhu)",
  "サーバーやデータベースを管理します。": "सर्भर डाटाबेस आदि व्यवस्थापन गर्छु। (server database aadi vyavasthapan garchhu)",
  "もう十時ですよ。": "अहिले १० बज्यो नि! (ahile 10 bajyo ni!)",
  "これは私の本ですよ。": "यो मेरो किताब हो नि! (yo mero kitab ho ni!)",
  "バグじゃないですよ。": "बग होइन नि! (bug hoina ni!)",
  "会議は明日ですよ。": "मिटिङ भोलि हो नि! (meeting bholi ho ni!)",
  "大丈夫ですよ。": "ठीक छ नि! (thik chha ni!)",
  "このコードは正しいですよ。": "यो कोड सही हो नि! (yo code sahi ho ni!)",
  "サーバーは落ちてますよ。": "सर्भर डाउन छ नि! (server down chha ni!)",
  "それは違いますよ。": "त्यो गलत हो नि! (tyo galat ho ni!)",
  "今日はいい天気ですね。": "आज मौसम राम्रो छ, होइन र? (aja mausam ramro chha, hoina ra?)",
  "美味しいですね。": "स्वादिलो छ, होइन र? (swadilo chha, hoina ra?)",
  "そうですね。": "हो, त्यस्तै हो। (ho, tyastai ho)",
  "このコードは難しいですね。": "यो कोड गाह्रो छ, होइन र? (yo code garho chha, hoina ra?)",
  "田中さんは親切ですね。": "तानाका जी दयालु हुनुहुन्छ, होइन र? (Tanaka-ji dayalu hunuhunchha, hoina ra?)",
  "もう遅いですね。": "अब ढिलो भयो, होइन र? (aba dhilo bhayo, hoina ra?)",
  "疲れましたね。": "थकाइ लाग्यो, होइन र? (thakai laagyo, hoina ra?)",
  "いい天気ですね、今日は。": "आज मौसम राम्रो छ है। (aja mausam ramro chha hai)",
  "忙しいので、行けません。": "व्यस्त भएकोले जान सक्दिन। (byasta bhaekole jaana sakdina)",
  "雨が降っているので、家にいます。": "पानी परिरहेकोले घरमै छु। (pani pariraheko le ghar mai chhu)",
  "風邪を引いたので、休みます。": "रुघा लागेकोले बिदा बस्छु। (rugha laagekole bida baschhu)",
  "電車が遅れたので、遅刻しました。": "ट्रेन ढिलो भएकोले ढिलो भएँ। (train dhilo bhaekole dhilo bhaeñ)",
  "時間がないので、急ぎます。": "समय नभएकोले हतारिन्छु। (samaya nabhaekole hataarinchhu)",
  "明日は休みなので、ゆっくりします。": "भोलि बिदा भएकोले आराम गर्छु। (bholi bida bhaekole aaram garchhu)",
  "バグがあるので、リリースできません。": "बग भएकोले रिलिज गर्न सकिन्न। (bug bhaekole release garna sakinna)",
  "会議があるので、早く来ました。": "मिटिङ भएकोले चाँडै आएँ। (meeting bhaekole chhito aaeñ)",
  "寒いけど、行きます。": "जाडो छ तर पनि जान्छु। (jado chha tara pani jaanchhu)",
  "高いけど、買います。": "महँगो छ तर पनि किन्छु। (mahango chha tara pani kinchhu)",
  "難しいけど、面白いです。": "गाह्रो छ तर रोचक छ। (garho chha tara rochak chha)",
  "行きたいけど、忙しいです。": "जान मन छ तर व्यस्त छु। (jaana man chha tara byasta chhu)",
  "雨ですが、出かけます。": "पानी परिरहेको छ तर निस्कन्छु। (pani pariraheko chha tara niskanchhu)",
  "簡単ですが、時間がかかります。": "सजिलो छ तर समय लाग्छ। (sajilo chha tara samaya laagchha)",
  "コードはできたけど、テストはまだです。": "कोड त भयो तर टेस्ट बाँकी छ। (code ta bhayo tara test baaki chha)",
  "わかったけど、ちょっと違います。": "बुझेँ तर अलि फरक छ। (bujheñ tara ali farak chha)",
  "りんごを一つください。": "एउटा स्याउ दिनुहोस्। (euta syau dinuhos)",
  "子供が二人います。": "दुई जना छोराछोरी छन्। (dui jana chhoraachhori chhan)",
  "紙を三枚ください。": "तीन पाना कागज दिनुहोस्। (teen paana kagaj dinuhos)",
  "ペンが五本あります。": "पाँच ओटा कलम छ। (paach ota kalam chha)",
  "りんごを四個買いました。": "चार ओटा स्याउ किनेँ। (chaar ota syau kineñ)",
  "二時間勉強しました。": "दुई घन्टा पढेँ। (dui ghanta padheñ)",
  "三十分待ちました。": "तीस मिनेट कुरेँ। (tees minute kureñ)",
  "コーヒーを一杯お願いします。": "एक कप कफी कृपया। (ek cup coffee kripaya)",
  "飲む → 飲みます (drink, present polite)": "पिउनु → पिउँछु (नम्र) — Group 1",
  "食べる → 食べます": "खानु → खान्छु (नम्र) — Group 2",
  "する → します": "गर्नु → गर्छु (अनियमित) — Group 3",
  "来る → 来ます": "आउनु → आउँछु (अनियमित) — Group 3",
  "書く → 書きます": "लेख्नु → लेख्छु — Group 1",
  "見る → 見ます": "हेर्नु → हेर्छु — Group 2",
  "行く → 行きました (past)": "जानु → गएँ (विगत)",
  "話す → 話しません (negative)": "बोल्नु → बोल्दिन (नकारात्मक)",
  "大きい → 大きくない (negative)": "ठूलो → सानो होइन (नकारात्मक)",
  "高い → 高かった (past)": "महँगो → महँगो थियो (विगत)",
  "難しい → 難しくなかった (past neg)": "गाह्रो → गाह्रो थिएन (विगत नकारात्मक)",
  "静か → 静かじゃない (negative)": "शान्त → शान्त होइन (नकारात्मक)",
  "元気 → 元気でした (past)": "सञ्चै → सञ्चै थिएँ (विगत)",
  "親切 → 親切じゃなかった (past neg)": "दयालु → दयालु थिएन (विगत नकारात्मक)",
  "いい → よくない (irregular negative)": "राम्रो → राम्रो छैन (अनियमित नकारात्मक)",
  "綺麗 → 綺麗な部屋 (modifying noun)": "सफा → सफा कोठा (नाम संशोधन)",
  // ── Expansion: words/sentences/conversations ──
  "もしもし、田中です。": "हेलो, तानाका हुँ। (hello, Tanaka hu)",
  "今、お時間よろしいですか？": "अहिले समय छ? (ahile samaya chha?)",
  "後でかけ直します。": "पछि फेरि फोन गर्छु। (pachhi pheri phone garchhu)",
  "お世話になっております。": "सधैं सहयोगको लागि धन्यवाद। (formal email opener)",
  "よろしくお願いいたします。": "धन्यवाद। (kripaya — formal closer)",
  "確認お願いします。": "कृपया हेरिदिनुहोस्। (kripaya heridinuhos)",
  "これをください。": "यो दिनुहोस्। (yo dinuhos)",
  "袋はいりません。": "झोला चाहिँदैन। (jhola chaahidaina)",
  "クレジットカードで払います。": "क्रेडिट कार्डले तिर्छु। (credit card le tirchhu)",
  "頭が痛いです。": "टाउको दुख्छ। (taauko dukhchha)",
  "熱があります。": "ज्वरो आएको छ। (jworo aaeko chha)",
  "病院はどこですか？": "अस्पताल कहाँ छ? (aspatal kahaa chha?)",
  "ご迷惑をおかけしました。": "दुख दिएकोमा माफ चाहन्छु। (formal apology)",
  "申し訳ございません。": "धेरै माफी चाहन्छु। (very formal apology)",
  "本当にすみません。": "साँच्चिकै माफ गर्नुहोस्। (saachchikai maaf garnuhos)",
  "やった！": "भयो! / मिलियो! (bhayo! / miliyo!)",
  "本当？": "साँच्चै? (saachchai?)",
  "なるほど。": "ए, बुझेँ। (e, bujheñ)",
  "そうそう。": "हो हो। (ho ho)",
  "切符を一枚ください。": "एक टिकट दिनुहोस्। (ek ticket dinuhos)",
  "次の電車は何時ですか？": "अर्को ट्रेन कति बजे छ? (arko train kati baje chha?)",
  "ホテルを予約しました。": "होटल बुक गरेँ। (hotel book gareñ)",
  "確認します。": "हेर्छु / जाँच्छु। (herchhu / jaanchhu)",
  "デプロイしました。": "डिप्लोय गरेँ। (deploy gareñ)",
  "本番環境で問題が起きています。": "प्रोडक्सनमा समस्या आइरहेको छ। (production ma samasya aairaheko chha)",
  "もしもし、ABC会社です。": "हेलो, ABC कम्पनी हो। (hello, ABC company ho)",
  "田中ですが、山田さんお願いします。": "तानाका हुँ, यामादा जीसँग कुरा गर्न पाऊँ? (Tanaka hu, Yamada-ji sanga kura garna paauñ?)",
  "少々お待ちください。": "एक छिन पर्खनुहोस्। (ek chhin parkhanuhos)",
  "すみません、山田は今、席を外しております。": "माफ गर्नुहोस्, यामादा अहिले डेस्कमा हुनुहुन्न। (humble form)",
  "では、後でかけ直します。": "त्यसो भए पछि फोन गर्छु। (tyaso bhae pachhi phone garchhu)",
  "ありがとうございます。失礼いたします。": "धन्यवाद। नमस्कार। (formal phone close)",
  "山田様": "श्रीयामादा (Shree Yamada — formal recipient)",
  "ABC会社のシシルです。": "ABC कम्पनीको शिशिर हुँ। (ABC company ko Shishir hu)",
  "プルリクを送りましたので、ご確認お願いいたします。": "पुल रिक्वेस्ट पठाएकोले कृपया हेरिदिनुहोस्। (pull request pathaaekole kripaya heridinuhos)",
  "シシル": "शिशिर (Shishir)",
  "いらっしゃいませ。": "स्वागत छ। (swagat chha)",
  "これとこれをお願いします。": "यो र यो दिनुहोस्। (yo ra yo dinuhos)",
  "お弁当を温めますか？": "ओबेन्तो तातो पारिदिऊँ? (obento taato paaridiauñ?)",
  "はい、お願いします。": "हो, कृपया। (ho, kripaya)",
  "袋は要りますか？": "झोला चाहिन्छ? (jhola chahinchha?)",
  "いいえ、大丈夫です。": "होइन, ठीक छ। (hoina, thik chha)",
  "六百円になります。": "६०० येन हुन्छ। (600 yen hunchha)",
  "クレジットカードで。": "क्रेडिट कार्डले। (credit card le)",
  "どうしましたか？": "के भयो? (k bhayo?)",
  "頭がとても痛いです。": "टाउको धेरै दुख्छ। (taauko dherai dukhchha)",
  "いつからですか？": "कहिलेदेखि? (kahile dekhi?)",
  "昨日からです。": "हिजोदेखि। (hijo dekhi)",
  "熱はありますか？": "ज्वरो आएको छ? (jworo aaeko chha?)",
  "はい、少し。": "हो, अलिकति। (ho, alikati)",
  "薬を出します。": "औषधि दिन्छु। (aushadi dinchhu)",
  "おっす！元気？": "हे! सञ्चै? (he! sanchai?)",
  "うん、元気だよ。": "हो, सञ्चै छु। (ho, sanchai chhu) — casual",
  "週末、何する？": "विकेन्डमा के गर्ने? (weekend ma k garne?)",
  "映画を見たい。": "मुभी हेर्न मन छ। (movie hernā man chha)",
  "いいね！一緒に行こう。": "ठीक छ! सँगै जाऔं। (thik chha! sangai jaaauñ)"
};

const DATA = {
  hiragana: [
    // group 'a' = vowels, 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w' / 'n', 'g/z/d/b/p' = (han)dakuten
    { ch: "あ", ro: "a",  group: "a" }, { ch: "い", ro: "i",  group: "a" }, { ch: "う", ro: "u",  group: "a" }, { ch: "え", ro: "e",  group: "a" }, { ch: "お", ro: "o",  group: "a" },
    { ch: "か", ro: "ka", group: "k" }, { ch: "き", ro: "ki", group: "k" }, { ch: "く", ro: "ku", group: "k" }, { ch: "け", ro: "ke", group: "k" }, { ch: "こ", ro: "ko", group: "k" },
    { ch: "さ", ro: "sa", group: "s" }, { ch: "し", ro: "shi",group: "s" }, { ch: "す", ro: "su", group: "s" }, { ch: "せ", ro: "se", group: "s" }, { ch: "そ", ro: "so", group: "s" },
    { ch: "た", ro: "ta", group: "t" }, { ch: "ち", ro: "chi",group: "t" }, { ch: "つ", ro: "tsu",group: "t" }, { ch: "て", ro: "te", group: "t" }, { ch: "と", ro: "to", group: "t" },
    { ch: "な", ro: "na", group: "n" }, { ch: "に", ro: "ni", group: "n" }, { ch: "ぬ", ro: "nu", group: "n" }, { ch: "ね", ro: "ne", group: "n" }, { ch: "の", ro: "no", group: "n" },
    { ch: "は", ro: "ha", group: "h" }, { ch: "ひ", ro: "hi", group: "h" }, { ch: "ふ", ro: "fu", group: "h" }, { ch: "へ", ro: "he", group: "h" }, { ch: "ほ", ro: "ho", group: "h" },
    { ch: "ま", ro: "ma", group: "m" }, { ch: "み", ro: "mi", group: "m" }, { ch: "む", ro: "mu", group: "m" }, { ch: "め", ro: "me", group: "m" }, { ch: "も", ro: "mo", group: "m" },
    { ch: "や", ro: "ya", group: "y" }, { ch: "ゆ", ro: "yu", group: "y" }, { ch: "よ", ro: "yo", group: "y" },
    { ch: "ら", ro: "ra", group: "r" }, { ch: "り", ro: "ri", group: "r" }, { ch: "る", ro: "ru", group: "r" }, { ch: "れ", ro: "re", group: "r" }, { ch: "ろ", ro: "ro", group: "r" },
    { ch: "わ", ro: "wa", group: "w" }, { ch: "を", ro: "wo (o)", group: "w" }, { ch: "ん", ro: "n",  group: "n*" },
    // dakuten / handakuten
    { ch: "が", ro: "ga", group: "g" }, { ch: "ぎ", ro: "gi", group: "g" }, { ch: "ぐ", ro: "gu", group: "g" }, { ch: "げ", ro: "ge", group: "g" }, { ch: "ご", ro: "go", group: "g" },
    { ch: "ざ", ro: "za", group: "z" }, { ch: "じ", ro: "ji", group: "z" }, { ch: "ず", ro: "zu", group: "z" }, { ch: "ぜ", ro: "ze", group: "z" }, { ch: "ぞ", ro: "zo", group: "z" },
    { ch: "だ", ro: "da", group: "d" }, { ch: "ぢ", ro: "ji", group: "d" }, { ch: "づ", ro: "zu", group: "d" }, { ch: "で", ro: "de", group: "d" }, { ch: "ど", ro: "do", group: "d" },
    { ch: "ば", ro: "ba", group: "b" }, { ch: "び", ro: "bi", group: "b" }, { ch: "ぶ", ro: "bu", group: "b" }, { ch: "べ", ro: "be", group: "b" }, { ch: "ぼ", ro: "bo", group: "b" },
    { ch: "ぱ", ro: "pa", group: "p" }, { ch: "ぴ", ro: "pi", group: "p" }, { ch: "ぷ", ro: "pu", group: "p" }, { ch: "ぺ", ro: "pe", group: "p" }, { ch: "ぽ", ro: "po", group: "p" },
    // a few common yōon
    { ch: "きゃ", ro: "kya", group: "yōon" }, { ch: "きゅ", ro: "kyu", group: "yōon" }, { ch: "きょ", ro: "kyo", group: "yōon" },
    { ch: "しゃ", ro: "sha", group: "yōon" }, { ch: "しゅ", ro: "shu", group: "yōon" }, { ch: "しょ", ro: "sho", group: "yōon" },
    { ch: "ちゃ", ro: "cha", group: "yōon" }, { ch: "ちゅ", ro: "chu", group: "yōon" }, { ch: "ちょ", ro: "cho", group: "yōon" },
    { ch: "にゃ", ro: "nya", group: "yōon" }, { ch: "にゅ", ro: "nyu", group: "yōon" }, { ch: "にょ", ro: "nyo", group: "yōon" },
    { ch: "りゃ", ro: "rya", group: "yōon" }, { ch: "りゅ", ro: "ryu", group: "yōon" }, { ch: "りょ", ro: "ryo", group: "yōon" }
  ],

  katakana: [
    { ch: "ア", ro: "a",  group: "a" }, { ch: "イ", ro: "i",  group: "a" }, { ch: "ウ", ro: "u",  group: "a" }, { ch: "エ", ro: "e",  group: "a" }, { ch: "オ", ro: "o",  group: "a" },
    { ch: "カ", ro: "ka", group: "k" }, { ch: "キ", ro: "ki", group: "k" }, { ch: "ク", ro: "ku", group: "k" }, { ch: "ケ", ro: "ke", group: "k" }, { ch: "コ", ro: "ko", group: "k" },
    { ch: "サ", ro: "sa", group: "s" }, { ch: "シ", ro: "shi",group: "s" }, { ch: "ス", ro: "su", group: "s" }, { ch: "セ", ro: "se", group: "s" }, { ch: "ソ", ro: "so", group: "s" },
    { ch: "タ", ro: "ta", group: "t" }, { ch: "チ", ro: "chi",group: "t" }, { ch: "ツ", ro: "tsu",group: "t" }, { ch: "テ", ro: "te", group: "t" }, { ch: "ト", ro: "to", group: "t" },
    { ch: "ナ", ro: "na", group: "n" }, { ch: "ニ", ro: "ni", group: "n" }, { ch: "ヌ", ro: "nu", group: "n" }, { ch: "ネ", ro: "ne", group: "n" }, { ch: "ノ", ro: "no", group: "n" },
    { ch: "ハ", ro: "ha", group: "h" }, { ch: "ヒ", ro: "hi", group: "h" }, { ch: "フ", ro: "fu", group: "h" }, { ch: "ヘ", ro: "he", group: "h" }, { ch: "ホ", ro: "ho", group: "h" },
    { ch: "マ", ro: "ma", group: "m" }, { ch: "ミ", ro: "mi", group: "m" }, { ch: "ム", ro: "mu", group: "m" }, { ch: "メ", ro: "me", group: "m" }, { ch: "モ", ro: "mo", group: "m" },
    { ch: "ヤ", ro: "ya", group: "y" }, { ch: "ユ", ro: "yu", group: "y" }, { ch: "ヨ", ro: "yo", group: "y" },
    { ch: "ラ", ro: "ra", group: "r" }, { ch: "リ", ro: "ri", group: "r" }, { ch: "ル", ro: "ru", group: "r" }, { ch: "レ", ro: "re", group: "r" }, { ch: "ロ", ro: "ro", group: "r" },
    { ch: "ワ", ro: "wa", group: "w" }, { ch: "ヲ", ro: "wo (o)", group: "w" }, { ch: "ン", ro: "n",  group: "n*" },
    { ch: "ガ", ro: "ga", group: "g" }, { ch: "ギ", ro: "gi", group: "g" }, { ch: "グ", ro: "gu", group: "g" }, { ch: "ゲ", ro: "ge", group: "g" }, { ch: "ゴ", ro: "go", group: "g" },
    { ch: "ザ", ro: "za", group: "z" }, { ch: "ジ", ro: "ji", group: "z" }, { ch: "ズ", ro: "zu", group: "z" }, { ch: "ゼ", ro: "ze", group: "z" }, { ch: "ゾ", ro: "zo", group: "z" },
    { ch: "ダ", ro: "da", group: "d" }, { ch: "ヂ", ro: "ji", group: "d" }, { ch: "ヅ", ro: "zu", group: "d" }, { ch: "デ", ro: "de", group: "d" }, { ch: "ド", ro: "do", group: "d" },
    { ch: "バ", ro: "ba", group: "b" }, { ch: "ビ", ro: "bi", group: "b" }, { ch: "ブ", ro: "bu", group: "b" }, { ch: "ベ", ro: "be", group: "b" }, { ch: "ボ", ro: "bo", group: "b" },
    { ch: "パ", ro: "pa", group: "p" }, { ch: "ピ", ro: "pi", group: "p" }, { ch: "プ", ro: "pu", group: "p" }, { ch: "ペ", ro: "pe", group: "p" }, { ch: "ポ", ro: "po", group: "p" }
  ],

  // ──────────────────────────────────────────────────────────────────
  // Kanji — top ~60 high-utility characters with on/kun readings,
  // English meaning, stroke count, and 1-2 example compound words.
  // ──────────────────────────────────────────────────────────────────
  kanji: [
    { ch: "人", on: "ジン・ニン", kun: "ひと", en: "person", strokes: 2, words: ["三人 (sannin) — three people","日本人 (nihonjin) — Japanese person"] },
    { ch: "日", on: "ニチ・ジツ", kun: "ひ・び・か", en: "day / sun", strokes: 4, words: ["今日 (kyō) — today","日本 (nihon) — Japan"] },
    { ch: "月", on: "ゲツ・ガツ", kun: "つき", en: "month / moon", strokes: 4, words: ["月曜日 (getsuyōbi) — Monday","一月 (ichigatsu) — January"] },
    { ch: "本", on: "ホン", kun: "もと", en: "book / origin", strokes: 5, words: ["本 (hon) — book","日本 (nihon) — Japan"] },
    { ch: "山", on: "サン", kun: "やま", en: "mountain", strokes: 3, words: ["富士山 (fujisan) — Mt. Fuji","山田 (yamada) — Yamada (surname)"] },
    { ch: "川", on: "セン", kun: "かわ", en: "river", strokes: 3, words: ["川 (kawa) — river","石川 (ishikawa) — Ishikawa"] },
    { ch: "大", on: "ダイ・タイ", kun: "おお(きい)", en: "big / large", strokes: 3, words: ["大きい (ōkii) — big","大人 (otona) — adult"] },
    { ch: "小", on: "ショウ", kun: "ちい(さい)・こ", en: "small", strokes: 3, words: ["小さい (chiisai) — small","小学校 (shōgakkō) — elementary school"] },
    { ch: "上", on: "ジョウ", kun: "うえ・あ(がる)", en: "up / above", strokes: 3, words: ["上司 (jōshi) — boss","上 (ue) — above"] },
    { ch: "下", on: "カ・ゲ", kun: "した・さ(がる)", en: "down / below", strokes: 3, words: ["下 (shita) — below","地下 (chika) — underground"] },
    { ch: "中", on: "チュウ", kun: "なか", en: "middle / inside", strokes: 4, words: ["会議中 (kaigichū) — in a meeting","中国 (chūgoku) — China"] },
    { ch: "右", on: "ウ", kun: "みぎ", en: "right (direction)", strokes: 5, words: ["右 (migi) — right","右手 (migite) — right hand"] },
    { ch: "左", on: "サ", kun: "ひだり", en: "left", strokes: 5, words: ["左 (hidari) — left","左手 (hidarite) — left hand"] },
    { ch: "前", on: "ゼン", kun: "まえ", en: "before / front", strokes: 9, words: ["前 (mae) — before/front","午前 (gozen) — AM"] },
    { ch: "後", on: "ゴ・コウ", kun: "あと・うし(ろ)", en: "after / behind", strokes: 9, words: ["午後 (gogo) — PM","後で (atode) — later"] },
    { ch: "今", on: "コン", kun: "いま", en: "now", strokes: 4, words: ["今 (ima) — now","今日 (kyō) — today"] },
    { ch: "時", on: "ジ", kun: "とき", en: "time / hour", strokes: 10, words: ["時間 (jikan) — time","三時 (sanji) — 3 o'clock"] },
    { ch: "分", on: "フン・ブン", kun: "わ(かる)", en: "minute / part", strokes: 4, words: ["三十分 (sanjuppun) — 30 min","分かる (wakaru) — understand"] },
    { ch: "年", on: "ネン", kun: "とし", en: "year", strokes: 6, words: ["今年 (kotoshi) — this year","二年 (ninen) — two years"] },
    { ch: "新", on: "シン", kun: "あたら(しい)", en: "new", strokes: 13, words: ["新しい (atarashii) — new","新聞 (shinbun) — newspaper"] },
    { ch: "古", on: "コ", kun: "ふる(い)", en: "old (things)", strokes: 5, words: ["古い (furui) — old","古本 (furuhon) — used book"] },
    { ch: "高", on: "コウ", kun: "たか(い)", en: "high / expensive", strokes: 10, words: ["高い (takai) — high/expensive","最高 (saikō) — best"] },
    { ch: "安", on: "アン", kun: "やす(い)", en: "cheap / peaceful", strokes: 6, words: ["安い (yasui) — cheap","安全 (anzen) — safety"] },
    { ch: "見", on: "ケン", kun: "み(る)", en: "see / look", strokes: 7, words: ["見る (miru) — see","意見 (iken) — opinion"] },
    { ch: "聞", on: "ブン・モン", kun: "き(く)", en: "hear / ask", strokes: 14, words: ["聞く (kiku) — listen/ask","新聞 (shinbun) — newspaper"] },
    { ch: "言", on: "ゲン", kun: "い(う)", en: "say / word", strokes: 7, words: ["言う (iu) — say","言語 (gengo) — language"] },
    { ch: "話", on: "ワ", kun: "はな(す)", en: "talk / story", strokes: 13, words: ["話す (hanasu) — talk","電話 (denwa) — phone"] },
    { ch: "読", on: "ドク", kun: "よ(む)", en: "read", strokes: 14, words: ["読む (yomu) — read","読書 (dokusho) — reading"] },
    { ch: "書", on: "ショ", kun: "か(く)", en: "write", strokes: 10, words: ["書く (kaku) — write","辞書 (jisho) — dictionary"] },
    { ch: "行", on: "コウ・ギョウ", kun: "い(く)・おこな(う)", en: "go", strokes: 6, words: ["行く (iku) — go","銀行 (ginkō) — bank"] },
    { ch: "来", on: "ライ", kun: "く(る)", en: "come", strokes: 7, words: ["来る (kuru) — come","来週 (raishū) — next week"] },
    { ch: "出", on: "シュツ", kun: "で(る)・だ(す)", en: "exit / put out", strokes: 5, words: ["出る (deru) — exit","出張 (shutchō) — biz trip"] },
    { ch: "入", on: "ニュウ", kun: "い(る)・はい(る)", en: "enter", strokes: 2, words: ["入る (hairu) — enter","入学 (nyūgaku) — school entrance"] },
    { ch: "食", on: "ショク", kun: "た(べる)", en: "eat / food", strokes: 9, words: ["食べる (taberu) — eat","食事 (shokuji) — meal"] },
    { ch: "飲", on: "イン", kun: "の(む)", en: "drink", strokes: 12, words: ["飲む (nomu) — drink","飲み物 (nomimono) — drink"] },
    { ch: "学", on: "ガク", kun: "まな(ぶ)", en: "learn / study", strokes: 8, words: ["学校 (gakkō) — school","学生 (gakusei) — student"] },
    { ch: "校", on: "コウ", kun: "—", en: "school", strokes: 10, words: ["学校 (gakkō) — school","高校 (kōkō) — high school"] },
    { ch: "生", on: "セイ", kun: "う(まれる)・い(きる)", en: "life / birth", strokes: 5, words: ["先生 (sensei) — teacher","学生 (gakusei) — student"] },
    { ch: "先", on: "セン", kun: "さき", en: "previous / ahead", strokes: 6, words: ["先生 (sensei) — teacher","先週 (senshū) — last week"] },
    { ch: "私", on: "シ", kun: "わたし", en: "I / private", strokes: 7, words: ["私 (watashi) — I","私立 (shiritsu) — private (school)"] },
    { ch: "名", on: "メイ", kun: "な", en: "name", strokes: 6, words: ["名前 (namae) — name","有名 (yūmei) — famous"] },
    { ch: "国", on: "コク", kun: "くに", en: "country", strokes: 8, words: ["中国 (chūgoku) — China","国 (kuni) — country"] },
    { ch: "家", on: "カ・ケ", kun: "いえ・うち", en: "house / family", strokes: 10, words: ["家 (ie) — house","家族 (kazoku) — family"] },
    { ch: "車", on: "シャ", kun: "くるま", en: "car / vehicle", strokes: 7, words: ["車 (kuruma) — car","電車 (densha) — train"] },
    { ch: "電", on: "デン", kun: "—", en: "electric", strokes: 13, words: ["電車 (densha) — train","電気 (denki) — electricity"] },
    { ch: "話", on: "ワ", kun: "はな(す)", en: "talk / phone", strokes: 13, words: ["電話 (denwa) — phone","会話 (kaiwa) — conversation"] },
    { ch: "水", on: "スイ", kun: "みず", en: "water", strokes: 4, words: ["水 (mizu) — water","水曜日 (suiyōbi) — Wed"] },
    { ch: "火", on: "カ", kun: "ひ", en: "fire", strokes: 4, words: ["火 (hi) — fire","火曜日 (kayōbi) — Tuesday"] },
    { ch: "金", on: "キン", kun: "かね", en: "gold / money", strokes: 8, words: ["お金 (okane) — money","金曜日 (kinyōbi) — Friday"] },
    { ch: "土", on: "ド", kun: "つち", en: "earth / soil", strokes: 3, words: ["土 (tsuchi) — soil","土曜日 (doyōbi) — Saturday"] },
    { ch: "木", on: "モク", kun: "き", en: "tree / wood", strokes: 4, words: ["木 (ki) — tree","木曜日 (mokuyōbi) — Thursday"] },
    { ch: "好", on: "コウ", kun: "す(き)", en: "like / love", strokes: 6, words: ["好き (suki) — like","大好き (daisuki) — love"] },
    { ch: "会", on: "カイ", kun: "あ(う)", en: "meet / association", strokes: 6, words: ["会議 (kaigi) — meeting","会社 (kaisha) — company"] },
    { ch: "社", on: "シャ", kun: "やしろ", en: "company / shrine", strokes: 7, words: ["会社 (kaisha) — company","社長 (shachō) — president"] },
    { ch: "仕", on: "シ", kun: "つか(える)", en: "serve / job", strokes: 5, words: ["仕事 (shigoto) — work","仕方 (shikata) — way"] },
    { ch: "事", on: "ジ", kun: "こと", en: "thing / matter", strokes: 8, words: ["仕事 (shigoto) — work","大事 (daiji) — important"] },
    { ch: "問", on: "モン", kun: "と(う)", en: "question / problem", strokes: 11, words: ["問題 (mondai) — problem","質問 (shitsumon) — question"] },
    { ch: "題", on: "ダイ", kun: "—", en: "topic / problem", strokes: 18, words: ["問題 (mondai) — problem","宿題 (shukudai) — homework"] },
    { ch: "間", on: "カン", kun: "あいだ", en: "interval / between", strokes: 12, words: ["時間 (jikan) — time","人間 (ningen) — human"] },
    { ch: "気", on: "キ", kun: "—", en: "spirit / feeling", strokes: 6, words: ["元気 (genki) — energetic","天気 (tenki) — weather"] },
    { ch: "元", on: "ゲン", kun: "もと", en: "origin / well", strokes: 4, words: ["元気 (genki) — energetic","元 (moto) — origin"] }
  ],

  words: [
    // greetings & basics
    { jp: "こんにちは", ro: "konnichiwa", en: "Hello / Good afternoon", tag: "greeting", ex: "こんにちは、シシルです。— Hello, I'm Shishir." },
    { jp: "おはようございます", ro: "ohayō gozaimasu", en: "Good morning (polite)", tag: "greeting", ex: "Used until ~10am at the office." },
    { jp: "こんばんは", ro: "konbanwa", en: "Good evening", tag: "greeting" },
    { jp: "ありがとうございます", ro: "arigatō gozaimasu", en: "Thank you (polite)", tag: "greeting", ex: "レビューありがとうございます。— Thanks for the review." },
    { jp: "すみません", ro: "sumimasen", en: "Excuse me / Sorry", tag: "greeting", ex: "Use to get someone's attention or apologize lightly." },
    { jp: "お願いします", ro: "onegaishimasu", en: "Please / I request", tag: "greeting" },
    { jp: "はじめまして", ro: "hajimemashite", en: "Nice to meet you", tag: "greeting" },
    { jp: "よろしくお願いします", ro: "yoroshiku onegaishimasu", en: "Please treat me well / nice to work with you", tag: "greeting", ex: "Used after self-intros and at the start of work." },
    { jp: "さようなら", ro: "sayōnara", en: "Goodbye", tag: "greeting" },
    { jp: "お疲れさまです", ro: "otsukaresama desu", en: "Good work / Thanks for your effort", tag: "workplace", ex: "Standard daily work greeting in Japan." },

    // pronouns & people
    { jp: "私", ro: "watashi", en: "I / me", tag: "basic" },
    { jp: "僕", ro: "boku", en: "I / me (male, casual)", tag: "basic", ex: "Common at the office among guys." },
    { jp: "あなた", ro: "anata", en: "You", tag: "basic", ex: "Often dropped — use the person's name + さん instead." },
    { jp: "彼", ro: "kare", en: "He / boyfriend", tag: "basic" },
    { jp: "彼女", ro: "kanojo", en: "She / girlfriend", tag: "basic" },
    { jp: "私たち", ro: "watashitachi", en: "We / us", tag: "basic", ex: "私たちのチーム — our team." },
    { jp: "彼ら", ro: "karera", en: "They (men / mixed group)", tag: "basic" },
    { jp: "彼女たち", ro: "kanojotachi", en: "They (women)", tag: "basic" },
    { jp: "皆さん", ro: "minasan", en: "Everyone (polite)", tag: "basic", ex: "皆さん、おはようございます。— Good morning, everyone." },
    { jp: "自分", ro: "jibun", en: "Oneself / myself", tag: "basic" },
    { jp: "友達", ro: "tomodachi", en: "Friend", tag: "daily" },
    { jp: "家族", ro: "kazoku", en: "Family", tag: "daily" },

    // demonstratives — things (これ・それ・あれ・どれ)
    { jp: "これ", ro: "kore", en: "This (thing near me)", tag: "basic", ex: "これは私のパソコンです。— This is my laptop." },
    { jp: "それ", ro: "sore", en: "That (thing near you)", tag: "basic", ex: "それを取ってください。— Please pass me that." },
    { jp: "あれ", ro: "are", en: "That (over there, far from both)", tag: "basic" },
    { jp: "どれ", ro: "dore", en: "Which (one)?", tag: "basic", ex: "どれが好きですか？— Which one do you like?" },
    // demonstratives — modifiers before a noun (この・その・あの・どの)
    { jp: "この", ro: "kono", en: "This [noun]", tag: "basic", ex: "このバグ — this bug." },
    { jp: "その", ro: "sono", en: "That [noun] (near you)", tag: "basic", ex: "そのファイル — that file." },
    { jp: "あの", ro: "ano", en: "That [noun] over there", tag: "basic" },
    { jp: "どの", ro: "dono", en: "Which [noun]?", tag: "basic", ex: "どのサーバーですか？— Which server?" },
    // demonstratives — places (ここ・そこ・あそこ・どこ)
    { jp: "ここ", ro: "koko", en: "Here", tag: "basic", ex: "ここで待ってください。— Please wait here." },
    { jp: "そこ", ro: "soko", en: "There (near you)", tag: "basic" },
    { jp: "あそこ", ro: "asoko", en: "Over there", tag: "basic" },
    { jp: "どこ", ro: "doko", en: "Where?", tag: "basic", ex: "駅はどこですか？— Where is the station?" },
    // demonstratives — direction / formal (こちら・そちら・あちら・どちら)
    { jp: "こちら", ro: "kochira", en: "This way / this person (polite)", tag: "basic", ex: "こちらはシシルさんです。— This is Shishir." },
    { jp: "そちら", ro: "sochira", en: "That way / your side", tag: "basic" },
    { jp: "あちら", ro: "achira", en: "Over there (polite)", tag: "basic" },
    { jp: "どちら", ro: "dochira", en: "Which / where (polite)", tag: "basic", ex: "お国はどちらですか？— Where are you from?" },

    // question words
    { jp: "何", ro: "nani / nan", en: "What?", tag: "basic", ex: "これは何ですか？— What is this? (read 'nan' before です/で/と)" },
    { jp: "いつ", ro: "itsu", en: "When?", tag: "basic", ex: "会議はいつですか？— When is the meeting?" },
    { jp: "誰", ro: "dare", en: "Who?", tag: "basic", ex: "あの人は誰ですか？— Who is that person?" },
    { jp: "なぜ", ro: "naze", en: "Why? (formal/written)", tag: "basic" },
    { jp: "どうして", ro: "dōshite", en: "Why? (conversational)", tag: "basic", ex: "どうしてですか？— Why is that?" },
    { jp: "どう", ro: "dō", en: "How? / What about?", tag: "basic", ex: "コーヒーはどうですか？— How about coffee?" },
    { jp: "どうやって", ro: "dō yatte", en: "How (in what way)?", tag: "basic", ex: "どうやって直しましたか？— How did you fix it?" },
    { jp: "いくら", ro: "ikura", en: "How much (price)?", tag: "basic", ex: "これはいくらですか？— How much is this?" },
    { jp: "いくつ", ro: "ikutsu", en: "How many / how old?", tag: "basic" },
    { jp: "何時", ro: "nanji", en: "What time?", tag: "basic", ex: "今、何時ですか？— What time is it now?" },

    // yes / no / agreement
    { jp: "はい", ro: "hai", en: "Yes", tag: "basic" },
    { jp: "いいえ", ro: "iie", en: "No", tag: "basic" },
    { jp: "そうです", ro: "sō desu", en: "That's right / yes (it is)", tag: "basic" },
    { jp: "違います", ro: "chigaimasu", en: "That's not right / different", tag: "basic", ex: "Soft 'no' — politer than いいえ." },
    { jp: "わかりました", ro: "wakarimashita", en: "Understood / got it", tag: "basic" },
    { jp: "わかりません", ro: "wakarimasen", en: "I don't understand", tag: "basic" },

    // numbers / time
    { jp: "今日", ro: "kyō", en: "Today", tag: "time" },
    { jp: "明日", ro: "ashita", en: "Tomorrow", tag: "time" },
    { jp: "昨日", ro: "kinō", en: "Yesterday", tag: "time" },
    { jp: "今", ro: "ima", en: "Now", tag: "time" },
    { jp: "後で", ro: "ato de", en: "Later", tag: "time" },

    // daily
    { jp: "水", ro: "mizu", en: "Water", tag: "daily" },
    { jp: "ご飯", ro: "gohan", en: "Rice / meal", tag: "daily" },
    { jp: "お茶", ro: "ocha", en: "Tea", tag: "daily" },
    { jp: "コーヒー", ro: "kōhī", en: "Coffee", tag: "daily" },
    { jp: "駅", ro: "eki", en: "Station", tag: "daily" },
    { jp: "電車", ro: "densha", en: "Train", tag: "daily" },
    { jp: "家", ro: "ie / uchi", en: "Home / house", tag: "daily" },
    { jp: "学校", ro: "gakkō", en: "School", tag: "daily" },

    // work / IT
    { jp: "会社", ro: "kaisha", en: "Company", tag: "workplace" },
    { jp: "仕事", ro: "shigoto", en: "Work / job", tag: "workplace" },
    { jp: "会議", ro: "kaigi", en: "Meeting", tag: "workplace", ex: "今、会議中です。— I'm in a meeting now." },
    { jp: "上司", ro: "jōshi", en: "Boss / superior", tag: "workplace" },
    { jp: "同僚", ro: "dōryō", en: "Colleague", tag: "workplace" },
    { jp: "コンピュータ", ro: "konpyūta", en: "Computer", tag: "IT" },
    { jp: "パソコン", ro: "pasokon", en: "PC / laptop (everyday)", tag: "IT" },
    { jp: "プログラム", ro: "puroguramu", en: "Program", tag: "IT" },
    { jp: "コード", ro: "kōdo", en: "Code", tag: "IT", ex: "コードレビューをお願いします。— Please review my code." },
    { jp: "バグ", ro: "bagu", en: "Bug", tag: "IT", ex: "バグを直しました。— I fixed the bug." },
    { jp: "テスト", ro: "tesuto", en: "Test", tag: "IT" },
    { jp: "レビュー", ro: "rebyū", en: "Review", tag: "IT" },
    { jp: "ミーティング", ro: "mītingu", en: "Meeting (loanword)", tag: "IT" },
    { jp: "メール", ro: "mēru", en: "Email", tag: "IT" },
    { jp: "ファイル", ro: "fairu", en: "File", tag: "IT" },
    { jp: "サーバー", ro: "sābā", en: "Server", tag: "IT" },
    { jp: "データ", ro: "dēta", en: "Data", tag: "IT" },
    { jp: "問題", ro: "mondai", en: "Problem / issue", tag: "workplace", ex: "問題があります。— There's a problem." },
    { jp: "質問", ro: "shitsumon", en: "Question", tag: "workplace" },
    { jp: "答え", ro: "kotae", en: "Answer", tag: "basic" },

    // useful verbs (dictionary form)
    { jp: "食べる", ro: "taberu", en: "to eat", tag: "verb" },
    { jp: "飲む", ro: "nomu", en: "to drink", tag: "verb" },
    { jp: "見る", ro: "miru", en: "to see / watch", tag: "verb" },
    { jp: "行く", ro: "iku", en: "to go", tag: "verb" },
    { jp: "来る", ro: "kuru", en: "to come", tag: "verb" },
    { jp: "する", ro: "suru", en: "to do", tag: "verb" },
    { jp: "書く", ro: "kaku", en: "to write", tag: "verb" },
    { jp: "読む", ro: "yomu", en: "to read", tag: "verb" },
    { jp: "話す", ro: "hanasu", en: "to speak", tag: "verb" },
    { jp: "聞く", ro: "kiku", en: "to listen / ask", tag: "verb" },
    { jp: "ある", ro: "aru", en: "to exist (things)", tag: "verb", ex: "Used for objects, plants, abstract things." },
    { jp: "いる", ro: "iru", en: "to exist (people/animals)", tag: "verb" },
    { jp: "なる", ro: "naru", en: "to become", tag: "verb" },
    { jp: "分かる", ro: "wakaru", en: "to understand", tag: "verb" },
    { jp: "働く", ro: "hataraku", en: "to work", tag: "verb" },
    { jp: "直す", ro: "naosu", en: "to fix / repair", tag: "verb", ex: "バグを直します。— I fix the bug." },
    { jp: "送る", ro: "okuru", en: "to send", tag: "verb", ex: "メールを送ります。— I send an email." },
    { jp: "勉強する", ro: "benkyō suru", en: "to study", tag: "verb", ex: "日本語を勉強しています。— I'm studying Japanese." },

    // numbers 1–10
    { jp: "一", ro: "ichi", en: "one (1)", tag: "number" },
    { jp: "二", ro: "ni", en: "two (2)", tag: "number" },
    { jp: "三", ro: "san", en: "three (3)", tag: "number" },
    { jp: "四", ro: "yon / shi", en: "four (4)", tag: "number", ex: "yon is safer — shi sounds like 'death'." },
    { jp: "五", ro: "go", en: "five (5)", tag: "number" },
    { jp: "六", ro: "roku", en: "six (6)", tag: "number" },
    { jp: "七", ro: "nana / shichi", en: "seven (7)", tag: "number" },
    { jp: "八", ro: "hachi", en: "eight (8)", tag: "number" },
    { jp: "九", ro: "kyū / ku", en: "nine (9)", tag: "number" },
    { jp: "十", ro: "jū", en: "ten (10)", tag: "number" },
    { jp: "百", ro: "hyaku", en: "hundred (100)", tag: "number" },
    { jp: "千", ro: "sen", en: "thousand (1000)", tag: "number" },
    { jp: "万", ro: "man", en: "ten-thousand (10,000)", tag: "number" },
    { jp: "円", ro: "en", en: "yen (¥)", tag: "number" },

    // days of the week
    { jp: "月曜日", ro: "getsuyōbi", en: "Monday", tag: "time" },
    { jp: "火曜日", ro: "kayōbi", en: "Tuesday", tag: "time" },
    { jp: "水曜日", ro: "suiyōbi", en: "Wednesday", tag: "time" },
    { jp: "木曜日", ro: "mokuyōbi", en: "Thursday", tag: "time" },
    { jp: "金曜日", ro: "kinyōbi", en: "Friday", tag: "time" },
    { jp: "土曜日", ro: "doyōbi", en: "Saturday", tag: "time" },
    { jp: "日曜日", ro: "nichiyōbi", en: "Sunday", tag: "time" },

    // basic adjectives
    { jp: "いい", ro: "ii", en: "good", tag: "adjective" },
    { jp: "悪い", ro: "warui", en: "bad", tag: "adjective" },
    { jp: "大きい", ro: "ōkii", en: "big", tag: "adjective" },
    { jp: "小さい", ro: "chiisai", en: "small", tag: "adjective" },
    { jp: "新しい", ro: "atarashii", en: "new", tag: "adjective" },
    { jp: "古い", ro: "furui", en: "old (things, not people)", tag: "adjective" },
    { jp: "難しい", ro: "muzukashii", en: "difficult", tag: "adjective", ex: "このバグは難しい。— This bug is hard." },
    { jp: "簡単", ro: "kantan", en: "easy / simple", tag: "adjective" },
    { jp: "速い", ro: "hayai", en: "fast", tag: "adjective" },
    { jp: "遅い", ro: "osoi", en: "slow / late", tag: "adjective" },
    { jp: "忙しい", ro: "isogashii", en: "busy", tag: "adjective" },
    { jp: "楽しい", ro: "tanoshii", en: "fun / enjoyable", tag: "adjective" },
    { jp: "元気", ro: "genki", en: "energetic / well", tag: "adjective", ex: "お元気ですか？— How are you?" },

    // a few key role nouns referenced by chapters
    { jp: "学生", ro: "gakusei", en: "student", tag: "basic" },
    { jp: "先生", ro: "sensei", en: "teacher", tag: "basic" },
    { jp: "エンジニア", ro: "enjinia", en: "engineer", tag: "IT" },
    { jp: "プログラマー", ro: "puroguramā", en: "programmer", tag: "IT" },
    { jp: "本", ro: "hon", en: "book", tag: "basic" },
    { jp: "名前", ro: "namae", en: "name", tag: "basic", ex: "名前は何ですか？— What is your name?" },
    { jp: "日本語", ro: "nihongo", en: "Japanese language", tag: "basic" }
,
    // ── Expansion: counters, time, food, body, transport, more verbs/adj/IT ──
    { jp: "一つ", ro: "hitotsu", en: "one (general)", tag: "counter" },
    { jp: "二つ", ro: "futatsu", en: "two (general)", tag: "counter" },
    { jp: "三つ", ro: "mittsu", en: "three (general)", tag: "counter" },
    { jp: "四つ", ro: "yottsu", en: "four (general)", tag: "counter" },
    { jp: "五つ", ro: "itsutsu", en: "five (general)", tag: "counter" },
    { jp: "一人", ro: "hitori", en: "one person (also: alone)", tag: "counter" },
    { jp: "二人", ro: "futari", en: "two people", tag: "counter" },
    { jp: "三人", ro: "sannin", en: "three people", tag: "counter" },
    { jp: "一枚", ro: "ichimai", en: "one (flat thing)", tag: "counter" },
    { jp: "一本", ro: "ippon", en: "one (long thin thing)", tag: "counter" },
    { jp: "一個", ro: "ikko", en: "one (small/round)", tag: "counter" },
    { jp: "一杯", ro: "ippai", en: "one cup / one full", tag: "counter" },
    { jp: "一回", ro: "ikkai", en: "one time", tag: "counter" },
    { jp: "一時", ro: "ichiji", en: "1 o'clock", tag: "time" },
    { jp: "二時", ro: "niji", en: "2 o'clock", tag: "time" },
    { jp: "三時", ro: "sanji", en: "3 o'clock", tag: "time" },
    { jp: "半", ro: "han", en: "half (~thirty as in 2:30 = 二時半)", tag: "time" },
    { jp: "午前", ro: "gozen", en: "AM / morning", tag: "time" },
    { jp: "午後", ro: "gogo", en: "PM / afternoon", tag: "time" },
    { jp: "朝", ro: "asa", en: "morning", tag: "time" },
    { jp: "昼", ro: "hiru", en: "noon / daytime", tag: "time" },
    { jp: "夕方", ro: "yūgata", en: "evening", tag: "time" },
    { jp: "夜", ro: "yoru", en: "night", tag: "time" },
    { jp: "今週", ro: "konshū", en: "this week", tag: "time" },
    { jp: "来週", ro: "raishū", en: "next week", tag: "time" },
    { jp: "先週", ro: "senshū", en: "last week", tag: "time" },
    { jp: "毎日", ro: "mainichi", en: "every day", tag: "time" },
    { jp: "毎朝", ro: "maiasa", en: "every morning", tag: "time" },
    { jp: "今朝", ro: "kesa", en: "this morning", tag: "time" },
    { jp: "買う", ro: "kau", en: "to buy", tag: "verb" },
    { jp: "売る", ro: "uru", en: "to sell", tag: "verb" },
    { jp: "持つ", ro: "motsu", en: "to hold / have", tag: "verb" },
    { jp: "使う", ro: "tsukau", en: "to use", tag: "verb" },
    { jp: "起きる", ro: "okiru", en: "to wake up", tag: "verb" },
    { jp: "寝る", ro: "neru", en: "to sleep", tag: "verb" },
    { jp: "入る", ro: "hairu", en: "to enter", tag: "verb" },
    { jp: "出る", ro: "deru", en: "to exit / leave", tag: "verb" },
    { jp: "会う", ro: "au", en: "to meet", tag: "verb", ex: "友達に会います。— I meet a friend." },
    { jp: "待つ", ro: "matsu", en: "to wait", tag: "verb" },
    { jp: "歩く", ro: "aruku", en: "to walk", tag: "verb" },
    { jp: "走る", ro: "hashiru", en: "to run", tag: "verb" },
    { jp: "帰る", ro: "kaeru", en: "to return (home)", tag: "verb" },
    { jp: "始める", ro: "hajimeru", en: "to start", tag: "verb" },
    { jp: "終わる", ro: "owaru", en: "to end", tag: "verb" },
    { jp: "デプロイする", ro: "depuroi suru", en: "to deploy", tag: "IT" },
    { jp: "コミットする", ro: "komitto suru", en: "to commit (git)", tag: "IT" },
    { jp: "暑い", ro: "atsui", en: "hot (weather)", tag: "adjective" },
    { jp: "寒い", ro: "samui", en: "cold (weather)", tag: "adjective" },
    { jp: "暖かい", ro: "atatakai", en: "warm", tag: "adjective" },
    { jp: "涼しい", ro: "suzushii", en: "cool / refreshing", tag: "adjective" },
    { jp: "高い", ro: "takai", en: "expensive / tall / high", tag: "adjective" },
    { jp: "安い", ro: "yasui", en: "cheap", tag: "adjective" },
    { jp: "長い", ro: "nagai", en: "long", tag: "adjective" },
    { jp: "短い", ro: "mijikai", en: "short", tag: "adjective" },
    { jp: "美味しい", ro: "oishii", en: "tasty", tag: "adjective" },
    { jp: "綺麗", ro: "kirei", en: "pretty / clean (na-adj)", tag: "adjective" },
    { jp: "静か", ro: "shizuka", en: "quiet (na-adj)", tag: "adjective" },
    { jp: "親切", ro: "shinsetsu", en: "kind (na-adj)", tag: "adjective" },
    { jp: "便利", ro: "benri", en: "convenient (na-adj)", tag: "adjective" },
    { jp: "好き", ro: "suki", en: "liked / favorite (na-adj)", tag: "adjective" },
    { jp: "大丈夫", ro: "daijōbu", en: "fine / okay (na-adj)", tag: "adjective" },
    { jp: "正しい", ro: "tadashii", en: "correct", tag: "adjective" },
    { jp: "寿司", ro: "sushi", en: "sushi", tag: "food" },
    { jp: "ラーメン", ro: "rāmen", en: "ramen", tag: "food" },
    { jp: "パン", ro: "pan", en: "bread", tag: "food" },
    { jp: "卵", ro: "tamago", en: "egg", tag: "food" },
    { jp: "魚", ro: "sakana", en: "fish", tag: "food" },
    { jp: "肉", ro: "niku", en: "meat", tag: "food" },
    { jp: "野菜", ro: "yasai", en: "vegetable", tag: "food" },
    { jp: "果物", ro: "kudamono", en: "fruit", tag: "food" },
    { jp: "りんご", ro: "ringo", en: "apple", tag: "food" },
    { jp: "牛乳", ro: "gyūnyū", en: "milk", tag: "food" },
    { jp: "頭", ro: "atama", en: "head", tag: "body" },
    { jp: "目", ro: "me", en: "eye", tag: "body" },
    { jp: "口", ro: "kuchi", en: "mouth", tag: "body" },
    { jp: "耳", ro: "mimi", en: "ear", tag: "body" },
    { jp: "手", ro: "te", en: "hand", tag: "body" },
    { jp: "足", ro: "ashi", en: "leg / foot", tag: "body" },
    { jp: "車", ro: "kuruma", en: "car", tag: "daily" },
    { jp: "バス", ro: "basu", en: "bus", tag: "daily" },
    { jp: "タクシー", ro: "takushī", en: "taxi", tag: "daily" },
    { jp: "自転車", ro: "jitensha", en: "bicycle", tag: "daily" },
    { jp: "部長", ro: "buchō", en: "department head", tag: "workplace" },
    { jp: "課長", ro: "kachō", en: "section chief", tag: "workplace" },
    { jp: "社長", ro: "shachō", en: "company president", tag: "workplace" },
    { jp: "出張", ro: "shutchō", en: "business trip", tag: "workplace" },
    { jp: "残業", ro: "zangyō", en: "overtime work", tag: "workplace" },
    { jp: "休み", ro: "yasumi", en: "day off / vacation", tag: "workplace" },
    { jp: "クラウド", ro: "kuraudo", en: "cloud", tag: "IT" },
    { jp: "データベース", ro: "dētabēsu", en: "database", tag: "IT" },
    { jp: "セキュリティ", ro: "sekyuriti", en: "security", tag: "IT" },
    { jp: "デプロイ", ro: "depuroi", en: "deploy / deployment", tag: "IT" },
    { jp: "プルリク", ro: "pururiku", en: "pull request (PR)", tag: "IT" },
    { jp: "リポジトリ", ro: "ripojitori", en: "repository (repo)", tag: "IT" },
    { jp: "本番", ro: "honban", en: "production (env)", tag: "IT" }
    ],

  sentences: [
    { jp: "私はシシルです。", ro: "watashi wa shishiru desu.", en: "I am Shishir.", scene: "intro",
      tokens: [ {t:"私", say:"watashi"}, {t:"は", say:"wa"}, {t:"シシル", say:"shishiru"}, {t:"です", say:"desu"} ] },
    { jp: "はじめまして、よろしくお願いします。", ro: "hajimemashite, yoroshiku onegaishimasu.", en: "Nice to meet you, please treat me well.", scene: "intro" },
    { jp: "私はエンジニアです。", ro: "watashi wa enjinia desu.", en: "I am an engineer.", scene: "intro" },
    { jp: "ネパールから来ました。", ro: "nepāru kara kimashita.", en: "I came from Nepal.", scene: "intro" },
    { jp: "日本語を勉強しています。", ro: "nihongo o benkyō shite imasu.", en: "I'm studying Japanese.", scene: "intro" },

    { jp: "おはようございます！", ro: "ohayō gozaimasu!", en: "Good morning!", scene: "greeting" },
    { jp: "お疲れさまでした。", ro: "otsukaresama deshita.", en: "Good work today (end of day).", scene: "workplace" },
    { jp: "お先に失礼します。", ro: "osaki ni shitsurei shimasu.", en: "Excuse me for leaving before you (leaving the office).", scene: "workplace" },
    { jp: "ちょっと、いいですか？", ro: "chotto, ii desu ka?", en: "Do you have a moment?", scene: "workplace" },
    { jp: "今、忙しいですか？", ro: "ima, isogashii desu ka?", en: "Are you busy right now?", scene: "workplace" },

    { jp: "コードレビューをお願いします。", ro: "kōdo rebyū o onegaishimasu.", en: "Please review my code.", scene: "IT" },
    { jp: "プルリクを送りました。", ro: "pururiku o okurimashita.", en: "I sent the pull request.", scene: "IT" },
    { jp: "バグを見つけました。", ro: "bagu o mitsukemashita.", en: "I found a bug.", scene: "IT" },
    { jp: "テストが失敗しています。", ro: "tesuto ga shippai shite imasu.", en: "The test is failing.", scene: "IT" },
    { jp: "サーバーが落ちています。", ro: "sābā ga ochite imasu.", en: "The server is down.", scene: "IT" },
    { jp: "もう一度説明してもらえますか？", ro: "mō ichido setsumei shite moraemasu ka?", en: "Could you explain once more?", scene: "workplace" },
    { jp: "すみません、ちょっと分かりません。", ro: "sumimasen, chotto wakarimasen.", en: "Sorry, I don't quite understand.", scene: "workplace" },
    { jp: "後で連絡します。", ro: "ato de renraku shimasu.", en: "I'll contact you later.", scene: "workplace" },
    { jp: "会議は何時からですか？", ro: "kaigi wa nanji kara desu ka?", en: "What time does the meeting start?", scene: "workplace" },
    { jp: "少し遅れます。", ro: "sukoshi okuremasu.", en: "I'll be a little late.", scene: "workplace" },

    { jp: "コーヒーを飲みますか？", ro: "kōhī o nomimasu ka?", en: "Would you like coffee?", scene: "daily" },
    { jp: "お昼ごはんを食べに行きませんか？", ro: "ohirugohan o tabe ni ikimasen ka?", en: "Want to go grab lunch?", scene: "daily" },
    { jp: "駅はどこですか？", ro: "eki wa doko desu ka?", en: "Where is the station?", scene: "daily" },
    { jp: "これはいくらですか？", ro: "kore wa ikura desu ka?", en: "How much is this?", scene: "daily" },
    { jp: "もう一度お願いします。", ro: "mō ichido onegaishimasu.", en: "Once more, please.", scene: "daily" },
    { jp: "ゆっくり話してください。", ro: "yukkuri hanashite kudasai.", en: "Please speak slowly.", scene: "daily" },
    { jp: "ありがとう、助かりました。", ro: "arigatō, tasukarimashita.", en: "Thank you, that helped.", scene: "daily" },
    { jp: "今日は楽しかったです。", ro: "kyō wa tanoshikatta desu.", en: "Today was fun.", scene: "daily" },
    { jp: "また明日。", ro: "mata ashita.", en: "See you tomorrow.", scene: "greeting" },
    { jp: "おやすみなさい。", ro: "oyasuminasai.", en: "Good night.", scene: "greeting" },

    // referenced by curriculum chapters
    { jp: "これは何ですか？", ro: "kore wa nan desu ka?", en: "What is this?", scene: "daily" },
    { jp: "それは本です。", ro: "sore wa hon desu.", en: "That is a book.", scene: "daily" },
    { jp: "お元気ですか？", ro: "o-genki desu ka?", en: "How are you? (How's your health?)", scene: "greeting" },
    { jp: "はい、元気です。", ro: "hai, genki desu.", en: "Yes, I'm well.", scene: "greeting" },
    { jp: "今、何時ですか？", ro: "ima, nanji desu ka?", en: "What time is it now?", scene: "daily" },
    { jp: "名前は何ですか？", ro: "namae wa nan desu ka?", en: "What is your name?", scene: "intro" },
    { jp: "私の名前はシシルです。", ro: "watashi no namae wa shishiru desu.", en: "My name is Shishir.", scene: "intro" },
    { jp: "今日は月曜日です。", ro: "kyō wa getsuyōbi desu.", en: "Today is Monday.", scene: "daily" },
    { jp: "毎日、コードを書きます。", ro: "mainichi, kōdo o kakimasu.", en: "Every day I write code.", scene: "IT" },
    { jp: "このバグは難しいです。", ro: "kono bagu wa muzukashii desu.", en: "This bug is hard.", scene: "IT" },
    { jp: "水を飲みます。", ro: "mizu o nomimasu.", en: "I drink water.", scene: "daily" },
    { jp: "ありがとうございます。", ro: "arigatō gozaimasu.", en: "Thank you (polite).", scene: "greeting" }
,
    // ── Expansion: phone, email, shopping, medical, apology, casual, travel, IT ──
    { jp: "もしもし、田中です。", ro: "moshi moshi, tanaka desu.", en: "Hello (phone), this is Tanaka.", scene: "phone" },
    { jp: "今、お時間よろしいですか？", ro: "ima, ojikan yoroshii desu ka?", en: "Do you have a moment now?", scene: "phone" },
    { jp: "後でかけ直します。", ro: "ato de kakenaoshimasu.", en: "I'll call back later.", scene: "phone" },
    { jp: "お世話になっております。", ro: "osewa ni natte orimasu.", en: "Thank you for your continued support. (formal email opener)", scene: "email" },
    { jp: "よろしくお願いいたします。", ro: "yoroshiku onegai itashimasu.", en: "Best regards. (formal email closer)", scene: "email" },
    { jp: "確認お願いします。", ro: "kakunin onegaishimasu.", en: "Please confirm.", scene: "email" },
    { jp: "これをください。", ro: "kore o kudasai.", en: "I'll take this.", scene: "shopping" },
    { jp: "袋はいりません。", ro: "fukuro wa irimasen.", en: "I don't need a bag.", scene: "shopping" },
    { jp: "クレジットカードで払います。", ro: "kurejitto kādo de haraimasu.", en: "I'll pay by credit card.", scene: "shopping" },
    { jp: "頭が痛いです。", ro: "atama ga itai desu.", en: "My head hurts.", scene: "medical" },
    { jp: "熱があります。", ro: "netsu ga arimasu.", en: "I have a fever.", scene: "medical" },
    { jp: "病院はどこですか？", ro: "byōin wa doko desu ka?", en: "Where is the hospital?", scene: "medical" },
    { jp: "ご迷惑をおかけしました。", ro: "go-meiwaku o okake shimashita.", en: "I'm sorry for the trouble (formal).", scene: "workplace" },
    { jp: "申し訳ございません。", ro: "mōshiwake gozaimasen.", en: "I sincerely apologize. (very formal)", scene: "workplace" },
    { jp: "本当にすみません。", ro: "hontō ni sumimasen.", en: "I'm really sorry.", scene: "daily" },
    { jp: "やった！", ro: "yatta!", en: "Yes! / I did it!", scene: "casual" },
    { jp: "本当？", ro: "hontō?", en: "Really?", scene: "casual" },
    { jp: "なるほど。", ro: "naruhodo.", en: "I see / makes sense.", scene: "casual" },
    { jp: "そうそう。", ro: "sō sō.", en: "Yeah yeah / that's right.", scene: "casual" },
    { jp: "切符を一枚ください。", ro: "kippu o ichimai kudasai.", en: "One ticket, please.", scene: "travel" },
    { jp: "次の電車は何時ですか？", ro: "tsugi no densha wa nanji desu ka?", en: "What time is the next train?", scene: "travel" },
    { jp: "ホテルを予約しました。", ro: "hoteru o yoyaku shimashita.", en: "I booked the hotel.", scene: "travel" },
    { jp: "確認します。", ro: "kakunin shimasu.", en: "I'll check.", scene: "workplace" },
    { jp: "デプロイしました。", ro: "depuroi shimashita.", en: "I deployed.", scene: "IT" },
    { jp: "本番環境で問題が起きています。", ro: "honban kankyō de mondai ga okite imasu.", en: "There's a problem in production.", scene: "IT" }
  ,
    // ── Imported from chapter references (previously orphan) ──
    { jp: "学生ですか？", ro: "gakusei desu ka?", en: "Are you a student?", scene: "intro" },
    { jp: "メールを書きます。", ro: "mēru o kakimasu.", en: "I write an email.", scene: "IT" },
    { jp: "コードをレビューします。", ro: "kōdo o rebyū shimasu.", en: "I review the code.", scene: "IT" },
    { jp: "コーヒーを飲みません。", ro: "kōhī o nomimasen.", en: "I don't drink coffee.", scene: "daily" },
    { jp: "バグを直しました。", ro: "bagu o naoshimashita.", en: "I fixed the bug.", scene: "IT" },
    { jp: "昨日は会議でした。", ro: "kinō wa kaigi deshita.", en: "Yesterday was the meeting.", scene: "workplace" },
    { jp: "コードを書いています。", ro: "kōdo o kaite imasu.", en: "I'm writing code.", scene: "IT" },
    { jp: "今、会議をしています。", ro: "ima, kaigi o shite imasu.", en: "I'm in a meeting now.", scene: "workplace" },
    { jp: "コーヒーを飲みたいです。", ro: "kōhī o nomitai desu.", en: "I want to drink coffee.", scene: "daily" },
    { jp: "日本語を話したいです。", ro: "nihongo o hanashitai desu.", en: "I want to speak Japanese.", scene: "intro" },
    { jp: "早く帰りたいです。", ro: "hayaku kaeritai desu.", en: "I want to go home early.", scene: "workplace" },
    { jp: "もう一度説明してください。", ro: "mō ichido setsumei shite kudasai.", en: "Please explain once more.", scene: "workplace" },
    { jp: "このファイルを送ってください。", ro: "kono fairu o okutte kudasai.", en: "Please send this file.", scene: "IT" }
    ],

  grammar: [
    {
      title: "Aは Bです — A is B",
      pattern: "A は B です。",
      rule: "Topic marker は (pronounced 'wa') states what we're talking about; です is a polite copula meaning 'is/am/are'.",
      examples: [
        { jp: "私はシシルです。", ro: "watashi wa shishiru desu.", en: "I am Shishir." },
        { jp: "これはコードです。", ro: "kore wa kōdo desu.", en: "This is code." },
        { jp: "彼はエンジニアです。", ro: "kare wa enjinia desu.", en: "He is an engineer." }
      ]
    },
    {
      title: "Question with か",
      pattern: "… です か？",
      rule: "Add か at the end of a sentence to turn it into a question. No need for question mark in writing — か already does it.",
      examples: [
        { jp: "学生ですか？", ro: "gakusei desu ka?", en: "Are you a student?" },
        { jp: "今、忙しいですか？", ro: "ima, isogashii desu ka?", en: "Are you busy now?" },
        { jp: "これはバグですか？", ro: "kore wa bagu desu ka?", en: "Is this a bug?" }
      ]
    },
    {
      title: "Object marker を",
      pattern: "… を [verb] ます。",
      rule: "を (pronounced 'o') marks the direct object of a verb — the thing being acted upon.",
      examples: [
        { jp: "コーヒーを飲みます。", ro: "kōhī o nomimasu.", en: "I drink coffee." },
        { jp: "メールを書きます。", ro: "mēru o kakimasu.", en: "I write an email." },
        { jp: "コードをレビューします。", ro: "kōdo o rebyū shimasu.", en: "I review the code." }
      ]
    },
    {
      title: "Location with で and に",
      pattern: "[place] で [action]  /  [place] に [go/exist]",
      rule: "で marks where an action happens; に marks destination or where something exists.",
      examples: [
        { jp: "会社で働きます。", ro: "kaisha de hatarakimasu.", en: "I work at the company." },
        { jp: "東京に行きます。", ro: "tōkyō ni ikimasu.", en: "I'm going to Tokyo." },
        { jp: "家にいます。", ro: "ie ni imasu.", en: "I'm at home." }
      ]
    },
    {
      title: "Possessive / connecting の",
      pattern: "A の B  =  A's B  /  B of A",
      rule: "の links nouns. Note the order: modifier first, head noun second — opposite of English 'of'.",
      examples: [
        { jp: "私の会社", ro: "watashi no kaisha", en: "my company" },
        { jp: "日本語の本", ro: "nihongo no hon", en: "Japanese-language book" },
        { jp: "シシルさんのコード", ro: "shishiru-san no kōdo", en: "Shishir's code" }
      ]
    },
    {
      title: "Negation with ません",
      pattern: "[verb-stem] ません",
      rule: "Replace ます with ません to make the polite negative.",
      examples: [
        { jp: "コーヒーを飲みません。", ro: "kōhī o nomimasen.", en: "I don't drink coffee." },
        { jp: "今日は行きません。", ro: "kyō wa ikimasen.", en: "I'm not going today." },
        { jp: "分かりません。", ro: "wakarimasen.", en: "I don't understand." }
      ]
    },
    {
      title: "Past tense with ました / でした",
      pattern: "[verb-stem] ました  /  N でした",
      rule: "ます → ました for past polite verbs; です → でした for past 'was/were'.",
      examples: [
        { jp: "バグを直しました。", ro: "bagu o naoshimashita.", en: "I fixed the bug." },
        { jp: "昨日は会議でした。", ro: "kinō wa kaigi deshita.", en: "Yesterday was the meeting." },
        { jp: "ミーティングに行きました。", ro: "mītingu ni ikimashita.", en: "I went to the meeting." }
      ]
    },
    {
      title: "て-form + います = ongoing / state",
      pattern: "[verb-て] います",
      rule: "Expresses an action in progress ('-ing') or a resulting state.",
      examples: [
        { jp: "今、会議をしています。", ro: "ima, kaigi o shite imasu.", en: "I'm in a meeting now." },
        { jp: "コードを書いています。", ro: "kōdo o kaite imasu.", en: "I'm writing code." },
        { jp: "サーバーが落ちています。", ro: "sābā ga ochite imasu.", en: "The server is down (state)." }
      ]
    },
    {
      title: "Polite request — てください",
      pattern: "[verb-て] ください",
      rule: "Polite way to ask someone to do something. Soften further with すみませんが….",
      examples: [
        { jp: "ゆっくり話してください。", ro: "yukkuri hanashite kudasai.", en: "Please speak slowly." },
        { jp: "もう一度説明してください。", ro: "mō ichido setsumei shite kudasai.", en: "Please explain once more." },
        { jp: "このファイルを送ってください。", ro: "kono fairu o okutte kudasai.", en: "Please send this file." }
      ]
    },
    {
      title: "Want to do — たい",
      pattern: "[verb-stem] たい です",
      rule: "Expresses the speaker's desire to do something. Use only for yourself — for others, use たがっている.",
      examples: [
        { jp: "コーヒーを飲みたいです。", ro: "kōhī o nomitai desu.", en: "I want to drink coffee." },
        { jp: "日本語を話したいです。", ro: "nihongo o hanashitai desu.", en: "I want to speak Japanese." },
        { jp: "早く帰りたいです。", ro: "hayaku kaeritai desu.", en: "I want to go home early." }
      ]
    }
  ],

  // ──────────────────────────────────────────────────────────────────
  // 30-day curriculum — each day mixes letters + vocab + grammar +
  // sentences so all four skills grow in parallel.
  // Items reference existing data by their primary key (kana ch, word jp,
  // sentence jp, grammar title). The renderer resolves them at runtime.
  // ──────────────────────────────────────────────────────────────────
  chapters: [
    // ── Week 1 — hiragana foundations + survival greetings ──────────
    {
      day: 1, week: 1, minutes: 25,
      title: "Vowels & first hello",
      goal: "Learn the 5 vowels あいうえお and say hello / thank you naturally.",
      kana: { hira: ["あ","い","う","え","お"] },
      words: ["こんにちは","ありがとうございます","すみません","はい","いいえ"],
      grammar: ["🧠 です-family vs ます-family — the two sentence types"],
      sentences: ["おはようございます！","また明日。","おやすみなさい。"],
      practice: "Hover each vowel 3× until you can sing them in a row. On a whiteboard, write each vowel 5 times. Record yourself saying them and compare to the audio."
    },
    {
      day: 2, week: 1, minutes: 25,
      title: "K-row + first self-intro",
      goal: "Add かきくけこ and introduce yourself as 'I am Shishir'.",
      kana: { hira: ["か","き","く","け","こ"] },
      words: ["私","僕","学生","先生","エンジニア"],
      grammar: ["Aは Bです — A is B","1st person — 私 / 僕 / 自分","A は B です — Present affirmative identity"],
      sentences: ["私はシシルです。","私はエンジニアです。","はじめまして、よろしくお願いします。"],
      practice: "Roleplay: introduce yourself in 3 sentences. Use one new K-row kana in your speech ('こんにちは')."
    },
    {
      day: 3, week: 1, minutes: 25,
      title: "S-row + asking questions",
      goal: "Add さしすせそ and turn statements into questions with か.",
      kana: { hira: ["さ","し","す","せ","そ"] },
      words: ["はい","いいえ","そうです","違います"],
      grammar: ["Question with か","🧠 Confusing particles cheat sheet — は を の が に で から も","[Statement] か？— Yes/No question","はい / いいえ — Affirmative & negative answers"],
      sentences: ["お元気ですか？","はい、元気です。","学生ですか？"],
      practice: "Ask Claude 3 yes/no questions about yourself in Japanese. Get them all right before moving on."
    },
    {
      day: 4, week: 1, minutes: 25,
      title: "T-row + これ・それ・あれ",
      goal: "Add たちつてと and learn the こ/そ/あ demonstrative system for things.",
      kana: { hira: ["た","ち","つ","て","と"] },
      words: ["これ","それ","あれ","どれ","本"],
      grammar: [],
      sentences: ["これは何ですか？","それは本です。"],
      practice: "Pick 5 objects on your desk — name each one with これは___です。"
    },
    {
      day: 5, week: 1, minutes: 25,
      title: "N-row + 'what is this?'",
      goal: "Add なにぬねの and ask 何ですか about anything.",
      kana: { hira: ["な","に","ぬ","ね","の"] },
      words: ["何","名前","友達","家族"],
      grammar: ["Possessive / connecting の","A の B — Possession & noun connector","Wh-questions (何 / 誰 / どこ / いつ / なぜ / いくら)","2nd person — [Name]さん (avoid あなた)"],
      sentences: ["これは何ですか？","名前は何ですか？","私の名前はシシルです。"],
      practice: "Build 5 'X の Y' phrases (e.g. 私の会社, 友達の名前). Hover each to confirm pronunciation."
    },
    {
      day: 6, week: 1, minutes: 25,
      title: "H-row + は as topic marker",
      goal: "Add はひふへほ and feel the は = 'wa' rule in real sentences.",
      kana: { hira: ["は","ひ","ふ","へ","ほ"] },
      words: ["今日","明日","昨日"],
      grammar: ["Aは Bです — A is B","🧠 ません vs ありません vs ではありません — the three negatives","[Topic]は [i-adjective]です — i-adjective sentence"],
      sentences: ["今日は月曜日です。","今日は楽しかったです。"],
      practice: "Read each sentence aloud paying attention to は → 'wa'. Record yourself."
    },
    {
      day: 7, week: 1, minutes: 30,
      title: "★ Week 1 review",
      goal: "Re-test all of week 1. Go to the Quiz tab → 'Hiragana → romaji'. Aim for 90% on 20 rounds.",
      kana: { hira: ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ"] },
      words: [],
      grammar: ["Aは Bです — A is B","Question with か","Possessive / connecting の"],
      sentences: ["私はシシルです。","お元気ですか？","これは何ですか？","名前は何ですか？"],
      practice: "On a whiteboard, write all 30 hiragana you've learned. Take a screenshot and ask Claude to grade it."
    },

    // ── Week 2 — finish hiragana + dakuten + numbers / verbs ─────────
    {
      day: 8, week: 2, minutes: 25,
      title: "M-row + numbers 1–10",
      goal: "Add まみむめも and count 1 through 10.",
      kana: { hira: ["ま","み","む","め","も"] },
      words: ["一","二","三","四","五","六","七","八","九","十"],
      grammar: ["Counters — counting things, people, time"],
      sentences: ["今、何時ですか？","少し遅れます。"],
      practice: "Count 1→10 out loud, then count backwards. Quiz yourself on prices: いくらですか？— answer in yen."
    },
    {
      day: 9, week: 2, minutes: 25,
      title: "Y-row + R-row + days of the week",
      goal: "Add やゆよ・らりるれろ and the seven 曜日.",
      kana: { hira: ["や","ゆ","よ","ら","り","る","れ","ろ"] },
      words: ["月曜日","火曜日","水曜日","木曜日","金曜日","土曜日","日曜日"],
      grammar: [],
      sentences: ["今日は月曜日です。","また明日。"],
      practice: "Say what day each of the next 7 days is, starting with today."
    },
    {
      day: 10, week: 2, minutes: 25,
      title: "W-row + ん + を particle",
      goal: "Finish the last hiragana row わ・を・ん and learn を = direct object.",
      kana: { hira: ["わ","を","ん"] },
      words: ["コーヒー","お茶","水"],
      grammar: ["Object marker を","[Subject]は [Object]を [Verb]ます — Present/Future action"],
      sentences: ["コーヒーを飲みますか？","水を飲みます。"],
      practice: "Make 3 sentences using を + a verb you know."
    },
    {
      day: 11, week: 2, minutes: 30,
      title: "Dakuten G & Z + first verbs",
      goal: "Add the voiced rows がぎぐげご・ざじずぜぞ and basic verbs.",
      kana: { hira: ["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ"] },
      words: ["食べる","飲む","行く","来る","する"],
      grammar: ["Verb groups — godan, ichidan, irregular"],
      sentences: ["お昼ごはんを食べに行きませんか？"],
      practice: "On the Hiragana chart, click each ★voiced★ kana once and say the unvoiced parent (が→か, ざ→さ…)."
    },
    {
      day: 12, week: 2, minutes: 30,
      title: "Dakuten D & B + handakuten P",
      goal: "Finish all dakuten/handakuten — だぢづでど・ばびぶべぼ・ぱぴぷぺぽ.",
      kana: { hira: ["だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ"] },
      words: ["バグ","プログラム","パソコン"],
      grammar: [],
      sentences: ["バグを見つけました。","このバグは難しいです。"],
      practice: "Read each new kana out loud. Then read these IT words: バグ・プログラム・データ・パソコン."
    },
    {
      day: 13, week: 2, minutes: 30,
      title: "Yōon combos + ます polite form",
      goal: "Learn the small-ゃゅょ contractions and use ます for polite present tense.",
      kana: { hira: ["きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ"] },
      words: ["書く","読む","話す","聞く"],
      grammar: ["Object marker を","と (to) — With (companion) / and (listing)","へ (e) — Direction marker (formal alternative to に)"],
      sentences: ["メールを書きます。","コードをレビューします。","毎日、コードを書きます。"],
      practice: "Take 3 dictionary-form verbs (食べる, 飲む, 書く) and rewrite in ます form. Say them aloud."
    },
    {
      day: 14, week: 2, minutes: 35,
      title: "★ Week 2 review",
      goal: "All hiragana mastered. 95% on the Hiragana quiz. Build & say 5 original ます-form sentences.",
      kana: { hira: ["ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","が","ざ","だ","ば","ぱ"] },
      words: [],
      grammar: ["Aは Bです — A is B","Question with か","Object marker を"],
      sentences: ["これは何ですか？","コーヒーを飲みますか？","お昼ごはんを食べに行きませんか？"],
      practice: "Final hiragana drill: handwrite all 46 base kana on a whiteboard. Screenshot → Claude review."
    },

    // ── Week 3 — katakana + work vocabulary + verb conjugation ──────
    {
      day: 15, week: 3, minutes: 30,
      title: "Katakana A & K + first IT loanwords",
      goal: "Start katakana with アイウエオ・カキクケコ and recognize IT loanwords.",
      kana: { kata: ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ"] },
      words: ["コード","コンピュータ","データ","ファイル"],
      grammar: [],
      sentences: ["コードレビューをお願いします。"],
      practice: "Find 3 katakana words on your phone or laptop screen. Read them aloud."
    },
    {
      day: 16, week: 3, minutes: 30,
      title: "Katakana S/T/N + workplace nouns",
      goal: "Add サシスセソ・タチツテト・ナニヌネノ and workplace vocab.",
      kana: { kata: ["サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ"] },
      words: ["会社","仕事","会議","上司","同僚"],
      grammar: ["Aは Bです — A is B"],
      sentences: ["私はエンジニアです。","会議は何時からですか？"],
      practice: "Watch out: シ vs ツ, ソ vs ン. Hover each pair 3× to lock the difference."
    },
    {
      day: 17, week: 3, minutes: 30,
      title: "Katakana H/M/Y + ません negative",
      goal: "Add ハヒフヘホ・マミムメモ・ヤユヨ and learn negative ません.",
      kana: { kata: ["ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ"] },
      words: ["分かる","話す"],
      grammar: ["Negation with ません","Adjective conjugation — i-adj vs na-adj","[Verb]ません — Present/Future negative","A は B じゃありません — Present negative identity","[Topic]は [na-adjective]です — na-adjective sentence"],
      sentences: ["すみません、ちょっと分かりません。","コーヒーを飲みません。"],
      practice: "Take 3 ます verbs from yesterday and flip each to ません. Say each pair aloud."
    },
    {
      day: 18, week: 3, minutes: 30,
      title: "Katakana R/W + ました past tense",
      goal: "Add ラリルレロ・ワヲン and use ました for past actions.",
      kana: { kata: ["ラ","リ","ル","レ","ロ","ワ","ヲ","ン"] },
      words: ["直す","送る"],
      grammar: ["Past tense with ました / でした","[Verb]ました — Past affirmative","A は B でした — Past affirmative identity","[Verb]ませんでした — Past negative","3rd person — 彼 / 彼女 / あの人 / [Name]さん"],
      sentences: ["バグを直しました。","プルリクを送りました。","昨日は会議でした。"],
      practice: "Tell Claude (in Japanese) three things you did yesterday using ました."
    },
    {
      day: 19, week: 3, minutes: 30,
      title: "Katakana dakuten + て-form intro",
      goal: "Add ガザダバパ rows in katakana. Learn て-form for connecting actions.",
      kana: { kata: ["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ"] },
      words: ["バグ","レビュー","ミーティング"],
      grammar: ["て-form + います = ongoing / state"],
      sentences: ["コードを書いています。","今、会議をしています。"],
      practice: "Use 〜ています to describe what you're doing right now (in Japanese)."
    },
    {
      day: 20, week: 3, minutes: 30,
      title: "ています ongoing + IT phrase pack",
      goal: "Solidify ongoing-action ています with workplace IT phrases.",
      kana: { kata: [] },
      words: ["サーバー","テスト","メール"],
      grammar: ["て-form + います = ongoing / state","ので (node) — Because (politer than から)","[Verb-て]います — Ongoing / Continuous","[Reason]から、[Result] — Because (cause-and-effect)"],
      sentences: ["サーバーが落ちています。","テストが失敗しています。","コードを書いています。"],
      practice: "Voice-record yourself describing 3 things happening at work right now using ています."
    },
    {
      day: 21, week: 3, minutes: 35,
      title: "★ Week 3 review",
      goal: "All katakana mastered. Mix hiragana + katakana in the Quiz tab.",
      kana: {},
      words: [],
      grammar: ["Negation with ません","Past tense with ました / でした","て-form + います = ongoing / state"],
      sentences: ["バグを直しました。","コードを書いています。","すみません、ちょっと分かりません。"],
      practice: "Read 5 random katakana cards from the chart with hover-play OFF. Then check yourself."
    },

    // ── Week 4 — particles, requests, real conversation ─────────────
    {
      day: 22, week: 4, minutes: 30,
      title: "Location particles で and に",
      goal: "Use で for action-location and に for destination / existence.",
      kana: {},
      words: ["駅","電車","家","学校","働く"],
      grammar: ["Location with で and に","や (ya) — And (non-exhaustive 'and others')","[Place]で / [Place]に — Action vs destination","あります / います — Existence ('there is')"],
      sentences: ["駅はどこですか？","会議は何時からですか？"],
      practice: "Make 3 sentences: one with X で work, one with に go, one with に exist."
    },
    {
      day: 23, week: 4, minutes: 30,
      title: "の possessive deep-dive",
      goal: "Chain nouns smoothly: 私の会社の同僚 (my company's colleague).",
      kana: {},
      words: ["私","会社","コード","同僚"],
      grammar: ["Possessive / connecting の","A の B — Possession & noun connector"],
      sentences: ["私の名前はシシルです。"],
      practice: "Build a 3-noun chain about yourself (e.g. 私の家族の写真)."
    },
    {
      day: 24, week: 4, minutes: 30,
      title: "Want to do with たい",
      goal: "Express your own wishes with たいです.",
      kana: {},
      words: ["勉強する","食べる","飲む"],
      grammar: ["Want to do — たい","よ (yo) — Sentence-end emphasis (informing / asserting)","ね (ne) — Sentence-end agreement-seeking","[Verb-stem]たいです — 'I want to do'"],
      sentences: ["コーヒーを飲みたいです。","日本語を話したいです。","早く帰りたいです。"],
      practice: "Tell Claude 5 things you want to do this weekend in Japanese."
    },
    {
      day: 25, week: 4, minutes: 30,
      title: "Polite requests with てください",
      goal: "Ask people to do things politely in real situations.",
      kana: {},
      words: ["送る","話す","直す"],
      grammar: ["Polite request — てください","[Verb-て]ください — Polite request"],
      sentences: ["ゆっくり話してください。","もう一度説明してください。","このファイルを送ってください。"],
      practice: "Make 3 requests you'd actually use at work. Say each aloud."
    },
    {
      day: 26, week: 4, minutes: 35,
      title: "Workplace dialog mastery",
      goal: "Run a 60-second mock standup in Japanese.",
      kana: {},
      words: ["会議","上司","同僚","バグ"],
      grammar: ["て-form + います = ongoing / state","Past tense with ました / でした","けど / が — But / however (contrast)","[Verb-て]、[Verb] — Linking actions (and / then)"],
      sentences: ["お疲れさまでした。","お先に失礼します。","コードレビューをお願いします。","バグを直しました。","少し遅れます。"],
      practice: "Roleplay with Claude: standup update — 'yesterday I…, today I'm working on…, blocked by…'"
    },
    {
      day: 27, week: 4, minutes: 35,
      title: "Daily-life dialog mastery",
      goal: "Survive a café and a station entirely in Japanese.",
      kana: {},
      words: ["駅","コーヒー","お茶","ご飯"],
      grammar: ["Question with か","Object marker を","[Verb-stem]ませんか / ましょう — Invitation & 'let's'"],
      sentences: ["駅はどこですか？","これはいくらですか？","コーヒーを飲みますか？","ゆっくり話してください。","もう一度お願いします。"],
      practice: "Roleplay: order coffee + ask the way to the station. Switch roles."
    },
    {
      day: 28, week: 4, minutes: 35,
      title: "Self-introduction speech",
      goal: "Deliver a 90-second self-introduction (jikoshōkai) without notes.",
      kana: {},
      words: ["私","エンジニア","日本語","勉強する"],
      grammar: ["Aは Bです — A is B","Possessive / connecting の","Want to do — たい"],
      sentences: ["はじめまして、よろしくお願いします。","私はシシルです。","私はエンジニアです。","ネパールから来ました。","日本語を勉強しています。","日本語を話したいです。"],
      practice: "Record your full intro. Listen back. Re-record until it flows."
    },
    {
      day: 29, week: 4, minutes: 40,
      title: "Cumulative review",
      goal: "Run 30 quiz questions across all 4 modes. Identify weak spots.",
      kana: {},
      words: [],
      grammar: ["Aは Bです — A is B","Question with か","Object marker を","Location with で and に","Possessive / connecting の","Negation with ません","Past tense with ました / でした","て-form + います = ongoing / state","Polite request — てください","Want to do — たい"],
      sentences: [],
      practice: "Quiz tab → run 10 of each mode. Note any below 80% — those are tomorrow's drills."
    },
    {
      day: 30, week: 4, minutes: 45,
      title: "★ Final test & next-month plan",
      goal: "Pass the cumulative test with ≥85%. Plan the next 30 days.",
      kana: {},
      words: [],
      grammar: [],
      sentences: ["はじめまして、よろしくお願いします。","お疲れさまでした。","また明日。","ありがとうございます。"],
      practice: "Long roleplay with Claude: 5-minute conversation covering intro, work, and small talk. Then ask Claude what to focus on next month."
    }
  ],

  // ──────────────────────────────────────────────────────────────────
  // Conversations — multi-turn dialogues, NHK-style.
  // Each turn has speaker A or B; player can step through or play all.
  // Designed to use vocab + grammar already in the curriculum.
  // ──────────────────────────────────────────────────────────────────
  conversations: [
    {
      title: "First day at the office",
      scene: "workplace",
      level: "beginner",
      summary: "Shishir meets a new colleague on his first morning. Practice greetings, self-intro, and よろしく.",
      a: { name: "Tanaka", role: "新しい同僚 / colleague" },
      b: { name: "Shishir", role: "あなた / you" },
      turns: [
        { s: "A", jp: "おはようございます。", ro: "ohayō gozaimasu.", en: "Good morning." },
        { s: "B", jp: "おはようございます。", ro: "ohayō gozaimasu.", en: "Good morning." },
        { s: "A", jp: "はじめまして。田中です。", ro: "hajimemashite. tanaka desu.", en: "Nice to meet you. I'm Tanaka." },
        { s: "B", jp: "はじめまして、シシルです。", ro: "hajimemashite, shishiru desu.", en: "Nice to meet you, I'm Shishir." },
        { s: "A", jp: "シシルさんはエンジニアですか？", ro: "shishiru-san wa enjinia desu ka?", en: "Are you an engineer, Shishir?" },
        { s: "B", jp: "はい、エンジニアです。ネパールから来ました。", ro: "hai, enjinia desu. nepāru kara kimashita.", en: "Yes, I'm an engineer. I came from Nepal." },
        { s: "A", jp: "そうですか。よろしくお願いします。", ro: "sō desu ka. yoroshiku onegaishimasu.", en: "I see. Pleased to work with you." },
        { s: "B", jp: "こちらこそ、よろしくお願いします。", ro: "kochira koso, yoroshiku onegaishimasu.", en: "Likewise, pleased to work with you." }
      ],
      notes: "こちらこそ = 'It is I (who should say so)'. Use it to return a よろしく politely."
    },
    {
      title: "Asking for code review",
      scene: "IT",
      level: "beginner",
      summary: "You finished a feature and want a senior to review your pull request.",
      a: { name: "Shishir", role: "あなた / you" },
      b: { name: "Yamada", role: "シニア / senior" },
      turns: [
        { s: "A", jp: "山田さん、ちょっと、いいですか？", ro: "yamada-san, chotto, ii desu ka?", en: "Yamada-san, do you have a moment?" },
        { s: "B", jp: "はい、何ですか？", ro: "hai, nan desu ka?", en: "Yes, what is it?" },
        { s: "A", jp: "プルリクを送りました。コードレビューをお願いします。", ro: "pururiku o okurimashita. kōdo rebyū o onegaishimasu.", en: "I sent the pull request. Please review my code." },
        { s: "B", jp: "わかりました。後で見ます。", ro: "wakarimashita. ato de mimasu.", en: "Got it. I'll look at it later." },
        { s: "A", jp: "ありがとうございます。", ro: "arigatō gozaimasu.", en: "Thank you very much." }
      ],
      notes: "ちょっと、いいですか is the standard polite 'do you have a sec?' opener."
    },
    {
      title: "Daily standup update",
      scene: "workplace",
      level: "beginner",
      summary: "Shishir reports yesterday's progress and today's plan in standup.",
      a: { name: "PM", role: "プロジェクトマネージャー" },
      b: { name: "Shishir", role: "あなた / you" },
      turns: [
        { s: "A", jp: "シシルさん、お願いします。", ro: "shishiru-san, onegaishimasu.", en: "Shishir, please go ahead." },
        { s: "B", jp: "昨日はバグを直しました。", ro: "kinō wa bagu o naoshimashita.", en: "Yesterday I fixed the bug." },
        { s: "B", jp: "今日はテストを書いています。", ro: "kyō wa tesuto o kaite imasu.", en: "Today I'm writing tests." },
        { s: "B", jp: "問題はありません。", ro: "mondai wa arimasen.", en: "No blockers." },
        { s: "A", jp: "ありがとうございます。", ro: "arigatō gozaimasu.", en: "Thank you." }
      ],
      notes: "Yesterday → today → blockers — the universal standup format works in Japanese too."
    },
    {
      title: "Reporting a server problem",
      scene: "IT",
      level: "beginner",
      summary: "Something is broken in production. You alert your boss.",
      a: { name: "Shishir", role: "あなた / you" },
      b: { name: "Boss", role: "上司" },
      turns: [
        { s: "A", jp: "すみません、問題があります。", ro: "sumimasen, mondai ga arimasu.", en: "Excuse me, there's a problem." },
        { s: "B", jp: "何ですか？", ro: "nan desu ka?", en: "What is it?" },
        { s: "A", jp: "サーバーが落ちています。", ro: "sābā ga ochite imasu.", en: "The server is down." },
        { s: "B", jp: "いつからですか？", ro: "itsu kara desu ka?", en: "Since when?" },
        { s: "A", jp: "十分前からです。", ro: "juppun mae kara desu.", en: "Since ten minutes ago." },
        { s: "B", jp: "わかりました。すぐ見ます。", ro: "wakarimashita. sugu mimasu.", en: "Got it. I'll look right away." }
      ],
      notes: "すぐ = 'right away'. 〜分前 = 'X minutes ago' (juppun = 10 minutes)."
    },
    {
      title: "Lunch invitation",
      scene: "daily",
      level: "beginner",
      summary: "A coworker asks if you'd like to grab lunch.",
      a: { name: "Suzuki", role: "同僚" },
      b: { name: "Shishir", role: "あなた / you" },
      turns: [
        { s: "A", jp: "シシルさん、お昼ごはんを食べに行きませんか？", ro: "shishiru-san, ohirugohan o tabe ni ikimasen ka?", en: "Shishir, want to go grab lunch?" },
        { s: "B", jp: "いいですね！何を食べたいですか？", ro: "ii desu ne! nani o tabetai desu ka?", en: "Sounds good! What do you want to eat?" },
        { s: "A", jp: "ラーメンはどうですか？", ro: "rāmen wa dō desu ka?", en: "How about ramen?" },
        { s: "B", jp: "いいですね、行きましょう！", ro: "ii desu ne, ikimashō!", en: "Nice, let's go!" }
      ],
      notes: "〜ませんか = soft invitation. 〜ましょう = 'let's …'. 〜はどうですか = 'how about …?'"
    },
    {
      title: "Joining a meeting late",
      scene: "workplace",
      level: "beginner",
      summary: "You're stuck in another call and arrive late.",
      a: { name: "Shishir", role: "あなた / you" },
      b: { name: "Team", role: "メンバー" },
      turns: [
        { s: "A", jp: "すみません、遅れました。", ro: "sumimasen, okuremashita.", en: "Sorry, I'm late." },
        { s: "B", jp: "大丈夫です。今、説明しています。", ro: "daijōbu desu. ima, setsumei shite imasu.", en: "It's fine. We're explaining it now." },
        { s: "A", jp: "もう一度説明してもらえますか？", ro: "mō ichido setsumei shite moraemasu ka?", en: "Could you explain once more?" },
        { s: "B", jp: "はい、いいですよ。", ro: "hai, ii desu yo.", en: "Sure, no problem." }
      ],
      notes: "大丈夫 (daijōbu) = 'fine / OK'. Used constantly — keep it close."
    },
    {
      title: "Ordering coffee at a café",
      scene: "daily",
      level: "beginner",
      summary: "Café Japanese — order, ask price, pay.",
      a: { name: "Shishir", role: "あなた / you" },
      b: { name: "Staff", role: "店員" },
      turns: [
        { s: "B", jp: "いらっしゃいませ。", ro: "irasshaimase.", en: "Welcome." },
        { s: "A", jp: "コーヒーを一つ、お願いします。", ro: "kōhī o hitotsu, onegaishimasu.", en: "One coffee, please." },
        { s: "B", jp: "はい、四百円です。", ro: "hai, yonhyaku-en desu.", en: "OK, that's 400 yen." },
        { s: "A", jp: "これでお願いします。", ro: "kore de onegaishimasu.", en: "I'll pay with this." },
        { s: "B", jp: "ありがとうございました。", ro: "arigatō gozaimashita.", en: "Thank you very much." }
      ],
      notes: "一つ (hitotsu) = 'one [thing]'. いらっしゃいませ is the staff's standard 'welcome'."
    },
    {
      title: "Asking the way to the station",
      scene: "daily",
      level: "beginner",
      summary: "Lost? Ask politely and listen for landmarks.",
      a: { name: "Shishir", role: "あなた / you" },
      b: { name: "Stranger", role: "人" },
      turns: [
        { s: "A", jp: "すみません、駅はどこですか？", ro: "sumimasen, eki wa doko desu ka?", en: "Excuse me, where is the station?" },
        { s: "B", jp: "あそこです。まっすぐ行ってください。", ro: "asoko desu. massugu itte kudasai.", en: "It's over there. Please go straight." },
        { s: "A", jp: "歩いてどのくらいですか？", ro: "aruite dono kurai desu ka?", en: "About how long on foot?" },
        { s: "B", jp: "五分くらいです。", ro: "go-fun kurai desu.", en: "About five minutes." },
        { s: "A", jp: "ありがとうございます。助かりました。", ro: "arigatō gozaimasu. tasukarimashita.", en: "Thank you, that helped." }
      ],
      notes: "まっすぐ = 'straight ahead'. 〜くらい = 'about / approximately'."
    },
    // ── Expansion: phone, email, shopping, medical, casual ──
    {
      title: "Phone call — taking a message",
      scene: "phone",
      level: "beginner",
      summary: "A coworker calls; you answer the office phone.",
      a: {"name":"Caller","role":"外部の人 / outside caller"},
      b: {"name":"Shishir","role":"あなた / you (answering)"},
      turns: [
        { s: "B", jp: "もしもし、ABC会社です。", ro: "moshi moshi, ABC kaisha desu.", en: "Hello, this is ABC Company." },
        { s: "A", jp: "田中ですが、山田さんお願いします。", ro: "tanaka desu ga, yamada-san onegaishimasu.", en: "This is Tanaka — may I speak with Yamada?" },
        { s: "B", jp: "少々お待ちください。", ro: "shōshō omachi kudasai.", en: "Please hold a moment." },
        { s: "B", jp: "すみません、山田は今、席を外しております。", ro: "sumimasen, yamada wa ima, seki o hazushite orimasu.", en: "I'm sorry, Yamada is away from his desk right now." },
        { s: "A", jp: "では、後でかけ直します。", ro: "dewa, ato de kakenaoshimasu.", en: "Then I'll call back later." },
        { s: "B", jp: "ありがとうございます。失礼いたします。", ro: "arigatō gozaimasu. shitsurei itashimasu.", en: "Thank you. Goodbye." }
      ],
      notes: "もしもし is ONLY used on phone. 席を外しております = humble for 'is away from seat'. 失礼いたします = formal phone goodbye."
    },
    {
      title: "Sending an email — formal opener and closer",
      scene: "email",
      level: "beginner",
      summary: "Standard structure for a workplace email in Japanese.",
      a: {"name":"Email","role":"メール本文 / email body"},
      b: {"name":"Notes","role":"解説 / commentary"},
      turns: [
        { s: "A", jp: "山田様", ro: "yamada-sama", en: "Dear Mr. Yamada (formal recipient)" },
        { s: "A", jp: "お世話になっております。", ro: "osewa ni natte orimasu.", en: "Thank you for your continued support. (standard opener)" },
        { s: "A", jp: "ABC会社のシシルです。", ro: "ABC kaisha no shishiru desu.", en: "I am Shishir from ABC Company." },
        { s: "A", jp: "プルリクを送りましたので、ご確認お願いいたします。", ro: "pururiku o okurimashita node, go-kakunin onegai itashimasu.", en: "Because I sent the pull request, please confirm it." },
        { s: "A", jp: "よろしくお願いいたします。", ro: "yoroshiku onegai itashimasu.", en: "Best regards. (closer)" },
        { s: "A", jp: "シシル", ro: "shishiru", en: "Shishir (signature)" }
      ],
      notes: "様 = -sama, the most respectful suffix (recipient). ご確認 = humble form of 確認 (confirmation). The opener お世話になっております is mandatory in business email."
    },
    {
      title: "Convenience store — buying lunch",
      scene: "shopping",
      level: "beginner",
      summary: "Quick exchange at the register at a 7-Eleven / FamilyMart.",
      a: {"name":"Staff","role":"店員 / clerk"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "いらっしゃいませ。", ro: "irasshaimase.", en: "Welcome." },
        { s: "B", jp: "これとこれをお願いします。", ro: "kore to kore o onegaishimasu.", en: "I'll take this and this." },
        { s: "A", jp: "お弁当を温めますか？", ro: "obentō o atatamemasu ka?", en: "Should I warm the bento?" },
        { s: "B", jp: "はい、お願いします。", ro: "hai, onegaishimasu.", en: "Yes, please." },
        { s: "A", jp: "袋は要りますか？", ro: "fukuro wa irimasu ka?", en: "Do you need a bag?" },
        { s: "B", jp: "いいえ、大丈夫です。", ro: "iie, daijōbu desu.", en: "No, I'm fine." },
        { s: "A", jp: "六百円になります。", ro: "roppyaku-en ni narimasu.", en: "That comes to 600 yen." },
        { s: "B", jp: "クレジットカードで。", ro: "kurejitto kādo de.", en: "By credit card." }
      ],
      notes: "温めますか is the universal 'should I warm it?' question for cold lunches. 〜になります is restaurant/retail-speak for 'it is'. 〜で = 'with / by means of'."
    },
    {
      title: "At the doctor — describing pain",
      scene: "medical",
      level: "beginner",
      summary: "Quick clinic visit; describe symptoms.",
      a: {"name":"Doctor","role":"医者"},
      b: {"name":"Shishir","role":"あなた / you (patient)"},
      turns: [
        { s: "A", jp: "どうしましたか？", ro: "dō shimashita ka?", en: "What's the matter?" },
        { s: "B", jp: "頭がとても痛いです。", ro: "atama ga totemo itai desu.", en: "My head hurts a lot." },
        { s: "A", jp: "いつからですか？", ro: "itsu kara desu ka?", en: "Since when?" },
        { s: "B", jp: "昨日からです。", ro: "kinō kara desu.", en: "Since yesterday." },
        { s: "A", jp: "熱はありますか？", ro: "netsu wa arimasu ka?", en: "Do you have a fever?" },
        { s: "B", jp: "はい、少し。", ro: "hai, sukoshi.", en: "Yes, a little." },
        { s: "A", jp: "薬を出します。", ro: "kusuri o dashimasu.", en: "I'll prescribe medicine." }
      ],
      notes: "どうしましたか = the universal 'what happened / what's wrong?'. 〜痛い = 'X hurts' (頭が痛い = headache, お腹が痛い = stomach hurts)."
    },
    {
      title: "Casual chat with a friend",
      scene: "casual",
      level: "beginner",
      summary: "Casual くだけた forms — what friends actually say.",
      a: {"name":"Friend","role":"友達"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "おっす！元気？", ro: "ossu! genki?", en: "Yo! How's it going?" },
        { s: "B", jp: "うん、元気だよ。", ro: "un, genki da yo.", en: "Yeah, I'm good." },
        { s: "A", jp: "週末、何する？", ro: "shūmatsu, nani suru?", en: "What're you doing this weekend?" },
        { s: "B", jp: "映画を見たい。", ro: "eiga o mitai.", en: "I want to watch a movie." },
        { s: "A", jp: "いいね！一緒に行こう。", ro: "ii ne! issho ni ikō.", en: "Nice! Let's go together." },
        { s: "B", jp: "やった！", ro: "yatta!", en: "Yay!" }
      ],
      notes: "おっす is masculine casual greeting. うん = casual はい. 〜だよ = casual 〜です. 行こう = volitional, casual 'let's go'. やった = 'I did it / yes!'"
    }
  ],

  // ──────────────────────────────────────────────────────────────────
  // Sentence Structures — comprehensive, beginner-friendly guide.
  // Each structure has a formula, full breakdown of every token (role,
  // pronunciation, meaning), and 5–6 similar examples broken down the
  // same way. Categories run from declarative → questions → answers
  // → person → tense → other essentials.
  // ──────────────────────────────────────────────────────────────────
  structures: [
    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 0 — FOUNDATION (read these FIRST)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Foundation — read first",
      title: "🧠 です-family vs ます-family — the two sentence types",
      formula: "Noun sentence: [Topic]は + [Noun] です。   |   Verb sentence: [Topic]は + [Verb]ます。",
      description: "Every Japanese sentence is one of two types. NOUN sentences (です-family) describe identity/state — like Nepali हुँ/हो/हुन्. VERB sentences (ます-family) describe actions — like Nepali गर्छु/जान्छु/खान्छु. Knowing which family you're in tells you which negative/past form to use.",
      person: "Any",
      tense: "Both forms cover present/future; each has its own past & negative.",
      main: {
        jp: "私は学生です。",
        ro: "watashi wa gakusei desu.",
        en: "I am a student. (NOUN sentence — uses です)",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (topic)", meaning: "I / म (ma)" },
          { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker (~को बारेमा)" },
          { t: "学生", ro: "gakusei", role: "Noun (predicate)", meaning: "student / विद्यार्थी (vidyarthi)" },
          { t: "です", ro: "desu", role: "Copula (です-family)", meaning: "is/am (हुँ/हो)" }
        ]
      },
      examples: [
        { jp: "私はエンジニアです。", ro: "watashi wa enjinia desu.", en: "I am an engineer. (NOUN — identity)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer / इन्जिनियर" },
            { t: "です", ro: "desu", role: "Copula (です-family)", meaning: "am / हुँ" }
          ] },
        { jp: "私はコーヒーを飲みます。", ro: "watashi wa kōhī o nomimasu.", en: "I drink coffee. (VERB — action)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "コーヒー", ro: "kōhī", role: "Noun (object)", meaning: "coffee / कफी" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (ます-family)", meaning: "drink / पिउँछु" }
          ] },
        { jp: "彼は先生です。", ro: "kare wa sensei desu.", en: "He is a teacher. (NOUN)",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he / ऊ" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "先生", ro: "sensei", role: "Noun", meaning: "teacher / शिक्षक" },
            { t: "です", ro: "desu", role: "Copula (です-family)", meaning: "is / हो" }
          ] },
        { jp: "彼は食べます。", ro: "kare wa tabemasu.", en: "He eats. (VERB)",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he / ऊ" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "食べます", ro: "tabemasu", role: "Verb (ます-family)", meaning: "eats / खान्छ" }
          ] },
        { jp: "私はネパール人です。", ro: "watashi wa nepāru-jin desu.", en: "I am Nepali. (NOUN — identity)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "ネパール人", ro: "nepāru-jin", role: "Noun (compound)", meaning: "Nepali (person) / नेपाली" },
            { t: "です", ro: "desu", role: "Copula (です-family)", meaning: "am / हुँ" }
          ] },
        { jp: "彼女は行きます。", ro: "kanojo wa ikimasu.", en: "She goes. (VERB)",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she / उनी" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "行きます", ro: "ikimasu", role: "Verb (ます-family)", meaning: "goes / जान्छिन्" }
          ] },
        { jp: "私は本を読みます。", ro: "watashi wa hon o yomimasu.", en: "I read a book. (VERB sentence)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "本", ro: "hon", role: "Noun (object)", meaning: "book / किताब" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読みます", ro: "yomimasu", role: "Verb (ます-family)", meaning: "read / पढ्छु" }
          ] }
      ]
    },

    {
      category: "Foundation — read first",
      title: "🧠 ません vs ありません vs ではありません — the three negatives",
      formula: "Verb negative: [Verb-stem] ません  |  Existence negative: ありません  |  Noun negative: [Noun] ではありません (=じゃありません)",
      description: "Beginners confuse these. They look similar but do different jobs:\n• ません — negate ANY action verb (don't eat, don't go).\n• ありません — only negates あります 'exists/have' (no money, no problem).\n• ではありません / じゃありません — negate a NOUN identity (is NOT a teacher). Same form; じゃ is casual contraction.\nNepali brain map: ません = ~दिन (action negative), ありません = छैन (existence negative), ではありません = होइन (identity negative).",
      person: "Any",
      tense: "Present negative",
      main: {
        jp: "食べません。",
        ro: "tabemasen.",
        en: "I don't eat. (action negative — ません)",
        tokens: [
          { t: "食べません", ro: "tabemasen", role: "Verb (polite negative — ます-family)", meaning: "do not eat / खाँदिन" }
        ]
      },
      examples: [
        { jp: "行きません。", ro: "ikimasen.", en: "I don't go. (action negative)",
          tokens: [
            { t: "行きません", ro: "ikimasen", role: "Verb (polite negative)", meaning: "do not go / जाँदिन" }
          ] },
        { jp: "飲みません。", ro: "nomimasen.", en: "I don't drink. (action negative)",
          tokens: [
            { t: "飲みません", ro: "nomimasen", role: "Verb (polite negative)", meaning: "do not drink / पिउँदिन" }
          ] },
        { jp: "お金がありません。", ro: "okane ga arimasen.", en: "I don't have money. (existence negative — ありません)",
          tokens: [
            { t: "お金", ro: "okane", role: "Noun", meaning: "money / पैसा" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ありません", ro: "arimasen", role: "Verb (existence negative)", meaning: "doesn't exist / छैन" }
          ] },
        { jp: "問題はありません。", ro: "mondai wa arimasen.", en: "There is no problem. (existence negative)",
          tokens: [
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem / समस्या" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "ありません", ro: "arimasen", role: "Verb (existence negative)", meaning: "doesn't exist / छैन" }
          ] },
        { jp: "私は学生ではありません。", ro: "watashi wa gakusei dewa arimasen.", en: "I am not a student. (noun-identity negative — ではありません, formal)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "学生", ro: "gakusei", role: "Noun", meaning: "student / विद्यार्थी" },
            { t: "では", ro: "dewa", role: "Particle combo (formal)", meaning: "as for ~ (it isn't)" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not / होइन" }
          ] },
        { jp: "私は先生じゃありません。", ro: "watashi wa sensei ja arimasen.", en: "I am not a teacher. (noun-identity negative — じゃありません, everyday)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I / म" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "先生", ro: "sensei", role: "Noun", meaning: "teacher / शिक्षक" },
            { t: "じゃ", ro: "ja", role: "Casual contraction of では", meaning: "(not)" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not / होइन" }
          ] },
        { jp: "時間がありません。", ro: "jikan ga arimasen.", en: "I don't have time. (existence negative)",
          tokens: [
            { t: "時間", ro: "jikan", role: "Noun", meaning: "time / समय" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ありません", ro: "arimasen", role: "Verb (existence negative)", meaning: "doesn't exist / छैन" }
          ] }
      ]
    },

    {
      category: "Foundation — read first",
      title: "🧠 Confusing particles cheat sheet — は を の が に で から も",
      formula: "は = topic | を = direct object | の = of/'s | が = subject | に = to/in | で = at/by | から = from/because | も = also",
      description: "Particles are tiny but change a sentence's meaning completely. They tell you WHO is doing WHAT to WHOM and WHERE. This card stacks the eight most confusing particles side-by-side with one example each — hover any colored particle to see its role, click to hear it.",
      person: "Any",
      tense: "Tense-neutral (particles attach to whatever comes before them)",
      main: {
        jp: "私は会社で同僚とコーヒーを飲みます。",
        ro: "watashi wa kaisha de dōryō to kōhī o nomimasu.",
        en: "I drink coffee with a colleague at the company.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun", meaning: "I (the topic)" },
          { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "as for ~ (writes 'ha', says 'wa')" },
          { t: "会社", ro: "kaisha", role: "Noun (place)", meaning: "company" },
          { t: "で", ro: "de", role: "Particle — action location", meaning: "AT (where action happens)" },
          { t: "同僚", ro: "dōryō", role: "Noun", meaning: "colleague" },
          { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "WITH (together)" },
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "marks the OBJECT of the verb" },
          { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
        ]
      },
      examples: [
        { jp: "私は学生です。", ro: "watashi wa gakusei desu.", en: "は (wa) — TOPIC marker. 'As for me, [I am] a student.'",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker — सबैभन्दा महत्वपूर्ण particle" },
            { t: "学生", ro: "gakusei", role: "Noun", meaning: "student" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is/am" }
          ] },
        { jp: "コーヒーを飲みます。", ro: "kōhī o nomimasu.", en: "を (o) — DIRECT OBJECT. 'I drink coffee' (coffee is the thing acted on).",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun (object)", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object marker", meaning: "marks WHAT the verb acts on (written 'wo', said 'o')" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
          ] },
        { jp: "私の本", ro: "watashi no hon", en: "の (no) — POSSESSIVE / OF. Modifier comes FIRST: 'my book' = 'I-of book'.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun (modifier)", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive/connector", meaning: "'s / of (links two nouns)" },
            { t: "本", ro: "hon", role: "Noun (head)", meaning: "book" }
          ] },
        { jp: "雨が降っています。", ro: "ame ga futte imasu.", en: "が (ga) — SUBJECT marker. 'Rain is falling.' Use が when introducing NEW info or with skill words.",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun (subject)", meaning: "rain" },
            { t: "が", ro: "ga", role: "Particle — subject marker", meaning: "marks the SUBJECT (especially new info)" },
            { t: "降って", ro: "futte", role: "Verb (て-form)", meaning: "falling" },
            { t: "います", ro: "imasu", role: "Auxiliary (continuous)", meaning: "is" }
          ] },
        { jp: "東京に行きます。", ro: "tōkyō ni ikimasu.", en: "に (ni) — TO / DESTINATION / EXISTS-AT. 'I go to Tokyo.' Also marks where things EXIST.",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "TO (direction / target / existence point)" },
            { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
          ] },
        { jp: "電車で行きます。", ro: "densha de ikimasu.", en: "で (de) — BY MEANS / AT LOCATION OF ACTION. 'I go BY train.' (で = means / where action happens; ≠ に which is destination)",
          tokens: [
            { t: "電車", ro: "densha", role: "Noun", meaning: "train" },
            { t: "で", ro: "de", role: "Particle — means / action location", meaning: "BY (means) or AT (where action happens)" },
            { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
          ] },
        { jp: "会社から帰ります。", ro: "kaisha kara kaerimasu.", en: "から (kara) — FROM / SINCE / BECAUSE. 'I return FROM the company.'",
          tokens: [
            { t: "会社", ro: "kaisha", role: "Noun (origin)", meaning: "company" },
            { t: "から", ro: "kara", role: "Particle — origin / reason", meaning: "FROM (place) / SINCE (time) / BECAUSE (reason)" },
            { t: "帰ります", ro: "kaerimasu", role: "Verb (polite)", meaning: "return home" }
          ] },
        { jp: "私もエンジニアです。", ro: "watashi mo enjinia desu.", en: "も (mo) — ALSO / TOO. 'I AM ALSO an engineer.' Replaces は/が when adding 'also'.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "も", ro: "mo", role: "Particle — also / too", meaning: "ALSO / TOO (replaces は or を)" },
            { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer" },
            { t: "です", ro: "desu", role: "Copula", meaning: "am" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 1 — DECLARATIVE (Normal statements: "A is B")
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Declarative — Identity (A is B)",
      title: "A は B です — Present affirmative identity",
      formula: "[Topic] は + [Noun] です。",
      description: "The most basic Japanese sentence. Use it to say what something or someone IS. 'です' is the polite copula ('to be'). The particle は is written 'ha' but pronounced 'wa' when it marks the topic.",
      person: "Works for 1st, 2nd, and 3rd person",
      tense: "Present / non-past (also covers general truths)",
      main: {
        jp: "私はエンジニアです。",
        ro: "watashi wa enjinia desu.",
        en: "I am an engineer.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (subject/topic)", meaning: "I, me" },
          { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "as for ~ (marks topic; written ha, said wa)" },
          { t: "エンジニア", ro: "enjinia", role: "Noun (predicate)", meaning: "engineer" },
          { t: "です", ro: "desu", role: "Copula (polite 'to be')", meaning: "is / am / are" }
        ]
      },
      examples: [
        { jp: "これは本です。", ro: "kore wa hon desu.", en: "This is a book.",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative pronoun", meaning: "this (thing near me)" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼は先生です。", ro: "kare wa sensei desu.", en: "He is a teacher.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd person)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "先生", ro: "sensei", role: "Noun", meaning: "teacher" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "今日は月曜日です。", ro: "kyō wa getsuyōbi desu.", en: "Today is Monday.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "月曜日", ro: "getsuyōbi", role: "Noun", meaning: "Monday" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "私の名前はシシルです。", ro: "watashi no namae wa shishiru desu.", en: "My name is Shishir.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s / of" },
            { t: "名前", ro: "namae", role: "Noun", meaning: "name" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "シシル", ro: "shishiru", role: "Proper noun (katakana)", meaning: "Shishir" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "田中さんは同僚です。", ro: "tanaka-san wa dōryō desu.", en: "Tanaka is my colleague.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun (name)", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific suffix", meaning: "Mr/Ms (politeness)" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "同僚", ro: "dōryō", role: "Noun", meaning: "colleague" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "あれは新しいパソコンです。", ro: "are wa atarashii pasokon desu.", en: "That (over there) is a new PC.",
          tokens: [
            { t: "あれ", ro: "are", role: "Demonstrative pronoun", meaning: "that (far from both)" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "新しい", ro: "atarashii", role: "i-adjective (modifier)", meaning: "new" },
            { t: "パソコン", ro: "pasokon", role: "Noun (loanword)", meaning: "PC / laptop" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "私の家は東京です。", ro: "watashi no ie wa tōkyō desu.", en: "My home is in Tokyo.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "家", ro: "ie", role: "Noun", meaning: "home" },
            { t: "は", ro: "wa", role: "Particle — topic marker", meaning: "topic marker" },
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] }
      ]
    },

    {
      category: "Declarative — Identity (A is B)",
      title: "A は B じゃありません — Present negative identity",
      formula: "[Topic] は + [Noun] じゃありません。  (casual: じゃない)",
      description: "Negative form of 'A is B'. Replace です with じゃありません (everyday polite) or では ありません (formal). じゃない = casual.",
      person: "1st, 2nd, 3rd person",
      tense: "Present negative ('is not')",
      main: {
        jp: "私は学生じゃありません。",
        ro: "watashi wa gakusei ja arimasen.",
        en: "I am not a student.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "学生", ro: "gakusei", role: "Noun", meaning: "student" },
          { t: "じゃ", ro: "ja", role: "Contraction of では", meaning: "negation prefix" },
          { t: "ありません", ro: "arimasen", role: "Negative existence/copula", meaning: "is not" }
        ]
      },
      examples: [
        { jp: "これはバグじゃありません。", ro: "kore wa bagu ja arimasen.", en: "This is not a bug.",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "バグ", ro: "bagu", role: "Noun (loanword)", meaning: "bug" },
            { t: "じゃ", ro: "ja", role: "Contraction of では", meaning: "negation prefix" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "彼女はエンジニアじゃありません。", ro: "kanojo wa enjinia ja arimasen.", en: "She is not an engineer.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd person)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer" },
            { t: "じゃ", ro: "ja", role: "Contraction", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "今日は月曜日じゃありません。", ro: "kyō wa getsuyōbi ja arimasen.", en: "Today is not Monday.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "月曜日", ro: "getsuyōbi", role: "Noun", meaning: "Monday" },
            { t: "じゃ", ro: "ja", role: "Contraction", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "あれは私の本じゃありません。", ro: "are wa watashi no hon ja arimasen.", en: "That is not my book.",
          tokens: [
            { t: "あれ", ro: "are", role: "Demonstrative", meaning: "that (far)" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "じゃ", ro: "ja", role: "Contraction", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "問題は難しくありません。", ro: "mondai wa muzukashiku arimasen.", en: "The problem is not difficult.",
          tokens: [
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "難しく", ro: "muzukashiku", role: "i-adjective (negative stem)", meaning: "difficult (-く form)" },
            { t: "ありません", ro: "arimasen", role: "Negative auxiliary", meaning: "is not" }
          ] },
        { jp: "彼は上司じゃありません。", ro: "kare wa jōshi ja arimasen.", en: "He is not the boss.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "上司", ro: "jōshi", role: "Noun", meaning: "boss" },
            { t: "じゃ", ro: "ja", role: "Contraction", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "これは私のメールじゃありません。", ro: "kore wa watashi no mēru ja arimasen.", en: "This is not my email.",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "じゃ", ro: "ja", role: "Contraction of では", meaning: "negation prefix" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] }
      ]
    },

    {
      category: "Declarative — Identity (A is B)",
      title: "A は B でした — Past affirmative identity",
      formula: "[Topic] は + [Noun] でした。",
      description: "Past tense of 'A is B'. です → でした to say something WAS something. Used for past states, completed conditions.",
      person: "1st, 2nd, 3rd person",
      tense: "Past affirmative ('was / were')",
      main: {
        jp: "昨日は会議でした。",
        ro: "kinō wa kaigi deshita.",
        en: "Yesterday was the meeting.",
        tokens: [
          { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
          { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
        ]
      },
      examples: [
        { jp: "私は学生でした。", ro: "watashi wa gakusei deshita.", en: "I was a student.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "学生", ro: "gakusei", role: "Noun", meaning: "student" },
            { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
          ] },
        { jp: "彼はプログラマーでした。", ro: "kare wa puroguramā deshita.", en: "He was a programmer.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "プログラマー", ro: "puroguramā", role: "Noun (loanword)", meaning: "programmer" },
            { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
          ] },
        { jp: "テストは簡単でした。", ro: "tesuto wa kantan deshita.", en: "The test was easy.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun (loanword)", meaning: "test" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "簡単", ro: "kantan", role: "na-adjective", meaning: "easy" },
            { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
          ] },
        { jp: "今日は楽しかったです。", ro: "kyō wa tanoshikatta desu.", en: "Today was fun.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "楽しかった", ro: "tanoshikatta", role: "i-adjective past form", meaning: "was fun (い → かった)" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(politeness)" }
          ] },
        { jp: "昨日は忙しかったです。", ro: "kinō wa isogashikatta desu.", en: "Yesterday was busy.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "忙しかった", ro: "isogashikatta", role: "i-adjective past", meaning: "was busy" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(politeness)" }
          ] },
        { jp: "あの人は同僚でした。", ro: "ano hito wa dōryō deshita.", en: "That person was a colleague.",
          tokens: [
            { t: "あの", ro: "ano", role: "Demonstrative modifier", meaning: "that (over there)" },
            { t: "人", ro: "hito", role: "Noun", meaning: "person" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "同僚", ro: "dōryō", role: "Noun", meaning: "colleague" },
            { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
          ] },
        { jp: "先週は雨でした。", ro: "senshū wa ame deshita.", en: "Last week was rainy.",
          tokens: [
            { t: "先週", ro: "senshū", role: "Time noun", meaning: "last week" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
            { t: "でした", ro: "deshita", role: "Past copula", meaning: "was" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 2 — VERB SENTENCES (SOV order)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Verb sentences — Action (SOV)",
      title: "[Subject]は [Object]を [Verb]ます — Present/Future action",
      formula: "[Subject] は + [Object] を + [Verb-stem] ます。",
      description: "Japanese is Subject-Object-Verb. を marks the direct object (the thing the verb acts on). ます is the polite ending — covers BOTH present habitual and future intent.",
      person: "1st, 2nd, 3rd person (subject usually omitted if obvious)",
      tense: "Present / future (non-past)",
      main: {
        jp: "私はコーヒーを飲みます。",
        ro: "watashi wa kōhī o nomimasu.",
        en: "I drink coffee. / I'll drink coffee.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (subject)", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "コーヒー", ro: "kōhī", role: "Noun (object, loanword)", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — direct object", meaning: "marks the object (written wo, said o)" },
          { t: "飲みます", ro: "nomimasu", role: "Verb (polite present/future)", meaning: "drink (will drink)" }
        ]
      },
      examples: [
        { jp: "彼はメールを書きます。", ro: "kare wa mēru o kakimasu.", en: "He writes/will write an email.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きます", ro: "kakimasu", role: "Verb (polite)", meaning: "writes" }
          ] },
        { jp: "毎日コードを書きます。", ro: "mainichi kōdo o kakimasu.", en: "Every day I write code.",
          tokens: [
            { t: "毎日", ro: "mainichi", role: "Adverb (time)", meaning: "every day" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きます", ro: "kakimasu", role: "Verb", meaning: "write" }
          ] },
        { jp: "彼女は本を読みます。", ro: "kanojo wa hon o yomimasu.", en: "She reads a book.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読みます", ro: "yomimasu", role: "Verb (polite)", meaning: "reads" }
          ] },
        { jp: "明日、ファイルを送ります。", ro: "ashita, fairu o okurimasu.", en: "Tomorrow I'll send the file.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "ファイル", ro: "fairu", role: "Noun", meaning: "file" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送ります", ro: "okurimasu", role: "Verb (polite)", meaning: "send / will send" }
          ] },
        { jp: "私たちは日本語を勉強します。", ro: "watashitachi wa nihongo o benkyō shimasu.", en: "We study Japanese.",
          tokens: [
            { t: "私たち", ro: "watashitachi", role: "Pronoun (1st pl.)", meaning: "we" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese language" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "勉強", ro: "benkyō", role: "Noun (verbal)", meaning: "study" },
            { t: "します", ro: "shimasu", role: "Verb (polite, do)", meaning: "do" }
          ] },
        { jp: "上司はバグを直します。", ro: "jōshi wa bagu o naoshimasu.", en: "The boss fixes the bug.",
          tokens: [
            { t: "上司", ro: "jōshi", role: "Noun (subject)", meaning: "boss" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "直します", ro: "naoshimasu", role: "Verb (polite)", meaning: "fixes" }
          ] },
        { jp: "毎朝、お茶を飲みます。", ro: "maiasa, ocha o nomimasu.", en: "Every morning I drink tea.",
          tokens: [
            { t: "毎朝", ro: "maiasa", role: "Time noun", meaning: "every morning" },
            { t: "お茶", ro: "ocha", role: "Noun", meaning: "tea" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
          ] }
      ]
    },

    {
      category: "Verb sentences — Action (SOV)",
      title: "[Verb]ません — Present/Future negative",
      formula: "[Object] を + [Verb-stem] ません。",
      description: "Polite negative. Replace ます with ません. Same form for 'don't' and 'won't'.",
      person: "1st, 2nd, 3rd person",
      tense: "Present negative / future negative",
      main: {
        jp: "私はコーヒーを飲みません。",
        ro: "watashi wa kōhī o nomimasen.",
        en: "I don't drink coffee.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "飲みません", ro: "nomimasen", role: "Verb (polite negative)", meaning: "do not drink" }
        ]
      },
      examples: [
        { jp: "今日は行きません。", ro: "kyō wa ikimasen.", en: "I'm not going today.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic/contrast", meaning: "topic marker" },
            { t: "行きません", ro: "ikimasen", role: "Verb (polite negative)", meaning: "do not go" }
          ] },
        { jp: "彼はメールを送りません。", ro: "kare wa mēru o okurimasen.", en: "He doesn't send emails.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送りません", ro: "okurimasen", role: "Verb (polite negative)", meaning: "doesn't send" }
          ] },
        { jp: "私は肉を食べません。", ro: "watashi wa niku o tabemasen.", en: "I don't eat meat.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "肉", ro: "niku", role: "Noun", meaning: "meat" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べません", ro: "tabemasen", role: "Verb (polite negative)", meaning: "do not eat" }
          ] },
        { jp: "わかりません。", ro: "wakarimasen.", en: "I don't understand.",
          tokens: [
            { t: "わかりません", ro: "wakarimasen", role: "Verb (polite negative; subject 'I' omitted)", meaning: "do not understand" }
          ] },
        { jp: "彼女は日本語を話しません。", ro: "kanojo wa nihongo o hanashimasen.", en: "She doesn't speak Japanese.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese language" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "話しません", ro: "hanashimasen", role: "Verb (polite negative)", meaning: "doesn't speak" }
          ] },
        { jp: "明日は働きません。", ro: "ashita wa hatarakimasen.", en: "I'm not working tomorrow.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "は", ro: "wa", role: "Particle — topic/contrast", meaning: "topic marker" },
            { t: "働きません", ro: "hatarakimasen", role: "Verb (polite negative)", meaning: "do not work" }
          ] },
        { jp: "私はビールを飲みません。", ro: "watashi wa bīru o nomimasen.", en: "I don't drink beer.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "ビール", ro: "bīru", role: "Noun (loanword)", meaning: "beer" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みません", ro: "nomimasen", role: "Verb (polite negative)", meaning: "do not drink" }
          ] }
      ]
    },

    {
      category: "Verb sentences — Action (SOV)",
      title: "[Verb]ました — Past affirmative",
      formula: "[Object] を + [Verb-stem] ました。",
      description: "Past tense polite affirmative. Replace ます with ました. Used for completed actions.",
      person: "1st, 2nd, 3rd person",
      tense: "Past affirmative",
      main: {
        jp: "バグを直しました。",
        ro: "bagu o naoshimashita.",
        en: "I fixed the bug.",
        tokens: [
          { t: "バグ", ro: "bagu", role: "Noun (object)", meaning: "bug" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "直しました", ro: "naoshimashita", role: "Verb (polite past)", meaning: "fixed" }
        ]
      },
      examples: [
        { jp: "メールを送りました。", ro: "mēru o okurimashita.", en: "I sent an email.",
          tokens: [
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送りました", ro: "okurimashita", role: "Verb (polite past)", meaning: "sent" }
          ] },
        { jp: "プルリクを送りました。", ro: "pururiku o okurimashita.", en: "I sent the pull request.",
          tokens: [
            { t: "プルリク", ro: "pururiku", role: "Noun (loanword, abbrev.)", meaning: "pull request" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送りました", ro: "okurimashita", role: "Verb (polite past)", meaning: "sent" }
          ] },
        { jp: "彼は会議に行きました。", ro: "kare wa kaigi ni ikimashita.", en: "He went to the meeting.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to (direction)" },
            { t: "行きました", ro: "ikimashita", role: "Verb (polite past)", meaning: "went" }
          ] },
        { jp: "昨日、コードを書きました。", ro: "kinō, kōdo o kakimashita.", en: "Yesterday I wrote code.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きました", ro: "kakimashita", role: "Verb (polite past)", meaning: "wrote" }
          ] },
        { jp: "ご飯を食べました。", ro: "gohan o tabemashita.", en: "I ate (a meal).",
          tokens: [
            { t: "ご飯", ro: "gohan", role: "Noun", meaning: "rice / meal" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べました", ro: "tabemashita", role: "Verb (polite past)", meaning: "ate" }
          ] },
        { jp: "彼女は本を読みました。", ro: "kanojo wa hon o yomimashita.", en: "She read a book.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読みました", ro: "yomimashita", role: "Verb (polite past)", meaning: "read (past)" }
          ] },
        { jp: "友達に会いました。", ro: "tomodachi ni aimashita.", en: "I met a friend.",
          tokens: [
            { t: "友達", ro: "tomodachi", role: "Noun", meaning: "friend" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "with / to" },
            { t: "会いました", ro: "aimashita", role: "Verb (polite past)", meaning: "met" }
          ] }
      ]
    },

    {
      category: "Verb sentences — Action (SOV)",
      title: "[Verb]ませんでした — Past negative",
      formula: "[Object] を + [Verb-stem] ませんでした。",
      description: "Polite past negative — 'didn't do'. Combine ません + でした.",
      person: "1st, 2nd, 3rd person",
      tense: "Past negative",
      main: {
        jp: "昨日、会議に行きませんでした。",
        ro: "kinō, kaigi ni ikimasen deshita.",
        en: "I didn't go to the meeting yesterday.",
        tokens: [
          { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
          { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
          { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
          { t: "行きませんでした", ro: "ikimasen deshita", role: "Verb (polite past negative)", meaning: "did not go" }
        ]
      },
      examples: [
        { jp: "メールを送りませんでした。", ro: "mēru o okurimasen deshita.", en: "I didn't send the email.",
          tokens: [
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送りませんでした", ro: "okurimasen deshita", role: "Verb (past negative)", meaning: "did not send" }
          ] },
        { jp: "彼はコードを書きませんでした。", ro: "kare wa kōdo o kakimasen deshita.", en: "He didn't write code.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きませんでした", ro: "kakimasen deshita", role: "Verb (past negative)", meaning: "did not write" }
          ] },
        { jp: "今朝、ご飯を食べませんでした。", ro: "kesa, gohan o tabemasen deshita.", en: "I didn't eat (a meal) this morning.",
          tokens: [
            { t: "今朝", ro: "kesa", role: "Time noun", meaning: "this morning" },
            { t: "ご飯", ro: "gohan", role: "Noun", meaning: "rice / meal" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べませんでした", ro: "tabemasen deshita", role: "Verb (past negative)", meaning: "did not eat" }
          ] },
        { jp: "わかりませんでした。", ro: "wakarimasen deshita.", en: "I didn't understand.",
          tokens: [
            { t: "わかりませんでした", ro: "wakarimasen deshita", role: "Verb (past negative)", meaning: "did not understand" }
          ] },
        { jp: "彼女は来ませんでした。", ro: "kanojo wa kimasen deshita.", en: "She didn't come.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "来ませんでした", ro: "kimasen deshita", role: "Verb (past negative)", meaning: "did not come" }
          ] },
        { jp: "昨日は働きませんでした。", ro: "kinō wa hatarakimasen deshita.", en: "I didn't work yesterday.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "は", ro: "wa", role: "Particle — topic/contrast", meaning: "topic marker" },
            { t: "働きませんでした", ro: "hatarakimasen deshita", role: "Verb (past negative)", meaning: "did not work" }
          ] },
        { jp: "パーティーに行きませんでした。", ro: "pātī ni ikimasen deshita.", en: "I didn't go to the party.",
          tokens: [
            { t: "パーティー", ro: "pātī", role: "Noun (loanword)", meaning: "party" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きませんでした", ro: "ikimasen deshita", role: "Verb (polite past negative)", meaning: "did not go" }
          ] }
      ]
    },

    {
      category: "Verb sentences — Action (SOV)",
      title: "[Verb-て]います — Ongoing / Continuous",
      formula: "[Verb in て-form] います。",
      description: "Action in progress (-ing) OR resulting state. Convert verb to て-form, add います. Note: いる is for animate; here います is auxiliary.",
      person: "1st, 2nd, 3rd person",
      tense: "Present continuous (action in progress) or stative (resulting state)",
      main: {
        jp: "コードを書いています。",
        ro: "kōdo o kaite imasu.",
        en: "I am writing code.",
        tokens: [
          { t: "コード", ro: "kōdo", role: "Noun (object)", meaning: "code" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "書いて", ro: "kaite", role: "Verb (て-form of 書く)", meaning: "writing (connective)" },
          { t: "います", ro: "imasu", role: "Auxiliary verb (polite)", meaning: "am / is (ongoing)" }
        ]
      },
      examples: [
        { jp: "今、会議をしています。", ro: "ima, kaigi o shite imasu.", en: "I'm in a meeting now.",
          tokens: [
            { t: "今", ro: "ima", role: "Time noun", meaning: "now" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "して", ro: "shite", role: "Verb (て-form of する)", meaning: "doing" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "am" }
          ] },
        { jp: "サーバーが落ちています。", ro: "sābā ga ochite imasu.", en: "The server is down.",
          tokens: [
            { t: "サーバー", ro: "sābā", role: "Noun (subject)", meaning: "server" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "落ちて", ro: "ochite", role: "Verb (て-form of 落ちる)", meaning: "fallen / down" },
            { t: "います", ro: "imasu", role: "Auxiliary (resulting state)", meaning: "is (in that state)" }
          ] },
        { jp: "彼はメールを読んでいます。", ro: "kare wa mēru o yonde imasu.", en: "He is reading the email.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読んで", ro: "yonde", role: "Verb (て-form of 読む)", meaning: "reading" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "is" }
          ] },
        { jp: "日本語を勉強しています。", ro: "nihongo o benkyō shite imasu.", en: "I'm studying Japanese.",
          tokens: [
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "勉強して", ro: "benkyō shite", role: "Verb (て-form, compound)", meaning: "studying" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "am" }
          ] },
        { jp: "テストが失敗しています。", ro: "tesuto ga shippai shite imasu.", en: "The test is failing.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun (subject)", meaning: "test" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "失敗して", ro: "shippai shite", role: "Verb (て-form, compound)", meaning: "failing" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "is" }
          ] },
        { jp: "彼女は電話で話しています。", ro: "kanojo wa denwa de hanashite imasu.", en: "She is talking on the phone.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "電話", ro: "denwa", role: "Noun", meaning: "phone" },
            { t: "で", ro: "de", role: "Particle — means", meaning: "by means of" },
            { t: "話して", ro: "hanashite", role: "Verb (て-form of 話す)", meaning: "talking" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "is" }
          ] },
        { jp: "雨が降っています。", ro: "ame ga futte imasu.", en: "It's raining.",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun (subject)", meaning: "rain" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "降って", ro: "futte", role: "Verb (て-form of 降る)", meaning: "falling" },
            { t: "います", ro: "imasu", role: "Auxiliary (continuous)", meaning: "is" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 3 — ADJECTIVE SENTENCES
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Adjective sentences",
      title: "[Topic]は [i-adjective]です — i-adjective sentence",
      formula: "[Topic] は + [i-adjective ending in い] です。",
      description: "i-adjectives end in い (大きい, 新しい, 楽しい). They become predicates DIRECTLY — です is added only for politeness, not grammatical necessity.",
      person: "Any",
      tense: "Present (negative: 〜くないです / past: 〜かったです)",
      main: {
        jp: "このバグは難しいです。",
        ro: "kono bagu wa muzukashii desu.",
        en: "This bug is difficult.",
        tokens: [
          { t: "この", ro: "kono", role: "Demonstrative modifier", meaning: "this (+ noun)" },
          { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "難しい", ro: "muzukashii", role: "i-adjective (predicate)", meaning: "difficult" },
          { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite ender)" }
        ]
      },
      examples: [
        { jp: "コーヒーは熱いです。", ro: "kōhī wa atsui desu.", en: "The coffee is hot.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "熱い", ro: "atsui", role: "i-adjective", meaning: "hot" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "今日は忙しいです。", ro: "kyō wa isogashii desu.", en: "Today is busy.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "忙しい", ro: "isogashii", role: "i-adjective", meaning: "busy" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "この本は面白いです。", ro: "kono hon wa omoshiroi desu.", en: "This book is interesting.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "面白い", ro: "omoshiroi", role: "i-adjective", meaning: "interesting" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "サーバーは速いです。", ro: "sābā wa hayai desu.", en: "The server is fast.",
          tokens: [
            { t: "サーバー", ro: "sābā", role: "Noun", meaning: "server" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "速い", ro: "hayai", role: "i-adjective", meaning: "fast" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "この問題は難しくないです。", ro: "kono mondai wa muzukashikunai desu.", en: "This problem is not difficult.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "難しくない", ro: "muzukashikunai", role: "i-adjective negative (い→くない)", meaning: "not difficult" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "昨日は楽しかったです。", ro: "kinō wa tanoshikatta desu.", en: "Yesterday was fun.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "楽しかった", ro: "tanoshikatta", role: "i-adjective past (い→かった)", meaning: "was fun" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] },
        { jp: "駅は近いです。", ro: "eki wa chikai desu.", en: "The station is close.",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun", meaning: "station" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "近い", ro: "chikai", role: "i-adjective", meaning: "close / near" },
            { t: "です", ro: "desu", role: "Politeness marker", meaning: "(polite)" }
          ] }
      ]
    },

    {
      category: "Adjective sentences",
      title: "[Topic]は [na-adjective]です — na-adjective sentence",
      formula: "[Topic] は + [na-adjective] です。   (when modifying a noun: na-adj + な + Noun)",
      description: "na-adjectives behave like nouns. Use です directly. To modify a noun, add な (例: 静かな部屋 'a quiet room').",
      person: "Any",
      tense: "Present (negative: じゃありません / past: でした)",
      main: {
        jp: "この問題は簡単です。",
        ro: "kono mondai wa kantan desu.",
        en: "This problem is easy.",
        tokens: [
          { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
          { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "簡単", ro: "kantan", role: "na-adjective", meaning: "easy / simple" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" }
        ]
      },
      examples: [
        { jp: "彼は元気です。", ro: "kare wa genki desu.", en: "He is well / energetic.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "元気", ro: "genki", role: "na-adjective", meaning: "well / energetic" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼女は親切です。", ro: "kanojo wa shinsetsu desu.", en: "She is kind.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "親切", ro: "shinsetsu", role: "na-adjective", meaning: "kind" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "この部屋は静かです。", ro: "kono heya wa shizuka desu.", en: "This room is quiet.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "部屋", ro: "heya", role: "Noun", meaning: "room" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "静か", ro: "shizuka", role: "na-adjective", meaning: "quiet" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼はとても有名です。", ro: "kare wa totemo yūmei desu.", en: "He is very famous.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "とても", ro: "totemo", role: "Adverb", meaning: "very" },
            { t: "有名", ro: "yūmei", role: "na-adjective", meaning: "famous" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "この駅は便利です。", ro: "kono eki wa benri desu.", en: "This station is convenient.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "駅", ro: "eki", role: "Noun", meaning: "station" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "便利", ro: "benri", role: "na-adjective", meaning: "convenient" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "テストは簡単じゃありません。", ro: "tesuto wa kantan ja arimasen.", en: "The test is not easy.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "簡単", ro: "kantan", role: "na-adjective", meaning: "easy" },
            { t: "じゃ", ro: "ja", role: "Contraction of では", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "この仕事は大変です。", ro: "kono shigoto wa taihen desu.", en: "This work is tough.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "仕事", ro: "shigoto", role: "Noun", meaning: "work / job" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "大変", ro: "taihen", role: "na-adjective", meaning: "tough / serious" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 4 — QUESTION SENTENCES
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Question sentences",
      title: "[Statement] か？— Yes/No question",
      formula: "[Any polite sentence] + か？",
      description: "Add か at the end of any polite sentence to turn it into a yes/no question. The か itself replaces the question mark, but '？' is often added in casual writing. Voice rises slightly at the end.",
      person: "Usually directed at 2nd person (you), but can ask about anyone",
      tense: "Any tense (depends on the verb/copula)",
      main: {
        jp: "学生ですか？",
        ro: "gakusei desu ka?",
        en: "Are you a student?",
        tokens: [
          { t: "学生", ro: "gakusei", role: "Noun (predicate)", meaning: "student" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is/are" },
          { t: "か", ro: "ka", role: "Particle — question marker", meaning: "(turns sentence into a question)" }
        ]
      },
      examples: [
        { jp: "これはバグですか？", ro: "kore wa bagu desu ka?", en: "Is this a bug?",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "今、忙しいですか？", ro: "ima, isogashii desu ka?", en: "Are you busy now?",
          tokens: [
            { t: "今", ro: "ima", role: "Time noun", meaning: "now" },
            { t: "忙しい", ro: "isogashii", role: "i-adjective", meaning: "busy" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "コーヒーを飲みますか？", ro: "kōhī o nomimasu ka?", en: "Do you drink coffee? / Want some coffee?",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "会議は終わりましたか？", ro: "kaigi wa owarimashita ka?", en: "Has the meeting ended?",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "終わりました", ro: "owarimashita", role: "Verb (past)", meaning: "ended" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "彼は同僚ですか？", ro: "kare wa dōryō desu ka?", en: "Is he your colleague?",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "同僚", ro: "dōryō", role: "Noun", meaning: "colleague" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "明日、来ますか？", ro: "ashita, kimasu ka?", en: "Are you coming tomorrow?",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "来ます", ro: "kimasu", role: "Verb (polite)", meaning: "come" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "日本語が分かりますか？", ro: "nihongo ga wakarimasu ka?", en: "Do you understand Japanese?",
          tokens: [
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "分かります", ro: "wakarimasu", role: "Verb (polite)", meaning: "understand" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] }
      ]
    },

    {
      category: "Question sentences",
      title: "Wh-questions (何 / 誰 / どこ / いつ / なぜ / いくら)",
      formula: "[Topic] は + [Wh-word] + です/ます か？",
      description: "Insert the question word where the unknown info goes. Order stays the same as a statement — Japanese does NOT move the question word to the front.",
      person: "Usually 2nd person directed",
      tense: "Any",
      main: {
        jp: "これは何ですか？",
        ro: "kore wa nan desu ka?",
        en: "What is this?",
        tokens: [
          { t: "これ", ro: "kore", role: "Demonstrative pronoun", meaning: "this" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "何", ro: "nan", role: "Question word (noun)", meaning: "what (read 'nan' before です/で/と)" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" },
          { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
        ]
      },
      examples: [
        { jp: "名前は何ですか？", ro: "namae wa nan desu ka?", en: "What is your name?",
          tokens: [
            { t: "名前", ro: "namae", role: "Noun", meaning: "name" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "何", ro: "nan", role: "Question word", meaning: "what" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "あの人は誰ですか？", ro: "ano hito wa dare desu ka?", en: "Who is that person?",
          tokens: [
            { t: "あの", ro: "ano", role: "Demonstrative modifier", meaning: "that (over there)" },
            { t: "人", ro: "hito", role: "Noun", meaning: "person" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "誰", ro: "dare", role: "Question word", meaning: "who" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "駅はどこですか？", ro: "eki wa doko desu ka?", en: "Where is the station?",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun", meaning: "station" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "どこ", ro: "doko", role: "Question word (place)", meaning: "where" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "会議はいつですか？", ro: "kaigi wa itsu desu ka?", en: "When is the meeting?",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "いつ", ro: "itsu", role: "Question word (time)", meaning: "when" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "これはいくらですか？", ro: "kore wa ikura desu ka?", en: "How much is this?",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "いくら", ro: "ikura", role: "Question word (price)", meaning: "how much" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "どうしてバグが起きましたか？", ro: "dōshite bagu ga okimashita ka?", en: "Why did the bug occur?",
          tokens: [
            { t: "どうして", ro: "dōshite", role: "Question word (reason)", meaning: "why" },
            { t: "バグ", ro: "bagu", role: "Noun (subject)", meaning: "bug" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "起きました", ro: "okimashita", role: "Verb (past)", meaning: "occurred" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "何時に来ますか？", ro: "nanji ni kimasu ka?", en: "What time will you come?",
          tokens: [
            { t: "何時", ro: "nanji", role: "Question word (time)", meaning: "what time" },
            { t: "に", ro: "ni", role: "Particle — time target", meaning: "at" },
            { t: "来ます", ro: "kimasu", role: "Verb (polite)", meaning: "come" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 5 — ANSWER SENTENCES
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Answer sentences",
      title: "はい / いいえ — Affirmative & negative answers",
      formula: "はい、[restated predicate] です/ます。  /  いいえ、[negated predicate] じゃありません/ません。",
      description: "Japanese answers usually echo the predicate from the question. はい = yes, いいえ = no. Adding そうです ('that's right') is very natural.",
      person: "1st person (the answerer)",
      tense: "Matches the question",
      main: {
        jp: "はい、エンジニアです。",
        ro: "hai, enjinia desu.",
        en: "Yes, I'm an engineer.",
        tokens: [
          { t: "はい", ro: "hai", role: "Interjection", meaning: "yes" },
          { t: "エンジニア", ro: "enjinia", role: "Noun (predicate)", meaning: "engineer" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is/am" }
        ]
      },
      examples: [
        { jp: "いいえ、学生じゃありません。", ro: "iie, gakusei ja arimasen.", en: "No, I'm not a student.",
          tokens: [
            { t: "いいえ", ro: "iie", role: "Interjection", meaning: "no" },
            { t: "学生", ro: "gakusei", role: "Noun", meaning: "student" },
            { t: "じゃ", ro: "ja", role: "Contraction", meaning: "not" },
            { t: "ありません", ro: "arimasen", role: "Negative copula", meaning: "is not" }
          ] },
        { jp: "はい、そうです。", ro: "hai, sō desu.", en: "Yes, that's right.",
          tokens: [
            { t: "はい", ro: "hai", role: "Interjection", meaning: "yes" },
            { t: "そう", ro: "sō", role: "Adverb", meaning: "that way / so" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "いいえ、違います。", ro: "iie, chigaimasu.", en: "No, that's not right.",
          tokens: [
            { t: "いいえ", ro: "iie", role: "Interjection", meaning: "no" },
            { t: "違います", ro: "chigaimasu", role: "Verb (polite)", meaning: "is different / wrong" }
          ] },
        { jp: "はい、わかりました。", ro: "hai, wakarimashita.", en: "Yes, I understand.",
          tokens: [
            { t: "はい", ro: "hai", role: "Interjection", meaning: "yes" },
            { t: "わかりました", ro: "wakarimashita", role: "Verb (past = realized state)", meaning: "understood / got it" }
          ] },
        { jp: "いいえ、まだです。", ro: "iie, mada desu.", en: "No, not yet.",
          tokens: [
            { t: "いいえ", ro: "iie", role: "Interjection", meaning: "no" },
            { t: "まだ", ro: "mada", role: "Adverb", meaning: "still / not yet" },
            { t: "です", ro: "desu", role: "Copula (placeholder)", meaning: "is" }
          ] },
        { jp: "はい、元気です。", ro: "hai, genki desu.", en: "Yes, I'm well.",
          tokens: [
            { t: "はい", ro: "hai", role: "Interjection", meaning: "yes" },
            { t: "元気", ro: "genki", role: "na-adjective", meaning: "well / energetic" },
            { t: "です", ro: "desu", role: "Copula", meaning: "am" }
          ] },
        { jp: "はい、お願いします。", ro: "hai, onegaishimasu.", en: "Yes, please.",
          tokens: [
            { t: "はい", ro: "hai", role: "Interjection", meaning: "yes" },
            { t: "お願いします", ro: "onegaishimasu", role: "Verb (humble polite)", meaning: "please / request" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 6 — PERSON-SPECIFIC USAGE
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Person — 1st / 2nd / 3rd",
      title: "1st person — 私 / 僕 / 自分",
      formula: "私は + [predicate]。   (often the 私は is dropped)",
      description: "私 (watashi) is universal & polite. 僕 (boku) is masculine casual. Native speakers usually OMIT 1st-person pronouns when context is clear.",
      person: "1st person (I)",
      tense: "Any",
      main: {
        jp: "私はシシルです。",
        ro: "watashi wa shishiru desu.",
        en: "I am Shishir.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (1st, polite)", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "シシル", ro: "shishiru", role: "Proper noun", meaning: "Shishir" },
          { t: "です", ro: "desu", role: "Copula", meaning: "am" }
        ]
      },
      examples: [
        { jp: "僕はエンジニアです。", ro: "boku wa enjinia desu.", en: "I'm an engineer. (male, casual)",
          tokens: [
            { t: "僕", ro: "boku", role: "Pronoun (1st, male, casual)", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer" },
            { t: "です", ro: "desu", role: "Copula", meaning: "am" }
          ] },
        { jp: "ネパールから来ました。", ro: "nepāru kara kimashita.", en: "I came from Nepal. (subject 'I' is omitted)",
          tokens: [
            { t: "ネパール", ro: "nepāru", role: "Proper noun", meaning: "Nepal" },
            { t: "から", ro: "kara", role: "Particle — origin", meaning: "from" },
            { t: "来ました", ro: "kimashita", role: "Verb (polite past)", meaning: "came" }
          ] },
        { jp: "私たちのチームです。", ro: "watashitachi no chīmu desu.", en: "It's our team.",
          tokens: [
            { t: "私たち", ro: "watashitachi", role: "Pronoun (1st plural)", meaning: "we / us" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s / of" },
            { t: "チーム", ro: "chīmu", role: "Noun (loanword)", meaning: "team" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "自分でやります。", ro: "jibun de yarimasu.", en: "I'll do it myself.",
          tokens: [
            { t: "自分", ro: "jibun", role: "Reflexive pronoun", meaning: "oneself / myself" },
            { t: "で", ro: "de", role: "Particle — means", meaning: "by" },
            { t: "やります", ro: "yarimasu", role: "Verb (polite)", meaning: "do" }
          ] },
        { jp: "コードレビューをお願いします。", ro: "kōdo rebyū o onegaishimasu.", en: "Please review my code. (1st person request)",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "レビュー", ro: "rebyū", role: "Noun", meaning: "review" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "お願いします", ro: "onegaishimasu", role: "Verb (humble polite)", meaning: "please / I request" }
          ] },
        { jp: "私の名前はシシルです。", ro: "watashi no namae wa shishiru desu.", en: "My name is Shishir.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun (1st)", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "名前", ro: "namae", role: "Noun", meaning: "name" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "シシル", ro: "shishiru", role: "Proper noun", meaning: "Shishir" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "私は東京に住んでいます。", ro: "watashi wa tōkyō ni sunde imasu.", en: "I live in Tokyo.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun (1st)", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "in" },
            { t: "住んで", ro: "sunde", role: "Verb (て-form of 住む)", meaning: "living" },
            { t: "います", ro: "imasu", role: "Auxiliary (continuous)", meaning: "am" }
          ] }
      ]
    },

    {
      category: "Person — 1st / 2nd / 3rd",
      title: "2nd person — [Name]さん (avoid あなた)",
      formula: "[Name]さん は + [predicate]。",
      description: "Use the listener's NAME + さん, not あなた. あなた sounds distant or even rude in real Japanese — except from spouse to spouse (where it means 'dear').",
      person: "2nd person (you)",
      tense: "Any",
      main: {
        jp: "田中さんはエンジニアですか？",
        ro: "tanaka-san wa enjinia desu ka?",
        en: "Are you an engineer, Tanaka? / Is Tanaka an engineer?",
        tokens: [
          { t: "田中", ro: "tanaka", role: "Proper noun (name)", meaning: "Tanaka" },
          { t: "さん", ro: "san", role: "Honorific suffix", meaning: "Mr/Ms" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" },
          { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
        ]
      },
      examples: [
        { jp: "シシルさんはネパール人ですか？", ro: "shishiru-san wa nepāru-jin desu ka?", en: "Shishir, are you Nepali?",
          tokens: [
            { t: "シシル", ro: "shishiru", role: "Proper noun", meaning: "Shishir" },
            { t: "さん", ro: "san", role: "Honorific suffix", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "ネパール人", ro: "nepāru-jin", role: "Noun", meaning: "Nepali person" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "山田さん、ちょっといいですか？", ro: "yamada-san, chotto ii desu ka?", en: "Yamada, do you have a moment?",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "ちょっと", ro: "chotto", role: "Adverb", meaning: "a little / a moment" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good / okay" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "お名前は何ですか？", ro: "o-namae wa nan desu ka?", en: "What is your name? (lit. 'as for [your] name, what is it?')",
          tokens: [
            { t: "お", ro: "o", role: "Honorific prefix", meaning: "(politeness)" },
            { t: "名前", ro: "namae", role: "Noun", meaning: "name" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "何", ro: "nan", role: "Question word", meaning: "what" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "お元気ですか？", ro: "o-genki desu ka?", en: "How are you? (lit. 'are you well?')",
          tokens: [
            { t: "お", ro: "o", role: "Honorific prefix", meaning: "(politeness)" },
            { t: "元気", ro: "genki", role: "na-adjective", meaning: "well / energetic" },
            { t: "です", ro: "desu", role: "Copula", meaning: "are" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "田中さんの会社はどこですか？", ro: "tanaka-san no kaisha wa doko desu ka?", en: "Where is your company, Tanaka?",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "会社", ro: "kaisha", role: "Noun", meaning: "company" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "どこ", ro: "doko", role: "Question word", meaning: "where" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "コーヒーを飲みますか？", ro: "kōhī o nomimasu ka?", en: "Will you drink coffee?",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "鈴木さん、何を飲みますか？", ro: "suzuki-san, nani o nomimasu ka?", en: "Suzuki, what will you drink?",
          tokens: [
            { t: "鈴木", ro: "suzuki", role: "Proper noun", meaning: "Suzuki" },
            { t: "さん", ro: "san", role: "Honorific suffix", meaning: "Mr/Ms" },
            { t: "何", ro: "nani", role: "Question word", meaning: "what" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] }
      ]
    },

    {
      category: "Person — 1st / 2nd / 3rd",
      title: "3rd person — 彼 / 彼女 / あの人 / [Name]さん",
      formula: "[Person] は + [predicate]。",
      description: "彼 (he), 彼女 (she), あの人 (that person — neutral and polite), or simply the person's name + さん. In workplace Japanese, name+さん is the most natural.",
      person: "3rd person (he / she / they)",
      tense: "Any",
      main: {
        jp: "彼はエンジニアです。",
        ro: "kare wa enjinia desu.",
        en: "He is an engineer.",
        tokens: [
          { t: "彼", ro: "kare", role: "Pronoun (3rd, male)", meaning: "he" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "エンジニア", ro: "enjinia", role: "Noun", meaning: "engineer" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" }
        ]
      },
      examples: [
        { jp: "彼女は親切です。", ro: "kanojo wa shinsetsu desu.", en: "She is kind.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd, female)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "親切", ro: "shinsetsu", role: "na-adjective", meaning: "kind" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "あの人は誰ですか？", ro: "ano hito wa dare desu ka?", en: "Who is that person?",
          tokens: [
            { t: "あの", ro: "ano", role: "Demonstrative modifier", meaning: "that (over there)" },
            { t: "人", ro: "hito", role: "Noun", meaning: "person" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "誰", ro: "dare", role: "Question word", meaning: "who" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "山田さんは上司です。", ro: "yamada-san wa jōshi desu.", en: "Yamada is the boss.",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "上司", ro: "jōshi", role: "Noun", meaning: "boss" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼らは会議中です。", ro: "karera wa kaigi-chū desu.", en: "They are in a meeting.",
          tokens: [
            { t: "彼ら", ro: "karera", role: "Pronoun (3rd plural)", meaning: "they" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "中", ro: "chū", role: "Suffix", meaning: "in the middle of" },
            { t: "です", ro: "desu", role: "Copula", meaning: "are" }
          ] },
        { jp: "彼女はコードを書いています。", ro: "kanojo wa kōdo o kaite imasu.", en: "She is writing code.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd, female)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書いて", ro: "kaite", role: "Verb (て-form)", meaning: "writing" },
            { t: "います", ro: "imasu", role: "Auxiliary", meaning: "is" }
          ] },
        { jp: "田中さんは会議に行きました。", ro: "tanaka-san wa kaigi ni ikimashita.", en: "Tanaka went to the meeting.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きました", ro: "ikimashita", role: "Verb (polite past)", meaning: "went" }
          ] },
        { jp: "田中さんは英語が上手です。", ro: "tanaka-san wa eigo ga jōzu desu.", en: "Tanaka is good at English.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "英語", ro: "eigo", role: "Noun", meaning: "English language" },
            { t: "が", ro: "ga", role: "Particle — subject (with skill)", meaning: "subject marker" },
            { t: "上手", ro: "jōzu", role: "na-adjective", meaning: "skillful / good at" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 7 — OTHER ESSENTIAL STRUCTURES
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Other essential structures",
      title: "[Verb-stem]たいです — 'I want to do'",
      formula: "[Verb-stem (drop ます)] + たい です。",
      description: "Express YOUR OWN desire to do something. Take the polite stem (drop ます) and add たい. たい conjugates like an i-adjective: ～たくない (don't want), ～たかった (wanted).",
      person: "ONLY 1st person directly. For others, use ～たがっている.",
      tense: "Present (negative: 〜たくない / past: 〜たかった)",
      main: {
        jp: "コーヒーを飲みたいです。",
        ro: "kōhī o nomitai desu.",
        en: "I want to drink coffee.",
        tokens: [
          { t: "コーヒー", ro: "kōhī", role: "Noun (object)", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "飲みたい", ro: "nomitai", role: "Verb stem + たい (desire)", meaning: "want to drink" },
          { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
        ]
      },
      examples: [
        { jp: "日本語を話したいです。", ro: "nihongo o hanashitai desu.", en: "I want to speak Japanese.",
          tokens: [
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "話したい", ro: "hanashitai", role: "Verb stem + たい", meaning: "want to speak" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "早く帰りたいです。", ro: "hayaku kaeritai desu.", en: "I want to go home early.",
          tokens: [
            { t: "早く", ro: "hayaku", role: "Adverb (i-adj → く)", meaning: "early / quickly" },
            { t: "帰りたい", ro: "kaeritai", role: "Verb stem + たい", meaning: "want to return home" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "ラーメンを食べたいです。", ro: "rāmen o tabetai desu.", en: "I want to eat ramen.",
          tokens: [
            { t: "ラーメン", ro: "rāmen", role: "Noun", meaning: "ramen" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べたい", ro: "tabetai", role: "Verb stem + たい", meaning: "want to eat" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "今日は働きたくないです。", ro: "kyō wa hatarakitakunai desu.", en: "I don't want to work today.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic/contrast", meaning: "topic marker" },
            { t: "働きたくない", ro: "hatarakitakunai", role: "たい negative (たい→たくない)", meaning: "don't want to work" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "日本に行きたかったです。", ro: "nihon ni ikitakatta desu.", en: "I wanted to go to Japan.",
          tokens: [
            { t: "日本", ro: "nihon", role: "Proper noun", meaning: "Japan" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きたかった", ro: "ikitakatta", role: "たい past (たい→たかった)", meaning: "wanted to go" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "新しいパソコンを買いたいです。", ro: "atarashii pasokon o kaitai desu.", en: "I want to buy a new PC.",
          tokens: [
            { t: "新しい", ro: "atarashii", role: "i-adjective (modifier)", meaning: "new" },
            { t: "パソコン", ro: "pasokon", role: "Noun", meaning: "PC" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "買いたい", ro: "kaitai", role: "Verb stem + たい", meaning: "want to buy" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "映画を見たいです。", ro: "eiga o mitai desu.", en: "I want to watch a movie.",
          tokens: [
            { t: "映画", ro: "eiga", role: "Noun", meaning: "movie" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見たい", ro: "mitai", role: "Verb stem + たい (desire)", meaning: "want to watch" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "[Verb-て]ください — Polite request",
      formula: "[Verb in て-form] ください。",
      description: "Polite way to ask someone to do something. Soften further with すみませんが…. To make a request more humble, use 〜ていただけますか.",
      person: "Directed at 2nd person",
      tense: "Imperative (polite)",
      main: {
        jp: "ゆっくり話してください。",
        ro: "yukkuri hanashite kudasai.",
        en: "Please speak slowly.",
        tokens: [
          { t: "ゆっくり", ro: "yukkuri", role: "Adverb", meaning: "slowly" },
          { t: "話して", ro: "hanashite", role: "Verb (て-form of 話す)", meaning: "speak (connective)" },
          { t: "ください", ro: "kudasai", role: "Polite request marker", meaning: "please" }
        ]
      },
      examples: [
        { jp: "もう一度説明してください。", ro: "mō ichido setsumei shite kudasai.", en: "Please explain once more.",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "(once) more" },
            { t: "一度", ro: "ichido", role: "Counter (one time)", meaning: "one time" },
            { t: "説明して", ro: "setsumei shite", role: "Verb (て-form, compound)", meaning: "explain" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "このファイルを送ってください。", ro: "kono fairu o okutte kudasai.", en: "Please send this file.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "ファイル", ro: "fairu", role: "Noun", meaning: "file" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送って", ro: "okutte", role: "Verb (て-form of 送る)", meaning: "send" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "ちょっと待ってください。", ro: "chotto matte kudasai.", en: "Please wait a moment.",
          tokens: [
            { t: "ちょっと", ro: "chotto", role: "Adverb", meaning: "a moment" },
            { t: "待って", ro: "matte", role: "Verb (て-form of 待つ)", meaning: "wait" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "ここに名前を書いてください。", ro: "koko ni namae o kaite kudasai.", en: "Please write your name here.",
          tokens: [
            { t: "ここ", ro: "koko", role: "Demonstrative (place)", meaning: "here" },
            { t: "に", ro: "ni", role: "Particle — location target", meaning: "at / on" },
            { t: "名前", ro: "namae", role: "Noun", meaning: "name" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書いて", ro: "kaite", role: "Verb (て-form of 書く)", meaning: "write" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "もう一度、見てください。", ro: "mō ichido, mite kudasai.", en: "Please look again.",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "more" },
            { t: "一度", ro: "ichido", role: "Counter", meaning: "one time" },
            { t: "見て", ro: "mite", role: "Verb (て-form of 見る)", meaning: "see / look" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "コードをレビューしてください。", ro: "kōdo o rebyū shite kudasai.", en: "Please review the code.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "レビューして", ro: "rebyū shite", role: "Verb (て-form, compound)", meaning: "review" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "電話をしてください。", ro: "denwa o shite kudasai.", en: "Please call (me).",
          tokens: [
            { t: "電話", ro: "denwa", role: "Noun", meaning: "phone (call)" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "して", ro: "shite", role: "Verb (て-form of する)", meaning: "do" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "[Verb-stem]ませんか / ましょう — Invitation & 'let's'",
      formula: "[Verb-stem] ませんか？ (Won't you ~?)   /   [Verb-stem] ましょう (Let's ~)",
      description: "ませんか is a soft invitation ('won't you …?' = would you like to). ましょう = 'let's …'. Use ましょうか to suggest 'shall we?'",
      person: "1st person plural intention (we)",
      tense: "Future-oriented",
      main: {
        jp: "お昼ごはんを食べに行きませんか？",
        ro: "ohirugohan o tabe ni ikimasen ka?",
        en: "Would you like to go grab lunch?",
        tokens: [
          { t: "お昼ごはん", ro: "ohirugohan", role: "Noun", meaning: "lunch" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "食べに", ro: "tabe ni", role: "Verb stem + に (purpose)", meaning: "in order to eat" },
          { t: "行きません", ro: "ikimasen", role: "Verb (polite negative)", meaning: "won't go" },
          { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
        ]
      },
      examples: [
        { jp: "コーヒーを飲みませんか？", ro: "kōhī o nomimasen ka?", en: "Want to grab a coffee?",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みません", ro: "nomimasen", role: "Verb (polite negative)", meaning: "won't drink" },
            { t: "か", ro: "ka", role: "Particle — question (invitation)", meaning: "?" }
          ] },
        { jp: "一緒に行きましょう。", ro: "issho ni ikimashō.", en: "Let's go together.",
          tokens: [
            { t: "一緒", ro: "issho", role: "Noun", meaning: "together" },
            { t: "に", ro: "ni", role: "Particle — adverbial", meaning: "(makes adverb)" },
            { t: "行きましょう", ro: "ikimashō", role: "Verb (volitional polite)", meaning: "let's go" }
          ] },
        { jp: "会議を始めましょう。", ro: "kaigi o hajimemashō.", en: "Let's start the meeting.",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "始めましょう", ro: "hajimemashō", role: "Verb (volitional polite)", meaning: "let's start" }
          ] },
        { jp: "明日、会いましょうか？", ro: "ashita, aimashō ka?", en: "Shall we meet tomorrow?",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "会いましょう", ro: "aimashō", role: "Verb (volitional polite)", meaning: "let's meet" },
            { t: "か", ro: "ka", role: "Particle — soft suggestion", meaning: "?" }
          ] },
        { jp: "テストを書きませんか？", ro: "tesuto o kakimasen ka?", en: "Shall we write the tests?",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きません", ro: "kakimasen", role: "Verb (polite negative)", meaning: "won't write" },
            { t: "か", ro: "ka", role: "Particle — invitation", meaning: "?" }
          ] },
        { jp: "少し休みましょう。", ro: "sukoshi yasumimashō.", en: "Let's take a short break.",
          tokens: [
            { t: "少し", ro: "sukoshi", role: "Adverb", meaning: "a little" },
            { t: "休みましょう", ro: "yasumimashō", role: "Verb (volitional polite)", meaning: "let's rest" }
          ] },
        { jp: "公園を散歩しませんか？", ro: "kōen o sanpo shimasen ka?", en: "Shall we walk in the park?",
          tokens: [
            { t: "公園", ro: "kōen", role: "Noun (place)", meaning: "park" },
            { t: "を", ro: "o", role: "Particle — path object", meaning: "object marker" },
            { t: "散歩", ro: "sanpo", role: "Noun (verbal)", meaning: "walk / stroll" },
            { t: "しません", ro: "shimasen", role: "Verb (polite negative)", meaning: "won't do" },
            { t: "か", ro: "ka", role: "Particle — invitation", meaning: "?" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "あります / います — Existence ('there is')",
      formula: "[Place] に + [Thing/Person] が + あります/います。",
      description: "あります = exists (objects, plants, abstract things). います = exists (people, animals — anything alive that moves). が marks what exists. に marks the place.",
      person: "Any (states a fact)",
      tense: "Present (negative: ありません/いません, past: ありました/いました)",
      main: {
        jp: "会議室にパソコンがあります。",
        ro: "kaigishitsu ni pasokon ga arimasu.",
        en: "There's a PC in the meeting room.",
        tokens: [
          { t: "会議室", ro: "kaigishitsu", role: "Noun (place)", meaning: "meeting room" },
          { t: "に", ro: "ni", role: "Particle — location of existence", meaning: "in / at" },
          { t: "パソコン", ro: "pasokon", role: "Noun (thing)", meaning: "PC" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
          { t: "あります", ro: "arimasu", role: "Verb (polite, existence — inanimate)", meaning: "exists / there is" }
        ]
      },
      examples: [
        { jp: "問題があります。", ro: "mondai ga arimasu.", en: "There's a problem.",
          tokens: [
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "there is" }
          ] },
        { jp: "オフィスに同僚がいます。", ro: "ofisu ni dōryō ga imasu.", en: "There's a colleague in the office.",
          tokens: [
            { t: "オフィス", ro: "ofisu", role: "Noun (place)", meaning: "office" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "at / in" },
            { t: "同僚", ro: "dōryō", role: "Noun (person)", meaning: "colleague" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "います", ro: "imasu", role: "Verb (existence — animate)", meaning: "is / exists" }
          ] },
        { jp: "家に犬がいます。", ro: "ie ni inu ga imasu.", en: "There's a dog at home.",
          tokens: [
            { t: "家", ro: "ie", role: "Noun (place)", meaning: "home" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "at" },
            { t: "犬", ro: "inu", role: "Noun (animal)", meaning: "dog" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "います", ro: "imasu", role: "Verb (existence — animate)", meaning: "is" }
          ] },
        { jp: "質問はありますか？", ro: "shitsumon wa arimasu ka?", en: "Are there any questions?",
          tokens: [
            { t: "質問", ro: "shitsumon", role: "Noun", meaning: "question" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "there is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "上司は今、いません。", ro: "jōshi wa ima, imasen.", en: "The boss isn't here right now.",
          tokens: [
            { t: "上司", ro: "jōshi", role: "Noun", meaning: "boss" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "今", ro: "ima", role: "Time noun", meaning: "now" },
            { t: "いません", ro: "imasen", role: "Verb (polite negative existence)", meaning: "is not (present)" }
          ] },
        { jp: "昨日、会議がありました。", ro: "kinō, kaigi ga arimashita.", en: "There was a meeting yesterday.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ありました", ro: "arimashita", role: "Verb (past, existence)", meaning: "there was" }
          ] },
        { jp: "駅の近くにカフェがあります。", ro: "eki no chikaku ni kafe ga arimasu.", en: "There's a café near the station.",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun (place)", meaning: "station" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "近く", ro: "chikaku", role: "Noun", meaning: "vicinity / near" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "at" },
            { t: "カフェ", ro: "kafe", role: "Noun (loanword)", meaning: "café" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "exists / there is" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "A の B — Possession & noun connector",
      formula: "[Modifier] の + [Head Noun]   (English ordering reversed)",
      description: "の links two nouns. The MODIFIER comes first, the head noun second. It covers possession ('s), origin (Japanese-language book), and association.",
      person: "Any",
      tense: "Tense-neutral (just connects)",
      main: {
        jp: "私の会社",
        ro: "watashi no kaisha",
        en: "my company",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (modifier)", meaning: "I" },
          { t: "の", ro: "no", role: "Particle — possessive/connector", meaning: "'s / of" },
          { t: "会社", ro: "kaisha", role: "Noun (head)", meaning: "company" }
        ]
      },
      examples: [
        { jp: "シシルさんのコード", ro: "shishiru-san no kōdo", en: "Shishir's code",
          tokens: [
            { t: "シシル", ro: "shishiru", role: "Proper noun", meaning: "Shishir" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "コード", ro: "kōdo", role: "Noun (head)", meaning: "code" }
          ] },
        { jp: "日本語の本", ro: "nihongo no hon", en: "Japanese-language book",
          tokens: [
            { t: "日本語", ro: "nihongo", role: "Noun (modifier)", meaning: "Japanese language" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "本", ro: "hon", role: "Noun (head)", meaning: "book" }
          ] },
        { jp: "私の家族の写真", ro: "watashi no kazoku no shashin", en: "a photo of my family",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "家族", ro: "kazoku", role: "Noun", meaning: "family" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "写真", ro: "shashin", role: "Noun (head)", meaning: "photo" }
          ] },
        { jp: "会社の同僚", ro: "kaisha no dōryō", en: "a colleague from work",
          tokens: [
            { t: "会社", ro: "kaisha", role: "Noun (modifier)", meaning: "company" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "同僚", ro: "dōryō", role: "Noun (head)", meaning: "colleague" }
          ] },
        { jp: "今日のミーティング", ro: "kyō no mītingu", en: "today's meeting",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun (modifier)", meaning: "today" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "'s" },
            { t: "ミーティング", ro: "mītingu", role: "Noun (head)", meaning: "meeting" }
          ] },
        { jp: "あれは私のパソコンです。", ro: "are wa watashi no pasokon desu.", en: "That is my PC.",
          tokens: [
            { t: "あれ", ro: "are", role: "Demonstrative", meaning: "that" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "パソコン", ro: "pasokon", role: "Noun", meaning: "PC" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "山田さんの仕事", ro: "yamada-san no shigoto", en: "Yamada's job",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "仕事", ro: "shigoto", role: "Noun (head)", meaning: "job / work" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "[Place]で / [Place]に — Action vs destination",
      formula: "[Place] で [action verb]   /   [Place] に [go/come/exist verb]",
      description: "で marks WHERE an action happens (active). に marks DESTINATION or where something exists (target/static). They are NOT interchangeable.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "会社で働きます。",
        ro: "kaisha de hatarakimasu.",
        en: "I work at the company.",
        tokens: [
          { t: "会社", ro: "kaisha", role: "Noun (place)", meaning: "company" },
          { t: "で", ro: "de", role: "Particle — action location", meaning: "at (where action happens)" },
          { t: "働きます", ro: "hatarakimasu", role: "Verb (polite)", meaning: "work" }
        ]
      },
      examples: [
        { jp: "東京に行きます。", ro: "tōkyō ni ikimasu.", en: "I'm going to Tokyo.",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
          ] },
        { jp: "家にいます。", ro: "ie ni imasu.", en: "I'm at home.",
          tokens: [
            { t: "家", ro: "ie", role: "Noun (place)", meaning: "home" },
            { t: "に", ro: "ni", role: "Particle — existence location", meaning: "at" },
            { t: "います", ro: "imasu", role: "Verb (existence — animate)", meaning: "am" }
          ] },
        { jp: "カフェでコーヒーを飲みます。", ro: "kafe de kōhī o nomimasu.", en: "I drink coffee at the café.",
          tokens: [
            { t: "カフェ", ro: "kafe", role: "Noun (place)", meaning: "café" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
          ] },
        { jp: "駅で会いましょう。", ro: "eki de aimashō.", en: "Let's meet at the station.",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun (place)", meaning: "station" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "会いましょう", ro: "aimashō", role: "Verb (volitional polite)", meaning: "let's meet" }
          ] },
        { jp: "会議に行きました。", ro: "kaigi ni ikimashita.", en: "I went to the meeting.",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun (destination)", meaning: "meeting" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きました", ro: "ikimashita", role: "Verb (polite past)", meaning: "went" }
          ] },
        { jp: "学校で日本語を勉強します。", ro: "gakkō de nihongo o benkyō shimasu.", en: "I study Japanese at school.",
          tokens: [
            { t: "学校", ro: "gakkō", role: "Noun (place)", meaning: "school" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "勉強します", ro: "benkyō shimasu", role: "Verb (polite)", meaning: "study" }
          ] },
        { jp: "図書館で勉強します。", ro: "toshokan de benkyō shimasu.", en: "I study at the library.",
          tokens: [
            { t: "図書館", ro: "toshokan", role: "Noun (place)", meaning: "library" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "勉強します", ro: "benkyō shimasu", role: "Verb (polite)", meaning: "study" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "[Reason]から、[Result] — Because (cause-and-effect)",
      formula: "[Plain or polite reason] から、 [Result clause]。",
      description: "から attaches to the END of the reason clause and means 'because'. The reason comes FIRST, the result SECOND — opposite English style.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "忙しいから、行きません。",
        ro: "isogashii kara, ikimasen.",
        en: "Because I'm busy, I'm not going.",
        tokens: [
          { t: "忙しい", ro: "isogashii", role: "i-adjective (reason)", meaning: "busy" },
          { t: "から", ro: "kara", role: "Particle — reason ('because')", meaning: "because" },
          { t: "行きません", ro: "ikimasen", role: "Verb (polite negative)", meaning: "do not go" }
        ]
      },
      examples: [
        { jp: "サーバーが落ちているから、テストできません。", ro: "sābā ga ochite iru kara, tesuto dekimasen.", en: "Because the server is down, I can't test.",
          tokens: [
            { t: "サーバー", ro: "sābā", role: "Noun (subject)", meaning: "server" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "落ちている", ro: "ochite iru", role: "Verb (continuous, plain)", meaning: "is down" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "できません", ro: "dekimasen", role: "Verb (polite negative)", meaning: "cannot do" }
          ] },
        { jp: "明日は休みですから、ゆっくりします。", ro: "ashita wa yasumi desu kara, yukkuri shimasu.", en: "Tomorrow is a day off, so I'll relax.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "休み", ro: "yasumi", role: "Noun", meaning: "day off" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "ゆっくり", ro: "yukkuri", role: "Adverb", meaning: "slowly / leisurely" },
            { t: "します", ro: "shimasu", role: "Verb (polite)", meaning: "do" }
          ] },
        { jp: "雨が降っているから、家にいます。", ro: "ame ga futte iru kara, ie ni imasu.", en: "Because it's raining, I'm staying home.",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun (subject)", meaning: "rain" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "降っている", ro: "futte iru", role: "Verb (continuous, plain)", meaning: "is falling" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "家", ro: "ie", role: "Noun (place)", meaning: "home" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "at" },
            { t: "います", ro: "imasu", role: "Verb (existence)", meaning: "am" }
          ] },
        { jp: "難しいから、ゆっくり話してください。", ro: "muzukashii kara, yukkuri hanashite kudasai.", en: "Because it's difficult, please speak slowly.",
          tokens: [
            { t: "難しい", ro: "muzukashii", role: "i-adjective", meaning: "difficult" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "ゆっくり", ro: "yukkuri", role: "Adverb", meaning: "slowly" },
            { t: "話して", ro: "hanashite", role: "Verb (て-form)", meaning: "speak" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "バグがあるから、リリースできません。", ro: "bagu ga aru kara, rirīsu dekimasen.", en: "Because there's a bug, we can't release.",
          tokens: [
            { t: "バグ", ro: "bagu", role: "Noun (subject)", meaning: "bug" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ある", ro: "aru", role: "Verb (plain, existence)", meaning: "exists" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "リリース", ro: "rirīsu", role: "Noun (loanword)", meaning: "release" },
            { t: "できません", ro: "dekimasen", role: "Verb (polite negative)", meaning: "cannot do" }
          ] },
        { jp: "今日は会議があるから、早く来ました。", ro: "kyō wa kaigi ga aru kara, hayaku kimashita.", en: "Because there's a meeting today, I came early.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "会議", ro: "kaigi", role: "Noun (subject)", meaning: "meeting" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ある", ro: "aru", role: "Verb (plain, existence)", meaning: "exists" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "早く", ro: "hayaku", role: "Adverb (i-adj → く)", meaning: "early" },
            { t: "来ました", ro: "kimashita", role: "Verb (polite past)", meaning: "came" }
          ] },
        { jp: "寒いから、コートを着ます。", ro: "samui kara, kōto o kimasu.", en: "Because it's cold, I'll wear a coat.",
          tokens: [
            { t: "寒い", ro: "samui", role: "i-adjective (reason)", meaning: "cold" },
            { t: "から", ro: "kara", role: "Particle — reason", meaning: "because" },
            { t: "コート", ro: "kōto", role: "Noun (loanword)", meaning: "coat" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "着ます", ro: "kimasu", role: "Verb (polite)", meaning: "wear" }
          ] }
      ]
    },

    {
      category: "Other essential structures",
      title: "[Verb-て]、[Verb] — Linking actions (and / then)",
      formula: "[Verb in て-form]、 [next verb/clause]。",
      description: "The て-form chains actions in sequence ('do A and then B') OR explains how something is done. It's the workhorse of intermediate Japanese.",
      person: "Any",
      tense: "Tense is set by the FINAL verb",
      main: {
        jp: "コードを書いて、テストします。",
        ro: "kōdo o kaite, tesuto shimasu.",
        en: "I write the code and (then) test.",
        tokens: [
          { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "書いて", ro: "kaite", role: "Verb (て-form of 書く)", meaning: "write (and)" },
          { t: "テスト", ro: "tesuto", role: "Noun (verbal)", meaning: "test" },
          { t: "します", ro: "shimasu", role: "Verb (polite)", meaning: "do" }
        ]
      },
      examples: [
        { jp: "朝起きて、コーヒーを飲みます。", ro: "asa okite, kōhī o nomimasu.", en: "I wake up in the morning and drink coffee.",
          tokens: [
            { t: "朝", ro: "asa", role: "Time noun", meaning: "morning" },
            { t: "起きて", ro: "okite", role: "Verb (て-form of 起きる)", meaning: "wake up (and)" },
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
          ] },
        { jp: "駅に行って、電車に乗ります。", ro: "eki ni itte, densha ni norimasu.", en: "I go to the station and board the train.",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun (place)", meaning: "station" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行って", ro: "itte", role: "Verb (て-form of 行く)", meaning: "go (and)" },
            { t: "電車", ro: "densha", role: "Noun", meaning: "train" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "(get on) — to" },
            { t: "乗ります", ro: "norimasu", role: "Verb (polite)", meaning: "ride / board" }
          ] },
        { jp: "バグを直して、プルリクを送りました。", ro: "bagu o naoshite, pururiku o okurimashita.", en: "I fixed the bug and sent the pull request.",
          tokens: [
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "直して", ro: "naoshite", role: "Verb (て-form of 直す)", meaning: "fix (and)" },
            { t: "プルリク", ro: "pururiku", role: "Noun (loanword)", meaning: "pull request" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送りました", ro: "okurimashita", role: "Verb (polite past)", meaning: "sent" }
          ] },
        { jp: "本を読んで、勉強します。", ro: "hon o yonde, benkyō shimasu.", en: "I read books and study.",
          tokens: [
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読んで", ro: "yonde", role: "Verb (て-form of 読む)", meaning: "read (and)" },
            { t: "勉強します", ro: "benkyō shimasu", role: "Verb (polite)", meaning: "study" }
          ] },
        { jp: "会議に行って、報告しました。", ro: "kaigi ni itte, hōkoku shimashita.", en: "I went to the meeting and reported.",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行って", ro: "itte", role: "Verb (て-form)", meaning: "go (and)" },
            { t: "報告しました", ro: "hōkoku shimashita", role: "Verb (polite past)", meaning: "reported" }
          ] },
        { jp: "電話して、メールも送りました。", ro: "denwa shite, mēru mo okurimashita.", en: "I called and also sent an email.",
          tokens: [
            { t: "電話して", ro: "denwa shite", role: "Verb (て-form, compound)", meaning: "called (and)" },
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "も", ro: "mo", role: "Particle — also", meaning: "also" },
            { t: "送りました", ro: "okurimashita", role: "Verb (polite past)", meaning: "sent" }
          ] },
        { jp: "スーパーに行って、肉を買いました。", ro: "sūpā ni itte, niku o kaimashita.", en: "I went to the supermarket and bought meat.",
          tokens: [
            { t: "スーパー", ro: "sūpā", role: "Noun (loanword)", meaning: "supermarket" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行って", ro: "itte", role: "Verb (て-form of 行く)", meaning: "go (and)" },
            { t: "肉", ro: "niku", role: "Noun", meaning: "meat" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "買いました", ro: "kaimashita", role: "Verb (polite past)", meaning: "bought" }
          ] }
      ]
    },
    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 9 — MORE PARTICLES (へ・と・や・よ・ね・ので・けど)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "More particles",
      title: "と (to) — With (companion) / and (listing)",
      formula: "[Person/Thing] と + [verb / noun]",
      description: "と attaches to a noun to mean 'with' (doing something together) or 'and' (when listing two specific things). Don't confuse with や — と is exhaustive (these and ONLY these).",
      person: "Any",
      tense: "Tense-neutral (attaches to nouns)",
      main: {
        jp: "友達と昼ご飯を食べました。",
        ro: "tomodachi to hirugohan o tabemashita.",
        en: "I ate lunch with a friend.",
        tokens: [
          { t: "友達", ro: "tomodachi", role: "Noun (companion)", meaning: "friend" },
          { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with (together)" },
          { t: "昼ご飯", ro: "hirugohan", role: "Noun (object)", meaning: "lunch" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "食べました", ro: "tabemashita", role: "Verb (polite past)", meaning: "ate" }
        ]
      },
      examples: [
        { jp: "田中さんと話しました。", ro: "tanaka-san to hanashimashita.", en: "I talked with Tanaka.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with" },
            { t: "話しました", ro: "hanashimashita", role: "Verb (polite past)", meaning: "talked" }
          ] },
        { jp: "パンと牛乳を買いました。", ro: "pan to gyūnyū o kaimashita.", en: "I bought bread AND milk.",
          tokens: [
            { t: "パン", ro: "pan", role: "Noun (loanword)", meaning: "bread" },
            { t: "と", ro: "to", role: "Particle — and (exhaustive list)", meaning: "and" },
            { t: "牛乳", ro: "gyūnyū", role: "Noun", meaning: "milk" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "買いました", ro: "kaimashita", role: "Verb (polite past)", meaning: "bought" }
          ] },
        { jp: "妻と子供がいます。", ro: "tsuma to kodomo ga imasu.", en: "I have a wife and a child.",
          tokens: [
            { t: "妻", ro: "tsuma", role: "Noun", meaning: "wife" },
            { t: "と", ro: "to", role: "Particle — and", meaning: "and" },
            { t: "子供", ro: "kodomo", role: "Noun", meaning: "child" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "います", ro: "imasu", role: "Verb (existence — animate)", meaning: "exist" }
          ] },
        { jp: "母と買い物に行きます。", ro: "haha to kaimono ni ikimasu.", en: "I'll go shopping with my mom.",
          tokens: [
            { t: "母", ro: "haha", role: "Noun", meaning: "mother (own)" },
            { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with" },
            { t: "買い物", ro: "kaimono", role: "Noun", meaning: "shopping" },
            { t: "に", ro: "ni", role: "Particle — purpose", meaning: "for" },
            { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
          ] },
        { jp: "同僚と会議をします。", ro: "dōryō to kaigi o shimasu.", en: "I'll have a meeting with colleagues.",
          tokens: [
            { t: "同僚", ro: "dōryō", role: "Noun", meaning: "colleague" },
            { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with" },
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "します", ro: "shimasu", role: "Verb (polite)", meaning: "do" }
          ] },
        { jp: "犬と猫が好きです。", ro: "inu to neko ga suki desu.", en: "I like dogs and cats.",
          tokens: [
            { t: "犬", ro: "inu", role: "Noun", meaning: "dog" },
            { t: "と", ro: "to", role: "Particle — and", meaning: "and" },
            { t: "猫", ro: "neko", role: "Noun", meaning: "cat" },
            { t: "が", ro: "ga", role: "Particle — subject (with skill/preference)", meaning: "subject marker" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked / favorite" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "先生と一緒に勉強します。", ro: "sensei to issho ni benkyō shimasu.", en: "I'll study together with the teacher.",
          tokens: [
            { t: "先生", ro: "sensei", role: "Noun", meaning: "teacher" },
            { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with" },
            { t: "一緒に", ro: "issho ni", role: "Adverb phrase", meaning: "together" },
            { t: "勉強します", ro: "benkyō shimasu", role: "Verb (polite)", meaning: "study" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "へ (e) — Direction marker (formal alternative to に)",
      formula: "[Destination] へ + [movement verb]",
      description: "へ marks direction toward a destination. Written へ but pronounced 'e'. Used with movement verbs (行く・来る・帰る・向かう). Often interchangeable with に for destination, but へ emphasizes direction/journey while に emphasizes arrival point. へ is slightly more formal.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "東京へ行きます。",
        ro: "tōkyō e ikimasu.",
        en: "I go toward Tokyo.",
        tokens: [
          { t: "東京", ro: "tōkyō", role: "Proper noun (destination)", meaning: "Tokyo" },
          { t: "へ", ro: "e", role: "Particle — direction (written he, said e)", meaning: "to / toward" },
          { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
        ]
      },
      examples: [
        { jp: "学校へ向かいます。", ro: "gakkō e mukaimasu.", en: "I'm headed to school.",
          tokens: [
            { t: "学校", ro: "gakkō", role: "Noun (destination)", meaning: "school" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "toward" },
            { t: "向かいます", ro: "mukaimasu", role: "Verb (polite)", meaning: "head toward" }
          ] },
        { jp: "家へ帰ります。", ro: "ie e kaerimasu.", en: "I return home.",
          tokens: [
            { t: "家", ro: "ie", role: "Noun (destination)", meaning: "home" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "toward" },
            { t: "帰ります", ro: "kaerimasu", role: "Verb (polite)", meaning: "return" }
          ] },
        { jp: "海外へ旅行します。", ro: "kaigai e ryokō shimasu.", en: "I'll travel abroad.",
          tokens: [
            { t: "海外", ro: "kaigai", role: "Noun (destination)", meaning: "overseas / abroad" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "toward" },
            { t: "旅行します", ro: "ryokō shimasu", role: "Verb (polite)", meaning: "travel" }
          ] },
        { jp: "日本へようこそ。", ro: "nihon e yōkoso.", en: "Welcome to Japan.",
          tokens: [
            { t: "日本", ro: "nihon", role: "Proper noun", meaning: "Japan" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "to" },
            { t: "ようこそ", ro: "yōkoso", role: "Interjection", meaning: "welcome" }
          ] },
        { jp: "友達への手紙", ro: "tomodachi e no tegami", en: "a letter TO a friend",
          tokens: [
            { t: "友達", ro: "tomodachi", role: "Noun", meaning: "friend" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "to" },
            { t: "の", ro: "no", role: "Particle — possessive/connector", meaning: "of" },
            { t: "手紙", ro: "tegami", role: "Noun (head)", meaning: "letter" }
          ] },
        { jp: "駅へ走ります。", ro: "eki e hashirimasu.", en: "I run to the station.",
          tokens: [
            { t: "駅", ro: "eki", role: "Noun (destination)", meaning: "station" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "toward" },
            { t: "走ります", ro: "hashirimasu", role: "Verb (polite)", meaning: "run" }
          ] },
        { jp: "オフィスへ来てください。", ro: "ofisu e kite kudasai.", en: "Please come to the office.",
          tokens: [
            { t: "オフィス", ro: "ofisu", role: "Noun (destination)", meaning: "office" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "to" },
            { t: "来て", ro: "kite", role: "Verb (て-form of 来る)", meaning: "come" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "や (ya) — And (non-exhaustive 'and others')",
      formula: "A や B (や C) など",
      description: "や lists examples but implies 'and others / among other things'. Different from と which lists ALL items. Often paired with など ('etc.') at the end to make the implication explicit.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "りんごやバナナを買いました。",
        ro: "ringo ya banana o kaimashita.",
        en: "I bought apples, bananas (and other things).",
        tokens: [
          { t: "りんご", ro: "ringo", role: "Noun", meaning: "apple" },
          { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and (etc.)" },
          { t: "バナナ", ro: "banana", role: "Noun (loanword)", meaning: "banana" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "買いました", ro: "kaimashita", role: "Verb (polite past)", meaning: "bought" }
        ]
      },
      examples: [
        { jp: "東京や大阪に行きました。", ro: "tōkyō ya ōsaka ni ikimashita.", en: "I went to Tokyo, Osaka (and others).",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and (etc.)" },
            { t: "大阪", ro: "ōsaka", role: "Proper noun", meaning: "Osaka" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行きました", ro: "ikimashita", role: "Verb (polite past)", meaning: "went" }
          ] },
        { jp: "ペンや紙が必要です。", ro: "pen ya kami ga hitsuyō desu.", en: "I need pen and paper (etc.).",
          tokens: [
            { t: "ペン", ro: "pen", role: "Noun (loanword)", meaning: "pen" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and (etc.)" },
            { t: "紙", ro: "kami", role: "Noun", meaning: "paper" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "必要", ro: "hitsuyō", role: "na-adjective", meaning: "necessary" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "犬や猫などが好きです。", ro: "inu ya neko nado ga suki desu.", en: "I like dogs, cats, and so on.",
          tokens: [
            { t: "犬", ro: "inu", role: "Noun", meaning: "dog" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and (etc.)" },
            { t: "猫", ro: "neko", role: "Noun", meaning: "cat" },
            { t: "など", ro: "nado", role: "Particle — etc.", meaning: "and so on" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "寿司やラーメンを食べました。", ro: "sushi ya rāmen o tabemashita.", en: "I ate sushi, ramen (and others).",
          tokens: [
            { t: "寿司", ro: "sushi", role: "Noun", meaning: "sushi" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and" },
            { t: "ラーメン", ro: "rāmen", role: "Noun (loanword)", meaning: "ramen" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べました", ro: "tabemashita", role: "Verb (polite past)", meaning: "ate" }
          ] },
        { jp: "田中さんや山田さんが来ました。", ro: "tanaka-san ya yamada-san ga kimashita.", en: "Tanaka, Yamada (and others) came.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and" },
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "来ました", ro: "kimashita", role: "Verb (polite past)", meaning: "came" }
          ] },
        { jp: "ノートやペンを持ってきます。", ro: "nōto ya pen o motte kimasu.", en: "I'll bring a notebook, pen, etc.",
          tokens: [
            { t: "ノート", ro: "nōto", role: "Noun (loanword)", meaning: "notebook" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and" },
            { t: "ペン", ro: "pen", role: "Noun (loanword)", meaning: "pen" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "持って", ro: "motte", role: "Verb (て-form of 持つ)", meaning: "having / holding" },
            { t: "きます", ro: "kimasu", role: "Auxiliary (will come)", meaning: "bring" }
          ] },
        { jp: "サーバーやデータベースを管理します。", ro: "sābā ya dētabēsu o kanri shimasu.", en: "I manage servers, databases, etc.",
          tokens: [
            { t: "サーバー", ro: "sābā", role: "Noun (loanword)", meaning: "server" },
            { t: "や", ro: "ya", role: "Particle — non-exhaustive 'and'", meaning: "and" },
            { t: "データベース", ro: "dētabēsu", role: "Noun (loanword)", meaning: "database" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "管理します", ro: "kanri shimasu", role: "Verb (polite)", meaning: "manage" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "よ (yo) — Sentence-end emphasis (informing / asserting)",
      formula: "[Statement] + よ",
      description: "よ at the end of a sentence asserts new information to the listener — like adding 'you know' or '!' to your sentence. Use when telling someone something they don't know yet. Don't overuse; can sound pushy.",
      person: "Any speaker",
      tense: "Any",
      main: {
        jp: "もう十時ですよ。",
        ro: "mō jūji desu yo.",
        en: "It's already 10 o'clock, you know!",
        tokens: [
          { t: "もう", ro: "mō", role: "Adverb", meaning: "already" },
          { t: "十時", ro: "jūji", role: "Time noun", meaning: "10 o'clock" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" },
          { t: "よ", ro: "yo", role: "Particle — emphasis (informing)", meaning: "(you know / !)" }
        ]
      },
      examples: [
        { jp: "これは私の本ですよ。", ro: "kore wa watashi no hon desu yo.", en: "This is my book (you know).",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(informing)" }
          ] },
        { jp: "バグじゃないですよ。", ro: "bagu ja nai desu yo.", en: "It's not a bug, I'm telling you!",
          tokens: [
            { t: "バグ", ro: "bagu", role: "Noun (loanword)", meaning: "bug" },
            { t: "じゃない", ro: "ja nai", role: "Casual negative copula", meaning: "is not" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "会議は明日ですよ。", ro: "kaigi wa ashita desu yo.", en: "The meeting is tomorrow!",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(reminding)" }
          ] },
        { jp: "大丈夫ですよ。", ro: "daijōbu desu yo.", en: "It's fine, don't worry.",
          tokens: [
            { t: "大丈夫", ro: "daijōbu", role: "na-adjective", meaning: "fine / okay" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "よ", ro: "yo", role: "Particle — emphasis (reassuring)", meaning: "(reassurance)" }
          ] },
        { jp: "このコードは正しいですよ。", ro: "kono kōdo wa tadashii desu yo.", en: "This code is correct (I'm telling you).",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "コード", ro: "kōdo", role: "Noun (loanword)", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "正しい", ro: "tadashii", role: "i-adjective", meaning: "correct" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "サーバーは落ちてますよ。", ro: "sābā wa ochite masu yo.", en: "The server is down (FYI).",
          tokens: [
            { t: "サーバー", ro: "sābā", role: "Noun (loanword)", meaning: "server" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "落ちて", ro: "ochite", role: "Verb (て-form of 落ちる)", meaning: "fallen / down" },
            { t: "ます", ro: "masu", role: "Auxiliary (polite, ています contracted)", meaning: "is (state)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(informing)" }
          ] },
        { jp: "それは違いますよ。", ro: "sore wa chigaimasu yo.", en: "That's wrong, you know.",
          tokens: [
            { t: "それ", ro: "sore", role: "Demonstrative", meaning: "that" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "違います", ro: "chigaimasu", role: "Verb (polite)", meaning: "is different / wrong" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "ね (ne) — Sentence-end agreement-seeking",
      formula: "[Statement] + ね",
      description: "ね at the end seeks agreement — 'right? / isn't it?'. Used when both speakers presumably already share the info. Different from よ which informs new info. Together as ですね = 'that's right'.",
      person: "Any speaker",
      tense: "Any",
      main: {
        jp: "今日はいい天気ですね。",
        ro: "kyō wa ii tenki desu ne.",
        en: "Nice weather today, isn't it?",
        tokens: [
          { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
          { t: "天気", ro: "tenki", role: "Noun", meaning: "weather" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" },
          { t: "ね", ro: "ne", role: "Particle — agreement (right?)", meaning: "(isn't it?)" }
        ]
      },
      examples: [
        { jp: "美味しいですね。", ro: "oishii desu ne.", en: "Tasty, isn't it?",
          tokens: [
            { t: "美味しい", ro: "oishii", role: "i-adjective", meaning: "tasty" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(isn't it?)" }
          ] },
        { jp: "そうですね。", ro: "sō desu ne.", en: "That's right (agreeing softly).",
          tokens: [
            { t: "そう", ro: "sō", role: "Adverb", meaning: "so / that way" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(right?)" }
          ] },
        { jp: "このコードは難しいですね。", ro: "kono kōdo wa muzukashii desu ne.", en: "This code is hard, right?",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "難しい", ro: "muzukashii", role: "i-adjective", meaning: "difficult" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(isn't it?)" }
          ] },
        { jp: "田中さんは親切ですね。", ro: "tanaka-san wa shinsetsu desu ne.", en: "Tanaka is kind, isn't he?",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "親切", ro: "shinsetsu", role: "na-adjective", meaning: "kind" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(isn't he?)" }
          ] },
        { jp: "もう遅いですね。", ro: "mō osoi desu ne.", en: "It's already late, isn't it?",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "already" },
            { t: "遅い", ro: "osoi", role: "i-adjective", meaning: "late" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(isn't it?)" }
          ] },
        { jp: "疲れましたね。", ro: "tsukaremashita ne.", en: "(We're) tired, aren't we?",
          tokens: [
            { t: "疲れました", ro: "tsukaremashita", role: "Verb (polite past = state of being tired)", meaning: "got tired" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(aren't we?)" }
          ] },
        { jp: "いい天気ですね、今日は。", ro: "ii tenki desu ne, kyō wa.", en: "Nice weather today, no?",
          tokens: [
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "天気", ro: "tenki", role: "Noun", meaning: "weather" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "ね", ro: "ne", role: "Particle — agreement", meaning: "(no?)" },
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic (afterthought)", meaning: "topic marker" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "ので (node) — Because (politer than から)",
      formula: "[Reason clause] ので、[Result clause]。",
      description: "ので gives a reason like から, but is softer / more polite / more 'objective'. Prefer ので in formal contexts (work, customer service). から is more direct, more personal-feeling. Plain forms attach directly to ので; for です-noun-sentences use なので.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "忙しいので、行けません。",
        ro: "isogashii node, ikemasen.",
        en: "Because I'm busy, I can't go.",
        tokens: [
          { t: "忙しい", ro: "isogashii", role: "i-adjective (reason)", meaning: "busy" },
          { t: "ので", ro: "node", role: "Particle — reason (formal)", meaning: "because (formal)" },
          { t: "行けません", ro: "ikemasen", role: "Verb (potential negative)", meaning: "cannot go" }
        ]
      },
      examples: [
        { jp: "雨が降っているので、家にいます。", ro: "ame ga futte iru node, ie ni imasu.", en: "Because it's raining, I'm staying home.",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "降っている", ro: "futte iru", role: "Verb (continuous, plain)", meaning: "is falling" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "家", ro: "ie", role: "Noun", meaning: "home" },
            { t: "に", ro: "ni", role: "Particle — location", meaning: "at" },
            { t: "います", ro: "imasu", role: "Verb (existence)", meaning: "am" }
          ] },
        { jp: "風邪を引いたので、休みます。", ro: "kaze o hiita node, yasumimasu.", en: "Because I caught a cold, I'll rest.",
          tokens: [
            { t: "風邪", ro: "kaze", role: "Noun", meaning: "cold (illness)" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "引いた", ro: "hiita", role: "Verb (plain past)", meaning: "caught" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "休みます", ro: "yasumimasu", role: "Verb (polite)", meaning: "rest / take off" }
          ] },
        { jp: "電車が遅れたので、遅刻しました。", ro: "densha ga okureta node, chikoku shimashita.", en: "Because the train was late, I was late.",
          tokens: [
            { t: "電車", ro: "densha", role: "Noun", meaning: "train" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "遅れた", ro: "okureta", role: "Verb (plain past)", meaning: "got late" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "遅刻しました", ro: "chikoku shimashita", role: "Verb (polite past)", meaning: "was late" }
          ] },
        { jp: "時間がないので、急ぎます。", ro: "jikan ga nai node, isogimasu.", en: "Because there's no time, I'm hurrying.",
          tokens: [
            { t: "時間", ro: "jikan", role: "Noun", meaning: "time" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ない", ro: "nai", role: "Verb (plain negative existence)", meaning: "doesn't exist" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "急ぎます", ro: "isogimasu", role: "Verb (polite)", meaning: "hurry" }
          ] },
        { jp: "明日は休みなので、ゆっくりします。", ro: "ashita wa yasumi na node, yukkuri shimasu.", en: "Because tomorrow is a day off, I'll relax.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "休み", ro: "yasumi", role: "Noun", meaning: "day off" },
            { t: "な", ro: "na", role: "Copula 'da' before ので", meaning: "is (linking)" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "ゆっくり", ro: "yukkuri", role: "Adverb", meaning: "slowly / leisurely" },
            { t: "します", ro: "shimasu", role: "Verb (polite)", meaning: "do" }
          ] },
        { jp: "バグがあるので、リリースできません。", ro: "bagu ga aru node, rirīsu dekimasen.", en: "Because there's a bug, we can't release.",
          tokens: [
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ある", ro: "aru", role: "Verb (plain, existence)", meaning: "exists" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "リリース", ro: "rirīsu", role: "Noun (loanword)", meaning: "release" },
            { t: "できません", ro: "dekimasen", role: "Verb (polite negative)", meaning: "cannot do" }
          ] },
        { jp: "会議があるので、早く来ました。", ro: "kaigi ga aru node, hayaku kimashita.", en: "Because there's a meeting, I came early.",
          tokens: [
            { t: "会議", ro: "kaigi", role: "Noun", meaning: "meeting" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "ある", ro: "aru", role: "Verb (plain existence)", meaning: "exists" },
            { t: "ので", ro: "node", role: "Particle — reason", meaning: "because" },
            { t: "早く", ro: "hayaku", role: "Adverb", meaning: "early" },
            { t: "来ました", ro: "kimashita", role: "Verb (polite past)", meaning: "came" }
          ] }
      ]
    },

    {
      category: "More particles",
      title: "けど / が — But / however (contrast)",
      formula: "[Clause A] けど / が、[Clause B]",
      description: "Both mean 'but / however'. けど is conversational; が is more formal (also means 'but' in writing — same kana as the subject particle が, but used after a verb/adjective it's the conjunction). They contrast two clauses. Often used softly to introduce contrasting info without sounding harsh.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "寒いけど、行きます。",
        ro: "samui kedo, ikimasu.",
        en: "It's cold, but I'll go.",
        tokens: [
          { t: "寒い", ro: "samui", role: "i-adjective", meaning: "cold" },
          { t: "けど", ro: "kedo", role: "Particle — but (casual)", meaning: "but" },
          { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
        ]
      },
      examples: [
        { jp: "高いけど、買います。", ro: "takai kedo, kaimasu.", en: "It's expensive, but I'll buy it.",
          tokens: [
            { t: "高い", ro: "takai", role: "i-adjective", meaning: "expensive / high" },
            { t: "けど", ro: "kedo", role: "Particle — but", meaning: "but" },
            { t: "買います", ro: "kaimasu", role: "Verb (polite)", meaning: "buy" }
          ] },
        { jp: "難しいけど、面白いです。", ro: "muzukashii kedo, omoshiroi desu.", en: "It's hard, but interesting.",
          tokens: [
            { t: "難しい", ro: "muzukashii", role: "i-adjective", meaning: "difficult" },
            { t: "けど", ro: "kedo", role: "Particle — but", meaning: "but" },
            { t: "面白い", ro: "omoshiroi", role: "i-adjective", meaning: "interesting" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "行きたいけど、忙しいです。", ro: "ikitai kedo, isogashii desu.", en: "I want to go, but I'm busy.",
          tokens: [
            { t: "行きたい", ro: "ikitai", role: "Verb stem + たい (desire)", meaning: "want to go" },
            { t: "けど", ro: "kedo", role: "Particle — but", meaning: "but" },
            { t: "忙しい", ro: "isogashii", role: "i-adjective", meaning: "busy" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "雨ですが、出かけます。", ro: "ame desu ga, dekakemasu.", en: "It's raining, but I'm going out.",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "が", ro: "ga", role: "Conjunction — but (formal)", meaning: "but" },
            { t: "出かけます", ro: "dekakemasu", role: "Verb (polite)", meaning: "go out" }
          ] },
        { jp: "簡単ですが、時間がかかります。", ro: "kantan desu ga, jikan ga kakarimasu.", en: "It's easy, but takes time.",
          tokens: [
            { t: "簡単", ro: "kantan", role: "na-adjective", meaning: "easy" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "が", ro: "ga", role: "Conjunction — but (formal)", meaning: "but" },
            { t: "時間", ro: "jikan", role: "Noun", meaning: "time" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "かかります", ro: "kakarimasu", role: "Verb (polite)", meaning: "takes" }
          ] },
        { jp: "コードはできたけど、テストはまだです。", ro: "kōdo wa dekita kedo, tesuto wa mada desu.", en: "Code is done, but tests aren't yet.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "できた", ro: "dekita", role: "Verb (plain past)", meaning: "got done" },
            { t: "けど", ro: "kedo", role: "Particle — but", meaning: "but" },
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "は", ro: "wa", role: "Particle — contrast topic", meaning: "as for ~" },
            { t: "まだ", ro: "mada", role: "Adverb", meaning: "still / not yet" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "わかったけど、ちょっと違います。", ro: "wakatta kedo, chotto chigaimasu.", en: "I understood, but it's a bit different.",
          tokens: [
            { t: "わかった", ro: "wakatta", role: "Verb (plain past)", meaning: "understood" },
            { t: "けど", ro: "kedo", role: "Particle — but", meaning: "but" },
            { t: "ちょっと", ro: "chotto", role: "Adverb", meaning: "a little" },
            { t: "違います", ro: "chigaimasu", role: "Verb (polite)", meaning: "is different" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 10 — COUNTERS (~つ・~人・~枚・~本・~個・~時間・~分)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Counters",
      title: "Counters — counting things, people, time",
      formula: "[Number] + [Counter]   (different counter per type of thing)",
      description: "Japanese uses counters depending on WHAT you're counting. ~つ for general/abstract, ~人 for people, ~枚 for flat thin things (paper, plates), ~本 for long thin things (pens, bottles), ~個 for small round/uncountable things, ~時間 for hours, ~分 for minutes. Some numbers change pronunciation with certain counters.",
      person: "Any",
      tense: "Tense-neutral",
      main: {
        jp: "りんごを一つください。",
        ro: "ringo o hitotsu kudasai.",
        en: "One apple, please.",
        tokens: [
          { t: "りんご", ro: "ringo", role: "Noun", meaning: "apple" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "一つ", ro: "hitotsu", role: "Counter (general, ~つ)", meaning: "one (thing)" },
          { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
        ]
      },
      examples: [
        { jp: "子供が二人います。", ro: "kodomo ga futari imasu.", en: "I have two children. (~人 for people)",
          tokens: [
            { t: "子供", ro: "kodomo", role: "Noun", meaning: "child" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "二人", ro: "futari", role: "Counter (people, ~人)", meaning: "two people (special: 1人=hitori, 2人=futari)" },
            { t: "います", ro: "imasu", role: "Verb (existence — animate)", meaning: "exist" }
          ] },
        { jp: "紙を三枚ください。", ro: "kami o sanmai kudasai.", en: "Three sheets of paper, please. (~枚 for flat things)",
          tokens: [
            { t: "紙", ro: "kami", role: "Noun", meaning: "paper" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "三枚", ro: "sanmai", role: "Counter (flat thin, ~枚)", meaning: "three sheets" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "ペンが五本あります。", ro: "pen ga gohon arimasu.", en: "There are 5 pens. (~本 for long thin things)",
          tokens: [
            { t: "ペン", ro: "pen", role: "Noun (loanword)", meaning: "pen" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "五本", ro: "gohon", role: "Counter (long thin, ~本)", meaning: "five sticks (1本=ippon, 3本=sanbon)" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "exist" }
          ] },
        { jp: "りんごを四個買いました。", ro: "ringo o yonko kaimashita.", en: "I bought 4 apples. (~個 for small/round things)",
          tokens: [
            { t: "りんご", ro: "ringo", role: "Noun", meaning: "apple" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "四個", ro: "yonko", role: "Counter (small, ~個)", meaning: "four (small things)" },
            { t: "買いました", ro: "kaimashita", role: "Verb (polite past)", meaning: "bought" }
          ] },
        { jp: "二時間勉強しました。", ro: "nijikan benkyō shimashita.", en: "I studied for 2 hours.",
          tokens: [
            { t: "二時間", ro: "nijikan", role: "Counter (hours, ~時間)", meaning: "2 hours" },
            { t: "勉強しました", ro: "benkyō shimashita", role: "Verb (polite past)", meaning: "studied" }
          ] },
        { jp: "三十分待ちました。", ro: "sanjuppun machimashita.", en: "I waited 30 minutes.",
          tokens: [
            { t: "三十分", ro: "sanjuppun", role: "Counter (minutes, ~分)", meaning: "30 minutes" },
            { t: "待ちました", ro: "machimashita", role: "Verb (polite past)", meaning: "waited" }
          ] },
        { jp: "コーヒーを一杯お願いします。", ro: "kōhī o ippai onegaishimasu.", en: "One cup of coffee, please. (~杯 for cups/bowls)",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun (loanword)", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "一杯", ro: "ippai", role: "Counter (cups/bowls, ~杯)", meaning: "one cup (1杯=ippai)" },
            { t: "お願いします", ro: "onegaishimasu", role: "Verb (humble polite)", meaning: "please" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 11 — VERB & ADJECTIVE CONJUGATION REFERENCES
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Conjugation references",
      title: "Verb groups — godan, ichidan, irregular",
      formula: "Group 1 (godan): consonant-stem ~う → ~います  |  Group 2 (ichidan): vowel-stem ~る → ~ます  |  Group 3 (irregular): する→します, 来る→来ます",
      description: "Japanese verbs come in three groups. Group 1 (godan) ends in -u sound (除く -ru with a/u/o vowel before): 飲む, 書く, 行く. Group 2 (ichidan) ends in -eru/-iru: 食べる, 見る. Group 3 = only する (to do) and 来る (to come). Conjugations differ per group.",
      person: "Any",
      tense: "Reference (covers all tenses)",
      main: {
        jp: "飲む → 飲みます (drink, present polite)",
        ro: "nomu → nomimasu",
        en: "Group 1 (godan): drop final -u, add -imasu.",
        tokens: [
          { t: "飲む", ro: "nomu", role: "Verb (plain, godan)", meaning: "drink (dictionary form)" },
          { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
          { t: "飲みます", ro: "nomimasu", role: "Verb (polite, godan)", meaning: "drink (polite)" }
        ]
      },
      examples: [
        { jp: "食べる → 食べます", ro: "taberu → tabemasu", en: "Group 2 (ichidan): drop -ru, add -masu. (eat)",
          tokens: [
            { t: "食べる", ro: "taberu", role: "Verb (plain, ichidan)", meaning: "eat (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "食べます", ro: "tabemasu", role: "Verb (polite, ichidan)", meaning: "eat (polite)" }
          ] },
        { jp: "する → します", ro: "suru → shimasu", en: "Group 3 (irregular, do): completely changes. する → します.",
          tokens: [
            { t: "する", ro: "suru", role: "Verb (plain, irregular)", meaning: "do (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "します", ro: "shimasu", role: "Verb (polite, irregular)", meaning: "do (polite)" }
          ] },
        { jp: "来る → 来ます", ro: "kuru → kimasu", en: "Group 3 (irregular, come): vowel changes. 来る (kuru) → 来ます (kimasu).",
          tokens: [
            { t: "来る", ro: "kuru", role: "Verb (plain, irregular)", meaning: "come (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "来ます", ro: "kimasu", role: "Verb (polite, irregular)", meaning: "come (polite)" }
          ] },
        { jp: "書く → 書きます", ro: "kaku → kakimasu", en: "Group 1 (godan, -ku ending): -u → -i + masu.",
          tokens: [
            { t: "書く", ro: "kaku", role: "Verb (plain, godan)", meaning: "write (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "書きます", ro: "kakimasu", role: "Verb (polite, godan)", meaning: "write (polite)" }
          ] },
        { jp: "見る → 見ます", ro: "miru → mimasu", en: "Group 2 (ichidan, -iru): drop -ru, add -masu.",
          tokens: [
            { t: "見る", ro: "miru", role: "Verb (plain, ichidan)", meaning: "see (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "見ます", ro: "mimasu", role: "Verb (polite, ichidan)", meaning: "see (polite)" }
          ] },
        { jp: "行く → 行きました (past)", ro: "iku → ikimashita", en: "Past polite: -ます → -ました.",
          tokens: [
            { t: "行く", ro: "iku", role: "Verb (plain)", meaning: "go (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "行きました", ro: "ikimashita", role: "Verb (polite past)", meaning: "went" }
          ] },
        { jp: "話す → 話しません (negative)", ro: "hanasu → hanashimasen", en: "Negative polite: -ます → -ません.",
          tokens: [
            { t: "話す", ro: "hanasu", role: "Verb (plain, godan)", meaning: "speak (dict)" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "話しません", ro: "hanashimasen", role: "Verb (polite negative)", meaning: "do not speak" }
          ] }
      ]
    },

    {
      category: "Conjugation references",
      title: "Adjective conjugation — i-adj vs na-adj",
      formula: "i-adj: い → くない (neg) → かった (past) → くなかった (past neg)   |   na-adj: + です/じゃない/でした/じゃなかった",
      description: "Two adjective types behave differently. **i-adjectives** (end in い) conjugate themselves: 大きい→大きくない. **na-adjectives** (don't end in い) use the copula like nouns: 静か+です. Drop the final い for i-adj forms; for na-adj, just change the copula. The exception: いい (good) becomes よかった in past, よくない in negative.",
      person: "Any",
      tense: "Reference (all forms)",
      main: {
        jp: "大きい → 大きくない (negative)",
        ro: "ōkii → ōkikunai",
        en: "i-adjective negative: い → くない.",
        tokens: [
          { t: "大きい", ro: "ōkii", role: "i-adjective", meaning: "big" },
          { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
          { t: "大きくない", ro: "ōkikunai", role: "i-adjective negative", meaning: "not big" }
        ]
      },
      examples: [
        { jp: "高い → 高かった (past)", ro: "takai → takakatta", en: "i-adj past: い → かった.",
          tokens: [
            { t: "高い", ro: "takai", role: "i-adjective", meaning: "expensive / high" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "高かった", ro: "takakatta", role: "i-adjective past", meaning: "was expensive" }
          ] },
        { jp: "難しい → 難しくなかった (past neg)", ro: "muzukashii → muzukashikunakatta", en: "i-adj past negative: い → くなかった.",
          tokens: [
            { t: "難しい", ro: "muzukashii", role: "i-adjective", meaning: "difficult" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "難しくなかった", ro: "muzukashikunakatta", role: "i-adjective past negative", meaning: "wasn't difficult" }
          ] },
        { jp: "静か → 静かじゃない (negative)", ro: "shizuka → shizuka ja nai", en: "na-adj negative: just add じゃない.",
          tokens: [
            { t: "静か", ro: "shizuka", role: "na-adjective", meaning: "quiet" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "静かじゃない", ro: "shizuka ja nai", role: "na-adjective casual negative", meaning: "not quiet" }
          ] },
        { jp: "元気 → 元気でした (past)", ro: "genki → genki deshita", en: "na-adj past: just add でした (was).",
          tokens: [
            { t: "元気", ro: "genki", role: "na-adjective", meaning: "energetic / well" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "元気でした", ro: "genki deshita", role: "na-adjective past", meaning: "was well" }
          ] },
        { jp: "親切 → 親切じゃなかった (past neg)", ro: "shinsetsu → shinsetsu ja nakatta", en: "na-adj past neg: じゃなかった.",
          tokens: [
            { t: "親切", ro: "shinsetsu", role: "na-adjective", meaning: "kind" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "親切じゃなかった", ro: "shinsetsu ja nakatta", role: "na-adjective past negative", meaning: "wasn't kind" }
          ] },
        { jp: "いい → よくない (irregular negative)", ro: "ii → yokunai", en: "Irregular: いい (good) uses よ- stem in conjugation.",
          tokens: [
            { t: "いい", ro: "ii", role: "i-adjective (irregular)", meaning: "good" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "よくない", ro: "yokunai", role: "i-adjective negative (irregular)", meaning: "not good" }
          ] },
        { jp: "綺麗 → 綺麗な部屋 (modifying noun)", ro: "kirei → kirei na heya", en: "na-adj before a noun needs な: 綺麗 → 綺麗な部屋.",
          tokens: [
            { t: "綺麗", ro: "kirei", role: "na-adjective", meaning: "pretty / clean" },
            { t: "→", ro: "→", role: "Symbol", meaning: "becomes" },
            { t: "綺麗な", ro: "kirei na", role: "na-adjective + な (attributive)", meaning: "pretty (before noun)" },
            { t: "部屋", ro: "heya", role: "Noun", meaning: "room" }
          ] }
      ]
    }
  ]
};
