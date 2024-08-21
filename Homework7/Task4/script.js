function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let Clients = [
    new Client (1, 'Vlad', 'Verbovyi', 'vladvierboviy@gmail.com', '+380752654123', ['products', 'PlayStation 5', 'video card']),
    new Client (2, 'Sergiy', 'Verbovyi', 'sergiy0323@gmail.com', '+3808521562426', ['TV', 'products']),
    new Client (3, 'Iryna', 'Verbova', 'irinaverbova@gmail.com', '+3802233689441', ['apple', 'kiwi']),
    new Client (4, 'John', 'Stanford', 'stanjohnford@gmail.com', '+62135344124', ['books']),
    new Client (5, 'Anton', 'Samilenko', 'jinksdfv@gmail.com', '+72336412542', ['play card', 'games']),
    new Client (6, 'Philip', 'Bergish', 'fsfsfvn@gmail.com', '+632211323135', ['water']),
    new Client (7, 'Raduslav', 'Byrgomyr', 'fsafsdsdvc@gmail.com', '+951236412641', ['chicken']),
    new Client (8, 'Geralt', 'of Rivia', 'witcherkaermorhen@gmail.com', '+20226164961', ['sword', 'crossbow']),
    new Client (9, 'John', 'Shepard', 'commandernormandy@gmail.com', '+87878752424456', ['ship']),
    new Client (10, 'Liubomyr', 'Hrysd', 'lubchick@gmail.com', '+3809523341225', ['courses', 'smartphone'])
];
console.log(Clients);