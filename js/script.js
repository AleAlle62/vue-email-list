new Vue ({
    el: '#app',
    data : {
        // array 
        arrEmail : [],
    },
    // metodo per creazione delle mail 
    methods : {
        getEmail(){
            // 10 mail 
            for (let i = 0; i < 10; i++){
                //API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                // tipo return 
                .then(axiosRisposta => {
                    // console.log(axiosRisposta)
                    // pusha la risposta nell'array 
                    this.arrEmail.push(axiosRisposta.data.response)

                    // BONUS ??
                    // if(this.arrEmail[i] === 10){
                    //     console.log('prova tutto insieme')
                    // }

                })
            }
        },
    }
})

