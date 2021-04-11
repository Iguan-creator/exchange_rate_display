Vue.component('exchange', {

    template: ` 
    <div class="exchange">
        <h3 class="text-center">Курсы валют</h3>
        <div v-if="loaded">
              <div class="preloader">
               <h3 class="text-center">Курсы валют</h3>
                    <div class="preloader__row">
                    <div class="preloader__item"></div>
                    <div class="preloader__item"></div>
                    </div>
               </div>
        </div>
    
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
            results: [],
            url: 'https://www.cbr-xml-daily.ru/daily_json.js',
            loaded: true
        }

    },

    created() {
        axios.get(this.url).then(response => {
            this.results = response.data
            setTimeout(() => this.loaded = false, 3000);
        })
    }
})


let app = new Vue({
    el: '#app',
});

