import { useState, useEffect, router } from "../..";
const ProjectAdd = () => {
  useEffect(() => {
    // tạo biến lưu trữ
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(projects);
    const form = document.getElementById("form-add");
    const item = document.getElementById("input-add");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      projects.push({ id: projects.length, name: item.value });
      // lưu trữ trong localStorage
      localStorage.setItem("projects", JSON.stringify(projects));
      router.navigate("/admin");
    });
  });
  return /*html*/ `
   <form action= ''id = 'form-add' class = "container">
    <label for="">Thêm mới</label>
    <input id="input-add" class = "form-control" value="">
    <button type="" class = "btn btn-primary my-3">Thêm</button>
  </form>
  `;
};

export default ProjectAdd;
