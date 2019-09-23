// 获取数据 展示到页面上
let data = null;

let xhr = new XMLHttpRequest();
xhr.open('get','./data.json',true);// true 代表异步  false 代表同步
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // console.log(JSON.parse(xhr.response));
        data = JSON.parse(xhr.response)
        render(data);// 请求成功之后 再去渲染数据
        myBind(data)
    }
}
xhr.send();

let box = document.getElementById('box'),
   timeBtn = document.getElementById('timeBtn'),
   priceBtn = document.getElementById('priceBtn'),
   commentBtn = document.getElementById('commentBtn');

function render(ary){
    // 把数据渲染到页面上
    console.log(ary);// ary  就是后台传过来的数组
    let str = '';
    ary.forEach(item => {
        let {img,title,price,num} = item;
        str +=`<li>
        <div class="imgBox">
            <img src="${img}" alt="">
        </div>
        <div class="til">${title}</div>
        <div class="desc">${title}</div>
        <div class="price">${price}</div>
        <div class="botBox">
            <div>选购</div>
            <div>${num}评价</div>
        </div>
    </li>`;
    
    });
    // str 就是拼接好的字符串
    box.innerHTML = str;
}

//  点击上架时间按钮
function myBind(data){
    // myBind 就是实现了一个 所有按钮的事件绑定 功能
    timeBtn.flag = 1;
    timeBtn.onclick = function (){
        this.flag *= -1;
        data.sort((a,b)=>{
            return (a.time - b.time)*this.flag
        })
        render(data);// 把排好序之后的数组 重新渲染
    }


    priceBtn.flag = 1;
    priceBtn.onclick = function (){
        this.flag *= -1;
        data.sort((a,b)=>{
            return (a.price - b.price)*this.flag
        })
        render(data);// 把排好序之后的数组 重新渲染
    }

    commentBtn.flag = 1;
    commentBtn.onclick = function (){
        this.flag *= -1;
        data.sort((a,b)=>{
            return (a.num - b.num)*this.flag
        })
        render(data);// 把排好序之后的数组 重新渲染
    }
}
