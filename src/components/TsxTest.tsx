type nameT=[string,number];
type personT ={name:string;age:number;}; //타입선언시 쉼표가 아니라 세미콜론으로 구분해야함.
//오브젝트의 경우는 타입보다 인터페이스를 더 많이 씀

//컴포넌트는 함수, 함수는 인수를받음 , 인수타입선언 리턴타입선언필요. 인수를 프롭스로 받는데 프롭스는 오브젝트의 구조분해할당으로 받음. 
//오브젝트는 인터페이스로 타입선언을 주로 함.
interface personTy {name:string;age:number;} //= 쓰면안됨
export default function TsxTest() {
    
    let name:string = "PNU";
    let age :number = 20;
    let names :string[]= ['Kim','Lee'];   

    let ages :Array<number>=[17,31];

    let nameTuple1:[string,number] = ['Kim' ,10];
    let nameTuple2:[string,number] = ['Kim2' ,102];
    
    let nameTuple3:nameT = ['Kim' ,10];
    let nameTuple4:nameT = ['Kim2' ,102];

    let person1 :{name:string , age:number}={name:'kim',age:10}

    let person2 :personT={name:'tim',age:120}
    let person3 :personTy={name:'dim',age:210}


    //함수 타입 선언. 
    // //함수도 타입을 명시해줘야함. 함수에서 리턴되는걸 인수 뒤에 타입을 적어줘야하지만 ,리턴되는게 없을경우 , 보이드일경우엔 생략가능
    const handleClick = ():void=>{
      alert("Hello");
    } 
    //리턴이없고 인수가 없을때. 보이드는 생략가능

    const handleClick2 = (name:string):void=>{
      alert(`${name}님 안녕하세요.`);
    }//받는 인수가 있을때 . 리턴은없음

    const handleClick3 = (name:string):void=>{
      const s:string = helloStr(name);
      alert(s);
    }
    //받는 인수가 있고 리턴이 없는경우

    const helloStr = (name : string):string=>{
      //네임을 스트링으로 받음, 리턴도 스틩으로.
      return `${name}님 안녕하세요.`;
    }
    //받는 인수가 있고 리턴도 있는 경우 . 둘다 타입을 선언해야함.
 return (
    <div>
      <ul>
        <li>
            이름 : {name} ,
            나이 : {age}
        </li>
        <li>
           이름 : {names.map((item:string,idx:number) => <span key={`item${idx}`}>{item},</span>)}
           나이 : {ages.map((item:number,idx:number)=><span key={`item${idx}`}>{item},</span>)}
            
        </li>
        <li>
        이름:{nameTuple1[0]}
        나이:{nameTuple1[1]}
        </li>
        <li>
        이름:{nameTuple2[0]}
        나이:{nameTuple2[1]}
        </li>
        <li>
        이름:{nameTuple3[0]}
        나이:{nameTuple3[1]}
        </li>
        <li>
        이름:{nameTuple4[0]}
        나이:{nameTuple4[1]}
        </li>
        <li>
          이름:{person1.name}
          나이:{person1.age}
        </li>
        <li>
          이름:{person2.name}
          나이:{person2.age}
        </li>
        <li>
          이름:{person3.name}
          나이:{person3.age}
        </li>
      </ul>
      <div className="grid grid-cols-3">
        <button onClick={handleClick}
        className="p-1 bg-amber-200 cursor-pointer font-black hover:bg-amber-300 rounded-xl">함수예제1</button>
        <button onClick={()=>{handleClick2('kim')}}
        className="p-1 bg-amber-200 cursor-pointer font-black hover:bg-amber-300 rounded-xl">함수예제2</button>
        <button onClick={()=>{handleClick3('kddim')}}
        className="p-1 bg-amber-200 cursor-pointer font-black hover:bg-amber-300 rounded-xl">함수예제3</button>
      </div>
    </div>
  )
}
