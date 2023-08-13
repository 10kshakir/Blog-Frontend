import Toastify from "toastify-js"
class validationHelp{
      isEmpty(value){
            if(value.length ===0){
                  return true;
            }
            return false;
      }

      errorText(text){
            Toastify({
                  text: text,
                  className: "info",
                   gravity: "top", // `top` or `bottom`
                  position: "center",
                  offset: {
                        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                      },
                  style: {
                    background: "linear-gradient(to right, #d9b880, #cc2812)",
                  },
                }).showToast();
      }
      successText(text){
            Toastify({
                  text: text,
                  className: "info",
                   gravity: "top", // `top` or `bottom`
                  position: "center",
                  offset: {
                        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                      },
                  style: {
                    background: "linear-gradient(to right, #31cc12, #09ab31)",
                  },
                }).showToast();
      }
}

export const {isEmpty,errorText,successText}=new validationHelp();