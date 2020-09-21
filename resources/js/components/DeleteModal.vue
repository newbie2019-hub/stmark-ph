<template>
  <div>
    <!-- Delete alert modal -->
    <div
      class="modal fade"
      id="deleteModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Delete Confirmation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{getDeleteModalObj.msg}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger" @click="deleteData">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      isDeleting: false,
    };
  },
  methods: {
    async deleteData() {
      this.isDeleting = true;
      const res = await this.callApi(
        this.getDeleteModalObj.method,
        this.getDeleteModalObj.deleteUrl
      );

      if (res.status == 200) {
        this.success(this.getDeleteModalObj.successMsg);
        this.$store.commit("setDeleteModal", true);
      } else {
        this.swr();
        this.$store.commit("setDeleteModal", false);
      }
      this.isDeleting = false;
    },
    closeModal() {
      this.$store.commit("setDeleteModal", false);
    },
  },
  computed: {
    ...mapGetters(["getDeleteModalObj"]),
  },
};
</script>

