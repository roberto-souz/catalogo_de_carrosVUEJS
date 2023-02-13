const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7-950-250-71-65', 'img/Ford_Focus.jpg'),
    car('Ford', 'Mondeo', 'Konstantin', 2013, '+7-952-111-33-15', 'img/Ford_Mondeo.jpg'),
    car('Porsche', 'Panamera', 'Alexandra', 2015, '+7-952-259-97-00', 'img/Panamera.jpg')
]



new Vue( {
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = this.filteredCars[index];
            this.selectCarIndex = index;
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(log('Success order: ' + this.car.name + '-' + this.car.model, 'ok'))
        }, 
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(log('Cancelled order: ' + this.car.name + '-' + this.car.model, 'cnl'))
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return  this.cars.filter(car => {
                return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
} )