<template>
    <div class="container">
        <Swiper class="h-full" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
            :effect="'creative'" :autoplay="{
                delay: 2500,
                disableOnInteraction: true,
            }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
            <SwiperSlide>
                <img src="https://i.picsum.photos/id/735/536/354.jpg?hmac=QbcithUsGapa5RK_Oa1ZnnPIh3X-IDt1BD0sYRvDyR8" :key="1" class="swiper-img" />

            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.picsum.photos/id/1066/536/354.jpg?hmac=JFTBxrkkqJIgvtYQlVQT_L2svvgomCPYezEXCqme7LQ" :key="2" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.picsum.photos/id/271/536/354.jpg?hmac=y85-qoLKZmshtoXZ3dm9QbbYTwi9kxsQrwut3tmjdJQ" :key="3" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws" :key="4" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.picsum.photos/id/134/536/354.jpg?hmac=GqngKpJ4MNwWb4KIR11yok3yVmLUyrVIYAX2E37h4dA" :key="5" class="swiper-img" />
            </SwiperSlide>
        </Swiper>
        <NuxtLink style="text-align: center;" to="/page2">page 2</NuxtLink>
    </div>
</template>
<style  >
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 2rem;
}
.swiper{
    max-width: 200px;
    max-height: 300px;
}
.swiper-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>