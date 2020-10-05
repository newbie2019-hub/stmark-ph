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
      <div class="modal-dialog modal-dialog-centered">
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
              <div class="col-md-8 col-lg-8">
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
                Attachment file:
                <VueFileAgent
                  ref="vueFileResources"
                  @select="fileSelected($event)"
                  :maxSize="'20MB'"
                  :multiple="false"
                  :deletable="false"
                  :theme="'list'"
                  :accept="'audio/*,image/*,video/*,.pdf,.doc,.docx,.ods,.xls'"
                  :errorText="{
                    type: 'Error! File type is not allowed!',
                    size: 'This file is too large to be attached',
                  }"
                  v-model="data.file"
                ></VueFileAgent>
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
.vue-file-agent.file-input-wrapper {
  position: relative;
  border: 0px !important;
  text-align: center;
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
}
</style>
<script>
export default {
  data() {
    return {
      resources: [],
      token: "",
      data: {
        description: "",
        title: "",
        file: "",
      },
      isSaving: false,
      uploadUrl: "/storeFile",
      fileRecords: [],
      fileRecordsForUpload: [],
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
    fileSelected: function (fileRecordsSelected) {
      this.fileRecordsForUpload = [];
      var validFileRecords = fileRecordsSelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );

      console.log(this.fileRecordsForUpload)
    },

    async saveResource() {
      if (this.data.description.trim() == "")
        return this.err("Description is required");
      if (this.fileRecordsForUpload.length == 0)
        return this.err("File is empty");

      this.isSaving = true;

      const resu = await this.$refs.vueFileResources.upload(
        this.uploadUrl,
        { "x-csrf-token": this.token, "X-Requested-With": "XMLHttpRequest" },
        this.fileRecordsForUpload
      );

      this.data.file = resu[0].data;

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
            title: "FILE",
            key: "file",
            orderable: true,
          },
          {
            title: "DESCRIPTION",
            key: "description",
            sortable: false,
          },
        ],
      };
    },
  },
};
</script>