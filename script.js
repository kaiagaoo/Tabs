const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 移除所有active classes
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // 给点击的tab添加active
    tab.classList.add('active');

    // 获取tab对应的内容ID并显示
    const tabId = tab.getAttribute('data-tab');
    const contentToShow = document.getElementById(tabId);
    contentToShow.classList.add('active');
  });
});