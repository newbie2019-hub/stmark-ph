<template>
  <div>
    <div id="imageSection" class="row align-items-center p-2">
      <div class="col-md-6 col-lg-7">
        <h1 class="mt-4 admin-header-primary">Resources</h1>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          data-toggle="modal"
          data-target="#addModal"
        >
          <i class="fas fa-plus"></i> Add Resources
        </button>
      </div>
    </div>

    <!---BREADCRUMB--->
    <nav aria-label="breadcrumb" class="pt-3 pl-1">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/manage">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Resources</li>
      </ol>
    </nav>

    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="resources.length == 0">
      <strong>No resources yet!</strong> It appears that you don't have any resources for your website. 
      You may add some resources now.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- TABLE -->
    <div class="row p-2">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">RESOURCES</div>
          <div class="card-body">
            <div class="table-responsive pl-3 pr-3">
              <data-table v-bind="parameters" @actionTriggered="handleAction" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD MODAL --->
    <!-- Modal -->
    <div
      class="modal fade"
      id="addModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Resources</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-10">
                Title
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="scheduleTitle"
                  placeholder
                  v-model="data.title"
                />
                Description
                <textarea
                  class="form-control form-control-sm"
                  id="description"
                  rows="3"
                  v-model="data.description"
                ></textarea>
                Content
                <vue-editor
                  id="editor"
                  :customModules="customModulesForEditor"
                  :editorOptions="editorSettings"
                  :editorToolbar="customToolbar"
                  useCustomImageHandler
                  @image-added="handleImageAdded"
                  v-model="data.content"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              @click="saveResource"
              class="btn btn-sm btn-primary"
              :disabled="isSaving"
            >
              {{ isSaving ? "Saving Resources" : "Save" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import { VueEditor, Quill } from "vue2-editor";
import ImageResize from "quill-image-resize-vue";
import { ImageDrop } from "quill-image-drop-module";

export default {
  components: { VueEditor },
  data() {
    return {
      resources: [],
      token: "",
      data: {
        title: "",
        description: "",
        content: "",
      },
      isSaving: false,
      uploadUrl: "/storeFile",
      fileRecords: [],
      fileRecordsForUpload: [],
      customModulesForEditor: [
        { alias: "imageDrop", module: ImageDrop },
        { alias: "imageResize", module: ImageResize },
      ],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {},
        },
      },
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }, "image"],
        ["link"],
      ],
    };
  },
  components: {},
  methods: {
    handleAction(actionName, data) {
      switch (actionName) {
        case "delete":
          this.showDeletingModal(data);
      }
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: "/img_upload",
        method: "POST",
        data: formData,
      })
        .then((result) => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async saveResource() {
      if (this.data.description.trim() == "")
        return this.err("Description is required");
      if (this.data.title.trim() == "")
        return this.err("Title is required");
      if (this.data.content.trim() == "")
        return this.err("Content is required");

      this.isSaving = true;

      const res = await this.callApi('post', '/store', this.data)
      if(res.status == 200 || res.status == 201){
        this.success('Resources saved successfuly')
        this.isSaving = false
        $('#addModal').modal('hide')
      }
      else{
        this.swr();
        this.isSaving = false
      }
    },

    async getResources(){
      const res = await this.callApi('get','/getResources')
      if(res.status == 200 || res.status == 201){
        this.resources = res.data
      }
      else{
        this.swr()
      }
    }
  },
  async created() {
    this.token = window.Laravel.csrfToken;
    this.getResources()
  },
  computed: {
    parameters() {
      return {
        data: this.resources,
        lang: "en",
        actionMode: "single",
        perPageSizes: [5, 10, 15, 20],
        defaultPerPage: 5,
        tableClass: "table table-hover",
        actions: ["delete"],
        text: {
          searchText: "Search: ",
        },
        showDownloadButton: false,
        columns: [
          {
            title: "ID",
            key: "id",
            orderable: true,
          },
          {
            title: "TITLE",
            key: "title",
            orderable: true,
          },
          {
            title: "DESCRIPTION",
            key: "description",
            orderable: false,
          },
          {
            title: "CREATED AT",
            key: "created_at",
            orderable: true,
          },
        ],
      };
    },
  },
};
</script>