import React from "react";

import Routers from "./Routers";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      user: [
        {
          id: 1,
          name: "Alice",
          contact: { cc: -91, num: 223344 },
          email: "alice@gmail.com",
          gender: "male",
        },
        {
          id: 2,
          name: "Bob",
          contact: { cc: -91, num: 223344 },
          email: "bob@gmail.com",
          gender: "male",
        },
        {
          id: 3,
          name: "Carry",
          contact: { cc: -91, num: 223344 },
          email: "carry@gmail.com",
          gender: "female",
        },
        {
          id: 4,
          name: "Denver",
          contact: { cc: -91, num: 223344 },
          email: "denver@gmail.com",
          gender: "male",
        },
      ],
    };
  }

  editUserInfo = (editedData) => {
    // const edt = [];
    // this.state.user.map((user) =>
    //   user.id === editedData[0].id ? edt.push(editedData[0]) : edt.push(user)
    // );// this.setState({ user: edt });
    const userBeforeEdit = this.state.user.find(
      (user) => user.id === editedData[0].id
    );
    editStateUser(userBeforeEdit);

    function editStateUser(userBeforeEdit) {
      if (userBeforeEdit.name !== editedData[0].name)
        userBeforeEdit.name = userBeforeEdit.name.replace(
          userBeforeEdit.name,
          editedData[0].name
        );
      console.log("updatedField", userBeforeEdit.name);

      if (userBeforeEdit.email !== editedData[0].email)
        userBeforeEdit.email = userBeforeEdit.email.replace(
          userBeforeEdit.email,
          editedData[0].email
        );
      console.log("updatedField", userBeforeEdit.email);
      
      if (userBeforeEdit.contact.num !== editedData[0].contact.num)
        userBeforeEdit.contact.num = userBeforeEdit.contact.num.replace(
          userBeforeEdit.contact.num,
         editedData[0].contact.num
        );
      console.log("updatedField", userBeforeEdit.contact.num);

      // if (userBeforeEdit.gender !== editedData[0].gender)
      //   userBeforeEdit.gender = userBeforeEdit.gender.replace(
      //     userBeforeEdit.gender,
      //     editedData[0].gender
      //   );
      // console.log("updatedField", userBeforeEdit.gender);
    }
  };

  addFormDataIntoTable = (formData) => {
    const usersRef = this.state.user;
    usersRef.push(formData);
    this.setState({ user: usersRef });
  };

  deleteData = (id) => {
    const newUser = [...this.state.user];
    const indexForDelete = newUser.findIndex((item) => item.id === id);
    newUser.splice(indexForDelete, 1);
    this.setState({ user: newUser });
  };

  isUserEdit = (check) => {
    this.setState({ isEdit: check });
    console.log("isedit", this.isEdit);
  };

  render() {
    const { user, isEdit } = this.state;
    return (
      <Routers
        user={user}
        isEdit={isEdit}
        addFormDataIntoTable={this.addFormDataIntoTable}
        isUserEdit={this.isUserEdit}
        deleteData={this.deleteData}
        editUserInfo={this.editUserInfo}
      />
    );
  }
}
export default Home;
