<template>
  <div class="container p-3">
    <div class="row align-items center">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="p-2 mb-3">
              <a type="button" class="btn btn-sm btn-outline-primary" href="/manage/Updates">Return</a>
            </div>
            <h4>
              <span class="p-2">EDIT POST</span>
            </h4>
            <div class="col-md-7 col-lg-5 pt-3">
              <p>
                <strong>Post Title</strong>
              </p>
              <input
                type="text"
                class="form-control form-control-sm"
                id="scheduleTitle"
                placeholder
                v-model="getEditPostObj.title"
              />
              <p>
                <strong>Description</strong>
              </p>
              <input
                type="text"
                class="form-control form-control-sm"
                id="scheduleTitle"
                placeholder
                v-model="getEditPostObj.description"
              />
              <p class="mb-2">
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
                v-model="getEditPostObj.featuredImage"
              ></VueFileAgent>
              
            </div>
            <div class="col-md-7 col-lg-5 pt-3">
              <p class="mb-2">
                <strong>Tags (Type then Press enter to add tag)</strong>
              </p>
              <input-tag v-model="getEditPostObj.tags"></input-tag>
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
                v-model="getEditPostObj.content"
              />
            </div>
          </div>
          <div class="row pl-5 pb-3">
            <button
              type="button"
              class="btn btn-sm btn-outline-primary"
              @click="UpdatePost"
            >{{isUpdating ? 'Saving content...' : 'Update Post'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor, Quill } from "vue2-editor";
import ImageResize from "quill-image-resize-vue";
import { ImageDrop } from "quill-image-drop-module";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      hasImage: false,
      token: "",
      isUpdating: false,
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
        ["link", "image", "video", "formula"],
        [{ direction: "rtl" }],
        ["clean"],
      ],
      tags: [],
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
      this.getEditPostObj.featuredImage = file;
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
    async UpdatePost() {
      if (this.getEditPostObj.title.trim() == "")
        return this.err("Title is required");
      if (this.getEditPostObj.description.trim() == "")
        return this.err("Description is required");
      if (this.getEditPostObj.tags == "") return this.err("Tags are required");
      if (this.getEditPostObj.content.trim() == "")
        return this.err("Content is required");

      const res = await this.callApi("put", "/updatePost", this.getEditPostObj);

      if (res.status == 200) {
        this.success("Post successfuly Updated!");
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
      }
    },
    updatePostObj() {
      const editPostObj = {
        id: this.getEditPostObj.id,
        title: this.getEditPostObj.title,
        description: this.getEditPostObj.description,
        content: this.getEditPostObj.content,
      };
      this.$store.commit("setPostObj", editPostObj);
    },
  },
  computed: {
    ...mapGetters(["getEditPostObj"]),
  },
  async created() {
    this.token = window.Laravel.csrfToken;
    //SET TAGS
    let list = [];
    $.each(this.getEditPostObj.tags, function (key, value) {
      list.push(value["name"]);
    });
    this.getEditPostObj.tags = list;
  },
  watch: {},
};
</script>
<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";
</style>