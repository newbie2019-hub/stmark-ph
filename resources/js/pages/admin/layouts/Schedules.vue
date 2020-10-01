<template>
  <div>
    <div id="scheduleSection" class="row align-items-center p-2">
      <div class="col-md-6 col-lg-7">
        <h1 class="mt-4 admin-header-primary">SCHEDULES</h1>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          data-toggle="modal"
          data-target="#scheduleModal"
        ><i class="fas fa-plus"></i> Add Schedule</button>
      </div>
    </div>

    <!---BREADCRUMB--->
    <nav aria-label="breadcrumb" class="pt-3 pl-1">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/manage">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Schedules</li>
      </ol>
    </nav>

    <!-- TABLE -->
    <div class="row p-2">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">SCHEDULE RECORDS</div>
          <div class="card-body">
            <div class="table-responsive pl-3 pr-3">
              <data-table v-bind="parameters" @actionTriggered="handleAction" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---ADDING MODAL -->
    <div
      class="modal fade"
      id="scheduleModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="Adding Schedule Modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Schedule</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                  v-model="data.name"
                />
                Description
                <textarea
                  class="form-control form-control-sm"
                  id="description"
                  rows="4"
                  v-model="data.desc"
                ></textarea>
                Event Start
                <input
                  class="form-control"
                  type="datetime-local"
                  v-model="data.start"
                  id="start-datetime "
                />
                Event Start
                <input
                  class="form-control"
                  type="datetime-local"
                  v-model="data.end"
                  id="start-datetime "
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="cancelEdit" class="btn btn-sm btn-outline-primary">Close</button>
            <button
              type="button"
              @click="saveSchedule"
              class="btn btn-sm btn-outline-primary"
            >{{isAdding ? 'Saving..' : 'Save Schedule'}}</button>
          </div>
        </div>
      </div>
    </div>
    <deleteModal></deleteModal>
  </div>
</template>
<style >
.vdatetime {
  width: 100% !important;
}
.vdatetime-input {
  width: 100% !important;
  border: 1px solid #ced4da !important;
  border-radius: 0.25em;
  padding: 5px 8px;
}
.vdatetime-input:focus {
  border-color: #80bdff !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
}
</style>
<script>
import { mapGetters } from "vuex";
import deleteModal from "../../../components/DeleteModal";

export default {
  components: {
    deleteModal,
  },
  data() {
    return {
      isAdding: false,
      schedData: [],
      schedules: "",
      status: "save",
      isValidated: false,
      data: {
        id: "",
        name: "",
        desc: "",
        start: "",
        end: "",
      },
    };
  },
  methods: {
    handleAction(actionName, data) {
      switch (actionName) {
        case "edit":
          this.editSched(data);
          break;
        case "delete":
          this.showDeletingModal(data);
      }
    },
    cancelEdit() {
      this.clearFields();
      $("#scheduleModal").modal("hide");
    },
    async saveSchedule() {
      this.isValidated = false;
      if (this.status == "save") {
        this.validateField();

        if (this.isValidated) {
          this.isAdding = true;
          const res = await this.callApi("POST", "/storeSchedule", this.data);
          if (res.status == 200 || res.status == 201) {
            this.success("Schedule Added");
            this.clearFields();
            $("#scheduleModal").modal("hide");
          } else {
            this.clearFields();
            this.swr();
          }
          this.isAdding = false;
          this.getSchedule();
        }
      } else {
        this.validateField();
        if (this.isValidated) {
          const res = await this.callApi("put", "/updateSchedule", this.data);
          if (res.status == 200 || res.status == 201) {
            this.success("Schedule Updated");
            this.clearFields();
            $("#scheduleModal").modal("hide");
            this.getSchedule();
          } else {
            this.clearFields();
            this.swr();
          }
          this.isAdding = false;

          this.status = "save";
        }
      }
    },
    async getSchedule() {
      const res = await this.callApi("get", `/getSchedule?`);
      if (res.status == 200 || res.status == 201) {
        this.schedData = res.data;
      }
    },
    validateField() {
      if (this.data.name.trim() == "")
        return this.err("Name of schedule is required");
      if (this.data.desc.trim() == "")
        return this.err("Description of schedule is required");
      if (this.data.start.trim() == "")
        return this.err("Start Date of schedule is required");
      if (this.data.end.trim() == "")
        return this.err("End Date of schedule is required");
      this.isValidated = true;
    },
    clearFields() {
      (this.data.name = ""),
        (this.data.desc = ""),
        (this.data.start = ""),
        (this.data.end = "");
    },
    showDeletingModal(sched) {
      const post_id = sched.id;
      const deleteModalObj = {
        showDeleteModal: true,
        method: "delete",
        deleteUrl: `/deleteSchedule?id=${post_id}`,
        isDeleted: false,
        msg: "Are you sure you want to delete this schedule?",
        successMsg: "Schedule was deleted succcessfuly",
      };
      this.$store.commit("setDeletingModalObj", deleteModalObj);

      $("#deleteModal").modal("show");
    },
    editSched(sched) {
      this.data.id = sched.id;
      this.data.name = sched.title;
      this.data.desc = sched.description;
      this.data.start = sched.start;
      this.data.end = sched.end;
      this.status = "edit";
      $("#scheduleModal").modal("show");
    },
  },
  computed: {
    ...mapGetters(["getDeleteModalObj"]),
    parameters() {
      return {
        data: this.schedData,
        lang: "en",
        actionMode: "single",
        perPageSizes: [5, 10, 15, 20],
        defaultPerPage: 5,
        tableClass: "table table-hover",
        actions: ["edit", "delete"],
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
            title: "SCHEDULE",
            key: "title",
            orderable: true,
          },
          {
            title: "DESCRIPTION",
            key: "description",
            sortable: false,
          },
          {
            title: "START",
            key: "start",
            orderable: true,
          },
          {
            title: "END",
            key: "end",
            orderable: true,
          },
        ],
      };
    },
  },
  async created() {
    this.getSchedule();
  },
  watch: {
    getDeleteModalObj(obj) {
      if (obj.isDeleted) {
        this.getSchedule();
        $("#deleteModal").modal("hide");
      }
    },
  },
};
</script>
