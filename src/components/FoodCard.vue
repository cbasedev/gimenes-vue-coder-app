<template>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5"  v-for="product in products" :key="product.id">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" :src="product.image" :alt="product.description" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{product.description}}</h5>
                                    <!-- Product price-->
                                    <b>$ {{product.price}}</b>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Comprar</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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