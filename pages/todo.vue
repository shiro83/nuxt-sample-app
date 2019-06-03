<template>
  <div>
    <p class="text-xs-center display-3 font-weight-medium">
      Todo
    </p>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-subheader>
            Your Life
          </v-subheader>
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
 computed: {
    todoDatas () {
      return this.$store.state.todo.list
    }
  }
}
</script>