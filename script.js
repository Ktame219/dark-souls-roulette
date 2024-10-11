const traits = ["戦士", "騎士", "放浪者", "盗人", "山賊", "狩人", "魔術師", "呪術師", "聖職者", "持たざる<br>もの"];
const stats = ["筋力", "技量", "理力", "信仰"];

const equipment = {
    "戦士": ["短剣", "直剣", "大剣", "斧", "槌", "槍", "拳", "小盾", "中盾", "弓", "クロスボウ"],
    "騎士": ["短剣", "直剣", "大剣", "特大剣", "刺剣", "槍", "斧槍", "盾全種", "弓", "クロスボウ", "タリスマン"],
    "放浪者": ["短剣", "曲剣", "大曲剣", "刀", "小盾", "弓", "クロスボウ"],
    "盗人": ["重量３以下の武器", "小盾", "弓"],
    "山賊": ["斧", "大斧", "槌", "大槌", "盾全種", "弓"],
    "狩人": ["短剣", "直剣", "鞭", "小盾", "中盾", "弓", "クロスボウ"],
    "魔術師": ["短剣", "刺剣", "鞭", "小盾", "杖"],
    "呪術師": ["短剣", "直剣", "曲剣", "刀", "斧", "鞭", "拳", "小盾", "弓", "クロスボウ", "呪術の火"],
    "聖職者": ["短剣", "直剣", "槌", "小盾", "中盾", "大盾", "弓", "暗月の錫杖", "タリスマン"],
    "持たざるもの": ["全武器種", "竜体化"]
};

function spin() {
    const trait = traits[Math.floor(Math.random() * traits.length)].replace("<br>", ""); // 改行タグを削除して素性を取得
    document.getElementById("slot1").innerHTML = trait;
    document.getElementById("slot2").textContent = stats[Math.floor(Math.random() * stats.length)];
    document.getElementById("slot3").textContent = stats[Math.floor(Math.random() * stats.length)];

    // 対応するアイテムを取得し、表示する文字列を設定
    const items = equipment[trait].join("、");
    document.getElementById("result").textContent = `"${trait}"は"${items}"を使ってもよい`;
}
