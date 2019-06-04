import {fireDb} from '~/plugins/firebase.js'

const ref = fireDb.collection("test")

export default {
  get () {
    return ref.doc("todo").get()
  },
  set (document) {
    ref.doc("todo").set(document)
  }
}
