<ul>
    <li v-for="(product, index) of products" v-bind:key="product.id" role="presentation">
        <input type="number" v-model.number="product.quantity" v-if="index % 2 === 0"/>
        <!--<span v-if="index % 2 != 0">{{ product.quantity }}</span> {{ product.name }}-->
        {{ index % 2 != 0 ? product.quantity : '' }} {{ product.name }}
        <button @click="product.quantity += 1">Add</button>
        <button @click="product.quantity -= 1">Reduce</button>
        <span v-if="product.quantity <= 0"> - OUT OF QUANTITY</span>
    </li>
</ul>
<label>total products:{{ products.length }} - total quantity:{{ totalQuantity }}</label>
<p>
    <button @click="products.push({ name: Math.floor(Math.random() * 10 * 100), quantity: Math.floor(Math.random() * 10) })">Add</button>
    <button @click="products.pop()">Reduce</button>
</p>