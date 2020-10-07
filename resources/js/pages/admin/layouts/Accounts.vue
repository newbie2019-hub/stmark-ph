<template>
  <div>
    <div id="editSection" class="row align-items-center p-2">
      <div class="col-md-6 col-lg-7">
        <h1 class="mt-4 admin-header-primary">Accounts</h1>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          data-toggle="modal"
          data-target="#accountModal"
        >Add Account</button>
      </div>
    </div>

    <!---BREADCRUMB--->
    <nav aria-label="breadcrumb" class="pt-3 pl-1">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/manage">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Accounts</li>
      </ol>
    </nav>

    <!-- TABLE -->
    <div class="row p-2">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">ACCOUNTS RECORD</div>
          <div class="card-body">
            <div class="table-responsive pl-3 pr-3">
              <data-table v-bind="parameters" @actionTriggered="handleAction" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--- MODAL FOR ADDING ACCOUNT --->
    <div
      class="modal fade"
      id="accountModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="Adding Schedule Modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-8">
                Full Name
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder
                  v-model="data.fullName"
                />
                Email Address
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder
                  v-model="data.email"
                />
                Password
                <input
                  type="password"
                  class="form-control form-control-sm"
                  placeholder
                  v-model="data.password"
                />
                <div class="form-group">
                  <label for="accountrole">Select Role</label>
                  <select
                    v-model="data.role"
                    class="custom-select form-control-sm"
                    id="accountrole"
                  >
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <div class="form-group">
                  Status
                  <select
                    v-model="data.status"
                    class="custom-select form-control-sm"
                    id="status"
                  >
                    <option>Active</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-sm btn-outline-primary">Close</button>
            <button
              type="button"
              @click="addUser"
              class="btn btn-sm btn-outline-success"
            >{{isAdding ? 'Saving..' : 'Save Account'}}</button>
          </div>
        </div>
      </div>
    </div>

    <deleteModal></deleteModal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import deleteModal from "../../../components/DeleteModal";
export default {
  components: {
    deleteModal,
  },
  data() {
    return {
      total: 4,
      editUser: false,
      addingUser: false,
      adminCount: 0,
      isAdding: false,
      isUpdating: false,
      isDeleting: false,
      status: "save",
      editUserData: {},
      accounts: [],
      deleteUserID: "",
      data: {
        id: "",
        fullName: "",
        email: "",
        password: "",
        role: 'Please Select',
        status: '',
      },
    };
  },
  methods: {
    handleAction(actionName, data) {
      switch (actionName) {
        case "edit":
          this.editAcc(data);
          break;
        case "delete":
          this.showDeletingModal(data);
      }
    },
    async addUser() {
      if (this.status == "save") {
        this.isAdding = true;
        this.validateFields();

        const res = await this.callApi("post", "/create_user", this.data);
        if (res.status == 200 || res.status == 201) {
          this.success("User has been added successfully!");
          this.addingUser = false;
          this.isAdding = false;
          this.data.fullName = "";
          this.data.email = "";
          this.data.password = "";
          this.data.role = "";
          $("#accountModal").modal("hide");
          this.getUsers();
        } else {
          if (res.status == 422) {
            for (let i in res.data.errors) {
              this.err(res.data.errors[i][0]);
              this.isAdding = false;
            }
          } else {
            this.isAdding = false;
            this.swr();
          }
        }
      } else {
        if (this.data.fullName.trim() == "")
          return this.err("Full name is required");
        if (this.data.email.trim() == "") return this.err("Email is required");

        this.isUpdating = true;
        const res = await this.callApi("put", "/updateUserAcc", this.data);
        if (res.status == 200 || res.status == 201) 
        {

          this.isUpdating = false;
          this.editUser = false;
          this.data.fullName = "";
          this.data.email = "";
          this.data.password = "";
          this.data.role = "";

          this.success("User credentials was updated!");
          this.getUsers();

        } 
        else 
        {
          if (res.status == 422) 
          {
            for (let i in res.data.errors) {
              this.err(res.data.errors[i][0]);
              this.isUpdating = false;
            }
          } 
          else 
          {
            this.swr();
          }
          this.status = "save";
          this.isUpdating = false;
        }
        $("#accountModal").modal("hide");
      }
    },
    validateFields() {
      if (this.data.fullName.trim() == "")
        return this.err("Full name is required");
      if (this.data.email.trim() == "") return this.err("Email is required");
      if (this.data.password.trim() == "")
        return this.err("Password is required");
      if (this.data.role.trim() == "") return this.err("Role is required");
      if (this.data.status.trim() == "") return this.err("Status is required");
    },
    async getUsers() {
      const count = 0;
      const res = await this.callApi("get", `/get_users?`);
      if (res.status == 200) {
        this.accounts = res.data.data;
      }
    },

    editAcc(account) {
      this.data.id = account.id;
      this.data.fullName = account.name;
      this.data.email = account.email;
      this.data.role = account.role;
      this.status = "edit";
      $("#accountModal").modal("show");
    },

    showDeletingModal(account) {
      const acc_id = account.id;
      const deleteModalObj = {
        showDeleteModal: true,
        method: "delete",
        deleteUrl: `/deleteUserAcc?userID=${acc_id}`,
        isDeleted: false,
        msg: "Are you sure you want to delete this account?",
        successMsg: "Account deleted succcessfuly",
      };
      this.$store.commit("setDeletingModalObj", deleteModalObj);

      $("#deleteModal").modal("show");
    },
  },
  async created() {
    this.getUsers();
  },
  computed: {
    ...mapGetters(["getDeleteModalObj"]),
    parameters() {
      return {
        data: this.accounts,
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
            title: "NAME",
            key: "name",
            orderable: true,
          },
          {
            title: "EMAIL",
            key: "email",
            sortable: true,
          },
          {
            title: "ROLE",
            key: "role",
            orderable: true,
          },
          {
            title: "STATUS",
            key: "status",
            orderable: true,
          },
        ],
      };
    },
  },
  watch: {
    getDeleteModalObj(obj) {
      if (obj.isDeleted) {
        this.getUsers();
        $("#deleteModal").modal("hide");
      }
    },
  },
};
</script>