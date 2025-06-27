document.addEventListener('DOMContentLoaded', () => {
  // キャラクターのデータ配列
  const characters = [
    {
      id: 1,
      name: '天野 光輝 (あまの こうき)',
      catchphrase: 'ツッコミ担当の常識人！',
      description:
        'この物語の主人公で、唯一の常識人。周りの奇人変人たちにツッコミを入れるのに忙しいが、なんだかんだでお人好し。平凡な日常を夢見ている。',
      image: 'https://placehold.jp/3d405b/ffffff/400x400.png?text=光輝',
    },
    {
      id: 2,
      name: '風祭 莉奈 (かざまつり りな)',
      catchphrase: '予測不能のトラブルメーカー！',
      description:
        '光輝の幼馴染で、いつも突拍子もない行動で周囲を混乱させる。自称・天才発明家だが、作るものはガラクタばかり。でも、たまに奇跡を起こす。',
      image: 'https://placehold.jp/f4b393/ffffff/400x400.png?text=莉奈',
    },
    {
      id: 3,
      name: '鷹司 龍之介 (たかつかさ りゅうのすけ)',
      catchphrase: '俺様系ナルシスト生徒会長',
      description:
        'お金持ちで眉目秀麗、学園の生徒会長。しかし、極度のナルシストで自分の美しさに酔いしれている。光輝を一方的にライバル視している。',
      image: 'https://placehold.jp/a7c5eb/ffffff/400x400.png?text=龍之介',
    },
    {
      id: 4,
      name: '猫宮 ひなた (ねこみや ひなた)',
      catchphrase: '眠れる小動物系女子',
      description:
        'いつも眠そうにしている物静かな後輩。日当たりの良い場所を見つけては昼寝をしている。実はものすごい情報通で、学園の裏事情に詳しい。',
      image: 'https://placehold.jp/eac4d5/ffffff/400x400.png?text=ひなた',
    },
    {
      id: 5,
      name: '犬飼 健太 (いぬかい けんた)',
      catchphrase: '熱血！筋肉！友情！',
      description:
        'スポーツ万能で超ポジティブな熱血漢。光輝のクラスメイトで、何事も筋力で解決しようとする。細かいことは気にしない性格。',
      image: 'https://placehold.jp/d5a021/ffffff/400x400.png?text=健太',
    },
  ];

  // DOM要素の取得
  const mainCharacter = document.getElementById('main-character');
  const charImage = document.getElementById('char-image');
  const charName = document.getElementById('char-name');
  const charCatchphrase = document.getElementById('char-catchphrase');
  const charDescription = document.getElementById('char-description');
  const characterList = document.getElementById('character-list');

  // メインのキャラクター表示を更新する関数
  const updateMainCharacter = (character) => {
    // フェードアウト
    mainCharacter.style.opacity = 0;

    setTimeout(() => {
      charImage.src = character.image;
      charImage.alt = character.name;
      charName.textContent = character.name;
      charCatchphrase.textContent = character.catchphrase;
      charDescription.textContent = character.description;
      // フェードイン
      mainCharacter.style.opacity = 1;
    }, 300); // 0.3秒後に内容を更新してフェードイン
  };

  // キャラクター選択リストを生成する関数
  const createCharacterList = () => {
    characters.forEach((character) => {
      const li = document.createElement('li');
      li.className = 'character-item'; // CSSでカーソルをポインターにするため

      const button = document.createElement('button');
      button.className =
        'w-full h-full text-center group transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-lg';
      button.dataset.characterId = character.id;

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      img.className =
        'w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-white shadow-md transition-all duration-300 group-hover:border-sky-400';

      const p = document.createElement('p');
      p.textContent = character.name.split(' ')[0]; // 姓だけ表示
      p.className = 'mt-2 font-bold text-gray-700 group-hover:text-sky-600';

      button.appendChild(img);
      button.appendChild(p);
      li.appendChild(button);
      characterList.appendChild(li);

      // クリックイベントの追加
      button.addEventListener('click', () => {
        const selectedCharacter = characters.find(
          (c) => c.id == button.dataset.characterId
        );
        updateMainCharacter(selectedCharacter);
      });
    });
  };

  // 初期化処理
  const init = () => {
    createCharacterList();
    // ページ読み込み時に最初のキャラクターを表示
    if (characters.length > 0) {
      updateMainCharacter(characters[0]);
    }
  };

  init();
});
