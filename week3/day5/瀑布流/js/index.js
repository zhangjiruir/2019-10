
// 先去获取数据
function getData(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','./data.json',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && /200|304/.test(xhr.status)){
            console.log(JSON.parse(xhr.response));
            let data =JSON.parse(xhr.response);
            render(data)
        }
    }
    xhr.send()
}
getData()


let body = document.getElementsByClassName('body')[0],
olis = body.getElementsByTagName('li');
function render(data){
    // data 是后台给的数组
    // 循环数组 拼接字符串 把拼接好的字符串放到页面上
    let str = '';
    data.forEach(item => {
        let { pic, author, desc, height } = item;
        str = `<div class="img_box">
        <img src="${pic}" alt="">
        <p class="desc">${desc}</p>
        <p class="author">${author}</p>
    </div>`
    
    });
}