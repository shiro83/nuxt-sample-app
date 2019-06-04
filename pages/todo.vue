<template>
  <div>
    <p class="text-xs-center display-3 font-weight-medium">
      Todo
    </p>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field input label="search" outline name="findContent" v-model="findContent" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-subheader>
            Your Life
          </v-subheader>
          
          <v-container>
            <v-layout row wrap>
              <v-flex sm10>
              <v-text-field label="todo?" outline name="inputContent" v-model="inputContent" />
              </v-flex>
              <v-flex>
                <v-btn @click="addTodo()">Add</v-btn>
              </v-flex>
            </v-layout>
          </v-container>

          <v-list two-line>
            <div v-for="(todoData,index) in todoDatas">
             <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-avatar>
                  {{ index }}
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <p class="title">
                      {{todoData.content}}
                      </p></v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{todoData.created}}
                  </v-list-tile-sub-title>
                  <button @click="doneTodo(todoData)">Done</button>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputContent:'',
      findContent:'',
    }
  },
 computed: {
    todoDatas () {
      return this.$store.getters['todo/filterList'](this.findContent);
    }
  },
  methods:{
    addTodo(){
      this.$store.commit('todo/add',this.inputContent);
      this.inputContent='';
    },
    doneTodo(todo){
      this.$store.commit('todo/remove',todo);
    }
  }
}
</script>