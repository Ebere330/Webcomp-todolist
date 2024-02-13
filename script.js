// const template = document.createElement('template');
// template.innerHTML = `
// <style>
//     :host {
//         background-color: #E5E5F5;
//         display: block;
//         height: 150vh;
//     }
//     .frame {
//         background-color: #fff;
//         width: 30%;
//         margin: 50px auto;
//         position: absolute;
//         left: 30%;
//         padding: 50px;
//     }
//     img {
//         width: 40px;
//     }

//     h3 {
//         display: flex;
//         align-items: center;
//         align-content: center;
//         // margin: 35px;
//         color: #E5E5F5;
//         // margin-left:0px;
//         // padding: 50px;
//     }

//     .btn {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         align-content: center;
//     }

//     .plus {
//         border-radius:50%;
//         border: 2px solid #E5E5F5;
//         background-color: transparent;
//         color: #E5E5F5;
//         font-size:larger;
//         height: 40px;
//         width: 40px;
//     }

//     .half {
//         width: 100%;
//         border-radius: 20px;
//         height: 20px;
//         border: 2px solid #E5E5F5;
//     }

//     .half .progress {
//         width:33%;
//         background-color: #E5E5F5;
//         border-radius: 20px;
//         height: 20px;
//     }

//     .percent {
//         color: #E5E5F5;
//         text-align: center;
//         margin-left:140px;
//     }

//     h4 img {
//         width: 20px;
//     }

//     h4 {
//         // justify-content: space-between;
//         align-items: center;
//         display: flex;
//         padding: 10px;
//         gap: 20px;
//     }

//     .wrapper {
//         border-top: 3px solid #E5E5F5;
//         background-color: red;
        

//     }

//     .wrapper .yellow {
//         background-color: yellow;
//         border-radius: 20px;
//         padding: 10px;
//         width: 25%;
//         border: none;
//         // justify-content: space-between;
//     }

//     .wrapper .green {
//         background-color: #B5EA81;
//         border-radius: 20px;
//         padding: 10px;
//         width: 25%;
//         border: none;
        
//     }

//     .wrapper .yellGreen {
//         display: flex;
//         justify-content: space-evenly;
//     }

  

// </style>
// <div>
//     <div class="frame">
//         <h3><img src="./img/leftArrow1.png"> Back to lists</h3>
//         <div class="btn">
//             <h1>TODAY</h1>
//             <button class="plus">+</button>
//         </div>
//         <div class="half">
//             <div class="progress"></div>

//         </div>
//         <h3 class="percent">33% Complete</h3>
//         <h4><img src="./img/tickImage.jpeg">Meditation</h4>
//         <h4><img src="./img/borderCircle.jpeg">pick up Anna</h4>
//         <h4><img src="./img/borderCircle.jpeg">set up meeting with Jay</h4>
//         <h4><img src="./img/borderCircle.jpeg">Finish Daily Ui</h4>
//         <h4><img src="./img/borderCircle.jpeg">Sceond edits on articles</h4>
//         <h4><img src="./img/tickImage.jpeg">Email Chris</h4>
//         <div class="wrapper">
//             <h4>Pull from recurring lists</h4>
            
//             <div class="yellGreen">  
//              <button class="yellow">Daily</button>
//              <button class="green">Weekly</button
//             </div>
//                 <br>
//             <div class="peachPle">  
//             <button class="peach">Monthly</button>
//             <button class="purple">Occasional</button
//            </div>
                   
                
            
//         </div>
//     </div>
// </div>
// `
class Todo extends HTMLElement {
    static name = 'to-do';
    constructor() {
        super();
        this.shadow = this.attachShadow({mode:'open'});
        
    }
    static create() {
        customElements.define(this.name, this);
    }
}
