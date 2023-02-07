import { useState, useEffect, router } from "../..";
const PojectAdminPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // lấy biến lưu trữ localStorage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // render lại día trị data
    setData(projects);
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll("#delete");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        console.log(id);
        const newData = data.filter((item) => item.id != id);
        // lưu vào localStorage
        localStorage.setItem("projects", JSON.stringify(newData));
        //set lại giá trị mới
        setData(newData);
      });
    });
  });
  return /*html*/ `
  <div class = "container">
  <h1>Danh sánh dự án</h1>
  <a class = "btn btn-primary" href="/add">Thêm</a>
    <table class = 'table  '>
      <thead>
         <th>#</th>       
         <th>Name</th>       
         <th>Action</th>       
      </thead>
      <tbody>
        ${data.map(
          (item, index) => /*html*/ `<tr>
        <td>${index}</td>
        <td>${item.name}</td>
        <td><button class = "btn btn-danger"data-id = ${item.id} id = "delete">Xóa</button>
        <a  class = "btn btn-success"href="/admin/${item.id}/edit">Sửa</a>
        </td>
          </tr>`
        )}
      </tbody>
    </table>
  </div>
  `;
};

export default PojectAdminPage;
