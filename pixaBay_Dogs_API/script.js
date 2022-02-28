
const app = Vue.createApp({ 
    data(){
        return { 
            dogs: null,    
            dog: null,    
            loading: true
        }
    },
    methods:{       
        showDog(id){ 

            
            this.dog = this.dogs[id]

            window.scrollTo({ top: 0, behavior: "smooth" }) 
        }
    },  
    mounted () {
        
        axios.get('https://pixabay.com/api/?key=25912716-467198e278a8e85e6c8309490&q=dogs&image_type=photo')
            .then(response => {
                console.log(response);
                this.dogs = response.data.hits,
                this.loading = false
            })
            .catch(error => console.log(error));
    } 
}).mount('#app')