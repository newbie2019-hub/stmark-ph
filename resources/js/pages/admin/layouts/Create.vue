<template>
  <div class="container p-3">
    <div class="row align-items center">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="p-2 mb-3">
              <a type="button" class="btn btn-sm btn-outline-primary" href="/manage/Updates"><i class="fas fa-caret-left"></i> Return</a>
            </div>
            <h4>
              <span class="p-2">
                <strong>CREATE POST</strong>
              </span>
            </h4>
            <div class="col-md-8 col-lg-5 pt-3">
              <p>
                <strong>Post Title</strong>
              </p>
              <input
                type="text"
                class="form-control form-control-sm"
                id="scheduleTitle"
                placeholder
                v-model="data.title"
              />
              <p class="pt-2">
                <strong>Description</strong>
              </p>
              <input
                type="text"
                class="form-control form-control-sm"
                id="scheduleTitle"
                placeholder
                v-model="data.description"
              />
              <p class="pt-2">
                <strong>Featured Image</strong>
              </p>
              <VueFileAgent
                ref="vueFileAgent"
                @select="fileSelected($event)"
                :multiple="false"
                :maxSize="'5MB'"
                :accept="'image/*,'"
                :theme="'list'"
                :errorText="{
                  type: 'Invalid file type. Only image file is Allowed',
                  size: 'Image should not exceed 5MB in size',
                }"
                v-model="data.featuredImage"
              ></VueFileAgent>
            </div>
            <div class="col-md-7 col-lg-5 pt-3">
              <p class="mb-2">
                <strong>Tags (Type a tag then press enter to add tag)</strong>
              </p>
              <input-tag v-model="data.tags"></input-tag>
            </div>
            <div class="col-md-10 col-lg-10 pt-3">
              <p class="mb-2">
                <strong>Post Content</strong>
              </p>
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
          <div class="row pl-5 pb-3">
            <button
              type="button"
              class="btn btn-sm btn-success"
              @click="SavePost"
            >{{isCreating ? 'Saving content...' : 'Create Post'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ql-editor {
  min-height: 450px !important;
}
</style>
<script>
import { VueEditor, Quill } from "vue2-editor";
import ImageResize from "quill-image-resize-vue";
import { ImageDrop } from "quill-image-drop-module";

export default {
  components: { VueEditor },
  data() {
    return {
      hasImage: false,
      token: "",
      isCreating: false,
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
        [{ color: [] }, { background: [] }],
        ["link", "image", "formula"],
        [{ direction: "rtl" }],
        ["clean"],
      ],
      data: {
        title: "",
        description: "",
        featuredImage: "",
        content: "",
        uploadHeaders: {'x-csrf-token' : window.Laravel.csrfToken},
        tags: [],
      },
      uploadUrl: "/uploadFImage",
      fileRecords: [],
      fileRecordsForUpload: [],
    };
  },
  methods: {
    fileSelected: function (fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
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
    async SavePost() {
      this.data.featuredImage = this.data.featuredImage.file.name

      if (this.data.title.trim() == "") return this.err("Title is required");
      if (this.data.description.trim() == "")
        return this.err("Description is required");
      if (this.data.featuredImage.trim() == "")
        return this.err("Featured Image is required");
      if (this.data.tags == "") return this.err("Tags are required");
      if (this.data.content.trim() == "")
        return this.err("Content is required");

      const resu = await this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        {'x-csrf-token' : this.token, 'X-Requested-With' : 'XMLHttpRequest'},
        this.fileRecordsForUpload
      );

      this.isCreating = true;

      this.data.featuredImage = resu[0].data
      const res = await this.callApi("post", "/createPost", this.data);
      if (res.status == 200 || res.status == 201) {
        this.success("Post has been saved!");
        this.isCreating = false;
        this.$router.push("/manage/Updates");
      } else {
        if (res.status == 422) {
          for (let i in res.data.errors) {
            this.err(res.data.errors[i][0]);
            this.isUpdating = false;
          }
        } else {
          this.swr();
        }
        this.isCreating = false;
      }
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 5M.",
      });
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png.",
      });
    },
    handleError(res, file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc: `${
          file.errors.file.length
            ? file.errors.file[0]
            : "Something went wrong!"
        }`,
      });
    },
    handleSuccess(file) {
      this.hasImage = true;
      this.data.featuredImage = file;
      this.notif("Only 1 featured image is allowed.");
    },
    async handleImageRemove(file) {
      const res = await this.callApi("post", "/deleteFImage", {
        imageName: file.response,
      });
      if (res == 200) {
        this.notif("You can now reselect a featured image!");
        this.hasImage = false;
      } else {
        this.swr();
      }
    },
  },
  async created() {
    this.token = window.Laravel.csrfToken;
  },
};
</script>
<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";
</style>