const passwordInput = document.getElementById("password");
const enterButton = document.getElementById("enter-button");
const errorMessage = document.getElementById("error-message");

const passwordScreen = document.getElementById("password-screen");
const mainSite = document.getElementById("main-site");


// ==============================
// ここで合言葉を変更できる
// ==============================

const correctPassword = "1215";


// ==============================
// 合言葉チェック
// ==============================

function checkPassword() {

  const input = passwordInput.value.trim();

  if (input === correctPassword) {

    errorMessage.textContent = "";

    openSite();

  } else {

    errorMessage.textContent =
      "ブッブー😼";

    passwordInput.value = "";

  }

}


// ==============================
// サイトを開く
// ==============================

function openSite() {

    const shootingStar =
  document.getElementById("shooting-star");

shootingStar.classList.add("shoot");
  passwordScreen.style.transition =
    "opacity 1.5s ease";

  passwordScreen.style.opacity = "0";


  setTimeout(() => {

    passwordScreen.style.display = "none";

    mainSite.style.display = "block";

    mainSite.style.opacity = "0";

    mainSite.style.transition =
      "opacity 2s ease";


    setTimeout(() => {

      mainSite.style.opacity = "1";

    }, 100);

  }, 1500);

}


// ==============================
// ボタン
// ==============================

enterButton.addEventListener(
  "click",
  checkPassword
);


// ==============================
// Enterキーでも開ける
// ==============================

passwordInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      checkPassword();

    }

  }
);
// ==============================
// 好きなところ
// ==============================

const loveStars =
  document.querySelectorAll(".love-star");

const loveMessage =
  document.getElementById("love-message");


loveStars.forEach(function(star) {

  star.addEventListener("click", function() {

    loveStars.forEach(function(item) {
      item.classList.remove("active");
    });

    star.classList.add("active");

    loveMessage.style.opacity = "0";

    setTimeout(function() {

      loveMessage.textContent =
        star.dataset.message;

      loveMessage.style.opacity = "1";

    }, 200);

  });

});
// ==============================
// OPEN WHEN
// ==============================

const whenCards =
  document.querySelectorAll(".when-card");

const whenLetter =
  document.getElementById("when-letter");

const whenTitle =
  document.getElementById("when-title");

const whenMessage =
  document.getElementById("when-message");

const whenClose =
  document.getElementById("when-close");


