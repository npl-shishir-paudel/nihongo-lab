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
  "いいね！一緒に行こう。": "ठीक छ! सँगै जाऔं। (thik chha! sangai jaaauñ)",
  // ── Mega expansion: plain forms / potential / volitional / conditionals / comparison / preferences / giving-receiving / quotations ──
  "私はコーヒーを飲む。": "म कफी पिउँछु। (ma coffee piuchhu) — casual",
  "毎朝パンを食べる。": "हरेक बिहान रोटी खान्छु। (harek bihana roti khanchhu)",
  "友達と会う。": "साथीसँग भेट्छु। (sathi sanga bhetchhu)",
  "本を読む。": "किताब पढ्छु। (kitab padhchhu)",
  "明日、東京へ行く。": "भोलि टोकियो जान्छु। (bholi Tokyo jaanchhu)",
  "テストをする。": "टेस्ट गर्छु। (test garchhu)",
  "明日、来る？": "भोलि आउँछौ? (bholi aaunchhau?)",
  "彼はコードを書く。": "ऊ कोड लेख्छ। (u code lekhchha)",
  "コーヒーを飲まない。": "कफी पिउँदिन। (coffee piudina)",
  "肉を食べない。": "मासु खान्न। (masu khadina)",
  "今日は行かない。": "आज जाँदिन। (aja jadina)",
  "わからない。": "बुझ्दिन। (bujhdina)",
  "彼は来ない。": "ऊ आउँदैन। (u aaudaina)",
  "宿題をしない。": "गृहकार्य गर्दिन। (grihakarya gardina)",
  "テレビを見ない。": "टिभी हेर्दिन। (TV herdina)",
  "彼女は話さない。": "उनी बोल्दिनन्। (uni boldinan)",
  "昨日、コーヒーを飲んだ。": "हिजो कफी पिएँ। (hijo coffee pieñ)",
  "もう食べた。": "खाइसकेँ। (khaaisakeñ)",
  "昨日、東京に行った。": "हिजो टोकियो गएँ। (hijo Tokyo gaeñ)",
  "本を読んだ。": "किताब पढेँ। (kitab padheñ)",
  "彼が来た。": "ऊ आयो। (u aayo)",
  "宿題をした。": "गृहकार्य गरेँ। (grihakarya gareñ)",
  "テストを書いた。": "टेस्ट लेखेँ। (test lekheñ)",
  "急いだ。": "हतार गरेँ। (hatar gareñ)",
  "日本語が話せます。": "जापानी भाषा बोल्न सक्छु। (japanese bhasha bolna sakchhu)",
  "刺身が食べられます。": "साशिमी खान सक्छु। (sashimi khana sakchhu)",
  "コードが書けます。": "कोड लेख्न सक्छु। (code lekhna sakchhu)",
  "明日、来られます。": "भोलि आउन सक्छु। (bholi aauna sakchhu)",
  "これはできます。": "यो गर्न सक्छु। (yo garna sakchhu)",
  "車が運転できません。": "गाडी चलाउन सक्दिन। (gadi chalauna sakdina)",
  "漢字が読めません。": "खान्जी पढ्न सक्दिन। (kanji padhna sakdina)",
  "今、行けません。": "अहिले जान सक्दिन। (ahile jaana sakdina)",
  "一緒に行こう。": "सँगै जाउँ। (sangai jaau) — casual",
  "コーヒーを飲もう。": "कफी पिउँ। (coffee piau)",
  "明日、何を食べよう？": "भोलि के खाउँ? (bholi k khaau?)",
  "ちょっと休もう。": "अलि आराम गरौं। (ali aaram garaau)",
  "テストを書こう。": "टेस्ट लेखौं। (test lekhaau)",
  "宿題をしよう。": "गृहकार्य गरौं। (grihakarya garaau)",
  "新しいパソコンを買おう。": "नयाँ ल्यापटप किनौं। (naya laptop kinaau)",
  "もう寝よう。": "अब सुतौं। (aba sutaau)",
  "雨が降ったら、家にいます。": "पानी पर्‍यो भने घरमै बस्छु। (pani paryo bhane gharmai baschhu)",
  "時間があれば、行きます。": "समय भयो भने जान्छु। (samaya bhayo bhane jaanchhu)",
  "東京に行くなら、新幹線がいいよ。": "टोकियो जाने हो भने सिङ्कान्सेन राम्रो। (Tokyo jaane ho bhane shinkansen ramro)",
  "春になると、桜が咲く。": "वसन्त आउँदा साकुरा फुल्छ। (basanta aaunda sakura phulchha)",
  "安ければ、買います。": "सस्तो भयो भने किन्छु। (sasto bhayo bhane kinchhu)",
  "終わったら、教えてください。": "सकेपछि भन्नुहोस्। (sakepachhi bhannuhos)",
  "急がないと、遅刻するよ。": "हतार नगरे ढिलो हुन्छ। (hatar nagare dhilo hunchha)",
  "コードがバグっていたら、直してください。": "कोडमा बग छ भने ठीक गर्नुहोस्। (code ma bug chha bhane thik garnuhos)",
  "犬より猫のほうが好きです。": "कुकुर भन्दा बिरालो बढी मन पर्छ। (kukur bhanda biralo badhi man parchha)",
  "東京は大阪より大きいです。": "टोकियो ओसाका भन्दा ठूलो छ। (Tokyo Osaka bhanda thulo chha)",
  "寿司が一番好きです。": "सुसी सबैभन्दा मन पर्छ। (sushi sabaibhanda man parchha)",
  "コーヒーよりお茶のほうがいい。": "कफी भन्दा चिया राम्रो। (coffee bhanda chiya ramro)",
  "クラスで誰が一番背が高いですか？": "क्लासमा कस्ले सबैभन्दा अग्लो हो? (class ma kaslé sabaibhanda aglo ho?)",
  "夏より冬のほうが好きです。": "गर्मी भन्दा जाडो बढी मन पर्छ। (garmi bhanda jado badhi man parchha)",
  "このコードが一番速いです。": "यो कोड सबैभन्दा छिटो छ। (yo code sabaibhanda chhito chha)",
  "新幹線は車より速い。": "सिङ्कान्सेन कार भन्दा छिटो छ। (shinkansen car bhanda chhito chha)",
  "私は寿司が好きです。": "मलाई सुसी मन पर्छ। (ma lai sushi man parchha)",
  "コーヒーが嫌いです。": "मलाई कफी मन पर्दैन। (ma lai coffee man pardaina)",
  "彼は日本語が上手です。": "ऊ जापानीमा निपुण छ। (u japanese ma nipun chha)",
  "私は料理が下手です。": "मलाई पकाउन आउँदैन। (ma lai pakauna aaudaina)",
  "ラーメンが大好きです。": "मलाई रामेन धेरै मन पर्छ। (ma lai ramen dherai man parchha)",
  "猫より犬のほうが好きです。": "बिरालो भन्दा कुकुर बढी मन पर्छ। (biralo bhanda kukur badhi man parchha)",
  "野菜があまり好きじゃない。": "तरकारी खासै मन पर्दैन। (tarkari khasai man pardaina)",
  "彼女はギターが上手です。": "उनी गिटारमा निपुण छिन्। (uni guitar ma nipun chhin)",
  "田中さんに本をあげました。": "तानाका जीलाई किताब दिएँ। (Tanaka-ji lai kitab dieñ)",
  "田中さんから本をもらいました。": "तानाका जीबाट किताब पाएँ। (Tanaka-ji bata kitab paaeñ)",
  "母がプレゼントをくれました。": "आमाले उपहार दिनुभयो। (aama le upahar dinubhayo)",
  "彼女に花をあげる。": "प्रेमिकालाई फूल दिन्छु। (premika lai phul dinchhu)",
  "友達からチョコをもらった。": "साथीबाट चकलेट पाएँ। (sathi bata chocolate paaeñ)",
  "上司がアドバイスをくれた。": "हाकिमले सल्लाह दिनुभयो। (hakim le sallah dinubhayo)",
  "弟にお小遣いをあげる。": "भाइलाई पकेट खर्च दिन्छु। (bhai lai pocket kharcha dinchhu)",
  "山田さんが助けてくれました。": "यामादा जीले सहयोग गरिदिनुभयो। (Yamada-ji le sahayog garidinubhayo)",
  "雨が降ると思います。": "पानी पर्छ जस्तो लाग्छ। (pani parchha jasto laagchha)",
  "田中さんは「行きます」と言いました。": "तानाका जीले 'जान्छु' भन्नुभयो। (Tanaka-ji le 'jaanchhu' bhannubhayo)",
  "面白いと思った。": "रोचक छ जस्तो लाग्यो। (rochak chha jasto laagyo)",
  "彼女は綺麗だと思います。": "उनी सुन्दर छिन् जस्तो लाग्छ। (uni sundar chhin jasto laagchha)",
  "明日休みだって。": "भोलि बिदा रे। (bholi bida re)",
  "「お疲れさま」と言ってください。": "'धन्यवाद, मेहनत गर्नुभयो' भन्नुहोस्। ('otsukaresama' bhannuhos)",
  "テストは難しいと聞きました。": "टेस्ट गाह्रो छ रे। (test garho chha re)",
  "そうじゃないと思う。": "त्यस्तो होइन जस्तो लाग्छ। (tyasto hoina jasto laagchha)",
  // ── Phase 2: permission/obligation/experience/while/listing/advice/intent/relative/yasui-nikui/sugiru/shika/hearsay/keigo ──
  "ここで写真を撮ってもいいですか？": "यहाँ फोटो खिच्न मिल्छ? (yahaa photo khichna milchha?)",
  "食べてもいいですよ。": "खाए हुन्छ। (khaae hunchha)",
  "ここでタバコを吸ってはいけません。": "यहाँ चुरोट खान मिल्दैन। (yahaa churot khana mildaina)",
  "コードを見てもいいですか？": "कोड हेर्न मिल्छ? (code herna milchha?)",
  "授業中にスマホを使ってはいけません。": "क्लासमा मोबाइल चलाउन मिल्दैन। (class ma mobile chalauna mildaina)",
  "明日休んでもいいですか？": "भोलि बिदा लिन मिल्छ? (bholi bida lina milchha?)",
  "本番環境を直接いじってはいけません。": "प्रोडक्सन सिधै छुन मिल्दैन। (production sidhai chhuna mildaina)",
  "もう帰ってもいい？": "अब घर जान मिल्छ? (aba ghar jaana milchha?)",
  "宿題をしなければなりません。": "गृहकार्य गर्नैपर्छ। (grihakarya garnaiparchha)",
  "明日早く起きなければなりません。": "भोलि चाँडै उठ्नुपर्छ। (bholi chaadai uthnuparchha)",
  "薬を飲まなきゃ。": "औषधि खानुपर्छ। (aushadhi khanuparchha — casual)",
  "この問題を直さないといけない。": "यो समस्या मिलाउनैपर्छ। (yo samasya milaaunaiparchha)",
  "電車に乗らなければなりません。": "ट्रेन चढ्नुपर्छ। (train chadhnuparchha)",
  "テストを書かなくちゃ。": "टेस्ट लेख्नैपर्छ। (test lekhnaiparchha — casual)",
  "デプロイ前にチェックしなければなりません。": "डिप्लोय अघि जाँच्नुपर्छ। (deploy aghi jaanchnuparchha)",
  "もう寝なきゃ。": "अब सुत्नैपर्छ। (aba sutnaiparchha)",
  "日本に行ったことがあります。": "जापान गएको छु। (japan gaako chhu)",
  "寿司を食べたことがあります。": "सुसी खाएको छु। (sushi khaaeko chhu)",
  "富士山を見たことがあります。": "फूजी पहाड देखेको छु। (Fuji pahad dekheko chhu)",
  "ラーメンを作ったことがありません。": "रामेन बनाएको छैन। (ramen banaaeko chhain)",
  "本番でバグを直したことがあります。": "प्रोडक्सनमा बग मिलाएको छु। (production ma bug milaaeko chhu)",
  "彼に会ったことはない。": "उसलाई कहिल्यै भेटेको छैन। (uslai kahilyai bheteko chhain)",
  "京都に行ったことがありますか？": "क्योतो गएको छ? (Kyoto gaaeko chha?)",
  "プログラミングを勉強したことがあります。": "प्रोग्रामिङ पढेको छु। (programming padheko chhu)",
  "音楽を聞きながら勉強します。": "संगीत सुन्दै पढ्छु। (sangit sundai padhchhu)",
  "コーヒーを飲みながらコードを書きます。": "कफी पिउँदै कोड लेख्छु। (coffee piudai code lekhchhu)",
  "テレビを見ながらご飯を食べる。": "टिभी हेर्दै भात खान्छु। (TV herdai bhat khanchhu)",
  "歩きながら話します。": "हिँड्दै कुरा गर्छु। (hidḍai kura garchhu)",
  "電話しながら運転してはいけません。": "फोन गर्दै गाडी चलाउन मिल्दैन। (phone gardai gadi chalauna mildaina)",
  "働きながら大学に通っています。": "काम गर्दै कलेज पढ्दैछु। (kaam gardai college padhdai chhu)",
  "笑いながら言いました。": "हाँस्दै भन्यो। (haasdai bhanyo)",
  "考えながら答えてください。": "सोच्दै जवाफ दिनुहोस्। (sochdai jawaf dinuhos)",
  "週末は本を読んだり、映画を見たりします。": "विकेन्डमा किताब पढ्ने, मुभी हेर्ने जस्ता काम गर्छु। (weekend ma kitab padhne, movie herne jasta kaam garchhu)",
  "コードを書いたり、レビューしたりします。": "कोड लेख्ने, रिभ्यु गर्ने जस्ता काम गर्छु। (code lekhne, review garne jasta kaam garchhu)",
  "公園で遊んだり、走ったりした。": "पार्कमा खेल्ने, दौडने जस्ता काम गरेँ। (park ma khelne, daudne jasta kaam gareñ)",
  "土曜日は寝たり、ゲームをしたりしたい。": "शनिबार सुत्ने, गेम खेल्ने जस्ता काम मन छ। (shanibar sutne, game khelne jasta kaam man chha)",
  "東京で寿司を食べたり、お寺を見たりしました。": "टोकियोमा सुसी खाने, मन्दिर हेर्ने जस्ता काम गरेँ। (Tokyo ma sushi khane, mandir herne jasta kaam gareñ)",
  "歌ったり、踊ったりしましょう。": "गाउने, नाच्ने जस्ता काम गरौं। (gaaune, naachne jasta kaam garaau)",
  "雨が降ったり、止んだりしている。": "पानी पर्ने, रोकिने भइरहेको छ। (pani parne, rokine bhairaheko chha)",
  "メールを送ったり、電話したりしました。": "इमेल पठाउने, फोन गर्ने जस्ता काम गरेँ। (email pathaaune, phone garne jasta kaam gareñ)",
  "早く寝たほうがいいですよ。": "चाँडै सुत्दा राम्रो। (chaadai sutda ramro)",
  "薬を飲んだほうがいいです。": "औषधि खाँदा राम्रो। (aushadhi khanda ramro)",
  "タバコは吸わないほうがいいです。": "चुरोट नखाँदा राम्रो। (churot nakhanda ramro)",
  "テストの前に勉強したほうがいい。": "टेस्ट अघि पढ्दा राम्रो। (test aghi padhda ramro)",
  "傘を持ってきたほうがいいですよ。": "छाता ल्याउँदा राम्रो। (chhata lyaaunda ramro)",
  "コードをテストしたほうがいい。": "कोड टेस्ट गर्दा राम्रो। (code test garda ramro)",
  "急いだほうがいいですよ。": "हतार गर्दा राम्रो। (hatar garda ramro)",
  "電車で行ったほうがいいです。": "ट्रेनमा जाँदा राम्रो। (train ma janda ramro)",
  "来週、日本に行くつもりです。": "अर्को हप्ता जापान जाने योजना छ। (arko hapta japan jaane yojana chha)",
  "明日、早く起きるつもりです。": "भोलि चाँडै उठ्ने सोच छ। (bholi chaadai uthne soch chha)",
  "今日は飲まないつもりです。": "आज नपिउने सोच छ। (aja napiune soch chha)",
  "新しいパソコンを買うつもりです。": "नयाँ ल्यापटप किन्ने योजना छ। (naya laptop kinne yojana chha)",
  "週末はゆっくりするつもりです。": "विकेन्डमा आराम गर्ने सोच छ। (weekend ma aaram garne soch chha)",
  "プルリクを今日中に送るつもりです。": "आजसम्म पुल रिक्वेस्ट पठाउने योजना छ। (aja samma pull request pathaaune yojana chha)",
  "彼に会うつもりはありません。": "उसलाई भेट्ने सोच छैन। (uslai bhetne soch chhain)",
  "毎日勉強するつもりです。": "हरेक दिन पढ्ने सोच छ। (harek din padhne soch chha)",
  "私が書いた本": "मैले लेखेको किताब (maile lekheko kitab)",
  "昨日食べたラーメンは美味しかった。": "हिजो खाएको रामेन मीठो थियो। (hijo khaaeko ramen mitho thiyo)",
  "田中さんが住んでいる町は静かです。": "तानाका जी बस्ने सहर शान्त छ। (Tanaka-ji basne sahar shanta chha)",
  "私が好きな食べ物は寿司です。": "मलाई मन पर्ने खाना सुसी हो। (ma lai man parne khana sushi ho)",
  "彼が書いたコードはきれいです。": "उसले लेखेको कोड सफा छ। (us le lekheko code safa chha)",
  "今読んでいる本は面白い。": "अहिले पढिरहेको किताब रोचक छ। (ahile padhiraheko kitab rochak chha)",
  "新幹線で行く人は田中さんです。": "सिङ्कान्सेनबाट जाने मान्छे तानाका जी हो। (shinkansen bata jaane manchhe Tanaka-ji ho)",
  "山田さんが直したバグは難しかった。": "यामादा जीले मिलाएको बग गाह्रो थियो। (Yamada-ji le milaaeko bug garho thiyo)",
  "この本は読みやすいです。": "यो किताब पढ्न सजिलो छ। (yo kitab padhna sajilo chha)",
  "この字は読みにくい。": "यो अक्षर पढ्न गाह्रो छ। (yo akshar padhna garho chha)",
  "このコードは理解しやすい。": "यो कोड बुझ्न सजिलो छ। (yo code bujhna sajilo chha)",
  "この靴は歩きやすい。": "यो जुत्ता हिँड्न सजिलो छ। (yo jutta hidna sajilo chha)",
  "この漢字は覚えにくいです。": "यो खान्जी सम्झन गाह्रो छ। (yo kanji samjhana garho chha)",
  "彼の説明はわかりやすかった。": "उसको व्याख्या बुझ्न सजिलो थियो। (us ko vyakhya bujhna sajilo thiyo)",
  "このバグは見つけにくい。": "यो बग भेट्न गाह्रो छ। (yo bug bhetna garho chha)",
  "このアプリは使いやすいです。": "यो एप चलाउन सजिलो छ। (yo app chalauna sajilo chha)",
  "このコーヒーは熱すぎる。": "यो कफी धेरै तातो छ। (yo coffee dherai tato chha)",
  "食べすぎました。": "धेरै खाएँ। (dherai khaaeñ)",
  "この問題は難しすぎる。": "यो समस्या धेरै गाह्रो छ। (yo samasya dherai garho chha)",
  "高すぎて買えません。": "धेरै महँगो भएकोले किन्न सक्दिन। (dherai mahango bhaekole kinna sakdina)",
  "彼は働きすぎです。": "ऊ धेरै काम गर्छ। (u dherai kaam garchha)",
  "昨日、飲みすぎた。": "हिजो धेरै पिएँ। (hijo dherai pieñ)",
  "このコードは複雑すぎます。": "यो कोड धेरै जटिल छ। (yo code dherai jatil chha)",
  "テストが多すぎる！": "टेस्ट धेरै भयो! (test dherai bhayo!)",
  "千円しかありません。": "एक हजार येन मात्र छ। (ek hajar yen matra chha)",
  "一つだけください。": "एक मात्र दिनुहोस्। (ek matra dinuhos)",
  "私しかわかりません。": "मात्र मैले बुझ्छु। (matra maile bujhchhu)",
  "彼だけが来ました。": "ऊ मात्र आयो। (u matra aayo)",
  "今日しか時間がない。": "आज मात्र समय छ। (aja matra samaya chha)",
  "コーヒーだけを飲みます。": "कफी मात्र पिउँछु। (coffee matra piuchhu)",
  "二人しか来なかった。": "दुई जना मात्र आए। (dui jana matra aae)",
  "テストだけ受けます。": "टेस्ट मात्र दिन्छु। (test matra dinchhu)",
  "明日、雨が降るそうです。": "भोलि पानी पर्छ रे। (bholi pani parchha re)",
  "田中さんは病気らしい。": "तानाका जी बिरामी हुनुहुन्छ रे। (Tanaka-ji birami hunuhunchha re)",
  "新しいゲームが面白いそうです。": "नयाँ गेम रोचक छ रे। (naya game rochak chha re)",
  "彼女は来ないらしい。": "उनी आउँदिनन् रे। (uni aaudinan re)",
  "山田さんは結婚したそうです。": "यामादा जीले बिहे गर्नुभयो रे। (Yamada-ji le bihe garnubhayo re)",
  "本番で問題があったそうです。": "प्रोडक्सनमा समस्या आएको थियो रे। (production ma samasya aaeko thiyo re)",
  "今日はテストがあるらしいよ。": "आज टेस्ट हुने रहेछ। (aja test hune rahechha)",
  "彼は元気だそうです。": "ऊ सञ्चै छ रे। (u sanchai chha re)",
  "社長がいらっしゃいました。": "साहु जी आइपुग्नुभयो। (sahu-ji aaipugnubhayo) — formal",
  "私が参ります。": "म आउँछु। (ma aaunchhu) — humble",
  "社長は何をおっしゃいましたか？": "साहु जीले के भन्नुभयो? (sahu-ji le k bhannubhayo?)",
  "私は申します。": "म भन्छु। (ma bhanchhu) — humble",
  "お客様が召し上がります。": "ग्राहक खानुहुन्छ। (grahak khanuhunchha) — honorific",
  "私はいただきます。": "म ग्रहण गर्छु। (ma grahan garchhu) — humble (also said before meals)",
  "ご存じですか？": "तपाईंलाई थाहा छ? (tapaiñ lai thaha chha?) — formal",
  "存じております。": "मलाई थाहा छ। (ma lai thaha chha) — humble",
  // ── Phase 3: words / sentences / conversations ──
  "いらっしゃいませ。何名様ですか？": "स्वागत छ। कति जना? (swagat chha. kati jana?)",
  "二人です。": "दुई जना। (dui jana)",
  "こちらへどうぞ。": "यतातिर आउनुहोस्। (yatatira aaunuhos)",
  "ご注文はお決まりですか？": "अर्डर थाहा भयो? (order thaha bhayo?)",
  "ラーメンとお茶をお願いします。": "रामेन र चिया दिनुहोस्। (ramen ra chiya dinuhos)",
  "かしこまりました。": "हुन्छ, तुरुन्तै। (hunchha, turuntai — humble)",
  "すみません、お会計お願いします。": "माफ गर्नुहोस्, बिल दिनुहोस्। (maaf garnuhos, bill dinuhos)",
  "千二百円になります。": "१२०० येन हुन्छ। (1200 yen hunchha)",
  "こんにちは。チェックインをお願いします。": "नमस्ते। चेक-इन गर्नुहोस्। (namaste. check-in garnuhos)",
  "お名前をお願いします。": "नाम कृपया? (naam kripaya?)",
  "シシル・パウデルです。": "शिशिर पौडेल। (Shishir Paudel)",
  "予約は二泊で間違いございませんか？": "बुकिङ दुई रात कै लागि हो, ठीक छ? (booking dui rat kai lagi ho, thik chha?)",
  "こちらが鍵です。お部屋は305号室です。": "यो साँचो हो। कोठा ३०५ हो। (yo sancho ho. kotha 305 ho)",
  "すみません、東京までの切符をください。": "माफ गर्नुहोस्, टोकियोसम्मको टिकट दिनुहोस्। (maaf garnuhos, Tokyo samma ko ticket dinuhos)",
  "片道ですか、往復ですか？": "एकतर्फी कि दुवैतर्फ? (ektarphi ki duvaitarpha?)",
  "新幹線ですか？": "सिङ्कान्सेन हो? (shinkansen ho?)",
  "はい、新幹線で。": "हो, सिङ्कान्सेनबाट। (ho, shinkansen bata)",
  "一万三千円です。": "१३,००० येन। (13000 yen)",
  "クレジットカードでお願いします。": "क्रेडिट कार्डले। (credit card le)",
  "上司、ちょっとよろしいですか？": "हाकिम, एक छिन हुन्छ? (hakim, ek chhin hunchha?)",
  "今日、少し早く帰ってもいいですか？": "आज अलि चाँडै घर जान मिल्छ? (aja ali chaadai ghar jaana milchha?)",
  "理由を教えてもらえますか？": "कारण भन्न सक्नुहुन्छ? (karan bhanna saknuhunchha?)",
  "わかりました。お大事に。": "हुन्छ। आफ्नो ख्याल राख्नुहोस्। (hunchha. aaphno khyal raakhnuhos)",
  "本当に。暑くも寒くもないですね。": "साँच्चै। न गर्मी न जाडो छ। (saachchai. na garmi na jado chha)",
  "そうですか。傘を持ってきます。": "ओहो, छाता लिएर आउँछु। (oho, chhata liyera aaunchhu)",
  "そうしたほうがいいですよ。": "त्यसो गर्दा राम्रो। (tyaso garda ramro)",
  "趣味は何ですか？": "रुचि के हो? (ruchi k ho?)",
  "プログラミングです。": "प्रोग्रामिङ हो। (programming ho)",
  "へえ、すごいですね！": "ओहो, धेरै राम्रो! (oho, dherai ramro!)",
  "あなたは？": "तपाईंको? (tapaiñ ko?)",
  "私は写真を撮るのが好きです。": "मलाई फोटो खिच्न मन पर्छ। (ma lai photo khichna man parchha)",
  "いいですね。今度見せてください。": "राम्रो। अर्को पटक देखाउनुहोस्। (ramro. arko patak dekhaaunuhos)",
  "明日、映画を見に行きませんか？": "भोलि मुभी हेर्न जाउँ? (bholi movie herna jaau?)",
  "うーん、明日はちょっと…。": "उम्म, भोलि अलि…। (umm, bholi ali…) — soft no",
  "用事がありますか？": "केही काम छ? (kehi kaam chha?)",
  "じゃあ、また今度。": "त्यसो भए, फेरि अर्को पटक। (tyaso bhae, pheri arko patak)",
  "すみません、またお願いします。": "माफ गर्नुहोस्, अर्को पटक। (maaf garnuhos, arko patak)",
  "とても暑いですね。": "धेरै गर्मी छ है। (dherai garmi chha hai)",
  "残業になりそうです。": "ओभरटाइम हुने जस्तो छ। (overtime hune jasto chha)",
  "出張に行きます。": "व्यापारिक यात्रामा जान्छु। (vyaapaarik yatra ma jaanchhu)",
  "往復切符をください。": "दुवैतर्फी टिकट दिनुहोस्। (duvaitarphi ticket dinuhos)",
  "新幹線で行きます。": "सिङ्कान्सेनबाट जान्छु। (shinkansen bata jaanchhu)",
  "メニューをください。": "मेनु दिनुहोस्। (menu dinuhos)",
  "音楽を聞くのが好きです。": "संगीत सुन्न मन पर्छ। (sangit sunna man parchha)",
  "また今度。": "फेरि अर्को पटक। (pheri arko patak)",
  "家族は四人います。": "परिवारमा चार जना छन्। (pariwar ma chaar jana chhan)",
  "兄が一人います。": "एक जना दाजु छन्। (ek jana daju chhan)",
  "お大事に。": "आफ्नो ख्याल राख्नुहोस्। (aaphno khyal rakhnuhos)",
  "風邪を引きました。": "रुघा लाग्यो। (rugha laagyo)",
  "ここに座ってもいいですか？": "यहाँ बस्न मिल्छ? (yahaa basna milchha?)",
  "明日は休みだそうです。": "भोलि बिदा रे। (bholi bida re)",
  "来年、結婚するつもりです。": "अर्को वर्ष बिहे गर्ने सोच छ। (arko varsha bihe garne soch chha)",
  "赤い車が好きです。": "रातो गाडी मन पर्छ। (rato gadi man parchha)",
  "青いシャツをください。": "नीलो शर्ट दिनुहोस्। (nilo shirt dinuhos)",
  "ありがとうございました。": "धेरै धन्यवाद। (dherai dhanyabad — past)",
  "頑張ってください。": "मेहनत गर्नुहोस्। (mehnat garnuhos / good luck)",
  "また明日会いましょう。": "भोलि फेरि भेटौं। (bholi pheri bhetaau)",
  "気をつけて。": "ख्याल राख्नुहोस्। (khyal rakhnuhos)"
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
    { ch: "人", on: "ジン・ニン", kun: "ひと", en: "person", strokes: 2, words: ["三人 (sannin) — three people","日本人 (nihonjin) — Japanese person"], jlpt: "N5" },
    { ch: "日", on: "ニチ・ジツ", kun: "ひ・び・か", en: "day / sun", strokes: 4, words: ["今日 (kyō) — today","日本 (nihon) — Japan"], jlpt: "N5" },
    { ch: "月", on: "ゲツ・ガツ", kun: "つき", en: "month / moon", strokes: 4, words: ["月曜日 (getsuyōbi) — Monday","一月 (ichigatsu) — January"], jlpt: "N5" },
    { ch: "本", on: "ホン", kun: "もと", en: "book / origin", strokes: 5, words: ["本 (hon) — book","日本 (nihon) — Japan"], jlpt: "N5" },
    { ch: "山", on: "サン", kun: "やま", en: "mountain", strokes: 3, words: ["富士山 (fujisan) — Mt. Fuji","山田 (yamada) — Yamada (surname)"], jlpt: "N5" },
    { ch: "川", on: "セン", kun: "かわ", en: "river", strokes: 3, words: ["川 (kawa) — river","石川 (ishikawa) — Ishikawa"], jlpt: "N5" },
    { ch: "大", on: "ダイ・タイ", kun: "おお(きい)", en: "big / large", strokes: 3, words: ["大きい (ōkii) — big","大人 (otona) — adult"], jlpt: "N5" },
    { ch: "小", on: "ショウ", kun: "ちい(さい)・こ", en: "small", strokes: 3, words: ["小さい (chiisai) — small","小学校 (shōgakkō) — elementary school"], jlpt: "N5" },
    { ch: "上", on: "ジョウ", kun: "うえ・あ(がる)", en: "up / above", strokes: 3, words: ["上司 (jōshi) — boss","上 (ue) — above"], jlpt: "N5" },
    { ch: "下", on: "カ・ゲ", kun: "した・さ(がる)", en: "down / below", strokes: 3, words: ["下 (shita) — below","地下 (chika) — underground"], jlpt: "N5" },
    { ch: "中", on: "チュウ", kun: "なか", en: "middle / inside", strokes: 4, words: ["会議中 (kaigichū) — in a meeting","中国 (chūgoku) — China"], jlpt: "N5" },
    { ch: "右", on: "ウ", kun: "みぎ", en: "right (direction)", strokes: 5, words: ["右 (migi) — right","右手 (migite) — right hand"], jlpt: "N5" },
    { ch: "左", on: "サ", kun: "ひだり", en: "left", strokes: 5, words: ["左 (hidari) — left","左手 (hidarite) — left hand"], jlpt: "N5" },
    { ch: "前", on: "ゼン", kun: "まえ", en: "before / front", strokes: 9, words: ["前 (mae) — before/front","午前 (gozen) — AM"], jlpt: "N5" },
    { ch: "後", on: "ゴ・コウ", kun: "あと・うし(ろ)", en: "after / behind", strokes: 9, words: ["午後 (gogo) — PM","後で (atode) — later"], jlpt: "N5" },
    { ch: "今", on: "コン", kun: "いま", en: "now", strokes: 4, words: ["今 (ima) — now","今日 (kyō) — today"], jlpt: "N5" },
    { ch: "時", on: "ジ", kun: "とき", en: "time / hour", strokes: 10, words: ["時間 (jikan) — time","三時 (sanji) — 3 o'clock"], jlpt: "N5" },
    { ch: "分", on: "フン・ブン", kun: "わ(かる)", en: "minute / part", strokes: 4, words: ["三十分 (sanjuppun) — 30 min","分かる (wakaru) — understand"], jlpt: "N5" },
    { ch: "年", on: "ネン", kun: "とし", en: "year", strokes: 6, words: ["今年 (kotoshi) — this year","二年 (ninen) — two years"], jlpt: "N5" },
    { ch: "新", on: "シン", kun: "あたら(しい)", en: "new", strokes: 13, words: ["新しい (atarashii) — new","新聞 (shinbun) — newspaper"], jlpt: "N5" },
    { ch: "古", on: "コ", kun: "ふる(い)", en: "old (things)", strokes: 5, words: ["古い (furui) — old","古本 (furuhon) — used book"], jlpt: "N5" },
    { ch: "高", on: "コウ", kun: "たか(い)", en: "high / expensive", strokes: 10, words: ["高い (takai) — high/expensive","最高 (saikō) — best"], jlpt: "N5" },
    { ch: "安", on: "アン", kun: "やす(い)", en: "cheap / peaceful", strokes: 6, words: ["安い (yasui) — cheap","安全 (anzen) — safety"], jlpt: "N5" },
    { ch: "見", on: "ケン", kun: "み(る)", en: "see / look", strokes: 7, words: ["見る (miru) — see","意見 (iken) — opinion"], jlpt: "N5" },
    { ch: "聞", on: "ブン・モン", kun: "き(く)", en: "hear / ask", strokes: 14, words: ["聞く (kiku) — listen/ask","新聞 (shinbun) — newspaper"], jlpt: "N5" },
    { ch: "言", on: "ゲン", kun: "い(う)", en: "say / word", strokes: 7, words: ["言う (iu) — say","言語 (gengo) — language"], jlpt: "N5" },
    { ch: "話", on: "ワ", kun: "はな(す)", en: "talk / story", strokes: 13, words: ["話す (hanasu) — talk","電話 (denwa) — phone"], jlpt: "N5" },
    { ch: "読", on: "ドク", kun: "よ(む)", en: "read", strokes: 14, words: ["読む (yomu) — read","読書 (dokusho) — reading"], jlpt: "N5" },
    { ch: "書", on: "ショ", kun: "か(く)", en: "write", strokes: 10, words: ["書く (kaku) — write","辞書 (jisho) — dictionary"], jlpt: "N5" },
    { ch: "行", on: "コウ・ギョウ", kun: "い(く)・おこな(う)", en: "go", strokes: 6, words: ["行く (iku) — go","銀行 (ginkō) — bank"], jlpt: "N5" },
    { ch: "来", on: "ライ", kun: "く(る)", en: "come", strokes: 7, words: ["来る (kuru) — come","来週 (raishū) — next week"], jlpt: "N5" },
    { ch: "出", on: "シュツ", kun: "で(る)・だ(す)", en: "exit / put out", strokes: 5, words: ["出る (deru) — exit","出張 (shutchō) — biz trip"], jlpt: "N5" },
    { ch: "入", on: "ニュウ", kun: "い(る)・はい(る)", en: "enter", strokes: 2, words: ["入る (hairu) — enter","入学 (nyūgaku) — school entrance"], jlpt: "N5" },
    { ch: "食", on: "ショク", kun: "た(べる)", en: "eat / food", strokes: 9, words: ["食べる (taberu) — eat","食事 (shokuji) — meal"], jlpt: "N5" },
    { ch: "飲", on: "イン", kun: "の(む)", en: "drink", strokes: 12, words: ["飲む (nomu) — drink","飲み物 (nomimono) — drink"], jlpt: "N5" },
    { ch: "学", on: "ガク", kun: "まな(ぶ)", en: "learn / study", strokes: 8, words: ["学校 (gakkō) — school","学生 (gakusei) — student"], jlpt: "N5" },
    { ch: "校", on: "コウ", kun: "—", en: "school", strokes: 10, words: ["学校 (gakkō) — school","高校 (kōkō) — high school"], jlpt: "N5" },
    { ch: "生", on: "セイ", kun: "う(まれる)・い(きる)", en: "life / birth", strokes: 5, words: ["先生 (sensei) — teacher","学生 (gakusei) — student"], jlpt: "N5" },
    { ch: "先", on: "セン", kun: "さき", en: "previous / ahead", strokes: 6, words: ["先生 (sensei) — teacher","先週 (senshū) — last week"], jlpt: "N5" },
    { ch: "私", on: "シ", kun: "わたし", en: "I / private", strokes: 7, words: ["私 (watashi) — I","私立 (shiritsu) — private (school)"], jlpt: "N5" },
    { ch: "名", on: "メイ", kun: "な", en: "name", strokes: 6, words: ["名前 (namae) — name","有名 (yūmei) — famous"], jlpt: "N5" },
    { ch: "国", on: "コク", kun: "くに", en: "country", strokes: 8, words: ["中国 (chūgoku) — China","国 (kuni) — country"], jlpt: "N5" },
    { ch: "家", on: "カ・ケ", kun: "いえ・うち", en: "house / family", strokes: 10, words: ["家 (ie) — house","家族 (kazoku) — family"], jlpt: "N5" },
    { ch: "車", on: "シャ", kun: "くるま", en: "car / vehicle", strokes: 7, words: ["車 (kuruma) — car","電車 (densha) — train"], jlpt: "N5" },
    { ch: "電", on: "デン", kun: "—", en: "electric", strokes: 13, words: ["電車 (densha) — train","電気 (denki) — electricity"], jlpt: "N5" },
    { ch: "話", on: "ワ", kun: "はな(す)", en: "talk / phone", strokes: 13, words: ["電話 (denwa) — phone","会話 (kaiwa) — conversation"], jlpt: "N5" },
    { ch: "水", on: "スイ", kun: "みず", en: "water", strokes: 4, words: ["水 (mizu) — water","水曜日 (suiyōbi) — Wed"], jlpt: "N5" },
    { ch: "火", on: "カ", kun: "ひ", en: "fire", strokes: 4, words: ["火 (hi) — fire","火曜日 (kayōbi) — Tuesday"], jlpt: "N5" },
    { ch: "金", on: "キン", kun: "かね", en: "gold / money", strokes: 8, words: ["お金 (okane) — money","金曜日 (kinyōbi) — Friday"], jlpt: "N5" },
    { ch: "土", on: "ド", kun: "つち", en: "earth / soil", strokes: 3, words: ["土 (tsuchi) — soil","土曜日 (doyōbi) — Saturday"], jlpt: "N5" },
    { ch: "木", on: "モク", kun: "き", en: "tree / wood", strokes: 4, words: ["木 (ki) — tree","木曜日 (mokuyōbi) — Thursday"], jlpt: "N5" },
    { ch: "好", on: "コウ", kun: "す(き)", en: "like / love", strokes: 6, words: ["好き (suki) — like","大好き (daisuki) — love"], jlpt: "N5" },
    { ch: "会", on: "カイ", kun: "あ(う)", en: "meet / association", strokes: 6, words: ["会議 (kaigi) — meeting","会社 (kaisha) — company"], jlpt: "N5" },
    { ch: "社", on: "シャ", kun: "やしろ", en: "company / shrine", strokes: 7, words: ["会社 (kaisha) — company","社長 (shachō) — president"], jlpt: "N5" },
    { ch: "仕", on: "シ", kun: "つか(える)", en: "serve / job", strokes: 5, words: ["仕事 (shigoto) — work","仕方 (shikata) — way"], jlpt: "N5" },
    { ch: "事", on: "ジ", kun: "こと", en: "thing / matter", strokes: 8, words: ["仕事 (shigoto) — work","大事 (daiji) — important"], jlpt: "N5" },
    { ch: "問", on: "モン", kun: "と(う)", en: "question / problem", strokes: 11, words: ["問題 (mondai) — problem","質問 (shitsumon) — question"], jlpt: "N5" },
    { ch: "題", on: "ダイ", kun: "—", en: "topic / problem", strokes: 18, words: ["問題 (mondai) — problem","宿題 (shukudai) — homework"], jlpt: "N5" },
    { ch: "間", on: "カン", kun: "あいだ", en: "interval / between", strokes: 12, words: ["時間 (jikan) — time","人間 (ningen) — human"], jlpt: "N5" },
    { ch: "気", on: "キ", kun: "—", en: "spirit / feeling", strokes: 6, words: ["元気 (genki) — energetic","天気 (tenki) — weather"], jlpt: "N5" },
    { ch: "元", on: "ゲン", kun: "もと", en: "origin / well", strokes: 4, words: ["元気 (genki) — energetic","元 (moto) — origin"], jlpt: "N5" },
    // ── Phase 4: N5 expansion (numbers, family, directions, weather, time, color) ──
    { ch: "百", on: "ヒャク", kun: "—", en: "hundred (100)", strokes: 6, words: ["百 (hyaku) — 100","百円 (hyaku-en) — 100 yen"], jlpt: "N5" },
    { ch: "千", on: "セン", kun: "ち", en: "thousand (1000)", strokes: 3, words: ["千 (sen) — 1000","千円 (sen-en) — 1000 yen"], jlpt: "N5" },
    { ch: "万", on: "マン・バン", kun: "—", en: "ten thousand (10,000)", strokes: 3, words: ["一万 (ichiman) — 10,000","万年筆 (mannenhitsu) — fountain pen"], jlpt: "N5" },
    { ch: "父", on: "フ", kun: "ちち・とう", en: "father", strokes: 4, words: ["父 (chichi) — father","お父さん (otōsan) — father (polite)"], jlpt: "N5" },
    { ch: "母", on: "ボ", kun: "はは・かあ", en: "mother", strokes: 5, words: ["母 (haha) — mother","お母さん (okāsan) — mother (polite)"], jlpt: "N5" },
    { ch: "兄", on: "ケイ", kun: "あに・にい", en: "older brother", strokes: 5, words: ["兄 (ani) — older brother","お兄さん (oniisan) — older brother (polite)"], jlpt: "N5" },
    { ch: "姉", on: "シ", kun: "あね・ねえ", en: "older sister", strokes: 8, words: ["姉 (ane) — older sister","お姉さん (onēsan) — older sister (polite)"], jlpt: "N5" },
    { ch: "弟", on: "ダイ・テイ", kun: "おとうと", en: "younger brother", strokes: 7, words: ["弟 (otōto) — younger brother"], jlpt: "N5" },
    { ch: "妹", on: "マイ", kun: "いもうと", en: "younger sister", strokes: 8, words: ["妹 (imōto) — younger sister"], jlpt: "N5" },
    { ch: "男", on: "ダン・ナン", kun: "おとこ", en: "man / male", strokes: 7, words: ["男 (otoko) — man","男性 (dansei) — male"], jlpt: "N5" },
    { ch: "女", on: "ジョ", kun: "おんな", en: "woman / female", strokes: 3, words: ["女 (onna) — woman","女性 (josei) — female"], jlpt: "N5" },
    { ch: "子", on: "シ", kun: "こ", en: "child", strokes: 3, words: ["子供 (kodomo) — child","女の子 (onnanoko) — girl"], jlpt: "N5" },
    { ch: "友", on: "ユウ", kun: "とも", en: "friend", strokes: 4, words: ["友達 (tomodachi) — friend"], jlpt: "N5" },
    { ch: "多", on: "タ", kun: "おお(い)", en: "many / much", strokes: 6, words: ["多い (ōi) — many","多分 (tabun) — probably"], jlpt: "N5" },
    { ch: "少", on: "ショウ", kun: "すく(ない)・すこ(し)", en: "few / a little", strokes: 4, words: ["少ない (sukunai) — few","少し (sukoshi) — a little"], jlpt: "N5" },
    { ch: "長", on: "チョウ", kun: "なが(い)", en: "long / chief", strokes: 8, words: ["長い (nagai) — long","社長 (shachō) — president"], jlpt: "N5" },
    { ch: "北", on: "ホク", kun: "きた", en: "north", strokes: 5, words: ["北 (kita) — north","北海道 (hokkaidō) — Hokkaido"], jlpt: "N4" },
    { ch: "南", on: "ナン", kun: "みなみ", en: "south", strokes: 9, words: ["南 (minami) — south"], jlpt: "N4" },
    { ch: "東", on: "トウ", kun: "ひがし", en: "east", strokes: 8, words: ["東 (higashi) — east","東京 (tōkyō) — Tokyo"], jlpt: "N4" },
    { ch: "西", on: "セイ・サイ", kun: "にし", en: "west", strokes: 6, words: ["西 (nishi) — west"], jlpt: "N4" },
    { ch: "天", on: "テン", kun: "あめ・あま", en: "sky / heaven", strokes: 4, words: ["天気 (tenki) — weather","天国 (tengoku) — heaven"], jlpt: "N4" },
    { ch: "雨", on: "ウ", kun: "あめ", en: "rain", strokes: 8, words: ["雨 (ame) — rain"], jlpt: "N4" },
    { ch: "雪", on: "セツ", kun: "ゆき", en: "snow", strokes: 11, words: ["雪 (yuki) — snow"], jlpt: "N4" },
    { ch: "風", on: "フウ", kun: "かぜ", en: "wind", strokes: 9, words: ["風 (kaze) — wind / cold (illness)","台風 (taifū) — typhoon"], jlpt: "N4" },
    { ch: "週", on: "シュウ", kun: "—", en: "week", strokes: 11, words: ["今週 (konshū) — this week","来週 (raishū) — next week"], jlpt: "N4" },
    { ch: "毎", on: "マイ", kun: "—", en: "every", strokes: 6, words: ["毎日 (mainichi) — every day","毎朝 (maiasa) — every morning"], jlpt: "N5" },
    { ch: "半", on: "ハン", kun: "なか(ば)", en: "half", strokes: 5, words: ["半 (han) — half","半分 (hanbun) — half"], jlpt: "N4" },
    { ch: "午", on: "ゴ", kun: "—", en: "noon", strokes: 4, words: ["午前 (gozen) — AM","午後 (gogo) — PM"], jlpt: "N4" },
    { ch: "朝", on: "チョウ", kun: "あさ", en: "morning", strokes: 12, words: ["朝 (asa) — morning","毎朝 (maiasa) — every morning"], jlpt: "N4" },
    { ch: "昼", on: "チュウ", kun: "ひる", en: "noon / daytime", strokes: 9, words: ["昼 (hiru) — noon","昼ご飯 (hirugohan) — lunch"], jlpt: "N4" },
    { ch: "夜", on: "ヤ", kun: "よる", en: "night", strokes: 8, words: ["夜 (yoru) — night","今夜 (konya) — tonight"], jlpt: "N4" },
    { ch: "店", on: "テン", kun: "みせ", en: "shop / store", strokes: 8, words: ["店 (mise) — shop","店員 (ten'in) — clerk"], jlpt: "N4" },
    { ch: "魚", on: "ギョ", kun: "さかな", en: "fish", strokes: 11, words: ["魚 (sakana) — fish","金魚 (kingyo) — goldfish"], jlpt: "N4" },
    { ch: "肉", on: "ニク", kun: "—", en: "meat", strokes: 6, words: ["肉 (niku) — meat","牛肉 (gyūniku) — beef"], jlpt: "N4" },
    { ch: "茶", on: "チャ・サ", kun: "—", en: "tea", strokes: 9, words: ["お茶 (ocha) — tea","茶色 (chairo) — brown"], jlpt: "N4" },
    { ch: "米", on: "ベイ・マイ", kun: "こめ", en: "rice (uncooked) / America", strokes: 6, words: ["米 (kome) — rice","米国 (beikoku) — USA"], jlpt: "N4" },
    { ch: "色", on: "ショク・シキ", kun: "いろ", en: "color", strokes: 6, words: ["色 (iro) — color","黄色 (kiiro) — yellow"], jlpt: "N4" },
    { ch: "白", on: "ハク", kun: "しろ・しろ(い)", en: "white", strokes: 5, words: ["白い (shiroi) — white","白色 (hakushoku) — white color"], jlpt: "N4" },
    { ch: "黒", on: "コク", kun: "くろ・くろ(い)", en: "black", strokes: 11, words: ["黒い (kuroi) — black","黒色 (kokushoku) — black color"], jlpt: "N4" },
    { ch: "赤", on: "セキ", kun: "あか・あか(い)", en: "red", strokes: 7, words: ["赤い (akai) — red","赤色 (akairo) — red color"], jlpt: "N4" },
    { ch: "青", on: "セイ", kun: "あお・あお(い)", en: "blue / green", strokes: 8, words: ["青い (aoi) — blue","青色 (aoiro) — blue color"], jlpt: "N4" }
  ],

  words: [
    // greetings & basics
    { jp: "こんにちは", ro: "konnichiwa", en: "Hello / Good afternoon", tag: "greeting", ex: "こんにちは、シシルです。— Hello, I'm Shishir.", jlpt: "N5" },
    { jp: "おはようございます", ro: "ohayō gozaimasu", en: "Good morning (polite)", tag: "greeting", ex: "Used until ~10am at the office.", jlpt: "N5" },
    { jp: "こんばんは", ro: "konbanwa", en: "Good evening", tag: "greeting", jlpt: "N5" },
    { jp: "ありがとうございます", ro: "arigatō gozaimasu", en: "Thank you (polite)", tag: "greeting", ex: "レビューありがとうございます。— Thanks for the review.", jlpt: "N5" },
    { jp: "すみません", ro: "sumimasen", en: "Excuse me / Sorry", tag: "greeting", ex: "Use to get someone's attention or apologize lightly.", jlpt: "N5" },
    { jp: "お願いします", ro: "onegaishimasu", en: "Please / I request", tag: "greeting", jlpt: "N5" },
    { jp: "はじめまして", ro: "hajimemashite", en: "Nice to meet you", tag: "greeting", jlpt: "N5" },
    { jp: "よろしくお願いします", ro: "yoroshiku onegaishimasu", en: "Please treat me well / nice to work with you", tag: "greeting", ex: "Used after self-intros and at the start of work.", jlpt: "N5" },
    { jp: "さようなら", ro: "sayōnara", en: "Goodbye", tag: "greeting", jlpt: "N5" },
    { jp: "お疲れさまです", ro: "otsukaresama desu", en: "Good work / Thanks for your effort", tag: "workplace", ex: "Standard daily work greeting in Japan.", jlpt: "N5" },

    // pronouns & people
    { jp: "私", ro: "watashi", en: "I / me", tag: "basic", jlpt: "N5" },
    { jp: "僕", ro: "boku", en: "I / me (male, casual)", tag: "basic", ex: "Common at the office among guys.", jlpt: "N5" },
    { jp: "あなた", ro: "anata", en: "You", tag: "basic", ex: "Often dropped — use the person's name + さん instead.", jlpt: "N5" },
    { jp: "彼", ro: "kare", en: "He / boyfriend", tag: "basic", jlpt: "N5" },
    { jp: "彼女", ro: "kanojo", en: "She / girlfriend", tag: "basic", jlpt: "N5" },
    { jp: "私たち", ro: "watashitachi", en: "We / us", tag: "basic", ex: "私たちのチーム — our team.", jlpt: "N5" },
    { jp: "彼ら", ro: "karera", en: "They (men / mixed group)", tag: "basic", jlpt: "N5" },
    { jp: "彼女たち", ro: "kanojotachi", en: "They (women)", tag: "basic", jlpt: "N5" },
    { jp: "皆さん", ro: "minasan", en: "Everyone (polite)", tag: "basic", ex: "皆さん、おはようございます。— Good morning, everyone.", jlpt: "N5" },
    { jp: "自分", ro: "jibun", en: "Oneself / myself", tag: "basic", jlpt: "N5" },
    { jp: "友達", ro: "tomodachi", en: "Friend", tag: "daily", jlpt: "N5" },
    { jp: "家族", ro: "kazoku", en: "Family", tag: "daily", jlpt: "N5" },

    // demonstratives — things (これ・それ・あれ・どれ)
    { jp: "これ", ro: "kore", en: "This (thing near me)", tag: "basic", ex: "これは私のパソコンです。— This is my laptop.", jlpt: "N5" },
    { jp: "それ", ro: "sore", en: "That (thing near you)", tag: "basic", ex: "それを取ってください。— Please pass me that.", jlpt: "N5" },
    { jp: "あれ", ro: "are", en: "That (over there, far from both)", tag: "basic", jlpt: "N5" },
    { jp: "どれ", ro: "dore", en: "Which (one)?", tag: "basic", ex: "どれが好きですか？— Which one do you like?", jlpt: "N5" },
    // demonstratives — modifiers before a noun (この・その・あの・どの)
    { jp: "この", ro: "kono", en: "This [noun]", tag: "basic", ex: "このバグ — this bug.", jlpt: "N5" },
    { jp: "その", ro: "sono", en: "That [noun] (near you)", tag: "basic", ex: "そのファイル — that file.", jlpt: "N5" },
    { jp: "あの", ro: "ano", en: "That [noun] over there", tag: "basic", jlpt: "N5" },
    { jp: "どの", ro: "dono", en: "Which [noun]?", tag: "basic", ex: "どのサーバーですか？— Which server?", jlpt: "N5" },
    // demonstratives — places (ここ・そこ・あそこ・どこ)
    { jp: "ここ", ro: "koko", en: "Here", tag: "basic", ex: "ここで待ってください。— Please wait here.", jlpt: "N5" },
    { jp: "そこ", ro: "soko", en: "There (near you)", tag: "basic", jlpt: "N5" },
    { jp: "あそこ", ro: "asoko", en: "Over there", tag: "basic", jlpt: "N5" },
    { jp: "どこ", ro: "doko", en: "Where?", tag: "basic", ex: "駅はどこですか？— Where is the station?", jlpt: "N5" },
    // demonstratives — direction / formal (こちら・そちら・あちら・どちら)
    { jp: "こちら", ro: "kochira", en: "This way / this person (polite)", tag: "basic", ex: "こちらはシシルさんです。— This is Shishir.", jlpt: "N5" },
    { jp: "そちら", ro: "sochira", en: "That way / your side", tag: "basic", jlpt: "N5" },
    { jp: "あちら", ro: "achira", en: "Over there (polite)", tag: "basic", jlpt: "N5" },
    { jp: "どちら", ro: "dochira", en: "Which / where (polite)", tag: "basic", ex: "お国はどちらですか？— Where are you from?", jlpt: "N5" },

    // question words
    { jp: "何", ro: "nani / nan", en: "What?", tag: "basic", ex: "これは何ですか？— What is this? (read 'nan' before です/で/と)", jlpt: "N5" },
    { jp: "いつ", ro: "itsu", en: "When?", tag: "basic", ex: "会議はいつですか？— When is the meeting?", jlpt: "N5" },
    { jp: "誰", ro: "dare", en: "Who?", tag: "basic", ex: "あの人は誰ですか？— Who is that person?", jlpt: "N5" },
    { jp: "なぜ", ro: "naze", en: "Why? (formal/written)", tag: "basic", jlpt: "N5" },
    { jp: "どうして", ro: "dōshite", en: "Why? (conversational)", tag: "basic", ex: "どうしてですか？— Why is that?", jlpt: "N5" },
    { jp: "どう", ro: "dō", en: "How? / What about?", tag: "basic", ex: "コーヒーはどうですか？— How about coffee?", jlpt: "N5" },
    { jp: "どうやって", ro: "dō yatte", en: "How (in what way)?", tag: "basic", ex: "どうやって直しましたか？— How did you fix it?", jlpt: "N5" },
    { jp: "いくら", ro: "ikura", en: "How much (price)?", tag: "basic", ex: "これはいくらですか？— How much is this?", jlpt: "N5" },
    { jp: "いくつ", ro: "ikutsu", en: "How many / how old?", tag: "basic", jlpt: "N5" },
    { jp: "何時", ro: "nanji", en: "What time?", tag: "basic", ex: "今、何時ですか？— What time is it now?", jlpt: "N5" },

    // yes / no / agreement
    { jp: "はい", ro: "hai", en: "Yes", tag: "basic", jlpt: "N5" },
    { jp: "いいえ", ro: "iie", en: "No", tag: "basic", jlpt: "N5" },
    { jp: "そうです", ro: "sō desu", en: "That's right / yes (it is)", tag: "basic", jlpt: "N5" },
    { jp: "違います", ro: "chigaimasu", en: "That's not right / different", tag: "basic", ex: "Soft 'no' — politer than いいえ.", jlpt: "N5" },
    { jp: "わかりました", ro: "wakarimashita", en: "Understood / got it", tag: "basic", jlpt: "N5" },
    { jp: "わかりません", ro: "wakarimasen", en: "I don't understand", tag: "basic", jlpt: "N5" },

    // numbers / time
    { jp: "今日", ro: "kyō", en: "Today", tag: "time", jlpt: "N5" },
    { jp: "明日", ro: "ashita", en: "Tomorrow", tag: "time", jlpt: "N5" },
    { jp: "昨日", ro: "kinō", en: "Yesterday", tag: "time", jlpt: "N5" },
    { jp: "今", ro: "ima", en: "Now", tag: "time", jlpt: "N5" },
    { jp: "後で", ro: "ato de", en: "Later", tag: "time", jlpt: "N5" },

    // daily
    { jp: "水", ro: "mizu", en: "Water", tag: "daily", jlpt: "N5" },
    { jp: "ご飯", ro: "gohan", en: "Rice / meal", tag: "daily", jlpt: "N5" },
    { jp: "お茶", ro: "ocha", en: "Tea", tag: "daily", jlpt: "N5" },
    { jp: "コーヒー", ro: "kōhī", en: "Coffee", tag: "daily", jlpt: "N5" },
    { jp: "駅", ro: "eki", en: "Station", tag: "daily", jlpt: "N5" },
    { jp: "電車", ro: "densha", en: "Train", tag: "daily", jlpt: "N5" },
    { jp: "家", ro: "ie / uchi", en: "Home / house", tag: "daily", jlpt: "N5" },
    { jp: "学校", ro: "gakkō", en: "School", tag: "daily", jlpt: "N5" },

    // work / IT
    { jp: "会社", ro: "kaisha", en: "Company", tag: "workplace", jlpt: "N4" },
    { jp: "仕事", ro: "shigoto", en: "Work / job", tag: "workplace", jlpt: "N4" },
    { jp: "会議", ro: "kaigi", en: "Meeting", tag: "workplace", ex: "今、会議中です。— I'm in a meeting now.", jlpt: "N4" },
    { jp: "上司", ro: "jōshi", en: "Boss / superior", tag: "workplace", jlpt: "N4" },
    { jp: "同僚", ro: "dōryō", en: "Colleague", tag: "workplace", jlpt: "N4" },
    { jp: "コンピュータ", ro: "konpyūta", en: "Computer", tag: "IT", jlpt: "N4" },
    { jp: "パソコン", ro: "pasokon", en: "PC / laptop (everyday)", tag: "IT", jlpt: "N4" },
    { jp: "プログラム", ro: "puroguramu", en: "Program", tag: "IT", jlpt: "N4" },
    { jp: "コード", ro: "kōdo", en: "Code", tag: "IT", ex: "コードレビューをお願いします。— Please review my code.", jlpt: "N4" },
    { jp: "バグ", ro: "bagu", en: "Bug", tag: "IT", ex: "バグを直しました。— I fixed the bug.", jlpt: "N4" },
    { jp: "テスト", ro: "tesuto", en: "Test", tag: "IT", jlpt: "N4" },
    { jp: "レビュー", ro: "rebyū", en: "Review", tag: "IT", jlpt: "N4" },
    { jp: "ミーティング", ro: "mītingu", en: "Meeting (loanword)", tag: "IT", jlpt: "N4" },
    { jp: "メール", ro: "mēru", en: "Email", tag: "IT", jlpt: "N4" },
    { jp: "ファイル", ro: "fairu", en: "File", tag: "IT", jlpt: "N4" },
    { jp: "サーバー", ro: "sābā", en: "Server", tag: "IT", jlpt: "N4" },
    { jp: "データ", ro: "dēta", en: "Data", tag: "IT", jlpt: "N4" },
    { jp: "問題", ro: "mondai", en: "Problem / issue", tag: "workplace", ex: "問題があります。— There's a problem.", jlpt: "N4" },
    { jp: "質問", ro: "shitsumon", en: "Question", tag: "workplace", jlpt: "N4" },
    { jp: "答え", ro: "kotae", en: "Answer", tag: "basic", jlpt: "N4" },

    // useful verbs (dictionary form)
    { jp: "食べる", ro: "taberu", en: "to eat", tag: "verb", jlpt: "N5" },
    { jp: "飲む", ro: "nomu", en: "to drink", tag: "verb", jlpt: "N5" },
    { jp: "見る", ro: "miru", en: "to see / watch", tag: "verb", jlpt: "N5" },
    { jp: "行く", ro: "iku", en: "to go", tag: "verb", jlpt: "N5" },
    { jp: "来る", ro: "kuru", en: "to come", tag: "verb", jlpt: "N5" },
    { jp: "する", ro: "suru", en: "to do", tag: "verb", jlpt: "N5" },
    { jp: "書く", ro: "kaku", en: "to write", tag: "verb", jlpt: "N5" },
    { jp: "読む", ro: "yomu", en: "to read", tag: "verb", jlpt: "N5" },
    { jp: "話す", ro: "hanasu", en: "to speak", tag: "verb", jlpt: "N5" },
    { jp: "聞く", ro: "kiku", en: "to listen / ask", tag: "verb", jlpt: "N5" },
    { jp: "ある", ro: "aru", en: "to exist (things)", tag: "verb", ex: "Used for objects, plants, abstract things.", jlpt: "N5" },
    { jp: "いる", ro: "iru", en: "to exist (people/animals)", tag: "verb", jlpt: "N5" },
    { jp: "なる", ro: "naru", en: "to become", tag: "verb", jlpt: "N5" },
    { jp: "分かる", ro: "wakaru", en: "to understand", tag: "verb", jlpt: "N5" },
    { jp: "働く", ro: "hataraku", en: "to work", tag: "verb", jlpt: "N5" },
    { jp: "直す", ro: "naosu", en: "to fix / repair", tag: "verb", ex: "バグを直します。— I fix the bug.", jlpt: "N4" },
    { jp: "送る", ro: "okuru", en: "to send", tag: "verb", ex: "メールを送ります。— I send an email.", jlpt: "N4" },
    { jp: "勉強する", ro: "benkyō suru", en: "to study", tag: "verb", ex: "日本語を勉強しています。— I'm studying Japanese.", jlpt: "N4" },

    // numbers 1–10
    { jp: "一", ro: "ichi", en: "one (1)", tag: "number", jlpt: "N5" },
    { jp: "二", ro: "ni", en: "two (2)", tag: "number", jlpt: "N5" },
    { jp: "三", ro: "san", en: "three (3)", tag: "number", jlpt: "N5" },
    { jp: "四", ro: "yon / shi", en: "four (4)", tag: "number", ex: "yon is safer — shi sounds like 'death'.", jlpt: "N5" },
    { jp: "五", ro: "go", en: "five (5)", tag: "number", jlpt: "N5" },
    { jp: "六", ro: "roku", en: "six (6)", tag: "number", jlpt: "N5" },
    { jp: "七", ro: "nana / shichi", en: "seven (7)", tag: "number", jlpt: "N5" },
    { jp: "八", ro: "hachi", en: "eight (8)", tag: "number", jlpt: "N5" },
    { jp: "九", ro: "kyū / ku", en: "nine (9)", tag: "number", jlpt: "N5" },
    { jp: "十", ro: "jū", en: "ten (10)", tag: "number", jlpt: "N5" },
    { jp: "百", ro: "hyaku", en: "hundred (100)", tag: "number", jlpt: "N5" },
    { jp: "千", ro: "sen", en: "thousand (1000)", tag: "number", jlpt: "N5" },
    { jp: "万", ro: "man", en: "ten-thousand (10,000)", tag: "number", jlpt: "N5" },
    { jp: "円", ro: "en", en: "yen (¥)", tag: "number", jlpt: "N5" },

    // days of the week
    { jp: "月曜日", ro: "getsuyōbi", en: "Monday", tag: "time", jlpt: "N5" },
    { jp: "火曜日", ro: "kayōbi", en: "Tuesday", tag: "time", jlpt: "N5" },
    { jp: "水曜日", ro: "suiyōbi", en: "Wednesday", tag: "time", jlpt: "N5" },
    { jp: "木曜日", ro: "mokuyōbi", en: "Thursday", tag: "time", jlpt: "N5" },
    { jp: "金曜日", ro: "kinyōbi", en: "Friday", tag: "time", jlpt: "N5" },
    { jp: "土曜日", ro: "doyōbi", en: "Saturday", tag: "time", jlpt: "N5" },
    { jp: "日曜日", ro: "nichiyōbi", en: "Sunday", tag: "time", jlpt: "N5" },

    // basic adjectives
    { jp: "いい", ro: "ii", en: "good", tag: "adjective", jlpt: "N5" },
    { jp: "悪い", ro: "warui", en: "bad", tag: "adjective", jlpt: "N5" },
    { jp: "大きい", ro: "ōkii", en: "big", tag: "adjective", jlpt: "N5" },
    { jp: "小さい", ro: "chiisai", en: "small", tag: "adjective", jlpt: "N5" },
    { jp: "新しい", ro: "atarashii", en: "new", tag: "adjective", jlpt: "N4" },
    { jp: "古い", ro: "furui", en: "old (things, not people)", tag: "adjective", jlpt: "N4" },
    { jp: "難しい", ro: "muzukashii", en: "difficult", tag: "adjective", ex: "このバグは難しい。— This bug is hard.", jlpt: "N4" },
    { jp: "簡単", ro: "kantan", en: "easy / simple", tag: "adjective", jlpt: "N4" },
    { jp: "速い", ro: "hayai", en: "fast", tag: "adjective", jlpt: "N4" },
    { jp: "遅い", ro: "osoi", en: "slow / late", tag: "adjective", jlpt: "N4" },
    { jp: "忙しい", ro: "isogashii", en: "busy", tag: "adjective", jlpt: "N4" },
    { jp: "楽しい", ro: "tanoshii", en: "fun / enjoyable", tag: "adjective", jlpt: "N4" },
    { jp: "元気", ro: "genki", en: "energetic / well", tag: "adjective", ex: "お元気ですか？— How are you?", jlpt: "N4" },

    // a few key role nouns referenced by chapters
    { jp: "学生", ro: "gakusei", en: "student", tag: "basic", jlpt: "N5" },
    { jp: "先生", ro: "sensei", en: "teacher", tag: "basic", jlpt: "N5" },
    { jp: "エンジニア", ro: "enjinia", en: "engineer", tag: "IT", jlpt: "N5" },
    { jp: "プログラマー", ro: "puroguramā", en: "programmer", tag: "IT", jlpt: "N5" },
    { jp: "本", ro: "hon", en: "book", tag: "basic", jlpt: "N5" },
    { jp: "名前", ro: "namae", en: "name", tag: "basic", ex: "名前は何ですか？— What is your name?", jlpt: "N5" },
    { jp: "日本語", ro: "nihongo", en: "Japanese language", tag: "basic", jlpt: "N5" }
,
    // ── Expansion: counters, time, food, body, transport, more verbs/adj/IT ──
    { jp: "一つ", ro: "hitotsu", en: "one (general)", tag: "counter", jlpt: "N5" },
    { jp: "二つ", ro: "futatsu", en: "two (general)", tag: "counter", jlpt: "N5" },
    { jp: "三つ", ro: "mittsu", en: "three (general)", tag: "counter", jlpt: "N5" },
    { jp: "四つ", ro: "yottsu", en: "four (general)", tag: "counter", jlpt: "N5" },
    { jp: "五つ", ro: "itsutsu", en: "five (general)", tag: "counter", jlpt: "N5" },
    { jp: "一人", ro: "hitori", en: "one person (also: alone)", tag: "counter", jlpt: "N5" },
    { jp: "二人", ro: "futari", en: "two people", tag: "counter", jlpt: "N5" },
    { jp: "三人", ro: "sannin", en: "three people", tag: "counter", jlpt: "N5" },
    { jp: "一枚", ro: "ichimai", en: "one (flat thing)", tag: "counter", jlpt: "N5" },
    { jp: "一本", ro: "ippon", en: "one (long thin thing)", tag: "counter", jlpt: "N5" },
    { jp: "一個", ro: "ikko", en: "one (small/round)", tag: "counter", jlpt: "N5" },
    { jp: "一杯", ro: "ippai", en: "one cup / one full", tag: "counter", jlpt: "N5" },
    { jp: "一回", ro: "ikkai", en: "one time", tag: "counter", jlpt: "N5" },
    { jp: "一時", ro: "ichiji", en: "1 o'clock", tag: "time", jlpt: "N5" },
    { jp: "二時", ro: "niji", en: "2 o'clock", tag: "time", jlpt: "N5" },
    { jp: "三時", ro: "sanji", en: "3 o'clock", tag: "time", jlpt: "N5" },
    { jp: "半", ro: "han", en: "half (~thirty as in 2:30 = 二時半)", tag: "time", jlpt: "N4" },
    { jp: "午前", ro: "gozen", en: "AM / morning", tag: "time", jlpt: "N4" },
    { jp: "午後", ro: "gogo", en: "PM / afternoon", tag: "time", jlpt: "N4" },
    { jp: "朝", ro: "asa", en: "morning", tag: "time", jlpt: "N4" },
    { jp: "昼", ro: "hiru", en: "noon / daytime", tag: "time", jlpt: "N4" },
    { jp: "夕方", ro: "yūgata", en: "evening", tag: "time", jlpt: "N4" },
    { jp: "夜", ro: "yoru", en: "night", tag: "time", jlpt: "N4" },
    { jp: "今週", ro: "konshū", en: "this week", tag: "time", jlpt: "N4" },
    { jp: "来週", ro: "raishū", en: "next week", tag: "time", jlpt: "N4" },
    { jp: "先週", ro: "senshū", en: "last week", tag: "time", jlpt: "N4" },
    { jp: "毎日", ro: "mainichi", en: "every day", tag: "time", jlpt: "N4" },
    { jp: "毎朝", ro: "maiasa", en: "every morning", tag: "time", jlpt: "N4" },
    { jp: "今朝", ro: "kesa", en: "this morning", tag: "time", jlpt: "N4" },
    { jp: "買う", ro: "kau", en: "to buy", tag: "verb", jlpt: "N5" },
    { jp: "売る", ro: "uru", en: "to sell", tag: "verb", jlpt: "N5" },
    { jp: "持つ", ro: "motsu", en: "to hold / have", tag: "verb", jlpt: "N5" },
    { jp: "使う", ro: "tsukau", en: "to use", tag: "verb", jlpt: "N5" },
    { jp: "起きる", ro: "okiru", en: "to wake up", tag: "verb", jlpt: "N4" },
    { jp: "寝る", ro: "neru", en: "to sleep", tag: "verb", jlpt: "N4" },
    { jp: "入る", ro: "hairu", en: "to enter", tag: "verb", jlpt: "N4" },
    { jp: "出る", ro: "deru", en: "to exit / leave", tag: "verb", jlpt: "N4" },
    { jp: "会う", ro: "au", en: "to meet", tag: "verb", ex: "友達に会います。— I meet a friend.", jlpt: "N4" },
    { jp: "待つ", ro: "matsu", en: "to wait", tag: "verb", jlpt: "N4" },
    { jp: "歩く", ro: "aruku", en: "to walk", tag: "verb", jlpt: "N4" },
    { jp: "走る", ro: "hashiru", en: "to run", tag: "verb", jlpt: "N4" },
    { jp: "帰る", ro: "kaeru", en: "to return (home)", tag: "verb", jlpt: "N4" },
    { jp: "始める", ro: "hajimeru", en: "to start", tag: "verb", jlpt: "N4" },
    { jp: "終わる", ro: "owaru", en: "to end", tag: "verb", jlpt: "N4" },
    { jp: "デプロイする", ro: "depuroi suru", en: "to deploy", tag: "IT", jlpt: "N5" },
    { jp: "コミットする", ro: "komitto suru", en: "to commit (git)", tag: "IT", jlpt: "N5" },
    { jp: "暑い", ro: "atsui", en: "hot (weather)", tag: "adjective", jlpt: "N4" },
    { jp: "寒い", ro: "samui", en: "cold (weather)", tag: "adjective", jlpt: "N4" },
    { jp: "暖かい", ro: "atatakai", en: "warm", tag: "adjective", jlpt: "N4" },
    { jp: "涼しい", ro: "suzushii", en: "cool / refreshing", tag: "adjective", jlpt: "N4" },
    { jp: "高い", ro: "takai", en: "expensive / tall / high", tag: "adjective", jlpt: "N5" },
    { jp: "安い", ro: "yasui", en: "cheap", tag: "adjective", jlpt: "N5" },
    { jp: "長い", ro: "nagai", en: "long", tag: "adjective", jlpt: "N5" },
    { jp: "短い", ro: "mijikai", en: "short", tag: "adjective", jlpt: "N5" },
    { jp: "美味しい", ro: "oishii", en: "tasty", tag: "adjective", jlpt: "N4" },
    { jp: "綺麗", ro: "kirei", en: "pretty / clean (na-adj)", tag: "adjective", jlpt: "N4" },
    { jp: "静か", ro: "shizuka", en: "quiet (na-adj)", tag: "adjective", jlpt: "N4" },
    { jp: "親切", ro: "shinsetsu", en: "kind (na-adj)", tag: "adjective", jlpt: "N4" },
    { jp: "便利", ro: "benri", en: "convenient (na-adj)", tag: "adjective", jlpt: "N4" },
    { jp: "好き", ro: "suki", en: "liked / favorite (na-adj)", tag: "adjective", jlpt: "N4" },
    { jp: "大丈夫", ro: "daijōbu", en: "fine / okay (na-adj)", tag: "adjective", jlpt: "N5" },
    { jp: "正しい", ro: "tadashii", en: "correct", tag: "adjective", jlpt: "N4" },
    { jp: "寿司", ro: "sushi", en: "sushi", tag: "food", jlpt: "N5" },
    { jp: "ラーメン", ro: "rāmen", en: "ramen", tag: "food", jlpt: "N5" },
    { jp: "パン", ro: "pan", en: "bread", tag: "food", jlpt: "N5" },
    { jp: "卵", ro: "tamago", en: "egg", tag: "food", jlpt: "N5" },
    { jp: "魚", ro: "sakana", en: "fish", tag: "food", jlpt: "N5" },
    { jp: "肉", ro: "niku", en: "meat", tag: "food", jlpt: "N5" },
    { jp: "野菜", ro: "yasai", en: "vegetable", tag: "food", jlpt: "N5" },
    { jp: "果物", ro: "kudamono", en: "fruit", tag: "food", jlpt: "N5" },
    { jp: "りんご", ro: "ringo", en: "apple", tag: "food", jlpt: "N5" },
    { jp: "牛乳", ro: "gyūnyū", en: "milk", tag: "food", jlpt: "N5" },
    { jp: "頭", ro: "atama", en: "head", tag: "body", jlpt: "N5" },
    { jp: "目", ro: "me", en: "eye", tag: "body", jlpt: "N5" },
    { jp: "口", ro: "kuchi", en: "mouth", tag: "body", jlpt: "N5" },
    { jp: "耳", ro: "mimi", en: "ear", tag: "body", jlpt: "N5" },
    { jp: "手", ro: "te", en: "hand", tag: "body", jlpt: "N5" },
    { jp: "足", ro: "ashi", en: "leg / foot", tag: "body", jlpt: "N5" },
    { jp: "車", ro: "kuruma", en: "car", tag: "daily", jlpt: "N5" },
    { jp: "バス", ro: "basu", en: "bus", tag: "daily", jlpt: "N5" },
    { jp: "タクシー", ro: "takushī", en: "taxi", tag: "daily", jlpt: "N5" },
    { jp: "自転車", ro: "jitensha", en: "bicycle", tag: "daily", jlpt: "N5" },
    { jp: "部長", ro: "buchō", en: "department head", tag: "workplace", jlpt: "N4" },
    { jp: "課長", ro: "kachō", en: "section chief", tag: "workplace", jlpt: "N4" },
    { jp: "社長", ro: "shachō", en: "company president", tag: "workplace", jlpt: "N4" },
    { jp: "出張", ro: "shutchō", en: "business trip", tag: "workplace", jlpt: "N4" },
    { jp: "残業", ro: "zangyō", en: "overtime work", tag: "workplace", jlpt: "N4" },
    { jp: "休み", ro: "yasumi", en: "day off / vacation", tag: "workplace", jlpt: "N5" },
    { jp: "クラウド", ro: "kuraudo", en: "cloud", tag: "IT", jlpt: "N4" },
    { jp: "データベース", ro: "dētabēsu", en: "database", tag: "IT", jlpt: "N4" },
    { jp: "セキュリティ", ro: "sekyuriti", en: "security", tag: "IT", jlpt: "N4" },
    { jp: "デプロイ", ro: "depuroi", en: "deploy / deployment", tag: "IT", jlpt: "N4" },
    { jp: "プルリク", ro: "pururiku", en: "pull request (PR)", tag: "IT", jlpt: "N4" },
    { jp: "リポジトリ", ro: "ripojitori", en: "repository (repo)", tag: "IT", jlpt: "N4" },
    { jp: "本番", ro: "honban", en: "production (env)", tag: "IT", jlpt: "N4" },
    // ── Phase 3: colors, family, weather, conjunctions, adverbs, directions, body, daily ──
    { jp: "赤", ro: "aka", en: "red", tag: "color", jlpt: "N5" },
    { jp: "青", ro: "ao", en: "blue", tag: "color", jlpt: "N5" },
    { jp: "白", ro: "shiro", en: "white", tag: "color", jlpt: "N5" },
    { jp: "黒", ro: "kuro", en: "black", tag: "color", jlpt: "N5" },
    { jp: "緑", ro: "midori", en: "green", tag: "color", jlpt: "N5" },
    { jp: "黄色", ro: "kiiro", en: "yellow", tag: "color", jlpt: "N5" },
    { jp: "茶色", ro: "chairo", en: "brown", tag: "color", jlpt: "N5" },
    { jp: "紫", ro: "murasaki", en: "purple", tag: "color", jlpt: "N5" },
    { jp: "ピンク", ro: "pinku", en: "pink", tag: "color", jlpt: "N5" },
    { jp: "父", ro: "chichi", en: "father (own)", tag: "family", jlpt: "N5" },
    { jp: "母", ro: "haha", en: "mother (own)", tag: "family", jlpt: "N5" },
    { jp: "お父さん", ro: "otōsan", en: "father (someone else's, polite)", tag: "family", jlpt: "N5" },
    { jp: "お母さん", ro: "okāsan", en: "mother (someone else's, polite)", tag: "family", jlpt: "N5" },
    { jp: "兄", ro: "ani", en: "older brother (own)", tag: "family", jlpt: "N5" },
    { jp: "姉", ro: "ane", en: "older sister (own)", tag: "family", jlpt: "N5" },
    { jp: "弟", ro: "otōto", en: "younger brother", tag: "family", jlpt: "N5" },
    { jp: "妹", ro: "imōto", en: "younger sister", tag: "family", jlpt: "N5" },
    { jp: "夫", ro: "otto", en: "husband (own)", tag: "family", jlpt: "N5" },
    { jp: "妻", ro: "tsuma", en: "wife (own)", tag: "family", jlpt: "N5" },
    { jp: "子供", ro: "kodomo", en: "child", tag: "family", jlpt: "N5" },
    { jp: "天気", ro: "tenki", en: "weather", tag: "weather", jlpt: "N5" },
    { jp: "晴れ", ro: "hare", en: "clear / sunny", tag: "weather", jlpt: "N5" },
    { jp: "曇り", ro: "kumori", en: "cloudy", tag: "weather", jlpt: "N5" },
    { jp: "雨", ro: "ame", en: "rain", tag: "weather", jlpt: "N5" },
    { jp: "雪", ro: "yuki", en: "snow", tag: "weather", jlpt: "N5" },
    { jp: "風", ro: "kaze", en: "wind", tag: "weather", jlpt: "N5" },
    { jp: "そして", ro: "soshite", en: "and then / and", tag: "conjunction", jlpt: "N5" },
    { jp: "でも", ro: "demo", en: "but / however", tag: "conjunction", jlpt: "N5" },
    { jp: "だから", ro: "dakara", en: "so / therefore", tag: "conjunction", jlpt: "N5" },
    { jp: "それから", ro: "sorekara", en: "after that / and then", tag: "conjunction", jlpt: "N5" },
    { jp: "しかし", ro: "shikashi", en: "however (formal)", tag: "conjunction", jlpt: "N5" },
    { jp: "よく", ro: "yoku", en: "often / well", tag: "adverb", jlpt: "N5" },
    { jp: "時々", ro: "tokidoki", en: "sometimes", tag: "adverb", jlpt: "N5" },
    { jp: "あまり", ro: "amari", en: "(not) much (with negative)", tag: "adverb", jlpt: "N5" },
    { jp: "ぜんぜん", ro: "zenzen", en: "not at all (with negative)", tag: "adverb", jlpt: "N5" },
    { jp: "もっと", ro: "motto", en: "more", tag: "adverb", jlpt: "N5" },
    { jp: "やっぱり", ro: "yappari", en: "as expected / after all", tag: "adverb", jlpt: "N5" },
    { jp: "きっと", ro: "kitto", en: "surely / certainly", tag: "adverb", jlpt: "N5" },
    { jp: "多分", ro: "tabun", en: "probably / maybe", tag: "adverb", jlpt: "N5" },
    { jp: "全部", ro: "zenbu", en: "all / everything", tag: "adverb", jlpt: "N5" },
    { jp: "北", ro: "kita", en: "north", tag: "direction", jlpt: "N4" },
    { jp: "南", ro: "minami", en: "south", tag: "direction", jlpt: "N4" },
    { jp: "東", ro: "higashi", en: "east", tag: "direction", jlpt: "N4" },
    { jp: "西", ro: "nishi", en: "west", tag: "direction", jlpt: "N4" },
    { jp: "遠く", ro: "tōku", en: "far away", tag: "direction", jlpt: "N5" },
    { jp: "覚える", ro: "oboeru", en: "to memorize / remember", tag: "verb", jlpt: "N4" },
    { jp: "忘れる", ro: "wasureru", en: "to forget", tag: "verb", jlpt: "N4" },
    { jp: "教える", ro: "oshieru", en: "to teach", tag: "verb", jlpt: "N4" },
    { jp: "習う", ro: "narau", en: "to learn (from someone)", tag: "verb", jlpt: "N4" },
    { jp: "思う", ro: "omou", en: "to think", tag: "verb", jlpt: "N4" },
    { jp: "言う", ro: "iu", en: "to say", tag: "verb", jlpt: "N4" },
    { jp: "知る", ro: "shiru", en: "to know", tag: "verb", jlpt: "N4" },
    { jp: "切る", ro: "kiru", en: "to cut", tag: "verb", jlpt: "N5" },
    { jp: "開ける", ro: "akeru", en: "to open", tag: "verb", jlpt: "N5" },
    { jp: "閉める", ro: "shimeru", en: "to close", tag: "verb", jlpt: "N5" },
    { jp: "始まる", ro: "hajimaru", en: "to begin (something starts)", tag: "verb", jlpt: "N4" },
    { jp: "わかる", ro: "wakaru", en: "to understand", tag: "verb", jlpt: "N4" },
    { jp: "できる", ro: "dekiru", en: "to be able to do", tag: "verb", jlpt: "N4" },
    { jp: "もらう", ro: "morau", en: "to receive", tag: "verb", jlpt: "N4" },
    { jp: "あげる", ro: "ageru", en: "to give (to others)", tag: "verb", jlpt: "N4" },
    { jp: "くれる", ro: "kureru", en: "to give (to me / in-group)", tag: "verb", jlpt: "N4" },
    { jp: "鼻", ro: "hana", en: "nose", tag: "body", jlpt: "N5" },
    { jp: "髪", ro: "kami", en: "hair", tag: "body", jlpt: "N5" },
    { jp: "顔", ro: "kao", en: "face", tag: "body", jlpt: "N5" },
    { jp: "切符", ro: "kippu", en: "ticket", tag: "daily", jlpt: "N4" },
    { jp: "ホテル", ro: "hoteru", en: "hotel", tag: "daily", jlpt: "N4" },
    { jp: "病院", ro: "byōin", en: "hospital", tag: "daily", jlpt: "N4" },
    { jp: "薬", ro: "kusuri", en: "medicine", tag: "daily", jlpt: "N4" },
    { jp: "新幹線", ro: "shinkansen", en: "bullet train", tag: "daily", jlpt: "N4" },
    { jp: "空港", ro: "kūkō", en: "airport", tag: "daily", jlpt: "N4" }
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
    { jp: "このファイルを送ってください。", ro: "kono fairu o okutte kudasai.", en: "Please send this file.", scene: "IT" },
    // ── Phase 3: weather, hobbies, family, medical, permission, comparison, colors, daily ──
    { jp: "今日はいい天気ですね。", ro: "kyō wa ii tenki desu ne.", en: "Nice weather today, isn't it?", scene: "casual" },
    { jp: "明日は雨が降るそうです。", ro: "ashita wa ame ga furu sō desu.", en: "I heard it'll rain tomorrow.", scene: "casual" },
    { jp: "とても暑いですね。", ro: "totemo atsui desu ne.", en: "It's very hot, isn't it?", scene: "casual" },
    { jp: "少し早く帰ってもいいですか？", ro: "sukoshi hayaku kaette mo ii desu ka?", en: "May I leave a little early?", scene: "workplace" },
    { jp: "残業になりそうです。", ro: "zangyō ni narisō desu.", en: "Looks like overtime today.", scene: "workplace" },
    { jp: "出張に行きます。", ro: "shutchō ni ikimasu.", en: "I'll be on a business trip.", scene: "workplace" },
    { jp: "片道でお願いします。", ro: "katamichi de onegaishimasu.", en: "One-way please.", scene: "travel" },
    { jp: "往復切符をください。", ro: "ōfuku kippu o kudasai.", en: "A round-trip ticket please.", scene: "travel" },
    { jp: "新幹線で行きます。", ro: "shinkansen de ikimasu.", en: "I'll go by bullet train.", scene: "travel" },
    { jp: "メニューをください。", ro: "menyū o kudasai.", en: "Menu please.", scene: "shopping" },
    { jp: "美味しかったです。", ro: "oishikatta desu.", en: "It was delicious.", scene: "shopping" },
    { jp: "趣味は何ですか？", ro: "shumi wa nan desu ka?", en: "What's your hobby?", scene: "casual" },
    { jp: "写真を撮るのが好きです。", ro: "shashin o toru no ga suki desu.", en: "I like taking photos.", scene: "casual" },
    { jp: "音楽を聞くのが好きです。", ro: "ongaku o kiku no ga suki desu.", en: "I like listening to music.", scene: "casual" },
    { jp: "また今度。", ro: "mata kondo.", en: "Next time. (graceful close)", scene: "casual" },
    { jp: "家族は四人います。", ro: "kazoku wa yonin imasu.", en: "There are four people in my family.", scene: "intro" },
    { jp: "兄が一人います。", ro: "ani ga hitori imasu.", en: "I have one older brother.", scene: "intro" },
    { jp: "お大事に。", ro: "o-daiji ni.", en: "Take care. (when sick)", scene: "medical" },
    { jp: "風邪を引きました。", ro: "kaze o hikimashita.", en: "I caught a cold.", scene: "medical" },
    { jp: "ここに座ってもいいですか？", ro: "koko ni suwatte mo ii desu ka?", en: "May I sit here?", scene: "casual" },
    { jp: "明日は休みだそうです。", ro: "ashita wa yasumi da sō desu.", en: "I heard tomorrow is a day off.", scene: "workplace" },
    { jp: "来年、結婚するつもりです。", ro: "rainen, kekkon suru tsumori desu.", en: "I plan to get married next year.", scene: "intro" },
    { jp: "コーヒーよりお茶のほうが好きです。", ro: "kōhī yori ocha no hō ga suki desu.", en: "I prefer tea to coffee.", scene: "casual" },
    { jp: "赤い車が好きです。", ro: "akai kuruma ga suki desu.", en: "I like red cars.", scene: "casual" },
    { jp: "青いシャツをください。", ro: "aoi shatsu o kudasai.", en: "A blue shirt please.", scene: "shopping" },
    { jp: "ありがとうございました。", ro: "arigatō gozaimashita.", en: "Thank you very much (past).", scene: "greeting" },
    { jp: "頑張ってください。", ro: "ganbatte kudasai.", en: "Please do your best / good luck.", scene: "casual" },
    { jp: "また明日会いましょう。", ro: "mata ashita aimashō.", en: "Let's meet again tomorrow.", scene: "greeting" },
    { jp: "気をつけて。", ro: "ki o tsukete.", en: "Take care / be careful.", scene: "casual" }
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
    // ──────────────────────────────────────────────────────────────────
    // PHASE 1 — Kana foundations (Days 1-8)
    // 8 days, 92 kana characters total. Each day adds rows + a survival
    // grammar bit so you can speak immediately, but the focus is reading.
    // ──────────────────────────────────────────────────────────────────
    {
      day: 1, week: 1, minutes: 25,
      title: "Vowels + first hello",
      goal: "Learn the 5 vowels あいうえお and say hello / thank you / sorry.",
      kana: { hira: ["あ","い","う","え","お"] },
      words: ["こんにちは","ありがとうございます","すみません","はい","いいえ"],
      grammar: ["🧠 です-family vs ます-family — the two sentence types"],
      sentences: ["おはようございます！","また明日。","おやすみなさい。"],
      practice: "Hover each vowel 3× until you can sing them in a row. Greet 3 imaginary people: morning, afternoon, evening."
    },
    {
      day: 2, week: 1, minutes: 30,
      title: "K + S + T rows + question か",
      goal: "Add かきくけこ・さしすせそ・たちつてと, introduce yourself, ask yes/no with か.",
      kana: { hira: ["か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と"] },
      words: ["私","僕","学生","先生","エンジニア","これ","それ","あれ"],
      grammar: ["A は B です — Present affirmative identity","[Statement] か？— Yes/No question","はい / いいえ — Affirmative & negative answers"],
      sentences: ["私はシシルです。","私はエンジニアです。","学生ですか？","はい、そうです。"],
      practice: "Introduce yourself in 3 sentences, then ask the listener 'are you a student?' with か."
    },
    {
      day: 3, week: 1, minutes: 30,
      title: "N + H + M rows + は as 'wa'",
      goal: "Finish なにぬねの・はひふへほ・まみむめも. Feel the は = 'wa' topic-marker rule.",
      kana: { hira: ["な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も"] },
      words: ["何","名前","友達","家族","今日","明日","昨日"],
      grammar: ["🧠 Confusing particles cheat sheet — は を の が に で から も","A の B — Possession & noun connector"],
      sentences: ["お元気ですか？","今日は月曜日です。","私の名前はシシルです。"],
      practice: "Read each sentence aloud paying attention to は → 'wa'. Build 3 'X の Y' phrases about yourself."
    },
    {
      day: 4, week: 1, minutes: 30,
      title: "Y + R + W rows + ん + を + dakuten G/Z",
      goal: "Finish base hiragana, add first voiced rows, and use を as direct object.",
      kana: { hira: ["や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ"] },
      words: ["コーヒー","お茶","水","食べる","飲む","行く"],
      grammar: ["[Subject]は [Object]を [Verb]ます — Present/Future action"],
      sentences: ["水を飲みます。","コーヒーを飲みますか？","ご飯を食べます。"],
      practice: "Write 3 sentences using を: 'I drink/eat X'. Speak each aloud."
    },
    {
      day: 5, week: 1, minutes: 30,
      title: "Dakuten D/B + handakuten P + yōon — hiragana complete",
      goal: "All voiced rows + small-ゃゅょ combos. You can now read 100% hiragana.",
      kana: { hira: ["だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","じゃ","じゅ","じょ","にゃ","ひゃ","みゃ","りゃ","ぎゃ","びゃ","ぴゃ"] },
      words: ["書く","読む","話す","聞く","電話","会社"],
      grammar: [],
      sentences: ["メールを書きます。","電話を借りてもいいですか？","音楽を聞きます。"],
      practice: "Quiz tab → 'Hiragana → romaji' until 90%+ on 20 rounds."
    },
    {
      day: 6, week: 2, minutes: 30,
      title: "Katakana A-T rows + IT loanwords",
      goal: "Start katakana: アイウエオ・カキクケコ・サシスセソ・タチツテト. Recognize IT loans.",
      kana: { kata: ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト"] },
      words: ["コード","コンピュータ","データ","ファイル","バグ","パソコン"],
      grammar: [],
      sentences: ["バグを見つけました。","コードレビューをお願いします。","パソコンが壊れました。"],
      practice: "Find 5 katakana words on your phone or laptop screen. Read each aloud."
    },
    {
      day: 7, week: 2, minutes: 30,
      title: "Katakana N-W rows + workplace nouns",
      goal: "Add ナニヌネノ・ハヒフヘホ・マミムメモ・ヤユヨ・ラリルレロ・ワヲン. Workplace vocab.",
      kana: { kata: ["ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヲ","ン"] },
      words: ["レビュー","ミーティング","チーム","会議","上司","同僚"],
      grammar: [],
      sentences: ["レビューをお願いします。","会議は何時からですか？","チームのミーティングです。"],
      practice: "Watch シ vs ツ, ソ vs ン. Read 'コンピュータのバグをレビューします' 3× — pure mixed-kana practice."
    },
    {
      day: 8, week: 2, minutes: 35,
      title: "★ Katakana dakuten + small chars — KANA COMPLETE",
      goal: "Finish ガザダバパ rows + small ァィゥェォ. Mix hiragana + katakana freely.",
      kana: { kata: ["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","ァ","ィ","ゥ","ェ","ォ"] },
      words: ["メール","インターネット","サーバー","テスト"],
      grammar: [],
      sentences: ["メールを送りました。","サーバーが落ちています。","インターネットが遅いです。"],
      practice: "Quiz tab → Katakana until 90%+. Then mix-quiz both kana. Handwrite all 46 base hiragana on a whiteboard → screenshot → Claude review."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 2 — Building blocks: pronouns, demonstratives, question words (Days 9-11)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 9, week: 2, minutes: 30,
      title: "Pronouns — 1st / 2nd / 3rd person",
      goal: "Confidently refer to yourself, the listener, and a third party. Polite + casual forms.",
      kana: {},
      words: ["私","僕","彼","彼女","友達","学生","先生","エンジニア"],
      grammar: ["1st person — 私 / 僕 / 自分","2nd person — [Name]さん (avoid あなた)","3rd person — 彼 / 彼女 / あの人 / [Name]さん"],
      sentences: ["私はシシルです。","彼は田中さんです。","彼女は先生です。","あの人は誰ですか？"],
      practice: "Introduce yourself, then describe one friend in 3rd person. 30 seconds, no notes."
    },
    {
      day: 10, week: 2, minutes: 25,
      title: "Demonstratives — これ・それ・あれ + どれ",
      goal: "Point at things: これ (near me), それ (near you), あれ (over there), どれ (which).",
      kana: {},
      words: ["これ","それ","あれ","どれ","本","ペン"],
      grammar: ["A は B です — Present affirmative identity"],
      sentences: ["これは何ですか？","それは本です。","あれは何ですか？","どれが好きですか？"],
      practice: "Point at 3 things in your room. Identify each: 'これは___です'. Then ask 'それは何ですか？' for 2 more."
    },
    {
      day: 11, week: 2, minutes: 30,
      title: "Wh-question words — 何 / 誰 / どこ / いつ / いくら",
      goal: "Ask for information with every major Wh-word.",
      kana: {},
      words: ["何","誰","名前","友達","家族"],
      grammar: ["Wh-questions (何 / 誰 / どこ / いつ / なぜ / いくら)"],
      sentences: ["これは何ですか？","名前は何ですか？","誕生日はいつですか？","トイレはどこですか？","いくらですか？"],
      practice: "Ask 5 questions: one each with 何, 誰, どこ, いつ, いくら. Answer each yourself."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 3 — Particles, one concept per day (Days 12-17)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 12, week: 3, minutes: 35,
      title: "は vs が — topic vs subject (the #1 confusion)",
      goal: "Know when to use は (what we're talking about) vs が (new info / answer to 'who?').",
      kana: {},
      words: ["私","学生","エンジニア","友達"],
      grammar: ["🧠 Confusing particles cheat sheet — は を の が に で から も","A は B です — Present affirmative identity"],
      sentences: ["私はシシルです。","誰がシシルですか？","猫がいます。","あの人は誰ですか？"],
      practice: "Say 'I am Shishir' three ways: with は (intro), with が (answer to 'who?'), and explain when each is right."
    },
    {
      day: 13, week: 3, minutes: 25,
      title: "を — direct object marker",
      goal: "Use を to mark WHAT the verb acts on.",
      kana: {},
      words: ["食べる","飲む","読む","書く","水","本","メール"],
      grammar: ["[Subject]は [Object]を [Verb]ます — Present/Future action"],
      sentences: ["水を飲みます。","本を読みます。","メールを書きます。","コードをレビューします。"],
      practice: "Pair 5 verbs you know with an object via を. Speak each sentence aloud."
    },
    {
      day: 14, week: 3, minutes: 30,
      title: "の — possessive + noun connector",
      goal: "Chain nouns: 私の会社の同僚 = 'my company's colleague'.",
      kana: {},
      words: ["会社","同僚","家","本","コード"],
      grammar: ["A の B — Possession & noun connector"],
      sentences: ["私の本です。","シシルさんの会社","これは私の家ではありません。"],
      practice: "Build a 3-deep の-chain about yourself (e.g., 私の会社のチームのリーダー). Say it aloud."
    },
    {
      day: 15, week: 3, minutes: 30,
      title: "に vs で — target vs location-of-action",
      goal: "に = destination / time / existence. で = where ACTION happens.",
      kana: {},
      words: ["学校","公園","会社","駅","働く"],
      grammar: ["[Place]で / [Place]に — Action vs destination","あります / います — Existence ('there is')"],
      sentences: ["学校に行きます。","公園で食べます。","会社で働きます。","駅はどこですか？"],
      practice: "Make 3 sentences: one X-で-action, one X-に-go, one X-に-exist."
    },
    {
      day: 16, week: 3, minutes: 30,
      title: "へ + と + や + も — direction, with/and, also",
      goal: "Four high-frequency particles you'll use every conversation.",
      kana: {},
      words: ["友達","家族","東京"],
      grammar: ["へ (e) — Direction marker (formal alternative to に)","と (to) — With (companion) / and (listing)","や (ya) — And (non-exhaustive 'and others')"],
      sentences: ["東京へ行きます。","友達と話します。","りんごやバナナを食べます。","私も学生です。"],
      practice: "Build one sentence each with へ, と, や, も."
    },
    {
      day: 17, week: 3, minutes: 35,
      title: "から + まで + より + よ + ね — range + sentence-end",
      goal: "Express ranges (from/to/than) and add nuance with よ (informing) / ね (agreement).",
      kana: {},
      words: [],
      grammar: ["よ (yo) — Sentence-end emphasis (informing / asserting)","ね (ne) — Sentence-end agreement-seeking"],
      sentences: ["9時から働きます。","5時までです。","おいしいですよ。","暑いですね。","犬より猫が好き。"],
      practice: "Make 2 sentences ending in よ (informing) and 2 ending in ね (seeking agreement)."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 4 — Verbs (Days 18-21)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 18, week: 4, minutes: 30,
      title: "ます-form — polite present / future",
      goal: "Use ます to say what you do (politely). Same form covers present AND future.",
      kana: {},
      words: ["行く","来る","する","食べる","飲む","書く","話す"],
      grammar: ["[Subject]は [Object]を [Verb]ます — Present/Future action","Verb groups — godan, ichidan, irregular"],
      sentences: ["私は会社に行きます。","お昼ごはんを食べます。","明日、ミーティングをします。"],
      practice: "List 5 things you'll do tomorrow, each ending in ます."
    },
    {
      day: 19, week: 4, minutes: 35,
      title: "て-form — linking actions + てください request",
      goal: "Connect verbs (eat AND drink) and ask politely with てください.",
      kana: {},
      words: ["送る","話す","直す","待つ"],
      grammar: ["[Verb-て]、[Verb] — Linking actions (and / then)","[Verb-て]ください — Polite request"],
      sentences: ["食べて、行きます。","ちょっと待ってください。","ゆっくり話してください。","もう一度説明してください。"],
      practice: "Chain 3 actions in sequence (eat → leave → arrive). Then ask one favor with てください."
    },
    {
      day: 20, week: 4, minutes: 30,
      title: "〜ています — ongoing / right now",
      goal: "Say what you're doing right now and what state things are in.",
      kana: {},
      words: ["サーバー","テスト","メール"],
      grammar: ["[Verb-て]います — Ongoing / Continuous"],
      sentences: ["今、コードを書いています。","会社で働いています。","サーバーが落ちています。","テストが失敗しています。"],
      practice: "Describe 3 things you're doing RIGHT NOW with ています."
    },
    {
      day: 21, week: 4, minutes: 35,
      title: "Plain forms — dictionary / ない / た + verb groups",
      goal: "Drop the polite ます. Use the casual base forms with friends and inner-monologue.",
      kana: {},
      words: ["飲む","食べる","行く","する","来る","話す","書く"],
      grammar: ["Plain dictionary form — the verb's base shape (飲む / 食べる / する)","Plain negative — 〜ない (casual 'don't')","Plain past — 〜た / 〜だ (casual 'did')","Verb groups — godan, ichidan, irregular"],
      sentences: ["食べる。","行く。","食べない。","行った。","コーヒーを飲まない。"],
      practice: "Take 5 ます-form verbs. Convert each to plain dict + ない + た. Read aloud."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 5 — Tenses + Adjectives + Modals (Days 22-26)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 22, week: 5, minutes: 30,
      title: "Past tense — ました + でした",
      goal: "Talk about yesterday: actions (ました) and identity/state (でした).",
      kana: {},
      words: ["昨日","直す","送る"],
      grammar: ["[Verb]ました — Past affirmative","A は B でした — Past affirmative identity"],
      sentences: ["昨日、肉を食べました。","昨日は月曜日でした。","会議に行きました。","バグを直しました。"],
      practice: "Tell 3 things you did yesterday: 2 actions (ました) + 1 state (でした)."
    },
    {
      day: 23, week: 5, minutes: 35,
      title: "🧠 The three negatives — ません vs ありません vs ではありません",
      goal: "Stop confusing them. ません = action neg, ありません = existence neg, ではありません = identity neg.",
      kana: {},
      words: ["分かる","話す"],
      grammar: ["🧠 ません vs ありません vs ではありません — the three negatives","[Verb]ません — Present/Future negative","A は B じゃありません — Present negative identity","[Verb]ませんでした — Past negative"],
      sentences: ["肉を食べません。","お金がありません。","私は学生ではありません。","昨日、行きませんでした。","すみません、ちょっと分かりません。"],
      practice: "Write ONE sentence with EACH of the three negatives. Read aloud, focus on the pattern."
    },
    {
      day: 24, week: 5, minutes: 30,
      title: "Adjectives — i-adj + na-adj (all 4 forms)",
      goal: "Use 暑い / 静か(な) correctly in present, past, positive, negative.",
      kana: {},
      words: [],
      grammar: ["[Topic]は [i-adjective]です — i-adjective sentence","[Topic]は [na-adjective]です — na-adjective sentence","Adjective conjugation — i-adj vs na-adj"],
      sentences: ["このコーヒーは熱いです。","暑かったです。","あまり暑くないです。","静かです。","親切な人です。"],
      practice: "Describe today's weather: 1 i-adj (past) and 1 na-adj (present)."
    },
    {
      day: 25, week: 5, minutes: 30,
      title: "Wants & Invites — たい / ませんか / ましょう",
      goal: "Express your wish, invite someone, suggest doing something together.",
      kana: {},
      words: ["勉強する"],
      grammar: ["[Verb-stem]たいです — 'I want to do'","[Verb-stem]ませんか / ましょう — Invitation & 'let's'"],
      sentences: ["寿司を食べたいです。","お昼ごはんを食べに行きませんか？","コーヒーを飲みましょう。","日本語を話したいです。"],
      practice: "Say one wish (たい), one invitation (ませんか), one let's-do (ましょう). Real 30-sec dialog."
    },
    {
      day: 26, week: 5, minutes: 35,
      title: "Potential 'can do' + Preferences 'I like'",
      goal: "Say what you can/can't do and what you like — essential for self-intro.",
      kana: {},
      words: ["寿司","コーヒー","料理","日本語"],
      grammar: ["Potential form — 'can do' / 'be able to do'","〜が好き / 嫌い / 上手 / 下手 — preferences and skills (use が, not を)"],
      sentences: ["日本語が話せます。","辛い物が食べられます。","音楽が好きです。","プログラミングが得意です。"],
      practice: "List 3 things you CAN do + 3 things you LIKE — practice for self-intro."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 6 — Fluency boosters (Days 27-29)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 27, week: 6, minutes: 30,
      title: "Existence あります / います + Counters",
      goal: "Say what exists / where things are. Count them with the right counter.",
      kana: {},
      words: ["一","二","三","四","五","六","七","八","九","十"],
      grammar: ["あります / います — Existence ('there is')","Counters — counting things, people, time"],
      sentences: ["猫がいます。","お金がありません。","三人います。","本が二冊あります。","今、何時ですか？"],
      practice: "Count 3 things around you using different counters: 〜つ / 〜人 / 〜本. Say each aloud."
    },
    {
      day: 28, week: 6, minutes: 30,
      title: "Connectors — から / ので / けど / が — make speech flow",
      goal: "Stop sounding choppy. Chain reasons (because) and contrasts (but).",
      kana: {},
      words: [],
      grammar: ["[Reason]から、[Result] — Because (cause-and-effect)","ので (node) — Because (politer than から)","けど / が — But / however (contrast)"],
      sentences: ["寒いから、帰ります。","忙しいので、後で。","美味しいけど、高いです。","行きたいですが、時間がないです。"],
      practice: "Make 2 'because' sentences (one casual, one polite) and 1 'but' sentence."
    },
    {
      day: 29, week: 6, minutes: 30,
      title: "The Q&A system — か + はい/いいえ + Wh-words",
      goal: "Run a full ask-and-answer loop in either direction.",
      kana: {},
      words: [],
      grammar: ["[Statement] か？— Yes/No question","はい / いいえ — Affirmative & negative answers","Wh-questions (何 / 誰 / どこ / いつ / なぜ / いくら)"],
      sentences: ["学生ですか？","はい、学生です。","いいえ、エンジニアです。","これは何ですか？","誰がシシルさんですか？"],
      practice: "Practice 5 yes/no Q+A exchanges and 5 Wh-question Q+A exchanges. Out loud."
    },

    // ──────────────────────────────────────────────────────────────────
    // PHASE 7 — Dialog mastery (Day 30)
    // ──────────────────────────────────────────────────────────────────
    {
      day: 30, week: 6, minutes: 45,
      title: "★ Dialog mastery — workplace + daily-life",
      goal: "Run a 60-second workplace standup AND order at a café — both in Japanese.",
      kana: {},
      words: ["会議","上司","同僚","駅","コーヒー","ご飯"],
      grammar: [],
      sentences: ["おはようございます！","お疲れさまでした。","お先に失礼します。","コードレビューをお願いします。","バグを直しました。","駅はどこですか？","これはいくらですか？","コーヒーをください。"],
      practice: "1) Run a 60-sec standup (yesterday → today → blockers). 2) Order at an imaginary café. Record both."
    },

    // ──────────────────────────────────────────────────────────────────
    // BONUS — Beyond N5 (Days 31-43) — each chapter teaches one
    // intermediate concept. Take these in order or pick what you need.
    // ──────────────────────────────────────────────────────────────────
    {
      day: 31, week: 7, minutes: 30,
      title: "Plain volitional — casual 'let's'",
      goal: "Casual 'let's do' / 'I will' with 〜ō / 〜よう. Different from polite ましょう.",
      kana: {},
      words: ["飲む","食べる","行く","来る","する"],
      grammar: ["Plain volitional — 'let's' / 'I will' (casual)"],
      sentences: ["一緒に行こう。","コーヒーを飲もう。","明日、何を食べよう？"],
      practice: "Make 3 casual 'let's...' suggestions to a friend in Japanese."
    },
    {
      day: 32, week: 7, minutes: 35,
      title: "Conditionals — ば / たら / なら / と",
      goal: "Four ways to say 'if'. Pick the right one for the context.",
      kana: {},
      words: ["雨","時間","春","急ぐ"],
      grammar: ["Conditionals — ば / たら / なら / と (four ways to say 'if')"],
      sentences: ["雨が降ったら、家にいます。","時間があれば、行きます。","急がないと、遅刻するよ。"],
      practice: "Make 4 conditional sentences — one each with ば, たら, なら, と."
    },
    {
      day: 33, week: 7, minutes: 30,
      title: "Comparison — より / ほうが / 一番",
      goal: "Compare two things, identify the best, prefer one over another.",
      kana: {},
      words: ["犬","猫","東京","大阪","寿司"],
      grammar: ["Comparison — より / ほうが / 一番 (more, more-of-the-two, most)"],
      sentences: ["犬より猫のほうが好きです。","東京は大阪より大きいです。","寿司が一番好きです。"],
      practice: "Compare 3 pairs of things — say which one you prefer / which is bigger / etc."
    },
    {
      day: 34, week: 7, minutes: 35,
      title: "Giving and receiving — あげる / もらう / くれる",
      goal: "Master the direction-sensitive trio. Get this right and you sound natural.",
      kana: {},
      words: ["田中","友達","母","上司","本"],
      grammar: ["Giving / receiving — あげる / もらう / くれる (direction matters!)"],
      sentences: ["田中さんに本をあげました。","母がプレゼントをくれました。","友達からチョコをもらった。"],
      practice: "Describe 3 gifts: one you gave, one you received, one someone gave you. Match the verb to direction."
    },
    {
      day: 35, week: 8, minutes: 30,
      title: "Quotations — 〜と言う / 〜と思う",
      goal: "Report what someone said or what you think.",
      kana: {},
      words: ["田中","思う","言う","聞く"],
      grammar: ["Quotations — 〜と言う / 〜と思う / 〜って (saying & thinking)"],
      sentences: ["雨が降ると思います。","田中さんは「行きます」と言いました。","面白いと思った。"],
      practice: "Quote yourself or someone else in 3 sentences. Use と言う / と思う."
    },
    {
      day: 36, week: 8, minutes: 30,
      title: "Permission and prohibition — 〜てもいい / 〜てはいけない",
      goal: "Ask politely 'may I' and warn 'must not'.",
      kana: {},
      words: ["写真","タバコ","スマホ"],
      grammar: ["〜てもいい / 〜てはいけない — May / Must not"],
      sentences: ["ここで写真を撮ってもいいですか？","ここでタバコを吸ってはいけません。","コードを見てもいいですか？"],
      practice: "Ask 3 polite permission questions you'd actually use at work."
    },
    {
      day: 37, week: 8, minutes: 30,
      title: "Obligation — 〜なければなりません / 〜なきゃ",
      goal: "Say what you HAVE to do. Polite full form + casual contraction.",
      kana: {},
      words: ["宿題","薬","電車","テスト"],
      grammar: ["〜なければなりません — Must do (obligation)"],
      sentences: ["宿題をしなければなりません。","明日早く起きなければなりません。","薬を飲まなきゃ。"],
      practice: "List 5 things you must do this week using なければなりません / なきゃ."
    },
    {
      day: 38, week: 8, minutes: 30,
      title: "Experience — 〜たことがある",
      goal: "Talk about life experiences. Have you done X? Yes/no.",
      kana: {},
      words: ["日本","寿司","富士山","京都"],
      grammar: ["〜たことがある — Have done X before (experience)"],
      sentences: ["日本に行ったことがあります。","寿司を食べたことがあります。","彼に会ったことはない。"],
      practice: "Make 5 statements about experiences — 3 things you have done, 2 things you haven't."
    },
    {
      day: 39, week: 9, minutes: 30,
      title: "Simultaneous + listing — 〜ながら, 〜たり〜たり",
      goal: "Two actions at once (ながら) and 'doing things like X and Y' (たり).",
      kana: {},
      words: ["音楽","コーヒー","本","映画"],
      grammar: ["〜ながら — While doing X (simultaneous actions)","〜たり〜たり する — Doing things like X and Y"],
      sentences: ["音楽を聞きながら勉強します。","週末は本を読んだり、映画を見たりします。"],
      practice: "Describe your weekend with 2 ながら sentences and 2 たり sentences."
    },
    {
      day: 40, week: 9, minutes: 35,
      title: "Advice + intentions — 〜たほうがいい / 〜つもり",
      goal: "Give advice softly and state your plans.",
      kana: {},
      words: ["寝る","薬","新しい","パソコン"],
      grammar: ["〜たほうがいい — You should do X (advice)","〜つもり — Intend to / Plan to"],
      sentences: ["早く寝たほうがいいですよ。","来週、日本に行くつもりです。","新しいパソコンを買うつもりです。"],
      practice: "Give 3 pieces of advice + state 3 plans you have for next month."
    },
    {
      day: 41, week: 9, minutes: 35,
      title: "Relative clauses + nuance — やすい/にくい, すぎる, しか, hearsay",
      goal: "Modify nouns with verbs. Add nuance with やすい/にくい, すぎる, しか, そう/らしい.",
      kana: {},
      words: ["本","コード","コーヒー","千円"],
      grammar: ["Relative clauses — modifying nouns with verbs (私が読んだ本)","〜やすい / 〜にくい — Easy / Hard to do","〜すぎる — Too much / Excessively","〜しか〜ない / 〜だけ — Only X (restriction)","そうです / らしい — Hearsay (I heard / it seems)"],
      sentences: ["私が書いた本","この本は読みやすいです。","食べすぎました。","千円しかありません。","明日、雨が降るそうです。"],
      practice: "Build a 3-sentence story using a relative clause, やすい/にくい, and a hearsay form."
    },
    {
      day: 42, week: 10, minutes: 40,
      title: "Keigo intro — 尊敬語 / 謙譲語",
      goal: "Recognize and use the most-common keigo verb pairs in business contexts.",
      kana: {},
      words: ["社長","お客様","参る","申す"],
      grammar: ["Keigo intro — 尊敬語 (raise others) vs 謙譲語 (lower self)"],
      sentences: ["社長がいらっしゃいました。","私が参ります。","お客様が召し上がります。","存じております。"],
      practice: "Practice the 5 most common keigo pairs (来る/行く, 言う, 食べる, 知る, いる) until you can produce them on demand."
    },
    {
      day: 43, week: 10, minutes: 45,
      title: "★ Cumulative review + next-month plan",
      goal: "Run a 5-minute conversation. Identify weak spots. Plan what's next.",
      kana: {},
      words: [],
      grammar: [],
      sentences: ["はじめまして、よろしくお願いします。","お疲れさまでした。","また明日。","ありがとうございます。"],
      practice: "Long roleplay with Claude: 5-min conversation covering intro, work, small talk. Then ask what to focus on next."
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
    },
    // ── Phase 3: restaurant, hotel, train, permission, weather, hobbies, declining ──
    {
      title: "Restaurant — ordering and asking for the bill",
      scene: "shopping",
      level: "beginner",
      summary: "You sit down at a restaurant. You order, eat, and pay.",
      a: {"name":"Staff","role":"店員 / staff"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "いらっしゃいませ。何名様ですか？", ro: "irasshaimase. nan-mei-sama desu ka?", en: "Welcome. How many people?" },
        { s: "B", jp: "二人です。", ro: "futari desu.", en: "Two people." },
        { s: "A", jp: "こちらへどうぞ。", ro: "kochira e dōzo.", en: "This way please." },
        { s: "A", jp: "ご注文はお決まりですか？", ro: "go-chūmon wa okimari desu ka?", en: "Have you decided your order?" },
        { s: "B", jp: "ラーメンとお茶をお願いします。", ro: "rāmen to ocha o onegaishimasu.", en: "Ramen and tea please." },
        { s: "A", jp: "かしこまりました。", ro: "kashikomarimashita.", en: "Certainly. (humble)" },
        { s: "B", jp: "すみません、お会計お願いします。", ro: "sumimasen, okaikei onegaishimasu.", en: "Excuse me, the bill please." },
        { s: "A", jp: "千二百円になります。", ro: "sen-nihyaku-en ni narimasu.", en: "That'll be 1200 yen." }
      ],
      notes: "何名様 = formal 'how many people'. かしこまりました = humble 'certainly'. お会計 = the bill (お makes it polite)."
    },
    {
      title: "Hotel check-in",
      scene: "shopping",
      level: "beginner",
      summary: "You arrive at a hotel and check in.",
      a: {"name":"Receptionist","role":"受付 / front desk"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "B", jp: "こんにちは。チェックインをお願いします。", ro: "konnichiwa. chekku-in o onegaishimasu.", en: "Hello. I'd like to check in." },
        { s: "A", jp: "お名前をお願いします。", ro: "onamae o onegaishimasu.", en: "Your name, please." },
        { s: "B", jp: "シシル・パウデルです。", ro: "shishiru pauderu desu.", en: "Shishir Paudel." },
        { s: "A", jp: "予約は二泊で間違いございませんか？", ro: "yoyaku wa nihaku de machigai gozaimasen ka?", en: "Your booking is for two nights, correct?" },
        { s: "B", jp: "はい、そうです。", ro: "hai, sō desu.", en: "Yes, that's right." },
        { s: "A", jp: "こちらが鍵です。お部屋は305号室です。", ro: "kochira ga kagi desu. oheya wa sanmaru-go gōshitsu desu.", en: "Here's your key. Your room is 305." },
        { s: "B", jp: "ありがとうございます。", ro: "arigatō gozaimasu.", en: "Thank you." }
      ],
      notes: "二泊 = 2 nights (counter). 〜号室 = room number suffix. 間違いございませんか = formal 'is there no mistake?'"
    },
    {
      title: "Train station — buying a ticket",
      scene: "travel",
      level: "beginner",
      summary: "You buy a one-way train ticket at a station.",
      a: {"name":"Shishir","role":"あなた / you"},
      b: {"name":"Staff","role":"駅員 / station staff"},
      turns: [
        { s: "A", jp: "すみません、東京までの切符をください。", ro: "sumimasen, tōkyō made no kippu o kudasai.", en: "Excuse me, a ticket to Tokyo please." },
        { s: "B", jp: "片道ですか、往復ですか？", ro: "katamichi desu ka, ōfuku desu ka?", en: "One-way or round-trip?" },
        { s: "A", jp: "片道でお願いします。", ro: "katamichi de onegaishimasu.", en: "One-way please." },
        { s: "B", jp: "新幹線ですか？", ro: "shinkansen desu ka?", en: "By bullet train?" },
        { s: "A", jp: "はい、新幹線で。", ro: "hai, shinkansen de.", en: "Yes, by bullet train." },
        { s: "B", jp: "一万三千円です。", ro: "ichiman-sanzen-en desu.", en: "13,000 yen." },
        { s: "A", jp: "クレジットカードでお願いします。", ro: "kurejitto kādo de onegaishimasu.", en: "By credit card please." }
      ],
      notes: "片道 = one-way, 往復 = round-trip. 〜まで = up to (destination). 新幹線で = by bullet train (means)."
    },
    {
      title: "Asking permission at work",
      scene: "workplace",
      level: "beginner",
      summary: "You ask your boss to leave early.",
      a: {"name":"Shishir","role":"あなた / you"},
      b: {"name":"Boss","role":"上司"},
      turns: [
        { s: "A", jp: "上司、ちょっとよろしいですか？", ro: "jōshi, chotto yoroshii desu ka?", en: "Boss, do you have a moment?" },
        { s: "B", jp: "はい、何ですか？", ro: "hai, nan desu ka?", en: "Yes, what is it?" },
        { s: "A", jp: "今日、少し早く帰ってもいいですか？", ro: "kyō, sukoshi hayaku kaette mo ii desu ka?", en: "May I leave a little early today?" },
        { s: "B", jp: "理由を教えてもらえますか？", ro: "riyū o oshiete moraemasu ka?", en: "Can you tell me the reason?" },
        { s: "A", jp: "病院に行かなければなりません。", ro: "byōin ni ikanakereba narimasen.", en: "I have to go to the hospital." },
        { s: "B", jp: "わかりました。お大事に。", ro: "wakarimashita. o-daiji ni.", en: "Got it. Take care." },
        { s: "A", jp: "ありがとうございます。", ro: "arigatō gozaimasu.", en: "Thank you very much." }
      ],
      notes: "ちょっとよろしいですか = polite 'do you have a moment?'. お大事に = 'take care'."
    },
    {
      title: "Small talk about the weather",
      scene: "casual",
      level: "beginner",
      summary: "Coworkers chat about the weather.",
      a: {"name":"Tanaka","role":"同僚"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "今日はいい天気ですね。", ro: "kyō wa ii tenki desu ne.", en: "Nice weather today, isn't it?" },
        { s: "B", jp: "本当に。暑くも寒くもないですね。", ro: "hontō ni. atsuku mo samuku mo nai desu ne.", en: "Really. Not hot, not cold." },
        { s: "A", jp: "明日は雨が降るそうです。", ro: "ashita wa ame ga furu sō desu.", en: "I heard it'll rain tomorrow." },
        { s: "B", jp: "そうですか。傘を持ってきます。", ro: "sō desu ka. kasa o motte kimasu.", en: "Is that so. I'll bring an umbrella." },
        { s: "A", jp: "そうしたほうがいいですよ。", ro: "sō shita hō ga ii desu yo.", en: "You should." }
      ],
      notes: "暑くも寒くもない = neither hot nor cold (〜くも〜くもない pattern)."
    },
    {
      title: "Hobbies and interests — getting to know someone",
      scene: "casual",
      level: "beginner",
      summary: "Two friends talk about their hobbies.",
      a: {"name":"Friend","role":"友達"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "趣味は何ですか？", ro: "shumi wa nan desu ka?", en: "What's your hobby?" },
        { s: "B", jp: "プログラミングです。", ro: "puroguramingu desu.", en: "Programming." },
        { s: "A", jp: "へえ、すごいですね！", ro: "hē, sugoi desu ne!", en: "Wow, amazing!" },
        { s: "B", jp: "あなたは？", ro: "anata wa?", en: "How about you?" },
        { s: "A", jp: "私は写真を撮るのが好きです。", ro: "watashi wa shashin o toru no ga suki desu.", en: "I like taking photos." },
        { s: "B", jp: "いいですね。今度見せてください。", ro: "ii desu ne. kondo misete kudasai.", en: "Nice. Show me next time." }
      ],
      notes: "趣味 = hobby. 〜のが好き = nominalization. 今度 = next time."
    },
    {
      title: "Inviting a friend (and politely declining)",
      scene: "casual",
      level: "beginner",
      summary: "Friend invites you to a movie; you politely decline.",
      a: {"name":"Friend","role":"友達"},
      b: {"name":"Shishir","role":"あなた / you"},
      turns: [
        { s: "A", jp: "明日、映画を見に行きませんか？", ro: "ashita, eiga o mi ni ikimasen ka?", en: "Want to go see a movie tomorrow?" },
        { s: "B", jp: "うーん、明日はちょっと…。", ro: "ūn, ashita wa chotto…", en: "Hmm, tomorrow is a bit…" },
        { s: "A", jp: "用事がありますか？", ro: "yōji ga arimasu ka?", en: "Do you have something on?" },
        { s: "B", jp: "はい、会議があります。", ro: "hai, kaigi ga arimasu.", en: "Yes, I have a meeting." },
        { s: "A", jp: "じゃあ、また今度。", ro: "jā, mata kondo.", en: "OK, next time then." },
        { s: "B", jp: "すみません、またお願いします。", ro: "sumimasen, mata onegaishimasu.", en: "Sorry — let's do it next time." }
      ],
      notes: "ちょっと... (trailing) = the standard SOFT no in Japanese. また今度 = 'next time' as a graceful close."
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
    },
    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 12 — PLAIN FORMS (the casual "non-polite" verb forms)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Plain forms (casual)",
      title: "Plain dictionary form — the verb's base shape (飲む / 食べる / する)",
      formula: "Group 1: ends in -u sound (飲む / 書く / 行く)  ·  Group 2: ends in -る with -e/-i (食べる / 見る)  ·  Group 3: する / 来る",
      description: "The plain (dictionary) form is what you find in dictionaries and what friends use casually. It's also the BUILDING BLOCK for almost every other conjugation: negative, past, potential, conditional, etc. — they all derive from this.",
      person: "Any (casual register)",
      tense: "Present / future plain",
      main: {
        jp: "私はコーヒーを飲む。",
        ro: "watashi wa kōhī o nomu.",
        en: "I drink coffee. (casual / plain)",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "飲む", ro: "nomu", role: "Verb (plain present, godan)", meaning: "drink" }
        ]
      },
      examples: [
        { jp: "毎朝パンを食べる。", ro: "maiasa pan o taberu.", en: "I eat bread every morning. (plain)",
          tokens: [
            { t: "毎朝", ro: "maiasa", role: "Time noun", meaning: "every morning" },
            { t: "パン", ro: "pan", role: "Noun", meaning: "bread" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べる", ro: "taberu", role: "Verb (plain present, ichidan)", meaning: "eat" }
          ] },
        { jp: "友達と会う。", ro: "tomodachi to au.", en: "I'm meeting a friend.",
          tokens: [
            { t: "友達", ro: "tomodachi", role: "Noun", meaning: "friend" },
            { t: "と", ro: "to", role: "Particle — accompaniment", meaning: "with" },
            { t: "会う", ro: "au", role: "Verb (plain, godan)", meaning: "meet" }
          ] },
        { jp: "本を読む。", ro: "hon o yomu.", en: "I read a book.",
          tokens: [
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読む", ro: "yomu", role: "Verb (plain, godan)", meaning: "read" }
          ] },
        { jp: "明日、東京へ行く。", ro: "ashita, tōkyō e iku.", en: "Tomorrow I go to Tokyo.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "へ", ro: "e", role: "Particle — direction", meaning: "to" },
            { t: "行く", ro: "iku", role: "Verb (plain, godan)", meaning: "go" }
          ] },
        { jp: "テストをする。", ro: "tesuto o suru.", en: "I do the test.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "する", ro: "suru", role: "Verb (plain, irregular)", meaning: "do" }
          ] },
        { jp: "明日、来る？", ro: "ashita, kuru?", en: "Coming tomorrow? (casual question)",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "来る", ro: "kuru", role: "Verb (plain, irregular)", meaning: "come" }
          ] },
        { jp: "彼はコードを書く。", ro: "kare wa kōdo o kaku.", en: "He writes code.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書く", ro: "kaku", role: "Verb (plain, godan)", meaning: "write" }
          ] }
      ]
    },

    {
      category: "Plain forms (casual)",
      title: "Plain negative — 〜ない (casual 'don't')",
      formula: "Group 1: -u → -anai (飲む → 飲まない)  ·  Group 2: drop -ru, add -ない (食べる → 食べない)  ·  Group 3: しない / 来ない",
      description: "Casual / plain version of ません. Used in friend talk, internal monologue, plain-form sentences. Conjugates like an i-adjective for past forms (〜なかった).",
      person: "Any (casual)",
      tense: "Present negative plain",
      main: {
        jp: "コーヒーを飲まない。",
        ro: "kōhī o nomanai.",
        en: "I don't drink coffee. (casual)",
        tokens: [
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "飲まない", ro: "nomanai", role: "Verb (plain negative, godan)", meaning: "do not drink" }
        ]
      },
      examples: [
        { jp: "肉を食べない。", ro: "niku o tabenai.", en: "I don't eat meat.",
          tokens: [
            { t: "肉", ro: "niku", role: "Noun", meaning: "meat" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べない", ro: "tabenai", role: "Verb (plain negative, ichidan)", meaning: "do not eat" }
          ] },
        { jp: "今日は行かない。", ro: "kyō wa ikanai.", en: "I'm not going today.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "行かない", ro: "ikanai", role: "Verb (plain negative)", meaning: "do not go" }
          ] },
        { jp: "わからない。", ro: "wakaranai.", en: "I don't get it.",
          tokens: [
            { t: "わからない", ro: "wakaranai", role: "Verb (plain negative)", meaning: "don't understand" }
          ] },
        { jp: "彼は来ない。", ro: "kare wa konai.", en: "He's not coming.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "来ない", ro: "konai", role: "Verb (plain negative, irregular)", meaning: "doesn't come" }
          ] },
        { jp: "宿題をしない。", ro: "shukudai o shinai.", en: "I don't do homework.",
          tokens: [
            { t: "宿題", ro: "shukudai", role: "Noun", meaning: "homework" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "しない", ro: "shinai", role: "Verb (plain negative, irregular)", meaning: "don't do" }
          ] },
        { jp: "テレビを見ない。", ro: "terebi o minai.", en: "I don't watch TV.",
          tokens: [
            { t: "テレビ", ro: "terebi", role: "Noun (loanword)", meaning: "TV" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見ない", ro: "minai", role: "Verb (plain negative, ichidan)", meaning: "don't watch" }
          ] },
        { jp: "彼女は話さない。", ro: "kanojo wa hanasanai.", en: "She doesn't talk.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "話さない", ro: "hanasanai", role: "Verb (plain negative)", meaning: "doesn't speak" }
          ] }
      ]
    },

    {
      category: "Plain forms (casual)",
      title: "Plain past — 〜た / 〜だ (casual 'did')",
      formula: "Group 1: depends on ending — く→いた, す→した, つ/る/う→った, ぬ/ぶ/む→んだ, ぐ→いだ  ·  Group 2: drop -る + -た  ·  Group 3: した / 来た (きた)",
      description: "Casual past, building block for many compound expressions (〜たことがある, 〜たほうがいい, 〜たら). Same set of changes as the て-form, just ending in た/だ instead of て/で.",
      person: "Any (casual)",
      tense: "Past affirmative plain",
      main: {
        jp: "昨日、コーヒーを飲んだ。",
        ro: "kinō, kōhī o nonda.",
        en: "Yesterday I drank coffee. (casual)",
        tokens: [
          { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "飲んだ", ro: "nonda", role: "Verb (plain past, godan -m → -nda)", meaning: "drank" }
        ]
      },
      examples: [
        { jp: "もう食べた。", ro: "mō tabeta.", en: "I already ate.",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "already" },
            { t: "食べた", ro: "tabeta", role: "Verb (plain past, ichidan)", meaning: "ate" }
          ] },
        { jp: "昨日、東京に行った。", ro: "kinō, tōkyō ni itta.", en: "I went to Tokyo yesterday.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行った", ro: "itta", role: "Verb (plain past, irregular -ku→-itta)", meaning: "went" }
          ] },
        { jp: "本を読んだ。", ro: "hon o yonda.", en: "I read a book.",
          tokens: [
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "読んだ", ro: "yonda", role: "Verb (plain past, godan -m→-nda)", meaning: "read (past)" }
          ] },
        { jp: "彼が来た。", ro: "kare ga kita.", en: "He came.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
            { t: "来た", ro: "kita", role: "Verb (plain past, irregular)", meaning: "came" }
          ] },
        { jp: "宿題をした。", ro: "shukudai o shita.", en: "I did the homework.",
          tokens: [
            { t: "宿題", ro: "shukudai", role: "Noun", meaning: "homework" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "した", ro: "shita", role: "Verb (plain past, irregular)", meaning: "did" }
          ] },
        { jp: "テストを書いた。", ro: "tesuto o kaita.", en: "I wrote the test.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書いた", ro: "kaita", role: "Verb (plain past, godan -k→-ita)", meaning: "wrote" }
          ] },
        { jp: "急いだ。", ro: "isoida.", en: "I hurried.",
          tokens: [
            { t: "急いだ", ro: "isoida", role: "Verb (plain past, godan -g→-ida)", meaning: "hurried" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 13 — POTENTIAL / VOLITIONAL / IMPERATIVE
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Potential / Volitional",
      title: "Potential form — 'can do' / 'be able to do'",
      formula: "Group 1: -u → -eru (飲む → 飲める, 書く → 書ける)  ·  Group 2: drop -る, add -られる (食べる → 食べられる)  ·  Group 3: できる / 来られる",
      description: "Says someone CAN do something. Important: with potential verbs the object particle changes from を to が (日本語が話せます — I can speak Japanese, NOT 日本語を話せます).",
      person: "Any",
      tense: "Present (negative: -ない, past: -た etc.)",
      main: {
        jp: "日本語が話せます。",
        ro: "nihongo ga hanasemasu.",
        en: "I can speak Japanese.",
        tokens: [
          { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese language" },
          { t: "が", ro: "ga", role: "Particle — subject (with potential)", meaning: "(replaces を with potential verbs)" },
          { t: "話せます", ro: "hanasemasu", role: "Verb (potential polite)", meaning: "can speak" }
        ]
      },
      examples: [
        { jp: "刺身が食べられます。", ro: "sashimi ga taberaremasu.", en: "I can eat sashimi.",
          tokens: [
            { t: "刺身", ro: "sashimi", role: "Noun", meaning: "sashimi" },
            { t: "が", ro: "ga", role: "Particle — subject (potential)", meaning: "marks 'what can be eaten'" },
            { t: "食べられます", ro: "taberaremasu", role: "Verb (potential polite, ichidan)", meaning: "can eat" }
          ] },
        { jp: "コードが書けます。", ro: "kōdo ga kakemasu.", en: "I can write code.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "が", ro: "ga", role: "Particle — subject (potential)", meaning: "subject of skill" },
            { t: "書けます", ro: "kakemasu", role: "Verb (potential polite)", meaning: "can write" }
          ] },
        { jp: "明日、来られます。", ro: "ashita, koraremasu.", en: "I can come tomorrow.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "来られます", ro: "koraremasu", role: "Verb (potential polite, irregular)", meaning: "can come" }
          ] },
        { jp: "これはできます。", ro: "kore wa dekimasu.", en: "I can do this.",
          tokens: [
            { t: "これ", ro: "kore", role: "Demonstrative", meaning: "this" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
            { t: "できます", ro: "dekimasu", role: "Verb (potential of する, polite)", meaning: "can do" }
          ] },
        { jp: "車が運転できません。", ro: "kuruma ga unten dekimasen.", en: "I can't drive a car.",
          tokens: [
            { t: "車", ro: "kuruma", role: "Noun", meaning: "car" },
            { t: "が", ro: "ga", role: "Particle — subject (potential)", meaning: "subject" },
            { t: "運転", ro: "unten", role: "Noun (verbal)", meaning: "driving" },
            { t: "できません", ro: "dekimasen", role: "Verb (potential negative)", meaning: "cannot do" }
          ] },
        { jp: "漢字が読めません。", ro: "kanji ga yomemasen.", en: "I can't read kanji.",
          tokens: [
            { t: "漢字", ro: "kanji", role: "Noun", meaning: "kanji" },
            { t: "が", ro: "ga", role: "Particle — subject (potential)", meaning: "subject" },
            { t: "読めません", ro: "yomemasen", role: "Verb (potential negative)", meaning: "cannot read" }
          ] },
        { jp: "今、行けません。", ro: "ima, ikemasen.", en: "I can't go now.",
          tokens: [
            { t: "今", ro: "ima", role: "Time noun", meaning: "now" },
            { t: "行けません", ro: "ikemasen", role: "Verb (potential negative, polite)", meaning: "cannot go" }
          ] }
      ]
    },

    {
      category: "Potential / Volitional",
      title: "Plain volitional — 'let's' / 'I will' (casual)",
      formula: "Group 1: -u → -ō (飲む → 飲もう, 行く → 行こう)  ·  Group 2: drop -る, add -よう (食べる → 食べよう)  ·  Group 3: しよう / 来よう",
      description: "Casual version of ましょう. Used between friends, in self-talk ('I will…'), and as 'let's'. Often combined with か for soft suggestions: 行こうか? = 'shall we go?'.",
      person: "1st person + listener (we)",
      tense: "Volitional (intent)",
      main: {
        jp: "一緒に行こう。",
        ro: "issho ni ikō.",
        en: "Let's go together. (casual)",
        tokens: [
          { t: "一緒に", ro: "issho ni", role: "Adverb phrase", meaning: "together" },
          { t: "行こう", ro: "ikō", role: "Verb (plain volitional, godan)", meaning: "let's go" }
        ]
      },
      examples: [
        { jp: "コーヒーを飲もう。", ro: "kōhī o nomō.", en: "Let's drink coffee.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲もう", ro: "nomō", role: "Verb (plain volitional)", meaning: "let's drink" }
          ] },
        { jp: "明日、何を食べよう？", ro: "ashita, nani o tabeyō?", en: "What shall we eat tomorrow?",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "何", ro: "nani", role: "Question word", meaning: "what" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べよう", ro: "tabeyō", role: "Verb (plain volitional, ichidan)", meaning: "shall (we) eat" }
          ] },
        { jp: "ちょっと休もう。", ro: "chotto yasumō.", en: "Let's take a short break.",
          tokens: [
            { t: "ちょっと", ro: "chotto", role: "Adverb", meaning: "a little / briefly" },
            { t: "休もう", ro: "yasumō", role: "Verb (plain volitional)", meaning: "let's rest" }
          ] },
        { jp: "テストを書こう。", ro: "tesuto o kakō.", en: "Let's write the test.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書こう", ro: "kakō", role: "Verb (plain volitional)", meaning: "let's write" }
          ] },
        { jp: "宿題をしよう。", ro: "shukudai o shiyō.", en: "Let's do the homework.",
          tokens: [
            { t: "宿題", ro: "shukudai", role: "Noun", meaning: "homework" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "しよう", ro: "shiyō", role: "Verb (plain volitional, irregular)", meaning: "let's do" }
          ] },
        { jp: "新しいパソコンを買おう。", ro: "atarashii pasokon o kaō.", en: "Let's buy a new PC.",
          tokens: [
            { t: "新しい", ro: "atarashii", role: "i-adjective", meaning: "new" },
            { t: "パソコン", ro: "pasokon", role: "Noun", meaning: "PC" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "買おう", ro: "kaō", role: "Verb (plain volitional)", meaning: "let's buy" }
          ] },
        { jp: "もう寝よう。", ro: "mō neyō.", en: "Let's go to sleep already.",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "already / now" },
            { t: "寝よう", ro: "neyō", role: "Verb (plain volitional, ichidan)", meaning: "let's sleep" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 14 — CONDITIONALS / COMPARISON
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Conditionals / Comparison",
      title: "Conditionals — ば / たら / なら / と (four ways to say 'if')",
      formula: "[Verb-ば] | [Verb-たら] | [Verb-なら] | [Verb-と] + result clause",
      description: "Four conditionals with subtle differences. ば — general 'if A then B' (often hypothetical). たら — 'when/once A happens, then B' (concrete result, common in speech). なら — 'if it's the case that A' (presumes A is being discussed). と — 'whenever A, B' (automatic result, recipes / mechanical).",
      person: "Any",
      tense: "Any",
      main: {
        jp: "雨が降ったら、家にいます。",
        ro: "ame ga futtara, ie ni imasu.",
        en: "If/when it rains, I'll stay home. (たら)",
        tokens: [
          { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject marker" },
          { t: "降ったら", ro: "futtara", role: "Verb (plain past + ら = conditional)", meaning: "if/when (it) falls" },
          { t: "家", ro: "ie", role: "Noun", meaning: "home" },
          { t: "に", ro: "ni", role: "Particle — location", meaning: "at" },
          { t: "います", ro: "imasu", role: "Verb (existence)", meaning: "stay" }
        ]
      },
      examples: [
        { jp: "時間があれば、行きます。", ro: "jikan ga areba, ikimasu.", en: "If I have time, I'll go. (ば)",
          tokens: [
            { t: "時間", ro: "jikan", role: "Noun", meaning: "time" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あれば", ro: "areba", role: "Verb (plain + ば = conditional)", meaning: "if (I) have" },
            { t: "行きます", ro: "ikimasu", role: "Verb (polite)", meaning: "go" }
          ] },
        { jp: "東京に行くなら、新幹線がいいよ。", ro: "tōkyō ni iku nara, shinkansen ga ii yo.", en: "If you're going to Tokyo, the bullet train is best. (なら)",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行く", ro: "iku", role: "Verb (plain)", meaning: "go" },
            { t: "なら", ro: "nara", role: "Particle — conditional (presumed)", meaning: "if it's the case" },
            { t: "新幹線", ro: "shinkansen", role: "Noun", meaning: "bullet train" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "春になると、桜が咲く。", ro: "haru ni naru to, sakura ga saku.", en: "When spring comes, cherry blossoms bloom. (と — automatic)",
          tokens: [
            { t: "春", ro: "haru", role: "Noun", meaning: "spring" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "to" },
            { t: "なる", ro: "naru", role: "Verb (plain)", meaning: "become" },
            { t: "と", ro: "to", role: "Particle — conditional (automatic)", meaning: "when / whenever" },
            { t: "桜", ro: "sakura", role: "Noun", meaning: "cherry blossom" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "咲く", ro: "saku", role: "Verb (plain)", meaning: "bloom" }
          ] },
        { jp: "安ければ、買います。", ro: "yasukereba, kaimasu.", en: "If it's cheap, I'll buy it. (i-adj + ば)",
          tokens: [
            { t: "安ければ", ro: "yasukereba", role: "i-adjective + ば conditional", meaning: "if (it's) cheap" },
            { t: "買います", ro: "kaimasu", role: "Verb (polite)", meaning: "buy" }
          ] },
        { jp: "終わったら、教えてください。", ro: "owattara, oshiete kudasai.", en: "When you finish, please tell me.",
          tokens: [
            { t: "終わったら", ro: "owattara", role: "Verb (たら conditional)", meaning: "when (it) ends" },
            { t: "教えて", ro: "oshiete", role: "Verb (て-form)", meaning: "tell" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "急がないと、遅刻するよ。", ro: "isoganai to, chikoku suru yo.", en: "If you don't hurry, you'll be late.",
          tokens: [
            { t: "急がない", ro: "isoganai", role: "Verb (plain negative)", meaning: "not hurry" },
            { t: "と", ro: "to", role: "Particle — conditional", meaning: "if / when" },
            { t: "遅刻する", ro: "chikoku suru", role: "Verb (plain)", meaning: "be late" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(warning)" }
          ] },
        { jp: "コードがバグっていたら、直してください。", ro: "kōdo ga bagutte itara, naoshite kudasai.", en: "If the code is buggy, please fix it.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "バグっていたら", ro: "bagutte itara", role: "Verb (continuous + たら)", meaning: "if (it) is buggy" },
            { t: "直して", ro: "naoshite", role: "Verb (て-form)", meaning: "fix" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] }
      ]
    },

    {
      category: "Conditionals / Comparison",
      title: "Comparison — より / ほうが / 一番 (more, more-of-the-two, most)",
      formula: "A は B より [adjective]   ·   A の ほうが [adjective]   ·   [Group] で 一番 [adjective]",
      description: "Three core comparison patterns. A は B より = 'A is more X than B'. A の ほうが [adj] = 'A is the more X (of the two)'. 一番 [adj] = 'the most X / the best'.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "犬より猫のほうが好きです。",
        ro: "inu yori neko no hō ga suki desu.",
        en: "I like cats more than dogs.",
        tokens: [
          { t: "犬", ro: "inu", role: "Noun", meaning: "dog" },
          { t: "より", ro: "yori", role: "Particle — comparison ('than')", meaning: "than" },
          { t: "猫", ro: "neko", role: "Noun", meaning: "cat" },
          { t: "の", ro: "no", role: "Particle — possessive/connector", meaning: "of" },
          { t: "ほうが", ro: "hō ga", role: "Phrase — 'the side / direction'", meaning: "more (the cat-side)" },
          { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" }
        ]
      },
      examples: [
        { jp: "東京は大阪より大きいです。", ro: "tōkyō wa ōsaka yori ōkii desu.", en: "Tokyo is bigger than Osaka.",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "大阪", ro: "ōsaka", role: "Proper noun", meaning: "Osaka" },
            { t: "より", ro: "yori", role: "Particle — comparison", meaning: "than" },
            { t: "大きい", ro: "ōkii", role: "i-adjective", meaning: "big" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "寿司が一番好きです。", ro: "sushi ga ichiban suki desu.", en: "I like sushi the best.",
          tokens: [
            { t: "寿司", ro: "sushi", role: "Noun", meaning: "sushi" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "一番", ro: "ichiban", role: "Adverb (most)", meaning: "the most / best" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "コーヒーよりお茶のほうがいい。", ro: "kōhī yori ocha no hō ga ii.", en: "Tea is better than coffee.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "より", ro: "yori", role: "Particle — comparison", meaning: "than" },
            { t: "お茶", ro: "ocha", role: "Noun", meaning: "tea" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "ほうが", ro: "hō ga", role: "Phrase — direction/side", meaning: "the side of" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" }
          ] },
        { jp: "クラスで誰が一番背が高いですか？", ro: "kurasu de dare ga ichiban se ga takai desu ka?", en: "Who is tallest in the class?",
          tokens: [
            { t: "クラス", ro: "kurasu", role: "Noun (loanword)", meaning: "class" },
            { t: "で", ro: "de", role: "Particle — scope", meaning: "in/within" },
            { t: "誰", ro: "dare", role: "Question word", meaning: "who" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "一番", ro: "ichiban", role: "Adverb", meaning: "most" },
            { t: "背", ro: "se", role: "Noun", meaning: "stature/back" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "高い", ro: "takai", role: "i-adjective", meaning: "tall" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "夏より冬のほうが好きです。", ro: "natsu yori fuyu no hō ga suki desu.", en: "I prefer winter over summer.",
          tokens: [
            { t: "夏", ro: "natsu", role: "Noun", meaning: "summer" },
            { t: "より", ro: "yori", role: "Particle — comparison", meaning: "than" },
            { t: "冬", ro: "fuyu", role: "Noun", meaning: "winter" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "ほうが", ro: "hō ga", role: "Phrase", meaning: "more" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "このコードが一番速いです。", ro: "kono kōdo ga ichiban hayai desu.", en: "This code is the fastest.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "一番", ro: "ichiban", role: "Adverb", meaning: "most" },
            { t: "速い", ro: "hayai", role: "i-adjective", meaning: "fast" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "新幹線は車より速い。", ro: "shinkansen wa kuruma yori hayai.", en: "The bullet train is faster than a car.",
          tokens: [
            { t: "新幹線", ro: "shinkansen", role: "Noun", meaning: "bullet train" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "車", ro: "kuruma", role: "Noun", meaning: "car" },
            { t: "より", ro: "yori", role: "Particle — comparison", meaning: "than" },
            { t: "速い", ro: "hayai", role: "i-adjective", meaning: "fast" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 15 — PREFERENCES / GIVING-RECEIVING / QUOTATIONS
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Preferences / Quotations",
      title: "〜が好き / 嫌い / 上手 / 下手 — preferences and skills (use が, not を)",
      formula: "[Topic は] [Object が] 好き / 嫌い / 上手 / 下手 です",
      description: "Liking, hating, being skilled or poor at something uses **が**, NOT を. The thing you like is treated as the SUBJECT of being-liked, not as a direct object of an action.",
      person: "1st person primarily; for others, often softened",
      tense: "Present (negative: 〜じゃありません)",
      main: {
        jp: "私は寿司が好きです。",
        ro: "watashi wa sushi ga suki desu.",
        en: "I like sushi.",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic marker" },
          { t: "寿司", ro: "sushi", role: "Noun (object of preference)", meaning: "sushi" },
          { t: "が", ro: "ga", role: "Particle — subject (preference)", meaning: "marks the thing liked" },
          { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" }
        ]
      },
      examples: [
        { jp: "コーヒーが嫌いです。", ro: "kōhī ga kirai desu.", en: "I hate coffee.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "が", ro: "ga", role: "Particle — subject (preference)", meaning: "marks the thing hated" },
            { t: "嫌い", ro: "kirai", role: "na-adjective", meaning: "hated / disliked" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼は日本語が上手です。", ro: "kare wa nihongo ga jōzu desu.", en: "He is good at Japanese.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (3rd)", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "日本語", ro: "nihongo", role: "Noun", meaning: "Japanese" },
            { t: "が", ro: "ga", role: "Particle — subject (skill)", meaning: "marks the skill" },
            { t: "上手", ro: "jōzu", role: "na-adjective", meaning: "skilled" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "私は料理が下手です。", ro: "watashi wa ryōri ga heta desu.", en: "I'm bad at cooking.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "料理", ro: "ryōri", role: "Noun", meaning: "cooking" },
            { t: "が", ro: "ga", role: "Particle — subject (skill)", meaning: "marks the skill" },
            { t: "下手", ro: "heta", role: "na-adjective", meaning: "unskilled" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "ラーメンが大好きです。", ro: "rāmen ga daisuki desu.", en: "I love ramen.",
          tokens: [
            { t: "ラーメン", ro: "rāmen", role: "Noun", meaning: "ramen" },
            { t: "が", ro: "ga", role: "Particle — subject (preference)", meaning: "marks the thing loved" },
            { t: "大好き", ro: "daisuki", role: "na-adjective (intensified)", meaning: "loved" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "猫より犬のほうが好きです。", ro: "neko yori inu no hō ga suki desu.", en: "I prefer dogs to cats.",
          tokens: [
            { t: "猫", ro: "neko", role: "Noun", meaning: "cat" },
            { t: "より", ro: "yori", role: "Particle — comparison", meaning: "than" },
            { t: "犬", ro: "inu", role: "Noun", meaning: "dog" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "ほうが", ro: "hō ga", role: "Phrase", meaning: "more" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "野菜があまり好きじゃない。", ro: "yasai ga amari suki ja nai.", en: "I don't really like vegetables.",
          tokens: [
            { t: "野菜", ro: "yasai", role: "Noun", meaning: "vegetable" },
            { t: "が", ro: "ga", role: "Particle — subject (preference)", meaning: "subject" },
            { t: "あまり", ro: "amari", role: "Adverb (with negative)", meaning: "not much" },
            { t: "好き", ro: "suki", role: "na-adjective", meaning: "liked" },
            { t: "じゃない", ro: "ja nai", role: "Casual negative copula", meaning: "is not" }
          ] },
        { jp: "彼女はギターが上手です。", ro: "kanojo wa gitā ga jōzu desu.", en: "She's good at guitar.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun (3rd)", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "ギター", ro: "gitā", role: "Noun (loanword)", meaning: "guitar" },
            { t: "が", ro: "ga", role: "Particle — subject (skill)", meaning: "subject" },
            { t: "上手", ro: "jōzu", role: "na-adjective", meaning: "skilled" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] }
      ]
    },

    {
      category: "Preferences / Quotations",
      title: "Giving / receiving — あげる / もらう / くれる (direction matters!)",
      formula: "I → others: あげる   ·   I receive: もらう   ·   Others → me: くれる",
      description: "Three different verbs depending on the DIRECTION of giving. あげる — I give to someone (or 3rd party gives to 3rd party). もらう — I receive. くれる — someone gives TO ME (in-group). This distinction is unique to Japanese and required for politeness.",
      person: "Direction-sensitive (1st vs others matters!)",
      tense: "Any",
      main: {
        jp: "田中さんに本をあげました。",
        ro: "tanaka-san ni hon o agemashita.",
        en: "I gave Tanaka a book.",
        tokens: [
          { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
          { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
          { t: "に", ro: "ni", role: "Particle — recipient", meaning: "to" },
          { t: "本", ro: "hon", role: "Noun (gift)", meaning: "book" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "あげました", ro: "agemashita", role: "Verb (polite past — give to others)", meaning: "gave" }
        ]
      },
      examples: [
        { jp: "田中さんから本をもらいました。", ro: "tanaka-san kara hon o moraimashita.", en: "I received a book from Tanaka.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "から", ro: "kara", role: "Particle — origin", meaning: "from" },
            { t: "本", ro: "hon", role: "Noun", meaning: "book" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "もらいました", ro: "moraimashita", role: "Verb (polite past — receive)", meaning: "received" }
          ] },
        { jp: "母がプレゼントをくれました。", ro: "haha ga purezento o kuremashita.", en: "Mom gave me a present.",
          tokens: [
            { t: "母", ro: "haha", role: "Noun", meaning: "mother" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "プレゼント", ro: "purezento", role: "Noun (loanword)", meaning: "present" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "くれました", ro: "kuremashita", role: "Verb (polite past — give to me)", meaning: "gave (to me)" }
          ] },
        { jp: "彼女に花をあげる。", ro: "kanojo ni hana o ageru.", en: "I'll give flowers to my girlfriend.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun", meaning: "girlfriend" },
            { t: "に", ro: "ni", role: "Particle — recipient", meaning: "to" },
            { t: "花", ro: "hana", role: "Noun", meaning: "flower" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "あげる", ro: "ageru", role: "Verb (plain — give to others)", meaning: "give" }
          ] },
        { jp: "友達からチョコをもらった。", ro: "tomodachi kara choko o moratta.", en: "I got chocolate from a friend.",
          tokens: [
            { t: "友達", ro: "tomodachi", role: "Noun", meaning: "friend" },
            { t: "から", ro: "kara", role: "Particle — origin", meaning: "from" },
            { t: "チョコ", ro: "choko", role: "Noun (loanword)", meaning: "chocolate" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "もらった", ro: "moratta", role: "Verb (plain past — receive)", meaning: "received" }
          ] },
        { jp: "上司がアドバイスをくれた。", ro: "jōshi ga adobaisu o kureta.", en: "My boss gave me advice.",
          tokens: [
            { t: "上司", ro: "jōshi", role: "Noun", meaning: "boss" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "アドバイス", ro: "adobaisu", role: "Noun (loanword)", meaning: "advice" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "くれた", ro: "kureta", role: "Verb (plain past — give to me)", meaning: "gave (to me)" }
          ] },
        { jp: "弟にお小遣いをあげる。", ro: "otōto ni okozukai o ageru.", en: "I give my younger brother an allowance.",
          tokens: [
            { t: "弟", ro: "otōto", role: "Noun", meaning: "younger brother" },
            { t: "に", ro: "ni", role: "Particle — recipient", meaning: "to" },
            { t: "お小遣い", ro: "okozukai", role: "Noun", meaning: "allowance / pocket money" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "あげる", ro: "ageru", role: "Verb (plain — give to others)", meaning: "give" }
          ] },
        { jp: "山田さんが助けてくれました。", ro: "yamada-san ga tasukete kuremashita.", en: "Yamada helped me. (lit. did me the favor of helping)",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "助けて", ro: "tasukete", role: "Verb (て-form)", meaning: "helping" },
            { t: "くれました", ro: "kuremashita", role: "Auxiliary (favor done for me)", meaning: "did (for me)" }
          ] }
      ]
    },

    {
      category: "Preferences / Quotations",
      title: "Quotations — 〜と言う / 〜と思う / 〜って (saying & thinking)",
      formula: "[Quoted text in plain form] と + 言う / 思う / 聞く ...   |   casual: 〜って",
      description: "と marks the end of a quotation. Use plain form inside the quote, then と + verb of speech/thought. Casual conversation often uses って instead of と.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "雨が降ると思います。",
        ro: "ame ga furu to omoimasu.",
        en: "I think it will rain.",
        tokens: [
          { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
          { t: "降る", ro: "furu", role: "Verb (plain — quoted)", meaning: "fall (it rains)" },
          { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote ends)" },
          { t: "思います", ro: "omoimasu", role: "Verb (polite — think)", meaning: "think" }
        ]
      },
      examples: [
        { jp: "田中さんは「行きます」と言いました。", ro: "tanaka-san wa 'ikimasu' to iimashita.", en: "Tanaka said 'I'll go.'",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "「行きます」", ro: "ikimasu", role: "Direct quote", meaning: "'I'll go'" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(end of quote)" },
            { t: "言いました", ro: "iimashita", role: "Verb (polite past — say)", meaning: "said" }
          ] },
        { jp: "面白いと思った。", ro: "omoshiroi to omotta.", en: "I thought it was interesting.",
          tokens: [
            { t: "面白い", ro: "omoshiroi", role: "i-adjective (quoted)", meaning: "interesting" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote)" },
            { t: "思った", ro: "omotta", role: "Verb (plain past — think)", meaning: "thought" }
          ] },
        { jp: "彼女は綺麗だと思います。", ro: "kanojo wa kirei da to omoimasu.", en: "I think she's pretty. (note: な-adj needs だ before と)",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "綺麗", ro: "kirei", role: "na-adjective", meaning: "pretty" },
            { t: "だ", ro: "da", role: "Plain copula (required before と)", meaning: "is" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote)" },
            { t: "思います", ro: "omoimasu", role: "Verb (polite — think)", meaning: "think" }
          ] },
        { jp: "明日休みだって。", ro: "ashita yasumi datte.", en: "I heard tomorrow's a day off. (って casual)",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "休み", ro: "yasumi", role: "Noun", meaning: "day off" },
            { t: "だって", ro: "datte", role: "Casual quotation marker", meaning: "(I heard / it's said)" }
          ] },
        { jp: "「お疲れさま」と言ってください。", ro: "'otsukaresama' to itte kudasai.", en: "Please say 'good work.'",
          tokens: [
            { t: "「お疲れさま」", ro: "otsukaresama", role: "Direct quote", meaning: "'good work'" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote end)" },
            { t: "言って", ro: "itte", role: "Verb (て-form of 言う)", meaning: "say" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "テストは難しいと聞きました。", ro: "tesuto wa muzukashii to kikimashita.", en: "I heard the test is difficult.",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "難しい", ro: "muzukashii", role: "i-adjective", meaning: "difficult" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote)" },
            { t: "聞きました", ro: "kikimashita", role: "Verb (polite past — hear)", meaning: "heard" }
          ] },
        { jp: "そうじゃないと思う。", ro: "sō ja nai to omou.", en: "I don't think that's the case.",
          tokens: [
            { t: "そう", ro: "sō", role: "Adverb", meaning: "so / that way" },
            { t: "じゃない", ro: "ja nai", role: "Casual negative copula", meaning: "is not" },
            { t: "と", ro: "to", role: "Particle — quotation", meaning: "(quote)" },
            { t: "思う", ro: "omou", role: "Verb (plain — think)", meaning: "think" }
          ] }
      ]
    },
    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 16 — PERMISSION / OBLIGATION / PROHIBITION
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Permission / Obligation",
      title: "〜てもいい / 〜てはいけない — May / Must not",
      formula: "[Verb-て] もいいです (may, OK to) ↔ [Verb-て] はいけません (must not)",
      description: "Both are formed from the て-form. もいい = permission (may, allowed to). はいけない = prohibition (must not). Casual versions: 〜てもいい / 〜ちゃダメ.",
      person: "Often 1st (asking) or 2nd (telling)",
      tense: "Present",
      main: {
        jp: "ここで写真を撮ってもいいですか？",
        ro: "koko de shashin o totte mo ii desu ka?",
        en: "May I take a photo here?",
        tokens: [
          { t: "ここ", ro: "koko", role: "Demonstrative (place)", meaning: "here" },
          { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
          { t: "写真", ro: "shashin", role: "Noun", meaning: "photo" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "撮って", ro: "totte", role: "Verb (て-form of 撮る)", meaning: "taking" },
          { t: "も", ro: "mo", role: "Particle — also/even", meaning: "even" },
          { t: "いい", ro: "ii", role: "i-adjective", meaning: "good / OK" },
          { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
          { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
        ]
      },
      examples: [
        { jp: "食べてもいいですよ。", ro: "tabete mo ii desu yo.", en: "You may eat it.",
          tokens: [
            { t: "食べて", ro: "tabete", role: "Verb (て-form)", meaning: "eating" },
            { t: "も", ro: "mo", role: "Particle — even", meaning: "even" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "OK" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "ここでタバコを吸ってはいけません。", ro: "koko de tabako o sutte wa ikemasen.", en: "You must not smoke here.",
          tokens: [
            { t: "ここ", ro: "koko", role: "Demonstrative", meaning: "here" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "タバコ", ro: "tabako", role: "Noun", meaning: "cigarette" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "吸って", ro: "sutte", role: "Verb (て-form)", meaning: "smoking" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "いけません", ro: "ikemasen", role: "Verb (polite negative)", meaning: "must not / not allowed" }
          ] },
        { jp: "コードを見てもいいですか？", ro: "kōdo o mite mo ii desu ka?", en: "May I see the code?",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見て", ro: "mite", role: "Verb (て-form)", meaning: "seeing" },
            { t: "も", ro: "mo", role: "Particle", meaning: "even" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "OK" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "授業中にスマホを使ってはいけません。", ro: "jugyō-chū ni sumaho o tsukatte wa ikemasen.", en: "You must not use your smartphone during class.",
          tokens: [
            { t: "授業中", ro: "jugyō-chū", role: "Noun (during)", meaning: "during class" },
            { t: "に", ro: "ni", role: "Particle — time/period", meaning: "in / at" },
            { t: "スマホ", ro: "sumaho", role: "Noun (loanword)", meaning: "smartphone" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "使って", ro: "tsukatte", role: "Verb (て-form)", meaning: "using" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "いけません", ro: "ikemasen", role: "Verb (polite neg)", meaning: "not allowed" }
          ] },
        { jp: "明日休んでもいいですか？", ro: "ashita yasunde mo ii desu ka?", en: "May I take tomorrow off?",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "休んで", ro: "yasunde", role: "Verb (て-form of 休む)", meaning: "rest / take off" },
            { t: "も", ro: "mo", role: "Particle", meaning: "even" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "OK" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "本番環境を直接いじってはいけません。", ro: "honban kankyō o chokusetsu ijitte wa ikemasen.", en: "You must not directly touch the production environment.",
          tokens: [
            { t: "本番環境", ro: "honban kankyō", role: "Noun (compound)", meaning: "production environment" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "直接", ro: "chokusetsu", role: "Adverb", meaning: "directly" },
            { t: "いじって", ro: "ijitte", role: "Verb (て-form of いじる)", meaning: "touching" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "いけません", ro: "ikemasen", role: "Verb (polite neg)", meaning: "not allowed" }
          ] },
        { jp: "もう帰ってもいい？", ro: "mō kaette mo ii?", en: "Can I go home now? (casual)",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "already" },
            { t: "帰って", ro: "kaette", role: "Verb (て-form)", meaning: "returning home" },
            { t: "も", ro: "mo", role: "Particle", meaning: "even" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "OK" }
          ] }
      ]
    },

    {
      category: "Permission / Obligation",
      title: "〜なければなりません — Must do (obligation)",
      formula: "[Verb-plain negative drop -い] + ければなりません  (casual: 〜なきゃ / 〜なくちゃ)",
      description: "Says you MUST do something. Take the verb's plain negative (飲ま-ない), drop the い, add ければなりません. Casual contractions: 〜なきゃ (informal must) and 〜なくちゃ. Also: 〜ないといけない is equivalent.",
      person: "Any",
      tense: "Present obligation",
      main: {
        jp: "宿題をしなければなりません。",
        ro: "shukudai o shinakereba narimasen.",
        en: "I have to do my homework.",
        tokens: [
          { t: "宿題", ro: "shukudai", role: "Noun", meaning: "homework" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "しなければ", ro: "shinakereba", role: "Verb (negative-conditional)", meaning: "if not do…" },
          { t: "なりません", ro: "narimasen", role: "Verb (polite negative — 'won't become')", meaning: "won't do (= must do)" }
        ]
      },
      examples: [
        { jp: "明日早く起きなければなりません。", ro: "ashita hayaku okinakereba narimasen.", en: "I have to wake up early tomorrow.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "早く", ro: "hayaku", role: "Adverb", meaning: "early" },
            { t: "起きなければ", ro: "okinakereba", role: "Verb (neg-conditional)", meaning: "if not wake up" },
            { t: "なりません", ro: "narimasen", role: "Auxiliary (must)", meaning: "must" }
          ] },
        { jp: "薬を飲まなきゃ。", ro: "kusuri o nomanakya.", en: "I gotta take my medicine. (casual)",
          tokens: [
            { t: "薬", ro: "kusuri", role: "Noun", meaning: "medicine" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲まなきゃ", ro: "nomanakya", role: "Verb (casual must)", meaning: "gotta drink" }
          ] },
        { jp: "この問題を直さないといけない。", ro: "kono mondai o naosanai to ikenai.", en: "I have to fix this problem.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "直さない", ro: "naosanai", role: "Verb (plain negative)", meaning: "not fix" },
            { t: "と", ro: "to", role: "Particle — conditional", meaning: "if" },
            { t: "いけない", ro: "ikenai", role: "Verb (plain negative)", meaning: "not OK (= must)" }
          ] },
        { jp: "電車に乗らなければなりません。", ro: "densha ni noranakereba narimasen.", en: "I have to take the train.",
          tokens: [
            { t: "電車", ro: "densha", role: "Noun", meaning: "train" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "(get on)" },
            { t: "乗らなければ", ro: "noranakereba", role: "Verb (neg-conditional)", meaning: "if not ride" },
            { t: "なりません", ro: "narimasen", role: "Auxiliary (must)", meaning: "must" }
          ] },
        { jp: "テストを書かなくちゃ。", ro: "tesuto o kakanakucha.", en: "I gotta write the test. (casual)",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書かなくちゃ", ro: "kakanakucha", role: "Verb (casual must)", meaning: "gotta write" }
          ] },
        { jp: "デプロイ前にチェックしなければなりません。", ro: "depuroi mae ni chekku shinakereba narimasen.", en: "I must check before deploying.",
          tokens: [
            { t: "デプロイ", ro: "depuroi", role: "Noun", meaning: "deploy" },
            { t: "前", ro: "mae", role: "Noun", meaning: "before" },
            { t: "に", ro: "ni", role: "Particle — time", meaning: "at/on" },
            { t: "チェック", ro: "chekku", role: "Noun (loanword)", meaning: "check" },
            { t: "しなければ", ro: "shinakereba", role: "Verb (neg-conditional)", meaning: "if not do" },
            { t: "なりません", ro: "narimasen", role: "Auxiliary (must)", meaning: "must" }
          ] },
        { jp: "もう寝なきゃ。", ro: "mō nenakya.", en: "Gotta sleep now. (casual)",
          tokens: [
            { t: "もう", ro: "mō", role: "Adverb", meaning: "already / now" },
            { t: "寝なきゃ", ro: "nenakya", role: "Verb (casual must)", meaning: "gotta sleep" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 17 — EXPERIENCE / WHILE / LISTING / ADVICE / INTENT
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Time / Experience / Plans",
      title: "〜たことがある — Have done X before (experience)",
      formula: "[Verb plain past] + ことがあります",
      description: "Says you HAVE EXPERIENCED X (at least once in your life). Take the plain past form (〜た / 〜だ) and add ことがあります. Negative: 〜たことがありません = haven't done X.",
      person: "Any",
      tense: "Past experience",
      main: {
        jp: "日本に行ったことがあります。",
        ro: "nihon ni itta koto ga arimasu.",
        en: "I have been to Japan (before).",
        tokens: [
          { t: "日本", ro: "nihon", role: "Proper noun", meaning: "Japan" },
          { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
          { t: "行った", ro: "itta", role: "Verb (plain past)", meaning: "went" },
          { t: "こと", ro: "koto", role: "Noun (formal 'thing/fact')", meaning: "experience" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
          { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "exists (= have)" }
        ]
      },
      examples: [
        { jp: "寿司を食べたことがあります。", ro: "sushi o tabeta koto ga arimasu.", en: "I have eaten sushi before.",
          tokens: [
            { t: "寿司", ro: "sushi", role: "Noun", meaning: "sushi" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べた", ro: "tabeta", role: "Verb (plain past)", meaning: "ate" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "have" }
          ] },
        { jp: "富士山を見たことがあります。", ro: "fujisan o mita koto ga arimasu.", en: "I've seen Mt. Fuji.",
          tokens: [
            { t: "富士山", ro: "fujisan", role: "Proper noun", meaning: "Mt. Fuji" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見た", ro: "mita", role: "Verb (plain past)", meaning: "saw" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "have" }
          ] },
        { jp: "ラーメンを作ったことがありません。", ro: "rāmen o tsukutta koto ga arimasen.", en: "I have never made ramen.",
          tokens: [
            { t: "ラーメン", ro: "rāmen", role: "Noun", meaning: "ramen" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "作った", ro: "tsukutta", role: "Verb (plain past)", meaning: "made" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "ありません", ro: "arimasen", role: "Verb (negative existence)", meaning: "don't have" }
          ] },
        { jp: "本番でバグを直したことがあります。", ro: "honban de bagu o naoshita koto ga arimasu.", en: "I have fixed bugs in production.",
          tokens: [
            { t: "本番", ro: "honban", role: "Noun (IT)", meaning: "production" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "in" },
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "直した", ro: "naoshita", role: "Verb (plain past)", meaning: "fixed" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "have" }
          ] },
        { jp: "彼に会ったことはない。", ro: "kare ni atta koto wa nai.", en: "I haven't met him before. (plain casual)",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "to" },
            { t: "会った", ro: "atta", role: "Verb (plain past)", meaning: "met" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "ない", ro: "nai", role: "Verb (plain neg existence)", meaning: "don't have" }
          ] },
        { jp: "京都に行ったことがありますか？", ro: "kyōto ni itta koto ga arimasu ka?", en: "Have you been to Kyoto?",
          tokens: [
            { t: "京都", ro: "kyōto", role: "Proper noun", meaning: "Kyoto" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "行った", ro: "itta", role: "Verb (plain past)", meaning: "went" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "have" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "プログラミングを勉強したことがあります。", ro: "puroguramingu o benkyō shita koto ga arimasu.", en: "I have studied programming.",
          tokens: [
            { t: "プログラミング", ro: "puroguramingu", role: "Noun (loanword)", meaning: "programming" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "勉強した", ro: "benkyō shita", role: "Verb (plain past)", meaning: "studied" },
            { t: "こと", ro: "koto", role: "Noun", meaning: "experience" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あります", ro: "arimasu", role: "Verb (existence)", meaning: "have" }
          ] }
      ]
    },

    {
      category: "Time / Experience / Plans",
      title: "〜ながら — While doing X (simultaneous actions)",
      formula: "[Verb-stem] + ながら + [main action]",
      description: "Two things at the same time, with the same person doing both. Take the verb stem (drop ます from 飲み + ます) and add ながら. The main action is the second verb. Note: only works for verbs with the same subject.",
      person: "Same person doing both actions",
      tense: "Any",
      main: {
        jp: "音楽を聞きながら勉強します。",
        ro: "ongaku o kikinagara benkyō shimasu.",
        en: "I study while listening to music.",
        tokens: [
          { t: "音楽", ro: "ongaku", role: "Noun", meaning: "music" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "聞き", ro: "kiki", role: "Verb stem (of 聞く)", meaning: "listen" },
          { t: "ながら", ro: "nagara", role: "Conjunction — while", meaning: "while" },
          { t: "勉強します", ro: "benkyō shimasu", role: "Verb (polite — main)", meaning: "study" }
        ]
      },
      examples: [
        { jp: "コーヒーを飲みながらコードを書きます。", ro: "kōhī o nominagara kōdo o kakimasu.", en: "I write code while drinking coffee.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲み", ro: "nomi", role: "Verb stem", meaning: "drink" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書きます", ro: "kakimasu", role: "Verb (polite — main)", meaning: "write" }
          ] },
        { jp: "テレビを見ながらご飯を食べる。", ro: "terebi o minagara gohan o taberu.", en: "I eat while watching TV.",
          tokens: [
            { t: "テレビ", ro: "terebi", role: "Noun", meaning: "TV" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見", ro: "mi", role: "Verb stem (of 見る)", meaning: "watch" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "ご飯", ro: "gohan", role: "Noun", meaning: "rice / meal" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べる", ro: "taberu", role: "Verb (plain — main)", meaning: "eat" }
          ] },
        { jp: "歩きながら話します。", ro: "arukinagara hanashimasu.", en: "I talk while walking.",
          tokens: [
            { t: "歩き", ro: "aruki", role: "Verb stem (of 歩く)", meaning: "walk" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "話します", ro: "hanashimasu", role: "Verb (polite — main)", meaning: "talk" }
          ] },
        { jp: "電話しながら運転してはいけません。", ro: "denwa shinagara unten shite wa ikemasen.", en: "You must not drive while on the phone.",
          tokens: [
            { t: "電話し", ro: "denwa shi", role: "Verb stem", meaning: "phoning" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "運転して", ro: "unten shite", role: "Verb (て-form)", meaning: "driving" },
            { t: "は", ro: "wa", role: "Particle", meaning: "as for" },
            { t: "いけません", ro: "ikemasen", role: "Auxiliary (prohibition)", meaning: "must not" }
          ] },
        { jp: "働きながら大学に通っています。", ro: "hatarakinagara daigaku ni kayotte imasu.", en: "I attend university while working.",
          tokens: [
            { t: "働き", ro: "hataraki", role: "Verb stem", meaning: "work" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "大学", ro: "daigaku", role: "Noun", meaning: "university" },
            { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
            { t: "通って", ro: "kayotte", role: "Verb (て-form)", meaning: "attending" },
            { t: "います", ro: "imasu", role: "Auxiliary (continuous)", meaning: "am" }
          ] },
        { jp: "笑いながら言いました。", ro: "warainagara iimashita.", en: "He said it while laughing.",
          tokens: [
            { t: "笑い", ro: "warai", role: "Verb stem", meaning: "laugh" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "言いました", ro: "iimashita", role: "Verb (polite past)", meaning: "said" }
          ] },
        { jp: "考えながら答えてください。", ro: "kangaenagara kotaete kudasai.", en: "Please answer while thinking.",
          tokens: [
            { t: "考え", ro: "kangae", role: "Verb stem (of 考える)", meaning: "think" },
            { t: "ながら", ro: "nagara", role: "Conjunction", meaning: "while" },
            { t: "答えて", ro: "kotaete", role: "Verb (て-form)", meaning: "answering" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] }
      ]
    },

    {
      category: "Time / Experience / Plans",
      title: "〜たり〜たり する — Doing things like X and Y",
      formula: "[Verb-plain past] り + [Verb-plain past] り します",
      description: "Used to list a sample of activities (not exhaustive) — 'doing things like X and Y, etc.'. Take the plain past form (〜た) and add り. Usually two or more in a row, then します at the end.",
      person: "Any",
      tense: "Any (set by final します)",
      main: {
        jp: "週末は本を読んだり、映画を見たりします。",
        ro: "shūmatsu wa hon o yondari, eiga o mitari shimasu.",
        en: "On weekends I do things like read books and watch movies.",
        tokens: [
          { t: "週末", ro: "shūmatsu", role: "Time noun", meaning: "weekend" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
          { t: "本", ro: "hon", role: "Noun", meaning: "book" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "読んだり", ro: "yondari", role: "Verb (たり-form)", meaning: "things like reading" },
          { t: "映画", ro: "eiga", role: "Noun", meaning: "movie" },
          { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
          { t: "見たり", ro: "mitari", role: "Verb (たり-form)", meaning: "things like watching" },
          { t: "します", ro: "shimasu", role: "Verb (polite — closes)", meaning: "do" }
        ]
      },
      examples: [
        { jp: "コードを書いたり、レビューしたりします。", ro: "kōdo o kaitari, rebyū shitari shimasu.", en: "I do things like writing code and reviewing.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "書いたり", ro: "kaitari", role: "Verb (たり)", meaning: "things like writing" },
            { t: "レビューしたり", ro: "rebyū shitari", role: "Verb (たり)", meaning: "things like reviewing" },
            { t: "します", ro: "shimasu", role: "Verb (polite — closes)", meaning: "do" }
          ] },
        { jp: "公園で遊んだり、走ったりした。", ro: "kōen de asondari, hashittari shita.", en: "I played and ran (etc.) at the park.",
          tokens: [
            { t: "公園", ro: "kōen", role: "Noun", meaning: "park" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "at" },
            { t: "遊んだり", ro: "asondari", role: "Verb (たり)", meaning: "things like playing" },
            { t: "走ったり", ro: "hashittari", role: "Verb (たり)", meaning: "things like running" },
            { t: "した", ro: "shita", role: "Verb (plain past — closes)", meaning: "did" }
          ] },
        { jp: "土曜日は寝たり、ゲームをしたりしたい。", ro: "doyōbi wa netari, gēmu o shitari shitai.", en: "On Saturday I want to do things like sleep and play games.",
          tokens: [
            { t: "土曜日", ro: "doyōbi", role: "Time noun", meaning: "Saturday" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "寝たり", ro: "netari", role: "Verb (たり)", meaning: "things like sleeping" },
            { t: "ゲーム", ro: "gēmu", role: "Noun", meaning: "game" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "したり", ro: "shitari", role: "Verb (たり)", meaning: "things like doing" },
            { t: "したい", ro: "shitai", role: "Verb stem + たい", meaning: "want to do" }
          ] },
        { jp: "東京で寿司を食べたり、お寺を見たりしました。", ro: "tōkyō de sushi o tabetari, otera o mitari shimashita.", en: "In Tokyo I did things like eat sushi and see temples.",
          tokens: [
            { t: "東京", ro: "tōkyō", role: "Proper noun", meaning: "Tokyo" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "in" },
            { t: "寿司", ro: "sushi", role: "Noun", meaning: "sushi" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "食べたり", ro: "tabetari", role: "Verb (たり)", meaning: "things like eating" },
            { t: "お寺", ro: "otera", role: "Noun", meaning: "temple" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "見たり", ro: "mitari", role: "Verb (たり)", meaning: "things like seeing" },
            { t: "しました", ro: "shimashita", role: "Verb (polite past — closes)", meaning: "did" }
          ] },
        { jp: "歌ったり、踊ったりしましょう。", ro: "utattari, odottari shimashō.", en: "Let's do things like sing and dance.",
          tokens: [
            { t: "歌ったり", ro: "utattari", role: "Verb (たり)", meaning: "things like singing" },
            { t: "踊ったり", ro: "odottari", role: "Verb (たり)", meaning: "things like dancing" },
            { t: "しましょう", ro: "shimashō", role: "Verb (volitional polite)", meaning: "let's do" }
          ] },
        { jp: "雨が降ったり、止んだりしている。", ro: "ame ga futtari, yandari shite iru.", en: "It's raining and stopping (intermittently).",
          tokens: [
            { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "降ったり", ro: "futtari", role: "Verb (たり)", meaning: "things like falling" },
            { t: "止んだり", ro: "yandari", role: "Verb (たり)", meaning: "things like stopping" },
            { t: "して", ro: "shite", role: "Verb (て-form)", meaning: "doing" },
            { t: "いる", ro: "iru", role: "Auxiliary (continuous, plain)", meaning: "is" }
          ] },
        { jp: "メールを送ったり、電話したりしました。", ro: "mēru o okuttari, denwa shitari shimashita.", en: "I did things like send emails and make calls.",
          tokens: [
            { t: "メール", ro: "mēru", role: "Noun", meaning: "email" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "送ったり", ro: "okuttari", role: "Verb (たり)", meaning: "things like sending" },
            { t: "電話したり", ro: "denwa shitari", role: "Verb (たり)", meaning: "things like calling" },
            { t: "しました", ro: "shimashita", role: "Verb (polite past — closes)", meaning: "did" }
          ] }
      ]
    },

    {
      category: "Time / Experience / Plans",
      title: "〜たほうがいい — You should do X (advice)",
      formula: "[Verb plain past] ほうがいいです  (negative: [Verb plain neg] ほうがいいです)",
      description: "Soft advice — 'it's better if you do X' / 'you should do X'. Use plain past form for affirmative advice (drink → 飲んだほうがいい), plain negative for 'shouldn't' (飲まないほうがいい).",
      person: "Usually directed at 2nd person (advising)",
      tense: "Present",
      main: {
        jp: "早く寝たほうがいいですよ。",
        ro: "hayaku neta hō ga ii desu yo.",
        en: "You should sleep early.",
        tokens: [
          { t: "早く", ro: "hayaku", role: "Adverb", meaning: "early" },
          { t: "寝た", ro: "neta", role: "Verb (plain past)", meaning: "slept" },
          { t: "ほう", ro: "hō", role: "Noun ('side / direction')", meaning: "(better)" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
          { t: "いい", ro: "ii", role: "i-adjective", meaning: "good (= better)" },
          { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
          { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
        ]
      },
      examples: [
        { jp: "薬を飲んだほうがいいです。", ro: "kusuri o nonda hō ga ii desu.", en: "You should take medicine.",
          tokens: [
            { t: "薬", ro: "kusuri", role: "Noun", meaning: "medicine" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲んだ", ro: "nonda", role: "Verb (plain past)", meaning: "took" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "タバコは吸わないほうがいいです。", ro: "tabako wa suwanai hō ga ii desu.", en: "You shouldn't smoke.",
          tokens: [
            { t: "タバコ", ro: "tabako", role: "Noun", meaning: "cigarette" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "吸わない", ro: "suwanai", role: "Verb (plain negative)", meaning: "not smoke" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "テストの前に勉強したほうがいい。", ro: "tesuto no mae ni benkyō shita hō ga ii.", en: "You should study before the test. (plain)",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "の", ro: "no", role: "Particle — connector", meaning: "of" },
            { t: "前", ro: "mae", role: "Noun", meaning: "before" },
            { t: "に", ro: "ni", role: "Particle — time", meaning: "at" },
            { t: "勉強した", ro: "benkyō shita", role: "Verb (plain past)", meaning: "studied" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" }
          ] },
        { jp: "傘を持ってきたほうがいいですよ。", ro: "kasa o motte kita hō ga ii desu yo.", en: "You should bring an umbrella.",
          tokens: [
            { t: "傘", ro: "kasa", role: "Noun", meaning: "umbrella" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "持って", ro: "motte", role: "Verb (て-form)", meaning: "having" },
            { t: "きた", ro: "kita", role: "Auxiliary (came — plain past)", meaning: "came" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "コードをテストしたほうがいい。", ro: "kōdo o tesuto shita hō ga ii.", en: "You should test the code.",
          tokens: [
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "テストした", ro: "tesuto shita", role: "Verb (plain past)", meaning: "tested" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" }
          ] },
        { jp: "急いだほうがいいですよ。", ro: "isoida hō ga ii desu yo.", en: "You'd better hurry.",
          tokens: [
            { t: "急いだ", ro: "isoida", role: "Verb (plain past)", meaning: "hurried" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(warning)" }
          ] },
        { jp: "電車で行ったほうがいいです。", ro: "densha de itta hō ga ii desu.", en: "You should go by train.",
          tokens: [
            { t: "電車", ro: "densha", role: "Noun", meaning: "train" },
            { t: "で", ro: "de", role: "Particle — means", meaning: "by" },
            { t: "行った", ro: "itta", role: "Verb (plain past)", meaning: "went" },
            { t: "ほう", ro: "hō", role: "Noun", meaning: "side/way" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "いい", ro: "ii", role: "i-adjective", meaning: "good" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] }
      ]
    },

    {
      category: "Time / Experience / Plans",
      title: "〜つもり — Intend to / Plan to",
      formula: "[Verb plain] + つもりです  (negative: [Verb plain neg] つもりです  or  〜つもりはない)",
      description: "States intent or plan (stronger than 〜たい which is just desire). The verb stays in plain (dictionary) form. Negative versions: '〜ない つもり' = intend NOT to; '〜つもり はない' = have no intention to.",
      person: "Usually 1st person (your own plans)",
      tense: "Present (about future)",
      main: {
        jp: "来週、日本に行くつもりです。",
        ro: "raishū, nihon ni iku tsumori desu.",
        en: "I plan to go to Japan next week.",
        tokens: [
          { t: "来週", ro: "raishū", role: "Time noun", meaning: "next week" },
          { t: "日本", ro: "nihon", role: "Proper noun", meaning: "Japan" },
          { t: "に", ro: "ni", role: "Particle — destination", meaning: "to" },
          { t: "行く", ro: "iku", role: "Verb (plain)", meaning: "go" },
          { t: "つもり", ro: "tsumori", role: "Noun ('intention')", meaning: "intention / plan" },
          { t: "です", ro: "desu", role: "Copula", meaning: "is" }
        ]
      },
      examples: [
        { jp: "明日、早く起きるつもりです。", ro: "ashita, hayaku okiru tsumori desu.", en: "I plan to wake up early tomorrow.",
          tokens: [
            { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
            { t: "早く", ro: "hayaku", role: "Adverb", meaning: "early" },
            { t: "起きる", ro: "okiru", role: "Verb (plain)", meaning: "wake up" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "plan" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "今日は飲まないつもりです。", ro: "kyō wa nomanai tsumori desu.", en: "I don't intend to drink today.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "飲まない", ro: "nomanai", role: "Verb (plain negative)", meaning: "not drink" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "intention" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "新しいパソコンを買うつもりです。", ro: "atarashii pasokon o kau tsumori desu.", en: "I'm planning to buy a new PC.",
          tokens: [
            { t: "新しい", ro: "atarashii", role: "i-adjective", meaning: "new" },
            { t: "パソコン", ro: "pasokon", role: "Noun", meaning: "PC" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "買う", ro: "kau", role: "Verb (plain)", meaning: "buy" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "plan" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "週末はゆっくりするつもりです。", ro: "shūmatsu wa yukkuri suru tsumori desu.", en: "I'm planning to relax on the weekend.",
          tokens: [
            { t: "週末", ro: "shūmatsu", role: "Time noun", meaning: "weekend" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "ゆっくり", ro: "yukkuri", role: "Adverb", meaning: "slowly / leisurely" },
            { t: "する", ro: "suru", role: "Verb (plain)", meaning: "do" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "plan" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "プルリクを今日中に送るつもりです。", ro: "pururiku o kyō-jū ni okuru tsumori desu.", en: "I plan to send the PR by today.",
          tokens: [
            { t: "プルリク", ro: "pururiku", role: "Noun", meaning: "pull request" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "今日中", ro: "kyō-jū", role: "Noun", meaning: "by today" },
            { t: "に", ro: "ni", role: "Particle — time deadline", meaning: "by" },
            { t: "送る", ro: "okuru", role: "Verb (plain)", meaning: "send" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "plan" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼に会うつもりはありません。", ro: "kare ni au tsumori wa arimasen.", en: "I have no intention of meeting him.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "に", ro: "ni", role: "Particle — target", meaning: "to" },
            { t: "会う", ro: "au", role: "Verb (plain)", meaning: "meet" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "intention" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "as for" },
            { t: "ありません", ro: "arimasen", role: "Verb (negative existence)", meaning: "doesn't exist" }
          ] },
        { jp: "毎日勉強するつもりです。", ro: "mainichi benkyō suru tsumori desu.", en: "I plan to study every day.",
          tokens: [
            { t: "毎日", ro: "mainichi", role: "Time noun", meaning: "every day" },
            { t: "勉強する", ro: "benkyō suru", role: "Verb (plain)", meaning: "study" },
            { t: "つもり", ro: "tsumori", role: "Noun (intention)", meaning: "plan" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 18 — RELATIVE CLAUSES / EASY-HARD / EXCESS / ONLY
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Modifying & nuance",
      title: "Relative clauses — modifying nouns with verbs (私が読んだ本)",
      formula: "[Plain-form clause] + [Noun]   (the clause directly attaches BEFORE the noun)",
      description: "In Japanese, an entire clause modifies a noun by sitting in front of it (no 'that' / 'which'). The clause uses PLAIN forms (not polite). The 'subject' inside the clause is often marked with が. This is one of the most powerful sentence-building tools in Japanese.",
      person: "Any",
      tense: "Inner clause stays plain; outer sentence sets the tense",
      main: {
        jp: "私が書いた本",
        ro: "watashi ga kaita hon",
        en: "The book I wrote (lit. 'I-wrote book')",
        tokens: [
          { t: "私", ro: "watashi", role: "Pronoun (subject of inner clause)", meaning: "I" },
          { t: "が", ro: "ga", role: "Particle — subject (inside relative clause)", meaning: "subject marker" },
          { t: "書いた", ro: "kaita", role: "Verb (plain past, modifies 本)", meaning: "wrote" },
          { t: "本", ro: "hon", role: "Noun (head)", meaning: "book" }
        ]
      },
      examples: [
        { jp: "昨日食べたラーメンは美味しかった。", ro: "kinō tabeta rāmen wa oishikatta.", en: "The ramen I ate yesterday was delicious.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun (inside clause)", meaning: "yesterday" },
            { t: "食べた", ro: "tabeta", role: "Verb (plain past, modifies ラーメン)", meaning: "ate" },
            { t: "ラーメン", ro: "rāmen", role: "Noun (head)", meaning: "ramen" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "美味しかった", ro: "oishikatta", role: "i-adjective past", meaning: "was tasty" }
          ] },
        { jp: "田中さんが住んでいる町は静かです。", ro: "tanaka-san ga sunde iru machi wa shizuka desu.", en: "The town where Tanaka lives is quiet.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "が", ro: "ga", role: "Particle — subject (inside)", meaning: "subject" },
            { t: "住んで", ro: "sunde", role: "Verb (て-form)", meaning: "living" },
            { t: "いる", ro: "iru", role: "Auxiliary (continuous, plain)", meaning: "is" },
            { t: "町", ro: "machi", role: "Noun (head)", meaning: "town" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "静か", ro: "shizuka", role: "na-adjective", meaning: "quiet" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "私が好きな食べ物は寿司です。", ro: "watashi ga suki na tabemono wa sushi desu.", en: "The food I like is sushi.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "が", ro: "ga", role: "Particle — subject (inside)", meaning: "subject" },
            { t: "好きな", ro: "suki na", role: "na-adjective + な (modifies noun)", meaning: "liked" },
            { t: "食べ物", ro: "tabemono", role: "Noun (head)", meaning: "food" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "寿司", ro: "sushi", role: "Noun", meaning: "sushi" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "彼が書いたコードはきれいです。", ro: "kare ga kaita kōdo wa kirei desu.", en: "The code he wrote is clean.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun (inside)", meaning: "he" },
            { t: "が", ro: "ga", role: "Particle — subject (inside)", meaning: "subject" },
            { t: "書いた", ro: "kaita", role: "Verb (plain past)", meaning: "wrote" },
            { t: "コード", ro: "kōdo", role: "Noun (head)", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "きれい", ro: "kirei", role: "na-adjective", meaning: "clean / pretty" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "今読んでいる本は面白い。", ro: "ima yonde iru hon wa omoshiroi.", en: "The book I'm reading now is interesting.",
          tokens: [
            { t: "今", ro: "ima", role: "Time noun", meaning: "now" },
            { t: "読んで", ro: "yonde", role: "Verb (て-form)", meaning: "reading" },
            { t: "いる", ro: "iru", role: "Auxiliary (continuous, plain)", meaning: "is" },
            { t: "本", ro: "hon", role: "Noun (head)", meaning: "book" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "面白い", ro: "omoshiroi", role: "i-adjective", meaning: "interesting" }
          ] },
        { jp: "新幹線で行く人は田中さんです。", ro: "shinkansen de iku hito wa tanaka-san desu.", en: "The person going by bullet train is Tanaka.",
          tokens: [
            { t: "新幹線", ro: "shinkansen", role: "Noun", meaning: "bullet train" },
            { t: "で", ro: "de", role: "Particle — means", meaning: "by" },
            { t: "行く", ro: "iku", role: "Verb (plain)", meaning: "go" },
            { t: "人", ro: "hito", role: "Noun (head)", meaning: "person" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "山田さんが直したバグは難しかった。", ro: "yamada-san ga naoshita bagu wa muzukashikatta.", en: "The bug Yamada fixed was difficult.",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun (inside)", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "が", ro: "ga", role: "Particle — subject (inside)", meaning: "subject" },
            { t: "直した", ro: "naoshita", role: "Verb (plain past)", meaning: "fixed" },
            { t: "バグ", ro: "bagu", role: "Noun (head)", meaning: "bug" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "難しかった", ro: "muzukashikatta", role: "i-adjective past", meaning: "was difficult" }
          ] }
      ]
    },

    {
      category: "Modifying & nuance",
      title: "〜やすい / 〜にくい — Easy / Hard to do",
      formula: "[Verb-stem] + やすい (easy to ~) | + にくい (hard to ~)",
      description: "Attaches to verb stems and acts as an i-adjective. Says how easy or hard it is to perform the action — about the THING, not the doer.",
      person: "Describes the object",
      tense: "Any",
      main: {
        jp: "この本は読みやすいです。",
        ro: "kono hon wa yomiyasui desu.",
        en: "This book is easy to read.",
        tokens: [
          { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
          { t: "本", ro: "hon", role: "Noun", meaning: "book" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
          { t: "読み", ro: "yomi", role: "Verb stem (of 読む)", meaning: "read" },
          { t: "やすい", ro: "yasui", role: "Suffix — easy to", meaning: "easy to" },
          { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
        ]
      },
      examples: [
        { jp: "この字は読みにくい。", ro: "kono ji wa yominikui.", en: "This handwriting is hard to read.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "字", ro: "ji", role: "Noun", meaning: "character / writing" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "読み", ro: "yomi", role: "Verb stem", meaning: "read" },
            { t: "にくい", ro: "nikui", role: "Suffix — hard to", meaning: "hard to" }
          ] },
        { jp: "このコードは理解しやすい。", ro: "kono kōdo wa rikai shiyasui.", en: "This code is easy to understand.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "理解し", ro: "rikai shi", role: "Verb stem", meaning: "understand" },
            { t: "やすい", ro: "yasui", role: "Suffix", meaning: "easy to" }
          ] },
        { jp: "この靴は歩きやすい。", ro: "kono kutsu wa arukiyasui.", en: "These shoes are easy to walk in.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "靴", ro: "kutsu", role: "Noun", meaning: "shoes" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "歩き", ro: "aruki", role: "Verb stem", meaning: "walk" },
            { t: "やすい", ro: "yasui", role: "Suffix", meaning: "easy to" }
          ] },
        { jp: "この漢字は覚えにくいです。", ro: "kono kanji wa oboenikui desu.", en: "This kanji is hard to memorize.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "漢字", ro: "kanji", role: "Noun", meaning: "kanji" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "覚え", ro: "oboe", role: "Verb stem (of 覚える)", meaning: "memorize" },
            { t: "にくい", ro: "nikui", role: "Suffix", meaning: "hard to" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "彼の説明はわかりやすかった。", ro: "kare no setsumei wa wakariyasukatta.", en: "His explanation was easy to understand.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "の", ro: "no", role: "Particle — possessive", meaning: "'s" },
            { t: "説明", ro: "setsumei", role: "Noun", meaning: "explanation" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "わかり", ro: "wakari", role: "Verb stem", meaning: "understand" },
            { t: "やすかった", ro: "yasukatta", role: "Suffix past (i-adj past)", meaning: "was easy to" }
          ] },
        { jp: "このバグは見つけにくい。", ro: "kono bagu wa mitsukenikui.", en: "This bug is hard to find.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "バグ", ro: "bagu", role: "Noun", meaning: "bug" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "見つけ", ro: "mitsuke", role: "Verb stem", meaning: "find" },
            { t: "にくい", ro: "nikui", role: "Suffix", meaning: "hard to" }
          ] },
        { jp: "このアプリは使いやすいです。", ro: "kono apuri wa tsukaiyasui desu.", en: "This app is easy to use.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "アプリ", ro: "apuri", role: "Noun (loanword)", meaning: "app" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "使い", ro: "tsukai", role: "Verb stem", meaning: "use" },
            { t: "やすい", ro: "yasui", role: "Suffix", meaning: "easy to" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] }
      ]
    },

    {
      category: "Modifying & nuance",
      title: "〜すぎる — Too much / Excessively",
      formula: "[Verb stem] / [i-adj drop い] / [na-adj] + すぎる",
      description: "Says something is EXCESSIVE — too much / too many / overdoing. Drop the い from i-adjectives, drop the ます from verbs, na-adjectives use bare form. Conjugates as a regular ichidan verb (すぎます / すぎた).",
      person: "Any",
      tense: "Any",
      main: {
        jp: "このコーヒーは熱すぎる。",
        ro: "kono kōhī wa atsusugiru.",
        en: "This coffee is too hot.",
        tokens: [
          { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
          { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
          { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
          { t: "熱", ro: "atsu", role: "i-adjective stem (of 熱い)", meaning: "hot" },
          { t: "すぎる", ro: "sugiru", role: "Verb (excess, ichidan)", meaning: "is too much" }
        ]
      },
      examples: [
        { jp: "食べすぎました。", ro: "tabesugimashita.", en: "I ate too much.",
          tokens: [
            { t: "食べ", ro: "tabe", role: "Verb stem (of 食べる)", meaning: "eat" },
            { t: "すぎました", ro: "sugimashita", role: "Verb (excess, polite past)", meaning: "did too much" }
          ] },
        { jp: "この問題は難しすぎる。", ro: "kono mondai wa muzukashisugiru.", en: "This problem is too difficult.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "難し", ro: "muzukashi", role: "i-adjective stem", meaning: "difficult" },
            { t: "すぎる", ro: "sugiru", role: "Verb (excess)", meaning: "is too much" }
          ] },
        { jp: "高すぎて買えません。", ro: "takasugite kaemasen.", en: "It's too expensive — I can't buy it.",
          tokens: [
            { t: "高", ro: "taka", role: "i-adjective stem", meaning: "expensive" },
            { t: "すぎて", ro: "sugite", role: "Verb (excess, て-form)", meaning: "being too much" },
            { t: "買えません", ro: "kaemasen", role: "Verb (potential negative)", meaning: "cannot buy" }
          ] },
        { jp: "彼は働きすぎです。", ro: "kare wa hatarakisugi desu.", en: "He works too much.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "働き", ro: "hataraki", role: "Verb stem", meaning: "work" },
            { t: "すぎ", ro: "sugi", role: "Noun (from すぎる)", meaning: "excess" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" }
          ] },
        { jp: "昨日、飲みすぎた。", ro: "kinō, nomisugita.", en: "I drank too much yesterday.",
          tokens: [
            { t: "昨日", ro: "kinō", role: "Time noun", meaning: "yesterday" },
            { t: "飲み", ro: "nomi", role: "Verb stem", meaning: "drink" },
            { t: "すぎた", ro: "sugita", role: "Verb (excess, plain past)", meaning: "did too much" }
          ] },
        { jp: "このコードは複雑すぎます。", ro: "kono kōdo wa fukuzatsu sugimasu.", en: "This code is too complex.",
          tokens: [
            { t: "この", ro: "kono", role: "Demonstrative", meaning: "this" },
            { t: "コード", ro: "kōdo", role: "Noun", meaning: "code" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "複雑", ro: "fukuzatsu", role: "na-adjective", meaning: "complex" },
            { t: "すぎます", ro: "sugimasu", role: "Verb (excess, polite)", meaning: "is too much" }
          ] },
        { jp: "テストが多すぎる！", ro: "tesuto ga ōsugiru!", en: "There are too many tests!",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "多", ro: "ō", role: "i-adjective stem (of 多い)", meaning: "many" },
            { t: "すぎる", ro: "sugiru", role: "Verb (excess)", meaning: "is too much" }
          ] }
      ]
    },

    {
      category: "Modifying & nuance",
      title: "〜しか〜ない / 〜だけ — Only X (restriction)",
      formula: "X + しか + [verb negative]   (only)   |   X + だけ + [verb]   (only / just)",
      description: "Two ways to say 'only X'. しか REQUIRES a negative verb afterwards (しか〜ない literally 'nothing but X'). だけ is more neutral, works with any verb. しか has a negative connotation ('only that and no more'); だけ is neutral.",
      person: "Any",
      tense: "Any",
      main: {
        jp: "千円しかありません。",
        ro: "sen-en shika arimasen.",
        en: "I only have 1000 yen.",
        tokens: [
          { t: "千円", ro: "sen-en", role: "Noun (number + counter)", meaning: "1000 yen" },
          { t: "しか", ro: "shika", role: "Particle — only (with negative)", meaning: "only" },
          { t: "ありません", ro: "arimasen", role: "Verb (negative existence)", meaning: "don't have" }
        ]
      },
      examples: [
        { jp: "一つだけください。", ro: "hitotsu dake kudasai.", en: "Just one, please.",
          tokens: [
            { t: "一つ", ro: "hitotsu", role: "Counter", meaning: "one (thing)" },
            { t: "だけ", ro: "dake", role: "Particle — only", meaning: "just" },
            { t: "ください", ro: "kudasai", role: "Polite request", meaning: "please" }
          ] },
        { jp: "私しかわかりません。", ro: "watashi shika wakarimasen.", en: "Only I understand.",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "しか", ro: "shika", role: "Particle — only (with negative)", meaning: "only" },
            { t: "わかりません", ro: "wakarimasen", role: "Verb (polite negative)", meaning: "don't understand" }
          ] },
        { jp: "彼だけが来ました。", ro: "kare dake ga kimashita.", en: "Only he came.",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "だけ", ro: "dake", role: "Particle — only", meaning: "only" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "来ました", ro: "kimashita", role: "Verb (polite past)", meaning: "came" }
          ] },
        { jp: "今日しか時間がない。", ro: "kyō shika jikan ga nai.", en: "Today is the only day I have time.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "しか", ro: "shika", role: "Particle — only", meaning: "only" },
            { t: "時間", ro: "jikan", role: "Noun", meaning: "time" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "ない", ro: "nai", role: "Verb (plain neg existence)", meaning: "not have" }
          ] },
        { jp: "コーヒーだけを飲みます。", ro: "kōhī dake o nomimasu.", en: "I drink only coffee.",
          tokens: [
            { t: "コーヒー", ro: "kōhī", role: "Noun", meaning: "coffee" },
            { t: "だけ", ro: "dake", role: "Particle — only", meaning: "only" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "飲みます", ro: "nomimasu", role: "Verb (polite)", meaning: "drink" }
          ] },
        { jp: "二人しか来なかった。", ro: "futari shika konakatta.", en: "Only two people came.",
          tokens: [
            { t: "二人", ro: "futari", role: "Counter (people)", meaning: "two people" },
            { t: "しか", ro: "shika", role: "Particle — only", meaning: "only" },
            { t: "来なかった", ro: "konakatta", role: "Verb (plain past negative)", meaning: "didn't come" }
          ] },
        { jp: "テストだけ受けます。", ro: "tesuto dake ukemasu.", en: "I'll only take the test (nothing else).",
          tokens: [
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "だけ", ro: "dake", role: "Particle — only", meaning: "only" },
            { t: "受けます", ro: "ukemasu", role: "Verb (polite)", meaning: "take / receive" }
          ] }
      ]
    },

    {
      category: "Modifying & nuance",
      title: "そうです / らしい — Hearsay (I heard / it seems)",
      formula: "[Plain-form clause] + そうです (I heard …)  |  + らしい ((apparently) it seems …)",
      description: "Both convey 'I heard' or 'apparently'. そうです (after a plain clause) = direct hearsay 'I heard X'. らしい = inference based on evidence 'it seems X'. Different from そう です (looks like) which uses a verb stem (e.g. 美味しそう = looks tasty).",
      person: "Speaker reporting / inferring",
      tense: "Inner clause sets the tense",
      main: {
        jp: "明日、雨が降るそうです。",
        ro: "ashita, ame ga furu sō desu.",
        en: "I heard it will rain tomorrow.",
        tokens: [
          { t: "明日", ro: "ashita", role: "Time noun", meaning: "tomorrow" },
          { t: "雨", ro: "ame", role: "Noun", meaning: "rain" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
          { t: "降る", ro: "furu", role: "Verb (plain)", meaning: "fall" },
          { t: "そう", ro: "sō", role: "Hearsay marker", meaning: "I heard" },
          { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
        ]
      },
      examples: [
        { jp: "田中さんは病気らしい。", ro: "tanaka-san wa byōki rashii.", en: "It seems Tanaka is sick.",
          tokens: [
            { t: "田中", ro: "tanaka", role: "Proper noun", meaning: "Tanaka" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "病気", ro: "byōki", role: "Noun", meaning: "sick" },
            { t: "らしい", ro: "rashii", role: "Suffix — apparently", meaning: "seems / apparently" }
          ] },
        { jp: "新しいゲームが面白いそうです。", ro: "atarashii gēmu ga omoshiroi sō desu.", en: "I heard the new game is interesting.",
          tokens: [
            { t: "新しい", ro: "atarashii", role: "i-adjective", meaning: "new" },
            { t: "ゲーム", ro: "gēmu", role: "Noun", meaning: "game" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "面白い", ro: "omoshiroi", role: "i-adjective", meaning: "interesting" },
            { t: "そう", ro: "sō", role: "Hearsay marker", meaning: "I heard" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "彼女は来ないらしい。", ro: "kanojo wa konai rashii.", en: "It seems she's not coming.",
          tokens: [
            { t: "彼女", ro: "kanojo", role: "Pronoun", meaning: "she" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "来ない", ro: "konai", role: "Verb (plain negative)", meaning: "doesn't come" },
            { t: "らしい", ro: "rashii", role: "Suffix — apparently", meaning: "seems" }
          ] },
        { jp: "山田さんは結婚したそうです。", ro: "yamada-san wa kekkon shita sō desu.", en: "I heard Yamada got married.",
          tokens: [
            { t: "山田", ro: "yamada", role: "Proper noun", meaning: "Yamada" },
            { t: "さん", ro: "san", role: "Honorific", meaning: "Mr/Ms" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "結婚した", ro: "kekkon shita", role: "Verb (plain past)", meaning: "got married" },
            { t: "そう", ro: "sō", role: "Hearsay marker", meaning: "I heard" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "本番で問題があったそうです。", ro: "honban de mondai ga atta sō desu.", en: "I heard there was a problem in production.",
          tokens: [
            { t: "本番", ro: "honban", role: "Noun", meaning: "production" },
            { t: "で", ro: "de", role: "Particle — action location", meaning: "in" },
            { t: "問題", ro: "mondai", role: "Noun", meaning: "problem" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "あった", ro: "atta", role: "Verb (plain past)", meaning: "existed" },
            { t: "そう", ro: "sō", role: "Hearsay marker", meaning: "I heard" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] },
        { jp: "今日はテストがあるらしいよ。", ro: "kyō wa tesuto ga aru rashii yo.", en: "Apparently there's a test today.",
          tokens: [
            { t: "今日", ro: "kyō", role: "Time noun", meaning: "today" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "テスト", ro: "tesuto", role: "Noun", meaning: "test" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "ある", ro: "aru", role: "Verb (plain existence)", meaning: "exists" },
            { t: "らしい", ro: "rashii", role: "Suffix — apparently", meaning: "seems" },
            { t: "よ", ro: "yo", role: "Particle — emphasis", meaning: "(asserting)" }
          ] },
        { jp: "彼は元気だそうです。", ro: "kare wa genki da sō desu.", en: "I heard he's doing well. (note: な-adj/noun + だ before そう)",
          tokens: [
            { t: "彼", ro: "kare", role: "Pronoun", meaning: "he" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "元気", ro: "genki", role: "na-adjective", meaning: "well" },
            { t: "だ", ro: "da", role: "Plain copula (required)", meaning: "is" },
            { t: "そう", ro: "sō", role: "Hearsay marker", meaning: "I heard" },
            { t: "です", ro: "desu", role: "Politeness", meaning: "(polite)" }
          ] }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORY 19 — KEIGO BASICS (尊敬語 / 謙譲語)
    // ═══════════════════════════════════════════════════════════════
    {
      category: "Keigo basics",
      title: "Keigo intro — 尊敬語 (raise others) vs 謙譲語 (lower self)",
      formula: "Special verb forms used in business / formal contexts. 尊敬語 elevates others' actions; 謙譲語 humbles your own.",
      description: "Japanese has THREE politeness levels: 丁寧語 (です/ます — covered everywhere), 尊敬語 (verbs that ELEVATE someone else's action), and 謙譲語 (verbs that HUMBLE your own). Used in customer service, business, formal occasions. The most-used pairs are listed below.",
      person: "Speaker uses 謙譲語 for themselves; 尊敬語 for the other party",
      tense: "Any",
      main: {
        jp: "社長がいらっしゃいました。",
        ro: "shachō ga irasshaimashita.",
        en: "The president has arrived. (尊敬語 for 来る = come)",
        tokens: [
          { t: "社長", ro: "shachō", role: "Noun", meaning: "company president" },
          { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
          { t: "いらっしゃいました", ro: "irasshaimashita", role: "Verb (尊敬語 for 来る/行く/いる, polite past)", meaning: "came (honorific)" }
        ]
      },
      examples: [
        { jp: "私が参ります。", ro: "watashi ga mairimasu.", en: "I will come/go. (謙譲語 for 来る/行く)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "参ります", ro: "mairimasu", role: "Verb (謙譲語 — humble for 行く/来る)", meaning: "go (humble)" }
          ] },
        { jp: "社長は何をおっしゃいましたか？", ro: "shachō wa nani o osshaimashita ka?", en: "What did the president say? (尊敬語 for 言う)",
          tokens: [
            { t: "社長", ro: "shachō", role: "Noun", meaning: "president" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "何", ro: "nani", role: "Question word", meaning: "what" },
            { t: "を", ro: "o", role: "Particle — object", meaning: "object marker" },
            { t: "おっしゃいました", ro: "osshaimashita", role: "Verb (尊敬語 for 言う, polite past)", meaning: "said (honorific)" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "私は申します。", ro: "watashi wa mōshimasu.", en: "I say (humble). (謙譲語 for 言う)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "申します", ro: "mōshimasu", role: "Verb (謙譲語 — humble for 言う)", meaning: "say (humble)" }
          ] },
        { jp: "お客様が召し上がります。", ro: "okyaku-sama ga meshiagarimasu.", en: "The customer eats/drinks. (尊敬語 for 食べる/飲む)",
          tokens: [
            { t: "お客様", ro: "okyaku-sama", role: "Noun", meaning: "customer (respectful)" },
            { t: "が", ro: "ga", role: "Particle — subject", meaning: "subject" },
            { t: "召し上がります", ro: "meshiagarimasu", role: "Verb (尊敬語 for 食べる/飲む)", meaning: "eat/drink (honorific)" }
          ] },
        { jp: "私はいただきます。", ro: "watashi wa itadakimasu.", en: "I (humbly) eat / receive. (謙譲語; also said before meals)",
          tokens: [
            { t: "私", ro: "watashi", role: "Pronoun", meaning: "I" },
            { t: "は", ro: "wa", role: "Particle — topic", meaning: "topic" },
            { t: "いただきます", ro: "itadakimasu", role: "Verb (謙譲語 — humble for 食べる/もらう)", meaning: "humbly receive/eat" }
          ] },
        { jp: "ご存じですか？", ro: "go-zonji desu ka?", en: "Do you know? (尊敬語 for 知る)",
          tokens: [
            { t: "ご存じ", ro: "go-zonji", role: "Noun (尊敬語 for 知っている)", meaning: "knowing (honorific)" },
            { t: "です", ro: "desu", role: "Copula", meaning: "is" },
            { t: "か", ro: "ka", role: "Particle — question", meaning: "?" }
          ] },
        { jp: "存じております。", ro: "zonjite orimasu.", en: "I know (humbly). (謙譲語 for 知っている)",
          tokens: [
            { t: "存じて", ro: "zonjite", role: "Verb (謙譲語 — humble for 知る, て-form)", meaning: "knowing (humble)" },
            { t: "おります", ro: "orimasu", role: "Auxiliary (humble いる)", meaning: "(continuous, humble)" }
          ] }
      ]
    }
  ]
};
