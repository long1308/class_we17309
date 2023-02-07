import { useEffect } from "../..";

const ProjectEdit = (id) => {
  useEffect(() => {
    console.log(id);
  });
  return /*html*/ `
    <form action= ''id = 'form-add'>
     <label for="">Sửa</label>
     <input id="input-edit" value="">
     <button type="">Sửa</button>
   </form>
   `;
};

export default ProjectEdit;
