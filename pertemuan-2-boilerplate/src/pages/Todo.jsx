import React from 'react';

const Todo = () => {
  main()
  return (
    <div>
      <h2>Check in your console</h2>
    </div>
  );
}

// Jangan mengubah apapun pada function main
const main = () => {
  console.log("# Get All Users");
  all()

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics"
  };
  store(newUser)

  console.log("# Edit User: Isfa")
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  }
  update(1, editedUser)

  console.log("# Delete User: Nurul");
  destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
  {
    name: "Lelouch Lamperouge",
    age: 18,
    major: "Strategi Perang",
  },
  {
    name: "Edward Elric",
    age: 17,
    major: "Alkimia",
  },
  {
    name: "Monkey D. Luffy",
    age: 19,
    major: "Bajak Laut",
  },
  {
    name: "Light Yagami",
    age: 23,
    major: "Hukum",
  },
  {
    name: "Spike Spiegel",
    age: 27,
    major: "Bebop Bounty Hunter",
  },
];

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
  console.log("### List of Users ###");
  for (let i = 0; i < users.length; i++) {
    console.log(`User ${i + 1}:`);
    console.log(`Name: ${users[i].name}`);
    console.log(`Age: ${users[i].age}`);
    console.log(`Major: ${users[i].major}`);
  }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
  users.push(user);
  console.log(`${user.name} has been added to the list of users.`);
}

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
  if (index >= 0 && index < users.length) {
    console.log(`User ${index + 1} has been updated.`);
    users[index].name = user.name;
    users[index].age = user.age;
    users[index].major = user.major;
  } else {
    console.log("Invalid index for updating user.");
  }
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    const deletedUser = users.splice(index, 1);
    console.log(`User ${deletedUser[0].name} has been removed from the list.`);
  } else {
    console.log("Invalid index for deleting user.");
  }
}


export default Todo;
