//TODO: – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }

  this.info = function () {
    for (const key in this) {
      console.log(key, this[key])
    }
  }

  this.increaseMaxSpeed = function (newSpeed) {
  if (maxSpeed > 0){
    this.maxSpeed = this.maxSpeed + newSpeed;
  }
  }
  
  this.changeYear = function (newValue) {
    if (newValue > 1886) {
      this.year = newValue;
    }
  }

  this.addDriver = function(driver) {
    this.driver = driver;
  };
}

const car1 = new Car('Camry', 'Toyota', 2021, 210, 2.5);
const car2 = new Car('Model 3', 'Tesla', 2023, 250, 0);
const car3 = new Car('Civic', 'Honda', 2020, 195, 1.6);

car1.drive();

car1.increaseMaxSpeed(30);
car1.drive();

car1.changeYear(2024);
console.log(car1.year);

car1.addDriver({ name: 'Іван', age: 35, license: 'B' });
console.log(car1.driver)

car1.info();
