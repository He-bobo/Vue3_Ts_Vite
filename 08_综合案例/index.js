Vue.createApp({
  template:'#my-app',
  data(){
    return{
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }
  },
  watch:{
    
  },
  computed:{
    totalPrice(){
      let finalPrice=0;
      for (let book of this.books) {
        finalPrice+=book.count*book.price;
      }
      // return "￥"+ finalPrice;
      return finalPrice;

    },
     //vue3不支持过滤器了，推荐两种做法：使用计算属性|使用全局的方法 
     filterBoosks(){
       return this.books.map(item=>{
         const nerItem=Object.assign({},item)
         nerItem.price="￥"+item.price
         return nerItem;
       })
     }
  },
 
  methods:{
    increment(index){
      console.log('index: ', index);
      //通过索引值获得对象
      this.books[index].count++;
    },
    decrement(index){
      console.log('index: ', index);
      //通过索引值获得对象
     this.books[index].count--;
    },
    removeBook(index){
      this.books.splice(index,1)
    },
    formatPrice(price){
      return "￥"+price
    }
  }
}).mount('#app')