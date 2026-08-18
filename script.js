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