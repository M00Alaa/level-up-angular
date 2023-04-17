# Sahely

## 17/12/2022
hidded reader form in corporate events component
### activate js
```
  revolutionCreator(){
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/revcall.js';
    revScript.id = "REV_SLIDER";
    this.render.appendChild(document.body,revScript);
  }
  mainJSActivator(){
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = "MAIN_JS";
    this.render.appendChild(document.body,revScript);
  }

  ngOnDestroy(): void {
     document.getElementById('REV_SLIDER')?.remove();
     document.getElementById('MAIN_JS')?.remove();
  }
  ```