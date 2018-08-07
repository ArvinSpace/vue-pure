/**
 * Created by Arvin on 2018/8/7.
 */
import test_es from "../../../dist/test_es";
console.log(test_es);
const name = 'arvin';

const Event = new Vue();
Event.$on('test', (msg) => {console.log(msg)});

Vue.component('todo-item', {
    template: `
            <li>
                {{ title }} from ${name}
                <button v-on:click="$emit(\'remove\')">Remove {{ id }}</button>
            </li>
        `,
    props: ['id', 'title']
});

var vm = new Vue({
    el: '#todo-list',
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
        newTodoText: 'sss',
        addBtnName: '',
        addNewArrStr: []
    },
    computed: {
        total () {return this.todos.length},
        nextTodoId () {return this.total + 1},
        getNewAddBtnName () {return this.newTodoText + (this.newTodoText ? '?' : '')}
    },
    watch: {
        /*
         E.g. //vm.$watch('newTodoText', function(newVal, oldVal) {this.addBtnName = newVal + (newVal ? '?' : '')}, {immediate: true})
         */
//            newTodoText: {
//                immediate: true,
//                handler (val) {
//                    this.addBtnName = val + (val ? '?' : '')
//                }
//            }
    },
    methods: {
        addNewTodo() {
            if (!this.newTodoText) {
                alert('cat not be empty');
                return false;
            }
            Event.$emit('test', `hi on event, I'm $emit, my name is ${name}, this message is ${this.newTodoText}`)
            this.todos.push({
                id: this.nextTodoId,
                title: this.newTodoText
            });
            this.newTodoText = '';
            this.$nextTick(() => console.log('this.newTodoText 已置空', this.addBtnName));

        }
    }
});