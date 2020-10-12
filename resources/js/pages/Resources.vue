<template>
    <div>
      <div class="container mt-5" style="min-height: 500px">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-8 col-lg-8">
            <h3 class="text-uppercase mb-3 mx-auto text-center" data-aos="fade-up" data-aos-duration="1400">
                <span class="header-secondary text-secondary font-weight-bold">THESE ARE THE AVAILABLE RESOURCES</span>
            </h3>
          </div>
        </div>
        <div class="row justify-content-center" id="allResources">
            <div class="col-xs-10 col-sm-6 col-md-6 col-lg-6 mt-5" v-if="!isSelected">
                <ul class="list-group list-group-flush">
                     <li class="list-group-item" v-for="(res, i) in resources" :key="i"><a href="" @click.prevent="viewResource(res)">{{res.title}}</a><br>{{res.created_at | formatDate}}</li>
                </ul>     
            </div>
            <div id="view" class="col-xs-10 col-sm-9 col-md-9 col-lg-8" v-if="isSelected">
             <h3 class="mx-auto text-center">{{data.title}}</h3>
             <div class="ql-snow">
                <div class="ql-editor">
                    <div v-html="data.content"></div>
                    <button @click.prevent="returnResources" class="btn btn-sm btn-primary mt-5"><i class="fas fa-angle-left"></i> &nbsp;Return</button>
                </div>
             </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: ['resources'],
    data() {
        return {
            data: {
                title: '',
                description: '',
                content: '',
                created_at: '',
            },
            isSelected: false,
        }
    },
    methods: {
        viewResource(res){
            this.isSelected = true
            this.data.title = res.title
            this.data.description = res.description
            this.data.content = res.content
            
        },
        returnResources(){
            this.isSelected = false
            
        }
    },
    created(){
       
    },
    
}
</script>