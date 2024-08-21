// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let Users = [
    new User (1, 'Vlad', 'Verbovyi', 'vladvierboviy@gmail.com', '+380752654123'),
    new User (2, 'Sergiy', 'Verbovyi', 'sergiy0323@gmail.com', '+3808521562426'),
    new User (3, 'Iryna', 'Verbova', 'irinaverbova@gmail.com', '+3802233689441'),
    new User (4, 'John', 'Stanford', 'stanjohnford@gmail.com', '+62135344124'),
    new User (5, 'Anton', 'Samilenko', 'jinksdfv@gmail.com', '+72336412542'),
    new User (6, 'Philip', 'Bergish', 'fsfsfvn@gmail.com', '+632211323135'),
    new User (7, 'Raduslav', 'Byrgomyr', 'fsafsdsdvc@gmail.com', '+951236412641'),
    new User (8, 'Geralt', 'of Rivia', 'witcherkaermorhen@gmail.com', '+20226164961'),
    new User (9, 'John', 'Shepard', 'commandernormandy@gmail.com', '+87878752424456'),
    new User (10, 'Liubomyr', 'Hrysd', 'lubchick@gmail.com', '+3809523341225')
];
const filterFunction = (user) => user.id % 2 === 0;
console.log(Users.filter(filterFunction));