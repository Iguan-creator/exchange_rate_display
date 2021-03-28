const val = "https://www.cbr-xml-daily.ru/daily_json.js";
const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted() {
        axios.get(val).then(response => {
            this.results = response.data
        })
    },
});