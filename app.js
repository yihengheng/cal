// 页面加载后执行的代码
window.onload = function() {
  console.log('PWA app is loaded!');

  // 示例：为按钮添加点击事件
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', function() {
      alert('按钮被点击了!');
    });
  }
};
