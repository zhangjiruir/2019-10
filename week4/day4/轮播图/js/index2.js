class Banner{
    constructor(idSelector){
        this.box = document.querySelector(idSelector);
        this.ul = this.box.querySelector('.img_box ul');
        this.tipBox = this.box.querySelector('.tip_box');
        this.tips = this.box.getElementsByClassName('tip');
        this.leftBtn = this.box.querySelector('.left_btn');
        this.rightBtn = this.box.querySelector('.right_btn');
        this.n = 0;
        this.timer = null;
        this.getData();// 获取数据

    }
    getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', './data.json', true);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
                let data = JSON.parse(xhr.response);
                console.log(data);
                this.render(data);
                this.move();//数据渲染完成之后再去开启动画
                this.tipClick();
                this.bindEvent()
            }
        }
        xhr.send();
    }
    render(data) {
        data = data || [];
        let str = '';
        let tipStr = '';
        data.push(data[0])
        data.forEach((item, index) => {
            let {img,desc} = item;
            str += `<li>
            <img src="${img}" alt="">
            <p class="desc">${desc}</p>
        </li>`;
            if (index !== data.length-1) {
                if (index == 0) {
                    tipStr += `<span class="tip current"></span>\n`
                } else {
                    tipStr += `<span class="tip"></span>\n`
                }
            }
    
        })
        this.tipBox.innerHTML = tipStr;
        this.ul.innerHTML = str;
        this.ul.style.width = data.length * 658 + 'px'; //更新盒子的改变
    }
    move() {
        this.timer = setInterval(() => {
           this.change()
        }, 1500)
    }
    change(){
        this.n++; //n = 4 的时候显示的是 伪 第一张
            if (this.n == (this.tips.length+1)) {
                this.ul.style.transition = ' left 0s ease-in';
                this.ul.style.left = 0; //让图片直接闪到第一张； 紧接着要想第二张图移动
                this.n = 1
            }
            this.tipClass(this.n)
            setTimeout(()=>{
                this.ul.style.transition = ' left 0.5s ease-in';
                this.ul.style.left = -658*this.n + 'px';
            },20)
    }
    tipClass(m){
        m = m >= this.tips.length ? 0 : m;//当指向了伪第一张的时候 我们要让第一个高亮
        for(let i = 0;i < this.tips.length; i++){
            this.tips[i].className = 'tip'
        }
        this.tips[m].className = 'tip current'
    }


    bindEvent(){
        // 只负责绑定事件
        this.box.onmouseenter = ()=> {
            clearInterval(this.timer);
        }
        //滑出盒子时  重启动画
        this.box.onmouseleave = ()=> {
            this.move()
        }
        this.rightBtn.onclick = this.debounce(()=>{
            this.change()
        })
        this.leftBtn.onclick =()=>{
            this.n--;
            if(this.n<0){
                this.ul.style.transition = 'none';// 闪到最后一张 清除过度动画
                this.ul.style.left = -658*(this.tips.length)+'px';
                this.n = this.tips.length-1;;
            }
            this.tipClass(this.n);
            //animate(ul, {left: -658 * n}, 500)
            setTimeout(()=>{
                this.ul.style.transition = ' left 0.5s ease-in';
                this.ul.style.left = -658*this.n + 'px';
            },10)
        }
    }
    tipClick(){
        for(let i = 0 ;i < this.tips.length; i++){
            this.tips[i].onclick = ()=>{
                this.n = i;
                this.tipClass(this.n);
                //animate(ul, {left: -658*n}, 500)
                this.ul.style.transition = 'left 0.5s ease-in';
                this.ul.style.left = -658*this.n+'px'
            }
        }
    }
    debounce(fn,wait=500){
        var timer = null;
        return function(){
            if(timer == null){
                fn.apply(this,arguments);
                timer = 0;
                return;
            }
            clearTimeout(timer);
            timer = setTimeout(()=>{
                // fn(...arguments)
                fn.apply(this,arguments);
                timer = null;
            },wait)
        }
    }
}


