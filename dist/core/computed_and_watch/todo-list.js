'use strict';

var _test_es = require('../../../dist/test_es');

var _test_es2 = _interopRequireDefault(_test_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_test_es2.default); /**
                                 * Created by Arvin on 2018/8/7.
                                 */

var name = 'arvin';

var Event = new Vue();
Event.$on('test', function (msg) {
    console.log(msg);
});

Vue.component('todo-item', {
    template: '\n            <li>\n                {{ title }} from ' + name + '\n                <button v-on:click="$emit(\'remove\')">Remove {{ id }}</button>\n            </li>\n        ',
    props: ['id', 'title']
});

var vm = new Vue({
    el: '#todo-list',
    data: {
        todos: [{
            id: 1,
            title: 'feed the cat'
        }, {
            id: 2,
            title: 'feed the doge'
        }, {
            id: 3,
            title: 'feed the mouse'
        }],
        newTodoText: 'sss',
        addBtnName: '',
        addNewArrStr: []
    },
    computed: {
        total: function total() {
            return this.todos.length;
        },
        nextTodoId: function nextTodoId() {
            return this.total + 1;
        },
        getNewAddBtnName: function getNewAddBtnName() {
            return this.newTodoText + (this.newTodoText ? '?' : '');
        }
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
        addNewTodo: function addNewTodo() {
            var _this = this;

            if (!this.newTodoText) {
                alert('cat not be empty');
                return false;
            }
            Event.$emit('test', 'hi on event, I\'m $emit, my name is ' + name + ', this message is ' + this.newTodoText);
            this.todos.push({
                id: this.nextTodoId,
                title: this.newTodoText
            });
            this.newTodoText = '';
            this.$nextTick(function () {
                return console.log('this.newTodoText 已置空', _this.addBtnName);
            });
        }
    }
});