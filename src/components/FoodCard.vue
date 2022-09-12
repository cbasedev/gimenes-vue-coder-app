<template>
    <div>
        <table v-for="product in products" :key="product.id">
            <tr>
                <td>
                    <div>
                        <img :src="product.image" class="card-img-top" alt="food image"/>
                        <b-card>
                            <b-card-text>
                                {{product.description}}
                            </b-card-text>
                            <a href="#">Comprar <b>$ {{product.price}}</b></a>
                        </b-card>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    description: 'Fideos con Salsa fileto',
                    image: 'http://www.cbase.com.ar/assets/fideos.jpeg',
                    price: 800.00
                },
                {
                    id: 2,
                    description: 'Milanesas con papas fritas',
                    image: 'http://www.cbase.com.ar/assets/milanesa.jpeg',
                    price: 950.00
                },
                {
                    id: 3,
                    description: 'Bife con puré',
                    image: 'http://www.cbase.com.ar/assets/bife.jpeg',
                    price: 880.00
                },
                {
                    id: 4,
                    description: 'Tortilla de papa',
                    image: 'http://www.cbase.com.ar/assets/tortilla.png',
                    price: 430.00
                },
            ]
        }
    }
}
</script>

<style scoped>

    img{
        max-width: 20rem;
    }

</style>