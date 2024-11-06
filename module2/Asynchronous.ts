{

    type Todo = {
        id: number;
        userId:number;
        title:string;
        completed:boolean
   }
    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json();
        //console.log(data)
        return data
    }
    getTodo()


    type Something = {something: string}

    const createPromise = ():Promise<Something> =>{
        return new Promise<Something>((resolve , reject)=>{
            const data : Something = {something: "something"}
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }

    const showData = async() : Promise<Something> =>{
        const data : Something = await createPromise();
        return data
    }

    showData();
}