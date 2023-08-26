export default {
  auth: {
    builder_login: "/api/builder/builder-login/",
  },
  info: {
    builder_info: "/api/builder/add-builder-info/",
  },
  get_builder_info:"/api/builder/get-builder-info/",
  project: {
    get_project_list: "/api/builder/get-project-list/",
    add_project: "/api/builder/add-project/",
    update_project: "/api/builder/update-project/",
    add_project_image: "/api/builder/add-project-image/",
    add_project_docs: "/api/builder/add-project-doc/",
    delete_project: "/api/builder/delete-project/",

  },
  manager: {
    add_manager: "/api/builder/add-project-manager/",
    get_manager_list: "/api/builder/get-project-manager/",
    delete_manager: "/api/builder/delete-project-manager/",
  },
  promoter: {
    add_promoter: "/api/builder/add-project-promoter/",
    delete_promotor: "/api/builder/delete-project-promoter/",
  },
  // add_project: {
  //     project: "/api/builder/add-project/",
  // },
  // update_project: {
  //   update: "/api/builder/update-project/",
  // },

};
