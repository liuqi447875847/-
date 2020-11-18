// 点击样式
$('.nav').on('click',function(){
    $('.nav').find('a').removeClass('light')
    $(this).addClass('light')
})
// 数据请求
if(window.XMLHttpRequest){
  var ajax_ = new XMLHttpRequest();
}
else{
  var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
}
  ajax_.open('get', 'http://192.168.1.64:3000/play/new', true);
  ajax_.send();
  ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4 && ajax_.status == 200){
      var data = ajax_.responseText;
      /* 4.数据 */
      data = JSON.parse(data);
      console.log(data);

      var dot_tem = doT.template(document.getElementById('list_template').innerText);
      list.innerHTML = dot_tem(data[0]);
    }
}
