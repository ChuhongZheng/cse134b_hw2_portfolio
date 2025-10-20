// Hello World 控制台输出元素
class HelloWorldConsole extends HTMLElement {
  constructor() {
    super();
    
    // 直接向控制台输出 "Hello World!"
    console.log("Hello World!");
  }
}

// 定义新的元素
customElements.define('hello-world-console', HelloWorldConsole);