Vue.directive('focus', function (el, obj) {
    if (obj.value) {
        setTimeout(() => {
            el.focus()
        }, 10)
    }
})

new Vue({
    el: '#app',
    data: {
        ary: [{
            id: 1,
            todo: '吃饭',
            done: false,
            editable: false
        }, {
            id: 2,
            todo: '睡觉',
            done: false,
            editable: false
        }, {
            id: 3,
            todo: '打豆豆',
            done: true,
            editable: false
        }],
        todo: '',
        count:0,
        hash: '',// 用来存储当前路径的hash值
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange', () => {
            this.hash = location.hash
        })
    },
    methods: {
        submit() {
            this.todo = this.todo.trim();
            if (!this.todo) return;
            let obj = {
                id: Math.random(),
                done: false,
                todo: this.todo,
                editable: false
            }
            this.ary.unshift(obj);
            this.todo = '';
        },
        change(obj) {
            obj.editable = !obj.editable
        },
        del(n) {
            this.ary.splice(n, 1)
        }
    },
    computed: {
        todoAry() {
            // 未完成的事件各数  因为只要数组发生改变 count就要重新赋值
            this.count = this.ary.filter(item=>!item.done).length
            // 依赖于 ary  hash
            switch (this.hash) {
                case '#/all':
                    // 若是全部列表 则把整个数字返回
                    return this.ary
                    break;

                case '#/finished':
                    // 若是完成列表 则返回 ary中 done属性是true的向
                    return this.ary.filter(item => item.done)
                    break;

                case '#/unfinished':
                    return this.ary.filter(item => !item.done)
                    break;
                default:
                    break;
            }
        }
    }
})