whenCards.forEach(function(card) {

  card.addEventListener("click", function() {

    whenTitle.textContent =
      card.dataset.title;

    whenMessage.textContent =
      card.dataset.message;

    whenLetter.classList.add("show");


    setTimeout(function() {

      whenLetter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 100);

  });

});


whenClose.addEventListener(
  "click",
  function() {

    whenLetter.classList.remove("show");

  }
);
// ==============================
// MEMORY GACHA
// ==============================

const memories = [

    "初めてデートらしいことした江ノ島！楽しさときゅんきゅんで忙しかったなあ🤭",
  
    "ベーコンポテトパイ食べたの覚えてるかな。あの何気ない瞬間も幸せすぎた",
  
    "手繋いだ時みいながこっち向いてくれなかったこと！😊",
  
    "クリスマスマーケット！普通に幸せすぎて意味わからなかった。デートの楽しさ教えてくれてありがと！",
  
    "大さん橋から夜景見た時！意味わからんポーズで被ったの運命？🤭",
  
    "ラーメン屋で撮ったビーリアル！あげるかどうかドキドキだったね😳",
  
    "長者ヶ崎での夕日！綺麗な写真たくさん撮ったねー！",
  
    "車でおでん食べたこと！一緒におでん食べるだけで幸せってどゆこと！？😍",

    "一緒に見た雪！好きな人と一緒に見る雪とかロマンチックすぎー！🥰これからは毎年みたいな。",

  "風車行く途中で極寒の中撮った写真🤭結構お気に入り！",

  "morimoriデート！イルミデートしてみたかったんだ、みいなとできて良かった🥰観覧車で何したっけね🤭",

  "たまごっちイルミでたくさん写真撮ったこと！おいらがくちぱっちになった日でもある😳",

  "morimoriデートからの一晩中ちゅっちゅ😘🥰",

  "初ぷり！二人で撮るの少し緊張した笑けど大成功でめっちゃ褒めてくれたの覚えてるよ！😊",

  "成人式！会う予定なかったけど大切な人の晴れ姿見たくて行っちゃった🤭誰よりも綺麗だったよー！🥰",

  "同窓会後にきてくれたこと！泥酔ちゃんだったけど可愛すぎたから即保護しましたあ🥰",

  "同窓会後に一緒に帰ったこと！デレデレで僕はメロメロでした😍一生わすれないね！",

  "レトロ自販機！たくさんいい写真撮れたね🤭次は明るい時に行こうねー！",

  "アウトレットでショッピング！MOUSSYの服試着したの覚えてるよ！一緒に選べて嬉しかったなあ🥰",

  "初めて外で歯磨きした時！ホームレスカップルすぎて面白かったねえ🤭",

  "初めてのアサイー！美味しいもの教えてもらっちゃった🤭二人だともっと美味しいね😋",

  "城ヶ島での夕日！映えすぎたね😳この時間がずっと続けばいいのにって思っていたよ。",

  "公園でバドミントン！純粋に楽しすぎたね🤭公園とかあまり行ったことないって聞いて、いろんなことしてあげたいなと思ったよ。",

  "一緒にマフラー交換！こんなことでも楽しんでくれるところが好き。いつでもお手伝い待ってるよ😋",

  "すかなごっそのアイス！めーっちゃうまかったね🤭子供みたいに喜んでるとこ可愛かったな。",

  "まどかも一緒にセカスト！二人の荷物の量やばすぎて仰天でした👀",

  "ルーミーで小田原！愛車死亡で急遽だったけど楽しんでくれて良かった！あの日のメイクもキラキラで可愛かったなあ🥰",

  "バレンタイン！ほんっっっっとに嬉しかった。俺のために頑張ってくれたんだって涙でした。ぜーんぶ美味しかったし見た目の可愛かった！本当にありがとう。🥰",

  "夢の吊り橋！人少なくて良かったね！二人での旅行最高すぎて何日でも行けると感じた日でした！また行こうね！",

  "奥大井湖上駅！風強かったねえ！でも綺麗だったね！かわい子ちゃんの写真たくさんゲットしました🤭",

  "初あけぼの！これは見つけちゃったね。あの時おばあちゃんに聞いてくれたのナイスすぎ！さすがうちの子🥰帰ってきたらすぐ行こ！",

  "初ホテルで一緒に寝たこと！みいながずっとソワソワしてたの覚えてるよ🤭カップルなんだから一緒に寝て当然でしょ？レンブラントまた行こうね！🥰",

  "オラっチェ！動物に餌やりしてるのを見てるのが楽しかった🤭かわいいって言ってるあんたが一番かわいいわ！",

  "十国峠！ちょー綺麗だったね。天気も最高だった！両手あげてる写真神みたいで結構好き😊",

  "来宮神社！ここは良かったねえ！雰囲気めちゃ良かったし写真映えも抜群でした！また行きたいねー！",

  "熱海梅園！正直梅は全然だったけどお散歩付きの俺らには良かったね🤭次はめちゃ咲いてる時にも行ってみよか！😊",

  "熱海プリン！食べてみたかったんだあ！見た目も可愛くてうまかったね！熱海色々散策してみたいね🥰",

  "車でパック！意外に良かったね🤭美容カップルすぎて車中泊なのに肌綺麗になるの不思議🤭",

  "大阪旅行のお迎え！お土産たくさん嬉しかった！ありがとう！ヨッシーのキーホルダーセンス良すぎて結婚して。💍",

  "ホワイトデー！サプライズ大成功でした！喜んでくれて嬉しかったな。ずっと使ってくれるところが愛感じて大好き。🫶（来年はどうしよ汗）",

  "えのすい！早くから並んだね！くちぱ狙いで行ったから出た時嬉しかったあ。他にもかわいいグッズたくさん買えて良かった！🥰",

  "えのすい！定番デートだけど最高だった。好きな人と行ったら本当にどこでも素敵な景色になるんだって感じたよ。",

  "ザクロのパン！うますぎて俺らどんどん大きくなっちゃうね🤭ピザ両方から食べたのカップルすぎてちゅ。いつでも行けるから言ってね🤭",

  "山中湖展望台！めちゃ綺麗だったし天気も神だったね！モデルがいいからなんでもいい写真になっちゃうね🥰山梨ラブ！",

  "忍野八海！ずっと行きたいって言ってたから行けて良かった！食べ物もたくさんあって色々楽しめたね！また行くのも全然あり！😊",

  "忍野八海にあった昔の生活のやつ！ボロボロの建物の階段めちゃ怖かったね🤭水車とかあって雰囲気良かったなあ！赤ちゃんも楽しそうでした🥰",

  "西湖いやしの里根場！ここも雰囲気良かった！桜餅味のソフトクリーム美味しそうだったね🤭俺のお気に入りなアイスとのツーショもそこでゲットしました🥰",

  "本栖湖！静かで良かったねえ！山中湖よりも落ち着いていて本当に自然って感じだったね。ちょっと怖いけどここで車中泊してみる？🤭",

  "穴場の小作発見！まさかのガラガラな小作発見だったね🤭ほうとう好きすぎて連続で食べたのもいい思い出🥰",

  "ルートインでの朝ごはん！初めて朝食付きにしたね！種類は少ないけど全然満足だったな！いももちうますぎてレシピ知りたい🤭",

  "鳴沢氷穴！なるとじゃないよなるさわだよ🤭俺が知ってて近かったので連行しました🤭意外と良かったでしょ？洞窟探検系カップルです😊",

  "ルートインで財布無くした事件🤭焦ったけどこれも旅の醍醐味かな！どこだろーって助手席の横にあったの覚えてるよ😂そっちでは気をつけてねー！",

  "身延！身延まんじゅう食べてみたかったんだあ！なんかあの小さな街感が好きなんだよね。桜と車の写真撮ったのも思い出！ありがとう！😊",

  "車で通った吊り橋！運転手はタマヒュンでした。過酷な道のりだったけど良かったなあ！動画撮ってくれて感謝だよ！🥹",

  "吉田うどん！初めて食べた時まじで感動した。定期的に摂取が必要だから行こうね！いやでも無理やり連行しますので。😋",

  "山中湖駐車場での車中泊！目が覚めた時の異世界感すごかったねえ！真っ白のあれはあれで雰囲気良かった！あそこは宿に認定します🤗",

  "河口湖のアップルパイ！外国の人だらけで落ち着かなかったけど味は確かでした！今度は買って宿で食べるとかもいいかもねー！🥰",

  "旅行帰りの小田原！俺が好きなみなと食堂行ったの覚えてる？🤭この辺からもう寂しくてあんまり記憶ないのは秘密ね🥰",

  "最後のすき家。思い出したくないくらいに寂しかったです！てへ。離れるとかむりー！って感じでご飯どころじゃなかた！🤭"
  ];
  
  
  const gachaButton =
    document.getElementById("gacha-button");
  
  const gachaMessage =
    document.getElementById("gacha-message");
  
  const gachaStar =
    document.getElementById("gacha-star");
  
  
  let lastMemory = -1;
  
  
  gachaButton.addEventListener("click", function() {
  
    let randomNumber;
  
    // 連続で同じ思い出が出ないようにする
    do {
  
      randomNumber =
        Math.floor(Math.random() * memories.length);
  
    } while (
      randomNumber === lastMemory &&
      memories.length > 1
    );
  
  
    lastMemory = randomNumber;
  
  
    // 星のアニメーションをリセット
    gachaStar.classList.remove("draw");
  
    void gachaStar.offsetWidth;
  
    gachaStar.classList.add("draw");
  
  
    // 一度文章を消す
    gachaMessage.style.opacity = "0";
  
  
    setTimeout(function() {
  
      gachaMessage.textContent =
        memories[randomNumber];
  
      gachaMessage.style.opacity = "1";
  
    }, 400);
  
  });
  // ==============================
// 付き合ってからのカウンター
// ==============================

// ↓ここを付き合った日時に変更
const relationshipStart =
new Date("2025-12-15T00:00:00");


function updateRelationshipCounter() {

const now = new Date();

const difference =
  now - relationshipStart;


// 日
const days =
  Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );


// 時間
const hours =
  Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );


