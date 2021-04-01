Vue.component('exchange', {
    template: `  
    <div class="exchange">
        <h3 class="text-center">Курсы валют</h3>
        <div class="columns medium-4" v-for="result in results.Valute">
            <div class="card">
                <div class="card-divider">
                    <p>{{result.Name}}</p>
                    <p>{{result.CharCode}}</p>
                    <p>{{'Сегодня: ' + result.Value}}</p>
                    <p>{{'Вчера: ' + result.Previous}}</p>
                </div>
            </div>
        </div>
    </div>`,

    data() {
        return {
            results: []
        }
    },

    created() {
        axios.get(val).then(response => {
            this.results = response.data
        })
    }

})

const val = "https://www.cbr-xml-daily.ru/daily_json.js";

app = new Vue({
    el: '#app',
});