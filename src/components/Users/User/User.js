import React, { Component } from "react";
import "./User.css";

class User extends Component {

    state = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      comment: "",
      isActive: true
    };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.surname]: e.target.surname,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.comment]: e.target.value,
      isActive: false
    });
  };

  handleSubmit = (e) => {
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("surname", this.state.surname);
    localStorage.setItem("phone", this.state.phone);
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("comment", this.state.comment);
    alert("Meumatlar muveffeqiyyetle gonderildi!")
  };

  render() {
    return (
      <div className="main">
        <div className="info">
          <form className="user-form">
            <label htmlFor="name">
              Adi:
              <input
                className="inp"
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                minLength="3"
              />
            </label>
            <label htmlFor="surname">
              Soyadi:
              <input
                className="inp"
                type="text"
                name="surname"
                id="surname"
                onChange={this.handleChange}
                minLength="3"
              />
            </label>
            <label htmlFor="phone">
              Telefon:
              <input
                className="inp"
                type="number"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                minLength="7"
              />
            </label>
            <label htmlFor="email">
              E-mail:
              <input
                className="inp"
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="comment">
              Sherh:
              <textarea
                className="textarea"
                type="text"
                name="comment"
                id="comment"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" onClick={this.handleSubmit} disabled={this.state.isActive}>
              Göndər
            </button>
          </form>
        </div>
        <div className="user">
          <h1>User Info:</h1>
          <table>
            <tbody>
              <tr>
                <td className="left">Adi:</td>
                <td className="right">{localStorage.getItem("name")}</td>
              </tr>
              <tr>
                <td className="left">Soyadi:</td>
                <td className="right">{localStorage.getItem("surname")}</td>
              </tr>
              <tr>
                <td className="left">Elaqe nomresi:</td>
                <td className="right">{localStorage.getItem("phone")}</td>
              </tr>
              <tr>
                <td className="left">Email adresi:</td>
                <td className="right">{localStorage.getItem("email")}</td>
              </tr>
              <tr>
                <td className="left">Sherh:</td>
                <td className="right">{localStorage.getItem("comment")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
