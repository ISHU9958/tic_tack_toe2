const h1 = document.querySelector("h1");

const addheading = (index) => {

    const str = "WELCOME YOU IN TIC TAC TOE!";
    if(index<str.length){
        h1.innerHTML+=str[index];
        index++;
        setTimeout(()=>{
            addheading(index);
        },100)
    }

}

addheading(0);


const winningcond={
    1:[[2,3],[4,7],[5,9]],
    2:[[1,3],[5,8]],
    3:[[1,2],[6,9],[5,7]],
    4:[[1,7],[5,6]],
    5:[[2,8],[4,6],[1,9],[3,7]],
    6:[[3,9],[4,5]],
    7:[[1,4],[8,9],[3,5]],
    8:[[7,9],[2,5]],
    9:[[3,6],[7,8],[1,5]]
}

const arr=['','','','','','','','','',''];
const h2=document.querySelector("h2");
let boxct=0;
const winning=(index)=>{
    for(let it of winningcond[index]){
        let u=it[0];
        let v=it[1];

        if(arr[u]===arr[v] && arr[u]===arr[index]){
            return true;
        }
    }

    if(boxct===9){
        h2.innerHTML=`Try Again match is tie`
    }
    return false;
}

const clicksound=new Audio('mouseclick.mp3')

const box1=document.querySelector('#box1');
const box2=document.querySelector('#box2');
const box3=document.querySelector('#box3');
const box4=document.querySelector('#box4');
const box5=document.querySelector('#box5');
const box6=document.querySelector('#box6');
const box7=document.querySelector('#box7');
const box8=document.querySelector('#box8');
const box9=document.querySelector('#box9');
const turnofwhich=document.querySelector('.turn');

var Turn=1; // 1--> x   0--->0 

turnofwhich.innerText=`Turn of ${'X'}`;

box1.addEventListener('click',(e)=>{
    clicksound.play();
    
    if(Turn ===1){
        box1.innerText='X';

        arr[1]='X';
    }
    else{
        box1.innerText='0';
        arr[1]='0';
    }

    if(winning(1)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }


})
box2.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box2.innerText='X';

        arr[2]='X';
    }
    else{
        box2.innerText='0';

        arr[2]='0';
    }
    boxct++;

    if(winning(2)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }
})
box3.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box3.innerText='X';
 
        arr[3]='X';
    }
    else{
        box3.innerText='0';

        arr[3]='0';
    }
    boxct++;
    if(winning(3)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }

})
box4.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box4.innerText='X';

        arr[4]='X';
    }
   else{
        box4.innerText='0';

        arr[4]='0';
    }
    boxct++;

    if(winning(4)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }
})
box5.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box5.innerText='X';

        arr[5]='X';
    }
   else{
        box5.innerText='0';

        arr[5]='0';
    }
    boxct++;
    if(winning(5)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
   Turn= Turn===0 ? 1:0;
   if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }
})
box6.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box6.innerText='X';

        arr[6]='X';
    }
    else{
        box6.innerText='0';

        arr[6]='0';
    }
    boxct++;

    if(winning(6)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }

})
box7.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box7.innerText='X';
        arr[7]='X';
    }
    else{
        box7.innerText='0';
        arr[7]='0';
    }
    boxct++;
    if(winning(7)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }

})
box8.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box8.innerText='X';

        arr[8]='X';
    }
    else{
        box8.innerText='0';
        arr[8]='0';
    }
    boxct++;
    if(winning(8)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }
})
box9.addEventListener('click',(e)=>{
    clicksound.play();
    if(Turn ===1){
        box9.innerText='X';
        arr[9]='X';
    }
    else{
        box9.innerText='0';

        arr[9]='0';
    }

    boxct++;
    if(winning(9)){
        let person;
        if(Turn===0) person='0';
        else person='X';
        h2.innerText=`Congratulations ${person} win`;
    }
    Turn= Turn===0 ? 1:0;
    if(Turn ===1){
        turnofwhich.innerText=`Turn of ${'X'}`;
    }
    else{
        turnofwhich.innerText=`Turn of ${'0'}`;
    }

})


const audio=new Audio('gamestart.mp3');

const start=document.querySelector('#start');
start.addEventListener('click',()=>{
    audio.play();

});

const pause=document.querySelector('#pause');
pause.addEventListener('click',()=>{
    audio.pause();

});

