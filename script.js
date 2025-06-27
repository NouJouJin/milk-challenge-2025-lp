// AOS（Animate On Scroll）ライブラリの初期化
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800, // アニメーションの期間
    easing: 'ease-in-out', // アニメーションの速度変化
    once: true, // アニメーションを1回だけ実行
    offset: 100, // トリガーとなるオフセット
  });
});