<template>
  <div>
    <div id="editSection" class="row align-items-center p-2">
      <div class="col-md-6 col-lg-7">
        <h1 class="mt-4 admin-header-primary">POST SECTION</h1>
        <a
          type="button"
          class="btn btn-sm btn-outline-primary"
          href="/manage/create"
          ><i class="fas fa-plus"></i> Add Post</a
        >
      </div>
    </div>

    <!---BREADCRUMB--->
    <nav aria-label="breadcrumb" class="pt-3 pl-1">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/manage">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Post</li>
      </ol>
    </nav>

    <div class="alert alert-warning alert-dismissible fade show ml-2 mr-2" role="alert" v-if="postContent.length == 0">
      <strong>No post yet!</strong> It appears that you don't have any post yet for your website. 
      You may add a post now.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="row p-2">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">POST RECORDS</div>
          <div class="card-body">
            <div class="table-responsive pl-3 pr-3">
              <data-table v-bind="parameters" @actionTriggered="handleAction" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <deleteModal></deleteModal>
  </div>
</template>
<script>
import deleteModal from "../../../components/DeleteModal";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      pinned: 0,
      addAnn: false,
      editAnn: false,
      postContent: [],
    };
  },

  components: {
    deleteModal,
  },
  mounted: function () {},
  methods: {
    handleAction(actionName, data) {
      switch (actionName) {
        case "view":
          window.open(`https://stmark-ph.herokuapp.com/blog/${data.slug}`);
          break;
        case "edit":
          this.editPost(data);
          break;
        case "delete":
          this.showDeletingModal(data);
      }
    },
    async getPost() {
      this.isLoading = true;
      const res = await this.callApi("get", `/getPost`);
      if (res.status == 200) {
        this.postContent = res.data.data;
       
      } else {
        this.swr();
      }
      this.isLoading = false;
    },

    showDeletingModal(post) {
      const post_id = post.id;
      const deleteModalObj = {
        showDeleteModal: true,
        method: "delete",
        deleteUrl: `/deletePost?aID=${post_id}`,
        isDeleted: false,
        msg: "Are you sure you want to delete this post?",
        successMsg: "Post was deleted succcessfuly",
      };
      this.$store.commit("setDeletingModalObj", deleteModalObj);
      $("#deleteModal").modal("show");
    },

    editPost(post) {
      const editPostObj = {
        id: post.id,
        title: post.title,
        description: post.description,
        tags: post.tags,
        content: post.content,
      };
      this.$store.commit("setPostObj", editPostObj);
      this.$router.push("/manage/edit");
    },
  },
  computed: {
    ...mapGetters(["getDeleteModalObj"]),
    parameters() {
      return {
        data: this.postContent,
        lang: "en",
        actionMode: "single",
        perPageSizes: [5, 10, 15, 20],
        defaultPerPage: 5,
        tableClass: "table table-hover",
        actions: ["view", "edit", "delete"],
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
            sortable: false,
          },
          {
            title: "CREATED AT",
            key: "created_at",
            orderable: false,
          },
          {
            title: "UPDATED AT",
            key: "updated_at",
            orderable: false,
          },
          {
            title: "USER_ID",
            key: "user_id",
            orderable: false,
          },
        ],
      };
    },
  },
  async created() {
    this.getPost();
  },
  watch: {
    getDeleteModalObj(obj) {
      if (obj.isDeleted) {
        this.getPost();
      }
      $("#deleteModal").modal("hide");
    },
  },
};
</script>
