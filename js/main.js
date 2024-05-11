const { createApp } = Vue

createApp({
    data() {
        return {
            hello: 'Hello Vue World!',
            image: "https://loremflickr.com/640/360",
        }
    }
}).mount('#app')