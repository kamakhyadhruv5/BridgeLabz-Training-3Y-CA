
const user = {
    name: "Dhruv",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Fix using normal function

const user2 = {
    name: "Dhruv",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();
