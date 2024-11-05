{
    //*******Nullable type*******
    const searchName = (value: string | null) => {
        if(value){
            console.log("Searching")
        }
        else{
            console.log("No Searching")
        }
    }
    searchName(null)

    //*******Unknown type*******
    const getSpeedInMeterPerSecond=(value:unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/36;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }

        else if(typeof value === 'string'){
            const [val, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(val) * 1000) / 36;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }

        else{
             console.log('wrong number')
        }
    }
    getSpeedInMeterPerSecond(1000)
    getSpeedInMeterPerSecond("1000 kmh^-1")


    //*******Never type*******
    const throwError = (msg: string):never =>{
        throw new Error(msg)
    }

    throwError('Muskil se galti hogaya')
}