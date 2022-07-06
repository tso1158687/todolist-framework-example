
<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input type="text" class="new-todo" placeholder="What needs to be done?" v-model="newTodo"
                @keydown.enter="addTodo()" />
        </header>
    </section>

    <ul>
        <container v-for="todo in todoList " :key="todo.id">

            <li>{{ todo.content }}</li>
        </container>
    </ul>

    <h1>hihi</h1>
    <h3>asdsad</h3>
    <h2>{{ msg }} {{ greeting }}</h2>
    <ul>
        <li>asdasd</li>
        <a href="111">111</a>
    </ul>
    <input v-model="msg" type="text">
    <input v-model="price" type="text">

    <button @click="changeMsg()">change message</button>

    <ul>
        <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>

    <div>{{ total }}</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

/* eslint-disable */
@Options({
    props: {
        msg: String,
        // greeting: String
    },

    data() {
        return {
            msg: 'hello',
            greeting: 'jason',
            arr: ['008', 'JS', 'is', 'awesome'],
            price: 100,
            quantity: 10,
            newTodo: 'ssss',
            todoList: [{
                content: '吃飯',
                id: 1,
                completed: false,
            },
            {
                content: '睡覺',
                id: 2,
                completed: false,
            }]
        }
    },
    methods: {
        changeMsg(): void {
            this.msg = 'world'
        },
        addTodo(): void {
            if (this.newTodo.length === 0) {
                return;
            }

            const newTodo = {
                content: this.newTodo,
                completed: false,
                id: +new Date(),
            };

            this.todoList = [...this.todoList, newTodo];
            this.newTodo = '';
        }

    },
    computed: {
        total() {
            console.log('computed')
            return this.price * this.quantity
        }
    }
})
export default class Todo extends Vue {
    msg!: string
    greeting!: string
    arr!: string[]
    changeMsg!: Function
    addTodo!: Function
    total!: number
    price!: number
    newTodo!: string
    todoList!: {
        content: string,
        id: number,
        completed: boolean,
    }[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
