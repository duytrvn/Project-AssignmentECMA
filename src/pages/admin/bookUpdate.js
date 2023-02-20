import { useEffect, useState, router } from "../../../lib";
import axios from "axios";
import "../../style/bookUpdate.css";

const BookUpdate = function (id) {
  const [book, setBook] = useState({});

  useEffect(function () {
    axios.get(`http://localhost:3000/books/${id}`)
        .then(function (dataAxios) {
            setBook(dataAxios.data);
        });
  }, []);

  const updateBook = function () {
    const name = document.querySelector("#name").value;
    const original_price = document.querySelector("#original_price").value;
    const description = document.querySelector("#description").value;

    axios
      .put(`http://localhost:3000/books/${id}`, {
        ...book,
        name,
        original_price,
        description,
      })
      .then(function (res) {
        console.log('xxxx');
        router.navigate("/admin")
      });
  };

  useEffect(function () {
    document.querySelector("#updateForm").onsubmit = function (e) {
      e.preventDefault();
      updateBook();
    };
  });

  return /*html*/ `
  <div class ="bookUpdate"> 
    <h1>BookUpdate</h1>
    <form id="updateForm">
        <div> 
            <label> 
                Tên sách
            </label>
            <br>

            <input value="${book.name}" placeholder="Tên sách" id="name"> 
        </div>

        <div> 
            <label> 
                Giá
            </label>
            <br>

            <input value="${book.original_price}" placeholder="Giá sách" id="original_price"> 
        </div>

        <div> 
            <label> 
                Mô tả
            </label>
            <br> 

            <textarea id="description" placeholder="Mô tả sách">${book.description}</textarea>
        </div>

        <div> 
            <button type="submit"> 
                Cập nhật
            </button>
        </div>
    </form>
  </div>
    `;
};
export default BookUpdate;
