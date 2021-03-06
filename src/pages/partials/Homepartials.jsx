import React, { Component } from "react";
import { Link } from "react-router-dom";
import { books } from "../../services";
import Owl from "../../componets/Owl";

export default class Homepartials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      response: "",
      display: "none",
    };
  }
  componentDidMount() {
    books().then((res) => {
      this.setState({
        books: res.data.data,
      });
    });
  }
  render() {
    return (
      <>
        <Owl/>
        <div className="ml-20">
          <div className="flex flex-wrap bg-white w-full">
            <div className="w-9/12 bg-white rounded p-3">
              <span className="inline-block font-semibold text-xl text-gray-500 ml-5 lg:ml-2 md:ml-12 sm:ml-8 pb-4">
                Browser
              </span>
              <div className="flex flex-wrap -m-4">
                {this.state.books.map((books) => (
                  <div key={books.id_books} className="p-4 lg:w-1/3">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <Link to={`/description/${books.id_books}`}>
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                          src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png"
                        />
                      </Link>
                      <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-bold text-gray-700">
                          {books.title}
                        </h2>
                        <h3 className="text-gray-500 mb-3">
                          {books.publisher}
                        </h3>
                        <div className="flex mb-4 mt-2">
                          <span className="flex items-center">
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/12 bg-white rounded p-3">
              <span className="inline-block font-semibold text-xl text-gray-700 ml-5 lg:ml-4 md:ml-2 sm:ml-0 pb-4">
                Category
              </span>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/technology">
                    <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                      <span>
                        <img
                          src="https://res.cloudinary.com/setiyawan/image/upload/v1614382507/plugin/Group_18_phcpwz.png"
                          alt=""
                        />
                      </span>
                      <span>Technology</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                    <span>
                      <img
                        src="https://res.cloudinary.com/setiyawan/image/upload/v1614382583/plugin/Group_17_osparj.png"
                        alt=""
                      />
                    </span>
                    <span>History</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                    <span>
                      <img
                        src="https://res.cloudinary.com/setiyawan/image/upload/v1614382768/plugin/Group_16_s5bfuj.png"
                        alt=""
                      />
                    </span>
                    <span>Politics</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                    <span>
                      <img
                        src="https://res.cloudinary.com/setiyawan/image/upload/v1614382768/plugin/Group_15_w8owxd.png"
                        alt=""
                      />
                    </span>
                    <span>Romance</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                    <span>
                      <img
                        src="https://res.cloudinary.com/setiyawan/image/upload/v1614382768/plugin/Group_14_av55s5.png"
                        alt=""
                      />
                    </span>
                    <span>Science</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline">
                    <span>
                      <img
                        src="https://res.cloudinary.com/setiyawan/image/upload/v1614382768/plugin/Group_13_qbju74.png"
                        alt=""
                      />
                    </span>
                    <span>Sports</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
