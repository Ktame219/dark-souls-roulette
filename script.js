const traits = ["戦士", "騎士", "放浪者", "盗人", "山賊", "狩人", "魔術師", "呪術師", "聖職者", "持たざる<br>もの"]; // 持たざるものに改行を追加
const stats = ["筋力", "技量", "理力", "信仰"];

function spin() {
    document.getElementById("slot1").innerHTML = traits[Math.floor(Math.random() * traits.length)];
    document.getElementById("slot2").textContent = stats[Math.floor(Math.random() * stats.length)];
    document.getElementById("slot3").textContent = stats[Math.floor(Math.random() * stats.length)];
}
