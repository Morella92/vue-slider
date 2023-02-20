const { createApp } = Vue

createApp({
    data() {
        return {

            activeSlide: 0,

            slides: [
                {
                    image: './img/Barcellona.jpg',
                    title: 'Capital of Spain',
                    text: 'Park Guell',
                }, {
                    image: './img/Berlino.jpg',
                    title: 'Capital of Germany',
                    text: 'Porta di Brandeburgo',
                }, {
                    image: './img/Londra.jpg',
                    title: 'Capital of England',
                    text: 'Tower Bridge',
                }, {
                    image: './img/Parigi.jpg',
                    title: 'Capital of France',
                    text: 'Torre Eiffel',
                }, {
                    image: './img/Roma.jpg',
                    title: 'Capital of Italy',
                    text: 'Colosseo',
                }
            ]
        }
    },

    methods: {

        previousSlide: function() {

            this.activeSlide -= 1

        },

        nextSlide: function () {

            this.activeSlide += 1
        }
    }

}).mount('#app')