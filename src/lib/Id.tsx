let id = 0;

class Id{
  value: number;
  constructor() {
    id += 1;
    this.value = id;
  }
}

export {Id};

//用类创建Id 用法 （new Id).value


//函数封装法 就是简单  这里用函数方法就可以了

// 对象封装一个方法 ， 封装的的操作更多