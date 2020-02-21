const will = {
    name: "Will Wu",
    birthPlace: "China",
    age: 25,
    isGraduated: false,
    education: "The future sphere",
    favoriteFood: ["Cheese burger", "Beef over rice", "Taco"],
    favoriteStar: {
        name: "Kobe Bryant",
        profession: "Basketball Star",
        age: 41,
    },
};

window.alert(will.name);

document.write(will.age);

document.getElementById("food").innerHTML = will.favoriteFood;

console.log(will.favoriteStar.name);