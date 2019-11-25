Vue.filter('money',function(val){
    return "$"+(val/100).toFixed(2)
})

new Vue({
    el:'#app',
    data:{
        name:'珠峰',
        datalist:[],
        total:0,
        checkAll:true,
        show:false,
        delindex:null
    },
    created(){
        // 钩子函数   实例创建完成之后会触发该函数 
        this.getData()
    },
    methods: {
        getData() {
            fetch('./data.json').then((res)=>{
                return res.json()
            }).then(data=>{
                console.log(data)
                this.datalist = data;
                this.sum();
                // 重置 checkAll属性
                this.checkAll = this.datalist.every(item=>item.isSelect)
            }).catch((err)=>{
                console.log(err)
            })
        },
        sum(){
            // 求总价
            // 筛选出选中的商品
            // let ary = this.datalist.filter(item=>item.isSelect);
            // let t = 0;
            // ary.forEach(item=>{
            //     t += item.count*item.price
            // })
            // this.total = t;
            this.total = this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)
        },
        checkAllFn(){
            // 点击全选触发事件
            this.datalist.forEach(item=>{
                item.isSelect = this.checkAll
            })
            // 重新计算总价
            this.sum();
        },
        checkOneFn(){
            this.checkAll = this.datalist.every(item=>item.isSelect)
            this.sum();
        },
        del(n){
            // this.datalist.splice(n,1);
            // this.sum()
            this.delindex = n; 
            this.show = true
        },
        cancel(){
            this.show = false
        },
        sure(n){
            this.datalist.splice(this.delindex,1);
            this.sum();
            this.show = false;
        },
        clear(){
            this.datalist = [];
            this.sum();
            this.checkAll = false
        }
    },
    
    
    
})