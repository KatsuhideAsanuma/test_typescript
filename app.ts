console.log("test typescript");
const nums:number[]=[10,20,30];
const strs:string[]=["alpha","beta"];
const num2:number[]=[...nums];
num2.push(40);
console.log(num2,nums);
let tup:[string,number,number];
tup=["tt",0,2];
enum Animal{
    Cat=100,
    Dog,
    Elephant,
    Tiger
}
let g:Animal=Animal.Tiger
console.log(Animal[g])
const tools:{[index:number]:string}={};
tools[0]="mem";
tools[1000]="thon";
tools[501]="bag";
delete tools[1000]
console.log(tools)
let sn:string|boolean=true;
sn="binbin";
let sns:(string|number)[]=["dik",0,0,"ff"];
console.log(sns)
let d:unknown='100';
let len=(d as string).length
function unknownTest(i:unknown){
    if (typeof i==="string"){
        console.log(i.toLowerCase());
    }else if(typeof i==="number"){
        console.log(i+10);
    }else if(typeof i==="boolean"){
        console.log(!i)
    }
}
unknownTest("milk")
unknownTest(20)
unknownTest(true)