// 分
const minutes =
  Math.floor(
    (difference / (1000 * 60)) % 60
  );


// 秒
const seconds =
  Math.floor(
    (difference / 1000) % 60
  );


document.getElementById("days").textContent =
  days;

document.getElementById("hours").textContent =
  hours;

document.getElementById("minutes").textContent =
  minutes;

document.getElementById("seconds").textContent =
  seconds;

}


// 最初に一回表示
updateRelationshipCounter();


// 1秒ごとに更新
setInterval(
updateRelationshipCounter,
1000
);
// ==============================
// 思い出マップ
// ==============================

const mapMemories = {

    kanagawa: [
        {
            title: "みなとみらい",
            image: "images/map/みなとみらい.jpeg",
            text: "夜景最高！😆"
          },
      {
        title: "城ヶ島",
        image: "images/map/城ヶ島.jpeg",
        text: "岩場に座ってみる夕日最高すぎ🤩"
      },
      {
        title: "毘沙門",
        image: "images/map/毘沙門.jpeg",
        text: "風車行くまでの道いいよねえ！"
      },
      {
        title: "インディ",
        image: "images/map/インディージョーンズ.jpeg",
        text: "道終わってるけど景色はいいんだよねえ！"
      },
      {
        title: "長者ヶ崎",
        image: "images/map/長者ヶ崎.jpeg",
        text: "夕日と海が最高😆"
      },
      {
        title: "mori mori",
        image: "images/map/morimori.jpeg",
        text: "イルミネーションが綺麗！昼は自然も見えるよ👀"
      },

    ],
  
    yamanashi: [
      {
        title: "山中湖",
        image: "images/map/山中湖.jpeg",
        text: "まじ最高だよね。空気がうますぎる😋"
      },
      {
        title: "山中湖　朝の車内から",
        image: "images/map/山中湖　朝.jpeg",
        text: "真っ白ですごかったね👀雨の朝も雰囲気あってよし！"
      },
      {
        title: "忍野八海",
        image: "images/map/忍野八海.jpeg",
        text: "水の透明度やばかったね！"
      },
      {
        title: "本栖湖",
        image: "images/map/本栖湖.jpeg",
        text: "静かすぎて驚いた！自然って感じでいいとこ！"
      },
      {
        title: "鳴沢氷穴",
        image: "images/map/鳴沢氷穴.jpeg",
        text: "ひんやりスポット👀 ナルトじゃなくて鳴沢ね🤗"
      },
      {
        title: "身延",
        image: "images/map/身延.jpeg",
        text: "桜咲いててめっちゃ良かった！この街なんか好き🤭"
      },
    ],

    shizuoka: [
      
      ]
  
  };
  
  
  // ピン
  const mapPrefPins =
    document.querySelectorAll(".map-pref-pin");
  
  // 選択中の県名
  const mapPrefName =
    document.getElementById("map-pref-name");
  
  // 思い出表示エリア
  const mapMemoryList =
    document.getElementById("map-memory-list");
  
  
  mapPrefPins.forEach(function(pin) {
  
    pin.addEventListener("click", function() {
  
      const pref =
        pin.dataset.pref;
  
      const prefName =
        pin.dataset.name;
  
  
      // 選択中ピン
      mapPrefPins.forEach(function(item) {
  
        item.classList.remove("active");
  
      });
  
      pin.classList.add("active");
  
  
      // 県名表示
      mapPrefName.textContent =
        `📍 ${prefName}`;
  
  
      // 一旦空にする
      mapMemoryList.innerHTML = "";
  
  
      const memories =
        mapMemories[pref] || [];
  
  
      // 思い出がない場合
      if (memories.length === 0) {
  
        const empty =
          document.createElement("div");
  
        empty.className =
          "map-memory-empty";
  
        empty.textContent =
          "もう少しお待ちを🤭";
  
        mapMemoryList.appendChild(empty);
  
        return;
  
      }
  
  
      // 写真＋一言を作る
      memories.forEach(function(memory, index) {
  
        const card =
          document.createElement("article");
  
        card.className =
          "map-memory-card";
  
        // 少しずつ出現
        card.style.animationDelay =
          `${index * 0.08}s`;
  
  
        const image =
          document.createElement("img");
  
        image.src =
          memory.image;
  
        image.alt =
          memory.title;
  
  
        const content =
          document.createElement("div");
  
        content.className =
          "map-memory-content";
  
  
        const title =
          document.createElement("h4");
  
        title.className =
          "map-memory-title";
  
        title.textContent =
          memory.title;
  
  
        const text =
          document.createElement("p");
  
        text.className =
          "map-memory-text";
  
        text.textContent =
          memory.text;
  
  
        content.appendChild(title);
        content.appendChild(text);
  
        card.appendChild(image);
        card.appendChild(content);
  
        mapMemoryList.appendChild(card);
  
      });
  
    });
  
  });

  // ==============================
