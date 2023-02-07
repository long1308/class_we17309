import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./lib/pages/HomePage";
import About from "./lib/pages/About";
import Projects from "./lib/pages/Projects";
import ProjectDetall from "./lib/pages/ProjectDetall";
import PojectAdminPage from "./lib/pages/Admin/projects";
import ProjectAdd from "./lib/pages/Admin/project-add";
import ProjectEdit from "./lib/pages/Admin/project-edit";
import { render, router } from "./lib";
import NotFound from "./lib/pages/Not-Found";

const app = document.querySelector("#app");
router.on("/", () => render(Homepage, app));
router.on("/about", () => render(About, app));
router.on("/projects", () => render(Projects, app));
router.on("/project/:id", (param) => render(() => ProjectDetall(param), app));
router.on("/admin/projects", () => render(PojectAdminPage, app));
router.on("/add", () => render(ProjectAdd, app));
router.on("/admin/:id/edit", ({ data: { id } }) =>
  render(() => ProjectEdit(id), app)
);
router.notFound(() => render(NotFound, app));

router.resolve();
