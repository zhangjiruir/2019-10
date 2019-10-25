let $box = $('.first_banner'),
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
            render(data)
            tipClick();
        },
        erroer: function () {
            console.log('失败')
        }
    })
}
getData();
function render(data) {
    let str = '';
    let $tipStr = '';
    data.push(data[0]);
    data.forEach((item, index) => {
        str += `<li>
        <img src="${item.img}" alt="">
    </li>`
        if (index == 0) {
            $tipStr += `<span class="tip current"></span> `
        } else if (index < data.length - 1) {
            $tipStr += `<span class="tip"></span> `
        }
    });
    
    $ul.html(str);
    $ul.width(730*data.length)
    $tipBox.html($tipStr)
    $tips = $tipBox.children('.tip')
}


function move() {
    n++;
    if(n > $tips.length){
      
        $ul.css('left',0);
        n = 1;
    }
    $ul.animate({ left: -730* n }, 300);
    autoFocus(n);
}
function autoMove() {
    timer = setInterval(() => {
        move()
    }, 2000);
}
autoMove()


function autoFocus(m){
    if(m >= $tips.length){
        m = 0;
    }
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
        $ul.css({left:-$tips.length*730});
        n = $tips.length-1;
    }
    $ul.animate({left:-n*730},200);
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
        $ul.animate({left:-730*m},500);
        autoFocus(m);
    })
}

