/**
 * Created by Arvin on 2018/8/7.
 */
let name = 'arvin';

const Event = new Vue();
Event.$on('test', (msg) => {console.log(msg)});

var vm = new Vue({
    // el: '#todo-list',
    // beforeDetroy () {
    //     console.log('beforeDetroy')
    //     this.$off('click');
    //     this.$off('remove');
    // },

    beforeCreate () {
        console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============组件2》')
    },
    created () {
        console.group('%c%s', 'color:red', 'created 创建完毕状态===============组件2》')
    },
    beforeMount () {
        console.group('%c%s', 'color:red', 'beforeMount 挂载前状态===============组件2》')
    },
    mounted () {
        console.group('%c%s', 'color:red', 'mounted 挂载状态===============组件2》')
    },
    beforeUpdate () {
        console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态===============组件2》')
    },
    updated () {
        console.group('%c%s', 'color:red', 'updated 更新状态===============组件2》')
    },
    beforeDestroy () {
        console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============组件2》')
    },
    destroyed () {
        console.group('%c%s', 'color:red', 'destroyed 破坏状态===============组件2》')
    },

    data: {
        todos: [
            {
                id: 1,
                title: 'feed the cat'
            },
            {
                id: 2,
                title: 'feed the doge'
            },
            {
                id: 3,
                title: 'feed the mouse'
            }
        ],
        newTodoText: 'what you wanna be to do',
        addBtnName: '',
        addNewArrStr: [],
        nextTodoId: 4,
        name: name
    },
    computed: {
        total () {return this.todos.length},
        newAddBtnName: {
            get () {
                const val = this.newTodoText + (this.newTodoText ? '?' : '');
                console.log('1 返回 this.newAddBtnName', val)
                return val;
            },
            set (newValue) {
                this.addNewArrStr = newValue.split(' ');
                console.log('2 this.addNewArrStr 已设置', this.addNewArrStr)
            }
        }
    },
    watch: {
        /*
         E.g. //vm.$watch('newTodoText', function(newVal, oldVal) {this.addBtnName = newVal + (newVal ? '?' : '')}, {immediate: true})
         */
           newTodoText: {
               immediate: true,
               handler (val) {
                   this.addBtnName = val + (val ? '?' : '')
               }
           }
    },
    methods: {
        addNewTodo() {
            if (!this.newTodoText) {
                alert('cat not be empty');
                return false;
            }
            Event.$emit('test', `hi on event, I'm $emit, my name is ${name}, this message is ${this.newTodoText}`)
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            let addBtnNameOld = this.newTodoText;
            this.newTodoText = '';
            this.$nextTick(function() {
                this.newAddBtnName = addBtnNameOld;
                let s = this.newAddBtnName;
                console.log('3 this.newTodoText 已置空', s)
            });
        }
    }
});
vm.$mount('#todo-list');