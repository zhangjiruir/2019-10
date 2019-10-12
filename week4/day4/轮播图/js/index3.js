let $box = $('#box'),
    //$ul = $('#box.img_box ul'),
    //$ul = $box.children('.img_box').children('ul');
    $ul = $box.find('ul'),
    $tipBox = $box.find('.tip_box'),
    $tip = $tipBox.children('.tip'),
    $leftBtn = $box.find('.left_btn'),
    $rightBtn = $box.find('.right_btn');
let n = 0, timer = null


function getData() {
    // 获取数据
    $.ajax({
        type: 'get',
        url: './data.json',
        success: function (data) {
            // 请求成功执行的函数
            //console.log(data)
            render(data)
            tipClick();//在数据加载完成之后 再去执行绑定事件
        },
        erroer: function () {
            // 请求失败执行的函数
            console.log('失败')
        }
    })
}
getData();
function render(data) {
    let str = '';
    let $tipStr = '';
    data.push(data[0]);// 补图
    data.forEach((item, index) => {
        str += `<li>
        <img src="${item.img}" alt="">
        <p class="desc">${item.desc}</p>
    </li>`
        if (index == 0) {
            $tipStr += `<span class="tip current"></span> `
        } else if (index < data.length - 1) {
            $tipStr += `<span class="tip"></span> `
        }
    });
    //$ul.innerHTML = str;
    $ul.html(str);
    $ul.width(658*data.length)
    $tipBox.html($tipStr)
    $tips = $tipBox.children('.tip')//更新tips
}


function move() {
    n++;
    if(n > $tips.length){
        // 闪到第一张
        $ul.css('left',0);
        n = 1;
    }
    $ul.animate({ left: -658* n }, 300);
    autoFocus(n);//显示点的动作
}
function autoMove() {
    timer = setInterval(() => {
        move()
    }, 2000);
}
autoMove()


function autoFocus(m){
    if(m >= $tips.length){
        m = 0;// m == $tips.length  显示的时伪第一张

    }
    // m 就是要有点的那个索引
    $tips.eq(m).addClass('current').siblings().removeClass('current')
}
$box.on('mouseenter',function(){
    clearInterval(timer);
})
$box.on('mouseleave',function(){
    autoMove()
})
$leftBtn.on('click',function(){
    n--;
    if(n < 0){
        $ul.css({left:-$tips.length*658});//闪到最后一张
        n = $tips.length-1;
    }
    $ul.animate({left:-n*658},200);
    autoFocus(n)
})
$rightBtn.on('click',function(){
    move()
})
function tipClick(){
    $tips.on('click',function(){
        console.log($(this).index())
        let m = $(this).index();
        n=m;
        $ul.animate({left:-658*m},500);
        autoFocus(m);
    })
}

