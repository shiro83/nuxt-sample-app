export const state = () => ({
  list: [
      {content: 'hogehoge', created: '2019-03-31 15:30'},
      {content: 'fugafuga', created: '2019-03-31 16:30'}
  ]
})

export const getters={
  filterList:(state) => (text) =>{
    if (!text) {return state.list}
    const todos =state.list.filter(function(x,index){
      if((x.content).indexOf(text)>=0) return true;
    })
    return todos
    // こういう書き方もできる
    // return state.list.filter(x => (x.content).indexOf(text) >= 0))
  }
}

export const mutations={
  add (state,text){
    var d =new Date()
    var fmt =d.getFullYear()
          +'-'+('00' + (d.getMonth()+1)).slice(-2)
          +'-'+('00' + d.getDate()).slice(-2)
          +' '+('00' + d.getHours()).slice(-2)
          +':'+('00' + d.getMinutes()).slice(-2)
    state.list.push({
      content:text,
      created:fmt,
      done:false,
    })
  },
  remove(state,todo){
    // 合致した配列を詰めつつ削除
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    state.list.splice(state.list.indexOf(todo),1)
  }
}