// 今日のひとこと
// ==============================

const dailyMessages = [
    "今日も世界一かわいいおれの赤ちゃん🥰",
    "いつまでもずーっと大好きだ！",
    "無理しすぎないでね。頑張りすぎ注意！",
    "今日も一日頑張るぞっ😊",
    "自然界隈を目標にこっちも頑張ってます！😉",
    "今日も俺のかわい子ちゃんです🥰",
    "疲れたらちゃんと休んでね。ご飯たくさん食べよう🍚",
    "ばぶの笑顔が世界一！額縁に入れて飾りたい（変態）",
    "あけぼの行ったら何食べたい？🤤",
    "よちよちよちよちちゅちゅちゅ",
    "顔が本当に好きです。顔も。",
    "ちゅーしたい。はむはむされたい。わしゃわしゃして。",
    "頑張り屋さんなおれのばぶぶだいすき😊",
    "えっちすぎるところもだいすきだ。襲いたい。えへ",
    "帰ってきたらまずどこ行く？🤭　なに食べる？🤤",
    "やりたいこと、行きたいとこたくさんだ！早く帰ってこーい！🤭",
    "公園でお昼寝してから美味しいもの食べてって早くやりたいな🤭",
    "どんな家に住む？ベッドはもちろん一つでお風呂は一緒に入るからね😉",
 
  ];
  
  const dailyMessage =
    document.getElementById("daily-message");
  
  const dailyDate =
    document.getElementById("daily-date");
  
  
  if (dailyMessage && dailyDate) {
  
    const today = new Date();
  
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
  
  
    // 日付ごとに番号を作る
    const dateNumber =
      Math.floor(
        new Date(year, month - 1, day).getTime()
        / 86400000
      );
  
  
    // 今日表示するメッセージを決定
    const messageIndex =
      dateNumber % dailyMessages.length;
  
  
    dailyMessage.textContent =
      dailyMessages[messageIndex];
  
  
    // 日付表示
    dailyDate.textContent =
      `${year}.${String(month).padStart(2, "0")}.${String(day).padStart(2, "0")}`;
  
      
  }
  // ==============================
// 今日のひとことを開く
// ==============================

const dailyMessageButton =
document.getElementById("daily-message-button");

const dailyMessageContent =
document.getElementById("daily-message-content");


if (dailyMessageButton && dailyMessageContent) {

dailyMessageButton.addEventListener("click", function() {

  dailyMessageContent.classList.add("show");

  dailyMessageButton.style.display = "none";

});

}