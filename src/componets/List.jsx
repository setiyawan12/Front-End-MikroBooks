import React, { Component } from "react";
import { books } from '../services';
// import axios from "axios";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    // services.
    // console.log(books);
    books().then((res) => {
        this.setState({
          books: res.data.data,
        });
      });
    // axios.get(api + "books/show")
  }
  render() {
    return (
      <table className="rounded-t-lg m-5 w-5/6 mx-auto text-pink-100 bg-pink-700">
        <tr className="text-left border-b-2 border-pink-200 font-bold">
          <th className="px-4 py-3">Title</th>
          <th className="px-4 py-3">publisher</th>
          <th className="px-4 py-3">author</th>
          <th className="px-4 py-3">isbn</th>
        </tr>
        <tbody>
          {this.state.books.map((books) => (
            <tr key={books.id_books} className="bg-pink-600 font-semibold">
              <td className="px-4 py-3 border-b border-pink-500">
                {books.title}
              </td>
              <td className="px-4 py-3 border-b border-pink-500">
                {books.publisher}
              </td>
              <td className="px-4 py-3 border-b border-pink-500">
                {books.author}
              </td>
              <td className="px-4 py-3 border-b border-pink-500">
                {books.isbn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
